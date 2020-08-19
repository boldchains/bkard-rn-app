import {USER_ROLE, USER_DETAILS} from '../types';

export const userRole = (role) => {
  return {
    type: USER_ROLE,
    payload: role,
  };
};

export const userDetails = (role) => {
  return {
    type: USER_DETAILS,
    payload: role,
  };
};
