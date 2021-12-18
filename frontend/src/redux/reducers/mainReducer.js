import { combineReducers } from "redux";
import itinerariesReducer from "./itinerariesReducer"
import citiesReducer from "./citiesReducer"
import authReducer from "./authReducer";
import actividadesReducer from "./activitiesReducer";


const mainReducer = combineReducers({

    citiesReducer,
    itinerariesReducer,
    authReducer,
    actividadesReducer

})

export default mainReducer