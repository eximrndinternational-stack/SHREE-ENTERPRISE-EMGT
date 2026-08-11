import React from "react";
import { Page, Reveal, Label } from "../components/site";
import { TEAM } from "../data/company";

const initials = (n) => n.split(" ").map((w) => w[0]).slice(0, 2).join("");

const Card = ({ m, i }) => (
  <Reveal delay={(i % 4) * 0.05}>
    <div className="group bg-ink border border-white/10 p-8 h-full hover:border-flame/50 transition-colors">
      <div className="w-16 h-16 flex items-center justify-center border border-white/15 bg-panel font-head text-xl font-black text-flame">{initials(m.name)}</div>
      <h3 className="font-head text-xl font-bold tracking-tight mt-6 group-hover:text-flame transition-colors">{m.name}</h3>
      <p className="text-sm text-white/60 mt-1">{m.role}</p>
      {(m.qual || m.exp) && <p className="text-xs uppercase tracking-widest text-white/35 mt-4">{[m.qual, m.exp].filter(Boolean).join(" · ")}</p>}
    </div>
  </Reveal>
);

const Group = ({ title, people }) => (
  <section className="py-14 md:py-20 max-w-[1400px] mx-auto px-5 md:px-8">
    <Reveal><Label>{title}</Label></Reveal>
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
      {people.map((m, i) => <Card key={m.name} m={m} i={i} />)}
    </div>
  </section>
);

export default function People() {
  return (
    <Page>
      <section className="py-20 md:py-28 max-w-[1400px] mx-auto px-5 md:px-8">
        <Reveal><Label>Our People</Label></Reveal>
        <Reveal delay={0.1}><h1 className="font-head text-5xl md:text-8xl font-black tracking-tighter uppercase mt-5">The Team</h1></Reveal>
        <Reveal delay={0.2}><p className="mt-6 text-white/60 max-w-2xl text-lg">A multidisciplinary team spanning management, engineering, QA/QC, procurement, administration and site supervision.</p></Reveal>
      </section>
      <Group title="Management" people={TEAM.management} />
      <Group title="Executive Team" people={TEAM.executive} />
      <Group title="Field Engineers" people={TEAM.engineers} />
      <Group title="Office Staff" people={TEAM.office} />
      <section className="py-14 md:py-20 max-w-[1400px] mx-auto px-5 md:px-8">
        <Reveal><Label>Field Supervisors</Label></Reveal>
        <div className="flex flex-wrap gap-3 mt-8">
          {TEAM.supervisors.map((s, i) => (
            <Reveal key={s} delay={(i % 6) * 0.04}><div className="px-5 py-3 border border-white/10 bg-panel font-head font-bold tracking-tight hover:border-flame hover:text-flame transition-colors">{s}</div></Reveal>
          ))}
        </div>
      </section>
    </Page>
  );
}
