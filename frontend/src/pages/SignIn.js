import React from "react";
import FormSignIn from "../components/FormSignIn";
import { Navigate } from 'react-router-dom';


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

export default SignIn