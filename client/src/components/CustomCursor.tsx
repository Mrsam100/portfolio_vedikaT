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
          width: 40,
          height: 40,
          backgroundColor: "rgba(255, 0, 128, 0.6)",
          border: "2px solid hsl(320, 100%, 50%)",
        };
      case "click":
        return {
          width: 60,
          height: 60,
          backgroundColor: "rgba(0, 255, 136, 0.4)",
          border: "3px solid hsl(150, 100%, 50%)",
        };
      default:
        return {
          width: 20,
          height: 20,
          backgroundColor: "rgba(0, 212, 255, 0.8)",
          border: "none",
        };
    }
  };

  return (
    <motion.div
      className="custom-cursor hidden md:block"
      animate={{
        left: mousePosition.x,
        top: mousePosition.y,
        ...getCursorVariant(),
      }}
      transition={{ type: "spring", stiffness: 500, damping: 28 }}
      style={{
        position: "fixed",
        pointerEvents: "none",
        zIndex: 9999,
        borderRadius: "50%",
        mixBlendMode: "difference",
      }}
    />
  );
}
