import PortfolioItem from "../PortfolioItem";
import SectionTitle from "../SectionTitle";
import MyPortfolioSite from "../../assets/img/sites/portfolio.png";
import DGMC from "../../assets/img/sites/dgmc.png";
import StbGames from "../../assets/img/sites/stb_games.png";
import StbPremium from "../../assets/img/sites/stb_premium.png";
import AcademicProwess from "../../assets/img/sites/ap.png";
import WritersDashboard from "../../assets/img/sites/writers_dashboard.png";
import BestAcademicTutors from "../../assets/img/sites/bat.png";
import JSCalc from "../../assets/img/sites/calculator.png";
import Clock from "../../assets/img/sites/clock.png";
import KenyaQuiltGuild from "../../assets/img/sites/kqg.png";
import SriSathyaSchoolKisaju from "../../assets/img/sites/ss_school.png";
import SathyaSaiCentreKenya from "../../assets/img/sites/ssc.png";
import TodoListReact from "../../assets/img/sites/todo_list_react.png";

const portfolioItems = [
  {
    image: {
      src: MyPortfolioSite,
      alt: "My portfolio website",
      width: "100%",
      height: "auto",
      lazyLoading: true,
    },
    content: {
      title: "My Portfolio",
      description: "My Portfolio Webite",
      url: "//mithamovictor.github.io",
    },
    imageFirst: true,
  },
  {
    image: {
      src: DGMC,
      alt: "Clinic Management System",
      width: "100%",
      height: "auto",
      lazyLoading: true,
    },
    content: {
      title: "DGMC Clinic Management System",
      description:
        "A clinic management system portal. This is a system to manage patient appointments.",
      url: "",
    },
    imageFirst: false,
  },
  {
    image: {
      src: StbGames,
      alt: "Spot The Ball Limited games website",
      width: "100%",
      height: "auto",
      lazyLoading: true,
    },
    content: {
      title: "Spot The Ball - Games Website",
      description: "Games website for Spot The Ball Limited",
      url: "//games.spottheball.co.ke",
    },
    imageFirst: true,
  },
  {
    image: {
      src: StbPremium,
      alt: "Spot The Ball Premium gaming website",
      width: "100%",
      height: "auto",
      lazyLoading: true,
    },
    content: {
      title: "Spot The Ball - Premium Website",
      description: "This is the premium gaming website for Spot The Ball",
      url: "//premium.spottheball.co.ke",
    },
    imageFirst: false,
  },
  {
    image: {
      src: AcademicProwess,
      alt: "Academic Prowess website",
      width: "100%",
      height: "auto",
      lazyLoading: true,
    },
    content: {
      title: "Academic Prowess",
      description: "This is the website for Academic Prowess",
      url: "//academicprowess.com",
    },
    imageFirst: true,
  },
  {
    image: {
      src: WritersDashboard,
      alt: "Academic Prowess Client Management Dashboard",
      width: "100%",
      height: "auto",
      lazyLoading: true,
    },
    content: {
      title: "Academic Prowess - Client Dashboard",
      description:
        "This is a client portal with a dashboard for academic prowess. Here a client can place an order and admin can process orders.",
      url: "//academicprowess.com",
    },
    imageFirst: false,
  },
  {
    image: {
      src: BestAcademicTutors,
      alt: "Best academic tutors website",
      width: "100%",
      height: "auto",
      lazyLoading: true,
    },
    content: {
      title: "Best Academic Tutors",
      description: "Website for Best Academic Tutors.",
      url: "//bestacademictutors.com",
    },
    imageFirst: true,
  },
  {
    image: {
      src: JSCalc,
      alt: "javascript calculator",
      width: "100%",
      height: "auto",
      lazyLoading: true,
    },
    content: {
      title: "JavaScript Calculator",
      description: "A calculator developed with JavaScript, HTML and CSS.",
      url: "https://codepen.io/karungarum/pen/mjWzBX",
    },
    imageFirst: false,
  },
  {
    image: {
      src: Clock,
      alt: "analogue clock",
      width: "100%",
      height: "auto",
      lazyLoading: true,
    },
    content: {
      title: "Analogue Clock",
      description:
        "An analogue clock developed in Javascript, HTML and CSS with an aim of mimicry of the Swiss Movement of watches",
      url: "//codepen.io/karungarum/pen/jQPXGY",
    },
    imageFirst: true,
  },
  {
    image: {
      src: KenyaQuiltGuild,
      alt: "Kenya quilt guild website",
      width: "100%",
      height: "auto",
      lazyLoading: true,
    },
    content: {
      title: "Kenya Quilt Guild",
      description: "Website for Kenya Quilt Guild",
      url: "//kenyaquiltguild.org",
    },
    imageFirst: false,
  },
  {
    image: {
      src: SriSathyaSchoolKisaju,
      alt: "Sri sathya sai school kisaju website",
      width: "100%",
      height: "auto",
      lazyLoading: true,
    },
    content: {
      title: "Sathya Sai School - Kisaju",
      description: "Website for Sri Sathya Sai School based in Kisaju",
      url: "//sathyasaischoolkisaju.org",
    },
    imageFirst: true,
  },
  {
    image: {
      src: SathyaSaiCentreKenya,
      alt: "Sri Sathya sai center kenya website",
      width: "100%",
      height: "auto",
      lazyLoading: true,
    },
    content: {
      title: "Sri Sathya Sai Center - Kenya",
      description: "Website for Sri Sathya Sai Centre Kenya",
      url: "//sathyasaicentrekenya.org",
    },
    imageFirst: false,
  },
  {
    image: {
      src: TodoListReact,
      alt: "Todo List - React App",
      width: "100%",
      height: "auto",
      lazyLoading: true,
    },
    content: {
      title: "Todo List - React App",
      description: "A todo list app developed with React with miltiple features and deployed on Vercel",
      url: "//csb-swntkb.vercel.app",
    },
    imageFirst: true,
  },
];

const Portfolio = () => {
  return (
    <section id="skillset" className="flex flex-col my-8 w-full">
      <SectionTitle title="Portfolio" />
      {portfolioItems.map((item, index) => (
        <PortfolioItem
          key={index}
          image={item.image}
          imageFirst={item.imageFirst}
          content={item.content}
        />
      ))}
    </section>
  );
};

export default Portfolio;
