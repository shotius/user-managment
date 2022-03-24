import { IUserObject } from './../../../types';
import {
  createAsyncThunk,
  createSlice,
  current,
  PayloadAction,
} from '@reduxjs/toolkit';
import { userService } from 'src/services/user.services';
import { isString } from 'src/utils/functions';
import type { RootState } from '../../app/store';
import { userSliceUtils } from './userSlice.utils';

const { removeUser, replaceUser } = userSliceUtils;

interface UsersState {
  users: IUserObject[];
  selectedUser?: IUserObject;
  searchWord: string;
}

const initialState: UsersState = {
  users: [],
  searchWord: '',
};

// Get users
export const getUsers = createAsyncThunk<
  IUserObject[],
  void,
  { rejectValue: string }
>('users/getUsers', async (_, { rejectWithValue }) => {
  try {
    const users = await userService.getUsers();
    return users;
  } catch (error) {
    return rejectWithValue('Could not fetch users');
  }
});

// Add user
export const addUser = createAsyncThunk<
  IUserObject,
  IUserObject,
  { rejectValue: string }
>('users/addUser', async (user, { rejectWithValue }) => {
  try {
    const users = await userService.addUser(user);
    return users;
  } catch (error) {
    return rejectWithValue('Could not add user');
  }
});

// Update user
export const updateUser = createAsyncThunk<
  IUserObject,
  IUserObject,
  { rejectValue: string }
>('users/updateUser', async (user, { rejectWithValue }) => {
  try {
    const users = await userService.updateUser(user);
    return users;
  } catch (error) {
    return rejectWithValue('Could not update user');
  }
});

// Delete user
export const deleteUser = createAsyncThunk<
  string,
  string,
  { rejectValue: string }
>('users/deleteUser', async (userId, { rejectWithValue }) => {
  try {
    await userService.deleteUser(userId);
    return userId;
  } catch (error) {
    if (isString(error)) {
      return rejectWithValue(error);
    }
    return rejectWithValue('Could not delete the user');
  }
});

// User Slice
export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setSearchWord: (state, action: PayloadAction<string>) => {
      state.searchWord = action.payload;
    },
    setUsers: (state, action: PayloadAction<IUserObject[]>) => {
      state.users = action.payload;
    },
    setUserForSetup: (
      state,
      action: PayloadAction<IUserObject | undefined>
    ) => {
      state.selectedUser = action.payload;
    },
  },
  extraReducers: (builder) => {
    // Get Users
    builder.addCase(getUsers.fulfilled, (state, action) => {
      state.users = action.payload;
    });

    // Add User
    builder.addCase(addUser.fulfilled, (state, action) => {
      state.users.unshift(action.payload);
    });

    // Update User
    builder.addCase(updateUser.fulfilled, (state, action) => {
      state.users = replaceUser(current(state.users), action.payload);
      state.selectedUser = action.payload
    });

    // Delete User
    builder.addCase(deleteUser.fulfilled, (state, action) => {
      state.users = removeUser(current(state.users), action.payload);
    });
  },
});

export const { setUserForSetup, setUsers, setSearchWord } = usersSlice.actions;

// Selectors
export const selectUsers = (state: RootState) => state.users.users;
export const selectUser = (state: RootState) => state.users.selectedUser;
export const selectSearchWord = (state: RootState) => state.users.searchWord;

export default usersSlice.reducer;
