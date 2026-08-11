import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Page, Reveal, Label, Btn, ProjectCard, Parallax } from "../components/site";
import { PROJECTS } from "../data/company";
import { X } from "lucide-react";

export default function ProjectDetail() {
  const { slug } = useParams();
  const p = PROJECTS.find((x) => x.slug === slug);
  const [lightbox, setLightbox] = useState(null);
  if (!p) return <Page><div className="py-40 text-center"><h1 className="font-head text-4xl font-black">Project not found</h1><div className="mt-8"><Btn to="/projects">Back to Projects</Btn></div></div></Page>;
  const related = PROJECTS.filter((x) => x.sector === p.sector && x.slug !== p.slug).slice(0, 3);
  const facts = [["Client", p.client], ["Location", p.location], ["Sector", p.sector], ["Status", p.status], ["Project Value", p.value], ["Start", p.start], ["Completion", p.end], ["Category", p.type]];

  return (
    <Page>
      <Parallax src={p.img} alt={p.name} className="h-[55vh] min-h-[380px]" />
      <div className="relative -mt-24 z-10 max-w-[1400px] mx-auto px-5 md:px-8">
        <Reveal>
          <div className="bg-ink border border-white/10 p-8 md:p-12">
            <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-white/50">
              <Link to="/projects" className="hover:text-flame">Projects</Link><span>/</span><span className="text-flame">{p.sector}</span>
            </div>
            <h1 className="font-head text-4xl md:text-7xl font-black tracking-tighter uppercase mt-5 leading-[0.9]">{p.name}</h1>
            <p className="mt-6 text-lg text-white/70 max-w-3xl">{p.scope}</p>
          </div>
        </Reveal>
      </div>

      <section className="py-20 max-w-[1400px] mx-auto px-5 md:px-8 grid lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2">
          <Label>Overview</Label>
          <p className="mt-5 text-white/70 leading-relaxed text-lg">{p.scope}</p>
          {p.subscopes && (<div className="mt-8"><Label>Scope Breakdown</Label>
            <ul className="mt-4 divide-y divide-white/10 border-y border-white/10">
              {p.subscopes.map((s, i) => <li key={i} className="py-4 text-white/75 flex gap-4"><span className="text-flame font-head font-bold">{String(i + 1).padStart(2, "0")}</span>{s}</li>)}
            </ul></div>)}
          <div className="mt-12"><Label>Gallery</Label>
            <div className="grid sm:grid-cols-2 gap-4 mt-5">
              {p.gallery.map((g, i) => (
                <button key={i} data-testid={`gallery-${i}`} onClick={() => setLightbox(g)} className="group relative overflow-hidden aspect-video border border-white/10">
                  <img src={g} alt={`${p.name} — view ${i + 1}`} loading="lazy" className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
                </button>
              ))}
            </div>
          </div>
        </div>
        <aside className="lg:col-span-1">
          <div className="border border-white/10 bg-panel p-8 lg:sticky lg:top-28">
            <Label>Project Facts</Label>
            <dl className="mt-5 divide-y divide-white/10">
              {facts.map(([k, v]) => (<div key={k} className="py-3 flex justify-between gap-4 text-sm"><dt className="text-white/40 uppercase tracking-wider text-xs">{k}</dt><dd className="text-right font-medium">{v}</dd></div>))}
            </dl>
            <div className="mt-6"><Btn to="/contact" className="w-full justify-center" data-testid="pd-cta">Discuss a Similar Project</Btn></div>
          </div>
        </aside>
      </section>

      {related.length > 0 && (
        <section className="py-20 border-t border-white/10 max-w-[1400px] mx-auto px-5 md:px-8">
          <Label>Related Projects</Label>
          <div className="grid md:grid-cols-3 gap-6 mt-8">{related.map((r, i) => <ProjectCard key={r.slug} p={r} index={i} />)}</div>
        </section>
      )}

      {lightbox && (
        <div className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-6" onClick={() => setLightbox(null)} data-testid="lightbox">
          <button className="absolute top-6 right-6 text-white/70 hover:text-flame"><X className="w-8 h-8" /></button>
          <img src={lightbox} alt={p.name} className="max-h-[85vh] max-w-full object-contain" />
        </div>
      )}
    </Page>
  );
}
