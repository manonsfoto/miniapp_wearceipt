import { format } from "date-fns";
import { FC, useContext } from "react";
import { IsCelsiusContext } from "../context/Context";
import useFetch from "../hooks/useFetch";
import { IDataWeather } from "../interfaces/IDataWeather";
import { getCurrentURL } from "../utils/api/weatherApi";

interface CurrentWeatherProps {
  cityName: string;
}
const CurrentWeather: FC<CurrentWeatherProps> = ({ cityName }) => {
  const { isCelsius, setIsCelsius } = useContext(IsCelsiusContext);

  const { data: dataWeather } = useFetch<IDataWeather>(
    getCurrentURL(cityName, isCelsius)
  );
  if (!dataWeather) return;

  return (
    <div className="dashed-line-box">
      <p>
        | ** {format(Date.now(), "EEEE")}, {format(Date.now(), "PP")}
      </p>{" "}
      <p className="font-bold">{dataWeather.weather[0].description}</p>
      <div className="flex  justify-between">
        {" "}
        <p>
          Current Temp.: {Math.round(dataWeather.main.temp)}{" "}
          {isCelsius ? "°C" : "°F"}
        </p>
        <button type="button" onClick={() => setIsCelsius(!isCelsius)}>
          {" "}
          <p className="text-neutral-500">{isCelsius ? "➪°F" : "➪°C"}</p>
        </button>
      </div>
      <p>
        Feels like:{" "}
        <span className="font-bold">
          {Math.round(dataWeather.main.feels_like)}
        </span>{" "}
        {isCelsius ? "°C" : "°F"}
      </p>
    </div>
  );
};

export default CurrentWeather;
