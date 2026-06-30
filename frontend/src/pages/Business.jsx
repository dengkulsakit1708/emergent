import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Cpu, Ship, LayoutDashboard } from "lucide-react";
import PageHero from "../components/common/PageHero";
import { useT } from "../context/LanguageContext";

const TECH_IMG = "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=1200&q=80&auto=format&fit=crop";
const MARINE_IMG = "https://images.unsplash.com/photo-1598408745613-178751e2ccde?w=1200&q=80&auto=format&fit=crop";
const DIGITAL_IMG = "https://images.unsplash.com/photo-1686061594225-3e92c0cd51b0?w=1200&q=80&auto=format&fit=crop";
const HERO_IMG = "https://images.unsplash.com/photo-1697599426273-93e13129bcbc?w=1920&q=80&auto=format&fit=crop";

const Business = () => {
  const t = useT();

  const sections = [
    {
      to: "/business/technology-distribution",
      icon: Cpu,
      tag: "01",
      title: t("Technology Distribution", "Distribusi Teknologi"),
      desc: t(
        "Selected ground, aerial, and marine technologies from globally recognized brands — Baywei, Imajing, GreenValley, DJI Enterprise, GroundProbe, Sonardyne, Kongsberg, Teledyne, EIVA, and Selected Uni-Series products.",
        "Teknologi darat, udara, dan marine terpilih dari brand global — Baywei, Imajing, GreenValley, DJI Enterprise, GroundProbe, Sonardyne, Kongsberg, Teledyne, EIVA, dan Selected Uni-Series products."
      ),
      img: TECH_IMG,
      bullets: [
        t("Ground · Mobile Mapping & GIS", "Darat · Mobile Mapping & GIS"),
        t("Aerial · UAV LiDAR & Drone Mapping", "Udara · UAV LiDAR & Drone Mapping"),
        t("Marine · Hydrography & Positioning", "Marine · Hidrografi & Positioning"),
      ],
    },
    {
      to: "/business/marine-project-support",
      icon: Ship,
      tag: "02",
      title: t("Marine Project Support", "Marine Project Support"),
      desc: t(
        "Equipment rental, offshore personnel, vessel mobilization, project coordination, technical advisory, installation & commissioning support, and training.",
        "Sewa peralatan, personel offshore, mobilisasi kapal, koordinasi proyek, technical advisory, dukungan instalasi & commissioning, dan training."
      ),
      img: MARINE_IMG,
      bullets: [
        t("Equipment Rental & Mobilization", "Sewa Peralatan & Mobilisasi"),
        t("Offshore Personnel Network", "Jaringan Personel Offshore"),
        t("Technical Advisory & Training", "Technical Advisory & Training"),
      ],
    },
    {
      to: "/business/digital-products",
      icon: LayoutDashboard,
      tag: "03",
      title: t("Digital Products", "Produk Digital"),
      desc: t(
        "Subscription-based Offshore Workforce & Field Operations Platform — attendance, timesheet, rotation, field reporting, and operational dashboards.",
        "Platform Offshore Workforce & Field Operations berbasis subscription — attendance, timesheet, rotation, field reporting, dan operational dashboard."
      ),
      img: DIGITAL_IMG,
      bullets: [
        t("Attendance & Timesheet", "Attendance & Timesheet"),
        t("Leave & Crew Rotation", "Leave & Rotasi Crew"),
        t("Field Reporting & Dashboards", "Field Reporting & Dashboard"),
      ],
    },
  ];

  return (
    <div data-testid="business-page">
      <PageHero
        eyebrow={t("Business", "Bisnis")}
        title={t("Three integrated business units.", "Tiga unit bisnis terintegrasi.")}
        subtitle={t(
          "Technology. Project Support. Digital Operations. One partner for marine, offshore, geospatial, mining, and infrastructure clients.",
          "Teknologi. Project Support. Digital Operations. Satu mitra untuk klien marine, offshore, geospatial, pertambangan, dan infrastruktur."
        )}
        image={HERO_IMG}
      />

      <section className="section-pad bg-white">
        <div className="container-x space-y-24">
          {sections.map((s, idx) => (
            <div key={s.tag} className={`grid lg:grid-cols-12 gap-12 items-center ${idx % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""}`}>
              <div className="lg:col-span-6">
                <div className="relative overflow-hidden rounded-2xl aspect-[5/4] bg-[#071E3D]">
                  <img src={s.img} alt={s.title} className="absolute inset-0 w-full h-full object-cover opacity-85" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071E3D]/80 via-transparent to-transparent" />
                  <div className="absolute top-6 left-6 right-6 flex items-start justify-between">
                    <span className="font-mono-tech text-xs uppercase tracking-widest text-white/80">UNIT — {s.tag}</span>
                    <div className="w-12 h-12 rounded-xl bg-[#00AEEF] flex items-center justify-center">
                      <s.icon className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-6">
                <div className="eyebrow mb-4">UNIT {s.tag}</div>
                <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-[#071E3D] leading-tight mb-5">
                  {s.title}
                </h2>
                <p className="text-[#4B5563] text-base md:text-lg leading-relaxed mb-7">{s.desc}</p>
                <ul className="space-y-2.5 mb-8">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-3 text-[#1F2933]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00AEEF]" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <Link to={s.to} className="btn-outline-navy" data-testid={`business-cta-${s.tag}`}>
                  {t("Explore Unit", "Jelajahi Unit")} <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Business;
