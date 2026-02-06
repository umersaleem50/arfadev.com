import CustomImage from "../custom-image";

function ArticleCover({ cover, title }: { cover: any; title: string }) {
  return (
    <div className="relative h-[70vh] min-h-[400px] w-full px-2 overflow-hidden">
      <div className="w-full h-[40vw]">
        {cover && (
          <CustomImage
            alt={cover?.alt}
            className="!object-cover"
            imageOBJ={cover}
          />
        )}
      </div>
      <h1 className="font-serif lg:leading-normal text-3xl md:text-5xl lg:text-6xl font-bold text-white text-left z-10 col-start-1 col-span-8 pt-8 pb-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] lg:w-auto">
        {title}
      </h1>
      <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center"></div>
    </div>
  );
}

export default ArticleCover;
