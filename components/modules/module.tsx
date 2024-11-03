import dynamic from "next/dynamic";
import Gallery from "./gallery-module";

const PortfolioModule = dynamic(() => import("./portfolio-module"));
const WhyChooseUs = dynamic(() => import("./why-choose-us"));
const Services = dynamic(() => import("./services.module"));
const FooterModule = dynamic(() => import("./footer.module"));
const Testimonials = dynamic(() => import("./testimonial"));
const Hero = dynamic(() => import("./hero"));
const BlogsModule = dynamic(() => import("./blogs-module"));
const ContentBody = dynamic(() => import("./content-body"));
const GridModule = dynamic(() => import("./grid-module"));

const MegaMenu = dynamic(() => import("./mega-menu").then((el) => el.MegaMenu));

function Module({ module }: any) {
  const type = module._type;
  switch (type) {
    case "grid":
      return <GridModule module={module} />;
    case "menu":
      return <MegaMenu module={module} />;
    case "hero":
      return <Hero module={module} />;
    case "services":
      return <Services module={module} />;
    case "footer":
      return <FooterModule module={module} />;
    case "testimonial":
      return <Testimonials module={module} />;
    case "blogs":
      return <BlogsModule module={module} />;
    case "body":
      return <ContentBody module={module} />;
    case "portfolio":
      return <PortfolioModule module={module} />;
    case "whyChooseUs":
      return <WhyChooseUs module={module} />;
    case "gallery":
      return <Gallery module={module} />;
    // return <LawFirmCaseStudies module={module} />;
    default:
      return null;
  }
}

export default Module;
