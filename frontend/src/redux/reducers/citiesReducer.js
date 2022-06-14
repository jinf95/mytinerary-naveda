const inicialState = {
    ciudades: [],
    ciudad: {},
    auxiliar: [],
}

const citiesReducer = (state = inicialState, action) => {

    switch (action.type) {
        case 'fetch':
            return {
                ...state,
                ciudades: action.payload,
                auxiliar: action.payload
            }

         case 'obtenerCity':
                const ciudad = state.ciudades.find(ciudad => ciudad._id === action.payload.id)

                return {    
                    ...state,
                    ciudad: ciudad
                }

        case 'filtro':

            const filtrados = state.ciudades.filter(ciudad => ciudad.nombre.toLowerCase().startsWith(action.payload.value.toLowerCase().trim()))

            return{
                ...state,
                auxiliar: filtrados
            }
           
            default:
                return state
    }

}

export default citiesReducer