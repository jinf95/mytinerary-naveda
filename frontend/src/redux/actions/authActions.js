import axios from 'axios'
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



const authActions = {
    
    registrarUsuario : (nuevoUsuario) => {
        return async (dispatch, getState) => {
            try{
                const usuario = await axios.post('http://localhost:4000/api/signUp',{...nuevoUsuario})
                if(usuario.data.success && !usuario.data.error){       
                localStorage.setItem('token', usuario.data.response.token)    
                dispatch({type:'usuario', payload: usuario.data.response})
                    return usuario.data
                }else{
                    return usuario.data
                }                                  
            } catch(error){
                console.log(error)
            }
        }
    },

    iniciarSesion :(email, contraseña) =>{
        return async(dispatch, getState) => {
            try{
                const usuario = await axios.post('http://localhost:4000/api/signIn', {email, contraseña})
                // console.log(usuario.data.response);
                if(usuario.data.success && !usuario.data.error){           
                localStorage.setItem('token', usuario.data.response.token)
                dispatch({type:'usuario', payload: usuario.data.response}) 
                toast.success("See you next time!", {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    draggable: true,
                    progress: undefined,
                  })
                return usuario.data
                }else{
                 return usuario.data
                }
            }catch(error){
               console.log(error)
            }
        }
    },

    cerrarSesion:() => {
        return (dispatch, getState) => {
            try{
                localStorage.clear()
                dispatch({type: "cerrarSesion", payload: {}})
                toast.success("See you next time!", {
                    position: "top-right",
                    autoClose: 1000,
                    hideProgressBar: false,
                    draggable: true,
                    progress: undefined,
                  })
                  
            }catch(err){
                console.log(err);
            }
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
                 dispatch({type:'usuario', payload: usuario.data})

                }
            
            catch(error) {
                return dispatch({ type: 'cerrarSesion' })

            }
        }
    }

}

export default authActions 