import LawFirmCaseStudies from "@/components/modules/law-firm-case-studies-with-images";
import FooterModule from "@/components/modules/footer.module";
import { MegaMenu } from "@/components/modules/mega-menu";
import { getPostsPage } from "@/sanity/data";
import React from "react";

async function page() {
  const pageData = await getPostsPage(false);
  const menu = pageData?.menu;
  const footer = pageData?.footer;
  return (
    <>
      {menu && <MegaMenu module={menu} />}
      <LawFirmCaseStudies />
      {footer && <FooterModule module={footer} />}
    </>
  );
}

export default page;
