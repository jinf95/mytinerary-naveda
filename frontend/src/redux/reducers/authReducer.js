const inicialState = {
    usuario : {email:''},
}

const authReducer = (state = inicialState, action) => {
    switch(action.type){

        case 'usuario':
            return{
                ...state,
                usuario:action.payload
            }

            default:
                return state
                
    }
}

export default authReducer