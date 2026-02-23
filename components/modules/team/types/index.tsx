import { SectionMetaDataProps } from "@/components/section-header";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { CSSProperties } from "react";
import { TypedObject } from "sanity";

export interface TeamSectionProps {
  metaData: SectionMetaDataProps;
  team: Array<TeamProps>;
}

export interface TeamProps {
  name?: string;
  photo?: SanityImageSource;
  professions?: string[];
  bio?: TypedObject | TypedObject[] | undefined;
  isInverted?: boolean;
  style?: CSSProperties | null | undefined | unknown;
  divStyle?: CSSProperties | null | undefined | unknown;
}
