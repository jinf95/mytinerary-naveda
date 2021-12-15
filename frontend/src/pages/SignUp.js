import React from "react";
import FormSignUp from "../components/FormSignUp";
import { Navigate } from 'react-router-dom';


class SignUp extends React.Component {
  
    
    render() {
        
        const token = localStorage.getItem('token');

        if (token) {
            return <Navigate to='/' />
        }
        return (
            <FormSignUp/>
        )
    }

}

export default SignUp