import React from "react";
import authActions from "../redux/actions/authActions";
import {connect} from 'react-redux'
import FormSignUp from "../components/FormSignUp";


class SignUp extends React.Component {
    
    constructor() {
        super()
        this.state = {

        }
        
    }
    
    componentDidMount() {

        this.props.registrarUsuario()
    }
     
    render() {
        return (
            <FormSignUp/>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        usuario : state.authReducer.usuario
    }
}

const mapDispatchToProps = {
    registrarUsuario : authActions.registrarUsuario
}

export default connect(mapStateToProps, mapDispatchToProps) (SignUp)