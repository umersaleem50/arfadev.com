import { SanityImageProps } from "@/components/SanityImage";
import { SanityPage } from "@/sanity/types/globals";

export interface PortfolioCardProps {
  index: number;
  title: string;
  description: string;
  results: string[];
  page: SanityPage;
  options?: { reverse: boolean };
  cover: SanityImageProps[];
}

export interface PortfolioProps {
  module: {
    metaData: PortfolioHeaderProps;
    projects: PortfolioCardProps[];
  };
}

export interface PortfolioHeaderProps {
  title: string;
  subtitle: string;
  className?: string;
}
