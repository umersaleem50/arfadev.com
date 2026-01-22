const Column = ({ title, tagline }: { title: string; tagline: string }) => {
  return (
    <div className="lg:max-w-[20rem] space-y-3 text-center">
      <h3 className="text-accent-foreground text-xl font-serif font-semibold">
        {title}
      </h3>
      <hr className="border-accent-foreground/40" />
      <p className="text-accent-foreground text-sm font-sans">{tagline}</p>
    </div>
  );
};

function WhyChooseUs({ module }: any) {
  const { title = "", content = [] } = module;
  // md:-translate-y-1/2
  return (
    <section className="bg-none md:translate-y-1/4">
      <div className="max-w-[85rem] lg:py-24 md:py-16 sm:py-12 py-10 md:px-6 lg:px-0 lg:flex-row flex-col mx-auto bg-accent flex items-center shadow-md">
        <h2 className="md:text-3xl text-2xl font-serif lg:-rotate-90 md:mb-8 mb-6 lg:-mb-2 text-accent-foreground">
          {title}
        </h2>
        <div className="flex lg:gap-x-10 md:gap-x-6 md:flex-row flex-col gap-y-6 sm:gap-y-8 md:gap-y-0">
          {content.map((el: any, key: number) => {
            return <Column {...el} key={key} />;
          })}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
