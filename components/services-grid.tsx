"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Gauge,
  Droplets,
  Shield,
  Settings2,
  Sparkles,
  Wrench,
} from "lucide-react";

const services = [
  {
    title: "Wymiana oleju i filtrów",
    description: "Kompleksowa kontrola i wymiana oleju oraz filtrów, aby silnik pracował czysto i wydajnie.",
    icon: Wrench,
    image: "/images/1.jpg",
  },
  {
    title: "Wymiana oleju – skrzynia biegów",
    description: "Serwis skrzyni biegów z doborem odpowiedniego oleju i właściwym doborem parametrów.",
    icon: Settings2,
    image: "/images/2.jpg",
  },
  {
    title: "Wymiana oleju – most / dyferencjał",
    description: "Ochrona mechanizmu napędowego przed zużyciem, hałasem i nieprawidłowym pracowaniem.",
    icon: Gauge,
    image: "/images/3.jpg",
  },
  {
    title: "Filtry – oleju, powietrza, paliwa, kabinowy",
    description: "Szybka wymiana filtrów zapewnia czystość układów i lepszy komfort jazdy.",
    icon: Sparkles,
    image: "/images/4.jpg",
  },
  {
    title: "Serwis klimatyzacji",
    description: "Odgrzybianie, odwadnianie, ozonowanie i diagnostyka skutecznej pracy układu klimatyzacji.",
    icon: Droplets,
    image: "/images/5.jpg",
  },
  {
    title: "Geometria kół",
    description: "Precyzyjne ustawienie kół dla bezpieczeństwa, lepszego prowadzenia i oszczędności opon.",
    icon: Shield,
    image: "/images/6.jpg",
  },
];

export function ServicesGrid() {
  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      {services.map((service, index) => {
        const Icon = service.icon;

        return (
          <motion.article
            key={service.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: index * 0.08, duration: 0.45 }}
            className="group relative overflow-hidden rounded-[24px] border border-black/10 bg-white shadow-[0_18px_45px_rgba(15,15,15,0.06)]"
          >
            <div className="relative h-48 w-full overflow-hidden">
              <Image
                src={service.image}
                alt={service.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                className="object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,17,17,0.18),rgba(17,17,17,0.8))]" />
              <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#f5b301]/15 to-transparent" />
              <div className="absolute left-5 top-5 flex h-12 w-12 items-center justify-center rounded-full border border-[#f5b301]/70 bg-black/40 text-[#f5b301] backdrop-blur-sm">
                <Icon className="h-5 w-5" />
              </div>
            </div>

            <div className="p-5">
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-black/60">
                Serwis
              </span>
              <h3 className="mt-3 text-2xl text-black">{service.title}</h3>
              <p className="mt-4 text-sm leading-6 text-black/70">{service.description}</p>
            </div>
          </motion.article>
        );
      })}
    </div>
  );
}
