"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface ExperienceContextType {
  isExperienceEnabled: boolean;
  enableExperience: () => void;
}

const ExperienceContext = createContext<ExperienceContextType | undefined>(undefined);

export function ExperienceProvider({ children }: { children: ReactNode }) {
  const [isExperienceEnabled, setIsExperienceEnabled] = useState(false);

  const enableExperience = () => setIsExperienceEnabled(true);

  return (
    <ExperienceContext.Provider value={{ isExperienceEnabled, enableExperience }}>
      {children}
    </ExperienceContext.Provider>
  );
}

export function useExperience() {
  const context = useContext(ExperienceContext);
  if (context === undefined) {
    throw new Error("useExperience must be used within an ExperienceProvider");
  }
  return context;
}
