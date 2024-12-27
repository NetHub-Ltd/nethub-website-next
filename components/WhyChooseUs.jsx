const cardData = [
  {
    title: "Experienced Team",
    description:
      "Our team of skilled professionals will help take your business to the next level.",
    linkText: "Learn More",
    linkHref: "#",
  },
  {
    title: "Transparent Pricing",
    description: "No hidden fees—just clear, upfront pricing for our services.",
    linkText: "Learn More",
    linkHref: "#",
  },
  {
    title: "Proven Results",
    description:
      "We deliver measurable growth and success with our strategies.",
    linkText: "Learn More",
    linkHref: "#",
  },
  {
    title: "Tailored Solutions",
    description:
      "Get custom solutions that align with your unique business needs.",
    linkText: "Learn More",
    linkHref: "#",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="w-full p-4 mb-4 border border-gray-200">
      <div className="mb-8">
        <h3 className="font-bold text-primary mb-4">Why Choose Nethub?</h3>
        <p className="">
          Discover why Nethub is the trusted choice for businesses.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="flex border border-transparent hover:border-primary rounded-lg shadow-md hover:shadow-lg transition-shadow h-full"
          >
            <div className="bg-primary w-2 h-full rounded-l-lg"></div>
            <div className="p-6 flex flex-col justify-between">
              <h5 className="mb-2">{card.title}</h5>
              <p className="">{card.description}</p>
              <a href={card.linkHref} className="text-accent mt-4 inline-block">
                {card.linkText}
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
