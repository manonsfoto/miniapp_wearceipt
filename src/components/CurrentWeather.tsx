import { format } from "date-fns";
import { FC, useContext } from "react";
import { IsCelsiusContext } from "../context/Context";

interface CurrentWeatherProps {
  cityName: string;
}
const CurrentWeather: FC<CurrentWeatherProps> = ({ cityName }) => {
  const { isCelsius, setIsCelsius } = useContext(IsCelsiusContext);
  return (
    <div className="dashed-line-box">
      <p>
        | ** {format(Date.now(), "EEEE")}, {format(Date.now(), "PP")}
      </p>{" "}
      <p>broken clouds</p>
      <div className="flex  justify-between">
        {" "}
        <p>Current Temp.: 5 {isCelsius ? "°C" : "°F"}</p>
        <button type="button" onClick={() => setIsCelsius(!isCelsius)}>
          {" "}
          <p className="text-neutral-500">{isCelsius ? "°F" : "°C"}</p>
        </button>
      </div>
      <p>Feels like: 5 {isCelsius ? "°C" : "°F"}</p>
    </div>
  );
};

export default CurrentWeather;
