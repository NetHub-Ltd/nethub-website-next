import { useState } from "react";

const testimonialData = [
  {
    name: "John Doe",
    role: "CEO, Example Corp",
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
    name: "Emma Wilson",
    role: "Founder, Eco Solutions",
    text: "We were impressed by the speed and quality of the work done by Nethub. The tailored solutions they provided aligned perfectly with our goals.",
  },
];

const Testimonials = () => {
  return (
    <section className="w-full py-12 px-4 md:px-12 lg:px-20">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-primary mb-4">
          What Our Clients Say
        </h2>
        <p className="text-gray-600">
          See how Nethub has helped businesses like yours achieve their goals.
        </p>
      </div>

      <div className="flex">
        {/* Left Bar */}

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 w-full">
          {testimonialData.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-4 md:p-6 flex flex-col justify-between"
              style={{ minHeight: "350px" }}
            >
              {" "}
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              <p className="mb-4">{testimonial.text}</p>
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 rounded-full bg-gray-300"></div>
                <div>
                  <h3 className="font-semibold ">{testimonial.name}</h3>
                  <p className="">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
