import axios from 'axios'

const authActions = {

    registrarUsuario : (nuevoUsuario) => {
        return async (dispatch, getState) => {
            try{
                const usuario = await axios.post('http://localhost:4000/api/signUp',{...nuevoUsuario})
                if(usuario.data.success && !usuario.data.error){
                localStorage.setItem('token', usuario.data.response.token)
                dispatch({type:'usuario', payload:{email: usuario.data.response.nombre}})
                    
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
                console.log(ingresarUsuario)
                const usuario = await axios.post('http://localhost:4000/api/signIn', {...ingresarUsuario})
                if(usuario.data.success && !usuario.data.error){
                    console.log(usuario.data)
                    localStorage.setItem('token', usuario.data.response.token)
                dispatch({type:'usuario', payload: {email: usuario.data.response.email}})
                }else{
                    console.log(usuario.data.response)
                }
            }catch(error){

            }
        }
    },

    cerrarSesion:() => {
        return (dispatch, getState) => {
                localStorage.clear()
                dispatch({type: "cerrarSesion", payload: {}})            
        }
    },

    loguearConToken:(token) => {
        return async (dispatch,getState) => {
            try{
            const usuario = await axios.post('http://localhost:4000/api/signIn/token', {}, {
                headers:{
                    'Authorization':'Bearer '+token
                }
            })
            usuario.data.success && dispatch({type:'usuario', payload: {nombre: usuario.data.response.nombre} })
            }
            catch(error) {
                console.log(error)
            }
        }
    }

}

export default authActions 