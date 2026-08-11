import React from "react";
import { Page, Reveal, Label, Btn, Parallax, Marquee } from "../components/site";
import { IMAGES, MISSION, ACHIEVEMENTS, COMPANY } from "../data/company";

export default function About() {
  return (
    <Page>
      <section className="py-20 md:py-28 max-w-[1400px] mx-auto px-5 md:px-8">
        <Reveal><Label>Our Story</Label></Reveal>
        <Reveal delay={0.1}><h1 className="font-head text-5xl md:text-8xl font-black tracking-tighter uppercase mt-5 leading-[0.85]">Built on Experience.<br /><span className="text-flame">Driven by Trust.</span></h1></Reveal>
      </section>

      <Parallax src={IMAGES.workers} alt="Workers on a building under construction" className="h-[50vh] min-h-[340px]" />

      <section className="py-20 md:py-28 max-w-[1400px] mx-auto px-5 md:px-8 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5"><Reveal><Label>The Company</Label></Reveal></div>
        <div className="lg:col-span-7 space-y-6 text-lg text-white/70 leading-relaxed">
          <Reveal><p>Shree Enterprise began its journey in 2010, founded by <span className="text-white font-semibold">Mr. Sankha Pani Das</span> and <span className="text-white font-semibold">Mrs. Chumki Basu Das</span>. Headquartered at {COMPANY.address}, the firm has grown into a construction and infrastructure company serving private promoters, major corporate groups and government departments across North Bengal.</p></Reveal>
          <Reveal delay={0.1}><p>We are more than a company — we are a team working round the clock to become an established name in construction, guided by a single promise: <span className="text-flame font-semibold">Building with Trust.</span> Our work spans residential complexes, commercial and institutional buildings, roads, drainage systems, water infrastructure and a wide range of government works.</p></Reveal>
        </div>
      </section>

      <Marquee items={["Since 2010", "Building With Trust", "Jalpaiguri", "West Bengal"]} />

      {/* Mission */}
      <section className="py-20 md:py-28 max-w-[1400px] mx-auto px-5 md:px-8">
        <Reveal><Label>Mission</Label></Reveal>
        <div className="grid md:grid-cols-3 gap-px mt-12 bg-white/10 border border-white/10">
          {MISSION.map((m, i) => (
            <Reveal key={m.n} delay={i * 0.08}><div className="bg-ink p-10 h-full">
              <span className="font-head text-7xl font-black stroke-text">{m.n}</span>
              <h3 className="font-head text-2xl font-bold tracking-tight mt-6">{m.title}</h3>
              <p className="mt-4 text-white/60 leading-relaxed">{m.body}</p>
            </div></Reveal>
          ))}
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24 md:py-36 border-y border-white/10 bg-panel">
        <div className="max-w-[1100px] mx-auto px-5 md:px-8 text-center">
          <Reveal><Label>Our Philosophy</Label></Reveal>
          <Reveal delay={0.1}><blockquote className="font-head text-3xl md:text-6xl font-black tracking-tighter uppercase mt-8 leading-[1.05]">"It's one small step for man,<br />one <span className="text-flame">giant leap</span> for mankind."</blockquote></Reveal>
          <Reveal delay={0.2}><p className="mt-6 text-sm uppercase tracking-[0.25em] text-white/40">— Neil Armstrong · The inspiration behind our steady, step-by-step growth</p></Reveal>
        </div>
      </section>

      {/* Track record */}
      <section className="py-20 md:py-28 max-w-[1400px] mx-auto px-5 md:px-8">
        <Reveal><Label>Track Record</Label></Reveal>
        <Reveal delay={0.1}><h2 className="font-head text-4xl md:text-6xl font-black tracking-tighter uppercase mt-5">Evidence, not claims</h2></Reveal>
        <ul className="mt-12 divide-y divide-white/10 border-y border-white/10">
          {ACHIEVEMENTS.map((a, i) => (
            <Reveal key={i} delay={(i % 4) * 0.05}><li className="py-6 flex gap-6 group hover:bg-panel px-2 transition-colors">
              <span className="font-head text-2xl font-black text-flame">{String(i + 1).padStart(2, "0")}</span>
              <span className="text-lg text-white/75">{a}</span>
            </li></Reveal>
          ))}
        </ul>
        <div className="mt-10"><Btn to="/projects">Explore the Portfolio</Btn></div>
      </section>
    </Page>
  );
}
