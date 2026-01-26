function Banner({ title }: { title: string }) {
  return (
    <div className="py-3 bg-gradient-to-r from-primary to-accent">
      <p className="max-w-[85rem] mx-auto text-xs md:text-sm font-sans text-background text-center">
        {title}
      </p>
    </div>
  );
}

export default Banner;
