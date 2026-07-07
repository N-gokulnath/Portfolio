export function Certifications() {
  const certifications = [
    { title: "Introduction to Cloud Computing", date: "Feb. 2025" },
    { title: "Data Analyst Essentials", issuer: "Cisco", date: "Dec. 2024" },
    { title: "Fundamentals of Generative AI", issuer: "Microsoft", date: "July 2024" },
    { title: "Cybersecurity Essentials", issuer: "Cisco", date: "Nov. 2023" }
  ];

  return (
    <section id="certifications" className="scroll-mt-32">
      <h3 className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-8">
        Certifications
      </h3>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {certifications.map((cert) => (
          <div key={cert.title} className="p-5 rounded-[20px] bg-[#121212]/20 backdrop-blur-[4px] border border-white/5 shadow-[0_8px_24px_rgba(0,0,0,0.18)] hover:-translate-y-0.5 hover:bg-white/5 transition-all duration-300">
            <div className="text-[11px] font-mono text-neutral-400 mb-1.5">{cert.date}</div>
            <h4 className="text-[15px] font-bold text-white leading-snug">{cert.title}</h4>
            {cert.issuer && (
              <div className="text-[13px] text-accent mt-1.5 font-medium drop-shadow-sm">
                {cert.issuer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
