import { SectionMetaDataProps } from "@/components/section-header";

export interface processType {
  title: string;
  tagline: string;
  description: string;
  bg_image: string;
  deliverables: { item: string }[];
}

export interface OurProcessProps {
  metaData: SectionMetaDataProps;
}
