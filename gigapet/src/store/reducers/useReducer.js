import { FETCH_START, FETCH_SUCCESS, FETCH_FAIL, UPDATE_START, UPDATE_SUCCESS, UPDATE_FAIL, DELETE, UPDATE_ERROR, ADD_ENTRY_SUCCESS, ADD_ENTRY_FAIL, ADD_ENTRY_START} from '../actions/action';

const NO_ERROR = null;

const NO_FOOD_DETAILS = {
    id: 1,
    date: '',
    category: '',
    food: '',
    serving: ''
}

const INITIAL_STATE = {
    isLoading: false,
    isUpdating: false,
    error: NO_ERROR,
    foodDetails: NO_FOOD_DETAILS
}

export default (state = INITIAL_STATE, action) => {
    console.log(action.type)
    switch (action.type) {
        case FETCH_START:
            return {
                ...state,
                isLoading: true,
                isUpdating: false,
                error: NO_ERROR,
                foodDetails: NO_FOOD_DETAILS
            };
        case FETCH_SUCCESS: 
            return {
                ...state,
                isLoading: false,
                isUpdating: false,
                error: NO_ERROR,
                foodDetails: {
                    ...state.foodDetails,
                    ...action.payload
                }
            };
        case FETCH_FAIL:
            return {
                ...state,
                isLoading: false,
                isUpdating: false,
                error: action.payload,
                foodDetails: NO_FOOD_DETAILS
            };
        case ADD_ENTRY_START:
            return {
                ...state,
                isLoading: false,
                isUpdating: true,
                error: NO_ERROR,
                foodDetails: {
                    ...state.foodDetails
                }
            };
        case ADD_ENTRY_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isUpdating: true,
                error: NO_ERROR,
                foodDetails: {
                    ...state.foodDetails
                }
            };
        case ADD_ENTRY_FAIL:
            return {
                ...state,
                isLoading: false,
                isUpdating: false,
                error: action.payload,
                foodDetails: NO_FOOD_DETAILS
            };
        case UPDATE_START:
            return {
                ...state,
                isLoading: false,
                isUpdating: true,
                error: NO_ERROR,
                foodDetails: {
                    ...state.foodDetails
                }
            };
        case UPDATE_SUCCESS: 
            return {
                ...state,
                isLoading: false,
                isUpdating: false,
                error: NO_ERROR,
                foodDetails: {
                    ...state.foodDetails,
                    ...action.payload
                }
            };
        case UPDATE_FAIL: 
            return {
                ...state,
                isLoading: false,
                isUpdating: false,
                error: action.payload,
                foodDetails: {
                    ...state.foodDetails
                }
            };
        case DELETE:
            return {
                INITIAL_STATE
            };
        default: 
            return state;
    }
}