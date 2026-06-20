import NavBar from "./components/navbar";
import CyberpunkBackground from "./components/cyberpunk-bg";
import Image from "next/image";

function Murph() {
  const imageFiles = [
    "img9.png",
    "img7.jpg",
    "img5.jpg",
    "img1.jpg",
    "img2.png",
    "img6.jpg",
    "img3.png",
  ];

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#06060a] font-mono text-white">
      <CyberpunkBackground />
      <div className="relative z-10 flex flex-col">
        <NavBar />
        <div className="mx-auto w-full max-w-5xl px-4 py-8">
          <h1 className="mb-8 text-center font-mono text-4xl font-black tracking-tight text-white/90">
            Meet Murph
          </h1>
          <div className="columns-1 gap-6 sm:columns-2 md:columns-3">
            {imageFiles.map((image, index) => (
              <Image
                src={`/murph/${image}`}
                alt={image}
                width={300}
                height={200}
                objectFit="cover"
                className="mb-6 w-full transform overflow-hidden rounded-xl border border-white/10 transition-transform duration-500 ease-in-out hover:scale-105 hover:border-cyan-400/40"
                key={index}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

export default Murph;
