import PortfolioCard, {
  PortfolioCardProps,
} from "../components/card/PortfolioCard";
import SectionTitle from "../components/typography/SectionTitle";
import { cn } from "../utils";

export default function OurPortfolio({ className }: { className?: string }) {
  const portfolioList: PortfolioCardProps[] = [
    {
      name: "HaloPUS",
      icon: "/images/portfolio/halopus.png",
    },
    {
      name: "Animo",
      icon: "/images/portfolio/animo.png",
    },
    {
      name: "JokiinAja",
      icon: "/images/portfolio/jokiinaja.png",
    },
    {
      name: "VentureIt",
      icon: "/images/portfolio/ventureit.png",
    },
  ];
  return (
    <div
      className={cn("my-[35px] flex flex-col items-center", className)}
      id="portfolio"
    >
      <SectionTitle>Our Portfolio</SectionTitle>
      <div className="grid w-full grid-cols-4 gap-5">
        {...portfolioList.map((portfolio) => <PortfolioCard {...portfolio} />)}
      </div>
    </div>
  );
}
