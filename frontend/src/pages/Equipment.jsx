import React from "react";
import { Page, Reveal, Label, Btn, Parallax } from "../components/site";
import { EQUIPMENT, SCAFFOLDING, IMAGES } from "../data/company";

export default function Equipment() {
  return (
    <Page>
      <section className="py-20 md:py-28 max-w-[1400px] mx-auto px-5 md:px-8">
        <Reveal><Label>Execution Readiness</Label></Reveal>
        <Reveal delay={0.1}><h1 className="font-head text-5xl md:text-8xl font-black tracking-tighter uppercase mt-5">Our Equipment</h1></Reveal>
        <Reveal delay={0.2}><p className="mt-6 text-white/60 max-w-2xl text-lg">Owned machinery and site resources — a real competitive advantage that lets us mobilise fast and control quality on the ground.</p></Reveal>
      </section>

      <Parallax src={IMAGES.excavator} alt="Heavy construction machinery" className="h-[45vh] min-h-[320px]" />

      <section className="py-20 max-w-[1400px] mx-auto px-5 md:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10">
          {EQUIPMENT.map((g, i) => (
            <Reveal key={g.cat} delay={(i % 3) * 0.06}>
              <div className="bg-ink p-8 h-full">
                <div className="flex items-center justify-between">
                  <h3 className="font-head text-xl font-bold tracking-tight text-flame">{g.cat}</h3>
                  <span className="font-head text-3xl font-black stroke-text">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <ul className="mt-6 divide-y divide-white/10">
                  {g.items.map(([name, qty]) => (
                    <li key={name} className="py-3 flex justify-between gap-4 text-sm">
                      <span className="text-white/75">{name}</span>
                      <span className="font-head font-bold shrink-0">{qty}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Scaffolding */}
      <section className="py-20 md:py-28 border-y border-white/10 bg-panel">
        <div className="max-w-[1400px] mx-auto px-5 md:px-8">
          <Reveal><Label>Scaffolding & Site Resources</Label></Reveal>
          <Reveal delay={0.1}><h2 className="font-head text-4xl md:text-6xl font-black tracking-tighter uppercase mt-5">Owned Site Capacity</h2></Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px mt-12 bg-white/10 border border-white/10">
            {SCAFFOLDING.map(([name, qty], i) => (
              <Reveal key={name} delay={(i % 3) * 0.05}>
                <div className="bg-panel p-6 h-full">
                  <div className="font-head text-3xl font-black text-flame tracking-tighter">{qty}</div>
                  <div className="mt-2 text-sm text-white/60">{name}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 max-w-[1400px] mx-auto px-5 md:px-8">
        <Reveal><Label>Quality & Execution</Label></Reveal>
        <Reveal delay={0.1}><h2 className="font-head text-3xl md:text-5xl font-black tracking-tighter uppercase mt-5 max-w-3xl">Precision on site. Accountability in every detail.</h2></Reveal>
        <Reveal delay={0.2}><p className="mt-6 text-white/60 max-w-2xl">Our QA/QC engineers, surveying equipment (Total Station, Auto Levels, Laser Layout), concrete cube moulds and slump-testing gear underpin measurable quality across every project.</p></Reveal>
        <div className="mt-8"><Btn to="/contact">Request a Consultation</Btn></div>
      </section>
    </Page>
  );
}
