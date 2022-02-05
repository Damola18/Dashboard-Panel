import * as types from './actionTypes'

const initialState = {
    users: [],
    user: {},
    loading: false
}

const usersReducers = (state = initialState, action) => {
    switch(action.type) {
        case types.GET_USERS:
            return { 
                ...state,
                users: action.payload,
                loading: false,
            };
        case types.DELETE_USER:
            return{
                ...state,
                loading: false,
                users: state.users.filter((item) => item.id !== action.payload),
            }
        case types.ADD_USER:
            const users= state.users.concat(action.payload)
            return{
                ...state,
                users,
                loading: false,
            }
        case types.UPDATE_USER:
            console.log(action.payload)
            let newUser = state.users.map(user => user.id === action.payload.id?action.payload:user)
            console.log(newUser);
            return{
                ...state, 
                users:[...newUser],
                loading: false, 
            };

        case types.EDIT_USER:
            return{
                ...state,
                user: action.payload,
                loading: false,
            }
        default:
            return state;
    }
};

export default usersReducers;