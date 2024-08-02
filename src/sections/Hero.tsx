import clsx from "clsx";

export default function Hero({ className }: { className?: string }) {
  return (
    <div
      id="hero"
      className={clsx(
        className,
        "flex h-svh flex-col items-center justify-center gap-[80px]",
      )}
    >
      <div className="flex flex-col items-center justify-center gap-[8px] text-center tracking-[.10em]">
        <h1 className="text-5xl font-bold">
          Jawaranya <span className="text-[#16F0F4]">Insinyur</span>
        </h1>
        <p className="text-lg font-light">
          <span className="font-normal text-[#16F0F4]">Agile </span>
          People From PENS
        </p>
        <p className="text-lg font-normal text-[#16F0F4]">"Insyaallah"</p>
      </div>

      <button className="flex items-center gap-2 rounded-[15px] bg-[#86239B] px-[30px] py-[15px]">
        Let's Tour <img src="/logos/right.svg"></img>
      </button>
    </div>
  );
}
