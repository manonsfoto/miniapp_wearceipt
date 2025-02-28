import { Link } from "react-router-dom";
import FooterLogo from "./FooterLogo";

const Footer = () => {
  return (
    <footer className="w-full relative">
      <div className="flex flex-col  items-start ">
        <p>CARD #: **** **** **** 9876</p>
        <p>Auth Code: 123456</p>
        <p>Cardholder: @Dustfrei</p>
      </div>
      <p className="mt-8 mb-4  text-center">THANK YOU FOR VISITING!</p>
      <Link to="/">
        {" "}
        <FooterLogo />
      </Link>
      <img
        src="/img/stars.png"
        alt="stars"
        className="absolute z-10 w-12 top-10 right-0 "
      />
    </footer>
  );
};

export default Footer;
