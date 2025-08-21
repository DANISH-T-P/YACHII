import React from "react";
import ReadMore from "../ReadMore/ReadMore";

const ProductItem = ({ title, subtitle, description, extraDescription, image, reverse }) => (
  <div className={`product-row ${reverse ? "reverse-row" : ""}`}>
    {/* Left Column: Text */}
    <div className="product-col product-col-text" data-aos="fade-up">
      <h3>{title}</h3>
      {subtitle && <p className="product-subtitle text-muted fst-italic">{subtitle}</p>}
      <p className="text-muted">{description}</p>
      {extraDescription && (
        <p
          className="text-muted"
          dangerouslySetInnerHTML={{ __html: extraDescription }}
        />
      )}
      {/* <ReadMore>{description}</ReadMore> */}
    </div>

    {/* Right Column: Image */}
    <div className="product-col product-col-image" data-aos="fade-up">
      <img
        src={image}
        alt={title + " Feature"}
        className="img-fluid rounded-4"
        loading="lazy"
      />
    </div>
  </div>
);

export default ProductItem;
