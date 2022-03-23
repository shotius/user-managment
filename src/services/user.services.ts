import { ExampleObject } from 'src/types';
import axios from 'axios';

const baseUrl = 'http://localhost:3001/users';

const getUsers = async () => {
  const { data } = await axios.get(baseUrl);
  return data as ExampleObject[];
};

const addUser = async (newUser: ExampleObject) => {
  const { data } = await axios.post(baseUrl, newUser);
  return data as ExampleObject;
};

const updateUser = async (user: ExampleObject) => {
  const { data } = await axios.put(`${baseUrl}/${user.id}`, user);
  return data as ExampleObject;
};

const deleteUser = async (id: string) => {
  console.log('id: ', id, 'should be deleted.');
  //
};

export const userService = {
  getUsers,
  addUser,
  updateUser,
  deleteUser,
};
