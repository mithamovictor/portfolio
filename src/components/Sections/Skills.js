import Image from "../Image";
import SectionTitle from "../SectionTitle";
import ReactIcon from "../../assets/img/icons/react.png";
import AngularIcon from "../../assets/img/icons/angular.png";
import VueIcon from "../../assets/img/icons/vue.png";
import WordpressIcon from "../../assets/img/icons/wordpress.png";
import MySqlIcon from "../../assets/img/icons/mysql.png";
import MongoDBIcon from "../../assets/img/icons/mongodb.png";
import TailwindCSSIcon from "../../assets/img/icons/tailwind.png";
import BootstrapIcon from "../../assets/img/icons/bootstrap.png";
import ZurbFoundationIcon from "../../assets/img/icons/foundation.png";
import PHPIcon from "../../assets/img/icons/php.png";
import ScssIcon from "../../assets/img/icons/sass.png";
import JSIcon from "../../assets/img/icons/js.png";
import CSSIcon from "../../assets/img/icons/css.png";
import HTMLIcon from "../../assets/img/icons/html.png";

const Skills = () => {
  const icons = [
    { url: ReactIcon, alt: "React J S icon", title: "React" },
    { url: AngularIcon, alt: "Angular J S icon", title: "Angular" },
    { url: VueIcon, alt: "Vue J S icon", title: "Vue" },
    { url: WordpressIcon, alt: "Wordpress icon", title: "WordPress" },
    { url: MySqlIcon, alt: "MySQL icon", title: "MySQL" },
    { url: MongoDBIcon, alt: "MongoDB icon", title: "MongoDB" },
    { url: TailwindCSSIcon, alt: "Tailwind CSS icon", title: "TailwindCSS" },
    { url: BootstrapIcon, alt: "Bootstrap icon", title: "Bootstrap" },
    { url: ZurbFoundationIcon, alt: "Zurb Foundation icon", title: "Zurb Foundation" },
    { url: PHPIcon, alt: "PHP icon", title: "PHP" },
    { url: ScssIcon, alt: "SASS icon", title: "SASS/SCSS" },
    { url: JSIcon, alt: "JavaScript Icon", title: "JavaScript" },
    { url: CSSIcon, alt: "CSS icon", title: "CSS" },
    { url: HTMLIcon, alt: "HTML icon", title: "HTML" },
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
                src={icon.url}
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
