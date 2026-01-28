import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";
import { motion } from "motion/react";

type Features = {
  icon: LucideIcon;
  content: string;
}[];

const Feature = ({ featureData }: { featureData: Features }) => {
  return (
    <div className="flex flex-col gap-8 md:gap-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 md:gap-6">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            ease: [0.21, 0.47, 0.32, 0.98],
          }}
          className="p-6 sm:p-16 rounded-2xl bg-[url('https://images.shadcnspace.com/assets/feature/feature-01-img.webp')] object-cover bg-center h-full w-full bg-cover bg-no-repeat"
        >
          <Card className="flex items-start gap-12 py-6 sm:py-10 border-none shadow-none ring-0 rounded-lg">
            <CardContent className="flex flex-col gap-6 px-6 sm:px-8">
              <Avatar className="size-12">
                <AvatarFallback>
                  <img
                    src="https://images.shadcnspace.com/assets/profiles/user-1.jpg"
                    className="rounded-full"
                  />
                </AvatarFallback>
              </Avatar>
              <h3 className="text-xl sm:text-2xl font-medium text-muted-foreground font-serif">
                “Before Shadcn Space, we stitched UIs together from random
                snippets. Now we ship polished interfaces in hours for
                frontend.”
              </h3>
            </CardContent>
            <CardFooter className="w-full px-6 sm:px-8 flex flex-col items-start gap-0.5">
              <p className="text-sm font-serif font-medium text-accent dark:text-primary">
                JOHNATHAN DOE
              </p>
              <span className="text-xs font-normal text-muted-foreground uppercase font-sans">
                HEAD OF FINANCE @SHADCN SPACE
              </span>
            </CardFooter>
          </Card>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-6">
          {featureData?.map((value, index) => {
            return (
              <motion.div
                key={index}
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  ease: [0.21, 0.47, 0.32, 0.98],
                }}
              >
                <Card className="py-8 bg-muted ring-0 border-0 h-full">
                  <CardContent className="w-full h-full px-8 flex flex-col items-start gap-12 justify-between">
                    <value.icon
                      className="w-6 h-6 text-muted-foreground"
                      strokeWidth={1.5}
                    />
                    <p className="text-base text-muted-foreground font-sans font-normal">
                      {value?.content}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Feature;
