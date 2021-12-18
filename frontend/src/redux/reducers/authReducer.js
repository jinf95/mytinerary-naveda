const inicialState = {
    usuario : ""
}

const authReducer = (state = inicialState, action) => {
    switch(action.type){

        case 'usuario':
            return{
                ...state,
                usuario: action.payload
             
            }
        
        case 'cerrarSesion':
            localStorage.removeItem('token')
           
            return{
                ...state,
                usuario: null
    
            } 
            default:
                return state
        
    
    }
}

export default authReducer