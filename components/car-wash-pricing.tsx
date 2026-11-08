"use client";

import { useState } from "react";
import { CarFront, Check, Sparkles } from "lucide-react";
import {
  additionalWashServices,
  basicWashServices,
  washVehicleSizes,
  type WashVehicleSize,
} from "@/data/wash-prices";

function WashPriceCard({
  name,
  price,
  vehicleName,
}: {
  name: string;
  price: string;
  vehicleName: string;
}) {
  const formattedPrice = price === "Wycena indywidualna" ? price : `${price} zł`;

  return (
    <article className="flex min-h-40 flex-col justify-between rounded-[22px] border border-sky-100 bg-white p-5 shadow-[0_12px_34px_rgba(15,23,42,0.045)] transition duration-300 hover:-translate-y-0.5 hover:border-sky-200 hover:shadow-[0_18px_42px_rgba(15,23,42,0.08)] sm:p-6">
      <div>
        <div className="flex items-start gap-3">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-sky-50 text-sky-700">
            <Check className="h-4 w-4" />
          </span>
          <h4 className="pt-1 text-lg leading-snug text-slate-950 sm:text-xl">{name}</h4>
        </div>
      </div>
      <div className="mt-7 border-t border-slate-100 pt-4">
        <p className="text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-slate-500">
          {vehicleName} · cena
        </p>
        <p className="mt-1 text-2xl font-bold tracking-tight text-sky-800 sm:text-3xl">
          {formattedPrice}
        </p>
      </div>
    </article>
  );
}

export function CarWashPricing() {
  const [selectedSize, setSelectedSize] = useState<WashVehicleSize>("sedan");
  const selectedVehicle = washVehicleSizes.find((vehicle) => vehicle.id === selectedSize);

  return (
    <div>
      <div className="mb-7 flex flex-col gap-2 sm:mb-9">
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-sky-700">
          01 / Wybierz kategorię auta
        </p>
        <h3 className="text-3xl text-slate-950 sm:text-4xl">Ceny dla Twojego samochodu</h3>
        <p className="text-sm text-slate-600">
          Wybór kategorii aktualizuje ceny wszystkich usług.
        </p>
      </div>

      <div
        role="group"
        aria-label="Wybierz kategorię samochodu"
        className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5"
      >
        {washVehicleSizes.map((vehicle) => {
          const isSelected = selectedSize === vehicle.id;

          return (
            <button
              key={vehicle.id}
              type="button"
              aria-pressed={isSelected}
              onClick={() => setSelectedSize(vehicle.id)}
              className={`rounded-2xl border px-3 py-4 text-left transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-700 sm:px-4 ${
                isSelected
                  ? "border-sky-700 bg-sky-700 text-white shadow-lg shadow-sky-900/15"
                  : "border-slate-200 bg-white text-slate-800 hover:border-sky-300 hover:bg-sky-50"
              }`}
            >
              <CarFront
                className={`mb-3 h-5 w-5 ${isSelected ? "text-sky-100" : "text-sky-700"}`}
              />
              <span className="block font-bold">{vehicle.name}</span>
              <span
                className={`mt-1 block text-xs ${isSelected ? "text-sky-100" : "text-slate-500"}`}
              >
                {vehicle.example}
              </span>
            </button>
          );
        })}
      </div>

      <section aria-labelledby="basic-wash-services" className="mt-12 sm:mt-16">
        <div className="mb-6 flex items-start gap-3 sm:mb-8">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sky-100 text-sky-700">
            <Sparkles className="h-5 w-5" />
          </span>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-sky-700">
              02 / Pakiety
            </p>
            <h3 id="basic-wash-services" className="mt-1 text-3xl text-slate-950">
              Podstawowe usługi
            </h3>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {basicWashServices.map((service) => (
            <WashPriceCard
              key={service.name}
              name={service.name}
              price={service.prices[selectedSize]}
              vehicleName={selectedVehicle?.name ?? ""}
            />
          ))}
        </div>
        <p className="mt-4 text-sm text-slate-600">
          Usuwanie sierści zwierząt wymaga dodatkowej opłaty.
        </p>
      </section>

      <section aria-labelledby="additional-wash-services" className="mt-12 sm:mt-16">
        <div className="mb-6 sm:mb-8">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-sky-700">
            03 / Usługi na życzenie
          </p>
          <h3 id="additional-wash-services" className="mt-1 text-3xl text-slate-950">
            Usługi dodatkowe
          </h3>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {additionalWashServices.map((service) => (
            <WashPriceCard
              key={service.name}
              name={service.name}
              price={service.prices[selectedSize]}
              vehicleName={selectedVehicle?.name ?? ""}
            />
          ))}
        </div>
      </section>

      <p className="mt-7 rounded-2xl bg-sky-50 px-4 py-3 text-sm leading-6 text-slate-600">
        Ceny orientacyjne. W przypadku wskazanych przedziałów końcowa cena zależy
        od wielkości pojazdu lub zakresu usługi. Przy myciu podwozia obowiązuje
        wycena indywidualna.
      </p>
    </div>
  );
}
