

import axios from 'axios';


const usersUrl = 'https://mi-team-curd-app.herokuapp.com/users';

export const getPlayers = async (id) => {
     id = id || '';
    return await axios.get(`${usersUrl}/${id}`);
}

export const addPlayer = async (user) => {
    return await axios.post(`${usersUrl}/add`, user);
}

export const deleteUser = async (id) => {
    return await axios.delete(`${usersUrl}/${id}`);
}

export const editUser = async (id, user) => {
    return await axios.put(`${usersUrl}/${id}`, user)
}
