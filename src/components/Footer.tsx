import FooterLogo from "./FooterLogo";

const Footer = () => {
  return (
    <>
      <div className="flex flex-col w-full items-start">
        <p>CARD #: **** **** **** 8353</p>
        <p>Auth Code: 123456</p>
        <p>Cardholder: @Dustfrei</p>
      </div>
      <p className="mt-8 mb-4  text-center">THANK YOU FOR VISITING!</p>
      <FooterLogo />
    </>
  );
};

export default Footer;
