import ServiceCard, { ServiceCardProps } from "../components/card/ServiceCard";
import SectionTitle from "../components/typography/SectionTitle";

export default function Services({ className }: { className?: string }) {
  const serviceList: ServiceCardProps[] = [
    {
      color: "green",
      desc: "Develop high-quality mobile apps designed for optimal performance and exceptional user experience",
      logoSrc: "/services/mobile.png",
      title: "Mobile Apps",
    },
    {
      color: "purple",
      desc: "Intuitive and aesthetic UI/UX designs enhance interaction and user satisfaction.",
      logoSrc: "/services/uiux.svg",
      title: "UI/UX Design",
    },
    {
      color: "green",
      desc: "Automate and elevate your Discord community with our advanced, tailored bots.",
      logoSrc: "/services/bot.png",
      title: "Discord Bot",
    },
    {
      color: "purple",
      desc: "Create responsive and functional websites that attract and retain visitors.",
      logoSrc: "/services/website.svg",
      title: "Website",
    },
    {
      color: "green",
      desc: "Ensure every product is protected with top-notch security and reliable data protection.",
      logoSrc: "/services/security.svg",
      title: "Security Guarantee ",
    },
    {
      color: "purple",
      desc: "Achieve your technology and business goals with strategic and effective expert consultation.",
      logoSrc: "/services/consultant.png",
      title: "IT Consultant",
    },
  ];
  return (
    <div id="services" className={className}>
      <SectionTitle>Services</SectionTitle>
      <div className="grid grid-cols-3 gap-12">
        {...serviceList.map((service) => <ServiceCard {...service} />)}
      </div>
    </div>
  );
}
