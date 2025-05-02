import React, { useState, useEffect } from 'react';
import Banner from '../components/common/Banner';
import Gallery from '../components/common/Gallery';
import bannerImg from '../assets/images/banner_img.png';
import housingsData from '../assets/data/housings.json';

const Home = () => {
  const [housings, setHousings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulation d'un chargement de données
    setTimeout(() => {
      setHousings(housingsData);
      setIsLoading(false);
    }, 500);
  }, []);

  return (
    <div className="home">
      <Banner 
        image={bannerImg} 
        title="Chez vous, partout et ailleurs"
      />
      
      {isLoading ? (
        <div className="home__loading">Chargement...</div>
      ) : (
        <Gallery housings={housings} />
      )}
    </div>
  );
};

export default Home;