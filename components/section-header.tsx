import { cn } from "@/lib/utils";
import AnimatedText from "./animated/AnimatedText";
import { SectionFooterProps } from "./section-footer";

export interface SectionMetaDataProps {
  title?: string;
  subtitle?: string;
  className?: string;
  miniTitle?: string;
  sectionFooter?: SectionFooterProps;
}

function SectionMetaData({
  title,
  subtitle,
  className,
  miniTitle,
}: SectionMetaDataProps) {
  return (
    <div
      className={cn(
        "flex items-start flex-col space-y-3 max-w-[85rem] mx-auto lg:pb-24 md:pb-20 sm:pb-16 pb-14 z-20 relative text-muted-foreground",
        className,
      )}
    >
      {miniTitle && (
        <AnimatedText
          className={
            "text-sm font-sans border-b inline-block self-start border-current pb-2 max-w-lg text-accent dark:text-primary"
          }
        >
          {miniTitle}
        </AnimatedText>
      )}
      <AnimatedText
        className={
          "lg:text-4xl md:text-3xl text-2xl leading-normal font-serif max-w-lg text-current"
        }
        as={"h3"}
      >
        {title}
      </AnimatedText>

      <AnimatedText
        className={
          "text-md text-sm sm:text-base font-sans max-w-lg text-current opacity-70"
        }
      >
        {subtitle}
      </AnimatedText>
    </div>
  );
}

export default SectionMetaData;
