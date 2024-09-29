import React from "react";

function Banner({ title }: { title: string }) {
  return (
    <div className="py-3 bg-secondary">
      <p className="max-w-[85rem] mx-auto text-sm font-sans text-secondary-foreground text-center">
        {title}
      </p>
    </div>
  );
}

export default Banner;
