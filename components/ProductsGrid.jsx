import { motion } from "framer-motion";
import ProductsCard from "./ProductsCard";
import { data } from "@app/utils/data";

const ProductsGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 rounded-md border border-gray-200 w-full p-2 md:p-6">
      {data.map((item, index) => (
        <motion.div
          key={index}
          className="w-full"
          initial={{ opacity: 0, y: 50 }} // Initial state (invisible and offset)
          whileInView={{ opacity: 1, y: 0 }} // Animate to full opacity and original position
          viewport={{ amount: 0.05 }}
          transition={{
            duration: 0.6, // Duration of the animation
            ease: "easeOut", // Smooth easing
            delay: index * 0.1, // Stagger the animations based on index
          }}
        >
          <ProductsCard
            image={item.image}
            title={item.title}
            description={item.description}
            link={item.link}
            ctaText={item.ctaText}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default ProductsGrid;
