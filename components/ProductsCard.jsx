import { motion } from "framer-motion";
import Image from "@node_modules/next/image";

const ProductsCard = ({ image, title, description, link, ctaText }) => {
  return (
    <div className="relative group bg-white hover:bg-primary/5  rounded-xl border border-gray-200 shadow-sm transition-all duration-300 transform hover:scale-102 hover:shadow-lg hover:border-blue-500">
      <div className="w-full h-[200px] overflow-hidden">
        <Image
          className="object-cover rounded-t-md rounded-md"
          src={image}
          alt={title}
          width={500} // This can be any number that represents the aspect ratio
          height={150} // Adjust according to your desired aspect ratio
          layout="responsive" // This will ensure the image takes up 100% of the container width
        />
      </div>
      <div className="p-6 py-6 flex flex-col ">
        <h3 className="font-bold text-2xl mb-4 text-primary">{title}</h3>
        <p className="mb-4 leading-relaxed text-gray-600">{description}</p>

        <button
          type="button"
          onClick={() => (window.location.href = link)}
          className="bg-accent mb-4 text-xl hover:bg-accent/90 text-white font-semibold py-2 px-4 rounded"
        >
          {ctaText}
        </button>
      </div>
    </div>
  );
};

export default ProductsCard;
