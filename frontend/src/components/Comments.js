import { connect } from "react-redux";
import Comment from "./Comment";
import itinerariesActions from "../redux/actions/itinerariesActions";
import { useRef, useState } from "react";
import Swal from "sweetalert2";

const Comments = (props) => {
  const token = localStorage.getItem("token");

  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });

  const [textarea, setTextarea] = useState({comentario : ""});
  const [render, setRender] = useState(false);
  const [comentarios, setComentarios] = useState(props.comentario);
  const inputValue = useRef();

  const handleChange = (e) => {
    const {name, value} = e.target;

    setTextarea({
        ...textarea,
        [name] : value 
    });
  }

  const borrarComentario = (idItinerario, idComentario, token) => {
    props
      .borrarComentario(idItinerario, idComentario, token)
      .then((res) => {
        if (res.success)
          setComentarios(
            comentarios.filter((comentario) => comentario._id !== idComentario)
          );
        else throw new Error();
      })
      .catch((error) => console.log(error));
  };

  const editarComentario = (idComentario, comentario, token) => {
    props
      .editarComentario(idComentario, comentario, token)
      .then((res) => {
        if (res.success) {
          comentarios.forEach((comentarioAct) => {
            if (comentarioAct._id === idComentario) {
              comentarioAct.comentario = comentario;
            }
          });
          setComentarios(comentarios);
          setRender(!render);
        }
      })
      .catch((error) => console.log(error));
  };

  const sendHandler = () => {
    let valueComentario = inputValue.current.value;

    props
      .agregarComentario(props.idItinerario, valueComentario, token)
      .then((res) => {
        setComentarios(res.response.data.response);
        inputValue.current.value = "";
      })
      .catch((error) => console.log(error));
  };

  //   const handleKeyPress = (e) => {
  //     if (e.key === "Enter") {
  //       sendHandler();
  //     }
  //   };

  const warning = () => {
    Toast.fire({
      icon: "error",
      title: "You need log for comment",
    });
  };

  return (
    <>
      <div className="comentarios-cont">
        <h4 className="titulo-coment">Comments</h4>
        <div>
          {comentarios.map((comentario, index) => (
            <Comment
              key={index}
              comentario={comentario}
              borrar={borrarComentario}
              idItinerario={props.idItinerario}
              editar={editarComentario}
              renderizar={render}
            />
          ))}
          <div className="comentar">
            {/* {comentarios.length === 0 && (
              <div>
                <p>No hay comentarios...</p>
              </div>
            )} */}
            {/* <div> */}
              <textarea
                name="comentario"
                value={textarea.comentario}
                className="input-comentario"
                rows="2"
                type="text"
                ref={inputValue}
                onChange={handleChange}
                placeholder={
                  token ? "Write a comment" : "You need log for comment"
                }
                disabled={token ? false : true}
                // onKeyPress={handleKeyPress}
              />
              <button onClick={token ? sendHandler : warning} disabled={textarea.comentario === "" ? true : false}>✔️</button>
            {/* </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    usuario: state.authReducer.usuario,
  };
};

const mapDispatchToProps = {
  editarComentario: itinerariesActions.editarComentario,
  borrarComentario: itinerariesActions.borrarComentario,
  agregarComentario: itinerariesActions.agregarComentario,
};

export default connect(mapStateToProps, mapDispatchToProps)(Comments);
