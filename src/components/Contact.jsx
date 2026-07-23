"use client";

import GlassCard from "./GlassCard";
import ApplyForm from "./ApplyForm";
import { SiGithub, SiGmail } from "react-icons/si";

const Contact = () => {
  const socialLinks = [
    {
      name: "Email",
      icon: SiGmail,
      href: "mailto:hadesanoye01@gmail.com",
    },
    {
      name: "GitHub",
      icon: SiGithub,
      href: "https://github.com/thelouisgram",
    },
  ];

  return (
    <section id="contact" className="space-y-10">
      <div className="space-y-2 text-center md:text-left">
        <h2 className="text-zinc-500 font-medium tracking-wider uppercase font-space text-sm">
          CONTACT
        </h2>
        <h1 className="text-3xl md:text-5xl font-bold text-zinc-100 tracking-tight font-space">
          Apply to <span className="text-zinc-400 font-light">work together</span>
        </h1>
        <p className="text-zinc-400 text-base md:text-lg leading-relaxed max-w-2xl pt-2 mx-auto md:mx-0">
          Freelance, full-time, or contract — leave a note and I&apos;ll usually
          reply within 24 hours.
        </p>
      </div>

      <GlassCard className="mx-auto max-w-2xl p-6 sm:p-8 md:p-10 space-y-8 border-white/5 bg-zinc-900/20">
        <ApplyForm />

        <div className="flex items-center justify-center gap-4 border-t border-white/5 pt-6">
          {socialLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.name}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                aria-label={link.name}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-zinc-300 transition-colors hover:border-white/25 hover:bg-white/[0.08] hover:text-zinc-100"
              >
                <Icon className="h-5 w-5" />
              </a>
            );
          })}
        </div>
      </GlassCard>
    </section>
  );
};

export default Contact;
