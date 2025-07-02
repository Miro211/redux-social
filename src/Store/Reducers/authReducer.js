import socialAPI from "../../Api/api"

const LOGIN = 'LOGIN'
const LOGOUT = 'LOGOUT'
const initState = {
    userId: localStorage.getItem('userId') || null
}

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                userId: action.payload
            }
        case LOGOUT: 
            return {
                ...state,
                userId : null
            }
        default:
            return state
    }
}
const loginAC = (data) => ({ type: LOGIN, payload: data })
export const logutAC = () => ({type: LOGOUT})
export const loginThunk = (body) => {
    return (dispatch) => {
        socialAPI.login(body)
            .then((res) => {
                
                const userId = res?.data?.data?.userId
                if (userId) {
                    dispatch(loginAC(userId))
                    localStorage.setItem('userId', userId)
                }
            })
    }
}
export default authReducer