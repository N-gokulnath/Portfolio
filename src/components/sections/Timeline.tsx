export function Timeline() {
  return (
    <section id="experience" className="scroll-mt-32">
      <h3 className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-8">
        Experience & Education
      </h3>
      
      <div className="space-y-10 max-w-3xl">
        
        {/* Experience Item */}
        <div className="relative pl-6 md:pl-0">
          <div className="md:grid md:grid-cols-4 md:gap-6 items-baseline">
            <div className="mb-2 md:mb-0 text-xs font-mono text-neutral-400">
              May 2025 – June 2025
            </div>
            <div className="md:col-span-3">
              <h4 className="text-[18px] font-bold text-white">
                Web Development Intern
              </h4>
              <div className="text-[14px] text-accent mb-3 font-medium drop-shadow-sm">
                ApexPlanet Software Pvt. Ltd. (Virtual)
              </div>
              <p className="text-[14px] text-neutral-200 leading-relaxed mb-3">
                Developed and implemented responsive web interfaces using HTML5, CSS3, and JavaScript, translating design mockups into interactive code.
              </p>
              <div className="text-[11px] font-mono text-neutral-400">
                Certificate ID: APSPL252965
              </div>
            </div>
          </div>
        </div>

        {/* Education Item 1 */}
        <div className="relative pl-6 md:pl-0 border-t border-white/10 pt-10">
          <div className="md:grid md:grid-cols-4 md:gap-6 items-baseline">
            <div className="mb-2 md:mb-0 text-xs font-mono text-neutral-400">
              July 2023 – April 2026
            </div>
            <div className="md:col-span-3">
              <h4 className="text-[18px] font-bold text-white">
                Bachelor of Computer Applications (BCA)
              </h4>
              <div className="text-[14px] text-neutral-200 mb-1 font-medium">
                Guru Nanak College
              </div>
              <div className="text-[13px] text-neutral-400">
                Chennai, India
              </div>
            </div>
          </div>
        </div>

        {/* Education Item 2 */}
        <div className="relative pl-6 md:pl-0 border-t border-white/10 pt-10">
          <div className="md:grid md:grid-cols-4 md:gap-6 items-baseline">
            <div className="mb-2 md:mb-0 text-xs font-mono text-neutral-400">
              March 2023
            </div>
            <div className="md:col-span-3">
              <h4 className="text-[18px] font-bold text-white">
                Higher Secondary Certificate (HSC)
              </h4>
              <div className="text-[14px] text-neutral-200 mb-1 font-medium">
                Saradha Matric. Hr. Sec. School
              </div>
              <div className="text-[13px] text-neutral-400">
                Gingee, India
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
