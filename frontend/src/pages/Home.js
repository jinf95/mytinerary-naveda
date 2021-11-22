import React from 'react'
import Hero from '../components/Hero.js'
import CallToAction from '../components/CallToAction.js'
import Carrousel from '../components/Carrousel.js'


class Home extends React.Component{
    
    render(){
        return(
        <>
            <Hero/>
            <CallToAction/>
            <Carrousel/>
        </>
        ) 
    }
}

export default Home