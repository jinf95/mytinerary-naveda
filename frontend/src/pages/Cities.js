import React from 'react';
import HeaderCities from '../components/HeaderCities';
import MainCities from '../components/MainCities';
import axios from 'axios';

class Cities extends React.Component {

    constructor() {
        super()
        console.log("soy el constructor")
        this.state = {
            
        }

    }

    componentDidMount() {
        console.log("soy componentDiMount")

        axios.get(`http://localhost:4000/api/ciudades`)
        .then(res => this.setState({ciudades : res.data.respuesta}))
     
    }

    render() {
        console.log("soy render")

        return (
            <>
                <HeaderCities />
                <div className="cities">
                   { this.state.ciudades && <MainCities ciudades={this.state.ciudades} /> } 
                </div>

            </>
        )
    }

}

export default Cities