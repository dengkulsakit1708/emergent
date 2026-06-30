import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Globe } from "lucide-react";
import { useLang, useT } from "../../context/LanguageContext";

const BusinessMenu = ({ scrolled, onItemClick }) => {
  const t = useT();
  const items = [
    { to: "/business/technology-distribution", en: "Technology Distribution", id: "Distribusi Teknologi" },
    { to: "/business/marine-project-support", en: "Marine Project Support", id: "Marine Project Support" },
    { to: "/business/digital-products", en: "Digital Products", id: "Produk Digital" },
  ];
  return (
    <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
      <div className="bg-white rounded-xl shadow-2xl border border-gray-100 p-2 min-w-[280px]">
        {items.map((it) => (
          <Link
            key={it.to}
            to={it.to}
            onClick={onItemClick}
            data-testid={`menu-${it.to.split("/").pop()}`}
            className="flex flex-col px-4 py-3 rounded-lg hover:bg-[#F5F7FA] transition-colors"
          >
            <span className="font-display font-semibold text-[#071E3D]">{t(it.en, it.id)}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileBizOpen, setMobileBizOpen] = useState(false);
  const { lang, toggleLang } = useLang();
  const t = useT();
  const location = useLocation();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 24);
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setMobileBizOpen(false);
  }, [location.pathname]);

  const isHome = location.pathname === "/";
  const transparentTop = isHome && !scrolled && !mobileOpen;

  const headerClasses = transparentTop
    ? "bg-transparent"
    : "bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-[0_4px_30px_rgba(7,30,61,0.04)]";

  const linkColor = transparentTop ? "text-white/90 hover:text-white" : "text-[#1F2933] hover:text-[#071E3D]";
  const logoColor = transparentTop ? "text-white" : "text-[#071E3D]";

  const navItems = [
    { to: "/", en: "Home", id: "Beranda" },
    { to: "/about", en: "About", id: "Tentang" },
    { to: "/business", en: "Business", id: "Bisnis", hasSub: true },
    { to: "/brands", en: "Brands & Products", id: "Brand & Produk" },
    { to: "/contact", en: "Contact", id: "Kontak" },
  ];

  return (
    <header
      data-testid="site-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerClasses}`}
    >
      <div className="container-x flex items-center justify-between h-20">
        {/* Logo */}
        <Link to="/" data-testid="logo-link" className="flex items-center gap-2.5 group">
          <div className="relative w-9 h-9 flex items-center justify-center rounded-lg bg-[#00AEEF]/15 border border-[#00AEEF]/30">
            <svg viewBox="0 0 32 32" className="w-5 h-5 text-[#00AEEF]" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="16" cy="16" r="3" />
              <circle cx="16" cy="16" r="8" opacity="0.6" />
              <circle cx="16" cy="16" r="13" opacity="0.3" />
            </svg>
          </div>
          <div className="flex flex-col leading-tight">
            <span className={`font-display font-bold text-lg tracking-tight ${logoColor}`}>SONAR</span>
            <span className={`text-[10px] uppercase tracking-[0.18em] font-mono-tech ${transparentTop ? "text-white/60" : "text-[#4B5563]"}`}>
              Nusantara Utama
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) =>
            item.hasSub ? (
              <div key={item.to} className="relative group h-20 flex items-center">
                <button
                  data-testid={`nav-${item.to.replace("/", "") || "home"}`}
                  className={`flex items-center gap-1 font-medium text-sm transition-colors ${linkColor}`}
                >
                  {t(item.en, item.id)}
                  <ChevronDown className="w-4 h-4" />
                </button>
                <BusinessMenu scrolled={scrolled} />
              </div>
            ) : (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                data-testid={`nav-${item.to.replace("/", "") || "home"}`}
                className={({ isActive }) =>
                  `font-medium text-sm transition-colors ${linkColor} ${isActive ? "font-semibold" : ""}`
                }
              >
                {t(item.en, item.id)}
              </NavLink>
            )
          )}
        </nav>

        {/* Lang toggle + CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <button
            onClick={toggleLang}
            data-testid="lang-toggle"
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-semibold uppercase tracking-wider transition-colors ${
              transparentTop
                ? "border border-white/30 text-white hover:bg-white/10"
                : "border border-gray-200 text-[#071E3D] hover:bg-[#F5F7FA]"
            }`}
          >
            <Globe className="w-3.5 h-3.5" />
            {lang === "en" ? "EN" : "ID"}
          </button>
          <Link
            to="/contact"
            data-testid="header-cta"
            className="btn-primary text-sm !py-2.5 !px-5"
          >
            {t("Contact Our Team", "Hubungi Tim Kami")}
          </Link>
        </div>

        {/* Mobile button */}
        <button
          className="lg:hidden p-2"
          onClick={() => setMobileOpen((p) => !p)}
          data-testid="mobile-menu-toggle"
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <X className={`w-6 h-6 ${transparentTop ? "text-white" : "text-[#071E3D]"}`} />
          ) : (
            <Menu className={`w-6 h-6 ${transparentTop ? "text-white" : "text-[#071E3D]"}`} />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100" data-testid="mobile-menu">
          <div className="container-x py-6 flex flex-col gap-1">
            {navItems.map((item) =>
              item.hasSub ? (
                <div key={item.to}>
                  <button
                    onClick={() => setMobileBizOpen((p) => !p)}
                    className="w-full flex items-center justify-between py-3 font-medium text-[#1F2933]"
                  >
                    {t(item.en, item.id)}
                    <ChevronDown className={`w-4 h-4 transition-transform ${mobileBizOpen ? "rotate-180" : ""}`} />
                  </button>
                  {mobileBizOpen && (
                    <div className="pl-4 flex flex-col gap-1 pb-2">
                      <Link to="/business/technology-distribution" className="py-2 text-sm text-[#4B5563]">{t("Technology Distribution", "Distribusi Teknologi")}</Link>
                      <Link to="/business/marine-project-support" className="py-2 text-sm text-[#4B5563]">{t("Marine Project Support", "Marine Project Support")}</Link>
                      <Link to="/business/digital-products" className="py-2 text-sm text-[#4B5563]">{t("Digital Products", "Produk Digital")}</Link>
                    </div>
                  )}
                </div>
              ) : (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === "/"}
                  className="py-3 font-medium text-[#1F2933]"
                >
                  {t(item.en, item.id)}
                </NavLink>
              )
            )}
            <div className="flex items-center gap-3 pt-4 border-t border-gray-100 mt-3">
              <button
                onClick={toggleLang}
                data-testid="lang-toggle-mobile"
                className="flex items-center gap-1.5 px-3 py-2 rounded-md text-xs font-semibold uppercase tracking-wider border border-gray-200 text-[#071E3D]"
              >
                <Globe className="w-3.5 h-3.5" /> {lang === "en" ? "EN" : "ID"}
              </button>
              <Link to="/contact" className="btn-primary text-sm flex-1 justify-center">
                {t("Contact Our Team", "Hubungi Tim Kami")}
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
