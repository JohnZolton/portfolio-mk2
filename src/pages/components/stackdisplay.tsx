import { Badge } from "~/components/ui/badge";
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
          <Badge>{item}</Badge>
        </div>
      ))}
    </div>
  );
}

export default StackDisplay;
