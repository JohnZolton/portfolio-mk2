import StackDisplay from "./stackdisplay";

export function TechList() {
  return (
    <div className="my-3">
      <div className="my-3 text-center text-3xl font-semibold">Tech Stack</div>
    <div className="m-1  bg-cyan-950 px-5 py-3 text-lg rounded-2xl">
        <div>The T3-Stack</div>
        <StackDisplay stack="Next Js, React, TypeScript, tRPC, Prisma, Tailwind, Clerk" />
      <div>
        <div>Languages</div>
        <StackDisplay stack="TypeScript, JavaScript, Python, HTML, CSS" />
      </div>
      <div>
        <div>Frameworks</div>
        <StackDisplay stack="Next Js, React, Django, Flask" />
      </div>
      </div>
    </div>
  );
}

export default TechList;
