import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin, FaHackerrank } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-32">
      <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
        <h3 className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-6">
          Get In Touch
        </h3>
        
        <h2 className="text-2xl md:text-4xl font-bold text-white mb-4 drop-shadow-sm">
          Let's build something together.
        </h2>
        
        <p className="text-[15px] text-neutral-200 mb-8 leading-relaxed max-w-xl">
          I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>
        
        <a
          href="mailto:gokulnath272006@gmail.com"
          className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-accent px-6 text-[15px] font-medium text-white shadow-[0_4px_14px_rgba(59,130,246,0.3)] transition-all hover:bg-accent/90 hover:-translate-y-0.5 active:translate-y-0"
        >
          <Mail size={18} />
          Say Hello
        </a>
        
        <div className="flex items-center gap-5 pt-12 text-neutral-300">
          <a href="https://github.com/N-gokulnath" target="_blank" rel="noreferrer" className="hover:text-white hover:-translate-y-1 transition-all p-2">
            <FaGithub size={22} className="drop-shadow-md" />
            <span className="sr-only">GitHub</span>
          </a>
          <a href="https://www.linkedin.com/in/gokulnath-n-01b837319/" target="_blank" rel="noreferrer" className="hover:text-white hover:-translate-y-1 transition-all p-2">
            <FaLinkedin size={22} className="drop-shadow-md" />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a href="https://leetcode.com/u/Gokulnath-N/" target="_blank" rel="noreferrer" className="hover:text-white hover:-translate-y-1 transition-all p-2">
            <SiLeetcode size={22} className="drop-shadow-md" />
            <span className="sr-only">LeetCode</span>
          </a>
          <a href="https://www.hackerrank.com/profile/gokulnath272006" target="_blank" rel="noreferrer" className="hover:text-white hover:-translate-y-1 transition-all p-2">
            <FaHackerrank size={22} className="drop-shadow-md" />
            <span className="sr-only">HackerRank</span>
          </a>
        </div>
        
        <div className="pt-12 text-[12px] text-neutral-400">
          <p className="mt-1">© {new Date().getFullYear()} Gokulnath N.</p>
        </div>
      </div>
    </section>
  );
}
