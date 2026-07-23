"use client";

import { motion } from "framer-motion";
import { experience } from "../utils";

const Experience = () => {
  return (
    <section id="experience" className="space-y-12 md:space-y-16">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div className="space-y-2 text-center md:text-left">
          <h2 className="text-zinc-500 font-medium tracking-wider uppercase font-space text-sm">
            Experience
          </h2>
          <h1 className="text-3xl md:text-5xl font-bold text-zinc-100 tracking-tight font-space">
            Professional <span className="text-zinc-400 font-light">Journey</span>
          </h1>
        </div>
        <p className="max-w-sm text-sm leading-relaxed text-zinc-500 text-center md:text-right mx-auto md:mx-0">
          From first React builds to shipping production products for healthcare
          and commerce clients.
        </p>
      </div>

      <ol className="space-y-0 border-t border-white/[0.06]">
        {experience.map((exp, index) => (
          <motion.li
            key={`${exp.company}-${exp.period}`}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
              duration: 0.65,
              delay: index * 0.08,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="group border-b border-white/[0.06]"
          >
            <div className="grid grid-cols-1 gap-6 py-8 sm:py-10 md:grid-cols-12 md:gap-8 md:py-12">
              {/* Period */}
              <div className="md:col-span-3">
                <p className="font-space text-xs uppercase tracking-[0.18em] text-zinc-500 md:pt-1">
                  {exp.period}
                </p>
                <p className="mt-3 font-space text-5xl font-light leading-none text-zinc-800 tabular-nums md:text-6xl group-hover:text-zinc-700 transition-colors">
                  {String(index + 1).padStart(2, "0")}
                </p>
              </div>

              {/* Content */}
              <div className="md:col-span-6 space-y-3">
                <div className="space-y-1">
                  <h3 className="font-space text-xl font-semibold tracking-tight text-zinc-100 md:text-2xl">
                    {exp.title}
                  </h3>
                  <p className="font-space text-sm text-zinc-400">{exp.company}</p>
                </div>
                <p className="max-w-xl text-base leading-relaxed text-zinc-500 group-hover:text-zinc-400 transition-colors">
                  {exp.description}
                </p>
              </div>

              {/* Thumbnail */}
              <div className="md:col-span-3 md:flex md:justify-end">
                <div className="relative h-36 w-full overflow-hidden rounded-2xl border border-white/[0.06] bg-zinc-900/40 sm:h-40 md:h-32 md:w-40 lg:h-36 lg:w-44">
                  <img
                    src={exp.image}
                    alt={exp.company}
                    className="h-full w-full object-cover grayscale contrast-110 brightness-90 transition-all duration-700 group-hover:scale-[1.04] group-hover:grayscale-0"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-zinc-950/40 to-transparent" />
                </div>
              </div>
            </div>
          </motion.li>
        ))}
      </ol>
    </section>
  );
};

export default Experience;
