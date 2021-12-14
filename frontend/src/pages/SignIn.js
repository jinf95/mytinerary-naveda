import React from "react";
import FormSignIn from "../components/FormSignIn";
import { Navigate } from 'react-router-dom';


class SignIn extends React.Component {
  
    render() {
        const nombre = localStorage.getItem('nombre');

        if (nombre) {
            return <Navigate to='/' />
        }
        return (
            <FormSignIn/>
        )
    }
}

export default SignIn