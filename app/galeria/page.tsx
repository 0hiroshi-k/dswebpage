import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Droplets, Images } from "lucide-react";

export const metadata: Metadata = {
  title: "Galeria zdjęć | Daily Shine",
  description:
    "Zobacz samochody, pielęgnację i efekty pracy zespołu Daily Shine w Tychach.",
};

const photos = [
  {
    src: "/images/gallery-foam-wash.jpg",
    alt: "Czerwony samochód pokryty aktywną pianą podczas mycia",
    caption: "Mycie detailingowe",
    className: "md:row-span-2",
  },
  {
    src: "/images/gallery-audi.jpg",
    alt: "Ciemne Audi po pielęgnacji lakieru na zewnątrz myjni",
    caption: "Połysk lakieru",
    className: "",
  },
  {
    src: "/images/gallery-porsche-interior.jpg",
    alt: "Wnętrze Porsche z pomarańczową skórzaną tapicerką",
    caption: "Pielęgnacja wnętrza",
    className: "",
  },
  {
    src: "/images/gallery-lexus.jpg",
    alt: "Czerwony Lexus o lśniącym lakierze",
    caption: "Detale i połysk",
    className: "",
  },
  {
    src: "/images/gallery-bmw.jpg",
    alt: "Granatowe BMW przed myjnią samochodową",
    caption: "Przed myjnią",
    className: "md:row-span-2",
  },
  {
    src: "/images/gallery-motorcycle.jpg",
    alt: "Czarny motocykl Harley-Davidson",
    caption: "Pielęgnacja motocykli",
    className: "",
  },
  {
    src: "/images/gallery-ferrari-interior.jpg",
    alt: "Czarno-czerwone wnętrze Ferrari",
    caption: "Detailing wnętrza",
    className: "",
  },
  {
    src: "/images/gallery-porsche.jpg",
    alt: "Ciemny samochód sportowy przed myjnią",
    caption: "Samochód gotowy do drogi",
    className: "",
  },
  {
    src: "/images/gallery-17.jpg",
    alt: "Bok ciemnego samochodu elektrycznego z lśniącym lakierem",
    caption: "Lakier z bliska",
    className: "md:col-span-2",
  },
  {
    src: "/images/gallery-audi-interior.jpg",
    alt: "Czyste, nowoczesne wnętrze samochodu Audi",
    caption: "Czyste wnętrze",
    className: "",
  },
  {
    src: "/images/gallery-mustang.jpg",
    alt: "Biały Ford Mustang przed myjnią samochodową",
    caption: "Klasyczna sylwetka",
    className: "",
  },
  {
    src: "/images/gallery-mercedes-interior.jpg",
    alt: "Wnętrze Mercedesa z brązową skórzaną tapicerką",
    caption: "Skórzana tapicerka",
    className: "",
  },
  {
    src: "/images/gallery-16.jpg",
    alt: "Ciemny samochód sportowy przed budynkiem myjni",
    caption: "Daily Shine · Tychy",
    className: "",
  },
] as const;

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-[#f5f8fa] text-slate-950">
      <header className="border-b border-slate-200 bg-white">
        <div className="section-shell flex h-[70px] items-center justify-between">
          <Link href="/" className="font-display text-base font-bold tracking-[0.14em]">
            DAILY SHINE
          </Link>
          <Link
            href="/myjnia"
            className="inline-flex items-center gap-2 text-sm font-semibold text-sky-800 transition hover:text-sky-600"
          >
            <Droplets className="h-4 w-4" />
            Myjnia
          </Link>
        </div>
      </header>

      <section className="section-shell py-12 sm:py-16">
        <Link
          href="/myjnia"
          className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 transition hover:text-sky-700"
        >
          <ArrowLeft className="h-4 w-4" />
          Wróć do myjni
        </Link>

        <div className="mx-auto mb-9 mt-10 max-w-2xl text-center sm:mb-12">
          <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-100 text-sky-700">
            <Images className="h-6 w-6" />
          </span>
          <p className="mt-5 text-xs font-bold uppercase tracking-[0.24em] text-sky-700">
            Daily Shine · Tychy
          </p>
          <h1 className="mt-3 text-4xl text-slate-950 sm:text-6xl">
            Galeria zdjęć
          </h1>
          <p className="mt-4 text-sm leading-6 text-slate-600 sm:text-base">
            Zajrzyj do naszego świata pielęgnacji samochodów — od mycia
            zewnętrznego po dopracowane wnętrza.
          </p>
        </div>

        <div className="grid auto-rows-[220px] gap-4 sm:grid-cols-2 sm:auto-rows-[260px] lg:grid-cols-3">
          {photos.map((photo) => (
            <figure
              key={photo.src}
              className={`group relative overflow-hidden rounded-[24px] bg-slate-200 shadow-[0_14px_38px_rgba(15,23,42,0.08)] ${photo.className}`}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent opacity-90 transition group-hover:opacity-100" />
              <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5 text-sm font-semibold text-white">
                {photo.caption}
                <ArrowRight className="h-4 w-4 opacity-0 transition group-hover:translate-x-1 group-hover:opacity-100" />
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-5 rounded-[26px] border border-sky-100 bg-white p-6 text-center shadow-[0_12px_34px_rgba(15,23,42,0.04)] sm:flex-row sm:p-8 sm:text-left">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-sky-700">
              Twoje auto też może tak wyglądać
            </p>
            <h2 className="mt-2 text-2xl text-slate-950 sm:text-3xl">
              Umów wizytę w Daily Shine
            </h2>
          </div>
          <Link
            href="/myjnia#cennik"
            className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-full bg-sky-700 px-5 text-sm font-bold text-white transition hover:bg-sky-800"
          >
            Zobacz cennik
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white py-5">
        <div className="section-shell flex flex-col items-center justify-between gap-3 text-xs text-slate-500 sm:flex-row">
          <p>© Daily Shine · Tychy</p>
          <Link href="/" className="transition hover:text-sky-700">
            Wróć do wyboru usług
          </Link>
        </div>
      </footer>
    </main>
  );
}
