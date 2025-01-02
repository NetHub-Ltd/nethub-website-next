"use client";

import { ArrowRightIcon } from "@node_modules/@heroicons/react/24/outline";

import ProductsCard from "@components/ProductsCard";
import ProductsGrid from "@components/ProductsGrid";
import Image from "@node_modules/next/image";
import { data } from "./utils/data";
import Hero from "@components/Hero";
import Link from "@node_modules/next/link";
import WhyChooseUs from "@components/WhyChooseUs";
import Testimonials from "@components/Testimonials";
import ScrollButton from "@components/ScrollButton";
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
      {/* hero section */}

      <div
        className="flex  bg-white p-4  mb-4 md:mb-6 h-screen md:h-[400px] flex-col bg-cover bg-center justify-center"
        style={{ backgroundImage: 'url("/images/purple.jpg")' }}
      >
        <Hero />

        <Link
          href="#services"
          className="bg-accent mt-4 text-white font-bold  text-center md:text-2xl md:w-[200px] p-2 rounded-md"
        >
          <div className="flex items-center flex-row gap-1 justify-center">
            Get Started <ArrowRightIcon className=" h-6 w-6" />
          </div>
        </Link>
      </div>
      {/* who are we */}

      <div className="flex flex-col p-2 rounded-md  bg-white md:p-6 items-center justify-center ">
        <p className="text-center md:text-2xl">
          We focus on empowering businesses by offering digital solutions that
          help them grow and succeed in the modern marketplace.
        </p>
        <Link
          href="/about"
          className="bg-slate-500 text-white text-xl mt-4 rounded-md p-2"
        >
          <div className="flex items-center flex-row gap-1 justify-center">
            About Us <ArrowRightIcon className=" h-6 w-6" />
          </div>
        </Link>
      </div>

      {/* why choose us */}

      <section className="w-full h-5">{/* <WhyChooseUs /> */}</section>
      {/* service section */}
      <section className="bg-white mb-4 md:mb-6" id="services">
        <div className="w-full p-4 items-center">
          <div className="flex flex-col justify-center p-4 md:p-6">
            <h4 className="font-bold text-center text-primary">Our Services</h4>
            <div className="h-1 mt-1 mx-auto w-10 bg-primary">
              {/* small bar */}
            </div>
            <p className="mt-2 text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
              reiciendis alias. Impedit?
            </p>
          </div>
          <ProductsGrid />
        </div>
      </section>

      {/* testimonials */}
      <div className="bg-white mt-4">
        <Testimonials />
      </div>

      <ScrollButton />
    </div>
  );
};

export default Home;
