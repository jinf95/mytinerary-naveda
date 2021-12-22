import { useRef } from "react"
import { useState, useEffect } from "react"
import { connect } from "react-redux"
import Swal from 'sweetalert2'

const Comment = (props) => {
    console.log(props)

  
    const inputValue = useRef()
    const[cambiarInput, setcambiarInput] = useState(false)

    const usuarioValido = props.comentario === props.usuario._id

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
            props.delete(props.itinerario._id, props.comentario._id, props.usuario.token)
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
            }
          })
        }

    const comentarioDeUsuario = 
    <div >
        {!cambiarInput 
        ? <p>{props.comentario}</p> 
        :   <>
                <input type="text"  defaultValue={props.comentario} ref={inputValue} />
                <button onClick={()=> props.editarComentario(props.comentarios._id, inputValue.current.value, props.usuario.token)}>✔️</button>
            </> }
            <div>
                <button onClick={()=>setcambiarInput(!cambiarInput)}>✏️</button>
                <button onClick={Toast}>🗑️</button>
            </div>    
    </div>

    const comentarioValido = usuarioValido ? (comentarioDeUsuario) : <p>{props.comentario}</p>



    return (
        <>
            <div>
                {/* <img src={props} alt="..."/> */}
                {/* <p>{props}</p> */}
            </div>    
            <div>
                {comentarioValido}
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