import React from "react";
import MainTitle from "./MainTitle";
import ProductItem from "./ProductItem";
import "./ProductFeature.css";

// Array of products
const products = [
  {
    id: "ychat",
    title: "YChat",
    subtitle:
      "Nurturing relationships by bringing friends and family closer through shared virtual experiences",
    description:
      "As technology advances, families and friends are becoming increasingly isolated and disconnected. But with our innovative approach, we're determined to change that. We're not just developing another app—we are building a transformative space that fosters genuine relationships, enriches lives, and bridges the gaps that technology has unintentionally created.",
    extraDescription: "Stay tuned— <strong>Launching Soon!</strong>",
    image: "/images/Prodcut-1.png",
  },
  {
    id: "ywork",
    title: "YWork",
    subtitle: "Empowering the gig economy with a reliable service platform",
    description:
      "YWork is a platform designed to empower the blue- and grey-collar gig economy by seamlessly connecting service providers with clients seeking convenient, flexible, and reliable services. As demand for on-demand, trusted labor grows, YWork offers an organized, transparent, and user-friendly ecosystem that fosters direct access, fair opportunity, and dignity of work. Our mission is to transform this traditionally informal sector into a structured marketplace where both workers and consumers benefit from trust, efficiency, and accessibility.",
    extraDescription: "Stay tuned— <strong>Launching Soon!</strong>",
    image: "/images/Product-2.jpg",
  },
];

const ProductFeature = () => {
  return (
    <section id="products" className="product-feature section">
      {/* Main Title Section */}
      <MainTitle title="PRODUCTS" description="" />

      <div className="container product-list">
        {products.map((product, index) => (
          <div id={product.id} key={index}>
            <ProductItem
              title={product.title}
              subtitle={product.subtitle}
              description={product.description}
              extraDescription={product.extraDescription}
              image={product.image}
              reverse={index % 2 !== 0}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductFeature;
