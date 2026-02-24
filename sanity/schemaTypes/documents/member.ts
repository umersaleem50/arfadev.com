import { Target, UserCirclePlus } from "@phosphor-icons/react/dist/ssr";
import { defineField } from "sanity";

export default defineField({
  type: "document",
  name: "member",
  title: "Member",
  icon: UserCirclePlus,
  fields: [
    {
      name: "photo",
      title: "Profile Picture",
      type: "sanityImage",
      validation(rule) {
        return rule.required();
      },
    },
    {
      name: "name",
      title: "Name",
      type: "string",
      validation(rule) {
        return rule.required();
      },
    },
    {
      name: "email",
      title: "Email",
      type: "email",
      description: "Please provide your professional email only.",
      validation(rule) {
        return rule.required();
      },
    },
    {
      name: "phone",
      title: "Phone No.",
      type: "string",
      description: "Please provide your professional Phone No. only.",
    },
    {
      name: "professions",
      title: "Skills & Technologies",
      type: "array",
      description:
        "Put only one skill per input. ie. ReactJs Developer or C# Developer.",
      of: [
        {
          type: "string",
          name: "profession",
          title: "Profession",
          icon: Target,
          validation(rule) {
            return rule.required().error("Please provide your skillset.");
          },
        },
      ],
    },
    {
      name: "contactLink",
      type: "navLink",
      title: "Contact Link",
      description:
        "We suggest you to provide your calendly profile link for making appointments.",
      validation(rule) {
        return rule.required().error("Please provide the contact link.");
      },
    },
    {
      name: "bio",
      title: "Bio",
      type: "complexPortableText",
    },
  ],
  preview: {
    select: {
      name: "name",
      photo: "photo.asset",
      professions: "professions",
    },
    prepare({ name, photo, professions }: any) {
      return {
        title: name,
        subtitle: professions.join(", "),
        media: photo,
      };
    },
  },
});
