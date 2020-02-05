import { AxiosWithAuth as axios, setToken} from '../../utils/AxiosWithAuth';

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";

export const SIGNUP_START = "SIGNUP_START";
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const SIGNUP_FAIL = "SIGNUP_FAIL";

export const login = (credentials, history) => {
    return dispatch => {
        dispatch({ type: LOGIN_START });
        
        axios().post('/login', credentials)
            .then(res => {
                dispatch({ type: LOGIN_SUCCESS, payload: res.data.user });
                setToken(res.data.token);
                history.push('/dashboard/')
            })
            .catch(err => {
                console.log(err.response)
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