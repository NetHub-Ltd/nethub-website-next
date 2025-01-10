// import { seoData } from "../seoData";
import { seoData } from "@app/utils/data";
import { notFound } from "next/navigation";
// import WebsiteDesign from "../components/WebsiteDesign";
// import SeoServices from "../components/SeoServices";
// import AppDevelopment from "../components/AppDevelopment";
// import MpesaIntegration from "../components/MpesaIntegration";

// Dynamic Metadata Setup
export async function generateMetadata({ params }) {
  const seo = seoData[params.slug];
  if (!seo) {
    return notFound();
  }

  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    openGraph: {
      title: seo.title,
      description: seo.description,
      images: [seo.ogImage],
    },
  };
}

// Dynamic Page Content Based on Slug
const DynamicServicePage = ({ params }) => {
  const { slug } = params; // ✅ Destructuring fixed
  const seo = seoData[slug];
  if (!seo) {
    return notFound();
  }
  return (
    <div>
      <h5>{seo.title}</h5>
      <p>{seo.description}</p>
    </div>
  );
};

export default DynamicServicePage;
