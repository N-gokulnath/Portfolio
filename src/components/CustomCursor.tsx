"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const [isMounted, setIsMounted] = useState(false);
  
  // Motion values track the position WITHOUT triggering React re-renders.
  // This is critical for 60fps performance.
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  // Hardware-accelerated spring physics for the trailing halo
  const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
  const haloX = useSpring(cursorX, springConfig);
  const haloY = useSpring(cursorY, springConfig);

  useEffect(() => {
    setIsMounted(true);
    
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    window.addEventListener("mousemove", moveCursor, { passive: true });

    // Globally hide the default cursor while this component is mounted
    const style = document.createElement("style");
    style.innerHTML = `
      * {
        cursor: none !important;
      }
    `;
    document.head.appendChild(style);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.head.removeChild(style);
    };
  }, [cursorX, cursorY]);

  // Don't render anything on the server to prevent hydration mismatches
  if (!isMounted) return null;

  return (
    <>
      {/* Trailing Frosted Glass Halo */}
      <motion.div
        className="fixed top-0 left-0 w-6 h-6 rounded-full border border-white/20 bg-white/5 backdrop-blur-[4px] pointer-events-none z-[9998]"
        style={{
          x: haloX,
          y: haloY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
      {/* Solid Blue Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2.5 h-2.5 rounded-full bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.8)] pointer-events-none z-[9999]"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
    </>
  );
}
