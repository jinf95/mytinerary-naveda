import axios from 'axios'

const authActions = {

    registrarUsuario : (email, password) => {
        return async (dispatch, getState) => {
            try{
                const usuario = await axios.post('http://localhost:4000/api/signUp',{email,password})
                if(usuario.data.success && !usuario.data.error){
                dispatch({type:'usuario', payload: {email}})
                }else{
                    alert(usuario.data.error)
                }
            } catch(error){

            }
        }
    },

    iniciarSesion :(email, password) =>{
        return async(dispatch, getState) => {
            try{
                const usuario = await axios.post('http://localhost:4000/api/signIn', {email, password})
                if(usuario.data.success && !usuario.data.error){
                dispatch({type:'usuario', payload: {email: usuario.data.response}})
                }else{
                    alert(usuario.data.response)
                }
            }catch(error){

            }
        }
    }
}

export default authActions 