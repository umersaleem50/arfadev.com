import Image from "next/image";
import React from "react";
import NewsLetterForm from "../newsletter.form";
import FooterLinks from "./footer/footer-links";
import LanguageSwitcher from "../language-switcher";
import FooterSocials from "./footer/footer-social";
import Banner from "../banner";
import CustomImage from "../custom-image";
import { urlFor } from "@/sanity/lib/image";

function FooterModule({ module }: any) {
  const metaData = module?.metaData || {
    title: "Untitle",
    subtitle: "Arfa Developers.",
    logo: null,
    newsletter: false,
  };

  const footerRoutes = module?.footerRoutes || [];

  const socialLinks = module?.socialLinks || [];

  return (
    <footer className="pt-24 w-full dark:bg-white bg-black">
      <div className="max-w-[85rem] mx-auto grid grid-cols-6 border-b border-secondary/40 pb-12">
        <div className="col-span-2 col-start-1 space-y-3">
          {metaData.logo && (
            <CustomImage
              src={urlFor(metaData?.logo?.asset).url()}
              width={metaData?.logo?.width}
              height={metaData?.logo?.height}
              imageOBJ={metaData.logo.asset}
              alt={metaData?.logo?.alt}
            />
          )}
          <h3 className="text-3xl text-secondary font-serif">
            {metaData.title}
          </h3>
          <p className="text-sm text-primary font-sans">{metaData.subtitle}</p>
        </div>
        {module?.newsletter && (
          <NewsLetterForm className="col-start-5 col-span-2" />
        )}
      </div>
      <div className="max-w-[85rem] mx-auto grid grid-cols-4 border-b border-secondary/40 gap-x-6 py-12">
        {footerRoutes.map(
          (
            {
              title,
              routes,
            }: { title: string; routes: { url: string; title: string }[] },
            key: number
          ) => {
            return <FooterLinks title={title} links={routes} key={key} />;
          }
        )}
      </div>
      <div className="max-w-[85rem] mx-auto flex justify-between py-12">
        {module?.langSupport && (
          <LanguageSwitcher langSupport={module.langSupport} />
        )}
        {socialLinks && <FooterSocials socialLinks={module?.socialLinks} />}
      </div>
      <Banner title="All rights reserved. Arfa Developers 2024." />
    </footer>
  );
}

export default FooterModule;
