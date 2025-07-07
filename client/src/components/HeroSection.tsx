import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.img
            src="https://images.unsplash.com/photo-1494790108755-2616b612b5bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400"
            alt="Vedika - Creative Designer"
            className="w-32 h-32 rounded-full mx-auto mb-8 border-4 border-[hsl(200,100%,50%)] glow animate-float object-cover"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>

        <motion.h1
          className="text-6xl md:text-8xl font-bold mb-6 neon-text text-[hsl(200,100%,50%)]"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          VEDIKA
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-gray-300 mb-8 font-mono"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Creative Designer & Visual Storyteller
        </motion.p>

        <motion.div
          className="flex flex-col md:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.button
            className="px-8 py-3 bg-transparent border-2 border-[hsl(320,100%,50%)] text-[hsl(320,100%,50%)] hover:bg-[hsl(320,100%,50%)] hover:text-black transition-all duration-300 glow"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            data-interactive="true"
          >
            View Portfolio
          </motion.button>
          <motion.button
            className="px-8 py-3 bg-transparent border-2 border-[hsl(150,100%,50%)] text-[hsl(150,100%,50%)] hover:bg-[hsl(150,100%,50%)] hover:text-black transition-all duration-300 glow"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            data-interactive="true"
          >
            Let's Collaborate
          </motion.button>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-20 left-20 w-20 h-20 border-2 border-[hsl(200,100%,50%)] rounded-full"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{ duration: 3, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-16 h-16 border-2 border-[hsl(320,100%,50%)] rotate-45"
        animate={{ 
          y: [0, -20, 0],
          rotate: [45, 90, 45],
        }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      <motion.div
        className="absolute top-1/2 left-10 w-12 h-12 bg-[hsl(150,100%,50%)] rounded-full"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
    </section>
  );
}
