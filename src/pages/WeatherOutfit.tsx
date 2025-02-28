import { useParams, Link } from "react-router-dom";
import Header from "../components/Header";
import { findSelectedCity } from "../utils/functions";
import CurrentWeather from "../components/CurrentWeather";
import WhatToWear from "../components/WhatToWear";

const WeatherOutift = () => {
  const { city_name } = useParams<{ city_name: string }>();
  const selectedCity = findSelectedCity(city_name!);
  return (
    <>
      <Header text={`${selectedCity?.name}, ${selectedCity?.country}`} />
      <CurrentWeather cityName={city_name!} />
      <WhatToWear />
      <Link to={`/forecast/${city_name}`} className="w-full">
        {" "}
        <div className="flex  justify-between items-center dashed-line-box hover:bg-neutral-800 hover:text-white transition duration-100 ">
          <p>
            What's the Weather <br />
            for the Next 5 Days?
          </p>
          <p>☛</p>
        </div>
      </Link>
    </>
  );
};

export default WeatherOutift;
