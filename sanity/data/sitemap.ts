export const SITEMAP_QUERY = `*[_type == "page" && category != "error"]{_updatedAt,slug,"priority":seo.priority}`;

export const BLOGS_SITEMAP_QUERY = `*[_type == "post"]{_updatedAt,slug,"priority":seo.priority}`;
