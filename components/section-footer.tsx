import React from "react";
import { Button } from "./ui/button";

function SectionFooter({
  subtitle,
  url,
  options,
}: {
  subtitle: string;
  url?: string;
  options?: { color?: string };
}) {
  return (
    <div className="flex justify-between items-center container mx-auto py-24 border-t">
      <p className="text-sm leading-normal font-sans max-w-md text-primary">
        Everything we do is focused on generating more qualified cases for your
        law firm.
      </p>
      <Button variant={"outline"} size={"lg"}>
        Explore More
      </Button>
    </div>
  );
}

export default SectionFooter;
