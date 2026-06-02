import { useState } from "react";
import { projects, scrollToSection } from "../utils";
import ProjectItems from "./ProjectItems";
import GlassCard from "./GlassCard";

const Projects = () => {
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 3;

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  const prevBtn = () => setStartIndex((prev) => Math.max(0, prev - itemsPerPage));
  const nextBtn = () => setStartIndex((prev) => prev + itemsPerPage);

  return (
    <section id="projects" className="space-y-16">
      <div className="text-center md:text-left space-y-2">
        <h2 className="text-zinc-500 font-medium tracking-wider uppercase font-space text-sm">PORTFOLIO</h2>
        <h1 className="text-3xl md:text-5xl font-bold text-zinc-100 tracking-tight font-space">
          Featured <span className="text-zinc-400 font-light">Ecosystems</span>
        </h1>
      </div>

      <div className="space-y-12">
        {featuredProjects.map((project, i) => (
          <GlassCard key={project.name} className="p-8 md:p-12 overflow-hidden relative border-white/5 group">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              {/* Content Column */}
              <div className={`space-y-6 ${i % 2 === 1 ? 'md:order-last' : ''}`}>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.05] text-xs font-semibold uppercase tracking-wider text-zinc-400 font-space">
                  <span className="relative flex h-2 w-2">
                    <span className="status-dot-pulse bg-zinc-400" />
                  </span>
                  Featured Work
                </div>
                
                <h2 className="text-3xl font-bold text-zinc-100 font-space">{project.name}</h2>
                
                <p className="text-zinc-450 text-base md:text-lg leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 pt-1">
                  {project.tags?.map(tag => (
                     <span key={tag} className="px-3 py-1 rounded-lg bg-white/[0.03] border border-white/[0.05] text-zinc-300 text-xs font-medium font-space">
                       {tag}
                     </span>
                  ))}
                </div>
                
                <div className="flex gap-4 pt-3">
                  <a 
                    href={project.Link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn-silver px-6 py-2.5 rounded-full text-sm font-medium transition-colors text-center"
                  >
                    View Live
                  </a>
                  <a 
                    href={project.Repository} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn-charcoal px-6 py-2.5 rounded-full text-sm font-medium transition-colors text-center"
                  >
                    Source Code
                  </a>
                </div>
              </div>
              
              {/* Mockup Column */}
              <div className="relative rounded-xl overflow-hidden border border-white/10 bg-zinc-950 flex items-center justify-center group-hover:border-white/20 transition-all">
                <img 
                  src={project.image} 
                  alt={project.name} 
                  className="w-auto h-auto  group-hover:scale-[1.02] transition-transform duration-700" 
                />
              </div>
            </div>
          </GlassCard>
        ))}
      </div>

      <div className="pt-16 space-y-8">
        <div className="text-center md:text-left space-y-1">
          <p className="text-xs text-zinc-500 uppercase tracking-widest font-space">Side Quests</p>
          <h2 className="text-2xl font-bold text-zinc-250 font-space">Other Explorations</h2>
        </div>
        
        <div id="rendered-projects" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <ProjectItems startIndex={startIndex} itemsPerPage={itemsPerPage} />
        </div>

        <div className="flex justify-center gap-4 pt-4">
          <button
            disabled={startIndex === 0}
            className="btn-charcoal p-3 rounded-full disabled:opacity-20 disabled:cursor-not-allowed transition-colors"
            onClick={() => {
              prevBtn();
              scrollToSection("rendered-projects");
            }}
          >
            ←
          </button>
          <button
            disabled={startIndex + itemsPerPage >= otherProjects.length}
            className="btn-charcoal p-3 rounded-full disabled:opacity-20 disabled:cursor-not-allowed transition-colors"
            onClick={() => {
              nextBtn();
              scrollToSection("rendered-projects");
            }}
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
