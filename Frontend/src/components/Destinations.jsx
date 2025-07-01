import React from "react";
import dubaiImg from "../assets/dubai.jpg";
import goaImg from "../assets/goa.jpg";
import manaliImg from "../assets/manali.jpg";
import parisImg from "../assets/paris.jpg";
import "../styles/Destinations.css";

const places = [
  {
    name: "Dubai, UAE",
    description: "Marvel at futuristic skyscrapers, luxury shopping, and vibrant nightlife in the heart of the desert.",
    tours: 3,
    image: dubaiImg,
  },
  {
    name: "Goa, India",
    description: "Relax on sun-kissed beaches, enjoy lively parties, and explore Portuguese heritage in this coastal paradise.",
    tours: 2,
    image: goaImg,
  },
  {
    name: "Manali, India",
    description: "Experience snow-capped mountains, adventure sports, and serene valleys in this Himalayan retreat.",
    tours: 4,
    image: manaliImg,
  },
  {
    name: "Paris, France",
    description: "Stroll through romantic streets, visit iconic landmarks, and savor world-class cuisine in the City of Light.",
    tours: 2,
    image: parisImg,
  },
];

const Destinations = () => {
  return (
    <section className="destination-section">
  <div className="destination-heading">
    <h1>Explore Our Top Destinations</h1>
    <p>Handpicked places to inspire your next adventure</p>
  </div>

  <div className="destination-grid">
    {places.map((place, index) => (
      <div className="destination-card" key={index}>
        <img src={place.image} alt={place.name} />
        <div className="tours-tag">{place.tours} tours</div>
        <div className="destination-overlay">
          <h2 className="destination-title">{place.name}</h2>
          <p className="destination-description">{place.description}</p>
          <a className="destination-button" href="#">View all tours</a>
        </div>
      </div>
    ))}
  </div>
</section>

  );
};

export default Destinations;
