import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

export type NavbarProps = {
  name: string;
  path: string;
};

export default function Navbar() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

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
      <div className="container mx-auto flex h-[100px] items-center justify-between">
        <a href="#hero" className="inline-flex items-center gap-2">
          <img src="/logos/jawir.svg" className="h-8 w-8" />
          <h1 className="text-xl font-bold"> CV. Jawir</h1>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden w-full gap-10 md:w-auto lg:flex">
          <div className="inline-flex items-center gap-8">
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

        {/* Mobile Navigation Icon */}
        <div onClick={handleNav} className="block cursor-pointer lg:hidden">
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>

        {/* Mobile Navigation Menu */}
        <ul
          className={
            nav
              ? "fixed right-0 top-[100px] flex h-full w-fit flex-col duration-500 ease-in-out md:hidden"
              : "fixed bottom-0 right-[-100%] top-[100px] flex w-fit flex-col duration-500 ease-in-out"
          }
        >
          {/* Mobile Navigation Items */}
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.path}
              className="bg-[#191919] p-4 duration-300 hover:cursor-pointer hover:text-[#86239B]"
            >
              {item.name}
            </a>
          ))}
        </ul>
      </div>
    </nav>
  );
}
