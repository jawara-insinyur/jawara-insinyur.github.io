import PortfolioCard, {
  PortfolioCardProps,
} from "../components/card/PortfolioCard";
import SectionTitle from "../components/typography/SectionTitle";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { cn } from "../utils";

export default function OurPortfolio({ className }: { className?: string }) {
  const settings = {
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    infinite: false,
    swipeToSlide: true,
    swipe: true,
  };

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
    {
      name: "ReDis",
      icon: "/images/portfolio/redis.png",
    },
    {
      name: "Toefl PENS",
      icon: "/images/portfolio/toefl_pens.png",
    },
    {
      name: "KonsulDoc",
      icon: "/images/portfolio/konsuldoc.png",
    },
    {
      name: "Free Market",
      icon: "/images/portfolio/free_market.png",
    },
  ];

  return (
    <div className={cn("my-[35px]", className)} id="portfolio">
      <SectionTitle>Our Portfolio</SectionTitle>
      <Slider {...settings} className="pb-8">
        {portfolioList.map((portfolio) => (
          <PortfolioCard {...portfolio} />
        ))}
      </Slider>
    </div>
  );
}
