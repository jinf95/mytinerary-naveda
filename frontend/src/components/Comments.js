import { connect } from "react-redux"
import Comment from './Comment'
import itinerariesActions from "../redux/actions/itinerariesActions"
import { useRef, useState } from "react"
import Swal from 'sweetalert2'


const Comments = (props) => {
    console.log(props)

    const token = localStorage.getItem('token')

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
    console.log(props.comentario) 

    const inputValue = useRef()
  
const borrarComentario=(idItinerario, idComentario, token)=>{
    console.log(idComentario)
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
        setRender(!render)
        }
    })
    .catch((error)=> 
        console.log(error))
}

const sendHandler = () =>{
    let valueComentario = inputValue.current.value
    
    props.agregarComentario(props.idItinerario, valueComentario, token)
    .then(res=>{
        console.log(res)
        setComentarios(res.response.data.response)
         inputValue.current.value=""})
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
        <div className="comentarios-cont">

        <h4>Comments</h4>
        <div >
            <div >
            {console.log(comentarios)}
            {comentarios.map((comentario, index) => <Comment key={index} comentario={comentario} borrar={borrarComentario} idItinerario={props.idItinerario} editar={editarComentario} renderizar={render}/> )
             }

            </div>
            
            <div >
                <input className="input-comentario" type="text" ref={inputValue} placeholder={token ? "Write a comment" : "You need log for comment"} disabled={token ? false : true} onKeyPress={handleKeyPress}/>   
                <button onClick={token ? sendHandler : warning}>✔️</button>
                
            </div> 
        </div>   
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