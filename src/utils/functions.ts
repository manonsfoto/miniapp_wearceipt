import { format, subHours } from "date-fns";
import { cities, clothingData, TCity } from "./data";

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

export function getClothingSuggestion(
  feelsLikeTemp: number,
  weatherDescription: string,
  isCelsius: boolean
) {
  const tempKey = isCelsius ? "temp_c" : "temp_f";
  const clothing = clothingData.clothing_recommendations.find(
    (c) => feelsLikeTemp >= c[tempKey]
  );
  const specialClothings = getSpecialCondition(weatherDescription);
  const clothings = {
    base: clothing?.base_layer || [],
    insulating: clothing?.insulating_layer || [],
    outer: clothing?.outer_layer || [],
    accessories: [
      ...(clothing?.accessories || []),
      ...(specialClothings?.accessories || []),
    ],
  };
  return clothings;
}

export function getSpecialCondition(weatherDescription: string) {
  if (/rain|thunderstorm|drizzle/.test(weatherDescription))
    return clothingData.special_conditions.rain;
  if (/snow/.test(weatherDescription))
    return clothingData.special_conditions.snow;
  return null;
}
