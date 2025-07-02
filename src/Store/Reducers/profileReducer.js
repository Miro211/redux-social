import socialAPI from "../../Api/api";

const GET_PROFILE = 'GET_PROFILE'
const initState = {
    profile: {}
}

export const profileReducer = (state = initState, action) => {
    switch (action.type) {
        case GET_PROFILE:
            return {
                ...state,
                profile: action.payload
            }

        default:
            return state
    }
}

const profileAC = (data) => ({ type: GET_PROFILE, payload: data })

export const profileThunk = (id) => {
    return (dispatch) => {
        socialAPI.getProfile(id)
        .then((res) => {
            dispatch(profileAC(res.data))
        })
    }
}
export const changePhotoThunk = (file, id) => {
    return(dispatch) => {
        socialAPI.changePhoto(file)
        .then((res) => {
            dispatch(profileThunk(id))
        })
    }
}
export default profileReducer