import React, { useState, useEffect } from "react";
import activitiesActions from "../redux/actions/activitiesActions";
import itinerariesActions from "../redux/actions/itinerariesActions";
import Comments from "./Comments";
import { connect } from "react-redux";
import Swal from "sweetalert2";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import { EffectCards } from "swiper";
import "swiper/swiper.min.css";
import "swiper/swiper-bundle.min.css";
import "swiper/modules/pagination/pagination.min.css";
import "swiper/modules/navigation/navigation.min.css";
import "swiper/modules/scrollbar/scrollbar.min.css";
import "swiper/modules/autoplay/autoplay.min.css";
import "swiper/modules/effect-cards/effect-cards.min.css";

const Itinerary = (props) => {
  const token = localStorage.getItem("token");

  const [actividades, setActividades] = useState(null);

  const [display, setDisplay] = useState(false);
  const HandleDisplay = () => setDisplay(!display);

  const [iconoLike, seticonoLike] = useState(true);
  const [likeItinerarios, setlikeItinerarios] = useState(
    props.itinerario.likes
  );

  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });
  const likeItinerario = async () => {
    seticonoLike(false);
    if (!token) {
      Toast.fire({
        icon: "error",
        title: "You need to be logged in to like",
      });
    } else {
      let response = await props.likeItinerario(
        token,
        props.itinerario._id,
        props.usuario._id
      );
      setlikeItinerarios(response);
    }
    seticonoLike(true);
  };

  useEffect(() => {
    props
      .fetchearActividades(props.itinerario._id)
      .then((respuesta) => {
        setActividades(respuesta);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [props]);
  let likes = likeItinerarios?.includes(props.usuario && props.usuario._id)
    ? "❤️"
    : "🤍";

  return (
    <>
      <div className="card-itinerary">
        <div className="titulo-itinerario">{props.itinerario.titulo}</div>
        <div className="body-itinerary">
          <div className="celebrity-fondo">
            <img
              className="imagen-celebrity"
              src={`/assets/celebridades/${props.itinerario.imagen}`}
              alt={props.itinerario.publicador}
            />
            <h4>{props.itinerario.publicador}</h4>
          </div>
          <div className="items-container">
            <div className="d-flex">
              <p className="mb-0">Price: </p>
              <img
                className="money ms-2"
                src={"/assets/iconos/money.png"}
                alt="money"
              />
            </div>
            <p className="duration">Duration: {props.itinerario.duracion}</p>
            <div className="favorito">
              <button
                className="boton-like"
                onClick={iconoLike ? likeItinerario : null}
              >
                <p> {likes}</p>
              </button>
              <p>{likeItinerarios.length}</p>
            </div>
          </div>
          {/* <div className="hashtag-container"> */}
          <p className="hashtag">{props.itinerario.hashtag}</p>
          {/* </div> */}
        </div>
      </div>
      <button onClick={HandleDisplay} className="boton-itinerario">
        {display ? "View less" : "View more"}{" "}
      </button>
      <div className="div-actividades">
        {display && actividades && (
          <Swiper
            className="swiper-itinerario"
            modules={[EffectCards]}
            effect="cards"
            loop="true"
            preloadImages="true"
            centeredSlides={true}
          >
            {actividades.map((actividad, index) => {
              const imagen = `/assets/actividades/${actividad.src}`;
              return (
                <SwiperSlide key={index} className="slide">
                  <img
                    className="img-act"
                    src={imagen}
                    alt={actividad.nombre}
                  />
                  <div className="nombre-act-container">
                    <h4 className="nombre-act">{actividad.nombre}</h4>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        )}
        {display && (
          <Comments
            comentario={props.itinerario.comentarios}
            idItinerario={props.itinerario._id}
          />
        )}
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    usuario: state.authReducer.usuario,
    itinerarios: state.itinerariesReducer.itinerarios,
  };
};

const mapDispatchToProps = {
  fetchearActividades: activitiesActions.fetchearActividades,
  likeItinerario: itinerariesActions.likeIitinerario,
};

export default connect(mapStateToProps, mapDispatchToProps)(Itinerary);
