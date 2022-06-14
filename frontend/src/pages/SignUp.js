import React from "react";
import FormSignUp from "../components/FormSignUp";
import { Navigate } from 'react-router-dom';
import {connect} from 'react-redux'


class SignUp extends React.Component {
  
  
    
    render() {
    window.scrollTo(0, 0);
        
        const token = localStorage.getItem('token');

        if (token) {
            return <Navigate to='/' />
        }
        return (
            <FormSignUp/>
        )
    }

}
const mapStateToProps = (state) => {
    return{
            usuario : state.authReducer.usuario
    }
}

export default connect(mapStateToProps) (SignUp)