"use client";

import { Mail, Download, MapPin } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useBackground } from "../BackgroundContext";

export function Hero() {
  const { currentTheme } = useBackground();
  
  // Smart overlay: increase gradient opacity if the image is 'light'
  const gradientOverlay = currentTheme === "light"
    ? "bg-gradient-to-r from-black/85 via-black/50 to-transparent"
    : "bg-gradient-to-r from-black/65 via-black/30 to-transparent";

  return (
    <section id="hero" className={`relative min-h-screen flex items-center pt-24 transition-colors duration-1000`}>
      {/* Adaptive Gradient behind text */}
      <div className={`absolute inset-0 ${gradientOverlay}`} />
      
      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 w-full">
        <div className="max-w-2xl">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-[13px] font-medium text-white border border-white/10 shadow-sm">
              <MapPin size={14} className="text-accent" />
              <span>Chennai, India</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white drop-shadow-[0_4px_16px_rgba(0,0,0,0.6)]">
              Gokulnath N
            </h1>
            
            <h2 className="text-xl md:text-3xl font-medium text-neutral-200 drop-shadow-[0_4px_8px_rgba(0,0,0,0.6)]">
              Full Stack Developer
            </h2>
            
            <p className="text-[15px] md:text-[17px] text-neutral-300 leading-relaxed font-medium drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
              Building highly interactive web applications and AI-driven automation. 
              Eager to master new technologies and deliver innovative software solutions.
            </p>
            
            <div className="flex flex-wrap items-center gap-3 pt-4">
              <a
                href="mailto:gokulnath272006@gmail.com"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-accent px-6 text-[14px] font-medium text-white shadow-[0_4px_16px_rgba(59,130,246,0.3)] transition-all hover:bg-accent/90 hover:-translate-y-0.5 active:translate-y-0"
              >
                <Mail size={16} />
                Contact Me
              </a>
              <a
                href="https://n-gokulnath.github.io/gokulnath-n/Gokul_resume_1.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 px-6 text-[14px] font-medium text-white transition-all hover:bg-white/20 hover:border-white/30 hover:-translate-y-0.5 active:translate-y-0"
              >
                <Download size={16} />
                Resume
              </a>
            </div>
            
            <div className="flex items-center gap-5 pt-4 text-neutral-300">
              <a href="https://github.com/N-gokulnath" target="_blank" rel="noreferrer" className="hover:text-white hover:-translate-y-1 transition-all">
                <FaGithub size={24} className="drop-shadow-md" />
                <span className="sr-only">GitHub</span>
              </a>
              <a href="https://www.linkedin.com/in/gokulnath-n-01b837319/" target="_blank" rel="noreferrer" className="hover:text-white hover:-translate-y-1 transition-all">
                <FaLinkedin size={24} className="drop-shadow-md" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
