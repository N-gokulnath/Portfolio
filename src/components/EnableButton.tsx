"use client";

import { useExperience } from "./ExperienceProvider";
import { motion, AnimatePresence } from "framer-motion";

export function EnableButton() {
  const { isExperienceEnabled, enableExperience } = useExperience();

  return (
    <AnimatePresence>
      {!isExperienceEnabled && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-6 right-6 z-50"
        >
          <button
            onClick={enableExperience}
            className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-neutral-950 px-6 font-medium text-neutral-50 duration-300 hover:w-full hover:scale-105 active:scale-95 dark:bg-neutral-50 dark:text-neutral-950 shadow-lg border border-neutral-800 dark:border-neutral-200"
          >
            <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]">
              <div className="relative h-full w-8 bg-white/20 dark:bg-black/20" />
            </div>
            <span className="flex items-center gap-2 relative z-10">
              Enable Experience
            </span>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
