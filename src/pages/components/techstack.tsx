import StackDisplay from "./stackdisplay";

export function TechList() {
  return (
    <div className="my-3">
      <div className="my-3 text-center text-3xl font-semibold">Tech Stack</div>
      <div className="m-1  rounded-2xl bg-cyan-950 px-5 py-3 text-lg">
        <div>The T3-Stack</div>
        <StackDisplay stack="Next Js, React, TypeScript, tRPC, Prisma, Tailwind, Clerk" />
        <div>
          <div>Languages</div>
          <StackDisplay stack="TypeScript, JavaScript, Python, HTML, CSS, Rust" />
        </div>
        <div>
          <div>Frameworks</div>
          <StackDisplay stack="Next Js, React, Actix-web, Yew, Django, Flask" />
        </div>
      </div>
    </div>
  );
}

export default TechList;
