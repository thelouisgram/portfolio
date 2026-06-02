import GlassCard from "./GlassCard";
import { motion } from "framer-motion";
import { SiGithub, SiGmail } from "react-icons/si";

const Contact = () => {
  const sendEmail = () => {
    window.location.href = "mailto:hadesanoye01@gmail.com";
  };

  const socialLinks = [
    { name: "Email", icon: SiGmail, action: sendEmail },
    { name: "GitHub", icon: SiGithub, href: "https://github.com/thelouisgram" },
  ];

  return (
    <section id="contact" className="space-y-12">
      <div className="text-center md:text-left space-y-2">
        <h2 className="text-zinc-500 font-medium tracking-wider uppercase font-space text-sm">CONTACT</h2>
        <h1 className="text-3xl md:text-5xl font-bold text-zinc-100 tracking-tight font-space">
          Let's <span className="text-zinc-400 font-light">Connect</span>
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <GlassCard className="md:col-span-2 p-8 md:p-12 space-y-6 border-white/5 bg-zinc-900/20">
          <h2 className="text-2xl font-bold text-zinc-150 font-space">Let’s build something great together.</h2>
          <p className="text-zinc-400 text-base md:text-lg leading-relaxed max-w-xl">
            I am open to remote, onsite, full-time, and contract frontend engineering roles. 
            Feel free to reach out via email or connect with me on socials.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            {socialLinks.map((link) => {
  const Icon = link.icon;

  return link.href ? (
    <a
      key={link.name}
      href={link.href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-3 px-6 py-3 rounded-full btn-charcoal group"
    >
      <Icon className="w-4 h-4 text-zinc-300 group-hover:text-zinc-100 transition-colors" />
      <span className="font-medium text-sm font-space">{link.name}</span>
    </a>
  ) : (
    <button
      key={link.name}
      onClick={link.action}
      className="flex items-center gap-3 px-6 py-3 rounded-full btn-charcoal group"
    >
      <Icon className="w-4 h-4 text-zinc-300 group-hover:text-zinc-100 transition-colors" />
      <span className="font-medium text-sm font-space">{link.name}</span>
    </button>
  );
})}
          </div>
        </GlassCard>

        <GlassCard className="p-8 flex flex-col items-center justify-center text-center space-y-6 overflow-hidden relative border-white/5 bg-zinc-900/20">
          <div className="absolute inset-0 bg-white/[0.01] blur-3xl rounded-full translate-y-1/2" />
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="w-32 h-32 relative z-10 flex items-center justify-center text-6xl"
          >
            <img src="/assets/robot.png" alt="Robot" className="w-full h-full object-contain grayscale contrast-110 brightness-90" />
          </motion.div>
          
          <div className="space-y-1 relative z-10 font-space">
            <p className="text-zinc-500 text-xs uppercase tracking-widest">Average Response time</p>
            <p className="text-zinc-100 font-bold text-xl">&lt; 24 Hours</p>
          </div>
        </GlassCard>
      </div>
    </section>
  );
};

export default Contact;
