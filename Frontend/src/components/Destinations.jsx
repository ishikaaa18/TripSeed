import React from 'react';
import '../styles/Destinations.css';

import goaImg from '../assets/goa.jpg';
import manaliImg from '../assets/manali.jpg';
import dubaiImg from '../assets/dubai.jpg';
import parisImg from '../assets/paris.jpg'; 

const destinations = [
  {
    name: 'Goa',
    image: goaImg,
    description: 'Relax on the sandy beaches!',
  },
  {
    name: 'Manali',
    image: manaliImg,
    description: 'Explore the snow-capped Himalayas!',
  },
  {
    name: 'Dubai',
    image: dubaiImg,
    description: 'Experience luxury and skyscrapers!',
  },
  {
    name: 'Paris',
    image: parisImg,
    description: 'Feel the romance in the city of lights!',
  },
];

const Destinations = () => {
  return (
    <section className="destinations">
      <h2>Top Destinations</h2>
      <div className="cards">
        {destinations.map((place, index) => (
          <div className="card" key={index}>
            <img src={place.image} alt={place.name} />
            <h3>{place.name}</h3>
            <p>{place.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Destinations;
