import React from "react";
import { Link } from "react-router-dom";
import { Mail, MapPin, Phone, Linkedin } from "lucide-react";
import { useT } from "../../context/LanguageContext";
import { SonarGrid } from "../common/SonarPattern";

const Footer = () => {
  const t = useT();
  const year = new Date().getFullYear();

  const col = (title, links) => (
    <div>
      <h4 className="font-display font-semibold text-white text-sm uppercase tracking-wider mb-4">{title}</h4>
      <ul className="space-y-2.5">
        {links.map((l) => (
          <li key={l.label}>
            <Link to={l.to} className="text-white/60 hover:text-[#00AEEF] text-sm transition-colors">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <footer className="relative bg-[#071E3D] text-white overflow-hidden" data-testid="site-footer">
      <SonarGrid opacity={0.04} />
      <div className="container-x py-20 relative">
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Brand */}
          <div className="lg:col-span-4">
            <div className="mb-5">
              <div className="font-display font-bold text-2xl tracking-[0.08em] text-white flex items-baseline">
                SON<span className="relative inline-block">A<span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-3.5 h-1 rounded-full bg-[#F5B800]"></span></span>R
              </div>
              <div className="text-[9px] uppercase tracking-[0.22em] font-mono-tech text-white/60 mt-2">
                PT Sonar Nusantara Utama · Marine &amp; Geospatial Technology
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed max-w-sm mb-6">
              {t(
                "Integrated Marine & Geospatial Technology Solutions. Technology Distribution. Project Support. Digital Operations.",
                "Solusi Teknologi Marine & Geospatial Terintegrasi. Distribusi Teknologi. Project Support. Digital Operations."
              )}
            </p>
            <div className="space-y-3 text-sm text-white/70">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 text-[#00AEEF] shrink-0" />
                <span>Jakarta, Indonesia</span>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 mt-0.5 text-[#00AEEF] shrink-0" />
                <a href="mailto:sales@sonar-nusantara.co.id" className="hover:text-white">sales@sonar-nusantara.co.id</a>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 mt-0.5 text-[#00AEEF] shrink-0" />
                <a href="tel:+628111165969" className="hover:text-white">+62 811 116 5969</a>
              </div>
            </div>
          </div>

          {/* Links */}
          <div className="lg:col-span-8 grid sm:grid-cols-3 gap-8">
            {col(t("Business", "Bisnis"), [
              { label: t("Technology Distribution", "Distribusi Teknologi"), to: "/business/technology-distribution" },
              { label: t("Marine Project Support", "Marine Project Support"), to: "/business/marine-project-support" },
              { label: t("Digital Products", "Produk Digital"), to: "/business/digital-products" },
              { label: t("Brands & Products", "Brand & Produk"), to: "/brands" },
            ])}
            {col(t("Company", "Perusahaan"), [
              { label: t("About", "Tentang"), to: "/about" },
              { label: t("Contact", "Kontak"), to: "/contact" },
            ])}
            {col(t("Resources", "Sumber Daya"), [
              { label: t("Industries", "Industri"), to: "/about" },
              { label: t("Get a Quote", "Minta Penawaran"), to: "/contact" },
              { label: t("Partner Inquiry", "Inquiry Partner"), to: "/contact" },
            ])}
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/50 font-mono-tech tracking-wider">
            © {year} PT SONAR NUSANTARA UTAMA. ALL RIGHTS RESERVED.
          </p>
          <div className="flex items-center gap-4 text-xs text-white/50">
            <span>{t("Indonesia · Southeast Asia", "Indonesia · Asia Tenggara")}</span>
            <a href="#" aria-label="LinkedIn" className="hover:text-[#00AEEF] transition-colors">
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
