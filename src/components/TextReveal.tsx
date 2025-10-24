import { motion } from "motion/react";
import { ReactNode } from "react";

interface TextRevealProps {
  children: ReactNode;
  delay?: number;
}

export function TextReveal({ children, delay = 0 }: TextRevealProps) {
  const text = typeof children === 'string' ? children : '';
  const words = text.split(' ');

  return (
    <div className="overflow-hidden">
      {words.map((word, i) => (
        <motion.span
          key={i}
          className="inline-block mr-2"
          initial={{ y: 100, opacity: 0, rotateX: -90 }}
          animate={{ y: 0, opacity: 1, rotateX: 0 }}
          transition={{
            delay: delay + i * 0.1,
            duration: 0.8,
            ease: [0.6, 0.05, 0.01, 0.9],
          }}
        >
          {word}
        </motion.span>
      ))}
    </div>
  );
}
