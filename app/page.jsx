"use client";

import ProductsCard from "@components/ProductsCard";
import ProductsGrid from "@components/ProductsGrid";
import Image from "@node_modules/next/image";
import { data } from "./utils/data";
import Hero from "@components/Hero";

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

      <div className="flex  bg-white rounded-md my-2 h-[300px] md:h-[400px] mt-[80px] flex-col px-2 md:px-6 justify-center">
        <Hero />
        {/* <h1 className=" max-w-3/4 text-primary">
          Inspiration, <br className="hidden md:block" /> Inovation and Growth
        </h1>
        <p className=" transition-all text-gradient mt-4  md:w-[75%]">
          Here at NetHub we ensure we give you the neccesary tools to grow your
          business.
        </p> */}
      </div>
      {/* service section */}
      <div>
        <ProductsGrid />
      </div>
    </div>
  );
};

export default Home;
