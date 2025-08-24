import Link from "next/link";
import React from "react";
import dynamic from "next/dynamic";
import { KeyObject } from "crypto";

const LinkedInLogo = dynamic(() =>
  import("@phosphor-icons/react/dist/ssr").then((icons) => icons.LinkedinLogo)
);
const XLogo = dynamic(() =>
  import("@phosphor-icons/react/dist/ssr").then((icons) => icons.XLogo)
);

const SlackLogo = dynamic(() =>
  import("@phosphor-icons/react/dist/ssr").then((icons) => icons.SlackLogo)
);

const GoogleLogo = dynamic(() =>
  import("@phosphor-icons/react/dist/ssr").then((icons) => icons.GoogleLogo)
);

const FacebookLogo = dynamic(() =>
  import("@phosphor-icons/react/dist/ssr").then((icons) => icons.FacebookLogo)
);

const getSocialIcons = (value: string) => {
  switch (value) {
    case "facebook":
      return (
        <FacebookLogo className="fill-secondary hover:fill-primary transition-all duration-300 h-8 w-8" />
      );

    case "linkedin":
      return (
        <LinkedInLogo className="fill-secondary hover:fill-primary transition-all duration-300 h-8 w-8" />
      );

    case "slack":
      return (
        <SlackLogo className="fill-secondary hover:fill-primary transition-all duration-300 h-8 w-8" />
      );

    case "twitter":
      return (
        <XLogo className="fill-secondary hover:fill-primary transition-all duration-300 h-8 w-8" />
      );

    default:
      break;
  }
};

function FooterSocials({ socialLinks = [] }: any) {
  return (
    <div className="flex space-x-6">
      {socialLinks?.map(({ icon, url }: any) => {
        return (
          <Link key={url} href={url || "/"}>
            {getSocialIcons(icon)}
          </Link>
        );
      })}
    </div>
  );
}

export default FooterSocials;
