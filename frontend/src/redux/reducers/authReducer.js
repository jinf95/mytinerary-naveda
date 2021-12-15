const inicialState = {
    usuario : {nombre: null}
}

const authReducer = (state = inicialState, action) => {
    console.log(action.payload)
    switch(action.type){

        case 'usuario':
            return{
                ...state,
                usuario: action.payload
                // token: action.payload.token, 
                // nombre: action.payload.firstName,
                // src: action.payload.src,
                // _id: action.payload._id
            }
        
        case 'cerrarSesion':
            localStorage.removeItem('token')
            localStorage.removeItem('nombre')
            localStorage.removeItem('url')

            return{
                ...state,
                usuario: null
    
            } 
            default:
                return state
        
    
    }
}

export default authReducer