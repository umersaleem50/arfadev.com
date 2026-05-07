import Image from "next/image";

export default function AnimatedCards() {
  return (
    <div className="flex min-h-[250px] w-full relative overflow-hidden transition-all duration-500">
      <Image
        src={"/assets/website1.jpg"}
        width={240}
        height={400}
        alt="landing page"
        className="w-60 h-[400px] bg-primary absolute top-10 left-10 z-10 group-hover:-top-40 shadow transition-all duration-500"
      />

      <Image
        src={"/assets/website2.jpg"}
        width={240}
        height={400}
        alt="landing page"
        className="w-48 h-[400px] bg-secondary absolute bottom-10 right-10 z-2 group-hover:-bottom-60 transition-all duration-700 brightness-75"
      />
    </div>
  );
}
