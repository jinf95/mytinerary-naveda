import axios from "axios";

const itinerariesActions = {
    
    fetchearItinerarios: (id) =>{
        return(dispatch, getState) =>{
            axios.get(`http://localhost:4000/api/itinerarios/ciudades/`+ id)
            .then(res => dispatch({type:'fetch', payload : res.data}))
        }
        
    }
    
}

export default itinerariesActions