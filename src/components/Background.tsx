import { useEffect, useState } from "react";

export default function BackgroundDora() {
  const [scrollY, setScrollY] = useState(0);
  const maxHeight = document.body.offsetHeight;
  const vh = Math.max(
    document.documentElement.clientHeight || 0,
    window.innerHeight || 0,
  );
  const doraHeight = scrollY + (scrollY / maxHeight) * vh;

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className="background absolute -z-10 w-full overflow-hidden"
      style={{
        height: doraHeight,
      }}
    >
      <img
        src="/logos/dora-blue.svg"
        className="absolute h-full w-full object-cover opacity-50"
        style={{
          height: maxHeight,
        }}
      />
      <img
        src="/logos/dora-purple.svg"
        className="absolute h-full w-full object-cover opacity-50"
        style={{
          height: maxHeight,
        }}
      />
    </div>
  );
}
