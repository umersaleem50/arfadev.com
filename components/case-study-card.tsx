import Link from "next/link";
import CustomImage from "./SanityImage";

export interface ICaseStudyCard {
  title?: string;
  ref: { slug?: { current: string } };
  description?: string;
  image: any;
}

function CaseStudyCard({ docs }: { docs: ICaseStudyCard[] }) {
  return docs?.map(({ title, ref, description, image }, key: number) => {
    return (
      <Link href={`/${ref?.slug?.current}`} key={key}>
        <figure className="flex flex-col gap-y-2 md:flex-row gap-x-4 group ">
          <div className="md:h-28 h-40 w-full md:w-28 min-w-28 relative">
            {image && <CustomImage imageOBJ={image} />}
          </div>
          <figcaption className=" flex flex-col items-start gap-y-2">
            <h3 className="text-xl font-semibold font-serif group-hover:text-primary transition-colors duration-150">
              {title}
            </h3>
            <p className="text-sm font-sans text-muted-foreground">
              {description}
            </p>
          </figcaption>
        </figure>
      </Link>
    );
  });
}

export default CaseStudyCard;
