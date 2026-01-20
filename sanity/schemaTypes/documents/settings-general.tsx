import { Gear } from "@phosphor-icons/react/dist/ssr";
import { defineField, Rule } from "sanity";

const generalSettings = {
  title: "General Settings",
  name: "generalSettings",
  type: "document",
  icon: Gear,
  // group: [
  //   { title: "Site Details", name: "details", default: true },
  //   { title: "Displays", name: "displays" },
  //   { title: "Advanced", name: "advanced" },
  // ],
  fields: [
    defineField({
      // should match 'languageField' plugin configuration setting, if customized
      name: "language",
      type: "string",
      readOnly: true,
      hidden: true,
    }),
    {
      title: "Home Page",
      name: "home",
      type: "reference",
      to: [{ type: "page" }],
      description: "This page will show at the root of your domain",
      // group: "displays",
    },
    // {
    //   title: "Blogs",
    //   name: "blogs",
    //   type: "reference",
    //   to: [{ type: "blog" }],
    //   description: (
    //     <>
    //       This collection will show at: <code>/blogs</code>
    //     </>
    //   ),
    // group: "display",
    // },
    {
      title: "Error Page (404)",
      name: "error",
      type: "reference",
      to: [{ type: "page" }],
      description:
        "This page will show for any URL at your domain that does not exist yet",
      // group: "displays",
    },
    {
      title: "Featured Blogs",
      name: "featuredBlogs",
      type: "array",
      of: [{ type: "reference", to: [{ type: "post" }] }],
      validation: (rule: Rule) => {
        return Number(rule?.length) < 4;
      },
    },
    {
      title: "Featured Case Studies",
      name: "featuredCaseStudies",
      type: "array",
      of: [
        {
          type: "object",
          name: "doc",
          title: "Page",
          fields: [
            {
              title: "Case Study",
              name: "ref",
              type: "reference",
              to: [{ type: "page" }],
            },
            {
              title: "Title",
              name: "title",
              type: "string",
              validation: (Rule: Rule) => Rule.required(),
            },
            {
              title: "Thumbnail",
              name: "image",
              type: "customImage",
            },
            {
              title: "Description",
              name: "description",
              rows: 3,
              type: "text",
              validation: (Rule: Rule) => Rule.required().max(300),
            },
          ],
        },
      ],
      validation: (rule: Rule) => {
        return Number(rule.length) < 4;
      },
    },
    {
      title: "Site Title",
      name: "siteTitle",
      type: "string",
      description: "The name of your site, usually your company/brand name",
      // group: "details",
    },
    // {
    //   title: "Services Base URL",
    //   name: "servicesBaseURL",
    //   type: "slug",
    //   description:
    //     "(required) Enter only BaseURL ie. services. Don't include slash (/) into url",
    //   options: {
    //     maxLength: 96,
    //   },
    //   validation: (Rule:Rule) => Rule.required(),
    // },
    {
      title: "Live Site URL",
      description: "The root domain or subdomain of your website",
      name: "siteURL",
      type: "url",
      validation: (Rule: Rule) => Rule.required(),
      // group: "details",
    },
    {
      title: "Language Supports",
      name: "langSupport",
      description:
        "Selete the language you want to support in you application.",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              type: "string",
              name: "title",
              title: "Title of language",
              description: "Ie. English or German",
            },
            {
              type: "string",
              name: "code",
              title: "Language Code",
              description: "i.e. en for english",
            },
          ],
        },
      ],
    },
    {
      title: "Google Tag Manager (GTM)",
      description: "To enable GTM enter your Container ID",
      name: "gtmID",
      type: "string",
      // group: "advanced",
    },
    {
      title: "Klaviyo Site ID (Public API Key)",
      description: "For product waitlists and newsletter forms",
      name: "klaviyoAccountID",
      type: "string",
      // group: "advanced",
    },
    {
      type: "object",
      name: "logo",
      title: "Logo's",
      options: {
        collapsable: true,
      },
      fields: [
        {
          type: "image",
          name: "fullLogo",
          title: "Full Logo",
          description: "Provide full logo with text.",
          validation: (rule: Rule) => rule.required(),
        },
        {
          type: "image",
          name: "logoMark",
          title: "Logo",
          description:
            "Provide the logo with just logomark only. ie. without text.",
          validation: (rule: Rule) => rule.required(),
        },
      ],
    },
  ],
  preview: {
    prepare() {
      return {
        title: "General Settings",
      };
    },
  },
};

export default generalSettings;
