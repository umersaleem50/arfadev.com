import Section from "../../section";
import { PortfolioCard } from "./portfolio-card";
import { PortfolioProps } from "./types/portfolio.type";

function Portfolio({ module }: PortfolioProps) {
  const {
    metaData = {
      title: "Anyone can makes promise; We will give you proof",
      miniTitle: "1. Case Studies",
    },
    projects = [],
  } = module;

  return (
    <Section
      className="bg-muted text-muted-foreground dark:bg-muted dark:text-muted-foreground"
      sectionData={metaData}
    >
      {projects.map((project, index: number) => {
        return (
          <PortfolioCard
            cover={project.cover}
            description={project.description}
            page={project.page}
            results={project.results}
            title={project.title}
            key={index}
            index={index + 1}
            options={{ reverse: index % 2 === 0 ? false : true }}
          />
        );
      })}
    </Section>
  );
}

export default Portfolio;
