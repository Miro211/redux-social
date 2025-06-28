import socialAPI from "../../Api/api"
const GET_USERS = 'GET_USERS'
const IS_LOADING = 'IS_LOADING'
const initState = {
    users: [],
    isLoading: false,
}

const usersReducer = (state = initState, action) => {
    switch (action.type) {
        case GET_USERS: {
            return {
                ...state,
                users: action.payload
            }
        }
        case IS_LOADING: {
            return {
                ...state,
                isLoading: action.payload
            }
        }
        default:
            return state
    }
}

export const getUsersAC = (data) => (
    {
        type: GET_USERS, payload: data
    }
)
export const isLoadingAc = (data) => ({ type: IS_LOADING, payload: data })
export const getUsersThunkCreator = () => {
    return (dispatch) => {
        dispatch(isLoadingAc(true))
      socialAPI.getUsers()
      .then((res) => {
      dispatch(getUsersAC(res.data.items))
      dispatch(isLoadingAc(false))
      })
    }
}

export default usersReducer