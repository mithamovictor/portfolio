import Image from "../Image";
import SectionTitle from "../SectionTitle";

const Skills = () => {
  const icons = [
    { url: "react.png", alt: "React J S icon", title: "React" },
    { url: "angular.png", alt: "Angular J S icon", title: "Angular" },
    { url: "vue.png", alt: "Vue J S icon", title: "Vue" },
    { url: "wordpress.png", alt: "Wordpress icon", title: "WordPress" },
    { url: "mysql.png", alt: "MySQL icon", title: "MySQL" },
    { url: "mongodb.png", alt: "MongoDB icon", title: "MongoDB" },
    { url: "tailwind.png", alt: "Tailwind CSS icon", title: "TailwindCSS" },
    { url: "bootstrap.png", alt: "Bootstrap icon", title: "Bootstrap" },
    {
      url: "foundation.png",
      alt: "Zurb Foundation icon",
      title: "Zurb Foundation",
    },
    { url: "php.png", alt: "PHP icon", title: "PHP" },
    { url: "sass.png", alt: "SASS icon", title: "SASS/SCSS" },
    { url: "js.png", alt: "JavaScript Icon", title: "JavaScript" },
    { url: "css.png", alt: "CSS icon", title: "CSS" },
    { url: "html.png", alt: "HTML icon", title: "HTML" },
  ];
  return (
    <section id="skillset" className="my-8">
      <SectionTitle title="Skills" />
      <div className="flex justify-center items-center flex-wrap pt-8">
        {icons.map((icon, index) => (
          <div
            key={index}
            className="flex flex-col w-full max-w-max justify-center items-center m-2"
          >
            <div className="border-4 border-chocolate bg-white rounded-full mb-2 p-2">
              <Image
                src={`/img/icons/${icon.url}`}
                alt={icon.alt}
                width="100%"
                height="auto"
                loading={true}
                className="max-w-icon"
              />
            </div>
            <div className="flex w-32 text-center">
              <p className="text-xs text-chocolate italic bg-cream py-0.5 px-2 rounded-full w-full mb-8">
                {icon.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
