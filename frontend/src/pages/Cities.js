import React from 'react';
import HeaderCities from '../components/HeaderCities';
import MainCities from '../components/MainCities';
import { connect } from 'react-redux'
import citiesActions from '../redux/actions/citiesActions';
import { Spinner } from 'reactstrap';

class Cities extends React.Component {

    constructor() {
        super()
        this.state = {

        }

    }

    componentDidMount() {
        this.props.fetchCiudades()

    }

    render() {
        return (
            <>
                <HeaderCities />
                <div className="cities">
                    {this.props.ciudades.length > 0 ? <MainCities /> : <Spinner color="info" size=""></Spinner>}
                </div>

            </>
        )
    }
}

const mapStateToProps = (state) => {
    return { ciudades: state.citiesReducer.ciudades }
}

const mapDispatchToProps = {
    fetchCiudades: citiesActions.obtenerCiudades

}


export default connect(mapStateToProps, mapDispatchToProps)(Cities)