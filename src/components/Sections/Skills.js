import Image from "../Image";
import SectionTitle from "../SectionTitle";

const Skills = () => {
  const icons = [
    { url: "html.png", alt: "HTML icon" },
    { url: "css.png", alt: "CSS icon" },
    { url: "sass.png", alt: "SASS icon" },
    { url: "bootstrap.png", alt: "Bootstrap icon" },
    { url: "tailwind.png", alt: "Tailwind CSS icon" },
    { url: "foundation.png", alt: "Zurb Foundation icon" },
    { url: "js.png", alt: "JavaScript Icon" },
    { url: "react.png", alt: "React J S icon" },
    { url: "angular.png", alt: "Angular J S icon" },
    { url: "vue.png", alt: "Vue J S icon" },
    { url: "php.png", alt: "PHP icon" },
    { url: "wordpress.png", alt: "Wordpress icon" },
    { url: "mysql.png", alt: "MySQL icon" },
    { url: "mongodb.png", alt: "Mongo D B icon" },
  ];
  return (
    <section id="skillset" className="my-8">
      <SectionTitle title="Skills" />
      <div className="flex justify-center items-center flex-wrap">
        {icons.map((icon, index) => (
          <div
            key={index}
            className="border-4 border-chocolate bg-white rounded-full m-4 p-2"
          >
            <Image
              src={`/img/icons/${icon.url}`}
              alt={icon.alt}
              width="100%"
              height="auto"
              loading={true}
              className="max-w-icon"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
