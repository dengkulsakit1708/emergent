import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Truck, Plane, Waves, CheckCircle2 } from "lucide-react";
import PageHero from "../components/common/PageHero";
import { useT } from "../context/LanguageContext";

const HERO_IMG = "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=1920&q=80&auto=format&fit=crop";

const TechnologyDistribution = () => {
  const t = useT();

  const segments = [
    {
      icon: Truck,
      tag: "A",
      title: t("Ground Technologies", "Teknologi Darat"),
      brands: ["GroundProbe", "Imajing"],
      desc: t(
        "Ground-based geospatial technologies for mobile mapping, road asset management, and infrastructure data acquisition — supporting faster, safer, and more accurate field data collection.",
        "Teknologi geospatial berbasis darat untuk mobile mapping, manajemen aset jalan, dan akuisisi data infrastruktur — mendukung pengumpulan data lapangan yang lebih cepat, aman, dan akurat."
      ),
      solutions: [
        t("Mobile Mapping", "Mobile Mapping"),
        t("Road Asset Survey", "Survey Aset Jalan"),
        t("Infrastructure Mapping", "Pemetaan Infrastruktur"),
        t("Pavement & Corridor Inspection", "Inspeksi Perkerasan & Koridor"),
        t("GIS Data Collection", "Pengumpulan Data GIS"),
        t("Road Network Digitalization", "Digitalisasi Jaringan Jalan"),
      ],
    },
    {
      icon: Plane,
      tag: "B",
      title: t("Aerial Technologies", "Teknologi Udara"),
      brands: ["DJI Enterprise", "GreenValley International"],
      desc: t(
        "Aerial mapping technologies including drone platforms, LiDAR sensors, and mapping systems for high-resolution data acquisition across infrastructure, mining, forestry, and industrial applications.",
        "Teknologi aerial mapping termasuk platform drone, sensor LiDAR, dan sistem pemetaan untuk akuisisi data resolusi tinggi pada aplikasi infrastruktur, pertambangan, kehutanan, dan industri."
      ),
      solutions: [
        t("Drone Mapping", "Pemetaan Drone"),
        t("UAV LiDAR", "UAV LiDAR"),
        t("Photogrammetry", "Photogrammetry"),
        t("Aerial Inspection", "Inspeksi Udara"),
        t("Forestry & Vegetation Mapping", "Pemetaan Kehutanan & Vegetasi"),
        t("Mining & Infrastructure Mapping", "Pemetaan Tambang & Infrastruktur"),
        t("Digital Twin Data Acquisition", "Akuisisi Data Digital Twin"),
      ],
    },
    {
      icon: Waves,
      tag: "C",
      title: t("Marine Technologies", "Teknologi Marine"),
      brands: ["Baywei", "Sonardyne", "Kongsberg", "Teledyne", "EIVA", "Selected Uni-Series"],
      desc: t(
        "Selected marine technologies for hydrography, offshore positioning, underwater mapping, navigation, and marine data processing — supporting marine construction, offshore energy, dredging, ports, subsea inspection, and survey operations.",
        "Teknologi marine terpilih untuk hidrografi, offshore positioning, underwater mapping, navigasi, dan marine data processing — mendukung marine construction, offshore energy, dredging, pelabuhan, subsea inspection, dan operasi survey."
      ),
      solutions: [
        t("Hydrographic Survey", "Hydrographic Survey"),
        t("Multibeam & Singlebeam Echosounder", "Multibeam & Singlebeam Echosounder"),
        t("Side Scan Sonar", "Side Scan Sonar"),
        t("Sub-bottom Profiler", "Sub-bottom Profiler"),
        t("Offshore Positioning (USBL / LBL / INS)", "Offshore Positioning (USBL / LBL / INS)"),
        t("Navigation Systems", "Sistem Navigasi"),
        t("Marine Data Processing Software", "Software Marine Data Processing"),
        t("USV / Autonomous Survey Platform", "USV / Autonomous Survey Platform"),
        t("Subsea Inspection Support", "Subsea Inspection Support"),
      ],
    },
  ];

  return (
    <div data-testid="tech-distribution-page">
      <PageHero
        eyebrow={t("Business Unit 01", "Business Unit 01")}
        title={t("Technology Distribution", "Distribusi Teknologi")}
        subtitle={t(
          "Providing selected technologies for ground, aerial, and marine applications — from globally recognized brands trusted across offshore, marine, geospatial, mining, and infrastructure operations.",
          "Menyediakan teknologi terpilih untuk aplikasi darat, udara, dan marine — dari brand global yang dipercaya di operasi offshore, marine, geospatial, pertambangan, dan infrastruktur."
        )}
        image={HERO_IMG}
      />

      <section className="section-pad bg-white">
        <div className="container-x space-y-20">
          {segments.map((seg) => (
            <div key={seg.tag} className="grid lg:grid-cols-12 gap-10">
              <div className="lg:col-span-4">
                <div className="sticky top-28">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-12 h-12 rounded-xl bg-[#00AEEF] flex items-center justify-center">
                      <seg.icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="font-mono-tech text-xs tracking-widest text-[#4B5563]">SEGMENT {seg.tag}</span>
                  </div>
                  <h2 className="font-display font-bold text-3xl md:text-4xl text-[#071E3D] leading-tight mb-4">
                    {seg.title}
                  </h2>
                  <p className="text-[#4B5563] leading-relaxed">{seg.desc}</p>
                </div>
              </div>
              <div className="lg:col-span-8">
                <div className="bg-[#F5F7FA] rounded-2xl p-8 mb-6">
                  <div className="eyebrow mb-4">{t("Brands & Product References", "Brand & Referensi Produk")}</div>
                  <div className="flex flex-wrap gap-2">
                    {seg.brands.map((b) => (
                      <span key={b} className="inline-flex items-center px-4 py-2 rounded-full bg-white border border-gray-200 font-display font-semibold text-[#071E3D] text-sm">
                        {b}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-3">
                  {seg.solutions.map((sol) => (
                    <div key={sol} className="flex items-start gap-3 p-4 rounded-xl border border-gray-100 hover:border-[#00AEEF]/40 hover:bg-[#EAF7FF]/30 transition-all">
                      <CheckCircle2 className="w-5 h-5 text-[#00AEEF] mt-0.5 shrink-0" />
                      <span className="text-[#1F2933] font-medium text-sm">{sol}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Disclaimer + CTA */}
      <section className="py-16 bg-[#F5F7FA]">
        <div className="container-x">
          <div className="bg-white rounded-2xl p-8 md:p-12 border border-gray-100 grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <div className="eyebrow mb-3">{t("Note", "Catatan")}</div>
              <p className="text-[#4B5563] leading-relaxed">
                {t(
                  "Selected Uni-series and marine offshore products are presented as part of Sonar's marine technology portfolio. Available products and solutions may depend on commercial arrangement, project requirements, and availability.",
                  "Selected Uni-series dan produk marine offshore disajikan sebagai bagian dari portofolio teknologi marine Sonar. Ketersediaan produk dan solusi dapat bergantung pada commercial arrangement, kebutuhan proyek, dan availability."
                )}
              </p>
            </div>
            <div className="lg:col-span-4 flex lg:justify-end">
              <Link to="/contact" className="btn-primary">
                {t("Discuss Product Requirement", "Diskusikan Kebutuhan Produk")} <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TechnologyDistribution;
