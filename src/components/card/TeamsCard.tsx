import { ReactNode } from "react";

export type TeamsCardProps = {
  foto: string;
  nama: ReactNode;
};

export default function TeamsCard({ foto, nama }: TeamsCardProps) {
  return (
    <div className="rounded-gradient overflow-hidden backdrop-blur">
      <div className="flex h-full flex-col">
        <img
          src={foto}
          className="mx-auto h-80 object-contain pt-4 saturate-0 duration-500 hover:saturate-100"
        />
        <div className="flex flex-1 items-center bg-gradient-to-l from-[#11E9E3]/15 to-[#9324AC]/15 px-6 py-3">
          <p className="w-full text-wrap text-center text-lg font-bold">
            {nama}
          </p>
        </div>
      </div>
    </div>
  );
}
