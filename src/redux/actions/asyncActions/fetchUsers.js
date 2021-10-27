import { addUsers } from "../userActions"

export const fetchUsers = () => {
    return dispatch => {
        fetch("https://api.github.com/users")
            .then(response => response.json())
            .then(json => dispatch(addUsers(json)))
    }
}