import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Target, Eye, Compass, ShieldCheck, Briefcase, Globe2 } from "lucide-react";
import PageHero from "../components/common/PageHero";
import { useT } from "../context/LanguageContext";

const ABOUT_HERO = "https://images.unsplash.com/photo-1598408745613-178751e2ccde?w=1920&q=80&auto=format&fit=crop";

const About = () => {
  const t = useT();

  const missions = [
    t("To provide reliable technology solutions for marine, offshore, infrastructure, and geospatial industries.",
      "Memberikan solusi teknologi yang andal untuk industri marine, offshore, infrastruktur, dan geospatial."),
    t("To support field project execution through equipment, personnel, and technical expertise.",
      "Mendukung eksekusi proyek lapangan melalui peralatan, personel, dan keahlian teknis."),
    t("To develop digital products that improve workforce and operational visibility.",
      "Mengembangkan produk digital yang meningkatkan visibilitas workforce dan operasional."),
    t("To connect global technologies with local project requirements.",
      "Menghubungkan teknologi global dengan kebutuhan proyek lokal."),
  ];

  const commitments = [
    { icon: ShieldCheck, en: "Integrity & technical rigor", id: "Integritas & ketelitian teknis" },
    { icon: Briefcase, en: "Project execution excellence", id: "Eksekusi proyek yang prima" },
    { icon: Globe2, en: "Global technology, local expertise", id: "Teknologi global, keahlian lokal" },
  ];

  return (
    <div data-testid="about-page">
      <PageHero
        eyebrow={t("About Sonar", "Tentang Sonar")}
        title={t("Marine & Geospatial Technology, built for Indonesia.", "Teknologi Marine & Geospatial, dibangun untuk Indonesia.")}
        subtitle={t(
          "PT Sonar Nusantara Utama is a marine and geospatial technology solutions company supporting clients through technology distribution, marine project support, and digital products designed for field and offshore operations.",
          "PT Sonar Nusantara Utama adalah perusahaan solusi teknologi marine dan geospatial yang mendukung klien melalui distribusi teknologi, marine project support, dan produk digital untuk operasi lapangan dan offshore."
        )}
        image={ABOUT_HERO}
      />

      {/* Company overview */}
      <section className="section-pad bg-white">
        <div className="container-x">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <div className="eyebrow mb-4">{t("Company Overview", "Profil Perusahaan")}</div>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-[#071E3D] leading-tight">
                {t("Integrated by design, technical by nature.", "Terintegrasi by design, teknis by nature.")}
              </h2>
            </div>
            <div className="lg:col-span-7 space-y-5 text-[#4B5563] text-base md:text-lg leading-relaxed">
              <p>
                {t(
                  "PT Sonar Nusantara Utama is an integrated marine and geospatial technology company providing technology distribution, marine project support, and digital products for offshore, marine, infrastructure, mining, and geospatial operations.",
                  "PT Sonar Nusantara Utama adalah perusahaan teknologi marine & geospatial terintegrasi yang menyediakan distribusi teknologi, marine project support, dan produk digital untuk operasi offshore, marine, infrastruktur, pertambangan, dan geospatial."
                )}
              </p>
              <p>
                {t(
                  "We are not a conventional survey contractor. We are a technology integrator combining global product portfolios, local technical expertise, equipment capability, and digital operations to support clients through the full project lifecycle.",
                  "Kami bukan kontraktor survey konvensional. Kami adalah technology integrator yang memadukan portofolio produk global, keahlian teknis lokal, kemampuan peralatan, dan digital operations untuk mendukung klien sepanjang siklus proyek."
                )}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-pad bg-[#F5F7FA] relative overflow-hidden">
        <div className="container-x relative">
          <div className="grid lg:grid-cols-2 gap-6">
            <div className="bg-[#071E3D] text-white rounded-2xl p-10 md:p-12 relative overflow-hidden">
              <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-[#00AEEF]/10 blur-3xl" />
              <Eye className="w-10 h-10 text-[#00AEEF] mb-6 relative" />
              <div className="eyebrow text-[#00AEEF] mb-3 relative">{t("Vision", "Visi")}</div>
              <h3 className="font-display font-bold text-2xl md:text-3xl leading-tight relative">
                {t(
                  "To become a trusted marine and geospatial technology partner in Indonesia and Southeast Asia.",
                  "Menjadi mitra teknologi marine dan geospatial yang dipercaya di Indonesia dan Asia Tenggara."
                )}
              </h3>
            </div>
            <div className="bg-white rounded-2xl p-10 md:p-12 border border-gray-100">
              <Target className="w-10 h-10 text-[#00AEEF] mb-6" />
              <div className="eyebrow mb-3">{t("Mission", "Misi")}</div>
              <ul className="space-y-4">
                {missions.map((m, i) => (
                  <li key={i} className="flex gap-3 text-[#1F2933]">
                    <span className="font-mono-tech text-xs text-[#00AEEF] mt-1.5 shrink-0">0{i + 1}</span>
                    <span className="text-sm md:text-base leading-relaxed">{m}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* What we do (business units summary) */}
      <section className="section-pad bg-white">
        <div className="container-x">
          <div className="eyebrow mb-4">{t("What We Do", "Apa yang Kami Lakukan")}</div>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-[#071E3D] leading-tight mb-12 max-w-3xl">
            {t("Three business units, one integrated capability.", "Tiga business unit, satu kapabilitas terintegrasi.")}
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { tag: "01", en: "Technology Distribution", id: "Distribusi Teknologi", to: "/business/technology-distribution" },
              { tag: "02", en: "Marine Project Support", id: "Marine Project Support", to: "/business/marine-project-support" },
              { tag: "03", en: "Digital Products", id: "Produk Digital", to: "/business/digital-products" },
            ].map((u) => (
              <Link key={u.tag} to={u.to} className="sonar-card p-8 group">
                <div className="font-mono-tech text-xs text-[#00AEEF] tracking-widest mb-4">UNIT — {u.tag}</div>
                <h3 className="font-display font-bold text-2xl text-[#071E3D] mb-3">{t(u.en, u.id)}</h3>
                <div className="inline-flex items-center gap-2 text-[#00AEEF] font-semibold text-sm group-hover:gap-3 transition-all">
                  {t("Learn more", "Selengkapnya")} <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment */}
      <section className="section-pad bg-[#071E3D] text-white relative overflow-hidden">
        <div className="container-x relative">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <Compass className="w-10 h-10 text-[#00AEEF] mb-6" />
              <div className="eyebrow text-[#00AEEF] mb-4">{t("Our Commitment", "Komitmen Kami")}</div>
              <h2 className="font-display font-bold text-3xl md:text-4xl leading-tight">
                {t("Delivering reliable technology, with discipline.", "Memberikan teknologi yang andal, dengan disiplin.")}
              </h2>
            </div>
            <div className="lg:col-span-7 grid sm:grid-cols-3 gap-4">
              {commitments.map((c, i) => (
                <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-sm">
                  <c.icon className="w-7 h-7 text-[#00AEEF] mb-4" />
                  <p className="font-display font-semibold text-lg leading-snug">{t(c.en, c.id)}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Leadership placeholder */}
          <div className="mt-20 pt-12 border-t border-white/10">
            <div className="eyebrow text-[#00AEEF] mb-4">{t("Leadership", "Kepemimpinan")}</div>
            <p className="text-white/65 text-lg max-w-2xl">
              {t(
                "Our management team brings together expertise from marine survey, hydrography, offshore operations, geospatial technology, and digital product development. Full leadership profiles will be announced soon.",
                "Tim manajemen kami menggabungkan keahlian dari marine survey, hidrografi, operasi offshore, teknologi geospatial, dan pengembangan produk digital. Profil kepemimpinan lengkap akan segera diumumkan."
              )}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
