import * as types from "./actionTypes";
import axios from 'axios';

const getUsers = (users) => ({
    type: types.GET_USERS,
    payload: users,
});

const userDeleted = (id) => ({
    type: types.DELETE_USER,
    payload: id,
})

const userAdded = (user) => ({
    type: types.ADD_USER,
    payload: user,
})

const getUser = (user) => ({
    type: types.EDIT_USER,
    payload: user,
})

const userUpdated = (user) => ({
    type: types.UPDATE_USER,
    payload: user,
})

export const loadUsers = () => {
    return function (dispatch) {
        axios.get(`https://my-json-server.typicode.com/karolkproexe/jsonplaceholderdb/data`).then((response) => {
            console.log("response", response.data);
            dispatch(getUsers(response.data));
        })
        .catch((error) => {
            console.log(error);
        });
    };
};
    
export const deleteUser = (id) => {
    return function (dispatch) {
        axios.delete(`https://my-json-server.typicode.com/karolkproexe/jsonplaceholderdb/data/${id}`)
        .then((response) => {
            console.log("response", response);
            dispatch(userDeleted(id));
        })
        .catch((error) => {
            console.log(error)
        });
    };
};

export const addUser = (user) => {
    return function (dispatch) {
        axios.post(`https://my-json-server.typicode.com/karolkproexe/jsonplaceholderdb/data`, user)
        .then((response) => {
            console.log("response", response);
            dispatch(userAdded(response.data));
        })
        .catch((error) => {
            console.log(error)
        })
    }
}

export const editUser = (id) => {
    return function (dispatch) {
        axios.get(`https://my-json-server.typicode.com/karolkproexe/jsonplaceholderdb/data/${id}`)
        .then((response) => {
            console.log("response", response);
            dispatch(getUser(response.data));
        })
        .catch((error) => {
            console.log(error)
        })
    }
}

export const updateUser = (user, id) => {
    return function (dispatch) {
        axios.put(`https://my-json-server.typicode.com/karolkproexe/jsonplaceholderdb/data/${id}`, user)
        .then((response) => {
            console.log("response", response);
            dispatch(userUpdated(user));
        })
        .catch((error) => {
            console.log(error)
        })
    }
}