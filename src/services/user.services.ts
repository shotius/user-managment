import axios from 'axios';

const baseUrl = 'http://localhost:3001/users';

const getUsers = async () => {
  const { data } = await axios.get(baseUrl);
  return data;
};

const userService = {
  getUsers,
};

export default userService;
