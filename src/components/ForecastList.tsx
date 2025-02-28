import { FC, useContext } from "react";
import { IsCelsiusContext } from "../context/Context";
import useFetch from "../hooks/useFetch";
import { IDataForecast } from "../interfaces/IDataForecast";
import { getForecastURL } from "../utils/api/weatherApi";
import { format } from "date-fns";

interface ForecastListProps {
  cityName: string;
}

const ForecastList: FC<ForecastListProps> = ({ cityName }) => {
  const { isCelsius } = useContext(IsCelsiusContext);

  const { data, loading } = useFetch<IDataForecast>(
    getForecastURL(cityName, isCelsius)
  );

  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul className="overflow-y-scroll h-56 w-full">
          {data?.list.map((item) => (
            <li key={item.dt} className="flex flex-col ">
              <div className="flex justify-between ">
                {" "}
                <p>
                  {format(new Date(item.dt_txt), "EEE") ===
                  format(Date.now(), "EEE")
                    ? "Today"
                    : format(new Date(item.dt_txt), "EEE")}
                </p>{" "}
                <p>{format(new Date(item.dt_txt), "h:mm a")}</p>
              </div>
              <div className="flex justify-between mb-2.5">
                {" "}
                <p>
                  {Math.round(item.main.temp)} {isCelsius ? "°C" : "°F"}
                </p>{" "}
                <p className="font-KodeMono-Medium">
                  {item.weather[0].description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default ForecastList;
