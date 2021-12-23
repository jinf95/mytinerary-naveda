import React, { useState, useEffect } from 'react'
import { Card, Button, Carousel} from 'react-bootstrap'
import activitiesActions from '../redux/actions/activitiesActions'
import itinerariesActions from '../redux/actions/itinerariesActions'
import Comments from './Comments'
import { connect } from 'react-redux'
import Swal from 'sweetalert2'


const Itinerary = (props) => {
    console.log(props.itinerario.likes)
    const token = localStorage.getItem('token')

    const [actividades, setActividades] = useState(null)
    
    const [display, setDisplay] = useState(false)
    const HandleDisplay = () => setDisplay(!display)

    const [iconoLike, seticonoLike] = useState(true) 
    const [likeItinerarios, setlikeItinerarios] = useState(props.itinerario.likes)

    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      const likeItinerario = async () =>{
        seticonoLike(false)
        if(!token){
            Toast.fire({
                icon: 'error',
                title: "You need log for to interact"
            }) 
        }else {
            let response = await props.likeItinerario(token,props.itinerario._id, props.usuario._id)
            setlikeItinerarios(response)
        }
        seticonoLike(true)
    }

    useEffect(() => {

        props.fetchearActividades(props.itinerario._id)
            .then((respuesta) => {
                setActividades(respuesta)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])
    let likes = likeItinerarios.includes(props.usuario && props.usuario._id) ? "❤️" : "🤍"

    return (
        <>

            <Card className="card-itinerary mb-0 text-center">
                <Card.Header className="titulo-itinerario">{props.itinerario.titulo} </Card.Header>
                <Card.Body className="body-itinerary">
                    <div className="celebrity-fondo">
                        <img className="imagen-celebrity" src={`/assets/celebridades/${props.itinerario.imagen}`} alt={props.itinerario.publicador} />
                        <Card.Text>
                            {props.itinerario.publicador}
                        </Card.Text>
                    </div>
                    <div className="div-card">
                        <div className="d-flex">
                            <p className="mb-0">PRICE: </p>
                            <img className="money ms-2" src={"/assets/iconos/money.png"} alt="money" />
                        </div>
                        <p className="duration">DURATION: {props.itinerario.duracion}</p>
                        <div className="favorito">
                        <button id="boton-like" onClick={(iconoLike ? likeItinerario : null)}>
                            <p className = "like"> {likes}</p></button>
                         <p>{likeItinerarios.length}</p>                  
                        </div>
                    </div>
                    <div className="hashtag-container">
                        <p className="hashtag">{props.itinerario.hashtag}</p>
                    </div>
                </Card.Body>
            </Card>
            <Button onClick={HandleDisplay} className="boton-itinerario">{display ? 'View less' : 'View more'} </Button>
            {(display && actividades)
            && <Carousel className="actividades">
            {actividades.map((actividad, index) => {
                const imagen = `/assets/actividades/${actividad.src}`
                return (
                <Carousel.Item key={index} className="carrousel-item">                    
                <Card.Img className='img-carrousel' src={imagen} alt="First slide"/>
                  <h3 className='nombre-actividad'>{actividad.nombre} </h3>
                </Carousel.Item>             
               )
            }
            )}
              </Carousel>}
            {display &&
            <Comments comentario = {props.itinerario.comentarios} idItinerario = {props.itinerario._id} />          
             }            
        </>
    )

}

const mapStateToProps = (state) =>{
    return {
        usuario : state.authReducer.usuario,
       itinerarios: state.itinerariesReducer.itinerarios

    }
}

const mapDispatchToProps = {

    fetchearActividades: activitiesActions.fetchearActividades,
    likeItinerario: itinerariesActions.likeIitinerario

}

export default connect(mapStateToProps, mapDispatchToProps)(Itinerary)

