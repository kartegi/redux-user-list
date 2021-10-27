import { ADD_USER, ADD_USERS, SELECT_USER, } from "../const/userConst";

export const addUsers = (payload) => ({type: ADD_USERS, payload})
export const addUser = (payload) => ({type: ADD_USER, payload})
export const selectUser = (payload) => ({type: SELECT_USER, payload})