import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight, Cpu, Ship, LayoutDashboard, Radar, MapPin, Users,
  Boxes, Network, MonitorSmartphone, Anchor, Factory, Mountain,
  Building2, Landmark, Map, Plane, Waves, ChevronRight, ShieldCheck,
} from "lucide-react";
import { useT } from "../context/LanguageContext";
import { SonarLines, SonarGrid, SonarPing } from "../components/common/SonarPattern";

const HERO_IMG = "https://images.unsplash.com/photo-1609337231803-2adad48ea1d1?w=1920&q=80&auto=format&fit=crop";
const TECH_IMG = "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=900&q=80&auto=format&fit=crop";
const MARINE_IMG = "https://images.unsplash.com/photo-1598408745613-178751e2ccde?w=900&q=80&auto=format&fit=crop";
const DIGITAL_IMG = "https://images.unsplash.com/photo-1686061594225-3e92c0cd51b0?w=900&q=80&auto=format&fit=crop";
const OIL_IMG = "https://images.unsplash.com/photo-1697599426273-93e13129bcbc?w=1200&q=80&auto=format&fit=crop";
const PORT_IMG = "https://images.unsplash.com/photo-1582517378602-f109b395ce40?w=1200&q=80&auto=format&fit=crop";

const Home = () => {
  const t = useT();

  // ===== Three Business Units =====
  const units = [
    {
      to: "/business/technology-distribution",
      icon: Cpu,
      tag: "01",
      title: t("Technology Distribution", "Distribusi Teknologi"),
      desc: t(
        "World-class technologies for ground, aerial, and marine applications.",
        "Teknologi kelas dunia untuk aplikasi darat, udara, dan marine."
      ),
      img: TECH_IMG,
    },
    {
      to: "/business/marine-project-support",
      icon: Ship,
      tag: "02",
      title: t("Marine Project Support", "Marine Project Support"),
      desc: t(
        "Equipment rental, offshore personnel, vessel mobilization, project coordination, technical advisory, installation, commissioning, and training.",
        "Sewa peralatan, personel offshore, mobilisasi kapal, koordinasi proyek, technical advisory, instalasi, commissioning, dan training."
      ),
      img: MARINE_IMG,
    },
    {
      to: "/business/digital-products",
      icon: LayoutDashboard,
      tag: "03",
      title: t("Digital Products", "Produk Digital"),
      desc: t(
        "Subscription-based platform for offshore attendance, timesheet, field reporting, and operational dashboards.",
        "Platform berbasis subscription untuk attendance offshore, timesheet, field reporting, dan operational dashboard."
      ),
      img: DIGITAL_IMG,
    },
  ];

  // ===== Why Sonar =====
  const why = [
    { icon: Radar, en: "Marine & Geospatial Technology Expertise", id: "Keahlian Teknologi Marine & Geospatial" },
    { icon: MapPin, en: "Local Technical Support", id: "Dukungan Teknis Lokal" },
    { icon: Boxes, en: "Equipment Rental & Deployment Support", id: "Sewa Peralatan & Dukungan Deployment" },
    { icon: Users, en: "Offshore Personnel Network", id: "Jaringan Personel Offshore" },
    { icon: Network, en: "Principal & Product Knowledge", id: "Pengetahuan Principal & Produk" },
    { icon: MonitorSmartphone, en: "Digital Operations Capability", id: "Kapabilitas Digital Operations" },
  ];

  // ===== Brands =====
  const brands = [
    { name: "Baywei", group: t("Marine", "Marine") },
    { name: "Sonardyne", group: t("Marine", "Marine") },
    { name: "Kongsberg", group: t("Marine", "Marine") },
    { name: "Teledyne", group: t("Marine", "Marine") },
    { name: "EIVA", group: t("Marine", "Marine") },
    { name: "Uni-Series", group: t("Marine", "Marine") },
    { name: "Imajing", group: t("Ground", "Darat") },
    { name: "GroundProbe", group: t("Ground", "Darat") },
    { name: "DJI Enterprise", group: t("Aerial", "Udara") },
    { name: "GreenValley Intl", group: t("Aerial", "Udara") },
  ];

  // ===== Industries =====
  const industries = [
    { icon: Anchor, en: "Oil & Gas", id: "Oil & Gas" },
    { icon: Waves, en: "Offshore Energy", id: "Offshore Energy" },
    { icon: Factory, en: "Marine Construction", id: "Marine Construction" },
    { icon: Ship, en: "Ports & Dredging", id: "Pelabuhan & Pengerukan" },
    { icon: Mountain, en: "Mining", id: "Pertambangan" },
    { icon: Building2, en: "Infrastructure", id: "Infrastruktur" },
    { icon: Landmark, en: "Government", id: "Pemerintah" },
    { icon: Map, en: "Geospatial & Mapping", id: "Geospatial & Pemetaan" },
  ];

  return (
    <div data-testid="home-page">
      {/* ===== HERO ===== */}
      <section className="relative min-h-[100vh] flex items-center overflow-hidden bg-[#071E3D]">
        {/* Background image */}
        <div className="absolute inset-0">
          <img src={HERO_IMG} alt="" className="w-full h-full object-cover" />
        </div>
        {/* Overlay */}
        <div className="absolute inset-0 hero-overlay" />
        {/* Subtle sonar pattern */}
        <div className="absolute inset-0 text-[#00AEEF]"><SonarLines opacity={0.12} /></div>

        <div className="container-x relative py-32 lg:py-0 w-full">
          <div className="max-w-4xl">
            <div className="flex items-center gap-2.5 mb-7 rise">
              <SonarPing />
              <span className="eyebrow text-[#00AEEF]">{t("Marine · Geospatial · Digital", "Marine · Geospatial · Digital")}</span>
            </div>
            <h1 className="font-display text-white font-bold text-4xl sm:text-5xl lg:text-7xl leading-[1.02] tracking-tight rise rise-delay-1">
              {t("Integrated Marine &", "Solusi Teknologi")}<br />
              {t("Geospatial ", "Marine & ")}<span className="text-[#00AEEF]">{t("Technology Solutions", "Geospatial")}</span>
            </h1>
            <p className="mt-8 text-white/75 text-base md:text-lg lg:text-xl max-w-2xl leading-relaxed rise rise-delay-2">
              {t(
                "Sonar delivers technology distribution, marine project support, and digital field operations platform for offshore, marine, mining, infrastructure, and geospatial industries.",
                "Sonar menghadirkan distribusi teknologi, marine project support, dan platform digital field operations untuk industri offshore, marine, pertambangan, infrastruktur, dan geospatial."
              )}
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4 rise rise-delay-3">
              <Link to="/business" data-testid="hero-cta-explore" className="btn-primary">
                {t("Explore Solutions", "Jelajahi Solusi")} <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/contact" data-testid="hero-cta-contact" className="btn-secondary">
                {t("Contact Our Team", "Hubungi Tim Kami")}
              </Link>
            </div>

            {/* Bottom stats strip */}
            <div className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-px bg-white/10 max-w-3xl rise rise-delay-4">
              {[
                { k: "10+", v: t("Global Principals", "Principal Global") },
                { k: "3", v: t("Business Units", "Business Units") },
                { k: "8+", v: t("Industries Served", "Industri Dilayani") },
                { k: "24/7", v: t("Field Support", "Dukungan Lapangan") },
              ].map((s) => (
                <div key={s.k} className="bg-[#071E3D]/60 backdrop-blur-sm px-5 py-5">
                  <div className="font-display font-bold text-2xl md:text-3xl text-white">{s.k}</div>
                  <div className="text-[11px] uppercase tracking-wider text-white/60 font-mono-tech mt-1">{s.v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-[#071E3D]/40 pointer-events-none" />
      </section>

      {/* ===== BUSINESS UNITS ===== */}
      <section className="section-pad bg-white relative">
        <div className="container-x">
          <div className="grid lg:grid-cols-12 gap-10 mb-16 items-end">
            <div className="lg:col-span-7">
              <div className="eyebrow mb-4">{t("Three Business Units", "Tiga Unit Bisnis")}</div>
              <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-[#071E3D] leading-[1.05]">
                {t("One integrated ", "Satu mitra teknologi ")}
                <span className="text-[#00AEEF]">{t("technology partner", "yang terintegrasi")}</span>
                {t(" for marine & geospatial operations.", " untuk operasi marine & geospatial.")}
              </h2>
            </div>
            <div className="lg:col-span-5">
              <p className="text-[#4B5563] text-base md:text-lg leading-relaxed">
                {t(
                  "Sonar combines world-class technology, project support, and digital operations into one cohesive partnership for principals, EPCs, oil & gas, mining, and government clients.",
                  "Sonar mengintegrasikan teknologi kelas dunia, project support, dan digital operations menjadi satu kemitraan yang kohesif untuk principal, EPC, oil & gas, pertambangan, dan klien pemerintahan."
                )}
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {units.map((u) => (
              <Link to={u.to} key={u.tag} data-testid={`unit-${u.tag}`} className="group">
                <div className="sonar-card overflow-hidden h-full flex flex-col">
                  <div className="relative h-56 overflow-hidden bg-[#071E3D]">
                    <img src={u.img} alt={u.title} className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#071E3D]/90 via-[#071E3D]/30 to-transparent" />
                    <div className="absolute top-5 left-5 right-5 flex items-start justify-between">
                      <span className="font-mono-tech text-xs text-white/60 tracking-widest">UNIT — {u.tag}</span>
                      <div className="w-10 h-10 rounded-lg bg-[#00AEEF] flex items-center justify-center">
                        <u.icon className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  </div>
                  <div className="p-7 flex flex-col flex-1">
                    <h3 className="font-display font-bold text-2xl text-[#071E3D] mb-3">{u.title}</h3>
                    <p className="text-[#4B5563] text-sm leading-relaxed flex-1">{u.desc}</p>
                    <div className="mt-6 inline-flex items-center gap-2 text-[#00AEEF] font-semibold text-sm group-hover:gap-3 transition-all">
                      {t("Discover", "Selengkapnya")} <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHY SONAR ===== */}
      <section className="section-pad bg-[#F5F7FA] relative overflow-hidden">
        <SonarGrid opacity={0.5} />
        <div className="container-x relative">
          <div className="max-w-3xl mb-16">
            <div className="eyebrow mb-4">{t("Why Sonar", "Kenapa Sonar")}</div>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-[#071E3D] leading-[1.05]">
              {t("Six reasons we earn the trust of principals and project teams.", "Enam alasan kami dipercaya principal dan tim proyek.")}
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#E5E7EB] border border-[#E5E7EB] rounded-2xl overflow-hidden">
            {why.map((w, i) => (
              <div key={i} className="bg-white p-8 hover:bg-[#EAF7FF]/40 transition-colors group">
                <div className="w-12 h-12 rounded-xl bg-[#00AEEF]/10 border border-[#00AEEF]/20 flex items-center justify-center mb-5 group-hover:bg-[#00AEEF] group-hover:border-[#00AEEF] transition-colors">
                  <w.icon className="w-5 h-5 text-[#00AEEF] group-hover:text-white transition-colors" />
                </div>
                <div className="font-mono-tech text-xs text-[#4B5563] tracking-widest mb-2">0{i + 1}</div>
                <h3 className="font-display font-semibold text-lg text-[#071E3D] leading-snug">{t(w.en, w.id)}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FEATURED TECHNOLOGIES ===== */}
      <section className="section-pad bg-[#071E3D] text-white relative overflow-hidden">
        <div className="absolute inset-0 text-[#00AEEF]"><SonarLines opacity={0.06} /></div>
        <div className="container-x relative">
          <div className="grid lg:grid-cols-12 gap-10 mb-12">
            <div className="lg:col-span-6">
              <div className="eyebrow text-[#00AEEF] mb-4">{t("Featured Technologies", "Teknologi Unggulan")}</div>
              <h2 className="font-display font-bold text-4xl md:text-5xl leading-[1.05]">
                {t("Marine & Geospatial technology portfolio.", "Portofolio teknologi Marine & Geospatial.")}
              </h2>
            </div>
            <div className="lg:col-span-6 lg:pt-4">
              <p className="text-white/65 text-base md:text-lg leading-relaxed">
                {t(
                  "Selected products and solutions from globally recognized marine and geospatial technology brands — presented as part of Sonar's technology portfolio, subject to availability and project requirements.",
                  "Produk dan solusi terpilih dari brand teknologi marine & geospatial yang diakui global — disajikan sebagai bagian dari portofolio teknologi Sonar, sesuai ketersediaan dan kebutuhan proyek."
                )}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-px bg-white/10 rounded-2xl overflow-hidden border border-white/10">
            {brands.map((b) => (
              <div key={b.name} className="bg-[#071E3D] hover:bg-[#0B2F5B] transition-colors p-7 flex flex-col gap-2 group">
                <span className="font-mono-tech text-[10px] uppercase tracking-widest text-[#00AEEF]">{b.group}</span>
                <span className="font-display font-bold text-xl md:text-2xl text-white group-hover:text-[#00AEEF] transition-colors">{b.name}</span>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link to="/brands" data-testid="brands-cta" className="btn-primary">
              {t("Explore Full Portfolio", "Lihat Portofolio Lengkap")} <ArrowRight className="w-4 h-4" />
            </Link>
            <p className="text-xs text-white/50 max-w-md">
              {t(
                "Selected Uni-series and marine offshore products are presented as part of Sonar's marine technology portfolio, subject to availability and project requirements.",
                "Selected Uni-series dan produk marine offshore disajikan sebagai bagian dari portofolio teknologi marine Sonar, sesuai ketersediaan dan kebutuhan proyek."
              )}
            </p>
          </div>
        </div>
      </section>

      {/* ===== INDUSTRIES ===== */}
      <section className="section-pad bg-white">
        <div className="container-x">
          <div className="grid lg:grid-cols-12 gap-10 items-end mb-14">
            <div className="lg:col-span-7">
              <div className="eyebrow mb-4">{t("Industries Served", "Industri yang Dilayani")}</div>
              <h2 className="font-display font-bold text-4xl md:text-5xl text-[#071E3D] leading-[1.05]">
                {t("Trusted across offshore, energy, marine, and geospatial sectors.", "Dipercaya di sektor offshore, energi, marine, dan geospatial.")}
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {industries.map((ind, i) => (
              <div key={i} className="group relative overflow-hidden rounded-xl border border-gray-100 bg-white hover:border-[#00AEEF]/40 transition-all hover:-translate-y-1 hover:shadow-lg">
                <div className="p-6 flex flex-col gap-4 h-full min-h-[160px]">
                  <div className="w-11 h-11 rounded-lg bg-[#EAF7FF] flex items-center justify-center group-hover:bg-[#00AEEF] transition-colors">
                    <ind.icon className="w-5 h-5 text-[#00AEEF] group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-display font-semibold text-[#071E3D] mt-auto">{t(ind.en, ind.id)}</h3>
                </div>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-10">
            <div className="relative overflow-hidden rounded-2xl h-64 group">
              <img src={OIL_IMG} alt="Oil & Gas" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 hero-overlay-strong" />
              <div className="relative h-full flex flex-col justify-end p-8 text-white">
                <span className="eyebrow text-[#00AEEF] mb-2">{t("Featured Sector", "Sektor Unggulan")}</span>
                <h3 className="font-display font-bold text-2xl md:text-3xl">{t("Oil & Gas / Offshore Energy", "Oil & Gas / Offshore Energy")}</h3>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-2xl h-64 group">
              <img src={PORT_IMG} alt="Ports & Infrastructure" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 hero-overlay-strong" />
              <div className="relative h-full flex flex-col justify-end p-8 text-white">
                <span className="eyebrow text-[#00AEEF] mb-2">{t("Featured Sector", "Sektor Unggulan")}</span>
                <h3 className="font-display font-bold text-2xl md:text-3xl">{t("Ports, Dredging & Infrastructure", "Pelabuhan, Pengerukan & Infrastruktur")}</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="relative py-24 bg-[#0B2F5B] overflow-hidden">
        <div className="absolute inset-0 text-[#00AEEF]"><SonarLines opacity={0.1} /></div>
        <div className="container-x relative">
          <div className="max-w-4xl">
            <div className="eyebrow text-[#00AEEF] mb-5">{t("Let's Talk", "Mari Bicara")}</div>
            <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-white leading-[1.05] mb-7">
              {t("Let's discuss your next marine or geospatial project.", "Mari diskusikan proyek marine atau geospatial Anda berikutnya.")}
            </h2>
            <p className="text-white/70 text-lg max-w-2xl mb-10">
              {t(
                "Talk to our technical team about technology selection, equipment rental, offshore personnel, and digital operations.",
                "Bicarakan dengan tim teknis kami tentang pemilihan teknologi, sewa peralatan, personel offshore, dan digital operations."
              )}
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link to="/contact" data-testid="cta-contact" className="btn-primary">
                {t("Contact Sonar", "Hubungi Sonar")} <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/brands" className="text-white/80 hover:text-white inline-flex items-center gap-2 font-medium">
                {t("Browse Products", "Lihat Produk")} <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
