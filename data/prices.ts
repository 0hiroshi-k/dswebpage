export type PriceItem = {
  service: string;
  description: string;
  price: string;
};

export const priceList: PriceItem[] = [
  {
    service: "Diagnostyka komputerowa",
    description: "Skanowanie błędów i analiza stanu układów pojazdu.",
    price: "100 zł",
  },
  {
    service: "Kontrola auta przed zakupem",
    description: "Dokładna kontrola techniczna pojazdu przed zakupem.",
    price: "od 250 zł",
  },
  {
    service: "Wymiana oleju silnikowego",
    description: "Wymiana oleju silnikowego z kontrolą poziomów i stanu układu.",
    price: "od 120 zł",
  },
  {
    service: "Wymiana oleju + filtra oleju",
    description: "Serwis silnika z wymianą oleju i filtra oleju.",
    price: "od 120 zł",
  },
  {
    service: "Wymiana oleju + komplet filtrów",
    description: "Kompleksowa wymiana oleju wraz z zestawem filtrów od producenta.",
    price: "od 150 zł",
  },
  {
    service: "Wymiana klocków hamulcowych – oś",
    description: "Wymiana klocków hamulcowych na jednej osi pojazdu.",
    price: "od 150 zł",
  },
  {
    service: "Wymiana tarcz i klocków hamulcowych – oś",
    description: "Serwis hamulców z wymianą tarcz i klocków na jednej osi.",
    price: "od 250 zł",
  },
  {
    service: "Wymiana amortyzatora",
    description: "Wymiana amortyzatora z kontrolą elementów zawieszenia.",
    price: "od 180 zł",
  },
  {
    service: "Geometria / zbieżność kół",
    description: "Ustawienie kół z kontrolą geometrii i właściwej zbieżności.",
    price: "150 zł",
  },
  {
    service: "Wymiana rozrządu",
    description: "Kompleksowa wymiana rozrządu z doborem odpowiednich elementów.",
    price: "od 700 zł",
  },
  {
    service: "Wymiana sprzęgła",
    description: "Wymiana sprzęgła z kontrolą elementów napędu i układu sprzęgła.",
    price: "od 950 zł",
  },
  {
    service: "Serwis klimatyzacji",
    description: "Diagnostyka, odgrzybianie i uzupełnienie czynnika chłodniczego.",
    price: "od 200 zł + czynnik",
  },
];
