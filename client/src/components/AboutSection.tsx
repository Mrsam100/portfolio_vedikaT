import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="about" className="min-h-screen flex items-center py-20" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 neon-text text-[hsl(320,100%,50%)]">
              About Me
            </h2>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              I'm a passionate creative designer with over 5 years of experience crafting visual experiences that tell compelling stories. My work spans across digital design, branding, and interactive media.
            </p>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              I believe in the power of design to transform ideas into impactful visual narratives. Every project is an opportunity to push creative boundaries and deliver extraordinary results.
            </p>
            <div className="flex space-x-4">
              <motion.i
                className="fab fa-instagram text-2xl text-[hsl(200,100%,50%)] hover:text-[hsl(320,100%,50%)] transition-colors cursor-pointer"
                whileHover={{ scale: 1.2 }}
                data-interactive="true"
              />
              <motion.i
                className="fab fa-behance text-2xl text-[hsl(200,100%,50%)] hover:text-[hsl(320,100%,50%)] transition-colors cursor-pointer"
                whileHover={{ scale: 1.2 }}
                data-interactive="true"
              />
              <motion.i
                className="fab fa-dribbble text-2xl text-[hsl(200,100%,50%)] hover:text-[hsl(320,100%,50%)] transition-colors cursor-pointer"
                whileHover={{ scale: 1.2 }}
                data-interactive="true"
              />
              <motion.i
                className="fab fa-linkedin text-2xl text-[hsl(200,100%,50%)] hover:text-[hsl(320,100%,50%)] transition-colors cursor-pointer"
                whileHover={{ scale: 1.2 }}
                data-interactive="true"
              />
            </div>
          </motion.div>
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img
              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400"
              alt="Creative workspace with design tools"
              className="rounded-lg shadow-2xl w-full"
            />
            <motion.div
              className="absolute -top-4 -right-4 w-24 h-24 bg-[hsl(150,100%,50%)] rounded-full opacity-20"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <motion.div
              className="absolute -bottom-4 -left-4 w-32 h-32 bg-[hsl(320,100%,50%)] rounded-full opacity-20"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
