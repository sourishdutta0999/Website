import { motion } from "motion/react";
import { useState, useEffect } from "react";

interface GlitchTextProps {
  children: string;
  className?: string;
}

export function GlitchText({ children, className = "" }: GlitchTextProps) {
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsGlitching(true);
      setTimeout(() => setIsGlitching(false), 200);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`relative inline-block ${className}`}>
      <motion.span
        className="relative z-10"
        animate={isGlitching ? {
          x: [0, -2, 2, -2, 0],
          y: [0, 2, -2, 2, 0],
        } : {}}
        transition={{ duration: 0.2 }}
      >
        {children}
      </motion.span>
      
      {isGlitching && (
        <>
          <motion.span
            className="absolute top-0 left-0 text-cyan-500 opacity-70"
            style={{ clipPath: "polygon(0 0, 100% 0, 100% 45%, 0 45%)" }}
            animate={{ x: [-2, 2, -2] }}
            transition={{ duration: 0.2, repeat: 1 }}
          >
            {children}
          </motion.span>
          <motion.span
            className="absolute top-0 left-0 text-teal-500 opacity-70"
            style={{ clipPath: "polygon(0 60%, 100% 60%, 100% 100%, 0 100%)" }}
            animate={{ x: [2, -2, 2] }}
            transition={{ duration: 0.2, repeat: 1 }}
          >
            {children}
          </motion.span>
        </>
      )}
    </div>
  );
}
