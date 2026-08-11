import React from "react";
import { Link } from "react-router-dom";
import { Page, Reveal, Label, Btn } from "../components/site";
import { CAPABILITIES, PROJECTS } from "../data/company";

export default function Capabilities() {
  return (
    <Page>
      <section className="py-20 md:py-28 max-w-[1400px] mx-auto px-5 md:px-8">
        <Reveal><Label>What We Do</Label></Reveal>
        <Reveal delay={0.1}><h1 className="font-head text-5xl md:text-8xl font-black tracking-tighter uppercase mt-5">Capabilities</h1></Reveal>
        <Reveal delay={0.2}><p className="mt-6 text-white/60 max-w-2xl text-lg">Nine capability areas backed by engineering teams, owned machinery and a documented project record.</p></Reveal>
      </section>

      <div className="border-t border-white/10">
        {CAPABILITIES.map((c, i) => {
          const rel = PROJECTS.filter((p) => p.sector === c.sectors[0]).slice(0, 3);
          return (
            <section key={c.slug} id={c.slug} className="border-b border-white/10 scroll-mt-24">
              <div className={`max-w-[1400px] mx-auto px-5 md:px-8 py-16 md:py-24 grid lg:grid-cols-2 gap-12 items-center ${i % 2 ? "lg:[&>*:first-child]:order-2" : ""}`}>
                <Reveal><div className="relative overflow-hidden aspect-[4/3] border border-white/10">
                  <img src={c.img} alt={c.title} loading="lazy" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
                </div></Reveal>
                <Reveal delay={0.1}><div>
                  <span className="font-head text-6xl font-black stroke-text">{String(i + 1).padStart(2, "0")}</span>
                  <h2 className="font-head text-3xl md:text-5xl font-black tracking-tighter uppercase mt-4">{c.title}</h2>
                  <p className="mt-5 text-white/65 text-lg leading-relaxed">{c.desc}</p>
                  {rel.length > 0 && <div className="mt-6 flex flex-wrap gap-2">
                    {rel.map((r) => <Link key={r.slug} to={`/projects/${r.slug}`} className="text-xs px-3 py-2 border border-white/15 hover:border-flame hover:text-flame transition-colors">{r.name}</Link>)}
                  </div>}
                  <div className="mt-8"><Btn to={`/projects?sector=${c.sectors[0]}`} variant="ghost" data-testid={`cap-explore-${c.slug}`}>Explore Projects</Btn></div>
                </div></Reveal>
              </div>
            </section>
          );
        })}
      </div>
    </Page>
  );
}
