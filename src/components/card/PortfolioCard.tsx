export type PortfolioCardProps = {
  name: string;
  icon: string;
};

export default function PortfolioCard({ name, icon }: PortfolioCardProps) {
  return (
    <div className="rounded-gradient p-10 backdrop-blur">
      <div className="flex flex-col items-center justify-center">
        <h2 className="mb-8 text-[32px] font-bold">{name}</h2>
        <img
          className="aspect-square size-48 object-contain"
          src={icon}
          alt={name}
        />
      </div>
    </div>
  );
}
