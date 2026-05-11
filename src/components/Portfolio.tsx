import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import { 
  Database, 
  Cpu, 
  Layers, 
  Activity, 
  ChevronRight, 
  ExternalLink, 
  Github, 
  Mail, 
  Linkedin, 
  FileText,
  Zap,
  Terminal,
  Search,
  Code2,
  BarChart3,
  Globe,
  Award,
  BookOpen,
  ArrowRight,
  Box,
  Cloud,
  LineChart,
  Layout,
  Workflow,
  Server,
  Camera,
  MapPin,
  Calendar,
  Brain,
  PieChart,
  TrendingUp,
  Filter,
  Presentation,
  Braces,
  Settings,
  ShieldCheck,
  Microscope
} from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { Link } from 'react-router-dom';
import { DATA } from '../data';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- Components ---

const Counter = ({ value, suffix = "" }: { value: number, suffix?: string }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    const duration = 2000;
    let timer: any;

    const step = (timestamp: number) => {
      if (!timer) timer = timestamp;
      const progress = Math.min((timestamp - timer) / duration, 1);
      setCount(Math.floor(progress * (end - start) + start));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [value]);

  return <span>{count.toLocaleString()}{suffix}</span>;
};

const SectionHeader = ({ title, subtitle }: { title: React.ReactNode, subtitle?: string }) => (
  <div className="text-center mb-20">
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex items-center justify-center gap-4 mb-4"
    >
      <div className="h-px w-8 bg-indigo-500/50" />
      <span className="text-indigo-400 font-mono text-xs tracking-widest uppercase">{subtitle || "System Module"}</span>
      <div className="h-px w-8 bg-indigo-500/50" />
    </motion.div>
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-5xl font-bold tracking-tight text-white"
    >
      {title}
    </motion.h2>
    <div className="h-1 w-20 bg-indigo-600 mx-auto mt-6" />
  </div>
);

const GlassCard = ({ children, className }: { children: React.ReactNode, className?: string, key?: React.Key }) => (
  <motion.div
    whileHover={{ y: -5, scale: 1.01 }}
    className={cn(
      "relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition-all hover:border-indigo-500/30 hover:bg-white/10",
      className
    )}
  >
    <div className="absolute -right-12 -top-12 h-24 w-24 rounded-full bg-indigo-500/10 blur-3xl" />
    {children}
  </motion.div>
);

const TypewriterText = ({ items, className }: { items: string[], className?: string }) => {
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(100);

  useEffect(() => {
    const handleTyping = () => {
      const currentFullText = items[index];
      
      if (isDeleting) {
        setDisplayText(currentFullText.substring(0, displayText.length - 1));
        setSpeed(50);
      } else {
        setDisplayText(currentFullText.substring(0, displayText.length + 1));
        setSpeed(100);
      }

      if (!isDeleting && displayText === currentFullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % items.length);
      }
    };

    const timer = setTimeout(handleTyping, speed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, index, items, speed]);

  return (
    <span className={cn("inline-flex items-center justify-center", className)}>
      {displayText}
      <motion.span
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
        className="ml-1 inline-block w-[3px] h-[0.8em] bg-indigo-500"
      />
    </span>
  );
};

export const Portfolio = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative min-h-screen text-slate-300 selection:bg-indigo-500/30">
      {/* Progress Bar */}
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-indigo-500 origin-left z-50" style={{ scaleX }} />

      {/* Navbar */}
      <nav className="fixed top-0 w-full z-40 border-b border-white/5 bg-black/50 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded bg-white flex items-center justify-center font-bold text-black">GN</div>
            <span className="font-mono text-sm font-bold tracking-tighter text-white">GAURAV . SYS</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-xs font-mono uppercase tracking-widest">
            <a href="#hero" className="hover:text-indigo-400 transition-colors">Home</a>
            <a href="#about" className="hover:text-indigo-400 transition-colors">About</a>
            <a href="#skills" className="hover:text-indigo-400 transition-colors">Skills</a>
            <a href="#education" className="hover:text-indigo-400 transition-colors">Education</a>
            <a href="#experience" className="hover:text-indigo-400 transition-colors">Experience</a>
            <a href="#research" className="hover:text-indigo-400 transition-colors">Publications</a>
            <a href="#projects" className="hover:text-indigo-400 transition-colors">Projects</a>
            <a href="#news" className="hover:text-indigo-400 transition-colors">News</a>
            <Link to="/photography" className="hover:text-indigo-400 transition-colors">Photography</Link>
            <a href="#contact" className="hover:text-indigo-400 transition-colors">Contact</a>
          </div>
          <div className="w-10" /> {/* Spacer */}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center pt-20 px-6 overflow-hidden text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <p className="text-slate-400 font-mono text-sm tracking-widest uppercase mb-4">Hi, my name is</p>
          <h1 className="text-6xl md:text-8xl font-bold text-white tracking-tighter mb-4 leading-tight">
            Gaurav <span className="text-indigo-500">Najpande</span>
          </h1>
          <div className="flex justify-center mb-8">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
              <TypewriterText items={DATA.basics.roles} className="text-indigo-500 min-w-[300px] md:min-w-[500px]" />
            </h2>
          </div>
          
          <p className="text-sm md:text-base text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
            MS in Data Science @ Arizona State University | Specializing in Large-Scale Data Transformation, Automated Evaluation, and Robust Table Reasoning.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a 
              href="#" 
              className="px-8 py-3 rounded-md bg-indigo-600 text-white font-bold hover:bg-indigo-700 transition-all flex items-center gap-2 shadow-lg shadow-indigo-600/20"
            >
              <FileText className="w-4 h-4" /> Download CV
            </a>
            <a 
              href="#contact"
              className="px-8 py-3 rounded-md border border-indigo-600/50 text-white font-bold hover:bg-indigo-600/10 transition-all"
            >
              Get In Touch
            </a>
          </div>

          <div className="flex justify-center gap-8">
            <a href={`https://${DATA.basics.github}`} target="_blank" className="text-slate-500 hover:text-white transition-colors"><Github className="w-6 h-6" /></a>
            <a href={`https://${DATA.basics.linkedin}`} target="_blank" className="text-slate-500 hover:text-white transition-colors"><Linkedin className="w-6 h-6" /></a>
            {DATA.basics.googleScholar && (
              <a href={`https://${DATA.basics.googleScholar}`} target="_blank" className="text-slate-500 hover:text-white transition-colors">
                <BookOpen className="w-6 h-6" />
              </a>
            )}
            <a href={`mailto:${DATA.basics.email}`} className="text-slate-500 hover:text-white transition-colors"><Mail className="w-6 h-6" /></a>
          </div>
        </motion.div>
        
        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-indigo-500"
        >
          <ChevronRight className="w-6 h-6 rotate-90" />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <SectionHeader title={<>About <span className="text-indigo-500">Me</span></>} subtitle="The Persona" />

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative rounded-2xl overflow-hidden aspect-[4/3] group"
            >
              <img 
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1000&auto=format&fit=crop" 
                alt="About Me" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-indigo-600/10 group-hover:bg-transparent transition-colors" />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold text-white mb-6">Graduate CS Student at Arizona State University</h3>
              <p className="text-lg text-slate-400 leading-relaxed font-light mb-6">
                I'm Gaurav Najpande, a Data Science graduate student at Arizona State University. As a machine learning enthusiast with research experience in applied NLP and ML systems, I am passionate about solving complex real-world problems.
              </p>
              <p className="text-lg text-slate-400 leading-relaxed font-light">
                My curiosity drives me to continuously learn and adapt, and I take pride in seeing my projects through to completion. I am currently on the lookout for new collaborations. So if you have a cool idea that needs building, let's talk!
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 px-6 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <SectionHeader 
            title={<>Technical <span className="text-indigo-500">Skills</span></>} 
            subtitle="The Toolkit" 
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "PROGRAMMING & TOOLS", data: DATA.skills.programmingTools },
              { title: "MACHINE LEARNING & AI", data: DATA.skills.mlAi },
              { title: "DATA ENGINEERING", data: DATA.skills.dataEngineering },
              { title: "ANALYSIS & VIZ", data: DATA.skills.analysisViz },
              { title: "DATABASES", data: DATA.skills.databases }
            ].map((category, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white/[0.03] backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:bg-white/[0.06] transition-all group"
              >
                <h3 className="text-xs font-bold text-indigo-500 mb-6 tracking-widest uppercase">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {category.data.map((skill: any, i: number) => (
                    <span 
                      key={i} 
                      className="px-3 py-1.5 bg-white/5 rounded-lg text-sm text-slate-300 border border-white/5 group-hover:border-indigo-500/30 transition-colors"
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-32 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <SectionHeader title={<>My <span className="text-indigo-500">Education</span></>} subtitle="Academic Path" />
          
          <div className="grid gap-8">
            {DATA.education.map((edu: any, i: number) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/[0.02] backdrop-blur-sm p-10 rounded-2xl border border-white/5 hover:border-indigo-500/20 transition-all group"
              >
                <div className="flex flex-col md:flex-row justify-between items-start gap-4">
                  <div className="space-y-1">
                    <h3 className="text-2xl font-bold text-white group-hover:text-indigo-400 transition-colors">{edu.degree}</h3>
                    <p className="text-lg text-slate-400 font-medium">{edu.school}</p>
                    {edu.details && <p className="text-sm text-slate-500 mt-2 italic">"{edu.details}"</p>}
                  </div>
                  <div className="flex flex-col md:items-end gap-2 text-slate-500 font-medium font-mono text-sm">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-indigo-500" />
                      <span>{edu.period}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-indigo-500" />
                      <span>{edu.location}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-32 px-6 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <SectionHeader title={<>Professional <span className="text-indigo-500">Experience</span></>} subtitle="Career Journey" />
          
          <div className="space-y-8">
            {DATA.experience.map((exp: any, i: number) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/[0.02] backdrop-blur-sm p-10 rounded-2xl border border-white/5 hover:border-indigo-500/20 transition-all group"
              >
                <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-8">
                  <div className="space-y-1">
                    <h3 className="text-2xl font-bold text-white group-hover:text-indigo-400 transition-colors">{exp.role}</h3>
                    <p className="text-lg text-slate-400 font-medium">{exp.org}</p>
                  </div>
                  <div className="flex flex-col md:items-end gap-2 text-slate-500 font-medium font-mono text-sm">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-indigo-500" />
                      <span>{exp.period}</span>
                    </div>
                    {exp.location && (
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-indigo-500" />
                        <span>{exp.location}</span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="h-px w-full bg-white/5 mb-8" />

                <ul className="space-y-4">
                  {exp.impact.map((point: string, idx: number) => (
                    <li key={idx} className="flex gap-4 items-start text-slate-400 leading-relaxed">
                      <div className="w-1 h-1 rounded-full bg-indigo-500 mt-2.5 shrink-0 shadow-[0_0_8px_rgba(99,102,241,0.6)]" />
                      <p className="text-base">{point}</p>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Section */}
      <section id="research" className="py-32 px-6 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <SectionHeader title={<>Selected <span className="text-indigo-500">Publications</span></>} subtitle="Research" />
          
          <div className="grid gap-6">
            {DATA.research.map((res, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="group relative p-8 rounded-2xl border border-white/5 bg-black/40 hover:border-indigo-600/30 transition-all">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                    <h3 className="text-xl font-bold text-white group-hover:text-indigo-400 transition-colors">{res.title}</h3>
                    <div className="flex items-center gap-3">
                      {res.link && (
                        <a 
                          href={res.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="p-2 rounded-full bg-white/5 hover:bg-indigo-600/20 text-slate-400 hover:text-indigo-400 transition-all border border-white/5 hover:border-indigo-600/30"
                          title="View Paper"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                      <span className="inline-flex px-3 py-1 rounded-full bg-indigo-600/10 border border-indigo-600/20 text-indigo-400 text-[10px] font-mono uppercase tracking-widest">
                        {res.status}
                      </span>
                    </div>
                  </div>
                  <p className="text-slate-400 text-sm mb-4 leading-relaxed italic">
                    "{res.idea}"
                  </p>
                  <div className="flex items-start gap-2 text-xs text-slate-500">
                    <Award className="w-4 h-4 text-indigo-500 shrink-0" />
                    <span>{res.contribution}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <SectionHeader title={<>Featured <span className="text-indigo-500">Projects</span></>} subtitle="Implementation" />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {DATA.projects.map((proj, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 3) * 0.1 }}
              >
                <div className="group relative overflow-hidden rounded-2xl border border-white/5 bg-white/5 transition-all hover:border-indigo-600/30">
                  <div className="aspect-video overflow-hidden relative">
                    <img 
                      src={proj.image} 
                      alt={proj.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="px-2 py-1 rounded bg-indigo-600 text-[8px] font-mono font-bold text-white uppercase tracking-widest">
                        {proj.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-bold text-white group-hover:text-indigo-400 transition-colors">{proj.title}</h3>
                      <a href={proj.github} target="_blank" className="text-slate-500 hover:text-white transition-colors">
                        <Github className="w-5 h-5" />
                      </a>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed mb-6 line-clamp-2">
                      {proj.desc}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {proj.stack.map((tech, idx) => (
                        <span key={idx} className="px-2 py-1 rounded bg-white/5 text-[9px] font-mono text-slate-500">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* News Section */}
      <section id="news" className="py-32 px-6 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <SectionHeader title="News Feed" subtitle="Updates" />
          <div className="grid gap-4">
            {DATA.news.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="flex items-center gap-6 p-6 rounded-xl border border-white/5 bg-black/20 group hover:bg-white/5 transition-all"
              >
                <div className="font-mono text-xs text-indigo-500 w-24 shrink-0">{item.date}</div>
                <div className="h-1.5 w-1.5 rounded-full bg-indigo-500/50" />
                <div className="text-base text-slate-300 group-hover:text-white transition-colors">{item.text}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <SectionHeader title={<>Get In <span className="text-indigo-500">Touch</span></>} subtitle="Contact" />
          
          <p className="text-slate-400 max-w-2xl mx-auto text-center mb-16 leading-relaxed">
            I'm currently looking for new opportunities and collaborations. Whether you have a question or just want to say hi, feel free to reach out!
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {/* Email Card */}
            <GlassCard className="flex flex-col items-center p-8">
              <Mail className="w-8 h-8 text-indigo-500 mb-4" />
              <div className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-1">Email</div>
              <a href={`mailto:${DATA.basics.email}`} className="text-indigo-400 hover:underline text-sm truncate w-full">
                {DATA.basics.email}
              </a>
            </GlassCard>

            {/* Location Card */}
            <GlassCard className="flex flex-col items-center p-8">
              <Globe className="w-8 h-8 text-indigo-500 mb-4" />
              <div className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-1">Location</div>
              <div className="text-slate-300 text-sm">{DATA.basics.location}</div>
            </GlassCard>

            {/* LinkedIn Card */}
            <GlassCard className="flex flex-col items-center p-8">
              <Linkedin className="w-8 h-8 text-indigo-500 mb-4" />
              <div className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-1">LinkedIn</div>
              <a href={`https://${DATA.basics.linkedin}`} target="_blank" className="text-indigo-400 hover:underline text-sm truncate w-full">
                Gaurav Najpande
              </a>
            </GlassCard>

            {/* Google Scholar Card */}
            {DATA.basics.googleScholar && (
              <GlassCard className="flex flex-col items-center p-8">
                <BookOpen className="w-8 h-8 text-indigo-500 mb-4" />
                <div className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-1">Google Scholar</div>
                <a href={`https://${DATA.basics.googleScholar}`} target="_blank" className="text-indigo-400 hover:underline text-sm truncate w-full">
                  Publications
                </a>
              </GlassCard>
            )}

            {/* GitHub Card */}
            <GlassCard className="flex flex-col items-center p-8">
              <Github className="w-8 h-8 text-indigo-500 mb-4" />
              <div className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-1">GitHub</div>
              <a href={`https://${DATA.basics.github}`} target="_blank" className="text-indigo-400 hover:underline text-sm truncate w-full">
                fridayyy3000
              </a>
            </GlassCard>
          </div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a 
              href={`mailto:${DATA.basics.email}`}
              className="inline-flex px-10 py-4 rounded-md bg-indigo-600 text-white font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-600/20"
            >
              Send me an email
            </a>
          </motion.div>
        </div>
      </section>

  {/* Footer */}
  <footer className="py-20 border-t border-white/5 px-6">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 text-slate-500 text-sm">
      <div className="flex items-center gap-4">
        <div className="h-8 w-8 rounded bg-white flex items-center justify-center font-bold text-black">GN</div>
        <span>© 2026 Gaurav Najpande. All rights reserved.</span>
      </div>
      <div className="flex gap-8 font-mono text-[10px] uppercase tracking-widest">
        <a href="#hero" className="hover:text-indigo-500 transition-colors">Home</a>
        <a href="#education" className="hover:text-indigo-500 transition-colors">Education</a>
        <a href="#experience" className="hover:text-indigo-500 transition-colors">Experience</a>
        <a href={`https://${DATA.basics.googleScholar}`} target="_blank" className="hover:text-indigo-500 transition-colors">Scholar</a>
      </div>
    </div>
  </footer>
</div>
);
};
