import React, { useEffect, useState } from "react";
import SideNav from "./components/SideNav.js";
import Footer from "./components/Footer.js";
import Home from "./pages/Home.js";
import Cities from "./pages/Cities";
import City from "./pages/City";
import SignUp from "./pages/SignUp.js";
import SignIn from "./pages/SignIn.js";
import { connect } from "react-redux";
import authActions from "./redux/actions/authActions.js";
import ScrollArrowTop from "./elements/ScrollArrowTop";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import withRouter from "./utils/withRouter.js";
import InitialLoader from "./elements/InitialLoader.js";

const CityC = withRouter(City);

const App = (props) => {

  const [isLoading, setIsLoading] = useState(true);

  const timeOut = (ms) => {

    return new Promise(resolve => setIsLoading(resolve, ms))
  }

  useEffect(() => {
    const loading = async () => {
      await timeOut(3000)
    }
    loading()
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("token");
    props.loguearConToken(token);
  }, [props]);

  return (
    <>
    {isLoading ? <InitialLoader/> :
    <BrowserRouter>
      <SideNav />
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="Cities" element={<Cities />} />
        <Route path="/City/:id" element={<CityC />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <div className="scroll-container">
      <ScrollArrowTop />
      </div>
      <Footer />
      </BrowserRouter>
    }
    </>
  );
};

const mapDispatchToProps = {
  loguearConToken: authActions.loguearConToken,
};

export default connect(null, mapDispatchToProps)(App);
