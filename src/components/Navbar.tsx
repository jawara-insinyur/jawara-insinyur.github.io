export type NavbarProps = {
  name: string;
  path: string;
};

export default function Navbar() {
  const navItems: NavbarProps[] = [
    {
      name: "Services",
      path: "#services",
    },
    {
      name: "Our Weapons",
      path: "#weapons",
    },
    {
      name: "Our Portfolio",
      path: "#portfolio",
    },
    {
      name: "The Teams",
      path: "#teams",
    },
    {
      name: "Testimonials",
      path: "#testimonials",
    },
  ];

  return (
    <nav className="fixed left-0 z-10 w-full backdrop-blur">
      <div className="container mx-auto flex h-[100px] items-center justify-center">
        <a href="#hero" className="flex flex-1 items-center gap-2">
          <img src="/logos/jawir.svg" className="h-8 w-8" />
          <h1 className="text-xl font-bold"> CV. Jawir</h1>
        </a>
        <div className="flex flex-[2] justify-center gap-8">
          {...navItems.map((items) => <a href={items.path}>{items.name} </a>)}
        </div>
        <div className="flex flex-1 justify-end">
          <a
            href="https://github.com/jawara-insinyur"
            className="rounded-full px-6 py-2 font-bold text-[#16D6D1] outline outline-[#16D6D1]"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
