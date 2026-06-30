import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight, Check, Fingerprint, ClipboardList, CalendarClock, FileBarChart, LayoutDashboard,
  Sparkles,
} from "lucide-react";
import PageHero from "../components/common/PageHero";
import { useT } from "../context/LanguageContext";
import { SonarGrid } from "../components/common/SonarPattern";

const HERO_IMG = "https://images.unsplash.com/photo-1686061594225-3e92c0cd51b0?w=1920&q=80&auto=format&fit=crop";
const DASHBOARD_IMG = "https://images.unsplash.com/photo-1748609160056-7b95f30041f0?w=1200&q=80&auto=format&fit=crop";

const DigitalProducts = () => {
  const t = useT();

  const modules = [
    {
      icon: Fingerprint,
      title: t("Attendance Management", "Manajemen Kehadiran"),
      items: [
        t("GPS check-in", "GPS check-in"),
        t("Face recognition", "Face recognition"),
        t("Shift attendance", "Shift attendance"),
        t("Location-based attendance", "Attendance berbasis lokasi"),
        t("Offshore crew attendance", "Offshore crew attendance"),
      ],
    },
    {
      icon: ClipboardList,
      title: t("Timesheet", "Timesheet"),
      items: [
        t("Daily timesheet", "Timesheet harian"),
        t("Project-based timesheet", "Timesheet berbasis proyek"),
        t("Approval workflow", "Approval workflow"),
        t("Export to payroll or invoicing", "Export ke payroll atau invoicing"),
      ],
    },
    {
      icon: CalendarClock,
      title: t("Leave & Rotation", "Cuti & Rotasi"),
      items: [
        t("Offshore rotation schedule", "Jadwal rotasi offshore"),
        t("Leave request", "Permintaan cuti"),
        t("Crew availability", "Crew availability"),
        t("Replacement tracking", "Tracking pengganti"),
      ],
    },
    {
      icon: FileBarChart,
      title: t("Field Reporting", "Pelaporan Lapangan"),
      items: [
        t("Daily progress report", "Laporan progres harian"),
        t("HSE observation", "HSE observation"),
        t("Equipment log", "Equipment log"),
        t("Photo evidence", "Photo evidence"),
        t("Site activity report", "Site activity report"),
      ],
    },
    {
      icon: LayoutDashboard,
      title: t("Dashboard", "Dashboard"),
      items: [
        t("Workforce visibility", "Visibilitas workforce"),
        t("Project status", "Status proyek"),
        t("Productivity", "Produktivitas"),
        t("Equipment utilization", "Utilisasi peralatan"),
        t("Attendance analytics", "Analitik attendance"),
        t("Management reporting", "Pelaporan management"),
      ],
    },
  ];

  const tiers = [
    {
      name: "Starter",
      tagline: t("Small teams getting started", "Tim kecil yang baru memulai"),
      features: [
        t("Up to 25 users", "Hingga 25 pengguna"),
        t("Attendance & Timesheet", "Attendance & Timesheet"),
        t("Mobile app access", "Akses mobile app"),
        t("Email support", "Email support"),
      ],
      highlight: false,
    },
    {
      name: "Professional",
      tagline: t("Project-based offshore teams", "Tim offshore berbasis proyek"),
      features: [
        t("Up to 200 users", "Hingga 200 pengguna"),
        t("All Starter features", "Semua fitur Starter"),
        t("Leave & Rotation", "Cuti & Rotasi"),
        t("Field Reporting", "Field Reporting"),
        t("Operational Dashboard", "Operational Dashboard"),
        t("Priority support", "Priority support"),
      ],
      highlight: true,
    },
    {
      name: "Enterprise",
      tagline: t("Multi-project, multi-location operations", "Operasi multi-proyek, multi-lokasi"),
      features: [
        t("Unlimited users", "Unlimited users"),
        t("All Professional features", "Semua fitur Professional"),
        t("Custom modules & integrations", "Custom modules & integrations"),
        t("SSO & advanced security", "SSO & keamanan lanjutan"),
        t("Dedicated success manager", "Dedicated success manager"),
        t("SLA & on-site training", "SLA & training on-site"),
      ],
      highlight: false,
    },
  ];

  return (
    <div data-testid="digital-products-page">
      <PageHero
        eyebrow={t("Business Unit 03", "Business Unit 03")}
        title={t("Digital Products", "Produk Digital")}
        subtitle={t(
          "Subscription-based digital platform for offshore workforce and field operations — attendance, timesheet, rotation, reporting, and dashboards.",
          "Platform digital berbasis subscription untuk offshore workforce dan field operations — attendance, timesheet, rotasi, reporting, dan dashboard."
        )}
        image={HERO_IMG}
      />

      {/* Intro + hero product */}
      <section className="section-pad bg-white">
        <div className="container-x">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <div className="eyebrow mb-4">{t("Main Product", "Produk Utama")}</div>
              <h2 className="font-display font-bold text-3xl md:text-5xl text-[#071E3D] leading-tight mb-6">
                {t("Offshore Workforce &", "Offshore Workforce &")}<br />
                <span className="text-[#00AEEF]">{t("Field Operations Platform", "Field Operations Platform")}</span>
              </h2>
              <p className="text-[#4B5563] text-lg leading-relaxed mb-6">
                {t(
                  "Sonar's digital product helps offshore and field-based organizations manage attendance, timesheets, crew rotation, daily reporting, and operational visibility through a single subscription-based platform.",
                  "Produk digital Sonar membantu organisasi offshore dan berbasis lapangan mengelola attendance, timesheet, rotasi crew, daily reporting, dan visibilitas operasional melalui satu platform berbasis subscription."
                )}
              </p>
              <p className="text-[#4B5563] leading-relaxed">
                {t(
                  "This is not just an attendance app — it's a digital operations platform built for the realities of offshore and field execution.",
                  "Ini bukan sekadar attendance app — ini adalah platform digital operations yang dibangun untuk realita eksekusi offshore dan lapangan."
                )}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/contact" className="btn-primary">
                  {t("Request a Demo", "Minta Demo")} <ArrowRight className="w-4 h-4" />
                </Link>
                <Link to="/contact" className="btn-outline-navy">
                  {t("Talk to Sales", "Bicara dengan Sales")}
                </Link>
              </div>
            </div>
            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden aspect-[5/4] bg-[#071E3D]">
                <img src={DASHBOARD_IMG} alt="" className="absolute inset-0 w-full h-full object-cover opacity-90" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071E3D]/70 via-transparent to-transparent" />
                <div className="absolute top-6 left-6 inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 text-white text-xs font-mono-tech tracking-wider">
                  <Sparkles className="w-3.5 h-3.5 text-[#00AEEF]" /> {t("LIVE DASHBOARD", "LIVE DASHBOARD")}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modules */}
      <section className="section-pad bg-[#F5F7FA] relative overflow-hidden">
        <SonarGrid opacity={0.4} />
        <div className="container-x relative">
          <div className="max-w-3xl mb-14">
            <div className="eyebrow mb-4">{t("Core Modules", "Modul Utama")}</div>
            <h2 className="font-display font-bold text-3xl md:text-5xl text-[#071E3D] leading-tight">
              {t("Five modules. One platform. Built for offshore.", "Lima modul. Satu platform. Dibangun untuk offshore.")}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.map((m, i) => (
              <div key={i} className="sonar-card p-7 h-full">
                <div className="flex items-center justify-between mb-5">
                  <div className="w-11 h-11 rounded-xl bg-[#00AEEF]/10 border border-[#00AEEF]/20 flex items-center justify-center">
                    <m.icon className="w-5 h-5 text-[#00AEEF]" />
                  </div>
                  <span className="font-mono-tech text-xs text-[#4B5563] tracking-widest">0{i + 1}</span>
                </div>
                <h3 className="font-display font-bold text-xl text-[#071E3D] mb-4">{m.title}</h3>
                <ul className="space-y-2">
                  {m.items.map((it) => (
                    <li key={it} className="flex items-start gap-2 text-sm text-[#4B5563]">
                      <Check className="w-4 h-4 text-[#00AEEF] mt-0.5 shrink-0" />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="section-pad bg-white">
        <div className="container-x">
          <div className="max-w-3xl mb-14">
            <div className="eyebrow mb-4">{t("Subscription Tiers", "Paket Subscription")}</div>
            <h2 className="font-display font-bold text-3xl md:text-5xl text-[#071E3D] leading-tight">
              {t("Pricing built for offshore reality.", "Harga yang dirancang untuk realita offshore.")}
            </h2>
            <p className="text-[#4B5563] text-base mt-4">
              {t("Indicative tiers. Final pricing depends on user count, modules, and deployment scope.", "Tier indikatif. Harga final tergantung jumlah user, modul, dan scope deployment.")}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className={`rounded-2xl p-8 flex flex-col h-full transition-all ${
                  tier.highlight
                    ? "bg-[#071E3D] text-white border-2 border-[#00AEEF] shadow-2xl shadow-[#00AEEF]/10 lg:-translate-y-4"
                    : "bg-white border border-gray-200 hover:border-[#00AEEF]/40"
                }`}
              >
                {tier.highlight && (
                  <span className="inline-flex items-center gap-1.5 self-start bg-[#00AEEF] text-white text-xs font-mono-tech tracking-widest px-3 py-1 rounded-full mb-5">
                    <Sparkles className="w-3 h-3" /> {t("MOST POPULAR", "PALING POPULER")}
                  </span>
                )}
                <h3 className={`font-display font-bold text-2xl mb-1 ${tier.highlight ? "text-white" : "text-[#071E3D]"}`}>
                  {tier.name}
                </h3>
                <p className={`text-sm mb-6 ${tier.highlight ? "text-white/65" : "text-[#4B5563]"}`}>{tier.tagline}</p>
                <div className={`pb-6 mb-6 border-b ${tier.highlight ? "border-white/15" : "border-gray-100"}`}>
                  <div className={`font-display font-bold text-3xl ${tier.highlight ? "text-white" : "text-[#071E3D]"}`}>
                    {t("Custom Quote", "Penawaran Khusus")}
                  </div>
                  <div className={`text-xs mt-1 ${tier.highlight ? "text-white/60" : "text-[#4B5563]"}`}>
                    {t("billed per project / annually", "ditagih per proyek / tahunan")}
                  </div>
                </div>
                <ul className="space-y-3 flex-1 mb-7">
                  {tier.features.map((f) => (
                    <li key={f} className={`flex items-start gap-3 text-sm ${tier.highlight ? "text-white/85" : "text-[#1F2933]"}`}>
                      <Check className={`w-4 h-4 mt-0.5 shrink-0 ${tier.highlight ? "text-[#00AEEF]" : "text-[#00AEEF]"}`} />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  data-testid={`tier-${tier.name.toLowerCase()}`}
                  className={tier.highlight ? "btn-primary justify-center" : "btn-outline-navy justify-center"}
                >
                  {t("Get Started", "Mulai")} <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default DigitalProducts;
