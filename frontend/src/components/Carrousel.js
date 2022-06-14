import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import { EffectCoverflow } from "swiper";
import citiesActions from "../redux/actions/citiesActions";

import "swiper/swiper.min.css";
import "swiper/swiper-bundle.min.css";

import "swiper/modules/pagination/pagination.min.css";
import "swiper/modules/navigation/navigation.min.css";
import "swiper/modules/scrollbar/scrollbar.min.css";
import "swiper/modules/autoplay/autoplay.min.css";
import "swiper/modules/effect-coverflow/effect-coverflow.min.css";
import Loader from "../elements/Loader";

const Carrousel = ({fetchCiudades,ciudades}) => {
  
  const [cities, setCities] = useState([]);

  useEffect(() => {
    fetchCiudades(ciudades)
    setCities(ciudades)
  }, [ciudades, fetchCiudades]);

  return (
   
    <div className="carousel-cont">
      <h2 className="titulo-carrousel">POPULAR MYTINERARIES</h2>
       <Swiper
        className="swiper"
        modules={[EffectCoverflow]}
        effect="coverflow"
        loop="true"
        preloadImages="true"
        slidesPerView={3}
        spaceBetween={30}
        centeredSlides={false}
        >
        {cities.length > 0 ? (
          cities.map((ciudad) => (
            <SwiperSlide key={ciudad.id}>
              <img
                className="img-carousel"
                src={`./assets/ciudades/${ciudad.imagen}`}
                alt={ciudad.nombre}
              />
              <h4 className="city-carousel">{ciudad.nombre}</h4>
            </SwiperSlide>
          ))
        ) : (
          <Loader />
        )}
      </Swiper>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { ciudades: state.citiesReducer.ciudades }
}

const mapDispatchToProps = {
    fetchCiudades: citiesActions.obtenerCiudades     
}

export default connect(mapStateToProps,mapDispatchToProps)(Carrousel);
