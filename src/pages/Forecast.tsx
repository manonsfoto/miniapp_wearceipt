import { useParams } from "react-router-dom";
import { findSelectedCity } from "../utils/functions";
import Header from "../components/Header";
import CurrentWeather from "../components/CurrentWeather";

const Forecast = () => {
  const { city_name } = useParams<{ city_name: string }>();
  const selectedCity = findSelectedCity(city_name!);
  return (
    <>
      {" "}
      <Header text={`${selectedCity?.name}, ${selectedCity?.country}`} />
      <CurrentWeather cityName={city_name!} />
      <ul>{/* 5 day-forecast */}</ul>
    </>
  );
};

export default Forecast;
