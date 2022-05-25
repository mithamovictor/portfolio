import Image from "./Image";

const PortfolioItem = (props) => {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center w-full mb-16 last:mb-0 border-0 border-b border-gray-100 dark:border-gray-700 last:border-b-0 pt-8 pb-16 last:pb-0">
      <div
        className={
          props.imageFirst
            ? "flex lg:max-w-1/2 w-full  mb-6 mr-0 lg:mb-0 lg:mr-12 order-1"
            : "flex lg:max-w-1/2 w-full  mb-6 ml-0 lg:mb-0 lg:ml-12 order-1 lg:order-2"
        }
      >
        <Image
          className="w-full rounded-md shadow-lg"
          src={props.image.src}
          alt={props.image.alt}
          width={props.image.width}
          height={props.image.height}
          loading={props.image.lazyLoading}
        />
      </div>
      <div
        className={
          props.imageFirst
            ? "flex flex-col justify-center items-center text-center lg:max-w-1/2 w-full order-1 lg:order-2"
            : "flex flex-col justify-center items-center text-center lg:max-w-1/2 w-full order-1"
        }
      >
        <h3 className="text-2xl text-chocolate dark:text-cream font-bold mb-4">
          {props.content.title}
        </h3>
        <p className="text-sm text-chocolate dark:text-cream">
          {props.content.description}
        </p>
        <p className="flex justify-center items-center text-center w-full mt-4 p-4">
          {props.content.url === "" ? (
            ""
          ) : (
            <a
              className="text-sm md:text-base capitalize text-chocolate bg-cream w-full p-4 rounded-full shadow-md"
              href={props.content.url}
            >
              Visit Site
            </a>
          )}
        </p>
      </div>
    </div>
  );
};

export default PortfolioItem;
