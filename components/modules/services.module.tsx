import React from "react";
import Section from "../section";
import ServiceCard from "../service-card";
import StatueOfJustice from "../svgs/statue-of-justice.svg";
import {
  CompassSVG,
  EyeSVG,
  MonitorSVG,
  ToolsSVG,
} from "../svgs/service-card-svgs";
import CustomImage from "../custom-image";
import { urlFor } from "@/sanity/lib/image";
interface IService {
  title: string;
  subtitle: string;
  icon: any;
  page: any;
  _type: string;
}

interface ICustomImage {
  asset: any;
  width: number | string;
  height: string | number;
  _type: string;
}

function Services({ module }: any) {
  const metaData = module?.metaData || {};
  const content = module?.content || [];

  const lineArt = module?.lineArt;

  console.log(metaData);

  return (
    <Section fullWidth sectionHeader={metaData}>
      <div className="w-full grid-cols-5 grid">
        {content.map((service: any, key: any) => {
          switch (service._type) {
            case "service":
              return (
                <ServiceCard
                  key={key}
                  index={key + 1}
                  // className="col-span-1 col-start-1"
                  {...service}
                />
              );

            default:
              null;
          }
        })}

        {lineArt && (
          <div className="col-span-1 col-start-5 h-full relative overflow-hidden">
            <CustomImage
              src={urlFor(lineArt?.asset).url()}
              alt={lineArt.alt}
              width={lineArt.width}
              height={lineArt.height}
              imageOBJ={lineArt.asset}
            />
          </div>
        )}
      </div>
    </Section>
  );
}

export default Services;
