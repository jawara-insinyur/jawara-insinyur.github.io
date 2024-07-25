import SectionTitle from "../components/typography/SectionTitle";

enum WeaponType {
  mobile = "Mobile",
  frontend = "Frontend",
  backend = "Backend",
  uiux = "UI/UX",
}

export default function OurWeapons({ className }: { className?: string }) {
  const weapons = {
    [WeaponType.mobile]: [
      {
        name: "Flutter",
        icon: "/logos/flutter.svg",
      },
    ],
    [WeaponType.frontend]: [
      {
        name: "React",
        icon: "/logos/react.svg",
      },
      {
        name: "Vue",
        icon: "/logos/vue.svg",
      },
      {
        name: "Tailwind",
        icon: "/logos/tailwind.svg",
      },
    ],
    [WeaponType.backend]: [
      {
        name: "Laravel",
        icon: "/logos/laravel.svg",
      },
      {
        name: "PostgreSQL",
        icon: "/logos/postgres.svg",
      },
      {
        name: "Python",
        icon: "/logos/python.svg",
      },
      {
        name: "Golang",
        icon: "/logos/go.svg",
      },
      {
        name: "Supabase",
        icon: "/logos/supabase.svg",
      },
      {
        name: "FastAPI",
        icon: "/logos/fastapi.svg",
      },
      {
        name: "NodeJS",
        icon: "/logos/nodejs.svg",
      },
      {
        name: "MySQL",
        icon: "/logos/mysql.svg",
      },
    ],
    [WeaponType.uiux]: [
      {
        name: "Figma",
        icon: "/logos/figma.svg",
      },
    ],
  };

  return (
    <div id="weapons" className={className}>
      <SectionTitle>Our Weapons</SectionTitle>

      <div className="flex flex-wrap justify-center gap-32">
        {Object.entries(weapons).map(([type, list]) => (
          <div className="flex flex-col items-center" key={type}>
            <h1 className="pb-12 text-2xl font-bold">{type}</h1>
            <div className={`grid-cols-${Math.min(list.length, 3)} grid gap-1`}>
              {list.map((weapon) => (
                <div
                  className="flex flex-col items-center gap-2.5"
                  key={weapon.name}
                >
                  <img src={weapon.icon} />
                  <h2 className="text-[16px]">{weapon.name}</h2>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
