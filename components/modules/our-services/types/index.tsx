import { SectionMetaDataProps } from "@/components/section-header";

export interface BentoItem {
  title: string;
  tagline: string;
  description: string;
  bg_image: string;
  deliverables: { item: string }[];
  url: string;
}

export interface BentoGridProps {
  metaData: SectionMetaDataProps;
}
