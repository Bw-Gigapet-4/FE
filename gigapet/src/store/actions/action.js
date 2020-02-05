import { AxiosWithAuth as axios, setToken} from '../../utils/AxiosWithAuth';

// action types for login/register
export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";

export const SIGNUP_START = "SIGNUP_START";
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const SIGNUP_FAIL = "SIGNUP_FAIL";

// action types for crud operations
export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAIL = "FETCH_FAIL";

export const UPDATE_START = "UPDATE_START";
export const UPDATE_SUCCESS = "UPDATE_SUCCESS";
export const UPDATE_FAIL = "UPDATE_FAIL";

export const DELETE = "DELETE";


export const login = (credentials, history) => {
    return dispatch => {
        dispatch({ type: LOGIN_START });
        
        axios().post('/login', credentials)
            .then(res => {
                console.log("Working", res)
                dispatch({ type: LOGIN_SUCCESS, payload: res.data.user });
                setToken(res.data.token);
                history.push('/dashboard/')
            })
            .catch(err => {
                console.log("Failing", err.response)
                dispatch({ type: LOGIN_FAIL, payload: err.response });
            })
    }
}

export const register = (newUser, history) => {
    return dispatch => {
        dispatch({ type: SIGNUP_START });

        axios().post('/signup', newUser)
            .then(res => {
                console.log(res)
                dispatch({ type: SIGNUP_SUCCESS, payload: res.data.user });
                if (history && history.goBack){
                    history.goBack();
                }
            })
            .catch(err => {
                console.log(err.response)
                dispatch({ type: SIGNUP_FAIL, payload: err.response })
            })
    }
}