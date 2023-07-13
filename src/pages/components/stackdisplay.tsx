

interface StackDisplayProps {
    stack: string
}
function StackDisplay({stack}:StackDisplayProps){

    const stackItems = stack.split(',')
    return(
        <div className="flex flex-row flex-wrap">
            {stackItems.map((item)=>(
                <div className="text-sm m-0.5 bg-slate-700 rounded-md p-1 truncate">{item}</div>
            ))}
        </div>
    )
}

export default StackDisplay