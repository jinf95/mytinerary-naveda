import React from "react";
import FormSignUp from "../components/FormSignUp";
import { Navigate } from 'react-router-dom';


class SignUp extends React.Component {
  
    
    render() {
        
        const nombre = localStorage.getItem('nombre');

        if (nombre) {
            return <Navigate to='/' />
        }
        return (
            <FormSignUp/>
        )
    }

}

export default SignUp