import "./style/style.css";
import cv from "./doc/cv.pdf";
import { github, linkedin } from "./link";
import projectDetails from "./projectDetails";
import skills from "./skill";

function Body() {
  return (
    <div className="flex flex-col lg:flex-row w-full min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-100">
      
      {/* LEFT SIDE: Fixed Bio Section */}
      <section className="lg:w-2/5 lg:h-screen lg:sticky lg:top-0 px-8 py-12 lg:py-24 flex flex-col justify-between">
        <div>
          <h1 className="text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 mb-2">
            Sheriffdeen
          </h1>
          <h2 className="text-xl font-medium text-blue-600 mb-6">
            Software Engineer & Tech Educator
          </h2>
          
          <div className="space-y-4 max-w-md text-slate-600 leading-relaxed text-lg">
            <p>
              I build scalable, efficient, and reliable software systems. 
              Specializing in <span className="text-slate-900 font-semibold">TypeScript, Python, and C</span>, 
              bridging the gap between robust back-end logic and seamless front-end experiences.
            </p>
            <p>
              When I'm not coding, I'm distilling complex concepts into accessible content 
              for the developer community on <span className="italic font-medium text-slate-800">Hashnode</span> and <span className="italic font-medium text-slate-800">Medium</span>.
            </p>
          </div>

          {/* Social Links */}
          <nav className="flex items-center gap-6 mt-10">
            <a href={github} target="_blank" className="text-sm font-bold uppercase tracking-widest hover:text-blue-600 transition-colors">Github</a>
            <a href={linkedin} target="_blank" className="text-sm font-bold uppercase tracking-widest hover:text-blue-600 transition-colors">LinkedIn</a>
            <a 
              href={cv} 
              target="_blank" 
              className="px-5 py-2 bg-slate-900 text-white rounded-full text-sm font-medium hover:bg-blue-600 transition-all shadow-lg active:scale-95"
            >
              Download CV
            </a>
          </nav>
        </div>

        <footer className="hidden lg:block text-xs text-slate-400">
          Built with React & Tailwind CSS. 2024.
        </footer>
      </section>

      {/* RIGHT SIDE: Scrollable Content */}
      <main className="lg:w-3/5 px-8 py-12 lg:py-24 space-y-24">
        
        {/* Projects Section */}
        <section id="projects">
          <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-8 lg:hidden">Projects</h3>
          <div className="grid gap-6">
            {projectDetails.map((project, index) => (
              <a 
                href={project.demoUrl} 
                target="_blank" 
                key={index}
                className="group relative p-6 rounded-2xl border border-transparent hover:border-slate-200 hover:bg-white hover:shadow-xl transition-all duration-300"
              >
                <div className="flex flex-col gap-2">
                  <h4 className="text-xl font-bold group-hover:text-blue-600 flex items-center gap-2">
                    {project.title}
                    <span className="inline-block transition-transform group-hover:-translate-y-1 group-hover:translate-x-1">↗</span>
                  </h4>
                  <p className="text-slate-500 leading-relaxed text-sm">
                    {project.description}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills">
          <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-8">Technical Expertise</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <div key={index} className="p-6 rounded-2xl bg-white border border-slate-100 shadow-sm">
                <h4 className="font-bold text-slate-900 mb-4 border-b pb-2">{skill.title}</h4>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item, idx) => (
                    <span 
                      key={idx} 
                      className="px-3 py-1 bg-slate-50 text-slate-600 text-xs font-medium rounded-md border border-slate-100"
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