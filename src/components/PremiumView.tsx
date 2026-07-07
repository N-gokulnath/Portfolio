import { Hero } from "./sections/Hero";
import { About } from "./sections/About";
import { Skills } from "./sections/Skills";
import { Projects } from "./sections/Projects";
import { Timeline } from "./sections/Timeline";
import { Certifications } from "./sections/Certifications";
import { Contact } from "./sections/Contact";
import { DynamicBackground } from "./DynamicBackground";
import { BackgroundProvider } from "./BackgroundContext";
import { Navigation } from "./Navigation";
import { CustomCursor } from "./CustomCursor";

export function PremiumView() {
  return (
    <BackgroundProvider>
      <div className="dark min-h-screen font-sans cursor-none">
        <CustomCursor />
        <DynamicBackground />
        <Navigation />
        
        <div className="relative z-10 w-full selection:bg-accent selection:text-accent-foreground pb-20">
          <Hero />
          
          <div className="max-w-5xl mx-auto px-4 md:px-8 mt-24">
            <div className="bg-[#121212]/20 backdrop-blur-[6px] border border-white/5 shadow-[0_8px_32px_rgba(0,0,0,0.2)] rounded-[32px] p-6 md:p-12 flex flex-col gap-20">
              <About />
              <Skills />
              <Projects />
              <Timeline />
              <Certifications />
              <Contact />
            </div>
          </div>
        </div>
      </div>
    </BackgroundProvider>
  );
}
