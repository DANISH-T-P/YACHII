import React from "react";
import "./VideoBanner.css";

const VideoBanner = () => {
  return (
    <section id="home" className="video-banner">
      <video
        autoPlay
        loop
        muted
        playsInline
        disablePictureInPicture
        preload="auto"
        poster="/images/banner.png"
        className="video-banner__video"
      >
        <source src="/video/Trim.webm" type="video/webm" />
        <source src="/video/Trim.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Optional overlay */}
      <div className="video-banner__overlay"></div>

      {/* Optional centered content */}
      <div className="video-banner__content">
        <h1>Welcome to Our Site</h1>
        <p>Experience excellence in every frame</p>
      </div>
    </section>
  );
};

export default VideoBanner;
