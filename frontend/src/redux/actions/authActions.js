import axios from 'axios'

const authActions = {

    registrarUsuario : (nuevoUsuario) => {
        return async (dispatch, getState) => {
            try{
                const usuario = await axios.post('http://localhost:4000/api/signUp',{...nuevoUsuario})
                if(usuario.data.success && !usuario.data.error){
                localStorage.setItem('token', usuario.data.response.token)
              
                dispatch({type:'usuario', payload:{nombre:usuario.data.response.nombre, url: usuario.data.response.url}})
                }else{
                    console.log(usuario.data.response)

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
            
                dispatch({type:'usuario', payload: {nombre:usuario.data.response.nombre, url: usuario.data.response.url}})
                console.log(usuario.data.response._doc)
                }else{
                    console.log(usuario.data.response)
                }
            }catch(error){
               console.log(error)
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
                    'Authorization':'Bearer '+ token
                }
            })
                 usuario.data.success && dispatch({type:'usuario', payload: {token, nombre: usuario.data.response.nombre, url: usuario.data.response.url}})
                 console.log(usuario.data.response)

                }
            
            catch(error) {
            }
        }
    }

}

export default authActions 