"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check, Sparkles } from "lucide-react";
import { priceList } from "@/data/prices";

export function PriceList() {
  return (
    <div className="space-y-5">
      <div className="grid gap-5 xl:grid-cols-2">
        {priceList.map((item, index) => {
          const featured = index === 0;

          return (
            <motion.article
              key={item.service}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.06, duration: 0.35 }}
              className={[
                "group relative overflow-hidden rounded-[28px] border p-5 shadow-[0_18px_40px_rgba(0,0,0,0.1)] transition-all duration-300 md:p-6",
                featured
                  ? "border-[#f5b301]/60 bg-[radial-gradient(circle_at_top_left,rgba(245,179,1,0.22),transparent_30%),#0f0f0f] text-white"
                  : "border-white/10 bg-white/95 text-black",
              ].join(" ")}
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.12),transparent_28%)] opacity-80" />

              <div className="relative">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div
                      className={[
                        "flex h-11 w-11 shrink-0 items-center justify-center rounded-full",
                        featured ? "bg-[#f5b301] text-black" : "bg-black text-white",
                      ].join(" ")}
                    >
                      <Sparkles className="h-5 w-5" />
                    </div>

                    <div>
                      <p
                        className={[
                          "text-[0.62rem] font-bold uppercase tracking-[0.2em]",
                          featured ? "text-white/70" : "text-black/60",
                        ].join(" ")}
                      >
                        Usługa
                      </p>
                      <h3 className="mt-2 text-xl font-semibold leading-tight md:text-2xl">
                        {item.service}
                      </h3>
                    </div>
                  </div>

                  {featured && (
                    <span className="hidden rounded-full border border-[#f5b301]/40 bg-[#f5b301]/10 px-2.5 py-1 text-[0.56rem] font-bold uppercase tracking-[0.18em] text-[#f5b301] sm:inline-flex">
                      Popularne
                    </span>
                  )}
                </div>

                <div className="mt-5 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-black/50">
                  <span className="inline-flex items-center gap-1 rounded-full border border-current/20 px-2 py-1 text-[0.56rem] text-inherit">
                    <Check className="h-3 w-3" />
                    Profesjonalnie
                  </span>
                </div>

                <p
                  className={[
                    "mt-5 text-sm leading-6",
                    featured ? "text-white/75" : "text-black/70",
                  ].join(" ")}
                >
                  {item.description}
                </p>

                <div className="mt-6 flex items-end justify-between gap-3">
                  <div>
                    <p
                      className={[
                        "text-[0.56rem] font-bold uppercase tracking-[0.18em]",
                        featured ? "text-[#f5b301]" : "text-black/60",
                      ].join(" ")}
                    >
                      Cena od
                    </p>
                    <div className="mt-2 flex items-baseline gap-2">
                      <span className="text-3xl font-black tracking-tight md:text-4xl">
                        {item.price}
                      </span>
                    </div>
                  </div>

                  <button
                    type="button"
                    className={[
                      "inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-[0.62rem] font-bold uppercase tracking-[0.18em] transition",
                      featured
                        ? "bg-white text-black hover:bg-[#f5b301]"
                        : "bg-black text-white hover:bg-[#2a2a2a]",
                    ].join(" ")}
                  >
                    Rezerwuj
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>

      <p className="text-sm italic text-white/75">
        Ceny orientacyjne. Dokładna wycena po diagnozie.
      </p>
    </div>
  );
}
