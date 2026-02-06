import { cn } from "@/lib/utils";
import { PortableText } from "@portabletext/react";
import { motion } from "motion/react";
import CustomImage from "./custom-image";
import { Badge } from "./ui/badge";

function TeamCard({
  name,
  photo,
  professions,
  bio,
  isInverted,
  style,
  divStyle,
}: any) {
  // const href = slug?.current || "/";

  return (
    <figure className="justify-around items-center sm:items-start flex relative py-3 sm:flex-row flex-col ">
      <motion.div
        className={cn(
          "aspect-[4/5] w-full sm:w-[35vw] md:w-[25vw] relative ",
          isInverted ? "sm:order-1" : "sm:order-2",
        )}
        style={style}
      >
        <CustomImage
          imageOBJ={photo}
          className={cn("!object-contain saturate-0 rounded-md shadow-lg ")}
        />
      </motion.div>

      <figcaption
        className={cn(
          "self-center text-background dark:text-foreground flex flex-col md:gap-y-3 sm:gap-y-2 gap-y-1 md:w-2/3 w-full max-w-[30rem] sm:p-6 py-6 px-4 sm:px-0",
          isInverted ? "sm:order-2" : "sm:order-1",
        )}
      >
        <h3 className="lg:text-4xl md:text-3xl text-2xl font-serif">{name}</h3>

        <div className="prose-sm prose-p:text-sm prose-p:font-sans">
          <PortableText value={bio} />
        </div>
        <div className="flex gap-2 flex-wrap mt-2">
          {professions.map((profession: string) => (
            <Badge key={profession}>{profession}</Badge>
          ))}
        </div>
      </figcaption>
      <div
        style={divStyle}
        className="bg-gradient-to-r from-primary to-accent w-full absolute sm:top-1/2 bottom-0 sm:-translate-y-1/2 left-0 md:h-[20vw] h-[50vh]  sm:h-[25vw] -z-10 rounded-sm"
      ></div>
    </figure>
  );
}

export default TeamCard;
