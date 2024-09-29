import {
  FacebookLogo,
  InstagramLogo,
  LinkedinLogo,
  XLogo,
} from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import React from "react";

function FooterSocials() {
  return (
    <div className="flex space-x-6">
      <Link href={"/insta"}>
        <InstagramLogo className="fill-secondary hover:fill-muted-foreground transition-all duration-300 h-8 w-8" />
      </Link>
      <Link href={"/linkedin"}>
        <LinkedinLogo className="fill-secondary hover:fill-muted-foreground transition-all duration-300 h-8 w-8" />
      </Link>
      <Link href={"/facebook"}>
        <FacebookLogo className="fill-secondary hover:fill-muted-foreground transition-all duration-300 h-8 w-8" />
      </Link>
      <Link href={"/x"}>
        <XLogo className="fill-secondary hover:fill-muted-foreground transition-all duration-300 h-8 w-8" />
      </Link>
    </div>
  );
}

export default FooterSocials;
