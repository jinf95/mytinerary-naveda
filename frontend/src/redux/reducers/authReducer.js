const inicialState = {
    usuario : ""
}

const authReducer = (state = inicialState, action) => {
    console.log(action.payload)
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