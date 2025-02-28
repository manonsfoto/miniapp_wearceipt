import { FC } from "react";
import { Link } from "react-router-dom";

interface HeaderProps {
  text: string;
}

const Header: FC<HeaderProps> = ({ text }) => {
  return (
    <header className="flex flex-col items-center relative w-full">
      <Link to="/">
        {" "}
        <h1 className="font-KodeMono-SemiBold text-4xl mb-2 ">WearCeipt</h1>
      </Link>
      <h2 className="text-xl">{text}</h2>
      <img
        src="/img/stars.png"
        alt="stars"
        className="absolute z-10 w-16 -rotate-12 top-6 -left-10 "
      />
    </header>
  );
};

export default Header;
