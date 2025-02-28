import { format } from "date-fns";
import { FC, useContext, useEffect } from "react";
import { DataForOutfitContext, IsCelsiusContext } from "../context/Context";
import useFetch from "../hooks/useFetch";
import { IDataWeather } from "../interfaces/IDataWeather";
import { getCurrentURL } from "../utils/api/weatherApi";

interface CurrentWeatherProps {
  cityName: string;
}
const CurrentWeather: FC<CurrentWeatherProps> = ({ cityName }) => {
  const { isCelsius, setIsCelsius } = useContext(IsCelsiusContext);
  const { setDataForOutfit } = useContext(DataForOutfitContext);
  const { data, loading } = useFetch<IDataWeather>(
    getCurrentURL(cityName, isCelsius)
  );

  useEffect(() => {
    if (data) {
      setDataForOutfit({
        weatherDescription: data.weather[0].description,
        feelsLikeTemp: Math.round(data.main.feels_like),
      });
    }
  }, [data]);

  return (
    <div className="dashed-line-box">
      <p>
        | ** {format(Date.now(), "EEEE")}, {format(Date.now(), "PP")}
      </p>{" "}
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <p className="font-bold">{data?.weather[0].description}</p>
          <div className="flex  justify-between">
            {" "}
            <p>
              Current Temp.: {Math.round(Number(data?.main.temp))}{" "}
              {isCelsius ? "°C" : "°F"}
            </p>
            <button type="button" onClick={() => setIsCelsius(!isCelsius)}>
              {" "}
              <p className="text-neutral-400 hover:text-neutral-700 transition duration-100">
                {isCelsius ? "➪°F" : "➪°C"}
              </p>
            </button>
          </div>
          <p>
            Feels like:{" "}
            <span className="font-bold">
              {Math.round(Number(data?.main.feels_like))}
            </span>{" "}
            {isCelsius ? "°C" : "°F"}
          </p>
        </>
      )}
    </div>
  );
};

export default CurrentWeather;
