import React from "react";
import Section from "../section";
import BrokenGlass from "../svgs/broken-tank";
import { PortableText } from "@portabletext/react";

import { portableSimple } from "../portable-stucture/portable-simple";

function GuaranteeModule({ module }: any) {
  const { description } = module;
  return (
    <Section fullWidth={false}>
      <div className="max-w-[85rem] items-center grid md:grid-cols-2 bg-muted md:h-[20rem] h-auto grid-cols-1 py-6 sm:py-0">
        <div className="h-full scale-75 md:scale-100 md:w-2/3 relative justify-center self-center mx-auto">
          <BrokenGlass
            className={
              "md:absolute md:bottom-0 md:left-0 md:py-3 py-2 rotate-z-50"
            }
          />
        </div>
        <div className="flex justify-center md:items-start items-center flex-col md:w-2/3 gap-y-3 text-muted-foreground">
          <PortableText value={description} components={portableSimple} />
        </div>
      </div>
    </Section>
  );
}

export default GuaranteeModule;
