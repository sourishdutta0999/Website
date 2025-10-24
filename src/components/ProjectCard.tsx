import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { ExternalLink } from "lucide-react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useState } from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  index: number;
}

export function ProjectCard({ title, description, image, tags, index }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="cursor-pointer perspective-1000"
    >
      <Card className="overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 border-gray-700 hover:border-cyan-500/50 transition-all duration-300 relative group h-full shadow-lg hover:shadow-cyan-500/20">
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: "radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(6, 182, 212, 0.15), transparent 40%)",
          }}
        />
        
        <div className="aspect-video overflow-hidden relative">
          <motion.div
            animate={isHovered ? { scale: 1.1 } : { scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <ImageWithFallback
              src={image}
              alt={title}
              className="w-full h-full object-cover"
            />
          </motion.div>
          
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          />
          
          <motion.div
            className="absolute top-2 right-2"
            initial={{ scale: 0, rotate: -180 }}
            animate={isHovered ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
          >
            <div className="bg-gradient-to-r from-cyan-600 to-teal-600 rounded-full p-2 shadow-lg shadow-cyan-500/50">
              <ExternalLink className="w-5 h-5 text-white" />
            </div>
          </motion.div>
        </div>
        
        <div className="p-4 relative" style={{ transform: "translateZ(50px)" }}>
          <motion.h3
            className="text-white mb-2"
            animate={isHovered ? { x: 5 } : { x: 0 }}
            transition={{ duration: 0.3 }}
          >
            {title}
          </motion.h3>
          <motion.p
            className="text-gray-400 text-sm mb-3"
            animate={isHovered ? { x: 5 } : { x: 0 }}
            transition={{ duration: 0.3, delay: 0.05 }}
          >
            {description}
          </motion.p>
          <motion.div
            className="flex flex-wrap gap-2"
            animate={isHovered ? { x: 5 } : { x: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            {tags.map((tag, idx) => (
              <motion.div
                key={`${title}-tag-${idx}`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Badge variant="outline" className="bg-cyan-500/20 border-cyan-500/50 text-cyan-300 text-xs">
                  {tag}
                </Badge>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Card>
    </motion.div>
  );
}
