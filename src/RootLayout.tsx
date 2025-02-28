import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";

const RootLayout = () => {
  return (
    <section className="mx-auto w-[375px] relative">
      <article className="mx-auto my-16 w-xs px-5 py-10 uppercase flex flex-col items-center font-KodeMono-Regular bg-[url(/img/paper_bg.jpg)] bg-contain text-primary">
        <Outlet />
        <Footer />
      </article>
      <img
        src="/img/bunny.png"
        alt="bunny"
        className="absolute z-10 -top-5 right-2 w-14 rotate-12  "
      />
      <img
        src="/img/planet.png"
        alt="planet"
        className="absolute z-10 w-30 bottom-2 -left-7 -rotate-15"
      />
    </section>
  );
};

export default RootLayout;
