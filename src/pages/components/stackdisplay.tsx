interface StackDisplayProps {
  stack: string;
}
function StackDisplay({ stack }: StackDisplayProps) {
  if (!stack) {
    return <div></div>;
  }

  const stackItems = stack.split(",");
  return (
    <div className="flex flex-row flex-wrap">
      {stackItems.map((item) => (
        <div key={item} className="m-0.5 truncate text-sm">
          <span className="inline-flex items-center rounded-full border border-cyan-400/25 bg-cyan-400/5 px-2.5 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-wider text-cyan-200/90">
            {item.trim()}
          </span>
        </div>
      ))}
    </div>
  );
}

export default StackDisplay;
