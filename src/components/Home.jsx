import { motion } from "framer-motion";
import { scrollToSection } from "../utils";
import { ArrowDownRight, HeartPulse } from "lucide-react";

const Home = () => {
  const stagger = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
  };

  const fade = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
  };

  const fadeX = {
    hidden: { opacity: 0, x: 24 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <motion.section
      id="home"
      initial="hidden"
      animate="visible"
      variants={stagger}
      className="w-full"
    >
      {/* ── Top meta bar ── */}
      <motion.div
        variants={fade}
        className="flex items-center justify-between mb-10 md:mb-12"
      >
        <div className="flex items-center gap-2">
          <HeartPulse size={13} className="text-zinc-400" />
          <span className="text-[11px] uppercase tracking-[0.2em] text-zinc-500 font-space">
            MD — Frontend Engineer
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="status-dot-pulse" style={{ backgroundColor: "#22c55e" }} />
          <span className="text-[11px] uppercase tracking-[0.15em] text-zinc-500 font-space">
            Active for hire
          </span>
        </div>
      </motion.div>

      {/* ── Thin rule ── */}
      <motion.div variants={fade} className="w-full h-px bg-white/[0.05] mb-10 md:mb-14" />

      {/* ── Main two-column grid ── */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-0 md:gap-12 items-end">

        {/* Left — oversized name + copy + CTAs */}
        <div className="md:col-span-7 space-y-7">

          {/* Giant name */}
          <motion.div variants={fade} className="leading-none">
            <div className="text-[clamp(3.2rem,9vw,6.5rem)] font-bold text-zinc-100 font-space tracking-tight leading-[0.92]">
              Adeyeye
            </div>
            <div className="text-[clamp(3.2rem,9vw,6.5rem)] font-light text-zinc-600 font-space tracking-tight leading-[0.92]">
              Adesanoye
            </div>
          </motion.div>

          {/* Bio paragraph */}
          <motion.p
            variants={fade}
            className="text-zinc-400 text-base md:text-lg leading-relaxed max-w-lg"
          >
           I design and engineer technology products from concept to deployment, combining technical execution with product thinking. Projects like{" "}
<span className="text-zinc-200 font-medium">CalcMedical</span> and{" "}
<span className="text-zinc-200 font-medium">Luxe Dispense</span> reflect just a portion of the solutions I build.
          </motion.p>

          {/* CTA row */}
          <motion.div variants={fade} className="flex flex-wrap items-center gap-5 pt-1">
            <button
              onClick={() => scrollToSection("projects")}
              className="btn-silver px-7 py-3 rounded-full text-sm font-medium font-space"
            >
              View Projects
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="group flex items-center gap-1.5 text-zinc-400 hover:text-zinc-100 transition-colors text-sm font-space"
            >
              Get In Touch
              <ArrowDownRight
                size={14}
                className="group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform"
              />
            </button>
          </motion.div>

          {/* Stat pills row */}
          <motion.div variants={fade} className="flex flex-wrap gap-3 pt-2">
            {[
              { label: "Experience", value: "4+ Years" },
              { label: "Focus", value: "Health & Other Tech" },
              { label: "Stack", value: "React · Next.js · TS" },
            ].map((s) => (
              <div
                key={s.label}
                className="flex items-center gap-2.5 px-4 py-2 rounded-full border border-white/[0.06] bg-white/[0.02]"
              >
                <span className="text-[10px] uppercase tracking-widest text-zinc-500 font-space">
                  {s.label}
                </span>
                <span className="w-px h-3 bg-white/10" />
                <span className="text-xs text-zinc-200 font-medium font-space">
                  {s.value}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right — portrait, no box, just shaped image + floating badges */}
        <motion.div
          variants={fadeX}
          className="md:col-span-5 flex justify-center md:justify-end mt-14 md:mt-0"
        >
          <div className="relative w-[270px] md:w-[320px]">

            {/* Ghost watermark number */}
            <div className="absolute -top-8 -left-6 text-[8rem] font-bold text-white/[0.025] font-space leading-none select-none pointer-events-none">
              01
            </div>

            {/* Portrait — rounded, no border/card */}
            <div
              className="relative overflow-hidden rounded-[2rem] shadow-2xl"
              style={{ aspectRatio: "3/4" }}
            >
              <img
                src="/assets/profile.jpg"
                alt="Dr. Adeyeye Adesanoye"
                className="w-full h-full object-cover object-top grayscale-[15%] hover:grayscale-0 transition-all duration-700 scale-[1.02] hover:scale-105"
              />
              {/* Bottom soft fade into page bg */}
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/55 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Floating badge — bottom-left */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="absolute -bottom-6 -left-6 bg-zinc-900/95 border border-white/[0.07] backdrop-blur-md rounded-2xl px-4 py-3 shadow-2xl"
            >
              <p className="text-[9px] uppercase tracking-[0.18em] text-zinc-500 font-space mb-1">
                Degree
              </p>
              <p className="text-sm font-semibold text-zinc-100 font-space tracking-tight">
                MBBS · MD
              </p>
            </motion.div>

            {/* Floating badge — top-right */}
            <motion.div
              initial={{ opacity: 0, y: -14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.85, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="absolute -top-5 -right-5 bg-zinc-900/95 border border-white/[0.07] backdrop-blur-md rounded-2xl px-4 py-3 shadow-2xl"
            >
              <p className="text-[9px] uppercase tracking-[0.18em] text-zinc-500 font-space mb-1">
                Projects Live
              </p>
              <p className="text-sm font-semibold text-zinc-100 font-space tracking-tight">
                10+
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* ── Bottom rule + scroll hint ── */}
      <motion.div
        variants={fade}
        className="w-full h-px bg-white/[0.05] mt-16 md:mt-24"
      />
      <motion.div variants={fade} className="flex justify-end mt-5">
        <button
          onClick={() => scrollToSection("experience")}
          className="group flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-zinc-600 hover:text-zinc-300 transition-colors font-space"
        >
          Scroll to explore
          <ArrowDownRight
            size={12}
            className="group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform"
          />
        </button>
      </motion.div>
    </motion.section>
  );
};

export default Home;
