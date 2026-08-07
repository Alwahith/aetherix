"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useScrollContext } from "@/context/ScrollContext";
import { useEffect } from "react";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const { setScrollProgress } = useScrollContext();

  // Update context with scroll progress
  useEffect(() => {
    const handleScrollChange = (progress: number) => {
      setScrollProgress(progress);
    };

    // Subscribe to scroll changes
    const unsubscribe = scrollYProgress.onChange(handleScrollChange);
    return unsubscribe;
  }, [scrollYProgress, setScrollProgress]);

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 20,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed left-0 top-0 z-[9999] h-1 w-full origin-left bg-gradient-to-r from-violet-500 via-fuchsia-500 to-pink-500"
    />
  );
}