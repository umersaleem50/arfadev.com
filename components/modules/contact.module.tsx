import React from "react";
import { FormComponent } from "../form";
import Section from "../section";
import Image from "next/image";

function ContactModule() {
  return (
    <Section
      fullWidth
      // className="bg-brand-black dark:bg-secondary text-muted-foreground"
      sectionHeader={{
        miniTitle: "Contact Us",
        title: "Only one appointment you need see if we're right fit for you.",
        subtitle:
          "Don't hestiate to reach us, we offer free consultation services.",
      }}
    >
      <div className="w-full h-screen grid grid-cols-12 items-start ">
        {/* <div className="flex justify-between col-span-4 col-start-8 items-center">
          <p className="text-2xl font-serif">
            Send us mail at{" "}
            <Link className="underline" href={"mailTo:hello@arfadev.com"}>
              hello@arfadev.com
            </Link>
          </p>
          <Link
            className={buttonVariants({ variant: "outline" })}
            href={"mailTo:hello@arfadev.com"}
          >
            Send Mail
          </Link>
        </div>

        <p className="flex col-span-4 col-start-8 items-center py-4 ">
          <hr className="border-input w-full mr-4" />
          OR
          <hr className="border-input w-full ml-4" />
        </p> */}

        <Image
          src={"/deal.jpg"}
          className="col-span-6 col-start-2 object-cover self-center justify-self-center"
          width={400}
          height={400}
          alt="statue"
        />

        <FormComponent className="col-span-4 col-start-8" />
      </div>
    </Section>
  );
}

export default ContactModule;
