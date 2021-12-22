import { connect } from "react-redux"
import Comment from './Comment'
import itinerariesActions from "../redux/actions/itinerariesActions"
import { useRef, useState } from "react"
import Swal from 'sweetalert2'


const Comments = (props) => {
    console.log(props)

    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })

    const [render, setRender] = useState(false)

    const [comentarios, setComentarios] = useState(props.comentario) 

    const inputValue = useRef()
  
const borrarComentario=(idItinerario, idComentario, token)=>{
    props.borrarComentario(idItinerario, idComentario, token)
    .then(res=>{
        if(res.success) 
        setComentarios(comentarios.filter(comentario => comentario._id !== idComentario))
        else throw new Error()
    })
    .catch((error)=> 
        console.log(error))
}

const editarComentario = (idComentario, comentario, token)=> {
    props.editarComentario(idComentario, comentario, token)
    .then((res)=> {
        if(res.success){
        comentarios.forEach(comentarioAct => {
        if(comentarioAct._id === idComentario){
        comentarioAct.comentario=comentario
         }
    })
    setComentarios(comentarios) 
    console.log(comentarios)  
        setRender(!render)
        }
    })
    .catch((error)=> 
        console.log(error))
}

const sendHandler = () =>{
    let valueComentario = inputValue.current.value
    console.log(valueComentario)
    
    props.agregarComentario(props._id, valueComentario, props.usuario._id)
    .then(res=> setComentarios(res.response), inputValue.current.value="")
    .catch(error => 
        console.log(error))
}

const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
        sendHandler()
    }
  }

  const warning = () => {
    Toast.fire({
        icon: 'error',
        title: "You need log for comment"
      }) 
    
  }

    return (
        <>
        <h4>Comments</h4>
        <div className="comentarios-cont">
            {comentarios.map((comentario, index) => <Comment key={index} comentario={comentario} borrar={borrarComentario} idItinerario={props._id} editar={editarComentario} renderizar={render}/> )}
            
        </div>   
            <div>
                <input type="text" ref={inputValue} placeholder={props.usuario._id ? "Write a comment" : "You need log for comment"} disabled={props.usuario._id ? false : true} onKeyPress={handleKeyPress}/>   
                <button onClick={props.usuario._id ? sendHandler : warning}>✔️</button>
            </div> 

        </>
    )
}



const mapStateToProps = (state) => {
    return {
       usuario: state.authReducer.usuario,
    }
 }

const mapDispatchToProps = {
    editarComentario: itinerariesActions.editarComentario,
    borrarComentario: itinerariesActions.borrarComentario,
    agregarComentario: itinerariesActions.agregarComentario
}

export default connect(mapStateToProps, mapDispatchToProps)(Comments)