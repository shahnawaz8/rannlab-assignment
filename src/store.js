

import {applyMiddleware, combineReducers, compose, legacy_createStore} from "redux"

import thunk from "redux-thunk"
import { userReducer } from "./Redux/GetUser/reducer";
import { authReduce } from "./Redux/Login/reducer";
import { productReducer } from "./Redux/Reducer"
import { signupReducer } from "./Redux/Signup/reducer";

const root = combineReducers({
    signup:signupReducer,
    productReducer:productReducer,
    login:authReduce,
    user:userReducer
})

const composeEnhancer= window._REDUX_DEV_TOOLS_EXTENSION_COMPOSE||compose;
export const store=legacy_createStore(root,composeEnhancer(applyMiddleware(thunk)))
console.log(store.getState())