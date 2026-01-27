import dynamic from "next/dynamic";
import GuaranteeModule from "./guarantee-module";

import { LandingHero } from "./landing-hero";
import Team from "./team";
import Testimonial01 from "./testimonial.module";

const PortfolioModule = dynamic(() => import("./portfolio-module"));
const WhyChooseUs = dynamic(() => import("./why-choose-us"));
const Services = dynamic(() => import("./services.module"));
const FooterModule = dynamic(() => import("./footer.module"));

const Hero = dynamic(() => import("./hero"));
const BlogsModule = dynamic(() => import("./blogs-module"));
const ContentBody = dynamic(() => import("./content-body"));
const GridModule = dynamic(() => import("./grid-module"));

const MegaMenu = dynamic(() => import("./mega-menu").then((el) => el.MegaMenu));

function Module({ module }: any) {
  const type = module._type;

  switch (type) {
    case "menu":
      return <MegaMenu module={module} />;
    case "hero":
      return <Hero module={module} />;
    case "landing-hero":
      return <LandingHero module={module} />;
    case "whyChooseUs":
      return <WhyChooseUs module={module} />;
    case "portfolio":
      return <PortfolioModule module={module} />;
    case "services":
      return <Services module={module} />;

    case "guarantee":
      return <GuaranteeModule module={module} />;

    case "team":
      return <Team module={module} />;

    case "grid":
      return <GridModule module={module} />;
    case "footer":
      return <FooterModule module={module} />;
    case "testimonial":
      return <Testimonial01 module={module} />;
    case "blogs":
      return <BlogsModule module={module} />;
    case "body":
      return <ContentBody module={module} />;

    default:
      return null;
  }
}

export default Module;
