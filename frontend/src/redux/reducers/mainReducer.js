import { combineReducers } from "redux";
import itinerariesReducer from "./itinerariesReducer"
import citiesReducer from "./citiesReducer"
import authReducer from "./authReducer";


const mainReducer = combineReducers({

    citiesReducer,
    itinerariesReducer,
    authReducer

})

export default mainReducer