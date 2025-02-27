import { useParams } from "react-router-dom";
import { findSelectedCity } from "../utils/functions";
import Header from "../components/Header";
import { format } from "date-fns";

const Forecast = () => {
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
      <ul>{/* 5 day-forecast */}</ul>
    </>
  );
};

export default Forecast;
