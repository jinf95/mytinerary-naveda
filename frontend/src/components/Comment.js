import { useRef } from "react"
import { useState, useEffect } from "react"
import { connect } from "react-redux"
import Swal from 'sweetalert2'

const Comment = (props) => {

    const token = localStorage.getItem('token')

  
    const inputValue = useRef()
    const[cambiarInput, setcambiarInput] = useState(false)
    let usuarioValido;
    props.usuario && (usuarioValido = props.comentario.idUsuario._id === props.usuario._id)
      

    useEffect(()=>{
        setcambiarInput(false)
    }, [props.renderizar])

    const Toast = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((respuesta) => {
            if (respuesta.isConfirmed) {
            props.borrar(props.idItinerario, props.comentario._id,token)
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
            }
          })
        }

    const comentarioDeUsuario = 
    <div className="comentario-botones">
        {!cambiarInput 
        ? <p className="zona-comentario">{props.comentario.comentario}</p> 
        :   <>
                <input className="comentario-editar" type="text"  defaultValue={props.comentario.comentario} ref={inputValue} />
                <button className="boton-editar-check" onClick={()=> props.editar(props.comentario._id, inputValue.current.value, token)}>✔️</button>
            </> }
            <div className="botones">
                <button className="boton-editar" onClick={()=>setcambiarInput(!cambiarInput)}>✏️</button>
                <button onClick={Toast}>🗑️</button>
            </div>    
    </div>

    const comentarioValido = usuarioValido ? (comentarioDeUsuario) : <p>{props.comentario.comentario}</p>



    return (
        <>
            <div className="comentarios">
            <div className="datos-usuario">
                <img className="imagen-usuario" src={props.comentario.idUsuario.url} alt="user-image"/>
                <p className="nombre-usuario">{props.comentario.idUsuario.nombre}</p>
            </div>    
            <div className="comentario">
                {comentarioValido}
            </div>   
            </div>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
       usuario: state.authReducer.usuario

    }
 }


export default connect(mapStateToProps)(Comment)