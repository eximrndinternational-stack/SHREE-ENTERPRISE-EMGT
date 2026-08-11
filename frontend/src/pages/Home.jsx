import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { Nav, Footer, Reveal, Label, Btn, Counter, Marquee, ProjectCard, CTASection } from "../components/site";
import { IMAGES, METRICS, MISSION, CAPABILITIES, PROJECTS, CLIENTS, MAP_PINS } from "../data/company";
import { ChevronDown, ArrowUpRight } from "lucide-react";

const HERO_LINES = ["Building", "With Trust"];

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  return (
    <section ref={ref} className="relative h-screen min-h-[640px] overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0">
        <img src={IMAGES.hero} alt="Construction site with tower crane" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent" />
      </motion.div>
      <motion.div style={{ opacity }} className="relative z-10 h-full max-w-[1400px] mx-auto px-5 md:px-8 flex flex-col justify-end pb-24">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <Label>Shree Enterprise · Since 2010</Label>
        </motion.div>
        <h1 className="font-head font-black uppercase tracking-tighter leading-[0.85] mt-5 text-6xl sm:text-7xl md:text-[9rem]">
          {HERO_LINES.map((line, i) => (
            <span key={i} className="block overflow-hidden">
              <motion.span className="block" initial={{ y: "110%" }} animate={{ y: 0 }}
                transition={{ duration: 0.9, delay: 0.2 + i * 0.15, ease: [0.16, 1, 0.3, 1] }}>
                {i === 1 ? <>With <span className="text-flame">Trust</span></> : line}
              </motion.span>
            </span>
          ))}
        </h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7, duration: 0.8 }}
          className="mt-8 max-w-xl text-lg md:text-xl text-white/75">
          Construction. Infrastructure. Execution. Building residential, commercial and public infrastructure with experienced teams and proven on-ground capability.
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.85, duration: 0.8 }}
          className="mt-10 flex flex-wrap gap-4">
          <Btn to="/projects" data-testid="hero-projects">Explore Our Projects</Btn>
          <Btn to="/contact" variant="ghost" data-testid="hero-contact">Start a Conversation</Btn>
        </motion.div>
      </motion.div>
      <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white/50">
        <ChevronDown className="w-6 h-6" />
      </motion.div>
    </section>
  );
};

export default function Home() {
  const featured = PROJECTS.filter((p) => p.featured).slice(0, 3);
  return (
    <>
      <Nav />
      <Hero />

      {/* Proof strip */}
      <section className="border-y border-white/10 bg-panel">
        <div className="max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          {METRICS.map((m, i) => (
            <Link key={m.label} to={m.href} data-testid={`metric-${i}`}
              className="group p-8 border-r border-b border-white/10 hover:bg-flame/5 transition-colors">
              <div className="font-head text-4xl md:text-5xl font-black tracking-tighter text-flame"><Counter value={m.value} suffix={m.suffix} /></div>
              <div className="mt-2 text-xs uppercase tracking-widest text-white/50 group-hover:text-white transition-colors">{m.label}</div>
            </Link>
          ))}
        </div>
      </section>

      {/* About intro */}
      <section className="py-24 md:py-36 max-w-[1400px] mx-auto px-5 md:px-8 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <Reveal><Label>Who We Are</Label></Reveal>
          <Reveal delay={0.1}><h2 className="font-head text-4xl md:text-6xl font-black tracking-tighter uppercase mt-6 leading-[0.95]">Built on Experience. Driven by Trust.</h2></Reveal>
        </div>
        <div className="lg:col-span-7 lg:pt-16">
          <Reveal delay={0.15}><p className="text-lg text-white/70 leading-relaxed">Founded in 2010 by Mr. Sankha Pani Das and Mrs. Chumki Basu Das, Shree Enterprise is a construction and infrastructure company based in Jalpaiguri, West Bengal. From residential complexes and villas to roads, drainage, water infrastructure and institutional projects, we bring together engineering teams, site supervision and owned construction resources to execute demanding projects on the ground.</p></Reveal>
          <Reveal delay={0.25}><div className="mt-8"><Btn to="/about" variant="ghost" data-testid="home-about">Our Story</Btn></div></Reveal>
        </div>
      </section>

      <Marquee items={["Residential", "Roads", "Water", "Drainage", "Healthcare", "Government", "Industrial", "Material Supply"]} />

      {/* Capabilities */}
      <section className="py-24 md:py-36 max-w-[1400px] mx-auto px-5 md:px-8">
        <Reveal><Label>What We Do</Label></Reveal>
        <Reveal delay={0.1}><h2 className="font-head text-4xl md:text-6xl font-black tracking-tighter uppercase mt-5">Capabilities</h2></Reveal>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px mt-14 bg-white/10 border border-white/10">
          {CAPABILITIES.map((c, i) => (
            <Reveal key={c.slug} delay={(i % 3) * 0.06}>
              <Link to={`/capabilities#${c.slug}`} data-testid={`cap-${c.slug}`} className="group block bg-ink p-8 h-full hover:bg-panel transition-colors">
                <div className="relative overflow-hidden aspect-video mb-6">
                  <img src={c.img} alt={c.title} loading="lazy" className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
                </div>
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-head text-xl font-bold tracking-tight group-hover:text-flame transition-colors">{c.title}</h3>
                  <ArrowUpRight className="w-5 h-5 text-white/40 group-hover:text-flame transition-colors shrink-0" />
                </div>
                <p className="mt-3 text-sm text-white/55 leading-relaxed">{c.desc}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Mission manifesto */}
      <section className="py-24 md:py-36 border-y border-white/10 bg-panel">
        <div className="max-w-[1400px] mx-auto px-5 md:px-8">
          <Reveal><Label>Our Mission</Label></Reveal>
          <div className="grid md:grid-cols-3 gap-px mt-12 bg-white/10 border border-white/10">
            {MISSION.map((m, i) => (
              <Reveal key={m.n} delay={i * 0.08}>
                <div className="bg-panel p-10 h-full">
                  <span className="font-head text-7xl font-black stroke-text">{m.n}</span>
                  <h3 className="font-head text-2xl font-bold tracking-tight mt-6">{m.title}</h3>
                  <p className="mt-4 text-white/60 leading-relaxed">{m.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Signature projects */}
      <section className="py-24 md:py-36 max-w-[1400px] mx-auto px-5 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div><Reveal><Label>Evidence</Label></Reveal><Reveal delay={0.1}><h2 className="font-head text-4xl md:text-6xl font-black tracking-tighter uppercase mt-5">Signature Projects</h2></Reveal></div>
          <Reveal delay={0.2}><Btn to="/projects" variant="ghost" data-testid="home-all-projects">All Projects</Btn></Reveal>
        </div>
        <div className="grid md:grid-cols-3 gap-6 mt-14">
          {featured.map((p, i) => <ProjectCard key={p.slug} p={p} index={i} />)}
        </div>
      </section>

      {/* Clients */}
      <section id="clients" className="py-24 md:py-32 border-y border-white/10">
        <div className="max-w-[1400px] mx-auto px-5 md:px-8">
          <Reveal><Label>Trusted Relationships</Label></Reveal>
          <Reveal delay={0.1}><h2 className="font-head text-3xl md:text-5xl font-black tracking-tighter uppercase mt-5 max-w-3xl">Corporate & Government clients we've delivered for</h2></Reveal>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-px mt-12 bg-white/10 border border-white/10">
            {CLIENTS.map((c, i) => (
              <Reveal key={c} delay={(i % 4) * 0.05}>
                <div className="bg-ink p-8 h-full flex items-center font-head text-lg font-bold tracking-tight text-white/70 hover:text-flame hover:bg-panel transition-colors">{c}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-24 md:py-36 max-w-[1400px] mx-auto px-5 md:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <Reveal><Label>Where We Work</Label></Reveal>
          <Reveal delay={0.1}><h2 className="font-head text-4xl md:text-6xl font-black tracking-tighter uppercase mt-5">North Bengal & Beyond</h2></Reveal>
          <Reveal delay={0.2}><p className="mt-6 text-white/60 max-w-md">Documented projects across Jalpaiguri, Lataguri, Siliguri, Cooch Behar, Darjeeling and Dhupguri.</p></Reveal>
          <Reveal delay={0.3}><div className="mt-8 flex flex-wrap gap-3">
            {MAP_PINS.map((p) => <Link key={p.loc} to={`/projects?loc=${p.loc}`} className="px-4 py-2 border border-white/15 text-sm hover:border-flame hover:text-flame transition-colors" data-testid={`maploc-${p.loc}`}>{p.loc}</Link>)}
          </div></Reveal>
        </div>
        <Reveal delay={0.2}>
          <div className="relative aspect-square border border-white/10 bg-panel overflow-hidden">
            <div className="absolute inset-0 opacity-[0.08]" style={{ backgroundImage: "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)", backgroundSize: "40px 40px" }} />
            {MAP_PINS.map((p, i) => (
              <div key={p.loc} className="absolute -translate-x-1/2 -translate-y-1/2 group" style={{ left: `${p.x}%`, top: `${p.y}%` }}>
                <span className="block w-3 h-3 bg-flame rounded-full ring-4 ring-flame/20 animate-pulse" />
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-xs font-bold uppercase tracking-widest text-white/70 whitespace-nowrap">{p.loc}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      <CTASection />
      <Footer />
    </>
  );
}
