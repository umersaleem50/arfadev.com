import { Author } from "@/components/author";
import { SanityImageProps } from "@/components/SanityImage";
import { SectionMetaDataProps } from "@/components/section-header";

export interface BlogCard {
  title: string;
  _createdAt?: Date;
  _updatedAt?: Date;
  author: Author;
  slug?: { current: string };
  description?: string;
  tags?: string[];
  cover_vertical: SanityImageProps;
  cover?: SanityImageProps;
}

export interface FeaturedBlogs {
  metaData: SectionMetaDataProps;
  posts: Array<BlogCard>;
}
