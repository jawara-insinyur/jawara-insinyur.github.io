export type TestimonialCardProps = {
  comment: string;
  name: string;
  foto: string;
  title: string;
  color: "green" | "purple";
};

export default function TestimonialCard({
  comment,
  foto,
  name,
  title,
  color,
}: TestimonialCardProps) {
  return (
    <div
      className={`${color === "green" ? "bg-[#11E9E3]" : "bg-[#9324AC]"} flex flex-col rounded-3xl bg-opacity-15 p-6 shadow-lg backdrop-blur`}
    >
      <div className="mb-7 mt-8 flex items-end justify-start">
        <div className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-full bg-[#3D544D]">
          <img
            src="/images/testimonials/petikdua.png"
            alt="petikdua"
            className="h-5 w-5 object-fill"
          />
        </div>
      </div>

      <p className="mb-2 text-left font-normal text-white">{comment}</p>
      <div className="mb-8 mt-7 flex items-center gap-6">
        <img
          src={foto}
          alt={name}
          className="h-15 w-15 rounded-full object-cover"
        />
        <div className="flex flex-col items-start">
          <span className="text-lg font-medium text-white">{name}</span>
          <span className="text-sm font-normal text-[#ADB2B1]">{title}</span>
        </div>
      </div>
    </div>
  );
}
