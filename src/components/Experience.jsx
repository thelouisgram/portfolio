import React from "react";
import { motion } from "framer-motion";
import GlassCard from "./GlassCard";
import { experience } from "../utils";

const Experience = () => {
  return (
    <section id="experience" className="space-y-12">
      <div className="text-center md:text-left space-y-2">
        <h2 className="text-zinc-500 font-medium tracking-wider uppercase font-space text-sm">
          Experience
        </h2>
        <h1 className="text-3xl md:text-5xl font-bold text-zinc-100 tracking-tight font-space">
          Professional <span className="text-zinc-400 font-light">Journey</span>
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Timeline */}
        <div className="space-y-8 relative">
          <div className="absolute left-4 md:left-0 top-0 bottom-4 w-px bg-zinc-800" style={{ left: '16px' }} />

          {experience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="timeline-item pl-12"
            >
              <div className="absolute w-3 h-3 rounded-full bg-zinc-400 left-2.5 top-6" />
              <GlassCard className="p-6 border border-white/5 bg-zinc-900/20 hover:border-white/20 transition-colors group">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-zinc-100 font-space">
                      {exp.title}
                    </h3>
                    <p className="text-zinc-400 font-medium font-space text-sm">
                      {exp.company}
                    </p>
                  </div>
                  <span className="inline-block text-xs text-zinc-500 bg-white/[0.03] border border-white/[0.05] px-3 py-1 rounded-full font-space shrink-0">
                    {exp.period}
                  </span>
                </div>
                <p className="text-zinc-400 group-hover:text-zinc-300 transition-colors leading-relaxed">
                  {exp.description}
                </p>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* Media Stack */}
        <div className="relative h-[500px] hidden md:block">
          {experience.slice(0, 3).map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, rotate: index % 2 === 0 ? -4 : 4, scale: 0.92 }}
              whileInView={{ opacity: 1, rotate: index % 2 === 0 ? -1.5 : 1.5, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ rotate: 0, scale: 1.03, zIndex: 50 }}
              className="absolute inset-x-0 top-0 transition-all duration-700"
              style={{ top: `${index * 70}px`, zIndex: 10 - index }}
            >
              <GlassCard className="p-2 overflow-hidden aspect-[4/3] border border-white/5 bg-zinc-950/40">
                <img
                  src={exp.image}
                  alt={exp.company}
                  className="w-full h-full object-cover rounded-lg grayscale hover:grayscale-0 contrast-110 brightness-90 transition-all duration-700"
                />
              </GlassCard>
            </motion.div>
          ))}
          <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-white/[0.01] blur-[100px] rounded-full -z-10" />
        </div>
      </div>
    </section>
  );
};

export default Experience;