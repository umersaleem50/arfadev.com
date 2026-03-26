import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

function NotFoundDefault() {
  return (
    <section className="z-10 h-screen flex items-center justify-center">
      <div className="flex items-center md:flex-col flex-row gap-4 w-full mx-auto">
        <div className="mx-auto max-w-4xl px-4 md:px-6 text-left mt-8 flex flex-col items-center gap-y-12 justify-center self-center">
          <h1
            className={
              "text-3xl sm:text-5xl md:text-7xl font-serif text-center leading-normal capitalize font-light text-muted-foreground"
            }
          >
            Seems like you got lost!
            <br />
            <u className="text-accent dark:text-primary">Page not found!</u>
          </h1>
          <div className="flex flex-col gap-y-8 items-center">
            <p className="w-full max-w-md text-xs sm:text-base font-sans whitespace-normal leading-relaxed! text-center text-muted-foreground">
              Page not found or moved permanently.
              <u className="text-accent dark:text-primary">
                Please go back to homepage
              </u>{" "}
              or try again later!
            </p>
            <div className="flex gap-x-4">
              <Button asChild variant={"outline"}>
                <Link href={"/"}>
                  <ArrowLeft />
                  Back to homepage
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NotFoundDefault;
