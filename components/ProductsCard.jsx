import { motion } from "framer-motion";
import Image from "@node_modules/next/image";

const ProductsCard = ({ image, title, description, link, ctaText }) => {
  return (
    <motion.div
      className="border border-transparent w-full mb-4 md:w-[300px] shadow-md hover:shadow-lg hover:text-primary  transition-all hover:border-primary overflow-hidden bg-white rounded-md"
      initial={{ opacity: 0, y: 50 }} // Start with 0 opacity and below the viewport
      animate={{ opacity: 1, y: 0 }} // Fade in and slide up to the final position
      transition={{ duration: 0.6, ease: "easeOut" }} // Smooth transition
    >
      <div className="w-full">
        <Image
          className="object-cover rounded-t-md"
          src={image}
          alt={title}
          width={500} // This can be any number that represents the aspect ratio
          height={150} // Adjust according to your desired aspect ratio
          layout="responsive" // This will ensure the image takes up 100% of the container width
        />
      </div>

      {/* Content Section */}
      <div className="p-4 flex flex-col">
        <h3 className="font-bold text-2xl">{title}</h3>
        <p className="mt-1 text-gray-600">{description}</p>

        <button
          type="button"
          onClick={() => (window.location.href = link)}
          className="bg-accent mt-4 hover:bg-accent/90 text-white font-semibold py-2 px-4 rounded"
        >
          {ctaText}
        </button>
      </div>
    </motion.div>
  );
};

export default ProductsCard;
