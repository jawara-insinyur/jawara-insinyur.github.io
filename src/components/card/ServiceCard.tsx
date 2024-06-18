export type ServiceCardProps = {
  logoSrc: string;
  title: string;
  desc: string;
  color: "purple" | "green";
};

function ServiceCard({ logoSrc, title, desc, color }: ServiceCardProps) {
  return (
    <div className="flex">
      <div className="mr-6">
        <div
          className={`${color === "green" ? "bg-[#11E9E3]" : "bg-[#86239B]"} flex aspect-square h-14 w-14 items-center justify-center rounded-xl p-2 opacity-80`}
        >
          <img
            src={logoSrc}
            alt={title}
            className="aspect-square object-cover"
          />
        </div>
      </div>
      <div>
        <p>{title}</p>
        <p className="text-[#ADB2B1]">{desc}</p>
      </div>
    </div>
  );
}

export default ServiceCard;
