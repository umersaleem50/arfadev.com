import { getPostsPage } from "@/sanity/data";
import { MegaMenu } from "@/components/modules/mega-menu";
import FooterModule from "@/components/modules/footer.module";
import BlogsPage from "@/components/blogs-page";

export default async function BlogListing() {
  const pageData = await getPostsPage(false);
  const menu = pageData?.menu;
  const footer = pageData?.footer;

  return (
    <>
      {menu && <MegaMenu module={menu} />}
      <BlogsPage />
      {footer && <FooterModule module={footer} />}
    </>
  );
}
