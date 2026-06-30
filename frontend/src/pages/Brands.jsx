import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Truck, Plane, Waves } from "lucide-react";
import PageHero from "../components/common/PageHero";
import { useT } from "../context/LanguageContext";

const HERO_IMG = "https://images.unsplash.com/photo-1582517378602-f109b395ce40?w=1920&q=80&auto=format&fit=crop";

const Brands = () => {
  const t = useT();

  const groups = [
    {
      icon: Truck,
      title: t("Ground Technologies", "Teknologi Darat"),
      desc: t("Mobile mapping and ground-based geospatial systems.", "Sistem mobile mapping dan geospatial berbasis darat."),
      brands: [
        { name: "GroundProbe", focus: t("Slope stability radar / mining monitoring", "Slope stability radar / monitoring tambang") },
        { name: "Imajing", focus: t("Mobile mapping & road asset survey", "Mobile mapping & survey aset jalan") },
      ],
    },
    {
      icon: Plane,
      title: t("Aerial Technologies", "Teknologi Udara"),
      desc: t("Drone, UAV LiDAR, and aerial mapping platforms.", "Drone, UAV LiDAR, dan platform aerial mapping."),
      brands: [
        { name: "DJI Enterprise", focus: t("Enterprise drone platforms & payloads", "Platform drone enterprise & payload") },
        { name: "GreenValley International", focus: t("UAV LiDAR, handheld & mobile LiDAR", "UAV LiDAR, handheld & mobile LiDAR") },
      ],
    },
    {
      icon: Waves,
      title: t("Marine Technologies", "Teknologi Marine"),
      desc: t("Hydrographic, positioning, navigation, and subsea systems.", "Sistem hidrografi, positioning, navigasi, dan subsea."),
      brands: [
        { name: "Baywei", focus: t("USV & sonar survey platforms", "USV & platform sonar survey") },
        { name: "Sonardyne", focus: t("Underwater acoustic positioning & navigation", "Underwater acoustic positioning & navigasi") },
        { name: "Kongsberg", focus: t("Marine echosounders, navigation, autonomy", "Echosounder marine, navigasi, autonomi") },
        { name: "Teledyne", focus: t("Marine instrumentation & sonar systems", "Instrumen marine & sistem sonar") },
        { name: "EIVA", focus: t("NaviSuite — acquisition & processing software", "NaviSuite — software akuisisi & processing") },
        { name: "Selected Uni-Series", focus: t("Marine offshore products (Uni-Mini, Uni-Max, Uni-Explorer, etc.)", "Produk marine offshore (Uni-Mini, Uni-Max, Uni-Explorer, dll.)") },
      ],
    },
  ];

  return (
    <div data-testid="brands-page">
      <PageHero
        eyebrow={t("Brands & Products", "Brand & Produk")}
        title={t("Marine & Geospatial Technology Portfolio.", "Portofolio Teknologi Marine & Geospatial.")}
        subtitle={t(
          "Selected products and brands across ground, aerial, and marine — available subject to commercial arrangement, project requirements, and availability.",
          "Produk dan brand terpilih di kategori darat, udara, dan marine — ketersediaan tergantung commercial arrangement, kebutuhan proyek, dan availability."
        )}
        image={HERO_IMG}
      />

      <section className="section-pad bg-white">
        <div className="container-x space-y-20">
          {groups.map((g) => (
            <div key={g.title}>
              <div className="flex items-center gap-4 mb-10">
                <div className="w-14 h-14 rounded-xl bg-[#00AEEF] flex items-center justify-center">
                  <g.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="font-display font-bold text-2xl md:text-3xl text-[#071E3D] leading-tight">{g.title}</h2>
                  <p className="text-[#4B5563] mt-1">{g.desc}</p>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {g.brands.map((b) => (
                  <div key={b.name} className="sonar-card p-7 flex flex-col h-full">
                    <div className="font-mono-tech text-xs text-[#00AEEF] tracking-widest mb-3">{t("BRAND", "BRAND")}</div>
                    <h3 className="font-display font-bold text-2xl text-[#071E3D] mb-3 leading-tight">{b.name}</h3>
                    <p className="text-[#4B5563] text-sm flex-1 leading-relaxed">{b.focus}</p>
                    <Link to="/contact" className="mt-6 inline-flex items-center gap-2 text-[#00AEEF] font-semibold text-sm hover:gap-3 transition-all">
                      {t("Discuss Product Requirement", "Diskusikan Kebutuhan Produk")} <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-[#F5F7FA]">
        <div className="container-x">
          <div className="bg-white border border-gray-100 rounded-2xl p-8 md:p-10">
            <div className="eyebrow mb-3">{t("Important Note", "Catatan Penting")}</div>
            <p className="text-[#4B5563] leading-relaxed">
              {t(
                "Sonar uses neutral wording such as Technology Partner, Product Solutions, Selected Technologies, and Marine & Geospatial Technology Portfolio. Available products and solutions may depend on commercial arrangement, project requirements, and availability. Selected Uni-series and marine offshore products are presented as part of Sonar's marine technology portfolio, subject to availability and project requirements.",
                "Sonar menggunakan wording netral seperti Technology Partner, Product Solutions, Selected Technologies, dan Marine & Geospatial Technology Portfolio. Ketersediaan produk dan solusi dapat bergantung pada commercial arrangement, kebutuhan proyek, dan availability. Selected Uni-series dan produk marine offshore disajikan sebagai bagian dari portofolio teknologi marine Sonar, sesuai ketersediaan dan kebutuhan proyek."
              )}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Brands;
