export const washVehicleSizes = [
  { id: "micro", name: "Micro", example: "Małe auto" },
  { id: "sedan", name: "Sedan", example: "Auto osobowe" },
  { id: "kombi", name: "Kombi", example: "Auto kombi" },
  { id: "suvMinivan", name: "SUV / MiniVan", example: "Większe auto" },
  { id: "largeSuvVan", name: "Duży SUV / Van", example: "Duże auto" },
] as const;

export type WashVehicleSize = (typeof washVehicleSizes)[number]["id"];

type VehiclePrices = Record<WashVehicleSize, string>;

type WashService = {
  name: string;
  prices: VehiclePrices;
};

export const basicWashServices: WashService[] = [
  {
    name: "Mycie podstawowe zewnątrz",
    prices: { micro: "100", sedan: "125", kombi: "150", suvMinivan: "175", largeSuvVan: "200" },
  },
  {
    name: "Sprzątanie wnętrza",
    prices: { micro: "100", sedan: "125", kombi: "150", suvMinivan: "175", largeSuvVan: "200" },
  },
  {
    name: "Mycie komplet",
    prices: { micro: "200", sedan: "225", kombi: "235", suvMinivan: "275", largeSuvVan: "325/375" },
  },
  {
    name: "Mycie detailingowe zewnątrz",
    prices: { micro: "500", sedan: "575", kombi: "575", suvMinivan: "625", largeSuvVan: "625/750" },
  },
  {
    name: "Detailing wnętrza",
    prices: { micro: "700", sedan: "800", kombi: "825", suvMinivan: "875", largeSuvVan: "875/1000" },
  },
  {
    name: "Komplet Premium",
    prices: { micro: "1125", sedan: "1250", kombi: "1300", suvMinivan: "1375", largeSuvVan: "1425/1675" },
  },
];

export const additionalWashServices: WashService[] = [
  {
    name: "Pranie foteli",
    prices: { micro: "450", sedan: "500", kombi: "525", suvMinivan: "575", largeSuvVan: "575/625" },
  },
  {
    name: "Czyszczenie i pielęgnacja tapicerki skórzanej",
    prices: { micro: "325", sedan: "375", kombi: "375", suvMinivan: "450", largeSuvVan: "475/500" },
  },
  {
    name: "Pielęgnacja skóry – ochrona, odżywienie i trwałość",
    prices: { micro: "125", sedan: "125", kombi: "125", suvMinivan: "125", largeSuvVan: "125/250" },
  },
  {
    name: "Pranie dywaników",
    prices: { micro: "75", sedan: "75", kombi: "75", suvMinivan: "75", largeSuvVan: "75/125" },
  },
  {
    name: "Pranie bagażnika",
    prices: { micro: "75", sedan: "75", kombi: "75", suvMinivan: "75", largeSuvVan: "75/100" },
  },
  {
    name: "Pranie podłogi",
    prices: { micro: "200/250", sedan: "200/250", kombi: "200/250", suvMinivan: "200/250", largeSuvVan: "200/250" },
  },
  {
    name: "Pranie lub bonetowanie podsufitki",
    prices: { micro: "200", sedan: "200", kombi: "200", suvMinivan: "225", largeSuvVan: "225/250" },
  },
  {
    name: "Mycie silnika z góry",
    prices: { micro: "200", sedan: "200", kombi: "200", suvMinivan: "200", largeSuvVan: "200" },
  },
  {
    name: "Mycie silnika z dołu",
    prices: { micro: "250", sedan: "250", kombi: "250", suvMinivan: "250", largeSuvVan: "250" },
  },
  {
    name: "Mycie podwozia",
    prices: {
      micro: "Wycena indywidualna",
      sedan: "Wycena indywidualna",
      kombi: "Wycena indywidualna",
      suvMinivan: "Wycena indywidualna",
      largeSuvVan: "Wycena indywidualna",
    },
  },
  {
    name: "Czyszczenie lakieru",
    prices: { micro: "250", sedan: "325", kombi: "325", suvMinivan: "450", largeSuvVan: "450/500" },
  },
  {
    name: "Aplikacja wosku twardego",
    prices: { micro: "325", sedan: "375", kombi: "400", suvMinivan: "450", largeSuvVan: "450/500" },
  },
  {
    name: "Aplikacja sealantu",
    prices: { micro: "125", sedan: "125", kombi: "125", suvMinivan: "200", largeSuvVan: "200/250" },
  },
  {
    name: "Dekontaminacja felg",
    prices: { micro: "125", sedan: "125", kombi: "125", suvMinivan: "125", largeSuvVan: "125" },
  },
  {
    name: "Korekta lakieru One-Step",
    prices: { micro: "1000", sedan: "1050", kombi: "1075", suvMinivan: "1250", largeSuvVan: "1500" },
  },
  {
    name: "Powłoka hydrofobowa na przednią szybę",
    prices: { micro: "200", sedan: "200", kombi: "200", suvMinivan: "200", largeSuvVan: "200" },
  },
  {
    name: "Powłoka hydrofobowa wszystkich szyb",
    prices: { micro: "375", sedan: "375", kombi: "375", suvMinivan: "375", largeSuvVan: "375" },
  },
  {
    name: "Czyszczenie chromu",
    prices: { micro: "od 50", sedan: "od 50", kombi: "od 50", suvMinivan: "od 50", largeSuvVan: "od 50" },
  },
  {
    name: "Nabłyszczanie zewnętrznych części plastiku",
    prices: { micro: "25", sedan: "25", kombi: "25", suvMinivan: "25", largeSuvVan: "25/250" },
  },
  {
    name: "Czernienie / zabezpieczanie zewnętrznych plastików",
    prices: { micro: "od 100", sedan: "od 100", kombi: "od 100", suvMinivan: "od 100", largeSuvVan: "od 100" },
  },
  {
    name: "Mycie zewnętrzne samochodu ciężarowego pow. 3,5 t do 6,5 t",
    prices: { micro: "200", sedan: "200", kombi: "200", suvMinivan: "200", largeSuvVan: "200" },
  },
  {
    name: "Usuwanie naklejek",
    prices: { micro: "od 70", sedan: "od 70", kombi: "od 70", suvMinivan: "od 70", largeSuvVan: "od 70" },
  },
  {
    name: "Ozonowanie auta",
    prices: { micro: "od 80", sedan: "od 80", kombi: "od 80", suvMinivan: "od 80", largeSuvVan: "od 80" },
  },
  {
    name: "Mycie motocykli",
    prices: { micro: "150", sedan: "150", kombi: "175", suvMinivan: "175", largeSuvVan: "200" },
  },
];
