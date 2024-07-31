import TheTeams from "./sections/TheTeams";
import OurPortfolio from "./sections/OurPortfolio";
import Services from "./sections/Services";
import Testimonials from "./sections/Testimonials";
import OurWeapons from "./sections/OurWeapons";
import Hero from "./sections/Hero";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BackgroundDora from "./components/Background";

export default function App() {
  return (
    <>
      <div className="relative">
        <BackgroundDora />
        <main className="container mx-auto">
          <Navbar />
          <Hero />
          <Services className="pt-32" />
          <OurWeapons className="pt-32" />
          <OurPortfolio className="pt-32" />
          <TheTeams className="pt-32" />
          <Testimonials className="pt-32" />
        </main>
        <Footer />
      </div>
    </>
  );
}
