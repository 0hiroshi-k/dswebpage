import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight, Droplets, Wrench } from "lucide-react";

export const metadata: Metadata = {
  title: "Daily Shine | Wybierz usługę",
  description:
    "Wybierz myjnię samochodową lub serwis samochodowy Daily Shine w Tychach.",
};

const destinations = [
  {
    title: "Myjnia samochodowa",
    description:
      "Czyste auto od kół po dach. Wybierz pakiet i sprawdź cenę dopasowaną do rozmiaru samochodu.",
    label: "Myjnia",
    href: "/myjnia",
    icon: Droplets,
    image: "/images/gallery-foam-wash.jpg",
    style: "border-sky-200 bg-sky-50 text-sky-950",
    button: "bg-sky-700 text-white hover:bg-sky-800",
  },
  {
    title: "Serwis samochodowy",
    description:
      "Przeglądy, diagnostyka i naprawy. Sprawdź ofertę warsztatu Daily Shine.",
    label: "Serwis",
    href: "/serwis",
    icon: Wrench,
    image: "/images/1.jpg",
    style: "border-zinc-200 bg-zinc-100 text-zinc-950",
    button: "bg-zinc-950 text-white hover:bg-zinc-800",
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#f5f8fa] text-slate-950">
      <header className="section-shell flex items-center justify-between gap-4 py-6">
        <Link href="/" className="font-display text-xl font-bold tracking-[0.16em]">
          DAILY SHINE
        </Link>
        <div className="flex items-center gap-4 sm:gap-6">
          <Link
            href="/galeria"
            className="text-sm font-semibold text-slate-600 transition hover:text-sky-700"
          >
            Galeria
          </Link>
          <a
            href="tel:+48794566787"
            className="text-sm font-semibold text-slate-600 transition hover:text-slate-950"
          >
            +48 794 566 787
          </a>
        </div>
      </header>

      <section className="section-shell flex min-h-[calc(100vh-88px)] flex-col justify-center py-12 sm:py-16">
        <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-14">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-sky-700">
            Daily Shine · Tychy
          </p>
          <h1 className="mt-4 text-4xl leading-[1.05] tracking-tight text-slate-950 sm:text-6xl">
            Czego potrzebuje Twoje auto?
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
            Wybierz miejsce, do którego chcesz przejść. Myjnia i serwis mają
            osobne oferty dopasowane do Twoich potrzeb.
          </p>
          <ArrowDown className="mx-auto mt-6 h-5 w-5 text-sky-600" aria-hidden="true" />
        </div>

        <div className="mx-auto grid w-full max-w-5xl gap-5 md:grid-cols-2">
          {destinations.map((destination) => {
            const Icon = destination.icon;

            return (
              <Link
                key={destination.href}
                href={destination.href}
                className={`group overflow-hidden rounded-[28px] border p-3 shadow-[0_16px_50px_rgba(15,23,42,0.07)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_60px_rgba(15,23,42,0.12)] ${destination.style}`}
              >
                <div className="relative h-52 overflow-hidden rounded-[20px] sm:h-60">
                  <Image
                    src={destination.image}
                    alt=""
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                  <span className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full bg-white/95 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-slate-800">
                    <Icon className="h-4 w-4" />
                    {destination.label}
                  </span>
                </div>
                <div className="p-4 sm:p-6">
                  <h2 className="text-3xl tracking-tight sm:text-4xl">
                    {destination.title}
                  </h2>
                  <p className="mt-3 min-h-14 text-sm leading-6 text-slate-600 sm:text-base">
                    {destination.description}
                  </p>
                  <span
                    className={`mt-5 inline-flex items-center gap-2 rounded-full px-5 py-3 text-xs font-bold uppercase tracking-[0.12em] transition ${destination.button}`}
                  >
                    Przejdź do oferty
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </main>
  );
}
