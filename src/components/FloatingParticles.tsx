import { motion } from "motion/react";

export function FloatingParticles() {
  const particles = Array.from({ length: 40 }, (_, i) => ({
    id: `particle-${i}`,
    x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
    y: typeof window !== 'undefined' ? window.innerHeight + 100 : 1000,
    duration: Math.random() * 10 + 10,
    delay: Math.random() * 5,
    color: i % 4 === 0 ? "bg-cyan-400" : i % 4 === 1 ? "bg-teal-400" : i % 4 === 2 ? "bg-emerald-400" : "bg-amber-400",
    size: Math.random() * 2 + 1,
    blur: Math.random() * 20 + 10,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute"
          initial={{
            x: particle.x,
            y: particle.y,
          }}
          animate={{
            y: -100,
            x: [
              null,
              Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
            ],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "linear",
          }}
        >
          <div
            className={`rounded-full ${particle.color}`}
            style={{
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              boxShadow: `0 0 ${particle.blur}px currentColor`,
            }}
          />
        </motion.div>
      ))}
    </div>
  );
}
