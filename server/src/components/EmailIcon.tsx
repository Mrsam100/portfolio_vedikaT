import { useState, useRef, useEffect, MutableRefObject } from "react";
import { motion } from "framer-motion";

export default function EmailIcon() {
  const [showEmail, setShowEmail] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null); // TypeScript expects a type here

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setShowEmail(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative group" ref={containerRef}>
      <motion.button
        onClick={() => setShowEmail(!showEmail)}
        className="w-14 h-14 border-2 border-gray-600 rounded-lg flex items-center justify-center hover:border-pink-500 hover:text-pink-500 hover:bg-pink-500 hover:bg-opacity-10 transition-all duration-300 cursor-pointer"
        whileHover={{ scale: 1.1 }}
      >
        <i className="fas fa-envelope text-2xl text-pink-400"></i>
      </motion.button>

      {showEmail && (
        <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 px-3 py-2 bg-gray-800 text-white text-sm rounded shadow-lg opacity-100 transition-all z-10">
          vedika.design@gmail.com
        </div>
      )}
    </div>
  );
}
