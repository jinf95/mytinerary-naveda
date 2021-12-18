const inicialState = {
    actividades : null
}

const actividadesReducer = (state = inicialState, action) => {
    switch (action.type){

        case 'fetchearActividades':
            return{
                ...state,
                actividades: action.payload
            }
            default:
                return state
            
    }
}

export default actividadesReducer