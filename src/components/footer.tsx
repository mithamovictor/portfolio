import BuyMeACoffeeButton from "./buy-me-a-coffee-button";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="flex flex-col justify-center items-center p-4 w-full">
      <BuyMeACoffeeButton />
      <p className="text-center text-sm text-chocolate dark:text-gray-600">
        &copy; {year}. Created with{" "}
        <span className="text-base hearts">&hearts;</span> by Victor Mithamo
      </p>
    </footer>
  );
};

export default Footer;
