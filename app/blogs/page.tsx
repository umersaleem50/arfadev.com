import BlogsPage from "@/components/blogs-page";
import FooterModule from "@/components/modules/footer.module";
import { MegaMenu } from "@/components/modules/navbar";
import { getPostsPage } from "@/sanity/data";

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
      {menu && <MegaMenu module={menu} />}
      <BlogsPage lang={params.lang} searchParams={searchParams} />
      {footer && <FooterModule module={footer} />}
    </>
  );
}
