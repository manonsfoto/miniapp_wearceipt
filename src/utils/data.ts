export type TCity = {
  name: string;
  country: string;
  latitude: string;
  longitude: string;
};

export const cities: TCity[] = [
  {
    name: "Düsseldorf",
    country: "Germany",
    latitude: "51.233334",
    longitude: "6.783333",
  },
  {
    name: "Busan",
    country: "South Korea",
    latitude: "35.100000",
    longitude: "129.033333",
  },
  {
    name: "Fukuoka",
    country: "Japan",
    latitude: "33.600000",
    longitude: "130.400000",
  },
  {
    name: "Sydney",
    country: "Australia",
    latitude: "-33.866667",
    longitude: "151.200000",
  },
  {
    name: "Vancouver",
    country: "Canada",
    latitude: "49.316666",
    longitude: "-123.066666",
  },
];
