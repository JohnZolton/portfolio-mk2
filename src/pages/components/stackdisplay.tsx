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
        <div
          key={item}
          className="m-0.5 truncate rounded-lg bg-pink-800 p-1 text-sm"
        >
          {item}
        </div>
      ))}
    </div>
  );
}

export default StackDisplay;
