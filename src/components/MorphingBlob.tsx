import { motion } from "motion/react";

interface MorphingBlobProps {
  color: string;
  delay?: number;
  position: { top?: string; bottom?: string; left?: string; right?: string };
}

export function MorphingBlob({ color, delay = 0, position }: MorphingBlobProps) {
  return (
    <motion.div
      className={`absolute w-96 h-96 ${color} rounded-full blur-3xl opacity-30`}
      style={position}
      animate={{
        scale: [1, 1.2, 0.8, 1],
        x: [0, 50, -50, 0],
        y: [0, -50, 50, 0],
        rotate: [0, 90, 180, 270, 360],
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        delay: delay,
        ease: "easeInOut",
      }}
    />
  );
}
