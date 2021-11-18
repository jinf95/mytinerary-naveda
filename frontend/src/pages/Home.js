import React from 'react'
import SideNav from '../components/SideNav.js'
import Hero from '../components/Hero.js'
import CallToAction from '../components/CallToAction.js'
// import Carrousel from '../components/Carrousel.js'
// import Footer from '../components/Footer.js'


class Home extends React.Component{
    
    render(){
        return(
        <>
            <SideNav/>
            <Hero/>
            <CallToAction/>
            {/* <Carrousel/> */}
            {/* <Footer/>    */}
        </>
        ) 
    }
}

export default Home