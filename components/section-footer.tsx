import Link from "next/link";
import { Button } from "./ui/button";

export interface SectionFooterProps {
  description: string;
  btnText?: string;
  urlType?: string;
  navPage?: { page: { language: string; slug: { current: string } } };
  navLink?: string;
  slugPage?: string;
}

function SectionFooter({
  description,
  btnText,
  urlType,
  navPage,
  navLink,
  slugPage,
}: SectionFooterProps) {
  let href;
  switch (urlType) {
    case "internal":
      href = `/${navPage?.page?.language}/${navPage?.page?.slug?.current}`;
      break;
    case "external":
      href = navLink;
      break;
    case "slug":
      href = slugPage;
      break;
  }

  return (
    <div className="flex sm:flex-row flex-col gap-y-4 justify-between items-center container mx-auto lg:py-12 md:py-8 py-6 border-t max-w-[85rem] border-muted-foreground/30 lg:mt-24 md:mt-16">
      <p className="text-sm leading-normal font-sans max-w-md text-current">
        {description}
      </p>

      <Button asChild variant={"outline"} size={"lg"}>
        <Link href={href || "/not-found"}>{btnText}</Link>
      </Button>
    </div>
  );
}

export default SectionFooter;
