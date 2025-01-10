"use client";

const Services = () => {
  return (
    <div className="min-h-screen py-12 px-2 lg:px-4">
      {/* SEO Meta Tags */}
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Our Services | Nethub</title>
        <meta
          name="description"
          content="At Nethub, we offer top-tier services including Website Design, SEO Optimization, App Development, and MPesa Integration. Let us help you build a successful digital presence."
        />
        <meta
          name="keywords"
          content="website design, SEO optimization, app development, MPesa integration, digital solutions"
        />
        <meta name="author" content="Nethub" />
        <meta property="og:title" content="Our Services | Nethub" />
        <meta
          property="og:description"
          content="Explore our services including Website Design, SEO Optimization, App Development, and MPesa Integration at Nethub."
        />
        <meta property="og:image" content="/images/hero-bg.jpg" />
        <meta property="og:url" content="https://www.nethub.com/services" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Our Services | Nethub" />
        <meta
          name="twitter:description"
          content="Explore our services including Website Design, SEO Optimization, App Development, and MPesa Integration at Nethub."
        />
        <meta name="twitter:image" content="/images/hero-bg.jpg" />
      </head>

      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-primary mb-4">
          Our Professional Services
        </h1>
        <p className="text-lg text-secondaryText max-w-2xl mx-auto">
          At Nethub, we provide top-tier digital solutions that help businesses
          grow online. Explore our range of services designed to boost your
          presence and operations.
        </p>
      </div>

      {/* Services List */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Service 1: Website Design */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 ease-in-out">
          <h3 className="text-2xl font-semibold  mb-4">Website Design</h3>
          <p className="text-gray-600 mb-6">
            We offer professional website design services that capture your
            brand's essence and create a stunning online presence.
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li className="text-sm">Responsive Design</li>
            <li className="text-sm">Custom Designs</li>
            <li className="text-sm">SEO Optimized</li>
            <li className="text-sm">User-Centric UI/UX</li>
          </ul>
          <div className="mt-6 text-center">
            <a
              href="/services/website-design"
              className="inline-block py-2 px-6 bg-accent text-white rounded-md hover:bg-blue-700 transition duration-200"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Service 2: SEO Optimization */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 ease-in-out">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            SEO Optimization
          </h3>
          <p className="text-gray-600 mb-6">
            Boost your website's visibility with our expert SEO services that
            help you rank higher on search engines.
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li className="text-sm">On-Page SEO</li>
            <li className="text-sm">Off-Page SEO</li>
            <li className="text-sm">Keyword Research</li>
            <li className="text-sm">Content Optimization</li>
          </ul>
          <div className="mt-6 text-center">
            <a
              href="/services/seo-services"
              className="inline-block py-2 px-6 bg-accent text-white rounded-md hover:bg-blue-700 transition duration-200"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Service 3: App Development */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 ease-in-out">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            App Development
          </h3>
          <p className="text-gray-600 mb-6">
            We build custom mobile and web applications tailored to your
            business needs, enhancing your operational efficiency.
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li className="text-sm">Custom App Development</li>
            <li className="text-sm">Cross-Platform Support</li>
            <li className="text-sm">Scalable Solutions</li>
            <li className="text-sm">API Integration</li>
          </ul>
          <div className="mt-6 text-center">
            <a
              href="/services/app-development"
              className="inline-block py-2 px-6 bg-accent text-white rounded-md hover:bg-blue-700 transition duration-200"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Service 4: MPesa Integration */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 ease-in-out">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            MPesa Integration
          </h3>
          <p className="text-gray-600 mb-6">
            Seamlessly integrate MPesa into your website or app for secure, fast
            payments and efficient transactions.
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li className="text-sm">Lipa Na MPesa Integration</li>
            <li className="text-sm">Payment Gateway Setup</li>
            <li className="text-sm">Secure Transactions</li>
            <li className="text-sm">Quick Setup</li>
          </ul>
          <div className="mt-6 text-center">
            <a
              href="/services/mpesa-integration"
              className="inline-block py-2 px-6 bg-accent text-white rounded-md hover:bg-blue-700 transition duration-200"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="mt-16 text-center">
        <h2 className="text-3xl font-bold text-primary mb-6">
          Why Choose Nethub?
        </h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-4">
          At Nethub, we prioritize your business success. Our services are
          tailored to meet your needs, with a focus on customer satisfaction,
          scalability, and security. Let’s work together to bring your business
          vision to life.
        </p>
      </div>
    </div>
  );
};

export default Services;
