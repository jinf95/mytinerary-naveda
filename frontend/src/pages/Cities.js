import React from 'react';
import HeaderCities from '../components/HeaderCities';
import Input from '../components/Input';
import MainCities from '../components/MainCities';

class Cities extends React.Component {

    constructor() {
        super()
        console.log("soy el constructor")
        this.state = { ciudades: [] }

    }

    componentDidMount() {
        console.log("soy componentDiMount")

        fetch("http://localhost:4000/api/ciudades")
            .then((res) => res.json())
            .then((data) => this.setState({ ciudades: data.response.ciudades }))
            .catch((err) => console.error(err));
     
    }

    render() {
        console.log("soy render")

        return (
            <>
                <HeaderCities />
                <div className="cities">
                    <Input />
                    <MainCities ciudades={this.state.ciudades} />
                </div>

            </>
        )
    }

}

export default Cities