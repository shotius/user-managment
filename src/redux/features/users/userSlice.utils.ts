import { ExampleObject } from './../../../types';

function removeUser(users: ExampleObject[], userIdToRemove: string) {
  return users.filter((user) => user.id !== userIdToRemove);
}

function replaceUser(users: ExampleObject[], newUser: ExampleObject) {
  return users.map((user) => (user.id === newUser.id ? newUser : user));
}

export const userSliceUtils = {
  replaceUser,
  removeUser,
};
