"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { useBackground } from "./BackgroundContext";
import { getBackgroundImages } from "@/actions/getImages";

type ImageMeta = {
  src: string;
  theme: "light" | "dark";
};

export function DynamicBackground() {
  const [images, setImages] = useState<ImageMeta[]>([]);
  // Initialize to a random image
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  // Fetch images on mount
  useEffect(() => {
    getBackgroundImages().then((fetchedImages) => {
      if (fetchedImages.length > 0) {
        setImages(fetchedImages as ImageMeta[]);
        setCurrentIndex(Math.floor(Math.random() * fetchedImages.length));
        setIsMounted(true);
      }
    });
  }, []);

  const { setCurrentTheme } = useBackground();
  
  // Use framer-motion to track scroll position
  const { scrollY } = useScroll();
  
  // Create a smooth transition:
  // - 0 to 200px: completely clear (0 opacity)
  // - 200px to 800px: gradually fade in the blur as the user scrolls to the About section
  const blurOpacity = useTransform(scrollY, [200, 800], [0, 1]);

  // Set the theme whenever index changes
  useEffect(() => {
    if (isMounted && images.length > 0) {
      setCurrentTheme(images[currentIndex].theme);
    }
  }, [currentIndex, setCurrentTheme, isMounted, images]);

  useEffect(() => {
    if (!isMounted || images.length === 0) return;
    
    const timer = setInterval(() => {
      setCurrentIndex((prev) => {
        let nextIndex;
        do {
          nextIndex = Math.floor(Math.random() * images.length);
        } while (nextIndex === prev && images.length > 1);
        return nextIndex;
      });
    }, 30000); // Change image every 30 seconds

    return () => clearInterval(timer);
  }, [isMounted, images.length]);

  if (images.length === 0) return null;

  return (
    <div className="fixed inset-0 w-screen h-screen z-0 pointer-events-none bg-[#050505] overflow-hidden">
      <AnimatePresence initial={false}>
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <Image
            src={images[currentIndex].src}
            alt="Nature Background"
            fill
            sizes="100vw"
            quality={90}
            priority
            className="object-cover object-center"
          />
        </motion.div>
      </AnimatePresence>
      
      {/* 
        Scroll-linked blurred overlay:
        - Hero section (top): opacity 0 (sharp, clear image)
        - After Hero (scroll): opacity fades to 1 (blurred, dark overlay)
      */}
      <motion.div 
        className="absolute inset-0 bg-black/40 backdrop-blur-[15px]"
        style={{ opacity: blurOpacity }}
      />
    </div>
  );
}
