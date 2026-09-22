export type PriceItem = {
  service: string;
  description: string;
  price: string;
};

export const priceList: PriceItem[] = [
  {
    service: "Wymiana oleju i filtrów",
    description: "Serwis silnika z wymianą oleju, filtra oleju i filtra powietrza.",
    price: "od 120 zł",
  },
  {
    service: "Wymiana oleju – skrzynia biegów",
    description: "Wymiana oleju w automatycznej lub manualnej skrzyni biegów.",
    price: "od 180 zł",
  },
  {
    service: "Wymiana oleju – most / dyferencjał",
    description: "Kontrola i wymiana oleju w mechanizmach napędowych.",
    price: "od 150 zł",
  },
  {
    service: "Filtry – oleju, powietrza, paliwa, kabinowy",
    description: "Kompleksowa wymiana filtrów dopasowanych do modelu auta.",
    price: "od 40 zł",
  },
  {
    service: "Serwis klimatyzacji",
    description: "Odgrzybianie, odwadnianie, kontrola szczelności i ozonowanie.",
    price: "od 100 zł",
  },
  {
    service: "Geometria kół",
    description: "Zbieżność i rozbieżność z ustawieniem pod kąty i kontrolą zużycia opon.",
    price: "od 100 zł",
  },
  {
    service: "Diagnostyka komputerowa",
    description: "Skanowanie błędów i analiza stanu układów pojazdu.",
    price: "od 100 zł",
  },
  {
    service: "Konsultacja techniczna",
    description: "Pomoc przy wyborze usług, przeglądzie i planowaniu serwisu.",
    price: "od 0 zł",
  },
];
