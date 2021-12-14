const inicialState = {
    usuario : {nombre: null}
}

const authReducer = (state = inicialState, action) => {
    
    switch(action.type){

        case 'usuario':
            return{
                ...state,
                usuario:action.payload
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