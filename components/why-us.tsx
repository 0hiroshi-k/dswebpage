"use client";

import { motion } from "framer-motion";
import { BadgeCheck, Clock3, ShieldCheck, Wrench } from "lucide-react";

const reasons = [
  {
    title: "Profesjonalny sprzęt",
    description: "Działamy na nowoczesnym sprzęcie do precyzyjnych napraw i serwisu.",
    icon: Wrench,
  },
  {
    title: "Szybko i terminowo",
    description: "Zadbamy o to, aby każda usługa została wykonana w ustalonym terminie.",
    icon: Clock3,
  },
  {
    title: "Uczciwe ceny",
    description: "Przejrzyste stawki i rzetelna wycena bez ukrytych kosztów.",
    icon: BadgeCheck,
  },
  {
    title: "Gwarancja jakości",
    description: "Każda usługa wykonana zgodnie z najwyższymi standardami i wymaganiami klienta.",
    icon: ShieldCheck,
  },
];

export function WhyUs() {
  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
      {reasons.map((reason, index) => {
        const Icon = reason.icon;

        return (
          <motion.div
            key={reason.title}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: index * 0.08, duration: 0.3 }}
            className="card-surface p-5 text-center"
          >
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-black/10 bg-black text-white shadow-[0_18px_30px_rgba(0,0,0,0.06)]">
              <Icon className="h-7 w-7 text-[#f5b301]" />
            </div>
            <h3 className="mt-5 text-2xl text-black">{reason.title}</h3>
            <p className="mt-3 text-sm leading-6 text-black/70">{reason.description}</p>
          </motion.div>
        );
      })}
    </div>
  );
}
