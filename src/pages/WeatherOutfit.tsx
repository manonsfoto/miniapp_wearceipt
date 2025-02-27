import { useParams } from "react-router-dom";

const WeatherOutift = () => {
  const { city_name } = useParams<{ city_name: string }>();
  return <>WeatherOutift</>;
};

export default WeatherOutift;
