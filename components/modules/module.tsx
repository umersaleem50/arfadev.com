import dynamic from "next/dynamic";

const MegaMenu = dynamic(() => import("./mega-menu").then((el) => el.MegaMenu));
const Services = dynamic(() => import("./services.module"));
const FooterModule = dynamic(() => import("./footer.module"));
const Testimonials = dynamic(() => import("./testimonial"));
const Hero = dynamic(() => import("./hero"));
const BlogsModule = dynamic(() => import("./blogs-module"));
const ContentBody = dynamic(() => import("./content-body"));
const LawFirmCaseStudies = dynamic(
  () => import("./law-firm-case-studies-with-images")
);

const GridModule = dynamic(() => import("./grid-module"));

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
    case "featured-posts":
      return <BlogsModule module={module} />;
    case "body":
      return <ContentBody module={module} />;
    case "portfolio":
      return <LawFirmCaseStudies module={module} />;
    default:
      return null;
  }
}

export default Module;
