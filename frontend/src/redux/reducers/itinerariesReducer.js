const inicialState = {
    itinerarios:[]

}

const itinerariesReducer = (state = inicialState, action) =>{
    switch (action.type){
         case 'fetch':

                return {
                    ...state,
                    itinerarios: action.payload
                    
                }   
                          
        default: 
           return state

    }
}

export default itinerariesReducer