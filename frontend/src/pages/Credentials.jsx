import React from "react";
import { Page, Reveal, Label } from "../components/site";
import { CREDENTIALS } from "../data/company";
import { ShieldCheck } from "lucide-react";

export default function Credentials() {
  return (
    <Page>
      <section className="py-20 md:py-28 max-w-[1400px] mx-auto px-5 md:px-8">
        <Reveal><Label>Verified Business Credentials</Label></Reveal>
        <Reveal delay={0.1}><h1 className="font-head text-5xl md:text-8xl font-black tracking-tighter uppercase mt-5">Credentials</h1></Reveal>
        <Reveal delay={0.2}><p className="mt-6 text-white/60 max-w-2xl text-lg">Statutory registrations and licences that establish Shree Enterprise as a compliant, formally constituted partnership firm. Sensitive document numbers are withheld from public view.</p></Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
          {CREDENTIALS.map((c, i) => (
            <Reveal key={c.name} delay={(i % 3) * 0.06}>
              <div className="group border border-white/10 bg-panel p-8 h-full hover:border-flame/50 transition-colors">
                <div className="flex items-center justify-between">
                  <ShieldCheck className="w-8 h-8 text-flame" />
                  <span className="text-[10px] uppercase tracking-widest text-white/40 border border-white/15 px-2 py-1">Verified</span>
                </div>
                <h3 className="font-head text-xl font-bold tracking-tight mt-6">{c.name}</h3>
                <p className="text-sm text-white/50 mt-3">{c.authority}</p>
                <p className="text-xs uppercase tracking-widest text-flame mt-5">{c.status}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </Page>
  );
}
