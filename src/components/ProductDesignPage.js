import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/productDesign.css'

import img1 from '../assets/images/project3img/ecoMate.png'

const cards = [
  { 
    id: 1, 
    title: "ecoMate", 
    imgSrc: img1, 
    alt: "Card 1", 
    route: "/product-design/1",
    description: "A Haptic Learning Tool for Teaching Children Recycling Practices"
  },
];

const ProductDesign = () => {
  return (
    <div className='pd'>
      <div className="card-container">
        {cards.map(card => (
          <Link to={card.route} key={card.id} className="card-link">
            <div className="card">
              <div className="card-content">
                <p className="card-title">{card.title}</p>
                <p className="card-description">{card.description}</p>
              </div>
              <img className="card-image" src={card.imgSrc} alt={card.alt} />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductDesign;