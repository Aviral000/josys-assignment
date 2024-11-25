import axios from 'axios';

export interface User {
    id: number,
    name: string,
    email: string
}

const url: string = "http://localhost:3001/users"

export const fetchUsers = async (): Promise<User[]> => {
    const { data } = await axios.get(url);
    return data;
}

export const addUser = async (userObj: Omit<User, "id">): Promise<User> => {
    const { data } = await axios.post(url, userObj);
    return data;
}

export const deleteUser = async (id: number): Promise<void> => {
    await axios.delete(`${url}/${id}`);
}