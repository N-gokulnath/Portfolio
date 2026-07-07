"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type ThemeType = "light" | "dark";

interface BackgroundContextType {
  currentTheme: ThemeType;
  setCurrentTheme: (theme: ThemeType) => void;
}

const BackgroundContext = createContext<BackgroundContextType | undefined>(undefined);

export function BackgroundProvider({ children }: { children: ReactNode }) {
  const [currentTheme, setCurrentTheme] = useState<ThemeType>("dark");

  return (
    <BackgroundContext.Provider value={{ currentTheme, setCurrentTheme }}>
      {children}
    </BackgroundContext.Provider>
  );
}

export function useBackground() {
  const context = useContext(BackgroundContext);
  if (context === undefined) {
    throw new Error("useBackground must be used within a BackgroundProvider");
  }
  return context;
}
