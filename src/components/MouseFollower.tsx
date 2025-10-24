import { useEffect, useState } from "react";
import { motion } from "motion/react";

export function MouseFollower() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'BUTTON' || target.tagName === 'A' || target.closest('button') || target.closest('a')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <>
      <motion.div
        className="fixed w-6 h-6 rounded-full border-2 border-cyan-400 pointer-events-none z-50 mix-blend-difference"
        style={{
          boxShadow: "0 0 20px rgba(6, 182, 212, 0.5)",
        }}
        animate={{
          x: mousePosition.x - 12,
          y: mousePosition.y - 12,
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{ type: "spring", damping: 30, stiffness: 400 }}
      />
      <motion.div
        className="fixed w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-teal-400 pointer-events-none z-50 mix-blend-difference"
        style={{
          boxShadow: "0 0 10px rgba(6, 182, 212, 0.8)",
        }}
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
        }}
        transition={{ type: "spring", damping: 10, stiffness: 200 }}
      />
    </>
  );
}
