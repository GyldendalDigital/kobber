type TextCollectionProps = {
  title: string;
  description: string;
};

export function TextCollection({ title, description }: TextCollectionProps) {
  return (
    <div className="w-full md:w-[857px] gap-7 grid">
      <h1 className="text-text/color/primary/display-s text-[48px]">{title}</h1>
      <p className="text-text/color/primary/title-m leading-[33.6px] w-[60ch]  text-[18px] ">{description}</p>
    </div>
  );
}
