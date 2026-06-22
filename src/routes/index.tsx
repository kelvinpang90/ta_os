import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import logoAsset from "@/assets/ta-logo.asset.json";
import logoLightAsset from "@/assets/ta-logo-transparent.asset.json";
import officeAsset from "@/assets/ta-office.asset.json";
import { Mail, Phone, MapPin, MessageCircle, ArrowRight, Building2, Calculator, ShieldCheck, FileText, Briefcase, Globe2 } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "T & A Cross-Border Accounting | 馬來西亞 & 新加坡 跨境會計稅務" },
      { name: "description", content: "Professional accounting, tax, audit, advisory & compliance services for Malaysia & Singapore. 馬來西亞與新加坡專業會計、稅務、審計、顧問與合規服務。" },
    ],
  }),
  component: Landing,
});

type Lang = "zh" | "en";

const copy = {
  zh: {
    nav: { services: "服務項目", about: "關於我們", why: "我們的優勢", contact: "聯絡我們" },
    cta: "免費諮詢",
    heroEyebrow: "馬來西亞 · 新加坡 · 跨境專業",
    heroTitle: "跨越邊界的會計夥伴",
    heroSubtitle: "在不斷變化的商業世界裡，企業需要的不只是會計，而是能洞察財務、規劃未來的夥伴。",
    heroBody: "T & A Cross-Border Accounting 以專業、誠信與遠見，為企業創造長期價值。",
    heroCtaPrimary: "WhatsApp 諮詢",
    heroCtaSecondary: "了解服務",
    pillars: ["Tax 稅務", "Accounting 會計", "Advisory 顧問", "Compliance 合規"],
    servicesTitle: "全方位專業服務",
    servicesSubtitle: "從日常記帳到跨境稅務規劃，一站式解決您的所有商業需求。",
    services: [
      { icon: Calculator, t: "會計與記帳", d: "完整的賬目管理、月結年結、財務報表編製。" },
      { icon: FileText, t: "稅務規劃", d: "馬新兩地稅務申報、跨境稅務優化與合規。" },
      { icon: ShieldCheck, t: "審計服務", d: "獨立、嚴謹的法定審計與內部審計支援。" },
      { icon: Briefcase, t: "公司秘書", d: "公司註冊、秘書服務、SSM 與 ACRA 合規。" },
      { icon: Building2, t: "牌照與準證", d: "大大小小許可證、執照與工作準證代辦。" },
      { icon: Globe2, t: "跨境顧問", d: "馬新跨境投資、企業架構與商業策略諮詢。" },
    ],
    whyTitle: "為什麼選擇我們",
    whySubtitle: "中英雙語溝通，深耕馬新兩地，理解您的每一個商業細節。",
    why: [
      { t: "雙語雙文化", d: "中英流利溝通，無縫對接華語企業與國際客戶。" },
      { t: "馬新雙國經驗", d: "熟悉兩地法規、稅制與商業實務，跨境無憂。" },
      { t: "專業誠信遠見", d: "不只是合規，更為您的長期成長提供策略洞察。" },
    ],
    aboutEyebrow: "關於 T & A",
    aboutTitle: "您的長期財務夥伴",
    aboutBody1: "T & A Cross-Border Accounting 專注於馬來西亞與新加坡的跨境會計與稅務服務。我們相信，真正的價值來自於對客戶業務的深入理解。",
    aboutBody2: "從初創企業到成熟集團，我們以專業、誠信與遠見，陪伴每一位客戶走過每一個成長階段。",
    contactTitle: "開啟對話",
    contactSubtitle: "免費諮詢，了解我們如何協助您的企業跨境成長。",
    contactPhone: "電話 / WhatsApp",
    contactEmail: "電子郵件",
    contactLocation: "服務地區",
    footerTagline: "Tax · Accounting · Advisory · Compliance",
    footerRights: "保留所有權利。",
  },
  en: {
    nav: { services: "Services", about: "About", why: "Why Us", contact: "Contact" },
    cta: "Free Consultation",
    heroEyebrow: "Malaysia · Singapore · Cross-Border Specialists",
    heroTitle: "Accounting Partners Beyond Borders",
    heroSubtitle: "In a world of constant change, businesses need more than an accountant — they need a partner who sees the numbers and the future.",
    heroBody: "T & A Cross-Border Accounting delivers professionalism, integrity, and foresight to create lasting value.",
    heroCtaPrimary: "WhatsApp Us",
    heroCtaSecondary: "Our Services",
    pillars: ["Tax", "Accounting", "Advisory", "Compliance"],
    servicesTitle: "Full-Spectrum Professional Services",
    servicesSubtitle: "From day-to-day bookkeeping to cross-border tax strategy — one trusted partner for every need.",
    services: [
      { icon: Calculator, t: "Accounting & Bookkeeping", d: "End-to-end ledger management, monthly close, and financial statements." },
      { icon: FileText, t: "Tax Planning", d: "Filing & optimization across Malaysia and Singapore tax regimes." },
      { icon: ShieldCheck, t: "Audit & Assurance", d: "Independent statutory audits and internal audit support." },
      { icon: Briefcase, t: "Company Secretarial", d: "Incorporation, secretarial services, SSM & ACRA compliance." },
      { icon: Building2, t: "Licenses & Permits", d: "Business licenses, work permits and regulatory approvals." },
      { icon: Globe2, t: "Cross-Border Advisory", d: "MY–SG investment structuring and strategic consulting." },
    ],
    whyTitle: "Why Choose Us",
    whySubtitle: "Bilingual fluency. Deep local expertise. A partner who understands your business.",
    why: [
      { t: "Bilingual & Bicultural", d: "Fluent Chinese & English bridging local and international clients." },
      { t: "MY + SG Expertise", d: "Deep knowledge of both jurisdictions' regulations and practices." },
      { t: "Integrity & Foresight", d: "Beyond compliance — strategic insight for long-term growth." },
    ],
    aboutEyebrow: "About T & A",
    aboutTitle: "Your Long-Term Financial Partner",
    aboutBody1: "T & A Cross-Border Accounting specializes in cross-border accounting and tax services across Malaysia and Singapore. Real value comes from truly understanding our clients' business.",
    aboutBody2: "From startups to established groups, we walk alongside every client at every stage of growth with professionalism, integrity, and foresight.",
    contactTitle: "Start the Conversation",
    contactSubtitle: "Free consultation to explore how we can support your cross-border growth.",
    contactPhone: "Phone / WhatsApp",
    contactEmail: "Email",
    contactLocation: "Coverage",
    footerTagline: "Tax · Accounting · Advisory · Compliance",
    footerRights: "All rights reserved.",
  },
} as const;

function assetUrl(url: string) {
  return import.meta.env.BASE_URL.replace(/\/$/, "") + url;
}

function Landing() {
  const [lang, setLang] = useState<Lang>("zh");
  const t = copy[lang];
  const whatsapp = "https://wa.me/60113765704";
  const phoneDisplay = "+60 11-3765 7049";
  const emails = [
    "hr.acc8839@gmail.com",
    "tna.acc8839@gmail.com",
    "tna.audit8839@gmail.com",
    "tna.tax8839@gmail.com",
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-lg">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#top" className="flex items-center gap-3">
            <img src={assetUrl(logoAsset.url)} alt="T & A" className="h-10 w-auto" />
            <div className="hidden sm:block">
              <div className="font-serif text-lg leading-none text-navy">T & A</div>
              <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Cross-Border Accounting</div>
            </div>
          </a>
          <nav className="hidden items-center gap-8 text-sm md:flex">
            <a href="#services" className="text-foreground/70 transition hover:text-navy">{t.nav.services}</a>
            <a href="#about" className="text-foreground/70 transition hover:text-navy">{t.nav.about}</a>
            <a href="#why" className="text-foreground/70 transition hover:text-navy">{t.nav.why}</a>
            <a href="#contact" className="text-foreground/70 transition hover:text-navy">{t.nav.contact}</a>
          </nav>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setLang(lang === "zh" ? "en" : "zh")}
              className="rounded-full border border-border px-3 py-1.5 text-xs font-medium text-foreground/80 transition hover:border-gold hover:text-navy"
              aria-label="Toggle language"
            >
              {lang === "zh" ? "EN" : "中文"}
            </button>
            <a href={whatsapp} target="_blank" rel="noreferrer" className="hidden rounded-full bg-navy px-4 py-2 text-xs font-medium text-primary-foreground transition hover:bg-navy-deep sm:inline-flex">
              {t.cta}
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_oklch(0.95_0.02_80)_0%,_transparent_60%)]" />
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 pb-24 pt-20 lg:grid-cols-12 lg:pt-28">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-gold">
              <span className="h-px w-10 bg-gold" />
              {t.heroEyebrow}
            </div>
            <h1 className="mt-6 font-serif text-5xl leading-[1.05] text-navy sm:text-6xl lg:text-7xl">
              {t.heroTitle}
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-foreground/75">
              {t.heroSubtitle}
            </p>
            <p className="mt-4 max-w-xl text-base text-muted-foreground">
              {t.heroBody}
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a href={whatsapp} target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3.5 text-sm font-medium text-primary-foreground shadow-[var(--shadow-elegant)] transition hover:bg-navy-deep">
                <MessageCircle className="h-4 w-4" /> {t.heroCtaPrimary}
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </a>
              <a href="#services" className="inline-flex items-center gap-2 rounded-full border border-navy/20 px-6 py-3.5 text-sm font-medium text-navy transition hover:border-navy hover:bg-navy/5">
                {t.heroCtaSecondary}
              </a>
            </div>
            <div className="mt-14 flex flex-wrap items-center gap-x-8 gap-y-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">
              {t.pillars.map((p, i) => (
                <div key={p} className="flex items-center gap-3">
                  {i > 0 && <span className="text-gold">·</span>}
                  <span>{p}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative lg:col-span-5">
            <div className="relative mx-auto max-w-sm overflow-hidden rounded-2xl shadow-[var(--shadow-elegant)] ring-1 ring-navy/5 lg:max-w-none">
              <img src={assetUrl(officeAsset.url)} alt="T & A office reception" className="block w-full h-auto" />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-navy-deep/30 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden rounded-xl bg-white px-6 py-5 shadow-[var(--shadow-soft)] ring-1 ring-border lg:block">
              <div className="text-xs uppercase tracking-[0.2em] text-gold">Established Trust</div>
              <div className="mt-1 font-serif text-2xl text-navy">Malaysia · Singapore</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="border-t border-border/60 bg-secondary/40 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-[0.22em] text-gold">Services</div>
            <h2 className="mt-4 font-serif text-4xl text-navy sm:text-5xl">{t.servicesTitle}</h2>
            <p className="mt-5 text-base text-muted-foreground">{t.servicesSubtitle}</p>
          </div>
          <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-2xl bg-border sm:grid-cols-2 lg:grid-cols-3">
            {t.services.map(({ icon: Icon, t: title, d }) => (
              <div key={title} className="group bg-background p-8 transition hover:bg-white">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-navy/5 text-navy transition group-hover:bg-navy group-hover:text-primary-foreground">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-6 font-serif text-xl text-navy">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="text-xs uppercase tracking-[0.22em] text-gold">{t.aboutEyebrow}</div>
            <h2 className="mt-4 font-serif text-4xl text-navy sm:text-5xl">{t.aboutTitle}</h2>
            <div className="gold-divider mt-8 w-32" />
            <p className="mt-8 text-base leading-relaxed text-foreground/80">{t.aboutBody1}</p>
            <p className="mt-5 text-base leading-relaxed text-foreground/80">{t.aboutBody2}</p>
          </div>
          <div className="relative">
            <div className="rounded-2xl bg-gradient-to-br from-navy-deep to-navy p-10 text-primary-foreground shadow-[var(--shadow-elegant)]">
              <div className="inline-flex items-center justify-center rounded-xl bg-white/95 px-5 py-3">
                <img src={assetUrl(logoLightAsset.url)} alt="T & A logo" className="h-12 w-auto" />
              </div>
              <div className="mt-8 font-serif text-3xl leading-tight">
                {lang === "zh" ? "專業 · 誠信 · 遠見" : "Professionalism · Integrity · Foresight"}
              </div>
              <div className="gold-divider mt-6 w-20" />
              <div className="mt-6 text-sm leading-relaxed text-primary-foreground/80">
                {lang === "zh"
                  ? "從合規到策略，從本地到跨境，我們是您信賴的長期夥伴。"
                  : "From compliance to strategy, local to cross-border — your trusted long-term partner."}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why */}
      <section id="why" className="border-t border-border/60 bg-secondary/40 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-[0.22em] text-gold">Why Us</div>
            <h2 className="mt-4 font-serif text-4xl text-navy sm:text-5xl">{t.whyTitle}</h2>
            <p className="mt-5 text-base text-muted-foreground">{t.whySubtitle}</p>
          </div>
          <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-3">
            {t.why.map((w, i) => (
              <div key={w.t} className="rounded-2xl border border-border bg-background p-8 transition hover:border-gold hover:shadow-[var(--shadow-soft)]">
                <div className="font-serif text-5xl text-gold/70">0{i + 1}</div>
                <h3 className="mt-5 font-serif text-xl text-navy">{w.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{w.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-navy-deep py-24 text-primary-foreground">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
            <div>
              <div className="text-xs uppercase tracking-[0.22em] text-gold">Contact</div>
              <h2 className="mt-4 font-serif text-4xl sm:text-5xl">{t.contactTitle}</h2>
              <p className="mt-5 max-w-md text-base text-primary-foreground/70">{t.contactSubtitle}</p>
              <a href={whatsapp} target="_blank" rel="noreferrer" className="mt-10 inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3.5 text-sm font-medium text-navy-deep transition hover:bg-gold-soft">
                <MessageCircle className="h-4 w-4" /> {t.heroCtaPrimary}
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
            <div className="space-y-6">
              <ContactRow icon={Phone} label={t.contactPhone} value={phoneDisplay} href={whatsapp} />
              <div className="flex items-start gap-4 rounded-xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-gold/60 hover:bg-white/[0.06]">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gold/15 text-gold">
                  <Mail className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-[0.22em] text-primary-foreground/50">{t.contactEmail}</div>
                  <div className="mt-1 flex flex-col gap-1.5">
                    {emails.map((e) => (
                      <a key={e} href={`mailto:${e}`} className="text-base text-primary-foreground transition hover:text-gold">{e}</a>
                    ))}
                  </div>
                </div>
              </div>
              <ContactRow icon={MapPin} label={t.contactLocation} value="Malaysia & Singapore · Johor Bahru" />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy-deep border-t border-white/10 py-10 text-primary-foreground/60">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-xs sm:flex-row">
          <div className="flex items-center gap-3">
            <div className="flex h-7 items-center justify-center rounded bg-white/95 px-2">
              <img src={assetUrl(logoLightAsset.url)} alt="" className="h-5 w-auto" />
            </div>
            <span>© {new Date().getFullYear()} T & A Cross-Border Accounting. {t.footerRights}</span>
          </div>
          <div className="uppercase tracking-[0.22em] text-gold/80">{t.footerTagline}</div>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a
        href={whatsapp}
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp"
        className="group fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-[#25D366] py-3.5 pl-4 pr-5 text-sm font-medium text-white shadow-[0_10px_30px_-8px_rgba(37,211,102,0.6)] ring-1 ring-white/20 transition hover:scale-105 hover:bg-[#1ebe57]"
      >
        <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#25D366] opacity-30" />
        <svg viewBox="0 0 32 32" className="h-6 w-6 fill-current" aria-hidden>
          <path d="M16.001 3C9.373 3 4 8.373 4 15c0 2.385.703 4.6 1.91 6.46L4 29l7.74-1.86A11.94 11.94 0 0 0 16 27c6.627 0 12-5.373 12-12S22.628 3 16.001 3Zm0 21.6c-1.86 0-3.6-.5-5.1-1.36l-.36-.22-4.6 1.1 1.12-4.48-.24-.38A9.55 9.55 0 0 1 6.4 15c0-5.3 4.3-9.6 9.6-9.6s9.6 4.3 9.6 9.6-4.3 9.6-9.6 9.6Zm5.5-7.18c-.3-.15-1.78-.88-2.06-.98-.28-.1-.48-.15-.68.15-.2.3-.78.98-.96 1.18-.18.2-.36.22-.66.07-.3-.15-1.26-.46-2.4-1.48-.88-.78-1.48-1.74-1.66-2.04-.18-.3-.02-.46.13-.6.13-.13.3-.36.45-.54.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.53-.08-.15-.68-1.62-.92-2.22-.24-.58-.5-.5-.68-.5l-.58-.01c-.2 0-.53.07-.8.36-.28.3-1.06 1.03-1.06 2.5s1.09 2.9 1.24 3.1c.15.2 2.14 3.26 5.18 4.57.72.3 1.28.49 1.72.62.72.23 1.38.2 1.9.12.58-.08 1.78-.72 2.04-1.42.25-.7.25-1.3.17-1.42-.08-.13-.28-.2-.58-.35Z"/>
        </svg>
        <span className="hidden sm:inline">WhatsApp</span>
      </a>
    </div>
  );
}

function ContactRow({ icon: Icon, label, value, href }: { icon: typeof Mail; label: string; value: string; href?: string }) {
  const inner = (
    <div className="flex items-start gap-4 rounded-xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-gold/60 hover:bg-white/[0.06]">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gold/15 text-gold">
        <Icon className="h-4 w-4" />
      </div>
      <div>
        <div className="text-[10px] uppercase tracking-[0.22em] text-primary-foreground/50">{label}</div>
        <div className="mt-1 text-base text-primary-foreground">{value}</div>
      </div>
    </div>
  );
  return href ? <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">{inner}</a> : inner;
}
