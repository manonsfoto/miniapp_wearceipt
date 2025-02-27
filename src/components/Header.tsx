import { FC } from "react";
import { Link } from "react-router-dom";

interface HeaderProps {
  text: string;
}

const Header: FC<HeaderProps> = ({ text }) => {
  return (
    <header className="flex flex-col items-center">
      <Link to="/">
        {" "}
        <h1 className="font-KodeMono-SemiBold text-4xl mb-1 ">WearCeipt</h1>
      </Link>
      <h2 className="text-xl">{text}</h2>
    </header>
  );
};

export default Header;
