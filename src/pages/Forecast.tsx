import { Link, useParams } from "react-router-dom";
import { findSelectedCity } from "../utils/functions";
import Header from "../components/Header";
import CurrentWeather from "../components/CurrentWeather";
import ForecastList from "../components/ForecastList";

const Forecast = () => {
  const { city_name } = useParams<{ city_name: string }>();
  const selectedCity = findSelectedCity(city_name!);
  return (
    <>
      {" "}
      <Header text={`${selectedCity?.name}, ${selectedCity?.country}`} />
      <CurrentWeather cityName={city_name!} />
      <ForecastList />
      <Link to={`/forecast/${city_name}`} className="w-full">
        {" "}
        <div className="flex  justify-between dashed-line-box hover:bg-neutral-800 hover:text-white ">
          <p>Go Back to What to Wear</p>
          <p>☛</p>
        </div>
      </Link>
    </>
  );
};

export default Forecast;
