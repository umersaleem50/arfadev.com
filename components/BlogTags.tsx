import { Badge } from "./ui/badge";

function BlogTags({ tags }: { tags: string[] }) {
  return (
    <div className="col-start-1 col-span-8 flex gap-4 py-8">
      {tags?.length &&
        tags?.map((tag: string, key: number) => {
          return <Badge key={key}>{tag}</Badge>;
        })}
    </div>
  );
}

export default BlogTags;
