import axios from "axios";

const itinerariesActions = {
    
    fetchearItinerarios: (id) =>{
        return async (dispatch, getState) =>{
           const response = await axios.get(`http://localhost:4000/api/itinerarios/ciudades/`+ id)
            if(response.data.length > 0) {
               dispatch({type:'fetchItineraries', payload : response.data})
            }else{
                dispatch({type:'fetchItineraries', payload : null})
            }
                        
        }
        
    }
    
}

export default itinerariesActions