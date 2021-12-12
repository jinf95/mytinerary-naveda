import axios from 'axios'

const authActions = {

    registrarUsuario : (nuevoUsuario) => {
        return async (dispatch, getState) => {
            try{
                const usuario = await axios.post('http://localhost:4000/api/signUp',{...nuevoUsuario})
                if(usuario.data.success && !usuario.data.error){
                localStorage.setItem('token', usuario.data.response.token)
                dispatch({type:'usuario', payload: {...nuevoUsuario}})
                }else{
                    console.log(usuario.data.error)
                }
            } catch(error){

            }
        }
    },

    iniciarSesion :(ingresarUsuario) =>{
        return async(dispatch, getState) => {
            try{
                const usuario = await axios.post('http://localhost:4000/api/signIn', {...ingresarUsuario})
                if(usuario.data.success && !usuario.data.error){
                    localStorage.setItem('token', usuario.data.response.token)
                dispatch({type:'usuario', payload: {email: usuario.data.response}})
                }else{
                    console.log(usuario.data.response)
                }
            }catch(error){

            }
        }
    }
}

export default authActions 