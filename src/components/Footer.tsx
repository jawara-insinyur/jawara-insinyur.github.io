export default function Footer() {
  const footerItems = [
    {
      title: "Services",
      items: ["Investors", "Features"],
    },
    {
      title: "Our Portfolio",
      items: ["Buy Project", "Buy License"],
    },
    {
      title: "Testimonials",
      items: ["Documentation", "Affiliate Program"],
    },
    {
      title: "FAQs",
      items: ["Contact Us", "Help Center"],
    },
  ];

  return (
    <div className="mt-32 bg-[#283430] bg-opacity-25 py-5 backdrop-blur-xl">
      <div className="container mx-auto flex flex-col gap-32">
        <div className="flex justify-between">
          <div className="flex flex-col gap-2">
            <div className="flex flex-1 items-center gap-2">
              <img src="/logos/jawir.svg" className="h-8 w-8" />
              <h1 className="text-xl font-bold">Jawaranya Insinyur</h1>
            </div>
            <p className="text-sm font-light">
              Discover the power of our agile programmer
            </p>
          </div>
          <div className="flex gap-[40px]">
            {...footerItems.map(({ title, items }) => (
              <div>
                <h1 className="mb-3 text-sm font-bold">{title}</h1>
                <div className="flex flex-col space-y-1 text-xs font-extralight">
                  {...items.map((item) => <a href="#">{item}</a>)}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-between text-sm text-[#ADB2B1]">
          <span>Copyright © 2024 Jawir. All Rights Reserved</span>
          <span>This page uses cookies. See cookies details here</span>
        </div>
      </div>
    </div>
  );
}
