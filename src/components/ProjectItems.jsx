import { projects } from "../utils";
import GlassCard from "./GlassCard";
import { motion } from "framer-motion";

const ProjectItems = ({ startIndex, itemsPerPage }) => {
  const otherProjects = projects.filter(p => !p.featured);
  const items = otherProjects.slice(startIndex, startIndex + itemsPerPage);
  
  return (
    <>
      {items.map((item, index) => (
        <motion.div
          key={item.name}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className="h-full"
        >
          <GlassCard className="group overflow-hidden h-full flex flex-col border-white/5 bg-zinc-900/20">
            <div className="relative aspect-video overflow-hidden border-b border-white/[0.03]">
              <img 
                loading="lazy" 
                src={item.image} 
                alt={item.name} 
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500 brightness-90 grayscale-[20%] group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-zinc-950/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-6 gap-3">
                <a 
                  href={item.Link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-zinc-100 text-zinc-950 px-4 py-2 rounded-full text-xs font-semibold hover:bg-white transition-colors font-space"
                >
                  Live Demo
                </a>
              </div>
            </div>
            <div className="p-6 flex flex-col flex-grow space-y-3 justify-between">
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-zinc-200 group-hover:text-zinc-100 transition-colors font-space">{item.name}</h3>
                <p className="hidden md:flex text-zinc-500 text-xs leading-relaxed line-clamp-3">{item.description}</p>
              </div>
              
              <div className="flex flex-wrap gap-1.5 pt-2">
                {item.tags?.map(tag => (
                  <span key={tag} className="px-2 py-0.5 rounded-md bg-white/[0.02] border border-white/[0.04] text-zinc-400 text-[10px] font-medium font-space">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </GlassCard>
        </motion.div>
      ))}
    </>
  );
};

export default ProjectItems;
