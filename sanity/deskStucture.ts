import {
  Cardholder,
  File,
  Money,
  Package,
  Tray,
  Users,
  Warning,
} from "@phosphor-icons/react/dist/ssr";
import { StructureBuilder } from "sanity/structure";

const deskStucture = (S: StructureBuilder) =>
  S.list()
    .title("Content")
    .items([
      // Pages Section
      S.listItem()
        .title("Pages")
        .icon(File)
        .child(
          S.documentTypeList("page").title("Pages").filter('_type == "page"'),
        ),
      S.divider(),

      // Posts Section
      S.listItem()
        .title("Posts")
        .icon(Package)
        .child(
          S.documentTypeList("post").title("Posts").filter('_type == "post" '),
        ),

      // Services Section
      // S.listItem()
      //   .title("Services")
      //   .icon(Toolbox)
      //   .child(
      //     S.documentTypeList("service")
      //       .title("Services")
      //       .filter('_type == "page" && category == "service"'),
      //   ),

      // Team Pages Section
      S.listItem()
        .title("Team Pages")
        .icon(Users)
        .child(
          S.documentTypeList("team")
            .title("Team Pages")
            .filter('_type == "page" && category =="team"'),
        ),
      S.listItem()
        .title("CTAs")
        .icon(Money)
        .child(
          S.documentTypeList("cta").title("CTA Pages").filter('_type == "cta"'),
        ),

      // Other Pages Section
      S.listItem()
        .title("Other Pages")
        .icon(Tray)
        .child(
          S.documentTypeList("page")
            .title("English Other Pages")
            .filter('_type == "page" && category == "other"'),
        ),

      // Error Pages Section
      S.listItem()
        .title("Error Pages")
        .icon(Warning)
        .child(
          S.documentTypeList("page")
            .title("Error Pages")
            .filter('_type == "page" && category == "error"'),
        ),

      S.divider(),

      ...S.documentTypeListItems().filter(
        (listItem: any) => listItem.getId() !== "page",
      ),

      S.divider(),

      // All Pages Section
      S.listItem()
        .title("All Pages")
        .icon(Cardholder)
        .child(
          S.documentTypeList("page")
            .title("All Pages")
            .filter('_type == "page"'),
        ),
    ]);

export default deskStucture;
