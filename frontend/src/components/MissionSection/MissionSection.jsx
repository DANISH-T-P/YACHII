// MissionSection.jsx
import React from "react";
import "./MissionSection.css";

const objectives = [
  {
    title: "Empower Communities",
    desc: "Develop technology that uplifts individuals and strengthens societal bonds.",
  },
  {
    title: "Enhance Human Connections",
    desc: "Build digital solutions that bring people closer, enabling deeper interactions.",
  },
  {
    title: "Drive Sustainable Innovation",
    desc: "Ensure responsible technological advancement that benefits humanity and the planet.",
  },
  {
    title: "Promote Inclusivity & Diversity",
    desc: "Design products that embrace diverse perspectives and create equitable opportunities.",
  },
  {
    title: "Create Prosperity",
    desc: "Support economic growth by developing innovations that generate long-term value.",
  },
];

const MissionSection = () => {
  return (
    <section id="about" className="mission-section">
      <div>
        {/* ================= MAIN HEADING ================= */}
        <div className="section-header" data-aos="fade-up">
          <h2 className="section-title">ABOUT</h2>
        </div>

        {/* ================= OUR MISSION ================= */}
        <div className="mission-intro" data-aos="fade-up">
          <h3 className="subsection-title">Our Mission</h3>
          <p className="intro-text">
            <span className="italic">
              "Building a peaceful and prosperous world”
            </span>{" "}
            through groundbreaking innovations that empower communities,
            strengthen human connections, and enrich lives globally.
          </p>
        </div>

        {/* ================= OUR OBJECTIVES ================= */}
        <div className="objectives-block">
          <div className="content-row">
            {/* Content */}
            <div className="content-col" data-aos="fade-up">
              <h3 className="subsection-title">Our Objectives</h3>{" "}
              {/* moved here */}
              <ul className="objective-list">
                {objectives.map((obj, i) => (
                  <li
                    className="objective-item"
                    key={i}
                    data-aos="fade-up"
                    data-aos-delay={i * 80}
                  >
                    <span className="icon" aria-hidden>
                      🌟
                    </span>
                    <div>
                      <h4>{obj.title}</h4>
                      <p>{obj.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Image */}
            <div className="content-col" data-aos="fade-up">
              <figure className="media-figure">
                <img
                  src="/images/objective.jpg"
                  alt="Objectives"
                  loading="lazy"
                />
              </figure>
            </div>
          </div>
        </div>

        {/* ================= OUR STORY ================= */}
        <div className="story-block">
          {/* Two Column Layout */}
          <div className="content-row">
            {/* Image */}
            <div className="content-col" data-aos="fade-up">
              <img
                src="/images/our-story.webp"
                alt="Our Story"
                loading="lazy"
              />
            </div>

            {/* Content */}
            <div className="content-col story-text" data-aos="fade-up">
              {/* Heading */}
              <h3 className="subsection-title" data-aos="fade-up">
                Our Story
              </h3>
              <p className="content-subtitle">Guided by our values</p>
              <p>
                Yachii was born from a simple yet powerful vision—technology
                should uplift, connect, and enrich lives. The name Yachii
                originates from our founder’s nickname and aligns beautifully
                with its Japanese meaning: <strong>"eight thousand blessings" or "eight
                wisdom."</strong> It embodies wisdom, abundance, and the infinite power
                of collaboration. Guided by these values, we are dedicated to
                developing transformative, sector-agnostic solutions that
                transform digital experiences. Its core offering is a
                next-generation social media platform reshaping online
                interactions and virtual shopping to a revolutionary gig worker
                hub redefining the blue- and grey-collar workforce.
                Through these advancements, Yachii empowers individuals and
                fosters prosperity on a global scale.
              </p>
              {/* <p><strong>Launching Soon!</strong></p> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
