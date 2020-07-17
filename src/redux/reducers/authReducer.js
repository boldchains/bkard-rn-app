import { USER_ROLE } from '../types';

const initialState = {
    role: "private"
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_ROLE:
            return {
                ...state,
                role: action.payload
            };
        default:
            return state;
    }
}

export default authReducer;