import { useNavigate, useParams } from "react-router-dom";
import { findSelectedCity } from "../utils/functions";
import Header from "../components/Header";
import CurrentWeather from "../components/CurrentWeather";
import ForecastList from "../components/ForecastList";

const Forecast = () => {
  const { city_name } = useParams<{ city_name: string }>();
  const selectedCity = findSelectedCity(city_name!);
  const navigate = useNavigate();
  return (
    <>
      {" "}
      <Header text={`${selectedCity?.name}, ${selectedCity?.country}`} />
      <CurrentWeather cityName={city_name!} />
      <ForecastList />
      <button type="button" onClick={() => navigate(-1)} className="w-full">
        {" "}
        <div className="flex  justify-between dashed-line-box hover:bg-neutral-800 hover:text-white ">
          <p>Go Back to What to Wear</p>
          <p>☛</p>
        </div>
      </button>
    </>
  );
};

export default Forecast;
