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
    },

    agregarComentario: (id, comentario, token) => {
        return async ()=> {
            // console.log(id, comentario, token)
            try {
                let response = await axios.put(`http://localhost:4000/api/itinerarios/comentarios/`+ id, {comentario, type:"agregarComentario"}, 
                {headers: {
                    Authorization: "Bearer " + token
                    }
                })
                console.log(response)
                if (response.data.success) 
                    return {success: true, response: response}
                
                else throw new Error()
            }catch(error){
                console.log(error)
            }
        }
    },

    editarComentario: (id, comentario, token) => {
        return async ()=> {
            try {
                let response = await axios.put(`http://localhost:4000/api/itinerarios/comentarios/`+ id, {comentario, type:"editarComentario"}, 
                {headers: {
                    Authorization: "Bearer " + token
                    }
                })
                if (response.data.success) 
                    return {success: true, response: response}
                
                    else throw new Error()
            }catch(error){
                console.log(error)
            }
        }
    },
    
    borrarComentario: (id, idComentario, token) => {
        return async ()=> {
            try {
                let response = await axios.put(`http://localhost:4000/api/itinerarios/comentarios/`+ id, {idComentario, type:"borrarComentario"},
                {headers: {
                    Authorization: "Bearer " + token
                    }
                })
                
                if (response.data.success) 
                    return {success: true}
                    
                else throw new Error()
            }catch(error){
                console.log(error)
            }
        }
    },

    likeIitinerario: (id, token) => {
        return async () => {
            try {
                const response = await axios.put(`http://localhost:4000/api/itinerarios/like/`+ id, 
                {headers: {
                    Authorization: "Bearer "+ token
                    }
                })
                return response
                
            }catch (error) {
                console.log(error)
            }
        }
    }
    
}

export default itinerariesActions