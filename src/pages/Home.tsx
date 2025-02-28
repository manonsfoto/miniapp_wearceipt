import { format } from "date-fns";
import Header from "../components/Header";
import { cities, TCity } from "../utils/data";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      {" "}
      <Header text={"Choose Location"} />
      <div className="dashed-line-box">
        <p>| ** It's {format(Date.now(), "EEEE")}</p>
        <p>| ** {format(Date.now(), "PP")}</p>
      </div>
      <ul className="flex flex-col justify-start w-full">
        {cities.map(({ name, country }: TCity, index: number) => (
          <li
            key={name + country}
            className="hover:bg-neutral-800 hover:text-white transition duration-100"
          >
            <Link to={`/weather_outfit/${name.toLowerCase()}`}>
              {" "}
              <p className="uppercase">
                {" "}
                {(index + 1).toString().padStart(2, "0")} {name}
              </p>
            </Link>{" "}
          </li>
        ))}
      </ul>
      <div className="flex  justify-between dashed-line-box  ">
        <p>Item Count:</p>
        <p>{cities.length.toString().padStart(2, "0")}</p>
      </div>
    </>
  );
};

export default Home;
