import { motion, useScroll, useTransform } from "motion/react";
import { Sparkles, ArrowDown } from "lucide-react";
import { Button } from "./ui/button";
import { MorphingBlob } from "./MorphingBlob";
import { FloatingParticles } from "./FloatingParticles";
import { TextReveal } from "./TextReveal";

interface InteractiveHeroProps {
  onExplore: () => void;
}

export function InteractiveHero({ onExplore }: InteractiveHeroProps) {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.8]);
  const y = useTransform(scrollY, [0, 300], [0, 100]);

  return (
    <motion.div 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{ opacity, scale }}
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-cyan-950 to-black">
        <motion.div
          className="absolute inset-0 bg-gradient-to-tr from-teal-950/30 via-transparent to-emerald-950/30"
          animate={{
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 5, repeat: Infinity }}
        />
      </div>

      {/* Morphing blobs */}
      <MorphingBlob 
        color="bg-cyan-600" 
        position={{ top: "10%", left: "10%" }}
        delay={0}
      />
      <MorphingBlob 
        color="bg-teal-600" 
        position={{ bottom: "10%", right: "10%" }}
        delay={3}
      />
      <MorphingBlob 
        color="bg-emerald-600" 
        position={{ top: "50%", left: "50%" }}
        delay={6}
      />
      <MorphingBlob 
        color="bg-amber-500" 
        position={{ top: "30%", right: "20%" }}
        delay={9}
      />

      {/* Floating particles */}
      <FloatingParticles />

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(6, 182, 212, 0.3) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(6, 182, 212, 0.3) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }} />
      </div>
      
      {/* Animated rays */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={`ray-${i}`}
            className="absolute top-1/2 left-1/2 w-1 bg-gradient-to-t from-cyan-500/20 to-transparent"
            style={{
              height: '150%',
              transformOrigin: 'top center',
            }}
            animate={{
              rotate: [i * 30, i * 30 + 360],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <motion.div 
        className="relative z-10 text-center px-4"
        style={{ y }}
      >
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ 
            type: "spring", 
            duration: 1.5,
            bounce: 0.5 
          }}
        >
          <motion.div
            animate={{
              rotate: [0, 10, -10, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Sparkles className="w-16 h-16 text-amber-400 mx-auto mb-4 drop-shadow-[0_0_20px_rgba(251,191,36,0.8)]" />
          </motion.div>
        </motion.div>
        
        <motion.h1
          className="text-white mb-4 text-6xl md:text-8xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <TextReveal delay={0.5}>
            Creative Portfolio
          </TextReveal>
        </motion.h1>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
        >
          <p className="text-gray-300 text-xl md:text-2xl mb-8 bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400 bg-clip-text text-transparent animate-gradient">
            Crafting digital experiences through design & code
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button 
            onClick={onExplore}
            className="bg-gradient-to-r from-cyan-600 via-teal-600 to-emerald-600 hover:from-cyan-700 hover:via-teal-700 hover:to-emerald-700 text-white px-8 py-6 rounded-full relative overflow-hidden group shadow-lg shadow-cyan-500/50"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.6 }}
            />
            <span className="relative z-10 flex items-center">
              Explore My Work
              <ArrowDown className="w-4 h-4 ml-2 group-hover:translate-y-1 transition-transform" />
            </span>
          </Button>
        </motion.div>

        <motion.div
          className="mt-12"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-cyan-500 rounded-full mx-auto flex justify-center shadow-[0_0_15px_rgba(6,182,212,0.5)]">
            <motion.div
              className="w-1.5 h-3 bg-cyan-400 rounded-full mt-2 shadow-[0_0_10px_rgba(6,182,212,0.8)]"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
