import { addUser } from "../userActions"

export const fetchUser = (LINK) => {
    return dispatch => {
        fetch(LINK)
            .then(response => response.json())
            .then(json => dispatch(addUser(json)))
    }
}