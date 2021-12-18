import React from 'react'
import { Carousel } from 'react-bootstrap'

const Activities = (props) => {

  const actividades = props.actividades
  console.log(actividades)

    return (
       
      <>
      {actividades.map(actividad => {
        return (
           <Carousel className="actividades">
        <Carousel.Item>
          <img className="d-block w-100" src={actividad.src} alt="First slide"
          />
          <Carousel.Caption>
            <h3>{actividad.nombre} </h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
        )
      })        
      }
     
      </>
        
    )
}

const mapStateToProps = (state) =>{
  return{
    actividades : state.activitiesReducer.actividades
  }
}


export default connect(mapStateToProps, mapDispatchToProps) (Activities)