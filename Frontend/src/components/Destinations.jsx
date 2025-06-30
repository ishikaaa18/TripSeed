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
    description: 'Relax on the sandy beaches with vibrant nightlife, seafood, and stunning sunsets. Ideal for both peace and party lovers.',
    price: 'From ₹7,999',
    duration: '3 Nights / 4 Days'
  },
  {
    name: 'Manali',
    image: manaliImg,
    description: 'Explore the snow-capped Himalayas, river rafting, and beautiful valleys. A perfect escape to the mountains.',
    price: 'From ₹9,499',
    duration: '4 Nights / 5 Days'
  },
  {
    name: 'Dubai',
    image: dubaiImg,
    description: 'Luxury shopping, modern architecture, desert safari, and Arabian culture await you in this dynamic city.',
    price: 'From ₹24,999',
    duration: '5 Nights / 6 Days'
  },
  {
    name: 'Paris',
    image: parisImg,
    description: 'Feel the romance in the City of Lights with the Eiffel Tower, museums, and cafes. A dreamy international getaway.',
    price: 'From ₹49,999',
    duration: '6 Nights / 7 Days'
  },
];

const Destinations = () => {
  const repeatedDestinations = [...destinations, ...destinations]; // repeat for infinite scroll effect

  return (
    <section className="destinations">
      <h2>Top Destinations</h2>
      <div className="cards">
        {repeatedDestinations.map((place, index) => (
          <div className="card" key={index}>
            <img src={place.image} alt={place.name} />
            <h3>{place.name}</h3>
            <p>{place.description}</p>
            <p className="trip-info">
              <strong>{place.duration}</strong> &nbsp;|&nbsp; <span>{place.price}</span>
            </p>
            <button className="book-now">Book Now</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Destinations;
