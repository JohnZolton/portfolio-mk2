
export function TechList() {
  return (
    <div className="bg-slate-600 py-3 px-5 m-1 max-w-xl">
        <div>Tech Stacks</div>
        <T3Stack/>
    </div>
  );
};

export default TechList;


function T3Stack(){
return(
        <div>
            <div>T3-Stack</div>
            <ul className="list-disc">
            <li>Next Js</li>
            <li>Prisma</li>
            <li>tRPC</li>
            <li>TypeScript</li>
            <li>React</li>
            <li>Tailwind</li>
            </ul>
        </div>

)
}