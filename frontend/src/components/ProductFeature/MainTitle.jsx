import React from "react";

const MainTitle = ({ title, description }) => (
  <div className="container section-title text-center mb-4" data-aos="fade-up">
    <h2>{title}</h2>
    <p className="text-muted fst-italic">{description}</p>
  </div>
);

export default MainTitle;
