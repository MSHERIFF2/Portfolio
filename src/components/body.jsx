import "./style/style.css";
import cv from "./doc/cv.pdf";
import { github, linkedin } from "./link";
import projectDetails from "./projectDetails";
import skills from "./skill";

function Body() {
  return (
    <div className="flex flex-col lg:flex-row w-full min-h-screen bg-[#020617] text-slate-300 font-sans selection:bg-blue-500/30">
      
      {/* LEFT SIDE: Fixed Bio Section */}
      <section className="lg:w-2/5 lg:h-screen lg:sticky lg:top-0 px-8 py-12 lg:py-24 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-slate-800/50">
        <div>
  <h1 className="text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-2">
    SHERIFFDEEN
  </h1>
  <h2 className="text-xl font-medium text-blue-400 mb-6 tracking-tight">
    Software & Data Engineer | Tech Educator
  </h2>
  
  <div className="space-y-4 max-w-md text-slate-400 leading-relaxed text-lg">
    <p>
      I architect <span className="text-white font-semibold">robust data pipelines</span> and scalable software systems. 
      Specializing in <span className="text-blue-300 font-mono text-sm">Python, PySpark, and Next.js</span> to turn raw data into actionable insights.
    </p>
    <p>
      Bridging the gap between <span className="text-slate-200 font-medium">complex infrastructure</span> and clear understanding through technical content on 
      <span className="text-slate-200 hover:text-blue-400"> Hashnode</span> and <span className="text-slate-200 hover:text-blue-400"> Medium</span>.
    </p>
  </div>
</div>

          {/* Modern Social Links */}
          <nav className="flex items-center gap-6 mt-10">
            <a href={github} target="_blank" className="text-xs font-bold uppercase tracking-[0.2em] hover:text-white transition-colors">Github</a>
            <a href={linkedin} target="_blank" className="text-xs font-bold uppercase tracking-[0.2em] hover:text-white transition-colors">LinkedIn</a>
            <a 
              href={cv} 
              target="_blank" 
              className="px-6 py-2 bg-blue-600 text-white rounded-full text-sm font-semibold hover:bg-blue-500 transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] active:scale-95"
            >
              Resume
            </a>
          </nav>
        </div>

        <footer className="hidden lg:block text-xs text-slate-600 font-mono">
          // 2026_PORTFOLIO_V2
        </footer>
      </section>

      {/* RIGHT SIDE: Scrollable Content */}
      <main className="lg:w-3/5 px-8 py-12 lg:py-24 space-y-24">
        
        {/* Projects Section */}
        <section id="projects">
          <div className="flex items-center gap-4 mb-8">
            <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-slate-500 whitespace-nowrap">Featured Projects</h3>
            <div className="h-px w-full bg-slate-800"></div>
          </div>
          
          <div className="grid gap-4">
            {projectDetails.map((project, index) => (
              <a 
                href={project.demoUrl} 
                target="_blank" 
                key={index}
                className="group relative p-6 rounded-2xl border border-slate-800/50 bg-slate-900/40 hover:bg-slate-800/40 hover:border-blue-500/50 transition-all duration-300 backdrop-blur-sm"
              >
                <div className="flex flex-col gap-2">
                  <h4 className="text-xl font-bold text-white group-hover:text-blue-400 flex items-center justify-between">
                    {project.title}
                    <span className="text-slate-600 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1">↗</span>
                  </h4>
                  <p className="text-slate-400 leading-relaxed text-sm max-w-xl">
                    {project.description}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills">
          <div className="flex items-center gap-4 mb-8">
            <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-slate-500 whitespace-nowrap">Technical Stack</h3>
            <div className="h-px w-full bg-slate-800"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {skills.map((skill, index) => (
              <div key={index} className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800/50">
                <h4 className="font-bold text-blue-400 mb-4 text-sm uppercase tracking-wider">{skill.title}</h4>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item, idx) => (
                    <span 
                      key={idx} 
                      className="px-3 py-1 bg-slate-800/50 text-slate-300 text-xs font-mono rounded border border-slate-700/50 hover:border-blue-500/30 transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

      </main>
    </div>
  );
}


export default Body;
