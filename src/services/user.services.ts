import { IUserObject } from 'src/types';
import axios from 'axios';

const baseUrl = 'http://localhost:3001/users';

const getUsers = async () => {
  const { data } = await axios.get(baseUrl);
  return data as IUserObject[];
};

const addUser = async (newUser: IUserObject) => {
  const { data } = await axios.post(baseUrl, newUser);
  return data as IUserObject;
};

const updateUser = async (user: IUserObject) => {
  const { data } = await axios.put(`${baseUrl}/${user.id}`, user);
  return data as IUserObject;
};

const deleteUser = async (id: string) => {
  const result = await axios.delete(`${baseUrl}/${id}`);
  if (result.status === 200) {
    return true;
  }
  throw new Error(
    'Could not delete the user' + result.status + result.statusText
  );
};

export const userService = {
  getUsers,
  addUser,
  updateUser,
  deleteUser,
};
