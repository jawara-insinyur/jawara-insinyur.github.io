import PortfolioCard, {
  PortfolioCardProps,
} from "../components/card/PortfolioCard";
import SectionTitle from "../components/typography/SectionTitle";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { cn } from "../utils";
import ModalPortfolio from "../components/Modal";
import { Dialog, DialogTrigger } from "../components/dialog";

export default function OurPortfolio({ className }: { className?: string }) {
  const settings: Settings = {
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    infinite: true,
    swipeToSlide: true,
    swipe: true,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
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
      desc: `Aplikasi ini bertujuan untuk membantu UMKM memasarkan produk mereka secara digital dan menjangkau pelanggan yang lebih luas. Platform ini akan bekerja seperti Google Maps, namun khusus untuk UMKM, dengan beberapa fitur tambahan seperti: 
      1. Pemetaan UMKM 
      2. Promosi 
      3. Daily Mission 
      4. Ulasan Pelanggan`,
      overviewImg: [
        "/images/overview-app/ventureit/login.png",
        "/images/overview-app/ventureit/home.png",
        "/images/overview-app/ventureit/detail.png",
        "/images/overview-app/ventureit/mission.png",
      ],
      developers: [
        {
          path: "/images/developers/nunu27.svg",
          href: "https://github.com/Nunu27",
        },
        {
          path: "/images/developers/jiven.svg",
          href: "https://github.com/jhiven",
        },
        {
          path: "/images/developers/freezer9.svg",
          href: "https://github.com/Freezer9",
        },
      ],
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
        {portfolioList.map((portfolio, index) => (
          <Dialog key={index}>
            <DialogTrigger asChild>
              <a className="hover:cursor-pointer">
                <PortfolioCard {...portfolio} key={portfolio.name} />
              </a>
            </DialogTrigger>
            <ModalPortfolio props={portfolio} />
          </Dialog>
        ))}
      </Slider>
    </div>
  );
}
