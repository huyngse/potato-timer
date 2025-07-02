import React, { useEffect, useState } from "react";
import image from "@/assets/hand-hold-pen-writing-isolated-png.webp";

interface MouseFollowerProps {
  offsetX?: number;
  offsetY?: number;
}

const MouseFollower: React.FC<MouseFollowerProps> = ({
  offsetX = 0,
  offsetY = 0,
}) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({
        x: e.clientX + offsetX,
        y: e.clientY + offsetY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [offsetX, offsetY]);

  return (
    <img
      className="fixed pointer-events-none z-50 history"
      src={image}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: "translate(-50%, -50%)",
      }}
    />
  );
};

export default MouseFollower;
