import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import Lenis from "lenis";
import { ArrowUpRight, Menu, X, Phone, Mail, MapPin } from "lucide-react";
import { COMPANY } from "../data/company";

export const SmoothScroll = ({ children }) => {
  useEffect(() => {
    const lenis = new Lenis({ duration: 1.1, smoothWheel: true });
    let raf; const loop = (t) => { lenis.raf(t); raf = requestAnimationFrame(loop); };
    raf = requestAnimationFrame(loop);
    return () => { cancelAnimationFrame(raf); lenis.destroy(); };
  }, []);
  return children;
};

export const ScrollTop = () => {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
};

export const Reveal = ({ children, delay = 0, y = 40, className = "" }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y }} animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }} className={className}>
      {children}
    </motion.div>
  );
};

export const Label = ({ children, className = "" }) => (
  <span className={`text-xs md:text-sm tracking-[0.25em] uppercase font-bold text-flame ${className}`}>{children}</span>
);

export const Btn = ({ to, href, children, variant = "primary", className = "", ...p }) => {
  const base = "group inline-flex items-center gap-2 px-7 py-4 text-sm font-bold uppercase tracking-wider transition-colors duration-300";
  const style = variant === "primary"
    ? "bg-flame text-ink hover:bg-[#e03a10]"
    : "border border-white/25 text-white hover:bg-white/10";
  const inner = (<>{children}<ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" /></>);
  if (to) return <Link to={to} className={`${base} ${style} ${className}`} {...p}>{inner}</Link>;
  return <a href={href} className={`${base} ${style} ${className}`} {...p}>{inner}</a>;
};

export const Counter = ({ value, suffix = "" }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start; const dur = 1400;
    const step = (t) => { if (!start) start = t; const p = Math.min((t - start) / dur, 1);
      setN(Math.floor(p * value)); if (p < 1) requestAnimationFrame(step); };
    requestAnimationFrame(step);
  }, [inView, value]);
  return <span ref={ref}>{n}{suffix}</span>;
};

export const Marquee = ({ items }) => (
  <div className="overflow-hidden border-y border-white/10 py-6 select-none">
    <div className="flex whitespace-nowrap animate-marquee">
      {[...items, ...items].map((t, i) => (
        <span key={i} className="font-head text-4xl md:text-6xl font-black uppercase tracking-tight mx-8 stroke-text">
          {t} <span className="text-flame">/</span>
        </span>
      ))}
    </div>
  </div>
);

export const ProjectCard = ({ p, index = 0 }) => (
  <Reveal delay={(index % 3) * 0.08}>
    <Link to={`/projects/${p.slug}`} data-testid={`project-card-${p.slug}`}
      className="group block border border-white/10 bg-panel hover:border-flame/60 transition-colors duration-300">
      <div className="relative overflow-hidden aspect-[4/3]">
        <img src={p.img} alt={p.name} loading="lazy"
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 scale-100 group-hover:scale-105 transition-all duration-700" />
        <span className={`absolute top-4 left-4 px-3 py-1 text-[10px] font-bold uppercase tracking-widest ${p.status === "Ongoing" ? "bg-flame text-ink" : "bg-white/90 text-ink"}`}>{p.status}</span>
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between text-xs uppercase tracking-widest text-white/50 mb-3">
          <span>{p.sector}</span><span>{p.location}</span>
        </div>
        <h3 className="font-head text-xl md:text-2xl font-bold tracking-tight leading-tight group-hover:text-flame transition-colors">{p.name}</h3>
        <p className="mt-3 text-sm text-white/50">{p.client}</p>
        <p className="mt-4 font-head text-lg font-bold text-flame">{p.value}</p>
      </div>
    </Link>
  </Reveal>
);

export const Parallax = ({ src, alt, className = "" }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);
  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.img style={{ y, scale: 1.25 }} src={src} alt={alt} className="w-full h-full object-cover absolute inset-0" />
    </div>
  );
};

const NAV = [
  { to: "/about", label: "About" },
  { to: "/capabilities", label: "Capabilities" },
  { to: "/projects", label: "Projects" },
  { to: "/people", label: "People" },
  { to: "/equipment", label: "Equipment" },
  { to: "/credentials", label: "Credentials" },
  { to: "/contact", label: "Contact" },
];

export const Nav = () => {
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);
  useEffect(() => {
    const on = () => setSolid(window.scrollY > 40);
    window.addEventListener("scroll", on); return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <header className={`fixed top-0 inset-x-0 z-50 border-b transition-colors duration-300 ${solid ? "bg-black/70 backdrop-blur-xl border-white/10" : "bg-transparent border-transparent"}`}>
      <div className="max-w-[1400px] mx-auto px-5 md:px-8 h-20 flex items-center justify-between">
        <Link to="/" data-testid="nav-logo" className="flex flex-col leading-none">
          <span className="font-head text-lg md:text-xl font-black tracking-tight">SHREE ENTERPRISE</span>
          <span className="text-[9px] tracking-[0.35em] uppercase text-flame">Building With Trust · 2010</span>
        </Link>
        <nav className="hidden lg:flex items-center gap-7">
          {NAV.map((n) => (
            <NavLink key={n.to} to={n.to} data-testid={`nav-${n.label.toLowerCase()}`}
              className={({ isActive }) => `text-sm font-semibold uppercase tracking-wider transition-colors hover:text-flame ${isActive ? "text-flame" : "text-white/80"}`}>{n.label}</NavLink>
          ))}
          <Link to="/contact" data-testid="nav-cta" className="bg-flame text-ink px-5 py-2.5 text-sm font-bold uppercase tracking-wider hover:bg-[#e03a10] transition-colors">Discuss Project</Link>
        </nav>
        <button data-testid="nav-toggle" className="lg:hidden text-white" onClick={() => setOpen(!open)} aria-label="Menu">{open ? <X /> : <Menu />}</button>
      </div>
      {open && (
        <div className="lg:hidden bg-black/95 backdrop-blur-xl border-t border-white/10 px-5 py-6 flex flex-col gap-4">
          {NAV.map((n) => (
            <NavLink key={n.to} to={n.to} onClick={() => setOpen(false)}
              className="text-base font-semibold uppercase tracking-wider text-white/85 hover:text-flame">{n.label}</NavLink>
          ))}
          <Link to="/contact" onClick={() => setOpen(false)} className="bg-flame text-ink px-5 py-3 text-sm font-bold uppercase tracking-wider text-center">Discuss Your Project</Link>
        </div>
      )}
    </header>
  );
};

export const Footer = () => (
  <footer className="border-t border-white/10 bg-ink pt-20 pb-8">
    <div className="max-w-[1400px] mx-auto px-5 md:px-8">
      <div className="grid md:grid-cols-4 gap-10 mb-16">
        <div className="md:col-span-1">
          <p className="font-head text-xl font-black tracking-tight">SHREE ENTERPRISE</p>
          <p className="text-xs tracking-[0.3em] uppercase text-flame mt-1">Building With Trust · Since 2010</p>
          <p className="text-sm text-white/50 mt-6 leading-relaxed">A construction & infrastructure partner rooted in Jalpaiguri, West Bengal — building for private, corporate and government clients.</p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-white/40 mb-5">Explore</p>
          <ul className="space-y-3 text-sm text-white/70">
            {NAV.map((n) => <li key={n.to}><Link to={n.to} className="hover:text-flame transition-colors">{n.label}</Link></li>)}
          </ul>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-white/40 mb-5">Contact</p>
          <ul className="space-y-4 text-sm text-white/70">
            <li className="flex gap-3"><MapPin className="w-4 h-4 text-flame shrink-0 mt-0.5" /><span>{COMPANY.address}</span></li>
            <li className="flex gap-3"><Phone className="w-4 h-4 text-flame shrink-0" /><a href={`tel:${COMPANY.phones[0]}`} className="hover:text-flame">{COMPANY.phones.join(" · ")}</a></li>
            <li className="flex gap-3"><Mail className="w-4 h-4 text-flame shrink-0" /><a href={`mailto:${COMPANY.email}`} className="hover:text-flame break-all">{COMPANY.email}</a></li>
          </ul>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-white/40 mb-5">Registrations</p>
          <ul className="space-y-3 text-sm text-white/70">
            <li>GSTIN: {COMPANY.gstin}</li>
            <li>Udyam: {COMPANY.msme}</li>
            <li><Link to="/credentials" className="text-flame hover:underline">View all credentials →</Link></li>
          </ul>
        </div>
      </div>
      <div className="font-head font-black tracking-tighter text-[15vw] leading-none text-white/5 select-none">TRUST</div>
      <div className="flex flex-col md:flex-row justify-between gap-4 pt-8 border-t border-white/10 text-xs text-white/40 uppercase tracking-widest">
        <span>© {new Date().getFullYear()} Shree Enterprise. All Rights Reserved.</span>
        <span>Privacy · Terms · Disclaimer</span>
      </div>
    </div>
  </footer>
);

export const CTASection = () => (
  <section className="relative py-28 md:py-40 border-t border-white/10 overflow-hidden">
    <motion.div className="max-w-[1400px] mx-auto px-5 md:px-8">
      <Reveal><Label>Let's Build What Comes Next</Label></Reveal>
      <Reveal delay={0.1}>
        <h2 className="font-head text-5xl md:text-8xl font-black tracking-tighter uppercase mt-6 leading-[0.9]">
          Start a <span className="text-flame">Conversation</span>
        </h2>
      </Reveal>
      <Reveal delay={0.2}>
        <p className="mt-8 max-w-xl text-white/60 text-lg">Have a construction, infrastructure or civil works requirement? Talk to the Shree Enterprise team about your project.</p>
      </Reveal>
      <Reveal delay={0.3}><div className="mt-10 flex flex-wrap gap-4">
        <Btn to="/contact" data-testid="cta-discuss">Discuss Your Project</Btn>
        <Btn to="/projects" variant="ghost" data-testid="cta-projects">Explore Projects</Btn>
      </div></Reveal>
    </motion.div>
  </section>
);

export const Page = ({ children }) => (
  <><Nav /><main className="pt-20">{children}</main><Footer /></>
);
