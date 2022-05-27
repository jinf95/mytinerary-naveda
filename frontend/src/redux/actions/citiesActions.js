import axios from "axios"

const citiesActions = {

    obtenerCiudades: () =>{
        return(dispatch, getState) =>{
             axios.get(`http://localhost:4000/api/ciudades`)
             .then(res => dispatch({type:'fetch', payload: res.data.respuesta}))
    }
},

    obtenerCiudad: (id) =>{
        return(dispatch, getState) =>{
        dispatch({type:'obtenerCity', payload: {id} })
        }
    },

    filtro: (value) =>{
        return(dispatch, getState) =>{
        dispatch({type:'filtro', payload: {value} })
        }
    }
}

export default citiesActions