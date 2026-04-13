import BlogsPage from "@/components/blogs-page";
import FooterModule from "@/components/modules/footer";

import Navbar from "@/components/modules/navbar";
import { getPostsPage } from "@/sanity/data";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: {
      template: "% - Arfa Developers",
      default: "Read our blogs - Arfa Developers",
    },
    description:
      "We regularly post blogs related to tech industy to help other developers with valuable content. You will gain valuable insights about clean code, architecture, and frontend development.",

    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/blogs`,
    },

    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: false,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export default async function BlogListing({
  params,
  searchParams,
}: {
  params: { lang: string };
  searchParams?: Promise<{
    query?: string;
    page?: string;
    limit?: string;
  }>;
}) {
  const pageData = await getPostsPage(false);
  const menu = pageData?.menu;
  const footer = pageData?.footer;

  return (
    <>
      {menu && <Navbar module={menu} />}

      <BlogsPage searchParams={searchParams} />
      {footer && <FooterModule module={footer} />}
    </>
  );
}
