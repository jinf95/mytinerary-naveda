import axios from 'axios'

const authActions = {

    registrarUsuario : (nuevoUsuario) => {
        return async (dispatch, getState) => {
            try{
                const usuario = await axios.post('http://localhost:4000/api/signUp',{...nuevoUsuario})
                if(usuario.data.success && !usuario.data.error){       
                localStorage.setItem('token', usuario.data.response.token)    
                dispatch({type:'usuario', payload: usuario.data.response})
                }else{
                    console.log(usuario.data.response)

                }                                  
            } catch(error){
                
            }
        }
    },

    iniciarSesion :(email, contraseña) =>{
        return async(dispatch, getState) => {
            try{
                const usuario = await axios.post('http://localhost:4000/api/signIn', {email, contraseña})
                if(usuario.data.success && !usuario.data.error){           
                localStorage.setItem('token', usuario.data.response.token)
                dispatch({type:'usuario', payload: usuario.data.response._doc})
                console.log(usuario.data.response._doc)
                }else{
                    console.log(usuario.data.error)
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
            let usuario = await axios.get('http://localhost:4000/api/token',{
                headers:{
                    Authorization: 'Bearer '+ token
                }
            })
            console.log(usuario.data)
                 dispatch({type:'usuario', payload: usuario.data})
                 console.log(usuario.data.response)

                }
            
            catch(error) {
                return dispatch({ type: 'cerrarSesion' })

            }
        }
    }

}

export default authActions 