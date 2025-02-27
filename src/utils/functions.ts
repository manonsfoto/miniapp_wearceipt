import { format, subHours } from "date-fns";
import { cities, TCity } from "./data";

export const convertTime = (timestamp: number, timezone: number): string => {
  const utcDate = new Date(timestamp * 1000);

  const localDate = new Date(utcDate.getTime() + timezone * 1000);

  const adjustedTime = subHours(localDate, 1);

  const formattedTime = format(adjustedTime, "hh:mm a");
  return formattedTime;
};

export function findSelectedCity(city_name: string) {
  const selectedCity = cities.find(
    (city: TCity) => city.name.toLowerCase() === city_name
  );
  return selectedCity;
}
