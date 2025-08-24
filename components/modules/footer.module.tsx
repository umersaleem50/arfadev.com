import Image from "next/image";
import React from "react";
import NewsLetterForm from "../newsletter.form";
import FooterLinks from "./footer/footer-links";
import LanguageSwitcher from "../language-switcher";
import FooterSocials from "./footer/footer-social";
import Banner from "../banner";
import { urlFor } from "@/sanity/lib/image";

function FooterModule({ module }: any) {
  const metaData = module?.metaData || {
    title: "Untitle",
    subtitle: "Arfa Developers.",
    logo: null,
    newsletter: false,
  };

  const { logo = null } = module;
  const footerRoutes = module?.footerRoutes || [];

  const socialLinks = module?.socialLinks || [];

  return (
    <footer className="lg:pt-24 md:pt-16 sm:pt-14 pt-12 w-full bg-muted">
      <div className="max-w-[85rem] xl:mx-auto lg:mx-8 md:mx-6 mx-4 gap-y-8 md:gap-y-0 grid md:grid-cols-6 grid-cols-1 border-b border-border lg:pb-12 md:pb-8 sm:pb-6 pb-4">
        <div className="lg:col-span-2 md:col-span-3 col-span-1 col-start-1 space-y-3">
          {logo && (
            <Image
              src={urlFor(logo).url()}
              width={80}
              height={40}
              alt={"Arfa Developers Logo"}
              className="mb-4"
            />
          )}
          <h3 className="lg:text-3xl text-2xl text-muted-foreground font-serif">
            {metaData.title}
          </h3>
          <p className="text-sm text-primary font-sans">{metaData.subtitle}</p>
        </div>
        {module?.newsletter && (
          <NewsLetterForm className="lg:col-start-5 col-start-1 lg:col-span-2 md:col-span-3 m-span-1" />
        )}
      </div>
      <div className="mt-6 sm:mt-0 max-w-[85rem] xl:mx-auto lg:mx-8 md:mx-6 mx-4 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 border-b border-border gap-x-6 lg:py-12 md:pb-8 sm:pb-6 pb-4 gap-y-4">
        {footerRoutes?.map(
          ({
            title,
            routes,
          }: {
            title: string;
            routes: { url: string; title: string }[];
          }) => {
            return <FooterLinks title={title} links={routes} key={title} />;
          }
        )}
      </div>
      <div className="max-w-[85rem] xl:mx-auto lg:mx-8 md:mx-6 mx-4 flex justify-between lg:py-12 md:py-8 py-4 md:mx-">
        {/* {module?.langSupport && (
          // <LanguageSwitcher langSupport={module.langSupport} />
        )} */}
        <LanguageSwitcher light={false} />
        {socialLinks && <FooterSocials socialLinks={module?.socialLinks} />}
      </div>
      <Banner title="All rights reserved. Arfa Developers 2024." />
    </footer>
  );
}

export default FooterModule;
