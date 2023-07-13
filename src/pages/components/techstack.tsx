import StackDisplay from "./stackdisplay";

export function TechList() {
  return (
    <div className="bg-slate-600 py-3 px-5 m-1 max-w-xl text-lg">
        <div className="text-2xl font-semibold">Tech Stack</div>
        <div>
            <div>The T3-Stack</div>
            <StackDisplay 
            stack="Next Js, React, TypeScript, tRPC, Prisma, Tailwind, Clerk"
            />
        </div>
        <div>
            <div>Languages</div>
            <StackDisplay 
            stack="TypeScript, JavaScript, Python, HTML, CSS"
            />
        </div>
        <div>
            <div>Frameworks</div>
            <StackDisplay 
            stack="Next Js, React, Django, Flask"
            />
        </div>
    </div>
  );
};

export default TechList;
