import axios from "axios";

const activitiesActions = {

    fetchearActividades : (id) => {
        return async (dispatch, getState) => {
            const response = await axios.get(`http://localhost:4000/api/actividades/itinerarios/`+ id)
            if(response.data.length > 0){
                dispatch({type: 'fetchActividades', payload: response.data})
            return response.data
            }else{
                dispatch({type: 'fetchActividades', payload: null})
            }
        }
    }
}

export default activitiesActions