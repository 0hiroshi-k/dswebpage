import type { Metadata } from "next";
import { ArrowRight, Truck } from "lucide-react";
import { ContactSection } from "@/components/contact-section";
import { FloatingCall } from "@/components/floating-call";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { PriceList } from "@/components/price-list";
import { ServicesGrid } from "@/components/services-grid";
import { SiteFooter } from "@/components/site-footer";
import { WhyUs } from "@/components/why-us";

export const metadata: Metadata = {
  title: "Daily Shine | Serwis samochodowy i detailing",
  description:
    "Profesjonalny serwis, detailing i konserwacja samochodów w Tychach. Oleje, klimatyzacja, geometria kół i kompleksowa opieka nad pojazdem.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  name: "Daily Shine",
  image: "https://dailyshine.example/images/hero-car.svg",
  telephone: "+48794566787",
  address: {
    "@type": "PostalAddress",
    streetAddress: "ul. Sublańska 83",
    postalCode: "43-100",
    addressLocality: "Tychy",
    addressCountry: "PL",
  },
  priceRange: "PLN",
  openingHours: ["Mo-Fr 08:00-18:00"],
  url: "https://dailyshine.example",
  sameAs: [
    "https://facebook.com",
    "https://instagram.com",
    "https://tiktok.com",
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Header />

      <main>
        <Hero />

        <section id="uslugi" className="section-shell py-16 sm:py-20">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-black/65">Nasze usługi</p>
              <h2 className="mt-3 text-4xl text-black sm:text-5xl">Serwis, który dba o detal</h2>
            </div>
          </div>
          <ServicesGrid />
        </section>

        <section id="cennik" className="bg-[#111111] py-16 sm:py-20">
          <div className="section-shell">
            <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#f5b301]">Cennik</p>
                <h2 className="mt-3 text-4xl text-white sm:text-5xl">Przejrzyste koszty</h2>
              </div>
            </div>
            <PriceList />
          </div>
        </section>

        <section id="dlaczego" className="section-shell py-16 sm:py-20">
          <div className="mb-8 text-center">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-black/65">Dlaczego my</p>
            <h2 className="mt-3 text-4xl text-black sm:text-5xl">Jakość, termin i zaufanie</h2>
          </div>
          <WhyUs />
        </section>

        <section id="kontakt" className="bg-[#f1f1ee] py-16 sm:py-20">
          <div className="section-shell">
            <ContactSection />
          </div>
        </section>

        <section className="py-6 sm:py-8">
          <div className="section-shell">
            <div className="relative overflow-hidden rounded-[28px] border border-black/10 bg-[#111111] px-5 py-6 sm:px-8">
              <div className="absolute inset-y-0 left-0 w-full bg-[linear-gradient(90deg,rgba(255,255,255,0.08),transparent_24%,transparent_76%,rgba(255,255,255,0.08))]" />
              <div className="relative flex flex-col items-center justify-center gap-3 text-center text-white sm:flex-row sm:text-left">
                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-white/5">
                  <Truck className="h-7 w-7 text-[#f5b301]" />
                </div>
                <h2 className="text-3xl sm:text-4xl">
                  JEDNO AUTO – WIELE USŁUG, JEDNO MIEJSCE!
                </h2>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
      <FloatingCall />
    </>
  );
}
