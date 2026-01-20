import { Rule } from "sanity";
import { Header1, Header2, Header3, Header4 } from "../components/renders";

const portableSimpleSchema = {
  title: "Portable Text",
  name: "simplePortableText",
  type: "array",
  of: [
    {
      title: "Block",
      type: "block",
      styles: [
        { title: "Paragraph", value: "normal" },
        {
          title: "H1 (use once)",
          value: "h1",
          blockEditor: {
            render: Header1,
          },
        },
        {
          title: "H2",
          value: "h2",
          blockEditor: {
            render: Header2,
          },
        },
        {
          title: "H3",
          value: "h3",
          blockEditor: {
            render: Header3,
          },
        },
        {
          title: "H4",
          value: "h4",
          blockEditor: {
            render: Header4,
          },
        },
        {
          title: "H5",
          value: "h5",
        },
        {
          title: "H6",
          value: "h6",
        },
      ],
      lists: [],
      marks: {
        decorators: [
          { title: "Strong", value: "strong" },
          { title: "Emphasis", value: "em" },
        ],
        annotations: [
          {
            title: "Link",
            name: "link",
            type: "object",
            // blockEditor: {
            //   render: Button,
            // },
            fields: [
              {
                title: "Link Type",
                name: "linkType",
                type: "string",
                options: {
                  list: [
                    { title: "Internal Page", value: "internal" },
                    { title: "External URL", value: "external" },
                  ],
                  layout: "radio",
                  direction: "horizontal",
                },
                initialValue: "internal",
                validation: (Rule: Rule) => Rule.required(),
              },
              {
                title: "Internal Page",
                name: "page",
                type: "reference",
                to: [{ type: "page" }],
                hidden: ({ parent }: any) => parent.linkType !== "internal",
              },
              {
                title: "External URL",
                name: "url",
                type: "url",
                validation: (Rule: Rule) =>
                  Rule.uri({
                    scheme: ["http", "https", "mailto", "tel"],
                  }),
                hidden: ({ parent }: any) => parent.linkType !== "external",
              },
              {
                title: "Style as Button?",
                name: "isButton",
                type: "boolean",
                initialValue: false,
              },
            ],
          },
        ],
      },
    },

    {
      type: "break",
    },
  ],
};

export default portableSimpleSchema;
