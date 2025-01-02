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
    <section className="w-full p-4 mb-4 bg-white">
      <div className="mb-8">
        <h4 className="font-bold mb-4 p-4 text-center text-primary text-pretty">
          Why Choose Us?
        </h4>
        <p className="text-center">
          Discover why Nethub is the trusted choice for businesses.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="flex border border-gray-300 hover:border-primary rounded-lg shadow-md hover:shadow-lg transition-shadow h-full"
          >
            <div className="p-6  rounded-md flex flex-col justify-between">
              <h5 className="mb-1 text-xl font-bold text-primary">
                {card.title}
              </h5>
              <p className="text-sm">{card.description}</p>
              {/* <a
                href={card.linkHref}
                className="text-accent mt-2  inline-block"
              >
                {card.linkText}
              </a> */}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
