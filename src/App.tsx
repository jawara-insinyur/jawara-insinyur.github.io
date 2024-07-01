import TheTeams from "./sections/TheTeams";
import OurPortfolio from "./sections/OurPortfolio";
import Services from "./sections/Services";
import Testimonials from "./sections/Testimonials";
import OurWeapons from "./sections/OurWeapons";

export default function App() {
  return (
    <>
      <main className="container mx-auto">
        <Services className="mt-32" />
        <OurWeapons className="mt-32" />
        <OurPortfolio className="mt-32" />
        <TheTeams className="mt-32" />
        <Testimonials className="mt-32" />
      </main>
    </>
  );
}
