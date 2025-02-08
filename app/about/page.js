import React from "react";
import Link from "@node_modules/next/link";
import SkeletonLoader from "@components/SkeletonLoader";
import Image from "@node_modules/next/image";

/**
 * The About component renders the About Us page, which includes a hero section,
 * a section describing who we are, a section describing our mission and vision,
 * a section describing what we do, and a call to action.
 */
const About = () => {
  return (
    <div className="bg-[#f8fafc] text-[#333333] font-sans">
      {/* Hero Section */}
      <section className="text-white">
        <Image
          src="/images/purple.jpg"
          alt="Purple Background"
          className="h-[100px] md:h-[200px] bg-cover"
          width={1920}
          height={1080}
        />
        <div className="container mx-auto px-6 md:px-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-lg md:text-xl">
            Empowering businesses with cutting-edge digital solutions to thrive
            in the modern world.
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-12 px-6 md:px-12">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold mb-6 text-secondaryText">
            Who We Are
          </h2>
          <p className="text-lg leading-8">
            At <strong>Nethub</strong>, we specialize in crafting innovative
            digital solutions that empower businesses to excel in the digital
            era. From digital product management to website creation and SEO
            services, we are your trusted partner in achieving success online.
          </p>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="bg-white py-12 px-6 md:px-12">
        <div className="container mx-auto max-w-5xl grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-secondaryText">
              Our Mission
            </h2>
            <p className="text-lg leading-8">
              To empower businesses with cutting-edge digital solutions that
              drive growth, efficiency, and lasting success.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6 text-secondaryText">
              Our Vision
            </h2>
            <p className="text-lg leading-8">
              To become the leading provider of advanced digital systems that
              solve real-life problems, ensuring every client achieves their
              full potential in the digital world.
            </p>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-12 px-6 md:px-12">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold mb-6 text-secondaryText">
            What We Do
          </h2>
          <ul className="space-y-4 text-lg">
            <li>
              <strong>Digital Shelves:</strong> Showcase your products in a
              visually captivating and user-friendly online store.
            </li>
            <li>
              <strong>Website Creation & Management:</strong> Build and maintain
              a dynamic web presence tailored to your needs.
            </li>
            <li>
              <strong>SEO Services:</strong> Enhance your online visibility and
              attract the right audience with expert search engine optimization.
            </li>
          </ul>
        </div>
      </section>

      {/* Meet Our Team */}

      {/* Call to Action */}
      <section className="py-12 px-6 md:px-12 bg-primary text-white text-center">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">Ready to Work With Us?</h2>
          <p className="text-lg mb-8">
            Let’s build something amazing together. Contact us today to get
            started on your digital transformation journey.
          </p>
          <Link
            href="/contact"
            className="bg-background hover:bg-accent text-secondaryText px-4 py-2 font-bold rounded-lg"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
