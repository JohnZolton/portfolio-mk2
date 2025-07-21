import { useState, useEffect } from "react";

interface NostrEvent {
  id: string;
  pubkey: string;
  created_at: number;
  content: string;
  // Add other properties as needed
}

interface Note {
  event: NostrEvent;
  pow: number;
}

function isNostrEvent(obj: unknown): obj is NostrEvent {
  return (
    typeof obj === "object" &&
    obj !== null &&
    "id" in obj &&
    typeof (obj as NostrEvent).id === "string" &&
    "pubkey" in obj &&
    typeof (obj as NostrEvent).pubkey === "string" &&
    "created_at" in obj &&
    typeof (obj as NostrEvent).created_at === "number" &&
    "content" in obj &&
    typeof (obj as NostrEvent).content === "string"
  );
}

const Powstr = () => {
  const [notes, setNotes] = useState<Note[]>([]);

  // calculate leading-zero bits
  const measureDifficulty = (idHex: string): number => {
    const bytes = Uint8Array.from(Buffer.from(idHex, "hex"));
    let bits = 0;
    for (const b of bytes) {
      if (b === 0) {
        bits += 8;
        continue;
      }
      bits += Math.clz32(b) - 24; // count leading zeros in byte
      break;
    }
    return bits;
  };

  useEffect(() => {
    const relayInit = (url: string) => {
      const ws = new WebSocket(url);
      return {
        ws,
        url,
        sub(
          filters: { kinds: number[]; limit: number }[],
          { verb }: { verb?: string }
        ) {
          const subId = Math.random().toString(36).substr(2, 9);
          const message = [verb || "REQ", subId, ...filters];
          ws.send(JSON.stringify(message));
          return {
            on(
              event: "event" | "eose",
              callback: (data: NostrEvent | string) => void
            ) {
              if (event === "event") {
                const handleEvent = (e: MessageEvent) => {
                  try {
                    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                    const data = e.data;
                    if (typeof data !== "string") {
                      console.error("Received non-string message data");
                      return;
                    }
                    const parsed = JSON.parse(data) as [
                      string,
                      string,
                      unknown
                    ];
                    if (!Array.isArray(parsed)) {
                      console.error("Received non-array message");
                      return;
                    }
                    if (parsed.length < 3) {
                      console.error("Received array with insufficient length");
                      return;
                    }
                    const [type, id, event] = parsed as [
                      string,
                      string,
                      unknown
                    ];
                    if (
                      type !== "EVENT" ||
                      typeof id !== "string" ||
                      id !== subId
                    ) {
                      return;
                    }
                    if (typeof event !== "object" || event === null) {
                      console.error("Received non-object event");
                      return;
                    }
                    if (isNostrEvent(event)) {
                      callback(event);
                    } else {
                      console.error("Received event with invalid structure");
                    }
                  } catch (error) {
                    console.error("Error parsing message:", error);
                  }
                };
                ws.addEventListener("message", handleEvent);
              } else if (event === "eose") {
                const handleEOSE = (e: MessageEvent) => {
                  try {
                    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                    const data = e.data;
                    if (typeof data !== "string") {
                      console.error("Received non-string message data");
                      return;
                    }
                    const parsed = JSON.parse(data) as unknown[];
                    if (!Array.isArray(parsed)) {
                      console.error("Received non-array message");
                      return;
                    }
                    if (parsed.length < 2) {
                      console.error("Received array with insufficient length");
                      return;
                    }
                    const [type, id] = parsed as [string, string];
                    if (
                      type === "EOSE" &&
                      typeof id === "string" &&
                      id === subId
                    ) {
                      callback("eose");
                    }
                  } catch (error) {
                    console.error("Error parsing message:", error);
                  }
                };
                ws.addEventListener("message", handleEOSE);
              }
            },
            unsub() {
              ws.send(JSON.stringify(["CLOSE", subId]));
            },
          };
        },
        on(event: "connect" | "error", callback: () => void) {
          if (event === "connect") {
            ws.addEventListener("open", callback);
          } else if (event === "error") {
            ws.addEventListener("error", callback);
          }
        },
        connect() {
          return new Promise((resolve, reject) => {
            ws.addEventListener("open", resolve);
            ws.addEventListener("error", reject);
          });
        },
      };
    };

    const main = async () => {
      const relay = relayInit("wss://relay.damus.io");
      await relay.connect();

      relay.on("connect", () => console.log("Connected to relay"));
      relay.on("error", () => console.error("Relay error"));

      const sub = relay.sub([{ kinds: [1], limit: 50 }], { verb: "REQ" });

      const localNotes: Note[] = [];

      sub.on("event", (data: NostrEvent | string) => {
        if (typeof data !== "string") {
          const pow = measureDifficulty(data.id);
          localNotes.push({ event: data, pow });
          localNotes.sort((a, b) => b.pow - a.pow);
          setNotes([...localNotes]);
        }
      });
      sub.on("eose", (data: string | NostrEvent) => {
        if (typeof data === "string") {
          console.log("Finished loading");
        }
      });
    };

    main().catch(console.error);
  }, []);

  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      <h1 className="mb-2 text-5xl font-bold text-gray-900">Powstr</h1>
      <h1 className="mb-2 text-2xl font-bold text-gray-900">
        Nostr Notes Sorted by PoW
      </h1>

      <ul id="notes" className="space-y-4">
        {notes.map(({ event, pow }, index) => (
          <li
            key={index}
            className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm"
          >
            <div className="mb-2 font-bold text-blue-600">PoW: {pow}</div>
            <div className="mb-2 text-sm text-gray-600">
              <strong className="text-gray-900">
                {event.pubkey.substring(0, 8)}...
              </strong>{" "}
              @ {new Date(event.created_at * 1000).toLocaleString()}
            </div>
            <div className="whitespace-pre-wrap text-gray-800">
              {event.content}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Powstr;
