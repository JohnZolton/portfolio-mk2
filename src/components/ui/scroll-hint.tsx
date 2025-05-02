import React from "react";
import { ScrollArea } from "./scroll-area";

interface ScrollHintProps {
  className?: string;
  children: React.ReactNode;
  height: string;
}

export const ScrollHint: React.FC<ScrollHintProps> = ({
  className,
  children,
  height,
}) => {
  return (
    <div className="relative">
      <ScrollArea className={`${height} pr-4 ${className ?? ""}`}>
        {children}
      </ScrollArea>
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
    </div>
  );
};

export default ScrollHint;
