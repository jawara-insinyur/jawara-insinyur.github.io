import TeamsCard, { TeamsCardProps } from "../components/card/TeamsCard";
import SectionTitle from "../components/typography/SectionTitle";
import { cn } from "../utils";

export default function TheTeams({ className }: { className?: string }) {
  const teamData: TeamsCardProps[] = [
    {
      foto: "/images/teams/tsaqif.png",
      nama: (
        <>
          Muhammad <span>Tsaqif</span> Mukhayyar
        </>
      ),
    },
    {
      foto: "/images/teams/jhiven.png",
      nama: (
        <>
          <span>Jhiven</span> Agnar Fuad
        </>
      ),
    },
    {
      foto: "/images/teams/wisnu.png",
      nama: (
        <>
          <span>Wisnu</span> Agung Pambudi
        </>
      ),
    },
    {
      foto: "/images/teams/faris.png",
      nama: (
        <>
          <span>Faris</span> Muhammad Abdullah
        </>
      ),
    },
    {
      foto: "/images/teams/bagas.png",
      nama: (
        <>
          <span>Bagas</span> Dwi Anggoro
        </>
      ),
    },
    {
      foto: "/images/teams/kimi.png",
      nama: (
        <>
          Muhamad <span>Kimi</span> Reza
        </>
      ),
    },
    {
      foto: "/images/teams/andrey.png",
      nama: (
        <>
          <span>Andrey</span> Pratama Gunawan
        </>
      ),
    },
    {
      foto: "/images/teams/sigit.png",
      nama: (
        <>
          <span>Sigit</span> Adi Pangestu
        </>
      ),
    },
  ];

  return (
    <div className={cn("items-center", className)} id="teams">
      <SectionTitle>The Teams</SectionTitle>
      <div className="grid-col grid grid-cols-4 gap-5 px-24">
        {...teamData.map((team) => <TeamsCard {...team} />)}
      </div>
    </div>
  );
}
