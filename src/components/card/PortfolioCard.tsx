type DeveloperProps = {
  path: string;
  href: string;
};

export type PortfolioCardProps = {
  name: string;
  icon: string;
  overviewImg?: string[];
  developers?: DeveloperProps[];
  desc?: string;
};

export default function PortfolioCard({ name, icon }: PortfolioCardProps) {
  return (
    <div className="rounded-gradient m-4 h-auto w-auto p-12 backdrop-blur">
      <div className="flex flex-col items-center justify-center">
        <h2 className="mb-8 text-[32px] font-bold">{name}</h2>
        <img
          className="aspect-square w-full object-contain"
          src={icon}
          alt={name}
        />
      </div>
    </div>
  );
}
