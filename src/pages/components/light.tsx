import React, { useState, useEffect } from "react";

const Light: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className="fixed h-96 w-96 rounded-full bg-slate-500"
      style={{
        top: position.y - 190,
        left: position.x - 190,
        background:
          "radial-gradient(circle, rgba(100,100,100, 0.5) 0%, rgba(0, 0, 0, 0) 70%)",
        zIndex: -1,
      }}
    />
  );
};

export default Light;
