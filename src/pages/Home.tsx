import Header from "../components/Header";
import { cities, TCity } from "../utils/data";

const Home = () => {
  return (
    <>
      {" "}
      <Header text={"Choose Location"} />
      <div className="dashed-line-box">
        <p>| ** It's Thursday</p>
        <p>| ** FEB 27, 2025</p>
      </div>
      <ul className="flex flex-col justify-start w-full">
        {cities.map(({ name }: TCity, index: number) => (
          <li key={index} className="hover:bg-neutral-800 hover:text-white">
            <button type="button">
              {" "}
              <p className="uppercase">
                {" "}
                {(index + 1).toString().padStart(2, "0")} {name}
              </p>
            </button>{" "}
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
