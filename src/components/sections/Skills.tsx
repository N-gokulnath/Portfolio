const skillCategories = [
  {
    title: "Languages",
    skills: ["Python", "JavaScript", "HTML5", "CSS3", "SQL"]
  },
  {
    title: "Frontend & Databases",
    skills: ["React.js", "Tailwind CSS", "Responsive Design", "Firebase", "Supabase", "GCP"]
  },
  {
    title: "Developer Tools",
    skills: ["Git", "GitHub", "VS Code", "Chrome DevTools", "Linux"]
  },
  {
    title: "AI Productivity",
    skills: ["Generative AI", "AntiGravity", "GitHub Copilot", "n8n", "OpenRouter", "Google AI Studio", "Claude Code", "Cursor AI"]
  }
];

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-32">
      <h3 className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-8">
        Technical Skills
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillCategories.map((category) => (
          <div key={category.title} className="space-y-3 p-5 rounded-[20px] bg-[#121212]/20 backdrop-blur-[4px] border border-white/5 shadow-[0_8px_24px_rgba(0,0,0,0.18)] hover:-translate-y-0.5 hover:bg-white/5 transition-all duration-300">
            <h4 className="text-[15px] font-semibold text-white">
              {category.title}
            </h4>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-2.5 py-1 bg-black/20 text-neutral-300 rounded text-[11px] font-mono border border-white/5"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
