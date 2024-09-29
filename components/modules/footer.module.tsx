import Image from "next/image";
import React from "react";
import NewsLetterForm from "../newsletter.form";
import FooterLinks from "./footer/footer-links";
import LanguageSwitcher from "../language-switcher";
import FooterSocials from "./footer/footer-social";
import Banner from "../banner";

function FooterModule() {
  return (
    <footer className="bg-foreground pt-24 w-full">
      <div className="max-w-[85rem] mx-auto grid grid-cols-6 border-b border-secondary/40 pb-12">
        <div className="col-span-2 col-start-1 space-y-3">
          <Image src={"/logo.svg"} width={200} height={100} alt="logo" />
          <h3 className="text-3xl text-secondary font-serif">
            We growing up your business with our services.
          </h3>
          <p className="text-sm text-muted-foreground font-sans">
            Arfa Developers, 2024
          </p>
        </div>
        <NewsLetterForm className="col-start-5 col-span-2" dark />
      </div>
      <div className="max-w-[85rem] mx-auto grid grid-cols-4 border-b border-secondary/40 gap-x-6 py-12">
        <FooterLinks
          title={"Policies"}
          links={[
            { url: "/home", title: "Home" },
            { url: "/home", title: "Cookie Policies" },
            { url: "/home", title: "Terms & Conditions" },
          ]}
        />
        <FooterLinks
          title={"Services"}
          links={[
            { url: "/home", title: "Home" },
            { url: "/home", title: "Cookie Policies" },
            { url: "/home", title: "Terms & Conditions" },
          ]}
        />
        <FooterLinks
          title={"Featured Articles"}
          links={[
            { url: "/home", title: "Home" },
            { url: "/home", title: "Cookie Policies" },
            { url: "/home", title: "Terms & Conditions" },
          ]}
        />
        <FooterLinks
          title={"Other Pages"}
          links={[
            { url: "/home", title: "Home" },
            { url: "/home", title: "Cookie Policies" },
            { url: "/home", title: "Terms & Conditions" },
          ]}
        />
      </div>
      <div className="max-w-[85rem] mx-auto flex justify-between py-12">
        <LanguageSwitcher />
        <FooterSocials />
      </div>
      <Banner title="All rights reserved. Arfa Developers 2024." />
    </footer>
  );
}

export default FooterModule;
