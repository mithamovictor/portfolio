const SocialIcons = (props) => {
  return (
    <a
      className="flex justify-center items-center text-chocolate dark:text-cream text-2xl hover:text-gray-600 active:text-gray-600 focus:text-gray-600  w-10 h-10 align rounded-full"
      href={props.url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <i className={props.iconClass}></i>
    </a>
  );
};

export default SocialIcons;
