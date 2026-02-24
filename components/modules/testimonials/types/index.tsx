import { SectionMetaDataProps } from "@/components/section-header";

export interface BrandList {
  image: string;
  name: string;
  lightimg: string;
}

export interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
  image: string;
}

export interface TestimonialSection {
  metaData: SectionMetaDataProps;
  clients: Array<TestimonialProps>;
}
