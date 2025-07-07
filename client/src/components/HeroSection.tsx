import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <motion.div
            className="text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.p
              className="text-[hsl(200,100%,50%)] text-lg mb-4 font-mono"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Welcome to my portfolio
            </motion.p>

            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <span className="text-[hsl(200,100%,50%)] neon-text">Hi, I'm </span>
              <span className="text-[hsl(200,100%,50%)] neon-text">Vedika</span>
            </motion.h1>

            <motion.h2
              className="text-2xl md:text-3xl text-gray-300 mb-6 font-semibold"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Graphic Designer
            </motion.h2>

            <motion.p
              className="text-lg text-gray-400 mb-8 leading-relaxed max-w-lg"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Creating visually stunning designs and bringing creative visions to life. 
              Specializing in brand identity, digital design, and visual storytelling 
              that leaves a lasting impression.
            </motion.p>

            <motion.div
              className="flex space-x-4 mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.button
                className="px-6 py-3 bg-transparent border-2 border-[hsl(200,100%,50%)] text-[hsl(200,100%,50%)] hover:bg-[hsl(200,100%,50%)] hover:text-black transition-all duration-300 rounded-lg glow"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                data-interactive="true"
              >
                Get In Touch
              </motion.button>
            </motion.div>

            {/* Social Icons */}
            <motion.div
              className="flex space-x-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <motion.div
                className="w-10 h-10 border-2 border-gray-600 rounded-lg flex items-center justify-center hover:border-[hsl(200,100%,50%)] hover:text-[hsl(200,100%,50%)] transition-colors cursor-pointer"
                whileHover={{ scale: 1.1 }}
                data-interactive="true"
              >
                <i className="fab fa-github text-lg"></i>
              </motion.div>
              <motion.div
                className="w-10 h-10 border-2 border-gray-600 rounded-lg flex items-center justify-center hover:border-[hsl(200,100%,50%)] hover:text-[hsl(200,100%,50%)] transition-colors cursor-pointer"
                whileHover={{ scale: 1.1 }}
                data-interactive="true"
              >
                <i className="fab fa-linkedin text-lg"></i>
              </motion.div>
              <motion.div
                className="w-10 h-10 border-2 border-gray-600 rounded-lg flex items-center justify-center hover:border-[hsl(200,100%,50%)] hover:text-[hsl(200,100%,50%)] transition-colors cursor-pointer"
                whileHover={{ scale: 1.1 }}
                data-interactive="true"
              >
                <i className="fab fa-behance text-lg"></i>
              </motion.div>
              <motion.div
                className="w-10 h-10 border-2 border-gray-600 rounded-lg flex items-center justify-center hover:border-[hsl(200,100%,50%)] hover:text-[hsl(200,100%,50%)] transition-colors cursor-pointer"
                whileHover={{ scale: 1.1 }}
                data-interactive="true"
              >
                <i className="fab fa-dribbble text-lg"></i>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right side - Circular logo */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.div
              className="relative"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <motion.div
                className="w-80 h-80 border-4 border-[hsl(200,100%,50%)] rounded-full flex items-center justify-center relative overflow-hidden glow"
                whileHover={{ scale: 1.02 }}
                data-interactive="true"
              >
                <span className="text-8xl font-bold text-[hsl(200,100%,50%)] neon-text">
                  VD
                </span>
                
                {/* Animated border effect */}
                <motion.div
                  className="absolute inset-0 border-4 border-[hsl(320,100%,50%)] rounded-full opacity-0"
                  animate={{ 
                    opacity: [0, 0.5, 0],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                />
                <motion.div
                  className="absolute inset-0 border-4 border-[hsl(150,100%,50%)] rounded-full opacity-0"
                  animate={{ 
                    opacity: [0, 0.5, 0],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-20 left-20 w-20 h-20 border-2 border-[hsl(200,100%,50%)] rounded-full opacity-20"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{ duration: 3, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-16 h-16 border-2 border-[hsl(320,100%,50%)] rotate-45 opacity-20"
        animate={{ 
          y: [0, -20, 0],
          rotate: [45, 90, 45],
        }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      <motion.div
        className="absolute top-1/2 left-10 w-12 h-12 bg-[hsl(150,100%,50%)] rounded-full opacity-20"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
    </section>
  );
}
