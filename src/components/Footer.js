const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="flex justify-center items-center p-4 w-full">
      <p className="text-center text-sm text-chocolate dark:text-gray-600">
        &copy; {year}. Created with{" "}
        <span className="text-base text-red-600">&hearts;</span> by Karungaru
        Mithamo
      </p>
    </div>
  );
};

export default Footer;
