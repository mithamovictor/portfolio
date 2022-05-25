import PortfolioItem from "../PortfolioItem";
import SectionTitle from "../SectionTitle";
import { portfolioItems } from "../data/PortfolioItems";

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
