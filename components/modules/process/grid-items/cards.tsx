import { Sparkles } from "lucide-react";
import DisplayCards from "./display-card";

const defaultCards = [
  {
    icon: <Sparkles className="size-4 text-accent-foreground" />,
    title: "Featured",
    description: "Discover amazing content",
    date: "Just now",
    iconClassName: "text-blue-500",
    titleClassName: "text-accent dark:text-primary",
    className:
      "[grid-area:stack] hover:-translate-y-10 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0",
  },
  {
    icon: <Sparkles className="size-4 text-accent-foreground" />,
    title: "Bounce Rate Research",
    description: "Update heading and call-to-action.",
    date: "2 days ago",
    iconClassName: "text-blue-500",
    titleClassName: "text-accent dark:text-primary",
    className:
      "[grid-area:stack] translate-x-12 translate-y-10 hover:-translate-y-1 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0",
  },
  {
    icon: <Sparkles className="size-4 text-accent-foreground" />,
    title: "Performance Bottleneck",
    description: "Remove unnecceary packages.",
    date: "+30% Performance",
    iconClassName: "text-blue-500",
    titleClassName: "text-accent dark:text-primary",
    className:
      "[grid-area:stack] translate-x-24 translate-y-20 hover:translate-y-10",
  },
];

export default function AnimatedCards() {
  return (
    <div className="flex min-h-[250px] w-full items-center justify-center py-20">
      <div className="w-full max-w-3xl">
        <DisplayCards cards={defaultCards} />
      </div>
    </div>
  );
}
