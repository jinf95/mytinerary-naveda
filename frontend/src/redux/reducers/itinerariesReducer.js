const inicialState = {
    itinerarios: null

}

const itinerariesReducer = (state = inicialState, action) =>{
    switch (action.type){
        case 'fetchItineraries':

                return {
                    ...state,
                    itinerarios: action.payload
                    
                }   
                          
        default: 
           return state

    }
}

export default itinerariesReducer