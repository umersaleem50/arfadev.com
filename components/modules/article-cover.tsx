function ArticleCover({ cover, title }: { cover: any; title: string }) {
  return (
    <div className="h-[80vh] min-h-[400px] w-full overflow-hidden p-4 relative">
      <div className="rounded-md w-full h-full overflow-hidden relative bg-gradient-to-r from-primary to-accent">
        {/* {cover && (
          <CustomImage
            alt={cover?.alt}
            className="!object-cover rounded-md overflow-hidden"
            imageOBJ={cover}
          />
        )} */}
        <h1 className="font-serif lg:leading-normal text-3xl md:text-5xl lg:text-6xl font-light text-white text-left z-10 col-start-1 col-span-8 pt-8 pb-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] lg:w-auto">
          {title}
        </h1>
      </div>
    </div>
  );
}

export default ArticleCover;
