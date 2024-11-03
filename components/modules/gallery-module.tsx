import dynamic from "next/dynamic";

const GallerySlider = dynamic(() => import("../gallery-slider"), {
  ssr: false,
});

function Gallery({ module }: any) {
  const { content = [] } = module;

  return (
    <section className="bg-primary/30 w-full h-full relative">
      <GallerySlider content={content} />
    </section>
  );
}

export default Gallery;
