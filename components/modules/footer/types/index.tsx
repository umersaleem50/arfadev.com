import { SanityPage } from "@/sanity/types/globals";

export type SocialIcon = "facebook" | "slack" | "linkedin" | "twitter";

export interface FooterRoute {
  url: string;
  title: string;
  page?: SanityPage;
}

export interface FooterRoutes {
  title: string;
  routes: Array<FooterRoute>;
}

export interface FooterSocials {
  icon: SocialIcon;
  url: string;
}

export interface FooterProps {
  metaData?: {
    title?: string;
    subtitle?: string;
    logo?: string;
    newsletter?: boolean;
  };
  footerRoutes?: Array<FooterRoutes>;
  socialLinks?: Array<FooterSocials>;
}
