import React, { useState, useEffect } from 'react'
import { Card, Button, Carousel, Form, FloatingLabel } from 'react-bootstrap'
import activitiesActions from '../redux/actions/activitiesActions'
import { connect } from 'react-redux'

const Itinerary = (props) => {
    
    const [actividades, setActividades] = useState(null)
    

    const [display, setDisplay] = useState(false)
    const HandleDisplay = () => setDisplay(!display)

    useEffect(() => {

        props.fetchearActividades(props.itinerario._id)
            .then((respuesta) => {
                setActividades(respuesta)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])

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
                            <img src={"/assets/iconos/favorito.png"} alt="favorito" />
                            <p className="ms-3">{props.itinerario.likes} </p>
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
            {actividades.map((actividad) => {
                const imagen = `/assets/actividades/${actividad.src}`
                return (
                <Carousel.Item className="carrousel-item">                    
                <Card.Img className='img-carrousel' src={imagen} alt="First slide"/>
                  <h3 className='nombre-actividad'>{actividad.nombre} </h3>
                </Carousel.Item>             
               )
            }
            )}
              </Carousel>}
            {display &&
            <div className='comentario-contenedor'>
                <FloatingLabel controlId="floatingTextarea" label="Comments" className="mb-3">
              <Form.Control as="textarea" placeholder="Leave a comment here" />
            </FloatingLabel> 
            <Button>Submit</Button>
            </div>            
           
             }            
        </>
    )

}

// const mapStateToProps = (state) =>{
//     return {
//         // usuario : state.use
//     }
// }

const mapDispatchToProps = {

    fetchearActividades: activitiesActions.fetchearActividades

}

export default connect(null, mapDispatchToProps)(Itinerary)

