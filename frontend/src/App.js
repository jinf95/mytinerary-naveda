import React from 'react';
import SideNav from './components/SideNav.js'
import Footer from './components/Footer.js'
import Home from './pages/Home.js';
import Cities from './pages/Cities';
import City from './pages/City';
import SignUp from './pages/SignUp.js';
import SignIn from './pages/SignIn.js'


import { BrowserRouter, Route, Routes } from 'react-router-dom';
import withRouter from './utils/withRouter.js';

const CityC = withRouter(City)


class App extends React.Component {
  render() {

    return (
      <BrowserRouter>
        <SideNav />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='Cities' element={<Cities />} />
          <Route path='/City/:id' element={<CityC />} />
          <Route path='/SignUp' element={<SignUp />} />
          <Route path='/SignIn' element={<SignIn />} />

        </Routes>
        <Footer />

      </BrowserRouter>

    )
  }
}

export default App