import React, { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { Page, Reveal, Label } from "../components/site";
import { COMPANY, SECTORS } from "../data/company";
import { Phone, Mail, MapPin, MessageCircle, ArrowUpRight } from "lucide-react";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;
const empty = { name: "", company: "", email: "", phone: "", project_type: "", location: "", scale: "", message: "" };

export default function Contact() {
  const [f, setF] = useState(empty);
  const [busy, setBusy] = useState(false);
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    if (!f.name || !f.email || !f.message) { toast.error("Please fill name, email and message."); return; }
    setBusy(true);
    try {
      await axios.post(`${API}/enquiry`, f);
      toast.success("Thank you — your enquiry has been received. We'll be in touch.");
      setF(empty);
    } catch { toast.error("Something went wrong. Please try again or call us."); }
    setBusy(false);
  };

  const input = "w-full bg-panel border border-white/15 px-4 py-3.5 text-sm focus:border-flame focus:outline-none transition-colors placeholder:text-white/30";

  return (
    <Page>
      <section className="py-20 md:py-28 max-w-[1400px] mx-auto px-5 md:px-8 grid lg:grid-cols-2 gap-16">
        <div>
          <Reveal><Label>Start a Conversation</Label></Reveal>
          <Reveal delay={0.1}><h1 className="font-head text-5xl md:text-7xl font-black tracking-tighter uppercase mt-5 leading-[0.9]">Discuss Your <span className="text-flame">Project</span></h1></Reveal>
          <Reveal delay={0.2}><p className="mt-6 text-white/60 text-lg max-w-md">Tell us about your construction, infrastructure or civil works requirement. Our team will respond promptly.</p></Reveal>

          <Reveal delay={0.3}><div className="mt-12 space-y-6">
            <a href={`tel:${COMPANY.phones[0]}`} data-testid="contact-call" className="flex items-center gap-4 group">
              <span className="w-12 h-12 flex items-center justify-center border border-white/15 group-hover:border-flame transition-colors"><Phone className="w-5 h-5 text-flame" /></span>
              <span><span className="block text-xs uppercase tracking-widest text-white/40">Call</span><span className="text-lg group-hover:text-flame transition-colors">{COMPANY.phones.join(" · ")}</span></span>
            </a>
            <a href={`mailto:${COMPANY.email}`} data-testid="contact-email" className="flex items-center gap-4 group">
              <span className="w-12 h-12 flex items-center justify-center border border-white/15 group-hover:border-flame transition-colors"><Mail className="w-5 h-5 text-flame" /></span>
              <span><span className="block text-xs uppercase tracking-widest text-white/40">Email</span><span className="text-lg group-hover:text-flame transition-colors break-all">{COMPANY.email}</span></span>
            </a>
            <a href={`https://wa.me/91${COMPANY.phones[0]}`} target="_blank" rel="noreferrer" data-testid="contact-whatsapp" className="flex items-center gap-4 group">
              <span className="w-12 h-12 flex items-center justify-center border border-white/15 group-hover:border-flame transition-colors"><MessageCircle className="w-5 h-5 text-flame" /></span>
              <span><span className="block text-xs uppercase tracking-widest text-white/40">WhatsApp</span><span className="text-lg group-hover:text-flame transition-colors">Message us</span></span>
            </a>
            <div className="flex items-start gap-4">
              <span className="w-12 h-12 flex items-center justify-center border border-white/15"><MapPin className="w-5 h-5 text-flame" /></span>
              <span><span className="block text-xs uppercase tracking-widest text-white/40">Office</span><span className="text-white/70">{COMPANY.address}</span></span>
            </div>
          </div></Reveal>
        </div>

        <Reveal delay={0.15}>
          <form onSubmit={submit} data-testid="contact-form" className="border border-white/10 bg-ink p-8 md:p-10 space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <input className={input} placeholder="Name *" value={f.name} onChange={set("name")} data-testid="f-name" />
              <input className={input} placeholder="Company / Organisation" value={f.company} onChange={set("company")} data-testid="f-company" />
              <input className={input} type="email" placeholder="Email *" value={f.email} onChange={set("email")} data-testid="f-email" />
              <input className={input} placeholder="Phone" value={f.phone} onChange={set("phone")} data-testid="f-phone" />
              <select className={input} value={f.project_type} onChange={set("project_type")} data-testid="f-type">
                <option value="">Project Type</option>
                {SECTORS.map((s) => <option key={s} value={s}>{s}</option>)}
                <option value="Other">Other</option>
              </select>
              <input className={input} placeholder="Project Location" value={f.location} onChange={set("location")} data-testid="f-location" />
            </div>
            <input className={input} placeholder="Estimated Project Scale (optional)" value={f.scale} onChange={set("scale")} data-testid="f-scale" />
            <textarea className={`${input} min-h-[130px] resize-none`} placeholder="Tell us about your requirement *" value={f.message} onChange={set("message")} data-testid="f-message" />
            <button type="submit" disabled={busy} data-testid="contact-submit"
              className="group w-full flex items-center justify-center gap-2 bg-flame text-ink px-7 py-4 text-sm font-bold uppercase tracking-wider hover:bg-[#e03a10] transition-colors disabled:opacity-60">
              {busy ? "Sending…" : "Discuss Your Project"}<ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </button>
          </form>
        </Reveal>
      </section>
    </Page>
  );
}
