import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  Check,
  Clock3,
  Droplets,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { CarWashPricing } from "@/components/car-wash-pricing";

export const metadata: Metadata = {
  title: "Myjnia samochodowa | Daily Shine Tychy",
  description:
    "Myjnia samochodowa Daily Shine w Tychach. Wybierz rozmiar auta i sprawdź ceny pakietów mycia.",
};

const highlights = [
  "Bezpieczne mycie lakieru",
  "Dokładne czyszczenie wnętrza",
  "Cena dopasowana do rozmiaru auta",
];

const services = [
  {
    icon: Droplets,
    title: "Mycie zewnętrzne",
    description: "Dokładne mycie karoserii, felg i szyb bez pośpiechu.",
  },
  {
    icon: Sparkles,
    title: "Pielęgnacja wnętrza",
    description: "Odkurzanie i odświeżenie kabiny dla komfortu w każdej podróży.",
  },
  {
    icon: ShieldCheck,
    title: "Ochrona lakieru",
    description: "Woskowanie, które podkreśla połysk i pomaga chronić nadwozie.",
  },
];

export default function CarWashPage() {
  return (
    <main className="overflow-hidden bg-white text-slate-950">
      <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">
        <div className="section-shell flex h-[70px] items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5" aria-label="Wybierz usługę Daily Shine">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-sky-700 text-white">
              <Droplets className="h-5 w-5" />
            </span>
            <span className="font-display text-sm font-bold tracking-[0.14em] sm:text-base">
              DAILY SHINE
              <span className="ml-2 hidden text-xs font-medium tracking-normal text-slate-500 sm:inline">
                MYJNIA
              </span>
            </span>
          </Link>
          <nav aria-label="Nawigacja myjni" className="hidden items-center gap-7 md:flex">
            <a className="text-sm font-medium text-slate-600 transition hover:text-sky-700" href="#uslugi">Usługi</a>
            <a className="text-sm font-medium text-slate-600 transition hover:text-sky-700" href="#cennik">Cennik</a>
            <Link className="text-sm font-medium text-slate-600 transition hover:text-sky-700" href="/galeria">Galeria</Link>
            <a className="text-sm font-medium text-slate-600 transition hover:text-sky-700" href="#kontakt">Kontakt</a>
          </nav>
          <a
            href="tel:+48794566787"
            className="inline-flex items-center gap-2 rounded-full bg-sky-700 px-4 py-2.5 text-xs font-bold uppercase tracking-[0.1em] text-white transition hover:bg-sky-800 sm:px-5"
          >
            <Phone className="h-4 w-4" />
            <span className="hidden sm:inline">Zadzwoń</span>
          </a>
        </div>
      </header>

      <section className="relative isolate min-h-[620px] overflow-hidden bg-slate-950 sm:min-h-[690px]">
        <Image
          src="https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&w=2200&q=85"
          alt="Pielęgnacja samochodu podczas mycia"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 z-0 bg-slate-950/55" />
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-sky-950/90 via-sky-950/55 to-slate-950/10" />
        <div className="absolute inset-0 z-0 bg-gradient-to-t from-slate-950/45 via-transparent to-slate-950/10" />

        <div className="section-shell relative z-10 flex min-h-[620px] items-center py-16 sm:min-h-[690px]">
          <div className="max-w-3xl text-white">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-sky-100 backdrop-blur-sm sm:text-xs">
              <Droplets className="h-4 w-4" />
              Czystość, którą widać
            </p>
            <h1 className="mt-6 max-w-3xl text-5xl leading-[0.98] tracking-tight sm:text-7xl lg:text-[5.5rem]">
              Twoje auto. <span className="text-cyan-300">Nowy blask.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-slate-100 sm:text-lg sm:leading-8">
              Staranna pielęgnacja nadwozia i wnętrza. Wybierz rozmiar auta,
              sprawdź cenę i umów wizytę w Daily Shine.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                href="#cennik"
                className="inline-flex min-h-13 items-center justify-center gap-2 rounded-full bg-cyan-300 px-6 py-3.5 text-sm font-bold text-sky-950 transition hover:bg-cyan-200"
              >
                Sprawdź cennik
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="tel:+48794566787"
                className="inline-flex min-h-13 items-center justify-center gap-2 rounded-full border border-white/35 bg-white/10 px-6 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition hover:bg-white/20"
              >
                <Phone className="h-4 w-4" />
                +48 794 566 787
              </a>
            </div>
            <ul className="mt-9 flex flex-col gap-3 text-sm text-sky-50 sm:flex-row sm:flex-wrap sm:gap-x-6">
              {highlights.map((highlight) => (
                <li key={highlight} className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-cyan-300" />
                  {highlight}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <a
          href="#uslugi"
          aria-label="Przewiń do usług"
          className="absolute bottom-7 left-1/2 z-10 hidden h-11 w-11 -translate-x-1/2 items-center justify-center rounded-full border border-white/30 text-white transition hover:bg-white/15 sm:flex"
        >
          <ArrowDown className="h-5 w-5" />
        </a>
      </section>

      <section id="uslugi" className="bg-[#f4f9fc] py-16 sm:py-20">
        <div className="section-shell">
          <div className="mx-auto mb-9 max-w-2xl text-center sm:mb-12">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-sky-700">Pielęgnacja bez kompromisów</p>
            <h2 className="mt-3 text-4xl text-slate-950 sm:text-5xl">Czystość od pierwszego spojrzenia</h2>
            <p className="mt-4 text-sm leading-6 text-slate-600 sm:text-base">
              Wybierz to, czego potrzebuje Twoje auto — od szybkiego mycia po pełne odświeżenie.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {services.map(({ icon: Icon, title, description }, index) => (
              <article
                key={title}
                className="rounded-[24px] border border-sky-100 bg-white p-6 shadow-[0_15px_40px_rgba(15,23,42,0.04)] sm:p-7"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-100 text-sky-700">
                  <Icon className="h-6 w-6" />
                </span>
                <p className="mt-6 text-xs font-bold uppercase tracking-[0.18em] text-sky-700">0{index + 1} / Daily Shine</p>
                <h3 className="mt-2 text-2xl text-slate-950">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="cennik" className="scroll-mt-20 py-16 sm:py-20">
        <div className="section-shell">
          <div className="mx-auto mb-9 max-w-2xl text-center sm:mb-12">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-sky-700">Prosto i przejrzyście</p>
            <h2 className="mt-3 text-4xl text-slate-950 sm:text-5xl">Cennik myjni</h2>
            <p className="mt-4 text-sm leading-6 text-slate-600 sm:text-base">
              Wskaż kategorię samochodu, a zobaczysz ceny wszystkich pakietów.
            </p>
          </div>
          <CarWashPricing />
        </div>
      </section>

      <section id="kontakt" className="bg-sky-950 py-14 text-white sm:py-16">
        <div className="section-shell grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-cyan-300">Czas na czyste auto?</p>
            <h2 className="mt-3 text-4xl sm:text-5xl">Umów swoją wizytę</h2>
            <p className="mt-4 max-w-xl text-sm leading-6 text-sky-100 sm:text-base">
              Zadzwoń i wybierz dogodny termin. Chętnie odpowiemy na pytania o pakiety i dobór usługi.
            </p>
          </div>
          <div className="space-y-3">
            <a
              href="tel:+48794566787"
              className="flex items-center gap-4 rounded-2xl border border-white/15 bg-white/10 p-4 transition hover:bg-white/15"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-cyan-300 text-sky-950">
                <Phone className="h-5 w-5" />
              </span>
              <span>
                <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-sky-200">Zadzwoń</span>
                <span className="mt-1 block font-semibold">+48 794 566 787</span>
              </span>
            </a>
            <div className="flex items-center gap-4 rounded-2xl border border-white/15 bg-white/10 p-4">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-cyan-300 text-sky-950">
                <MapPin className="h-5 w-5" />
              </span>
              <span>
                <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-sky-200">Znajdź nas</span>
                <span className="mt-1 block font-semibold">ul. Sublańska 83, Tychy</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-slate-950 text-slate-400">
        <div className="section-shell flex flex-col gap-3 py-6 text-center text-xs sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <p>© Daily Shine · Myjnia samochodowa · Tychy</p>
          <div className="flex items-center justify-center gap-4 sm:justify-end">
            <Link href="/galeria" className="transition hover:text-white">
              Galeria zdjęć
            </Link>
            <Link href="/" className="transition hover:text-white">
              Wybierz dział
            </Link>
          </div>
          <p className="inline-flex items-center justify-center gap-1.5">
            <Clock3 className="h-3.5 w-3.5" />
            Pon.–pt. 08:00–18:00
          </p>
        </div>
      </footer>
    </main>
  );
}
