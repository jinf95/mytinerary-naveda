import { combineReducers } from "redux";
import itinerariesReducer from "./itinerariesReducer"
import citiesReducer from "./citiesReducer"


const mainReducer = combineReducers({

    citiesReducer,
    itinerariesReducer

})

export default mainReducer