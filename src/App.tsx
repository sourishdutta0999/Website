import { motion, useScroll, useTransform } from "motion/react";
import { Code, Palette, Wand2, Zap, Mail, Github, Linkedin, Twitter } from "lucide-react";
import { InteractiveHero } from "./components/InteractiveHero";
import { ProjectCard } from "./components/ProjectCard";
import { SkillOrb } from "./components/SkillOrb";
import { SectionTransition } from "./components/SectionTransition";
import { MouseFollower } from "./components/MouseFollower";
import { GlitchText } from "./components/GlitchText";
import { Button } from "./components/ui/button";
import { Card } from "./components/ui/card";
import { MorphingBlob } from "./components/MorphingBlob";

const projects = [
  {
    title: "Digital Art Gallery",
    description: "An immersive 3D gallery showcasing digital artwork with WebGL",
    image: "https://images.unsplash.com/photo-1700605295381-7c2c3dcf1554?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwYXJ0JTIwaWxsdXN0cmF0aW9ufGVufDF8fHx8MTc2MTI1MzkyM3ww&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["WebGL", "React", "3D"]
  },
  {
    title: "Abstract Design System",
    description: "A comprehensive design system with animated components",
    image: "https://images.unsplash.com/photo-1751136740272-6d0a952ca9f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGNvbG9yZnVsJTIwZGVzaWdufGVufDF8fHx8MTc2MTI0MjM4MXww&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["Design", "UI/UX", "Animation"]
  },
  {
    title: "Creative Portfolio",
    description: "Interactive portfolio with smooth animations and transitions",
    image: "https://images.unsplash.com/photo-1598620617148-c9e8ddee6711?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHBvcnRmb2xpbyUyMG1vY2t1cHxlbnwxfHx8fDE3NjEyODc4Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["React", "Motion", "Creative"]
  },
  {
    title: "Modern Web Experience",
    description: "Cutting-edge web app with smooth animations and micro-interactions",
    image: "https://images.unsplash.com/photo-1677214467820-ab069619bbb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBkZXNpZ258ZW58MXx8fHwxNzYxMjI3OTQ4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["TypeScript", "Motion", "UX"]
  },
  {
    title: "Brand Identity System",
    description: "Complete branding package with logo, colors, and guidelines",
    image: "https://images.unsplash.com/photo-1613462537927-5e50fb73bdf0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGJyYW5kaW5nfGVufDF8fHx8MTc2MTI4ODM0OHww&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["Branding", "Design", "Strategy"]
  },
  {
    title: "Creative Workspace",
    description: "Collaborative design tool for creative teams",
    image: "https://images.unsplash.com/photo-1510832758362-af875829efcf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGRlc2lnbiUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NjEyNzEzNDF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["Collaboration", "Design", "Tools"]
  }
];

const skills = [
  { icon: Code, label: "Development", level: 99, color: "bg-gradient-to-br from-cyan-500 to-cyan-700" },
  { icon: Palette, label: "Design", level: 95, color: "bg-gradient-to-br from-teal-500 to-teal-700" },
  { icon: Wand2, label: "Creativity", level: 100, color: "bg-gradient-to-br from-emerald-500 to-emerald-700" },
  { icon: Zap, label: "Innovation", level: 92, color: "bg-gradient-to-br from-amber-500 to-amber-700" }
];

export default function App() {
  const { scrollYProgress } = useScroll();
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    ["#000000", "#083344", "#134e4a", "#064e3b", "#000000"]
  );

  const handleExplore = () => {
    window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
  };

  return (
    <motion.div 
      className="min-h-screen text-white overflow-x-hidden"
      style={{ backgroundColor }}
    >
      <MouseFollower />
      
      {/* Hero Section */}
      <InteractiveHero onExplore={handleExplore} />

      {/* About Section */}
      <SectionTransition className="py-20 px-4 relative overflow-hidden">
        <MorphingBlob 
          color="bg-cyan-600" 
          position={{ top: "0%", right: "0%" }}
          delay={0}
        />
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <motion.h2
              className="text-white mb-6 text-5xl md:text-6xl"
              initial={{ opacity: 0, rotateX: -90 }}
              whileInView={{ opacity: 1, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <GlitchText className="inline-block bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400 bg-clip-text text-transparent">
                About Me
              </GlitchText>
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
                I'm a creative professional passionate about crafting beautiful digital experiences. 
                With expertise in design and development, I bring ideas to life through thoughtful 
                interfaces and engaging interactions. Every project is an opportunity to push boundaries
                and create something extraordinary.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </SectionTransition>

      {/* Skills Section */}
      <SectionTransition className="py-20 px-4 relative overflow-hidden">
        <MorphingBlob 
          color="bg-teal-600" 
          position={{ bottom: "0%", left: "0%" }}
          delay={2}
        />
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.h2
              className="text-white mb-4 text-5xl md:text-6xl"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", duration: 0.8 }}
            >
              <span className="bg-gradient-to-r from-teal-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                Skills & Expertise
              </span>
            </motion.h2>
            <motion.p
              className="text-gray-400"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              Hover to reveal proficiency levels
            </motion.p>
          </motion.div>

          <div className="flex justify-center items-center gap-16 flex-wrap mt-16">
            {skills.map((skill, index) => (
              <SkillOrb
                key={`skill-${skill.label}`}
                icon={skill.icon}
                label={skill.label}
                level={skill.level}
                color={skill.color}
                index={index}
              />
            ))}
          </div>
        </div>
      </SectionTransition>

      {/* Projects Section */}
      <SectionTransition className="py-20 px-4 relative overflow-hidden">
        <MorphingBlob 
          color="bg-emerald-600" 
          position={{ top: "50%", right: "10%" }}
          delay={4}
        />
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <motion.h2
              className="text-white mb-4 text-5xl md:text-6xl"
              initial={{ opacity: 0, letterSpacing: "0.5em" }}
              whileInView={{ opacity: 1, letterSpacing: "normal" }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
                Featured Projects
              </span>
            </motion.h2>
            <motion.p
              className="text-gray-400"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              A selection of my recent work
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard
                key={`project-${project.title}`}
                {...project}
                index={index}
              />
            ))}
          </div>
        </div>
      </SectionTransition>

      {/* Contact Section */}
      <SectionTransition className="py-20 px-4 relative overflow-hidden">
        <MorphingBlob 
          color="bg-cyan-600" 
          position={{ bottom: "10%", left: "50%" }}
          delay={6}
        />
        <MorphingBlob 
          color="bg-amber-500" 
          position={{ top: "10%", right: "30%" }}
          delay={8}
        />
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.h2
              className="text-white mb-4 text-5xl md:text-6xl"
              initial={{ opacity: 0, scale: 0.5, rotateZ: -10 }}
              whileInView={{ opacity: 1, scale: 1, rotateZ: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", duration: 0.8 }}
            >
              <span className="bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400 bg-clip-text text-transparent">
                Let's Connect
              </span>
            </motion.h2>
            <motion.p
              className="text-gray-400 mb-12 text-lg"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              Ready to collaborate on something amazing?
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, type: "spring" }}
            >
              <Card className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-xl border-gray-700 p-8 relative overflow-hidden">
                <motion.div
                  className="absolute inset-0 opacity-30"
                  animate={{
                    background: [
                      "radial-gradient(circle at 0% 0%, #06b6d4 0%, transparent 50%)",
                      "radial-gradient(circle at 100% 100%, #14b8a6 0%, transparent 50%)",
                      "radial-gradient(circle at 0% 100%, #10b981 0%, transparent 50%)",
                      "radial-gradient(circle at 100% 0%, #06b6d4 0%, transparent 50%)",
                      "radial-gradient(circle at 0% 0%, #06b6d4 0%, transparent 50%)",
                    ],
                  }}
                  transition={{ duration: 10, repeat: Infinity }}
                />
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative z-10"
                >
                  <Button
                    className="bg-gradient-to-r from-cyan-600 to-teal-600 hover:from-cyan-700 hover:to-teal-700 text-white mb-8 px-8 py-6 text-lg shadow-lg shadow-cyan-500/30"
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    Get In Touch
                  </Button>
                </motion.div>

                <div className="flex justify-center gap-6 relative z-10">
                  {[
                    { icon: Github, href: "#", name: "Github" },
                    { icon: Linkedin, href: "#", name: "Linkedin" },
                    { icon: Twitter, href: "#", name: "Twitter" },
                  ].map((social, idx) => (
                    <motion.a
                      key={`social-${social.name}`}
                      href={social.href}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.7 + idx * 0.1 }}
                      whileHover={{ 
                        scale: 1.2, 
                        rotate: [0, -10, 10, 0],
                        transition: { duration: 0.3 }
                      }}
                      whileTap={{ scale: 0.9 }}
                      className="text-gray-400 hover:text-cyan-400 transition-colors"
                    >
                      <social.icon className="w-6 h-6" />
                    </motion.a>
                  ))}
                </div>

                <motion.p
                  className="text-gray-500 text-sm mt-8 relative z-10"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1 }}
                >
                  contact@portfolio.com
                </motion.p>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </SectionTransition>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-gray-800 relative">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto text-center text-gray-500 text-sm"
        >
          <motion.p
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{ duration: 5, repeat: Infinity }}
            style={{
              backgroundSize: "200% 200%",
            }}
            className="bg-gradient-to-r from-cyan-500 via-teal-500 to-emerald-500 bg-clip-text text-transparent"
          >
            © 2025 Creative Portfolio. Built with passion and precision.
          </motion.p>
        </motion.div>
      </footer>
    </motion.div>
  );
}
