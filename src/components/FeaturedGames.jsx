import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'

import { featuredGamesImg } from '../constants/constants.js';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import '../extraCSS/FeaturedGames.css';// Import Swiper styles
import SwiperCore from 'swiper';

// Install Swiper modules
SwiperCore.use([Navigation, EffectCoverflow, Pagination]);

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

        <Swiper
          effect={ 'coverflow'}
          loop={true}
          grabCursor={ true }
          centeredSlides={ true }
          slidesPerView={'auto'}
          coverflowEffect={
            {
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5
            }
          }
          pagination={{ el: '.swiper-pagination', clickable: true }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          className="swiper-container"
        >
          {featuredGamesImg.map((featuredGame, index) => (
            <SwiperSlide key={index}>
              <div className="swiper-slide card">
                <img src={featuredGame.icon} className="card-img" alt={featuredGame.name} />
                <div className="card-body">
                  <h1 className="card-title">{featuredGame.name}</h1>
                  <p className="card-info">{featuredGame.description}</p>
                  <button className="card-btn">Play</button>
                </div>
              </div>
            </SwiperSlide>
          ))}

          <button className="swiper-button-prev"></button>
          <button className="swiper-button-next"></button>
        </Swiper>
      </div>
    </>
  );
}

export default FeaturedGames;
