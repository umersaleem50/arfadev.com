import NewsLetterForm from "@/components/newsletter.form";
import Image from "next/image";

import Banner from "@/components/banner";
import FooterLinks from "./footer-links";
import FooterSocials from "./footer-social";
import { FooterProps, FooterRoutes } from "./types";

function FooterModule({ module }: { module: FooterProps }) {
  const metaData = module?.metaData || {
    title: "Untitle",
    subtitle: "Arfa Developers.",
    logo: null,
    newsletter: false,
  };

  // const { logo = null } = module;
  const footerRoutes = module?.footerRoutes || [];

  const socialLinks = module?.socialLinks || [];

  return (
    <footer className="lg:pt-24 md:pt-16 sm:pt-14 pt-12 w-full bg-muted relative">
      <div className="max-w-[85rem] xl:mx-auto lg:mx-8 md:mx-6 mx-4 gap-y-8 md:gap-y-0 grid md:grid-cols-6 grid-cols-1 border-b border-border lg:pb-12 md:pb-8 sm:pb-6 pb-4">
        <div className="lg:col-span-2 md:col-span-3 col-span-1 col-start-1 space-y-3">
          <Image
            src={"/assets/logo.png"}
            width={140}
            height={60}
            alt={"Arfa Developers Logo"}
            className="mb-4"
          />

          <h3 className="lg:text-3xl text-2xl text-foreground font-serif">
            {metaData.title}
          </h3>
          <p className="text-sm text-accent dark:text-primary font-sans">
            Arfa Developers, {new Date().getFullYear()}
          </p>
        </div>
        {metaData?.newsletter && (
          <NewsLetterForm className="lg:col-start-5 col-start-1 lg:col-span-2 md:col-span-3 m-span-1" />
        )}
      </div>
      <div className="mt-6 sm:mt-0 max-w-[85rem] xl:mx-auto lg:mx-8 md:mx-6 mx-4 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 border-b border-border gap-x-6 lg:py-12 md:pb-8 sm:pb-6 pb-4 gap-y-4">
        {footerRoutes?.map(({ title, routes }: FooterRoutes) => {
          return <FooterLinks title={title} routes={routes} key={title} />;
        })}
      </div>
      <div className="max-w-[85rem] xl:mx-auto lg:mx-8 md:mx-6 mx-4 flex justify-between lg:py-12 md:py-8 py-4 ">
        {/* {module?.langSupport && (
          // <LanguageSwitcher langSupport={module.langSupport} />
        )} */}
        {/* <LanguageSwitcher light={false} /> */}
        {socialLinks && <FooterSocials socialLinks={socialLinks} />}
      </div>
      <Banner
        title={`© All rights reserved. Arfa Developers ${new Date().getFullYear()}.`}
      />
    </footer>
  );
}

export default FooterModule;
