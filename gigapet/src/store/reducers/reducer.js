import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAIL, SIGNUP_START, SIGNUP_SUCCESS, SIGNUP_FAIL } from '../actions/action';

const NO_ERRORS = null;

export const Initial_State = {
    user: {
        id: -1,
        username: ""
    },
    isAuthorizing: false,
    error: NO_ERRORS
}

export const reducer = (state = Initial_State, action) => {
    // console.log(action.type)
    switch (action.type) {
        case LOGIN_START: 
            return { 
                ...state,
                user: {
                    ...state.user
                },
                isAuthorizing: true,
                error: NO_ERRORS
            };
        case LOGIN_SUCCESS: 
            return {
                ...state,
                user: action.payload,
                isAuthorizing: false,
                error: NO_ERRORS
            };
        case LOGIN_FAIL:
            return {
                ...state,
                user: {
                    ...state.user
                },
                isAuthorizing: false,
                error: action.payload
            };
        case SIGNUP_START: 
            return {
                ...state,
                user: {
                    ...state.user
                },
                isAuthorizing: true,
                error: NO_ERRORS
            };
        case SIGNUP_SUCCESS:
            return {
                ...state,
                user: action.payload,
                isAuthorizing: false,
                error: NO_ERRORS
            };
        case SIGNUP_FAIL:
            return {
                ...state,
                user: {
                    ...state.user
                },
                isAuthorizing: false,
                error: action.payload
            };
        default: 
            return state;
    }
}