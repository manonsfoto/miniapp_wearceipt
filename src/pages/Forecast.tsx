import { useParams } from "react-router-dom";

const Forecast = () => {
  const { city_name } = useParams<{ city_name: string }>();
  return <>Forecast</>;
};

export default Forecast;
