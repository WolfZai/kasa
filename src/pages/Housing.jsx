import React, { useState, useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import Carousel from '../components/common/Carousel';
import Tag from '../components/common/Tag';
import Rating from '../components/common/Rating';
import Collapse from '../components/common/Collapse';
import housingsData from '../assets/data/housings.json';

const Housing = () => {
  const { id } = useParams();
  const [housing, setHousing] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulation d'un chargement de données
    setTimeout(() => {
      const foundHousing = housingsData.find(item => item.id === id);
      setHousing(foundHousing);
      setIsLoading(false);
    }, 500);
  }, [id]);

  if (isLoading) {
    return <div className="housing__loading">Chargement...</div>;
  }

  if (!housing) {
    return <Navigate to="/404" />;
  }

  return (
    <div className="housing">
      <Carousel pictures={housing.pictures} />
      
      <div className="housing__content">
        <div className="housing__header">
          <div className="housing__info">
            <h1 className="housing__title">{housing.title}</h1>
            <p className="housing__location">{housing.location}</p>
            <div className="housing__tags">
              {housing.tags.map((tag, index) => (
                <Tag key={index} label={tag} />
              ))}
            </div>
          </div>
          
          <div className="housing__host">
            <div className="housing__host-info">
              <p className="housing__host-name">{housing.host.name}</p>
              <img className="housing__host-img" src={housing.host.picture} alt={housing.host.name} />
            </div>
            <Rating score={parseInt(housing.rating)} />
          </div>
        </div>
        
        <div className="housing__details">
          <Collapse title="Description" content={housing.description} />
          <Collapse title="Équipements" content={housing.equipments} />
        </div>
      </div>
    </div>
  );
};

export default Housing;