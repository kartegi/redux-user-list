import { ADD_USER, ADD_USERS, SELECT_USER } from "../const/userConst"

const initState = {
    users: [],
    user: {},
    selectedUser: ''
}

const userReducer = (state = initState, {type, payload}) => {
    switch (type) {
        case ADD_USERS:
            return {...state, users: [...payload]}
        case ADD_USER:
            return {...state, user: payload}
        case SELECT_USER:
            return {...state, selectedUser: payload}
        default:
            return state
    }
}

export default userReducer