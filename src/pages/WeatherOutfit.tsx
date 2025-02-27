import { useParams, Link } from "react-router-dom";
import Header from "../components/Header";

import { format } from "date-fns";
import { findSelectedCity } from "../utils/functions";

const WeatherOutift = () => {
  const { city_name } = useParams<{ city_name: string }>();
  const selectedCity = findSelectedCity(city_name!);
  return (
    <>
      {" "}
      <Header text={`${selectedCity?.name}, ${selectedCity?.country}`} />
      <div className="dashed-line-box">
        <p>
          | ** {format(Date.now(), "EEEE")}, {format(Date.now(), "PP")}
        </p>
        <p>Current Temp.: 5 °C</p>
        <p>Feels like: 5 °C</p>
        <p>broken clouds</p>
      </div>
      <ul>{/* what to wear */}</ul>
      <Link to={`/forecast/${city_name}`}>
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
