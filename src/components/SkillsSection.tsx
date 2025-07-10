import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const designTools = [
    { name: "Adobe Photoshop", level: 95 },
    { name: "Adobe Illustrator", level: 90 },
    { name: "Figma", level: 85 },
    { name: "After Effects", level: 80 }
  ];

  const creativeSkills = [
    { name: "Brand Identity", level: 95 },
    { name: "UI/UX Design", level: 88 },
    { name: "Typography", level: 92 },
    { name: "Motion Graphics", level: 75 }
  ];

  const SkillBar = ({ skill, delay }: { skill: { name: string; level: number }; delay: number }) => (
    <div>
      <div className="flex justify-between mb-2">
        <span>{skill.name}</span>
        <span className="text-[hsl(200,100%,50%)]">{skill.level}%</span>
      </div>
      <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
        <motion.div
          className="skill-bar h-full rounded-full"
          initial={{ width: 0 }}
          animate={isInView ? { width: `${skill.level}%` } : {}}
          transition={{ duration: 1, delay }}
        />
      </div>
    </div>
  );

  return (
    <section id="skills" className="min-h-screen flex items-center py-20" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-12 dynamic-text text-glow"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          Skills
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-6 dynamic-text">Design Tools</h3>
            <div className="space-y-4">
              {designTools.map((skill, index) => (
                <SkillBar key={skill.name} skill={skill} delay={0.3 + index * 0.1} />
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold mb-6 dynamic-text">Creative Skills</h3>
            <div className="space-y-4">
              {creativeSkills.map((skill, index) => (
                <SkillBar key={skill.name} skill={skill} delay={0.5 + index * 0.1} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
