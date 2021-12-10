import React from "react";
import {connect} from 'react-redux'
import authActions from "../redux/actions/authActions";
import FormSignIn from "../components/FormSignIn";

class SignIn extends React.Component {
    constructor() {
        super()
        this.state = {

        }
    }

componentDidMount(){

}

    render() {

        return (
            <FormSignIn/>
        )
    }
}
const mapStateToProps = (state) =>{
    return{
            usuario : state.authReducer.usuario   
    } 

}

const mapDispatchToProps = {
    iniciarSesion : authActions.iniciarSesion
}

export default connect(mapStateToProps, mapDispatchToProps) (SignIn)