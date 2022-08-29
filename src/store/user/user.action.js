import { USER_REDUCER_TYPES } from "./user.types";

export const setCurrentUser = (user) => 
({type: USER_REDUCER_TYPES.SET_CURRENT_USER, payload: user});