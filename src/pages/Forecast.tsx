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
      <ForecastList cityName={city_name!} />
      <button type="button" onClick={() => navigate(-1)} className="w-full">
        {" "}
        <div className="flex uppercase justify-between items-center dashed-line-box transition duration-100 hover:bg-neutral-800 hover:text-white ">
          <p>☚</p> <p>Back to What to Wear</p>
        </div>
      </button>
    </>
  );
};

export default Forecast;
