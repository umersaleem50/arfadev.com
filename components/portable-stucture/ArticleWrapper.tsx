import { ReactNode } from "react";

function ArticleWrapper({ children }: { children: ReactNode }) {
  return (
    <article className="dark:text-foreground prose-headings:font-medium prose-strong:text-foreground prose-blockquote:text-foreground prose-a:text-primary prose prose-blockquote:border-l-4 prose-blockquote:border-primary md:prose-base prose-headings:font-serif font-sans prose-purple col-start-1 lg:col-span-8 md:col-span-6 col-span-4 prose-h1:text-4xl prose-h2:text-3xl prose-h3:text-2xl prose-h4:text-xl prose-h5:text-lg prose-headings:text-accent prose-headings:dark:text-primary text-justify prose-strong:font-medium">
      {children}
    </article>
  );
}

export default ArticleWrapper;
