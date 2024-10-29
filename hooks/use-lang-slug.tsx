import { useParams } from "next/navigation";

export const useSlugAndLang = () => {
  const params = useParams();

  let { slug = "" } = params;

  // Ensure slug is a string or join if it's an array
  slug = Array.isArray(slug) ? slug.join("/") : slug;

  // Match and remove "en/" or "de/" if they are at the start of the slug
  const match = slug.match(/^(en|de)\/?(.*)/);
  const lang = match ? match[1] : params?.lang;
  const cleanedSlug = match ? match[2] : slug;

  return { lang, slug: cleanedSlug };
};
