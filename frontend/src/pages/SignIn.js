import React from "react";
import FormSignIn from "../components/FormSignIn";
import { Navigate } from 'react-router-dom';
import {connect} from 'react-redux'


class SignIn extends React.Component {
  
  
    render() {
        const token = localStorage.getItem('token');

        if (token) {
            return <Navigate to='/' />
        }
            return (
            <FormSignIn/>
        )
    }
}

const mapStateToProps = (state) =>{
    return {
        usuario: state.authReducer.usuario
    }
}


export default connect(mapStateToProps) (SignIn)