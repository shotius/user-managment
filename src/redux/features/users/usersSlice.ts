import {
  createAsyncThunk,
  createSlice,
  current,
  PayloadAction
} from '@reduxjs/toolkit';
import { userService } from 'src/services/user.services';
import { ExampleObject } from 'src/types';
import { isString } from 'src/utils/functions';
import type { RootState } from '../../app/store';
import { userSliceUtils } from './userSlice.utils';

const { removeUser, replaceUser } = userSliceUtils;

interface UsersState {
  users: ExampleObject[];
  selectedUser?: ExampleObject;
}

const initialState: UsersState = {
  users: [],
};

// Get users
export const getUsers = createAsyncThunk<
  ExampleObject[],
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
  ExampleObject,
  ExampleObject,
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
  ExampleObject,
  ExampleObject,
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
    setUserForSetup: (
      state,
      action: PayloadAction<ExampleObject | undefined>
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
      state.users.push(action.payload);
    });

    // Update User
    builder.addCase(updateUser.fulfilled, (state, action) => {
      state.users = replaceUser(current(state.users), action.payload);
    });

    // Delete User
    builder.addCase(deleteUser.fulfilled, (state, action) => {
      state.users = removeUser(current(state.users), action.payload);
    });
  },
});

export const { setUserForSetup } = usersSlice.actions;

// Selectors
export const selectUsers = (state: RootState) => state.users.users;
export const selectUser = (state: RootState) => state.users.selectedUser;

export default usersSlice.reducer;
