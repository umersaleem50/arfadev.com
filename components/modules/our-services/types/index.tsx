import { SectionMetaDataProps } from "@/components/section-header";

export interface BentoItem {
  title: string;
  description: string;
  url: string;
}

export interface BentoGridProps {
  metaData: SectionMetaDataProps;
  gridData?: BentoItem[];
}
