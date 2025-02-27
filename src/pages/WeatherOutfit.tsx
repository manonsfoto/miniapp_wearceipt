import { useParams, Link } from "react-router-dom";
import Header from "../components/Header";
import { findSelectedCity } from "../utils/functions";
import CurrentWeather from "../components/CurrentWeather";

const WeatherOutift = () => {
  const { city_name } = useParams<{ city_name: string }>();
  const selectedCity = findSelectedCity(city_name!);
  return (
    <>
      <Header text={`${selectedCity?.name}, ${selectedCity?.country}`} />
      <CurrentWeather cityName={city_name!} />
      <ul>{/* what to wear */}</ul>
      <Link to={`/forecast/${city_name}`} className="w-full">
        {" "}
        <div className="flex  justify-between dashed-line-box hover:bg-neutral-800 hover:text-white ">
          <p>Check the Weather Forecast</p>
          <p>☛</p>
        </div>
      </Link>
    </>
  );
};

export default WeatherOutift;
