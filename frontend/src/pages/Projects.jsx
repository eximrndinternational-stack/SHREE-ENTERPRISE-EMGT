import React, { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { Page, Reveal, Label, ProjectCard } from "../components/site";
import { PROJECTS, SECTORS, STATUSES, LOCATIONS } from "../data/company";

const Chip = ({ active, onClick, children, tid }) => (
  <button data-testid={tid} onClick={onClick}
    className={`px-4 py-2 text-xs font-bold uppercase tracking-widest border transition-colors ${active ? "bg-flame text-ink border-flame" : "border-white/15 text-white/70 hover:border-white/50"}`}>{children}</button>
);

export default function Projects() {
  const [params] = useSearchParams();
  const [sector, setSector] = useState(params.get("sector") || "All");
  const [status, setStatus] = useState("All");
  const [loc, setLoc] = useState(params.get("loc") || "All");

  const list = useMemo(() => PROJECTS.filter((p) =>
    (sector === "All" || p.sector === sector) &&
    (status === "All" || p.status === status) &&
    (loc === "All" || p.location === loc)), [sector, status, loc]);

  return (
    <Page>
      <section className="py-20 md:py-28 max-w-[1400px] mx-auto px-5 md:px-8">
        <Reveal><Label>Complete Portfolio</Label></Reveal>
        <Reveal delay={0.1}><h1 className="font-head text-5xl md:text-8xl font-black tracking-tighter uppercase mt-5">Projects</h1></Reveal>
        <Reveal delay={0.2}><p className="mt-6 text-white/60 max-w-2xl">A documented record of completed and ongoing work across residential, healthcare, roads, water, drainage, government and industrial sectors.</p></Reveal>

        <div className="mt-12 space-y-4 border-y border-white/10 py-6">
          <div className="flex flex-wrap gap-2 items-center"><span className="text-[10px] uppercase tracking-widest text-white/40 w-16">Sector</span>
            <Chip active={sector === "All"} onClick={() => setSector("All")} tid="f-sector-all">All</Chip>
            {SECTORS.map((s) => <Chip key={s} active={sector === s} onClick={() => setSector(s)} tid={`f-sector-${s}`}>{s}</Chip>)}
          </div>
          <div className="flex flex-wrap gap-2 items-center"><span className="text-[10px] uppercase tracking-widest text-white/40 w-16">Status</span>
            <Chip active={status === "All"} onClick={() => setStatus("All")} tid="f-status-all">All</Chip>
            {STATUSES.map((s) => <Chip key={s} active={status === s} onClick={() => setStatus(s)} tid={`f-status-${s}`}>{s}</Chip>)}
          </div>
          <div className="flex flex-wrap gap-2 items-center"><span className="text-[10px] uppercase tracking-widest text-white/40 w-16">Location</span>
            <Chip active={loc === "All"} onClick={() => setLoc("All")} tid="f-loc-all">All</Chip>
            {LOCATIONS.map((s) => <Chip key={s} active={loc === s} onClick={() => setLoc(s)} tid={`f-loc-${s}`}>{s}</Chip>)}
          </div>
        </div>

        <p className="mt-8 text-sm text-white/40 uppercase tracking-widest" data-testid="projects-count">{list.length} Projects</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {list.map((p, i) => <ProjectCard key={p.slug} p={p} index={i} />)}
        </div>
        {list.length === 0 && <p className="text-white/50 py-20 text-center">No projects match these filters.</p>}
      </section>
    </Page>
  );
}
