import { createStore, combineReducers, applyMiddleware } from "redux";
import usersReducer from "./Reducers/useReducer";
import { thunk } from 'redux-thunk'
import profileReducer from "./Reducers/profileReducer";
import authReducer from "./Reducers/authReducer";
const rootReducer = combineReducers({
    usersPage: usersReducer,
    profilePage : profileReducer,
    auth : authReducer
})
export const store = createStore(rootReducer, applyMiddleware(thunk))
