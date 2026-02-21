const Column = ({ title, tagline }: { title: string; tagline: string }) => {
  return (
    <div className="lg:max-w-[20rem] space-y-3 text-center">
      <h3 className="text-accent-foreground text-xl font-serif font-medium">
        {title}
      </h3>
      <hr className="border-accent-foreground/40" />
      <p className="text-accent-foreground text-sm font-sans">{tagline}</p>
    </div>
  );
};

export default Column;
