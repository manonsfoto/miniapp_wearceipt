import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";

const RootLayout = () => {
  return (
    <section className="mx-auto w-[375px] h-screen">
      <article className="mx-auto mt-16 w-xs px-5 py-10 uppercase flex flex-col items-center font-KodeMono-Regular bg-[url(/img/paper_bg.jpg)] bg-contain text-primary">
        <Outlet />
        <Footer />
      </article>
    </section>
  );
};

export default RootLayout;
