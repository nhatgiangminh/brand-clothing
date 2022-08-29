import { USER_REDUCER_TYPES } from "./user.types";
const INIT_STATE = {
    currentUser : null,
};

export const userReducer = (state = INIT_STATE, action) => {
    const {type, payload} = action;
    console.log('dispatched');
    switch(type) {
      case USER_REDUCER_TYPES.SET_CURRENT_USER :
        return {...state, currentUser: payload};
      default:
        return state;
    }
  }