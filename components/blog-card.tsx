import Image from "next/image";
import React from "react";

function BlogCard() {
  return (
    <a className="group sm:flex focus:outline-none" href="#">
      <div className="shrink-0 relative overflow-hidden h-[300px] sm:w-[300px] sm:h-[450px] w-full group">
        <Image
          className="size-full absolute top-0 start-0 object-cover group-hover:scale-110 transition-all duration-500 ease-in-out"
          src={"/deal.jpg"}
          alt="Blog Image"
          fill
        />
      </div>

      <div className="grow">
        <div className="p-4 flex flex-col h-full sm:p-6">
          <div className="mb-3">
            <p className="inline-flex items-center gap-1.5 py-1.5 px-3 text-xs bg-secondary text-secondary-foreground font-sans">
              Business
            </p>
          </div>
          <h3 className="text-lg sm:text-2xl font-bold font-serif hover:text-primary">
            Preline becomes an official Instagram Marketing Partner
          </h3>
          <p className="mt-2 font-sans">Great news we're eager to share.</p>

          <div className="mt-5 sm:mt-auto">
            {/* <!-- Avatar --> */}
            <div className="flex items-center">
              <div className="shrink-0 relative w-10 h-10">
                <Image
                  className="size-[46px] rounded-full object-cover"
                  src={"/chishti.jpg"}
                  alt="Avatar"
                  fill
                />
              </div>
              <div className="ms-2.5 sm:ms-4">
                <h4 className="font-semibold font-serif">Aaron Larsson</h4>
                <p className="text-xs font-sans">Feb 15, 2021</p>
              </div>
            </div>
            {/* <!-- End Avatar --> */}
          </div>
        </div>
      </div>
    </a>
  );
}

export default BlogCard;
