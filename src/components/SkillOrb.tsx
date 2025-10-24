import { motion } from "motion/react";
import { LucideIcon } from "lucide-react";
import { useState } from "react";

interface SkillOrbProps {
  icon: LucideIcon;
  label: string;
  level: number;
  color: string;
  index: number;
}

export function SkillOrb({ icon: Icon, label, level, color, index }: SkillOrbProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative group"
      initial={{ opacity: 0, scale: 0, rotateY: -180 }}
      whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
      viewport={{ once: true }}
      transition={{
        delay: index * 0.2,
        duration: 0.8,
        type: "spring",
        bounce: 0.5,
      }}
      whileHover={{ scale: 1.1, rotateY: 180 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      style={{ transformStyle: "preserve-3d" }}
    >
      <motion.div
        className={`w-32 h-32 rounded-full flex items-center justify-center relative ${color} cursor-pointer`}
        animate={{
          boxShadow: [
            `0 0 20px ${color.includes('cyan') ? '#06b6d4' : color.includes('teal') ? '#14b8a6' : color.includes('emerald') ? '#10b981' : '#f59e0b'}`,
            `0 0 60px ${color.includes('cyan') ? '#06b6d4' : color.includes('teal') ? '#14b8a6' : color.includes('emerald') ? '#10b981' : '#f59e0b'}`,
            `0 0 20px ${color.includes('cyan') ? '#06b6d4' : color.includes('teal') ? '#14b8a6' : color.includes('emerald') ? '#10b981' : '#f59e0b'}`
          ]
        }}
        transition={{ duration: 2, repeat: Infinity }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front face */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center rounded-full"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(0deg) translateZ(20px)",
          }}
        >
          <Icon className="w-12 h-12 text-white drop-shadow-lg" />
        </motion.div>
        
        {/* Back face */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center rounded-full"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg) translateZ(20px)",
          }}
        >
          <div className="text-center">
            <div className="text-3xl text-white">{level}%</div>
          </div>
        </motion.div>

        {/* Rotating ring */}
        <motion.div
          className="absolute inset-0 rounded-full border-4 border-white/20"
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          style={{
            borderStyle: "dashed",
          }}
        />
      </motion.div>
      
      <motion.div 
        className="mt-4 text-center"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.2 + 0.5 }}
      >
        <motion.div
          className="text-sm text-gray-300"
          animate={isHovered ? { scale: 1.1, color: "#ffffff" } : { scale: 1 }}
        >
          {label}
        </motion.div>
      </motion.div>

      {/* Particles around orb */}
      {isHovered && (
        <>
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={`${label}-particle-${i}`}
              className="absolute w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-teal-400 shadow-lg shadow-cyan-500/50"
              initial={{
                x: 0,
                y: 0,
                scale: 0,
              }}
              animate={{
                x: Math.cos((i / 8) * Math.PI * 2) * 80,
                y: Math.sin((i / 8) * Math.PI * 2) * 80,
                scale: [0, 1, 0],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: i * 0.1,
              }}
              style={{
                left: "50%",
                top: "50%",
              }}
            />
          ))}
        </>
      )}
    </motion.div>
  );
}
