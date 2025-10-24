import { motion } from "motion/react";
import { ReactNode } from "react";

interface SectionTransitionProps {
  children: ReactNode;
  className?: string;
}

export function SectionTransition({ children, className = "" }: SectionTransitionProps) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className={className}
    >
      {children}
    </motion.section>
  );
}
