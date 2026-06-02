import GlassCard from "./GlassCard";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { 
  SiReact, 
  SiNextdotjs, 
  SiTypescript, 
  SiJavascript, 
  SiTailwindcss, 
  SiRedux,
  SiNodedotjs,
  SiSupabase,
  SiPrisma,
  SiGit,
  SiHtml5,
  SiPostgresql,
  SiCss
} from "react-icons/si";

const Skills = () => {
  const frontend = [
    { icon: SiReact, name: "React" },
    { icon: SiNextdotjs, name: "Next.js" },
    { icon: SiTypescript, name: "TypeScript" },
    { icon: SiJavascript, name: "JavaScript" },
    { icon: SiTailwindcss, name: "Tailwind" },
    { icon: SiRedux, name: "Redux" },
  ];

  const backend = [
    { icon: SiNodedotjs, name: "Node.js" },
    { icon: SiSupabase, name: "Supabase" },
    { icon: SiPrisma, name: "Prisma" },
    { icon: SiPostgresql, name: "PostgreSQL" },
  ];

  const tools = [
    { icon: SiGit, name: "Git" },
    { icon: SiHtml5, name: "HTML" },
    { icon: SiCss, name: "CSS" },
  ];

  const renderGroup = (title, items) => (
    <div className="space-y-3">
      <h3 className="text-xs uppercase tracking-wider text-zinc-500 font-space">
        {title}
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-3">
        {items.map((item) => {
          const IconComponent = item.icon;
          return (
            <motion.div
              key={item.name}
              whileHover={{ scale: 1.04, y: -2 }}
              className="flex flex-col items-center justify-center p-3 rounded-xl bg-white/[0.02] border border-white/[0.04] hover:border-white/20 hover:bg-white/[0.04] transition-colors group cursor-default"
            >
              <IconComponent className="w-7 h-7 mb-2 text-zinc-400 group-hover:text-zinc-100 transition-colors" />
              <span className="text-[11px] font-medium text-zinc-400 group-hover:text-zinc-100 transition-colors font-space">
                {item.name}
              </span>
            </motion.div>
          );
        })}
      </div>
    </div>
  );

  return (
    <section id="skills" className="space-y-8">
      <div className="text-center md:text-left space-y-2">
        <h2 className="text-zinc-500 font-medium tracking-wider uppercase font-space text-sm">
          SKILLS & TECH
        </h2>
        <h1 className="text-3xl md:text-5xl font-bold text-zinc-100 tracking-tight font-space">
          Tools I use to <span className="text-zinc-400 font-light">create</span>
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <GlassCard className="md:col-span-1 p-6 flex flex-col justify-center space-y-4 border-white/5 bg-zinc-900/20">
          <p className="text-zinc-400 text-sm leading-relaxed">
            I build performant, scalable web applications with modern frontend
            and backend tooling, focusing on clean architecture and usability.
          </p>

          <div className="pt-4 space-y-2 font-space">
            <div className="flex items-center gap-2 text-zinc-400">
              <Check size={16} className="text-zinc-200" />
              <span className="text-sm">Responsive Design</span>
            </div>
            <div className="flex items-center gap-2 text-zinc-400">
              <Check size={16} className="text-zinc-200" />
              <span className="text-sm">Clean Architecture</span>
            </div>
            <div className="flex items-center gap-2 text-zinc-400">
              <Check size={16} className="text-zinc-200" />
              <span className="text-sm">API Integration</span>
            </div>
          </div>
        </GlassCard>

        <GlassCard className="md:col-span-3 p-6 border-white/5 bg-zinc-900/20 space-y-8">
          {renderGroup("Frontend", frontend)}
          {renderGroup("Backend & Data", backend)}
          {renderGroup("Tools", tools)}
        </GlassCard>
      </div>
    </section>
  );
};

export default Skills;