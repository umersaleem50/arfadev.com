import dynamic from "next/dynamic";

const OurServices = dynamic(() => import("./our-services"));
const CTABento = dynamic(() => import("../ui/bento-grid-1"));
const Gallery = dynamic(() => import("./gallery-module"));

const OurProcess = dynamic(() => import("./process"));
const TeamSection = dynamic(() => import("./team"));
const Testimonials = dynamic(() => import("./testimonials"));

const Portfolio = dynamic(() => import("./portfolio/portfolio"));
const WhyChooseUs = dynamic(() => import("./why-choose-us"));
const FooterModule = dynamic(() => import("./footer/index"));

const Hero = dynamic(() => import("./hero"));
const FeaturedBlogs = dynamic(() => import("./blogs"));
const ContentBody = dynamic(() => import("./content-body"));

const Navbar = dynamic(() => import("./navbar"));

function Module({ module }: any) {
  const type = module._type;

  switch (type) {
    case "menu":
      return <Navbar module={module} />;
    // case "hero":
    //   return <Hero module={module} />;
    case "landing-hero":
      return <Hero />;
    case "whyChooseUs":
      return <WhyChooseUs module={module} />;
    case "portfolio":
      return <Portfolio module={module} />;
    case "services":
      return <OurServices module={module} />;

    case "guarantee":
      return <OurProcess />;

    case "team":
      return <TeamSection module={module} />;

    // case "grid":
    //   return <Gallery module={module} />;

    // // case "guarantee":
    // // return <GridModule module={module} />;
    case "footer":
      return <FooterModule module={module} />;
    case "testimonial":
      return <Testimonials module={module} />;
    case "blogs":
      return <FeaturedBlogs module={module} />;
    // case "body":
    //   return <ContentBody module={module} />;

    // case "cta":
    //   return <CTABento />;

    default:
      return null;
  }
}

export default Module;
