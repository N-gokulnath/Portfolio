"use client";

import { useExperience } from "./ExperienceProvider";
import { motion, AnimatePresence } from "framer-motion";
import { RawHtmlView } from "./RawHtmlView";
import { PremiumView } from "./PremiumView";
import { EnableButton } from "./EnableButton";

export default function Portfolio() {
  const { isExperienceEnabled } = useExperience();

  return (
    <>
      <EnableButton />
      
      {/* We use conditional rendering based on the flag. We could also use AnimatePresence to animate the transition. */}
      
      <div className={isExperienceEnabled ? "" : "raw-html p-8 max-w-4xl mx-auto"}>
        {!isExperienceEnabled ? (
            <RawHtmlView />
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <PremiumView />
          </motion.div>
        )}
      </div>
    </>
  );
}
