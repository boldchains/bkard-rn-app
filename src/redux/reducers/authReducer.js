import {USER_ROLE, USER_DETAILS} from '../types';

const initialState = {
  role: 'private',
  userDetails: {},
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_ROLE:
      return {
        ...state,
        role: action.payload,
      };
    case USER_DETAILS:
      return {
        ...state,
        userDetails: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
