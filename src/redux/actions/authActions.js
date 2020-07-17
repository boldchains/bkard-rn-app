import { USER_ROLE } from '../types';

export const userRole = (role) => {
    return {
        type: USER_ROLE,
        payload: role
    };
}
