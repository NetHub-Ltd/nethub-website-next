"use client";

import ProductsCard from "@components/ProductsCard";
import ProductsGrid from "@components/ProductsGrid";
import Image from "@node_modules/next/image";
import { data } from "./utils/data";
import Hero from "@components/Hero";
import Link from "@node_modules/next/link";
import WhyChooseUs from "@components/WhyChooseUs";
import Testimonials from "@components/Testimonials";
const Home = () => {
  const Card = data.map((d) => (
    <ProductsCard
      key={d.title}
      title={d.title}
      description={d.description}
      image={d.image}
      link={d.link}
      ctaText={d.ctaText}
    />
  ));
  return (
    <div className="flex flex-col min-h-screen">
      {/* hereo section */}

      <div
        className="flex  bg-white p-4 md:p-6 h-[300px] md:h-[400px] mt-[60px] flex-col bg-cover bg-center justify-center"
        style={{ backgroundImage: 'url("/images/purple.jpg")' }}
      >
        <Hero />
        <button className="bg-accent mt-4 text-white py-2 px-2 w-[150px] md:w-[200px] rounded-md">
          Get Started
        </button>
      </div>
      {/* who are we */}

      <div className="flex flex-col-reverse md:flex-row mb-4 justify-evenly border border-gray-200 hover:border-primary rounded-md">
        <div className="w-full md:w-1/2 flex items-center justify-center p-4">
          <div>
            <h3 className="font-bold text-primary mt-4">Who Are We</h3>
            <p className="mt-2">
              We focus on empowering businesses by offering digital solutions
              that help them grow and succeed in the modern marketplace.
            </p>
            <Link href="/about" className="mt-4 text-accent">
              Read More
            </Link>
          </div>
        </div>

        <div className="max-h-[350px] w-full  md:w-1/2 overflow-hidden">
          <Image
            src="/images/whoarewe-2.jpg"
            alt="whoarewe"
            width={500} // This can be any number that represents the aspect ratio
            height={500} // Adjust according to your desired aspect ratio
            layout="responsive" // This will ensure the image takes up 100% of the container width
          />
        </div>
      </div>

      {/* why choose us */}

      <section className="w-full">
        <WhyChooseUs />
      </section>

      {/* service section */}
      <div className="w-full p-4 bg-white">
        <ProductsGrid />
      </div>

      {/* testimonials */}
      <div>
        <Testimonials />
      </div>
    </div>
  );
};

export default Home;
