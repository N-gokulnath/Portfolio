import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "CablePro",
    year: "2026",
    description: "Engineered a full-stack operator management platform featuring billing, payment tracking, and a real-time analytics dashboard.",
    impact: "Crafted a mobile-friendly user interface with dark mode, smooth animations, and financial reports, enhancing operator workflow efficiency by 25%.",
    tags: ["React.js", "Next.js 14", "Tailwind CSS", "Firebase Firestore"],
    github: "https://github.com/N-gokulnath/cablepro",
    live: "https://cable-pro.github.io/app/"
  },
  {
    title: "RankFlow",
    year: "2026",
    description: "Architected a high-fidelity AI talent acquisition engine that automates resume screening by evaluating applicant profiles against target job descriptions.",
    impact: "Integrated Google Gemini 3.5 AI model using structured JSON to generate quantitative match scores. Implemented database persistence using Prisma ORM with SQLite and PostgreSQL.",
    tags: ["React", "Gemini 3.5 API", "Tailwind", "Prisma ORM", "PostgreSQL"],
    github: "https://github.com/N-gokulnath/rusume-ai-screener",
    live: "https://rankflow-screener.onrender.com/"
  },
  {
    title: "LinkedIn Post Automation",
    year: "2025",
    description: "Designed an n8n workflow to generate topic ideas, create custom images, and auto-publish content to LinkedIn.",
    impact: "Streamlined social media operations with an automated pipeline, reducing manual content creation overhead by 90%.",
    tags: ["n8n", "AI APIs", "Workflow Automation", "LinkedIn API"],
    github: "https://github.com/N-gokulnath/LInkedin-automation"
  },
  {
    title: "HTMLforge",
    year: "2026",
    description: "Created a web-based utility platform to convert raw HTML code and URLs into high-quality PDF documents.",
    impact: "Optimized backend conversion processes to generate PDFs with sub-second response times.",
    tags: ["HTML", "Node.js", "SQL", "Docker", "JavaScript"],
    github: "https://github.com/N-gokulnath/HTMLforge",
    live: "https://htmlforge-web.onrender.com"
  }
];

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-32">
      <h3 className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-8">
        Featured Projects
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div 
            key={project.title} 
            className="group relative flex flex-col justify-between p-6 rounded-[20px] bg-[#121212]/20 backdrop-blur-[4px] border border-white/5 hover:-translate-y-0.5 hover:bg-white/5 transition-all duration-300 shadow-[0_8px_24px_rgba(0,0,0,0.18)]"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-[18px] font-bold text-white">
                  {project.title}
                </h4>
                <span className="text-[12px] font-mono text-neutral-400">{project.year}</span>
              </div>
              
              <p className="text-[14px] text-neutral-200 mb-3 leading-relaxed font-medium">
                {project.description}
              </p>
              
              <p className="text-[13px] text-accent mb-6 leading-relaxed italic drop-shadow-sm">
                {project.impact}
              </p>
            </div>
            
            <div className="space-y-4 mt-auto">
              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span key={tag} className="text-[11px] font-mono px-2 py-1 bg-black/20 text-neutral-300 rounded border border-white/5">
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-4 pt-4 border-t border-white/10">
                {project.github && (
                  <a href={project.github} className="flex items-center gap-1.5 text-[13px] font-medium text-neutral-300 hover:text-white transition-colors">
                    <FaGithub size={14} /> Code
                  </a>
                )}
                {project.live && (
                  <a href={project.live} className="flex items-center gap-1.5 text-[13px] font-medium text-neutral-300 hover:text-white transition-colors">
                    <ExternalLink size={14} /> Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
