import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import logoAsset from "@/assets/ta-logo.asset.json";
import logoLightAsset from "@/assets/ta-logo-transparent.asset.json";
import officeAsset from "@/assets/ta-office.asset.json";
import { Mail, MapPin, MessageCircle, CircleCheck, Star, ArrowRight, Building2, Calculator, ShieldCheck, FileText, Briefcase, FileSearch, BadgeCheck, IdCard, Utensils, ChartColumn } from "lucide-react";

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

const partners = [
  { name: "Acuven Technology Sdn Bhd", url: "https://acuventech.com/" },
];

// "yes" = recognised, "pathway" = recognised pathway, "core" = core local qualification, "asean" = ASEAN region, null = n/a
type Recognition = "yes" | "pathway" | "core" | "asean" | null;
const credentials: { name: string; full: string; my: Recognition; sg: Recognition; stars: number }[] = [
  { name: "ACCA", full: "Association of Chartered Certified Accountants", my: "yes", sg: "yes", stars: 5 },
  { name: "CPA Australia", full: "CPA Australia", my: "yes", sg: "yes", stars: 5 },
  { name: "CIMA", full: "Chartered Institute of Management Accountants", my: "yes", sg: "yes", stars: 4 },
  { name: "MICPA / CA ANZ", full: "Malaysian Institute of Certified Public Accountants / CA ANZ", my: "yes", sg: "pathway", stars: 5 },
  { name: "MIA C.A.(M)", full: "Malaysian Institute of Accountants", my: "core", sg: null, stars: 4 },
  { name: "CA (Singapore) / SCAQ", full: "Institute of Singapore Chartered Accountants", my: null, sg: "core", stars: 5 },
  { name: "ASEAN CPA", full: "ASEAN Chartered Professional Accountant", my: "asean", sg: "asean", stars: 5 },
];

const team = {
  head: { name: "KONG KJ", role: "Senior Executive", email: "tna.hq.hr.8839@gmail.com" },
  departments: [
    { key: "accounting", email: "tna.acc8839@gmail.com", members: [
      { name: "Claire Tan", role: "Accounting Manager" },
      { name: "Rachel Lim", role: "Senior Accounts Executive" },
      { name: "Nicole Wong", role: "Accounts Executive" },
      { name: "Emily Lim", role: "Accounts Assistant" },
    ] },
    { key: "tax", email: "tna.tax8839@gmail.com", members: [
      { name: "Audrey Lee", role: "Tax Manager" },
      { name: "Natalie Wong", role: "Tax Executive" },
      { name: "Grace Tan", role: "Tax Assistant" },
    ] },
    { key: "audit", email: "tna.audit8839@gmail.com", members: [
      { name: "Michelle Ng", role: "Audit Manager" },
      { name: "Alicia Lim", role: "Audit Senior" },
      { name: "Chloe Wong", role: "Audit Associate" },
    ] },
    { key: "secretarial", email: "tna.secretarial8839@gmail.com", members: [
      { name: "Sophia Tan", role: "Corporate Secretarial Executive" },
      { name: "Jessica Lim", role: "Secretarial Assistant" },
    ] },
    { key: "advisory", email: "tna.acc8839@gmail.com", members: [
      { name: "Vanessa Lee", role: "Business Advisory Manager" },
      { name: "Olivia Tan", role: "Accounting & Business Consultant" },
    ] },
  ],
} as const;

const copy = {
  zh: {
    nav: { services: "服務項目", about: "關於我們", team: "專業團隊", credentials: "資格認證", why: "我們的優勢", partners: "合作夥伴", contact: "聯絡我們" },
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
      { icon: Calculator, t: "會計與財務服務", items: ["全套帳務", "日常記帳", "應收賬款 / 應付賬款", "銀行對賬", "總帳", "試算表", "財務報表", "管理帳", "財務分析", "成本控制", "預算管理", "月結 / 年結", "財務報表編製與調整"] },
      { icon: FileText, t: "稅務服務", items: ["公司稅務申報", "個人稅務服務", "稅務規劃", "稅務諮詢", "稅務申訴", "GST / SST 註冊與合規", "稅務計算與申報", "稅務問題諮詢", "企業及個人稅務服務"] },
      { icon: FileSearch, t: "審計服務", items: ["法定審計", "內部審計", "專項審計", "審計報告", "審計文件準備", "審計協調"] },
      { icon: Briefcase, t: "公司秘書服務", items: ["公司秘書服務", "公司法定文件準備", "董事會決議", "董事會會議記錄", "年報申報", "公司資料更新", "公司合規維護", "SSM 相關申報"] },
      { icon: Building2, t: "公司註冊服務", items: ["Sdn. Bhd. 註冊", "Pte. Ltd. 註冊", "LLP 註冊", "公司註冊諮詢", "公司資料變更", "分行註冊", "Representative Office 註冊"] },
      { icon: BadgeCheck, t: "營業執照 / 準證服務", items: ["營業執照", "各類行業許可證", "執照更新", "Permit 申請", "特定行業許可 / 準證", "建築 / 工程相關準證", "食品 / 餐飲執照", "教育 / 醫療 / 旅遊 / 運輸等許可證", "進出口許可證"] },
      { icon: IdCard, t: "工作準證 / 移民相關服務", items: ["Employment Pass (EP)", "S Pass", "Dependant Pass", "Work Permit", "工作準證申請", "準證更新", "相關申請諮詢"] },
      { icon: Utensils, t: "食品與商業許可", items: ["Food & Beverage Licence", "餐飲執照", "食品相關許可證", "Business Licence", "Import & Export Permit", "行業特定許可證"] },
      { icon: ShieldCheck, t: "企業合規與諮詢", items: ["公司合規諮詢", "會計合規", "稅務合規", "SSM / ACRA 申報與更新", "GST / SST 合規", "企業架構諮詢", "財務諮詢", "稅務諮詢", "企業經營合規規劃"] },
    ],
    listed: {
      t: "上市公司服務",
      groups: [
        { t: "上市公司財務與會計服務", items: ["上市公司會計服務", "財務報表編製", "管理帳 / 合併帳", "月 / 季 / 年結", "集團財務報告", "財務分析 / 預算與現金流", "財務數據整理及報告"] },
        { t: "上市公司合規服務", items: ["Bursa Malaysia 相關合規支持", "Companies Act 合規", "SSM 申報與資料維護", "年度報告相關資料準備", "企業管治文件支持", "董事會 / 股東會文件準備", "監管申報資料協調"] },
        { t: "上市公司審計與稅務支持", items: ["審計協調", "內部審計", "稅務計算", "公司稅務申報", "稅務規劃", "審計 / 稅務代理文件協調"] },
        { t: "企業重大項目支持", items: ["IPO 前期財務資料整理", "Due Diligence 財務資料準備", "財務盡職調查", "企業重組", "M&A 財務資料支持", "集團公司帳務整合", "上市後財務及合規支持"] },
      ],
    },
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
    teamTitle: "專業團隊與組織架構",
    teamSubtitle: "各部門專人負責。直接發郵件到對應部門，回覆更快。",
    departments: { accounting: "會計部", tax: "稅務部", audit: "審計與鑑證部", secretarial: "公司秘書部", advisory: "商業顧問部" },
    credentialsTitle: "專業認證與資格",
    credentialsSubtitle: "馬來西亞、新加坡及國際認可的主要會計專業資格一覽。",
    credentialsHead: { cert: "認證 / 資格", my: "馬來西亞", sg: "新加坡", intl: "國際認可" },
    recognition: { pathway: "有認可路線", core: "核心專業資格", asean: "ASEAN 區域" },
    partnersTitle: "值得信賴的合作夥伴",
    partnersSubtitle: "攜手優秀夥伴，為客戶提供更完整的服務網絡。",
    contactTitle: "開啟對話",
    contactSubtitle: "免費諮詢，了解我們如何協助您的企業跨境成長。",
    contactWhatsapp: "WhatsApp",
    contactEmail: "電子郵件",
    contactLocation: "服務地區",
    footerTagline: "Tax · Accounting · Advisory · Compliance",
    footerRights: "保留所有權利。",
    footerTechBy: "網站技術支持",
  },
  en: {
    nav: { services: "Services", about: "About", team: "Team", credentials: "Credentials", why: "Why Us", partners: "Partners", contact: "Contact" },
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
      { icon: Calculator, t: "Accounting & Financial Services", items: ["Full Set Accounts", "Bookkeeping", "AR / AP", "Bank Reconciliation", "General Ledger", "Trial Balance", "Financial Statements", "Management Accounts", "Financial Analysis", "Cost Control", "Budget Management", "Month-End & Year-End Closing", "Financial Statement Preparation & Adjustments"] },
      { icon: FileText, t: "Tax Services", items: ["Corporate Tax Filing", "Personal Tax", "Tax Planning", "Tax Advisory", "Tax Appeal", "GST / SST Registration & Compliance", "Tax Computation & Filing", "Tax Queries & Consultation", "Corporate & Individual Tax Services"] },
      { icon: FileSearch, t: "Audit Services", items: ["Statutory Audit", "Internal Audit", "Special Purpose Audit", "Audit Reports", "Audit Documentation", "Audit Liaison"] },
      { icon: Briefcase, t: "Corporate Secretarial Services", items: ["Company Secretarial Services", "Statutory Document Preparation", "Board Resolutions", "Minutes", "Annual Return", "Company Particulars Updates", "Corporate Compliance Maintenance", "SSM Filings"] },
      { icon: Building2, t: "Company Registration Services", items: ["Sdn. Bhd. Incorporation", "Pte. Ltd. Incorporation", "LLP Registration", "Incorporation Advisory", "Change of Company Particulars", "Branch Registration", "Representative Office Registration"] },
      { icon: BadgeCheck, t: "Licensing & Permits Services", items: ["Business Licence", "Industry Permits", "Licence Renewal", "Permit Applications", "Specialised Industry Permits", "Construction & Engineering Permits", "Food & F&B Licences", "Education / Healthcare / Tourism / Transport Permits", "Import & Export Permits"] },
      { icon: IdCard, t: "Employment Pass / Work Permit Services", items: ["Employment Pass (EP)", "S Pass", "Dependant Pass", "Work Permit", "Work Pass Applications", "Pass Renewal", "Application Advisory"] },
      { icon: Utensils, t: "Food & Business Licensing", items: ["Food & Beverage Licence", "Restaurant Licence", "Food-Related Permits", "Business Licence", "Import & Export Permit", "Industry-Specific Permits"] },
      { icon: ShieldCheck, t: "Compliance & Advisory", items: ["Corporate Compliance Advisory", "Accounting Compliance", "Tax Compliance", "SSM / ACRA Filings & Updates", "GST / SST Compliance", "Corporate Structure Advisory", "Financial Advisory", "Tax Advisory", "Business Compliance Planning"] },
    ],
    listed: {
      t: "Listed Company Services",
      groups: [
        { t: "Financial & Accounting Services", items: ["Listed Company Accounting", "Financial Statement Preparation", "Management / Consolidated Accounts", "Monthly / Quarterly / Year-End Closing", "Group Financial Reporting", "Financial Analysis / Budget & Cash Flow", "Financial Data Compilation & Reporting"] },
        { t: "Compliance Services", items: ["Bursa Malaysia Compliance Support", "Companies Act Compliance", "SSM Filings & Records Maintenance", "Annual Report Preparation", "Corporate Governance Documentation", "Board / Shareholder Meeting Documents", "Regulatory Filing Coordination"] },
        { t: "Audit & Tax Support", items: ["Statutory Audit Liaison", "Internal Audit", "Tax Computation", "Corporate Tax Filing", "Tax Planning", "Audit / Tax Agent Coordination"] },
        { t: "Major Corporate Projects", items: ["Pre-IPO Financial Preparation", "Due Diligence Financial Preparation", "Financial Due Diligence", "Corporate Restructuring", "M&A Financial Support", "Group Accounts Consolidation", "Post-Listing Finance & Compliance Support"] },
      ],
    },
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
    teamTitle: "Our Team & Structure",
    teamSubtitle: "A dedicated team for every function. Email the department directly for a faster reply.",
    departments: { accounting: "Accounting", tax: "Tax", audit: "Audit & Assurance", secretarial: "Corporate Secretarial", advisory: "Advisory & Consulting" },
    credentialsTitle: "Professional Credentials",
    credentialsSubtitle: "Key accounting qualifications recognised in Malaysia, Singapore and internationally.",
    credentialsHead: { cert: "Certification", my: "Malaysia", sg: "Singapore", intl: "Global Recognition" },
    recognition: { pathway: "Recognised pathway", core: "Core qualification", asean: "ASEAN region" },
    partnersTitle: "Trusted Partners",
    partnersSubtitle: "Working with great partners to give clients an even stronger service network.",
    contactTitle: "Start the Conversation",
    contactSubtitle: "Free consultation to explore how we can support your cross-border growth.",
    contactWhatsapp: "WhatsApp",
    contactEmail: "Email",
    contactLocation: "Coverage",
    footerTagline: "Tax · Accounting · Advisory · Compliance",
    footerRights: "All rights reserved.",
    footerTechBy: "Website by",
  },
} as const;

function assetUrl(url: string) {
  return import.meta.env.BASE_URL.replace(/\/$/, "") + url;
}

function Landing() {
  const [lang, setLang] = useState<Lang>("zh");
  const t = copy[lang];
  const whatsapp = "https://wa.me/601137657049";
  const whatsappId = "@tna.acc";
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
          <nav className="hidden items-center gap-6 text-sm lg:flex">
            <a href="#services" className="text-foreground/70 transition hover:text-navy">{t.nav.services}</a>
            <a href="#about" className="text-foreground/70 transition hover:text-navy">{t.nav.about}</a>
            <a href="#team" className="text-foreground/70 transition hover:text-navy">{t.nav.team}</a>
            <a href="#credentials" className="text-foreground/70 transition hover:text-navy">{t.nav.credentials}</a>
            <a href="#why" className="text-foreground/70 transition hover:text-navy">{t.nav.why}</a>
            <a href="#partners" className="text-foreground/70 transition hover:text-navy">{t.nav.partners}</a>
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
            {t.services.map(({ icon: Icon, t: title, items }, i) => (
              <div key={title} className="group bg-background p-8 transition hover:bg-white">
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-navy/5 text-navy transition group-hover:bg-navy group-hover:text-primary-foreground">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="font-serif text-2xl text-gold/70">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <h3 className="mt-6 font-serif text-xl text-navy">{title}</h3>
                <ServiceList items={items} />
              </div>
            ))}
            <div className="group bg-background p-8 transition hover:bg-white sm:col-span-2 lg:col-span-3">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-navy/5 text-navy transition group-hover:bg-navy group-hover:text-primary-foreground">
                  <ChartColumn className="h-5 w-5" />
                </div>
                <h3 className="font-serif text-xl text-navy">{t.listed.t}</h3>
                <span className="ml-auto font-serif text-2xl text-gold/70">10</span>
              </div>
              <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                {t.listed.groups.map((g) => (
                  <div key={g.t}>
                    <h4 className="text-sm font-medium text-navy">{g.t}</h4>
                    <ServiceList items={g.items} />
                  </div>
                ))}
              </div>
            </div>
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

      {/* Team */}
      <section id="team" className="border-t border-border/60 bg-secondary/40 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-[0.22em] text-gold">Our Team</div>
            <h2 className="mt-4 font-serif text-4xl text-navy sm:text-5xl">{t.teamTitle}</h2>
            <p className="mt-5 text-base text-muted-foreground">{t.teamSubtitle}</p>
          </div>
          <div className="mt-14 flex flex-col items-center">
            <div className="rounded-2xl bg-gradient-to-br from-navy-deep to-navy px-10 py-6 text-center text-primary-foreground shadow-[var(--shadow-elegant)]">
              <div className="font-serif text-2xl">{team.head.name}</div>
              <div className="mt-1 text-xs uppercase tracking-[0.2em] text-gold">{team.head.role}</div>
              <a href={`mailto:${team.head.email}`} className="mt-3 inline-flex items-center gap-1.5 break-all text-sm text-primary-foreground/80 transition hover:text-gold">
                <Mail className="h-3.5 w-3.5 shrink-0" /> {team.head.email}
              </a>
            </div>
            <div className="h-10 w-px bg-gold/60" />
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {team.departments.map((d) => (
              <div key={d.key} className="overflow-hidden rounded-2xl border border-border bg-background transition hover:border-gold hover:shadow-[var(--shadow-soft)]">
                <div className="border-b border-border bg-navy/5 p-5">
                  <h3 className="font-serif text-lg text-navy">{t.departments[d.key]}</h3>
                  <a href={`mailto:${d.email}`} className="mt-2 flex items-start gap-1.5 text-xs text-navy/70 transition hover:text-gold">
                    <Mail className="mt-px h-3.5 w-3.5 shrink-0" />
                    <span>{d.email.split("@")[0]}<wbr />@{d.email.split("@")[1]}</span>
                  </a>
                </div>
                <ul className="space-y-4 p-5">
                  {d.members.map((m) => (
                    <li key={m.name}>
                      <div className="text-sm font-medium text-foreground">{m.name}</div>
                      <div className="text-xs text-muted-foreground">{m.role}</div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section id="credentials" className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-[0.22em] text-gold">Credentials</div>
            <h2 className="mt-4 font-serif text-4xl text-navy sm:text-5xl">{t.credentialsTitle}</h2>
            <p className="mt-5 text-base text-muted-foreground">{t.credentialsSubtitle}</p>
          </div>
          <div className="mt-14 overflow-x-auto rounded-2xl border border-border shadow-[var(--shadow-soft)]">
            <table className="w-full min-w-[640px] text-sm">
              <thead className="bg-navy text-primary-foreground">
                <tr>
                  <th className="px-6 py-4 text-left font-medium">{t.credentialsHead.cert}</th>
                  <th className="px-4 py-4 text-center font-medium">{t.credentialsHead.my}</th>
                  <th className="px-4 py-4 text-center font-medium">{t.credentialsHead.sg}</th>
                  <th className="px-4 py-4 text-center font-medium">{t.credentialsHead.intl}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border bg-background">
                {credentials.map((c) => (
                  <tr key={c.name} className="transition hover:bg-secondary/40">
                    <td className="px-6 py-4">
                      <div className="font-serif text-base text-navy">{c.name}</div>
                      <div className="text-xs text-muted-foreground">{c.full}</div>
                    </td>
                    <td className="px-4 py-4 text-center"><RecognitionCell value={c.my} labels={t.recognition} /></td>
                    <td className="px-4 py-4 text-center"><RecognitionCell value={c.sg} labels={t.recognition} /></td>
                    <td className="px-4 py-4">
                      <div className="flex justify-center gap-0.5" aria-label={`${c.stars} / 5`}>
                        {Array.from({ length: c.stars }, (_, i) => (
                          <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                        ))}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
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

      {/* Partners */}
      <section id="partners" className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-[0.22em] text-gold">Partners</div>
            <h2 className="mt-4 font-serif text-4xl text-navy sm:text-5xl">{t.partnersTitle}</h2>
            <p className="mt-5 text-base text-muted-foreground">{t.partnersSubtitle}</p>
          </div>
          <div className="mt-14 flex flex-wrap gap-6">
            {partners.map((p) => (
              <a
                key={p.name}
                href={p.url}
                target="_blank"
                rel="noreferrer"
                className="group rounded-2xl border border-border bg-background p-3 grayscale transition hover:border-gold hover:shadow-[var(--shadow-soft)] hover:grayscale-0"
                aria-label={p.name}
              >
                <img src={assetUrl("/assets/acuven-log.jpeg")} alt={p.name} className="h-20 w-20 rounded-xl object-cover" />
              </a>
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
              <ContactRow icon={MessageCircle} label={t.contactWhatsapp} value={whatsappId} href={whatsapp} />
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
        <div className="mx-auto mt-6 flex max-w-7xl items-center justify-center gap-2 border-t border-white/10 px-6 pt-6 text-[11px]">
          <span>{t.footerTechBy}</span>
          <a
            href="https://acuventech.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-primary-foreground/80 transition hover:text-gold"
          >
            <img src={assetUrl("/assets/acuven-log.jpeg")} alt="" className="h-7 w-7 rounded-md object-cover" />
            Acuven Technology Sdn Bhd
          </a>
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

function ServiceList({ items }: { items: readonly string[] }) {
  return (
    <ul className="mt-4 space-y-1.5 text-sm text-muted-foreground">
      {items.map((item) => (
        <li key={item} className="flex gap-2">
          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold" />
          {item}
        </li>
      ))}
    </ul>
  );
}

function RecognitionCell({ value, labels }: { value: Recognition; labels: { pathway: string; core: string; asean: string } }) {
  if (value === null) return <span className="text-muted-foreground">—</span>;
  if (value === "yes") return <CircleCheck className="mx-auto h-6 w-6 text-emerald-600" aria-label="✓" />;
  if (value === "pathway")
    return (
      <span className="inline-flex items-center gap-1.5 text-foreground/80">
        <CircleCheck className="h-5 w-5 shrink-0 text-emerald-600" /> {labels.pathway}
      </span>
    );
  return <span className="text-foreground/80">{value === "core" ? labels.core : labels.asean}</span>;
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
