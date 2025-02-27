import { FC } from "react";

interface HeaderProps {
  text: string;
}

const Header: FC<HeaderProps> = ({ text }) => {
  return (
    <header>
      <h1 className="font-KodeMono-SemiBold text-4xl mb-1 ">WearCeipt</h1>
      <h2 className="text-xl">{text}</h2>
    </header>
  );
};

export default Header;
