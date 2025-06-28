import { createStore, combineReducers, applyMiddleware } from "redux";
import usersReducer from "./Reducers/useReducer";
import { thunk } from 'redux-thunk'
import profileReducer from "./Reducers/profileReducer";
const rootReducer = combineReducers({
    usersPage: usersReducer,
    profilePage : profileReducer
})
export const store = createStore(rootReducer, applyMiddleware(thunk))
