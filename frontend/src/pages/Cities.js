import React from 'react';
import HeaderCities from '../components/HeaderCities';
import Input from '../components/Input';
import MainCities from '../components/MainCities';

class Cities extends React.Component{
    render(){

        return(
            <>
            <HeaderCities/>
            <div className="cities">
                 <Input/>
            <MainCities/>
            </div>
           
            </>
        )
    }
          
}

export default Cities 