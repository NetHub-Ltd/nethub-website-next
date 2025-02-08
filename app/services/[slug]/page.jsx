import { seoData } from "@app/utils/data";
import { notFound } from "next/navigation";
import WebsiteDesign from "@components/WebsiteDesign";
import SeoServices from "@components/SeoServices";
import AppDevelopment from "@components/AppDevelopment";
import MpesaIntegration from "@components/MpesaIntegration";

// import WebsiteDesign from "../components/WebsiteDesign";
// import SeoServices from "../components/SeoServices";
// import AppDevelopment from "../components/AppDevelopment";
// import MpesaIntegration from "../components/MpesaIntegration";

// Dynamic Metadata Setup
export async function generateMetadata(props) {
  const params = await props.params;
  const { slug } = params; // ✅ Destructuring fixed
  const seo = seoData[slug];
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
const DynamicServicePage = async props => {
  const params = await props.params;
  const seo = seoData[params.slug];
  if (!seo) {
    notFound();
  }

  // Conditional Rendering Based on the Component Defined in seoData
  const components = {
    WebsiteDesign,
    SeoServices,
    AppDevelopment,
    MpesaIntegration,
  };

  const ServiceComponent = components[seo.component];

  return ServiceComponent ? <ServiceComponent /> : <p>Service not found</p>;
};

export default DynamicServicePage;
