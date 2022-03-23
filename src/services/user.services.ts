import { ExampleObject } from 'src/types';
import axios from 'axios';

const baseUrl = 'http://localhost:3001/users';

const getUsers = async () => {
  const { data } = await axios.get(baseUrl);
  return data as ExampleObject[];
};

const addUser = async(newUser: ExampleObject) => {
  const {data} = await axios.post(baseUrl, newUser)
  return data as ExampleObject
}

export const userService = {
  getUsers,
  addUser
};

