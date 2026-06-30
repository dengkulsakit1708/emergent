import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight, Wrench, Users, Anchor, Network, Compass, Settings, ClipboardCheck, GraduationCap,
  ChevronRight,
} from "lucide-react";
import PageHero from "../components/common/PageHero";
import { useT } from "../context/LanguageContext";

const HERO_IMG = "https://images.unsplash.com/photo-1598408745613-178751e2ccde?w=1920&q=80&auto=format&fit=crop";

const MarineProjectSupport = () => {
  const t = useT();

  const capabilities = [
    {
      icon: Wrench,
      title: t("Equipment Rental", "Sewa Peralatan"),
      desc: t(
        "Selected marine, geospatial, hydrographic, positioning, and survey equipment rental for project-based requirements.",
        "Sewa peralatan marine, geospatial, hidrografi, positioning, dan survey terpilih untuk kebutuhan berbasis proyek."
      ),
    },
    {
      icon: Users,
      title: t("Offshore Personnel", "Personel Offshore"),
      desc: t(
        "Experienced technical personnel to support offshore and marine project execution — Hydrographer, Survey Engineer, Party Chief, Online Surveyor, Offline Processor, GIS Specialist, USBL Engineer, Marine Technician, Project Engineer, Data Processor, Field Coordinator.",
        "Personel teknis berpengalaman untuk mendukung eksekusi proyek offshore & marine — Hydrographer, Survey Engineer, Party Chief, Online Surveyor, Offline Processor, GIS Specialist, USBL Engineer, Marine Technician, Project Engineer, Data Processor, Field Coordinator."
      ),
    },
    {
      icon: Anchor,
      title: t("Vessel Mobilization Support", "Vessel Mobilization Support"),
      desc: t(
        "Support for vessel preparation, equipment integration, sensor installation, calibration, mobilization, and demobilization.",
        "Dukungan untuk persiapan kapal, integrasi peralatan, instalasi sensor, kalibrasi, mobilisasi, dan demobilisasi."
      ),
    },
    {
      icon: Network,
      title: t("Project Coordination", "Koordinasi Proyek"),
      desc: t(
        "Coordination between client, vessel owner, contractor, equipment supplier, field personnel, and project stakeholders.",
        "Koordinasi antara klien, vessel owner, kontraktor, equipment supplier, personel lapangan, dan project stakeholders."
      ),
    },
    {
      icon: Compass,
      title: t("Technical Advisory", "Technical Advisory"),
      desc: t(
        "Technical input for equipment selection, project methodology, survey planning, field setup, QA/QC, and project risk mitigation.",
        "Input teknis untuk pemilihan peralatan, metodologi proyek, perencanaan survey, field setup, QA/QC, dan mitigasi risiko proyek."
      ),
    },
    {
      icon: Settings,
      title: t("Installation Support", "Dukungan Instalasi"),
      desc: t(
        "Support for equipment installation, sensor mounting, interfacing, cable routing, and system integration on vessel or field platform.",
        "Dukungan untuk instalasi peralatan, sensor mounting, interfacing, cable routing, dan integrasi sistem di kapal atau platform lapangan."
      ),
    },
    {
      icon: ClipboardCheck,
      title: t("Commissioning Support", "Dukungan Commissioning"),
      desc: t(
        "Support for system testing, calibration, functional check, acceptance testing, and readiness before project execution.",
        "Dukungan untuk system testing, kalibrasi, functional check, acceptance testing, dan readiness sebelum eksekusi proyek."
      ),
    },
    {
      icon: GraduationCap,
      title: t("Training", "Training"),
      desc: t(
        "Training for equipment operation, software usage, field workflow, data acquisition, data processing, and safety awareness.",
        "Training untuk operasi peralatan, penggunaan software, field workflow, akuisisi data, data processing, dan safety awareness."
      ),
    },
  ];

  const lifecycle = [
    t("Planning", "Planning"),
    t("Mobilization", "Mobilization"),
    t("Installation", "Installation"),
    t("Commissioning", "Commissioning"),
    t("Execution Support", "Execution Support"),
    t("Data Processing Support", "Data Processing Support"),
    t("Reporting Support", "Reporting Support"),
    t("Demobilization", "Demobilization"),
  ];

  return (
    <div data-testid="marine-support-page">
      <PageHero
        eyebrow={t("Business Unit 02", "Business Unit 02")}
        title={t("Marine Project Support", "Marine Project Support")}
        subtitle={t(
          "Supporting offshore and marine projects with equipment, personnel, technical expertise, and project coordination — from planning through demobilization.",
          "Mendukung proyek offshore dan marine dengan peralatan, personel, keahlian teknis, dan koordinasi proyek — dari planning hingga demobilization."
        )}
        image={HERO_IMG}
      />

      <section className="section-pad bg-white">
        <div className="container-x">
          <div className="max-w-3xl mb-16">
            <div className="eyebrow mb-4">{t("Capabilities", "Kapabilitas")}</div>
            <h2 className="font-display font-bold text-3xl md:text-5xl text-[#071E3D] leading-tight">
              {t("Project support, not just equipment.", "Project support, bukan sekadar peralatan.")}
            </h2>
            <p className="text-[#4B5563] text-lg mt-5 leading-relaxed">
              {t(
                "Sonar enables and supports marine and offshore projects through equipment rental, offshore personnel, vessel mobilization, project coordination, technical advisory, installation, commissioning, and training.",
                "Sonar mendukung proyek marine dan offshore melalui sewa peralatan, personel offshore, mobilisasi kapal, koordinasi proyek, technical advisory, instalasi, commissioning, dan training."
              )}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#E5E7EB] rounded-2xl overflow-hidden border border-[#E5E7EB]">
            {capabilities.map((c, i) => (
              <div key={i} className="bg-white p-7 hover:bg-[#EAF7FF]/40 transition-colors group">
                <div className="w-11 h-11 rounded-xl bg-[#00AEEF]/10 border border-[#00AEEF]/20 flex items-center justify-center mb-5 group-hover:bg-[#00AEEF] transition-colors">
                  <c.icon className="w-5 h-5 text-[#00AEEF] group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-display font-semibold text-[#071E3D] text-lg mb-2">{c.title}</h3>
                <p className="text-[#4B5563] text-sm leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project lifecycle */}
      <section className="section-pad bg-[#071E3D] text-white relative overflow-hidden">
        <div className="container-x relative">
          <div className="max-w-3xl mb-14">
            <div className="eyebrow text-[#00AEEF] mb-4">{t("Project Lifecycle", "Siklus Proyek")}</div>
            <h2 className="font-display font-bold text-3xl md:text-5xl leading-tight">
              {t("From planning to demobilization — we support every phase.", "Dari planning hingga demobilization — kami mendukung setiap fase.")}
            </h2>
          </div>

          <div className="relative">
            {/* connecting line */}
            <div className="hidden lg:block absolute top-7 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00AEEF]/40 to-transparent" />
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-3 lg:gap-2 relative">
              {lifecycle.map((step, i) => (
                <div key={step} className="flex flex-col items-center text-center">
                  <div className="relative w-14 h-14 rounded-full bg-[#071E3D] border-2 border-[#00AEEF] flex items-center justify-center font-display font-bold text-[#00AEEF] mb-4">
                    {i + 1}
                  </div>
                  <div className="font-display font-semibold text-sm md:text-base leading-tight">{step}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
            <p className="text-white/70 leading-relaxed text-sm md:text-base">
              <strong className="text-white">{t("Note: ", "Catatan: ")}</strong>
              {t(
                "Sonar's role is to support, enable, and assist marine and offshore project execution by providing equipment, personnel, technical support, and project coordination. Project scope, methodology, and final deliverables remain under the responsibility of the appointed contractor or project owner.",
                "Peran Sonar adalah mendukung, memfasilitasi, dan membantu eksekusi proyek marine dan offshore dengan menyediakan peralatan, personel, technical support, dan koordinasi proyek. Scope proyek, metodologi, dan deliverable akhir tetap menjadi tanggung jawab kontraktor atau project owner yang ditunjuk."
              )}
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#F5F7FA]">
        <div className="container-x">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-[#071E3D] leading-tight">
                {t("Planning your next offshore mobilization?", "Merencanakan mobilisasi offshore berikutnya?")}
              </h2>
              <p className="text-[#4B5563] mt-4">
                {t("Discuss equipment rental, personnel, and project support with our team.", "Diskusikan sewa peralatan, personel, dan project support dengan tim kami.")}
              </p>
            </div>
            <div className="md:flex md:justify-end gap-3 flex flex-wrap">
              <Link to="/contact" className="btn-primary">
                {t("Talk to Our Team", "Bicara dengan Tim Kami")} <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/brands" className="btn-outline-navy">
                {t("Browse Equipment", "Lihat Peralatan")} <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MarineProjectSupport;
