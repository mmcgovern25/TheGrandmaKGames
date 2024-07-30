import React from 'react';
import '../extraCSS/FeaturedGames.css';
import { featuredGamesImg } from '../constants/constants';

const FeaturedGames = () => {
  return (
    <>
      <div className="mt-24 section__container destination__container" id="Destinations" data-aos="fade-up">
        <div className="section__header">
          <div>
            <h2 className="section__title" data-aos="fade-in">Explore Top Destinations</h2>
            <p className="section__subtitle" data-aos="fade-in">
              Explore your dream places around the world. Here you can find your perfect destination.
            </p>
          </div>
        </div>

        <div className="swiper-container">
          <div className="swiper-wrapper">
            {featuredGamesImg.map((featuredGame, index) => (
              <div className="swiper-slide card" key={index}>
                <img src={featuredGame.icon} className="card-img" alt={featuredGame.name} />
                <div className="card-body">
                  <h1 className="card-title">{featuredGame.name}</h1>
                  <p className="card-info">{featuredGame.description}</p>
                  <button
                    className="card-btn"
                  >
                    Play
                  </button>
                </div>
              </div>
            ))}
          </div>

          <button className="swiper-button-prev"></button>
          <button className="swiper-button-next"></button>
        </div>

        <script src="https://cdn.jsdelivr.net/npm/swiper/swiper-bundle.min.js"></script>
        <script src="explore.js"></script>
      </div>
    </>
  );
}

export default FeaturedGames;
