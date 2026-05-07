import { SectionMetaDataProps } from "@/components/section-header";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

type Item = {
  _type: string;
  icon?: SanityImageSource | React.ReactNode;
  subtitle?: string;
  title?: string;
};

export type Content = Array<Item>;

export interface OurServicesProps {
  metaData: SectionMetaDataProps;
  content: Content;
}
