import React from "react";
import { Link } from "react-router-dom";
import { useT } from "../../context/LanguageContext";
import { SonarLines } from "../common/SonarPattern";

const PageHero = ({ eyebrow, title, subtitle, image, ctaLabel, ctaTo }) => {
  const t = useT();
  return (
    <section className="relative pt-32 pb-20 md:pt-44 md:pb-28 overflow-hidden bg-[#071E3D]" data-testid="page-hero">
      {image && (
        <div className="absolute inset-0">
          <img src={image} alt="" className="w-full h-full object-cover opacity-40" />
        </div>
      )}
      <div className="absolute inset-0 hero-overlay" />
      <div className="absolute inset-0 text-[#00AEEF]"><SonarLines opacity={0.08} /></div>
      <div className="container-x relative">
        <div className="max-w-3xl">
          {eyebrow && <div className="eyebrow text-[#00AEEF] mb-5">{eyebrow}</div>}
          <h1 className="font-display font-bold text-white text-4xl sm:text-5xl lg:text-6xl leading-[1.05] mb-6">
            {title}
          </h1>
          {subtitle && (
            <p className="text-white/75 text-lg md:text-xl leading-relaxed max-w-2xl">{subtitle}</p>
          )}
          {ctaLabel && ctaTo && (
            <Link to={ctaTo} className="btn-primary mt-8">
              {ctaLabel}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

export default PageHero;
