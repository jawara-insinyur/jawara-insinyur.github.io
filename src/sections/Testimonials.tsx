import TestimonialCard, {
  TestimonialCardProps,
} from "../components/card/TestimonialCard";
import SectionTitle from "../components/typography/SectionTitle";
import { cn } from "../utils";

export default function Testimonials({ className }: { className?: string }) {
  const testimonialsList: TestimonialCardProps[] = [
    {
      color: "purple",
      comment: `"The UI/UX design of Jawir is exemplary, embodying the principles of user interface design with its intuitive layout and seamless navigation, providing users with a delightful and efficient experience that sets a new benchmark for excellence in digital design. As a UI/UX designer I'm really appreciated it, and hope them growth continuously."`,
      foto: "/images/testimonials/testi1.png",
      name: "Muhammad Rafli D.",
      title: "GoAT Developer",
    },
    {
      color: "green",
      comment: `"As a Flutter developer, I'm amazed by the user-friendly mobile app. The clean code documentation and insightful IT consultation have accelerated my learning, making it an invaluable educational resource. I highly recommend their services for fellow beginners seeking high-quality projects to kickstart their development journey."`,
      foto: "/images/testimonials/testi2.png",
      name: "Ayu Wanda Azalia",
      title: "Mealty Developer",
    },
    {
      color: "purple",
      comment: `"As a clean code enthusiast, I'm impressed with their professional and well-documented services. The mobile app and website are flawless, with advanced UI/UX designs that enhanced our digital presence. Their strong security measures and strategic consultation helped us achieve our goals. Highly recommended for top-notch IT solutions."`,
      foto: "/images/testimonials/testi3.png",
      name: "Fadilah Fahrul",
      title: "Clean Code Enthusiasm",
    },
  ];

  return (
    <div
      className={cn("my-[35px] flex flex-col items-center", className)}
      id="testimonials"
    >
      <SectionTitle>Testimonials</SectionTitle>
      <div className="grid w-full grid-cols-3 gap-6">
        {...testimonialsList.map((testimoni) => (
          <TestimonialCard {...testimoni} />
        ))}
      </div>
    </div>
  );
}
