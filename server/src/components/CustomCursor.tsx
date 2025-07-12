import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorState, setCursorState] = useState("default");

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setCursorState("hover");
    const handleMouseLeave = () => setCursorState("default");
    const handleMouseDown = () => setCursorState("click");
    const handleMouseUp = () => setCursorState("default");

    // Add event listeners
    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    // Interactive elements
    const interactiveElements = document.querySelectorAll(
      'button, .portfolio-card, .nav-dot, [data-interactive="true"], input, textarea, a'
    );

    interactiveElements.forEach((element) => {
      element.addEventListener("mouseenter", handleMouseEnter);
      element.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      
      interactiveElements.forEach((element) => {
        element.removeEventListener("mouseenter", handleMouseEnter);
        element.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  const getCursorVariant = () => {
    switch (cursorState) {
      case "hover":
        return {
          width: 48,
          height: 48,
          background: "linear-gradient(45deg, hsl(200, 100%, 50%) 0%, hsl(280, 100%, 60%) 25%, hsl(320, 100%, 50%) 50%, hsl(150, 100%, 50%) 75%, hsl(200, 100%, 50%) 100%)",
          backgroundSize: "400% 400%",
          boxShadow: "0 0 30px rgba(0, 212, 255, 0.7), 0 0 60px rgba(255, 0, 128, 0.5), 0 0 90px rgba(0, 255, 136, 0.3), inset 0 0 20px rgba(255, 255, 255, 0.2)",
          filter: "blur(0.5px)",
        };
        
      case "click":
        return {
          width: 72,
          height: 72,
          background: "linear-gradient(45deg, hsl(200, 100%, 50%) 0%, hsl(280, 100%, 60%) 25%, hsl(320, 100%, 50%) 50%, hsl(150, 100%, 50%) 75%, hsl(200, 100%, 50%) 100%)",
          backgroundSize: "400% 400%",
          boxShadow: "0 0 50px rgba(0, 212, 255, 0.8), 0 0 100px rgba(255, 0, 128, 0.6), 0 0 150px rgba(0, 255, 136, 0.4), inset 0 0 30px rgba(255, 255, 255, 0.3)",
          filter: "blur(0.5px)",
        };
      default:
        return {
          width: 24,
          height: 24,
          background: "linear-gradient(45deg, hsl(200, 100%, 50%) 0%, hsl(280, 100%, 60%) 25%, hsl(320, 100%, 50%) 50%, hsl(150, 100%, 50%) 75%, hsl(200, 100%, 50%) 100%)",
          backgroundSize: "400% 400%",
          boxShadow: "0 0 20px rgba(0, 212, 255, 0.5), 0 0 40px rgba(255, 0, 128, 0.3), 0 0 60px rgba(0, 255, 136, 0.2)",
          filter: "blur(0.5px)",
        };
    }
  };

  return (
    <motion.div
      className={`custom-cursor hidden md:block ${cursorState}`}
      animate={{
        left: mousePosition.x - (getCursorVariant().width / 2),
        top: mousePosition.y - (getCursorVariant().height / 2),
        ...getCursorVariant(),
      }}
      transition={{ 
        type: "spring", 
        stiffness: 400, 
        damping: 25,
        left: { type: "spring", stiffness: 800, damping: 30 },
        top: { type: "spring", stiffness: 800, damping: 30 }
      }}
      style={{
        position: "fixed",
        pointerEvents: "none",
        zIndex: 9999,
        borderRadius: "50%",
      }}
    />
  );
}
