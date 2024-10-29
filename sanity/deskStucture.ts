import {
  Cardholder,
  File,
  Money,
  Package,
  Toolbox,
  Tray,
  Users,
  Warning,
} from "@phosphor-icons/react/dist/ssr";

const excludedIds = ["page", "cta"];

export default (S: any) =>
  S.list()
    .title("Content")
    .items([
      // Pages Section
      S.listItem()
        .title("Pages")
        .icon(File)
        .child(
          S.list()
            .title("Pages")
            .items([
              S.listItem()
                .title("English Pages")
                .child(
                  S.documentTypeList("page")
                    .title("English Pages")
                    .filter(
                      '_type == "page" && category == "page" && language == "en"'
                    )
                ),
              S.listItem()
                .title("German Pages")
                .child(
                  S.documentTypeList("page")
                    .title("German Pages")
                    .filter(
                      '_type == "page" && category == "page" && language == "de"'
                    )
                ),
            ])
        ),
      S.divider(),

      // Posts Section
      S.listItem()
        .title("Posts")
        .icon(Package)
        .child(
          S.list()
            .title("Posts")
            .items([
              S.listItem()
                .title("English Posts")
                .child(
                  S.documentTypeList("post")
                    .title("English Posts")
                    .filter('_type == "post" && language == "en"')
                ),
              S.listItem()
                .title("German Posts")
                .child(
                  S.documentTypeList("post")
                    .title("German Posts")
                    .filter('_type == "post" && language == "de"')
                ),
            ])
        ),

      // Services Section
      S.listItem()
        .title("Services")
        .icon(Toolbox)
        .child(
          S.list()
            .title("Services")
            .items([
              S.listItem()
                .title("English Services")
                .child(
                  S.documentTypeList("page")
                    .title("English Services")
                    .filter(
                      '_type == "page" && category == "service" && language == "en"'
                    )
                ),
              S.listItem()
                .title("German Services")
                .child(
                  S.documentTypeList("page")
                    .title("German Services")
                    .filter(
                      '_type == "page" && category == "service" && language == "de"'
                    )
                ),
            ])
        ),

      // Team Pages Section
      S.listItem()
        .title("Team Pages")
        .icon(Users)
        .child(
          S.list()
            .title("Team Pages")
            .items([
              S.listItem()
                .title("English Team Pages")
                .child(
                  S.documentTypeList("page")
                    .title("English Team Pages")
                    .filter(
                      '_type == "page" && category == "team" && language == "en"'
                    )
                ),
              S.listItem()
                .title("German Team Pages")
                .child(
                  S.documentTypeList("page")
                    .title("German Team Pages")
                    .filter(
                      '_type == "page" && category == "team" && language == "de"'
                    )
                ),
            ])
        ),
      S.listItem()
        .title("CTAs")
        .icon(Money)
        .child(
          S.list()
            .title("CTA")
            .items([
              S.listItem()
                .title("English CTA")
                .child(
                  S.documentTypeList("cta")
                    .title("English CTA")
                    .filter('_type == "cta" && language == "en"')
                ),
              S.listItem()
                .title("German CTA")
                .child(
                  S.documentTypeList("cta")
                    .title("German CTA")
                    .filter('_type == "cta" && language == "de"')
                ),
            ])
        ),

      // Other Pages Section
      S.listItem()
        .title("Other Pages")
        .icon(Tray)
        .child(
          S.list()
            .title("Other Pages")
            .items([
              S.listItem()
                .title("English Other Pages")
                .child(
                  S.documentTypeList("page")
                    .title("English Other Pages")
                    .filter(
                      '_type == "page" && category == "other" && language == "en"'
                    )
                ),
              S.listItem()
                .title("German Other Pages")
                .child(
                  S.documentTypeList("page")
                    .title("German Other Pages")
                    .filter(
                      '_type == "page" && category == "other" && language == "de"'
                    )
                ),
            ])
        ),

      // Error Pages Section
      S.listItem()
        .title("Error Pages")
        .icon(Warning)
        .child(
          S.documentTypeList("page")
            .title("Error Pages")
            .filter('_type == "page" && category == "error"')
        ),

      S.divider(),
      ...S.documentTypeListItems().filter(
        (listItem: any) => !excludedIds.includes(listItem.getId())
      ),
      S.divider(),

      // All Pages Section
      S.listItem()
        .title("All Pages")
        .icon(Cardholder)
        .child(
          S.documentTypeList("page")
            .title("All Pages")
            .filter('_type == "page"')
        ),
    ]);
