import { useState } from "react";

const testimonialData = [
  {
    name: "Robin Kairuri",
    role: "CEO, Skillsboats",
    text: "Nethub delivered an exceptional website for our business. Their team is professional, responsive, and always ready to adapt to our needs. Highly recommend!",
  },
  {
    name: "Jane Smith",
    role: "Marketing Director, Acme Co.",
    text: "The web development team at Nethub transformed our online presence. The results were amazing, and we've seen a significant increase in our online engagement.",
  },
  {
    name: "Samuel Brown",
    role: "Product Manager, Tech Innovations",
    text: "Nethub's SEO expertise helped us climb to the top of search results. Our site now attracts more traffic and conversions than ever before!",
  },
  {
    name: "Duncan Kariuki",
    role: "CEO, MazeltovLTD",
    text: "We were impressed by the speed and quality of the work done by Nethub. The tailored solutions they provided aligned perfectly with our goals.",
  },
];

const Testimonials = () => {
  return (
    <section className="w-full p-4 md:p-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-primary ">Testimonials</h2>
        <div className="h-1 mt-1 mx-auto w-10 mb-4 bg-primary">
          {/* small bar */}
        </div>
        <p className="text-secondaryText">
          See how Nethub has helped businesses like yours achieve their goals.
        </p>
      </div>

      <div className="flex">
        {/* Left Bar */}

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-4 md:gap-6 w-full">
          {testimonialData.map((testimonial, index) => (
            <div
              key={index}
              className="bg-background rounded-lg shadow-md p-4 md:p-6 w-full md:w-[300px] flex flex-col border border-slate-200 justify-between"
              // style={{ minHeight: "350px" }}
            >
              {" "}
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              <div className="mb-2">
                <h4 className=" font-semibold text-xl">{testimonial.name}</h4>
                <p className="text-xs">{testimonial.role}</p>
              </div>
              <p className="mb-2 text-sm">{testimonial.text}</p>
              <div className="flex items-center gap-1"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
