import React from "react";
import { motion } from "framer-motion";
import { scrollToSection } from "../utils";
import { Home as HomeIcon, Briefcase, Wrench, Rocket, Mail } from "lucide-react";

const items = [
  { id: "home", Icon: HomeIcon, label: "Home" },
  { id: "experience", Icon: Briefcase, label: "Experience" },
  { id: "skills", Icon: Wrench, label: "Skills" },
  { id: "projects", Icon: Rocket, label: "Projects" },
  { id: "contact", Icon: Mail, label: "Contact" },
];

const Dock = ({ activeSection }) => {
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <motion.div 
        className="glass-card px-4 py-2 rounded-2xl flex items-center gap-2 shadow-2xl border-white/5 bg-zinc-950/70"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", damping: 15, stiffness: 150 }}
      >
        {items.map((item) => (
          <motion.button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={`relative p-3 rounded-xl transition-all duration-300 group ${activeSection === item.id ? 'text-zinc-100 font-semibold' : 'text-zinc-500 hover:bg-white/[0.03] hover:text-zinc-250'}`}
            whileHover={{ scale: 1.08, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <item.Icon size={18} strokeWidth={2} />
            {activeSection === item.id && (
              <motion.div 
                layoutId="active-pill"
                className="absolute inset-0 bg-white/[0.06] border border-white/[0.04] rounded-xl -z-10"
                transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
              />
            )}
            <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-zinc-900 border border-white/10 text-zinc-200 text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-xl backdrop-blur-md font-space">
              {item.label}
            </span>
          </motion.button>
        ))}
      </motion.div>
    </div>
  );
};

export default Dock;
