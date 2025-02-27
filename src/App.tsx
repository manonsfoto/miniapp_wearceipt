import LogoIcon from "./assets/SVG/LogoIcon";
import FooterLogo from "./components/FooterLogo";

type TCity = {
  name: string;
  country: string;
  latitude: string;
  longitude: string;
};

const cities: TCity[] = [
  {
    name: "Düsseldorf",
    country: "Germany",
    latitude: "51.233334",
    longitude: "6.783333",
  },
  {
    name: "Busan",
    country: "South Korea",
    latitude: "35.100000",
    longitude: "129.033333",
  },
  {
    name: "Fukuoka",
    country: "Japan",
    latitude: "33.600000",
    longitude: "130.400000",
  },
  {
    name: "Sydney",
    country: "Australia",
    latitude: "-33.866667",
    longitude: "151.200000",
  },
  {
    name: "Vancouver",
    country: "Canada",
    latitude: "49.316666",
    longitude: "-123.066666",
  },
];

function App() {
  return (
    <section className="mx-auto w-[375px]  h-screen ">
      <article className="mx-auto mt-10  w-xs px-2  py-4   uppercase flex flex-col items-center font-KodeMono-Regular bg-[url(/img/paper_bg.jpg)] bg-contain text-primary ">
        {" "}
        <h1 className="font-KodeMono-SemiBold text-4xl mb-1">WearCeipt</h1>
        <h2 className="text-xl">Choose Location</h2>
        <div className="border-topAndBottom w-full py-3 my-4 ">
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
        <div className="flex w-full justify-between border-topAndBottom my-4 py-1">
          <p>Item Count:</p>
          <p>{cities.length.toString().padStart(2, "0")}</p>
        </div>
        <div className="flex flex-col w-full items-start">
          <p>CARD #: **** **** **** 8353</p>
          <p>Auth Code: 123456</p>
          <p>Cardholder: @Dustfrei</p>
        </div>
        <div className="mt-4 mb-8  text-center">
          <p>THANK YOU FOR VISITING!</p>
          <p>WE HOPE TO SEE YOU AGAIN SOON!!!</p>
        </div>
        <FooterLogo />
      </article>
    </section>
  );
}

export default App;
