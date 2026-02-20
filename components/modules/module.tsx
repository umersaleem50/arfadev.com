import dynamic from "next/dynamic";

const Feature01 = dynamic(() => import("../shadcn-space/blocks/feature-01"));
const CTABento = dynamic(() => import("../ui/bento-grid-1"));
const Gallery = dynamic(() => import("./gallery-module"));
const LandingHero = dynamic(() => import("./landing-hero"));
const ProcessCards = dynamic(() => import("./process.module"));
const Team = dynamic(() => import("./team"));
const Testimonial01 = dynamic(() => import("./testimonial.module"));

const PortfolioModule = dynamic(() => import("./portfolio-module"));
const WhyChooseUs = dynamic(() => import("./why-choose-us"));
const FooterModule = dynamic(() => import("./footer.module"));

const Hero = dynamic(() => import("./hero"));
const BlogsModule = dynamic(() => import("./blogs-module"));
const ContentBody = dynamic(() => import("./content-body"));

const MegaMenu = dynamic(() => import("./mega-menu").then((el) => el.MegaMenu));

function Module({ module }: any) {
  const type = module._type;

  switch (type) {
    case "menu":
      return <MegaMenu module={module} />;
    // case "hero":
    //   return <Hero module={module} />;
    case "landing-hero":
      return <LandingHero />;
    case "whyChooseUs":
      return <WhyChooseUs module={module} />;
    // case "portfolio":
    //   return <PortfolioModule module={module} />;
    // case "services":
    //   return <Feature01 module={module} />;

    // case "guarantee":
    //   return <ProcessCards />;

    // case "team":
    //   return <Team module={module} />;

    // case "grid":
    //   return <Gallery module={module} />;

    // // case "guarantee":
    // // return <GridModule module={module} />;
    // case "footer":
    //   return <FooterModule module={module} />;
    // case "testimonial":
    //   return <Testimonial01 module={module} />;
    // case "blogs":
    //   return <BlogsModule module={module} />;
    // case "body":
    //   return <ContentBody module={module} />;

    // case "cta":
    //   return <CTABento />;

    default:
      return null;
  }
}

export default Module;
