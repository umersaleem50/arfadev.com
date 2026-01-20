import { getPostsPage } from "@/sanity/data";
import { MegaMenu } from "@/components/modules/mega-menu";
import FooterModule from "@/components/modules/footer.module";
import BlogsPage from "@/components/blogs-page";

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
