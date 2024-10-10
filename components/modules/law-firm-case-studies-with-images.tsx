import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import CustomImage from "../custom-image";
import { urlFor } from "@/sanity/lib/image";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import Section from "../section";

export default function LawFirmCaseStudies({ module }: any) {
  const { projects = [], metaData } = module;
  return (
    <Section className=" bg-background" sectionHeader={metaData}>
      {/* <div className="relative h-[70vh] min-h-[400px] w-full px-2">
        {
          <Image
            alt={caseStudies[1]?.title}
            className="object-cover"
            fill
            src={caseStudies[1].image}
          />
        }
        <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center"></div>
      </div> */}
      <div className="max-w-[85rem] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map(
          (
            { cover, title, firmName, tags, duration, results, project }: any,
            key: number
          ) => (
            <Card
              key={key}
              className="bg-white overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              {cover && (
                <CustomImage
                  src={urlFor(cover?.asset).width(300).height(200).url()}
                  alt={cover?.alt}
                  width={800}
                  height={600}
                  imageOBJ={cover.asset}
                  objectFit={cover.objectFit}
                  layout="responsive"
                />
              )}
              <CardHeader className="bg-primary text-white">
                <CardTitle className="font-serif">{title}</CardTitle>
                <CardDescription className="text-white font-sans">
                  {firmName}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-4 self-end justify-end">
                <div className="flex justify-between items-center mb-4">
                  {tags?.length && (
                    <Badge
                      variant="secondary"
                      // className="bg-stone-200 text-stone-800"
                    >
                      {tags[0]}
                    </Badge>
                  )}
                  <span className="text-base font-sans text-muted-foreground">
                    {duration}
                  </span>
                </div>
                <div className="flex justify-between gap-y-4 flex-col">
                  <span className="font-bold text-lg text-black font-serif">
                    {results}
                  </span>
                  <Link
                    href={project?.slug?.current || "not-found"}
                    className={buttonVariants({
                      variant: "outline",
                      size: "sm",
                      className:
                        "dark:text-secondary hover:dark:text-secondary-foreground",
                    })}
                  >
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </CardContent>
            </Card>
          )
        )}
      </div>
      {projects.length === 0 && (
        <p className="text-center text-stone-500 mt-8">
          No case studies found. Try a different search term.
        </p>
      )}
    </Section>
  );
}
