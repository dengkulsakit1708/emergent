import React, { useState } from "react";
import axios from "axios";
import { Mail, Phone, MapPin, ArrowRight, CheckCircle2, AlertCircle } from "lucide-react";
import PageHero from "../components/common/PageHero";
import { useT } from "../context/LanguageContext";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const HERO_IMG = "https://images.unsplash.com/photo-1697599426273-93e13129bcbc?w=1920&q=80&auto=format&fit=crop";

const Contact = () => {
  const t = useT();
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    inquiry_type: "Technology Distribution",
    message: "",
  });
  const [status, setStatus] = useState({ state: "idle", message: "" });

  const update = (k) => (e) => setForm((p) => ({ ...p, [k]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setStatus({ state: "error", message: t("Please fill in name, email, and message.", "Mohon isi nama, email, dan pesan.") });
      return;
    }
    setStatus({ state: "loading", message: "" });
    try {
      await axios.post(`${API}/contact`, form);
      setStatus({
        state: "success",
        message: t(
          "Thank you. Our team will get back to you shortly.",
          "Terima kasih. Tim kami akan segera menghubungi Anda."
        ),
      });
      setForm({ name: "", company: "", email: "", phone: "", inquiry_type: "Technology Distribution", message: "" });
    } catch (err) {
      setStatus({
        state: "error",
        message: t("Something went wrong. Please try again.", "Terjadi kesalahan. Silakan coba lagi."),
      });
    }
  };

  const inquiryTypes = [
    "Technology Distribution",
    "Marine Project Support",
    "Digital Product",
    "Equipment Rental",
    "Offshore Personnel",
    "Partnership",
    "Other",
  ];

  const contactCategories = [
    { en: "Sales Inquiry", id: "Sales Inquiry" },
    { en: "Technical Support", id: "Technical Support" },
    { en: "Project Support Inquiry", id: "Project Support Inquiry" },
    { en: "Digital Product Demo", id: "Demo Produk Digital" },
    { en: "Principal / Partnership Inquiry", id: "Inquiry Principal / Partnership" },
    { en: "Career", id: "Karir" },
  ];

  return (
    <div data-testid="contact-page">
      <PageHero
        eyebrow={t("Contact", "Kontak")}
        title={t("Talk to our technical team.", "Bicara dengan tim teknis kami.")}
        subtitle={t(
          "From technology selection to offshore mobilization — share your project requirement and we'll get back to you.",
          "Dari pemilihan teknologi hingga mobilisasi offshore — sampaikan kebutuhan proyek Anda dan kami akan segera menghubungi."
        )}
        image={HERO_IMG}
      />

      <section className="section-pad bg-white">
        <div className="container-x">
          <div className="grid lg:grid-cols-12 gap-12">
            {/* Left info */}
            <div className="lg:col-span-5">
              <div className="eyebrow mb-4">{t("Get in Touch", "Hubungi Kami")}</div>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-[#071E3D] leading-tight mb-8">
                {t("How can we support your operation?", "Bagaimana kami bisa mendukung operasi Anda?")}
              </h2>

              <div className="space-y-5 mb-10">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-[#00AEEF]/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-[#00AEEF]" />
                  </div>
                  <div>
                    <div className="font-display font-semibold text-[#071E3D]">{t("Office", "Kantor")}</div>
                    <div className="text-[#4B5563] text-sm mt-1">Jakarta, Indonesia</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-[#00AEEF]/10 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-[#00AEEF]" />
                  </div>
                  <div>
                    <div className="font-display font-semibold text-[#071E3D]">Email</div>
                    <a href="mailto:info@sonar-nu.com" className="text-[#4B5563] text-sm mt-1 hover:text-[#00AEEF]">info@sonar-nu.com</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-[#00AEEF]/10 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-[#00AEEF]" />
                  </div>
                  <div>
                    <div className="font-display font-semibold text-[#071E3D]">{t("Phone", "Telepon")}</div>
                    <div className="text-[#4B5563] text-sm mt-1">+62 21 0000 0000</div>
                  </div>
                </div>
              </div>

              <div className="bg-[#F5F7FA] rounded-2xl p-6">
                <div className="eyebrow mb-4">{t("Inquiry Categories", "Kategori Inquiry")}</div>
                <ul className="space-y-2">
                  {contactCategories.map((c) => (
                    <li key={c.en} className="flex items-center gap-2 text-sm text-[#1F2933]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00AEEF]" /> {t(c.en, c.id)}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-7">
              <form
                onSubmit={submit}
                data-testid="contact-form"
                className="bg-white border border-gray-200 rounded-2xl p-7 md:p-10 shadow-[0_8px_30px_rgba(7,30,61,0.05)]"
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-mono-tech uppercase tracking-widest text-[#4B5563] mb-2">
                      {t("Name", "Nama")} *
                    </label>
                    <input
                      data-testid="input-name"
                      value={form.name}
                      onChange={update("name")}
                      type="text"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[#00AEEF] focus:ring-2 focus:ring-[#00AEEF]/15 transition-all bg-white text-[#1F2933]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono-tech uppercase tracking-widest text-[#4B5563] mb-2">
                      {t("Company", "Perusahaan")}
                    </label>
                    <input
                      data-testid="input-company"
                      value={form.company}
                      onChange={update("company")}
                      type="text"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[#00AEEF] focus:ring-2 focus:ring-[#00AEEF]/15 transition-all bg-white text-[#1F2933]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono-tech uppercase tracking-widest text-[#4B5563] mb-2">
                      Email *
                    </label>
                    <input
                      data-testid="input-email"
                      value={form.email}
                      onChange={update("email")}
                      type="email"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[#00AEEF] focus:ring-2 focus:ring-[#00AEEF]/15 transition-all bg-white text-[#1F2933]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono-tech uppercase tracking-widest text-[#4B5563] mb-2">
                      {t("Phone", "Telepon")}
                    </label>
                    <input
                      data-testid="input-phone"
                      value={form.phone}
                      onChange={update("phone")}
                      type="tel"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[#00AEEF] focus:ring-2 focus:ring-[#00AEEF]/15 transition-all bg-white text-[#1F2933]"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-mono-tech uppercase tracking-widest text-[#4B5563] mb-2">
                      {t("Inquiry Type", "Jenis Inquiry")} *
                    </label>
                    <select
                      data-testid="input-inquiry-type"
                      value={form.inquiry_type}
                      onChange={update("inquiry_type")}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[#00AEEF] focus:ring-2 focus:ring-[#00AEEF]/15 transition-all bg-white text-[#1F2933]"
                    >
                      {inquiryTypes.map((it) => (
                        <option key={it} value={it}>{it}</option>
                      ))}
                    </select>
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-mono-tech uppercase tracking-widest text-[#4B5563] mb-2">
                      {t("Message", "Pesan")} *
                    </label>
                    <textarea
                      data-testid="input-message"
                      value={form.message}
                      onChange={update("message")}
                      required
                      rows={6}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[#00AEEF] focus:ring-2 focus:ring-[#00AEEF]/15 transition-all bg-white text-[#1F2933] resize-y"
                      placeholder={t("Tell us about your project, technology need, or partnership inquiry.", "Ceritakan tentang proyek, kebutuhan teknologi, atau inquiry partnership Anda.")}
                    />
                  </div>
                </div>

                {status.state === "success" && (
                  <div data-testid="form-success" className="mt-5 flex items-start gap-3 bg-[#EAF7FF] border border-[#00AEEF]/30 text-[#0B2F5B] p-4 rounded-lg">
                    <CheckCircle2 className="w-5 h-5 text-[#00AEEF] mt-0.5 shrink-0" />
                    <span className="text-sm">{status.message}</span>
                  </div>
                )}
                {status.state === "error" && (
                  <div data-testid="form-error" className="mt-5 flex items-start gap-3 bg-red-50 border border-red-200 text-red-700 p-4 rounded-lg">
                    <AlertCircle className="w-5 h-5 text-red-600 mt-0.5 shrink-0" />
                    <span className="text-sm">{status.message}</span>
                  </div>
                )}

                <div className="mt-7 flex flex-wrap items-center justify-between gap-4">
                  <p className="text-xs text-[#4B5563]">
                    {t("By submitting, you agree to be contacted by Sonar regarding your inquiry.", "Dengan mengirim form ini, Anda setuju dihubungi oleh Sonar terkait inquiry Anda.")}
                  </p>
                  <button
                    type="submit"
                    data-testid="submit-contact"
                    disabled={status.state === "loading"}
                    className="btn-primary disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status.state === "loading"
                      ? t("Sending...", "Mengirim...")
                      : t("Send Inquiry", "Kirim Inquiry")} <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
