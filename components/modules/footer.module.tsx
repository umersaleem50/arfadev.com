import Image from "next/image";
import React from "react";
import NewsLetterForm from "../newsletter.form";

function FooterModule() {
  return (
    <footer className="bg-foreground py-24 w-full">
      <div className="max-w-[85rem] mx-auto grid grid-cols-6">
        <div className="col-span-2 col-start-1">
          <Image src={"/logo.svg"} width={200} height={100} alt="logo" />
          <h3 className="text-2xl text-primary font-serif">
            We growing up your business with our services.
          </h3>
          <p className="text-sm text-muted font-sans">Arfa Developers, 2024</p>
        </div>
        <NewsLetterForm className="col-start-5 col-span-2" />
      </div>
    </footer>
  );
}

export default FooterModule;
