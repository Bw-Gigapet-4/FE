import { AxiosWithAuth, setToken} from '../../utils/AxiosWithAuth';
import axios from 'axios';
import { bindActionCreators } from '../../../../../../../../../AppData/Local/Microsoft/TypeScript/3.5/node_modules/redux';


// action types for login/register
export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";

export const SIGNUP_START = "SIGNUP_START";
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const SIGNUP_FAIL = "SIGNUP_FAIL";

// action types for crud operations
export const ADD_ENTRY_START = "ADD_ENTRY_START";
export const ADD_ENTRY_SUCCESS = "ADD_ENTRY_SUCCESS";
export const ADD_ENTRY_FAIL = "ADD_ENTRY_FAIL";

export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAIL = "FETCH_FAIL";

export const UPDATE_START = "UPDATE_START";
export const UPDATE_SUCCESS = "UPDATE_SUCCESS";
export const UPDATE_FAIL = "UPDATE_FAIL";

export const DELETE = "DELETE";


export const login = (credentials, history) => {
    // console.log(credentials)
    return dispatch => {
        dispatch({ type: LOGIN_START });
        // https://gigapetapi.herokuapp.com/api/login
        axios.post('https://gigapetapi.herokuapp.com/api/login', credentials)
            .then(res => {
                console.log("Working", res)
                
                dispatch({ type: LOGIN_SUCCESS, payload: res.data.user });
                setToken(res.data.token);
                localStorage.setItem('userId', res.data.userId)
                localStorage.setItem('username', res.data.username)
                history.push(`/dashboard/${res.data.userId}`)
            })
            .catch(err => {
                console.log("Failing", err.response)
                // console.log(credentials)
                dispatch({ type: LOGIN_FAIL, payload: err.response });
            })
    }
}

export const register = (newUser, history) => {
    return dispatch => {
        dispatch({ type: SIGNUP_START });

        axios.post('https://gigapetapi.herokuapp.com/api/register', newUser)
            .then(res => {
                console.log(res)
                dispatch({ type: SIGNUP_SUCCESS, payload: res.data.user });
                localStorage.setItem('userId', res.data.userId)
                localStorage.setItem('username', res.data.username)
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

// Add new entry
export const addNewEntry = ({...newDetails}) => {
    return dispatch => {
        console.log('working!')
        dispatch({ type: ADD_ENTRY_START });

        const id = localStorage.getItem("userId");

        AxiosWithAuth().post(`add/${id}`, newDetails)
        .then(res => {
            console.log(res.data)
            dispatch({ type: ADD_ENTRY_SUCCESS, payload: res.data })
        
        })
        .catch(err => {
            console.log(err.response)
                dispatch({ type: ADD_ENTRY_FAIL, payload: err.response })
        })
    }
}

// Update action
export const updateFoodEntry = ({id, ...details}) => {
    return dispatch => {
        
        dispatch({ type: UPDATE_START })
        
        AxiosWithAuth().put(`update/${id}`, details)
            .then(res => {
                dispatch({ type: UPDATE_SUCCESS, payload: details })
            })
            .catch(err => {
                console.log(err.response)
                dispatch({ type: UPDATE_FAIL, payload: err.response})
            })
    }
}

// Delete Entry
export const deleteEntry = (history, id) => {
    return dispatch => {
        console.log('history is here =>', history)
        AxiosWithAuth().delete(`remove/${id}`)
            .then(res => {
                console.log(res.data)
                dispatch({ type: DELETE, payload: res })
                if(history && history.goBack) history.goBack();
                console.log('history too', history)
            })
            .catch(err => {
                console.log(err.response)
                dispatch({ type: UPDATE_FAIL, payload: err.response})
            })
    }
}