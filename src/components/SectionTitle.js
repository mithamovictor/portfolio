const SectionTitle = (props) => {
  return (
    <div className="flex justify-center items-center w-full relative my-16">
      <h2 className="absolute text-center text-xl uppercase font-bold bg-cream dark:bg-slate-900 px-4 py-2 text-chocolate dark:text-cream rounded-full lg:min-w-screen-sm">
        &#9733; {props.title} &#9733;
      </h2>
      <hr className="w-full text-gray-300 dark:text-slate-700" />
    </div>
  );
};

export default SectionTitle;
