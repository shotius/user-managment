import { IUserObject } from './../../../types';

function removeUser(users: IUserObject[], userIdToRemove: string) {
  return users.filter((user) => user.id !== userIdToRemove);
}

function replaceUser(users: IUserObject[], newUser: IUserObject) {
  return users.map((user) => (user.id === newUser.id ? newUser : user));
}

export const userSliceUtils = {
  replaceUser,
  removeUser,
};
