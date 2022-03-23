import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { userService } from 'src/services/user.services';
import { ExampleObject } from 'src/types';
import type { RootState } from '../../app/store';

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

// User Slice
export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUserForSetup: (state, action: PayloadAction<ExampleObject | undefined>) => {
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
  },
});

export const { setUserForSetup } = usersSlice.actions;

// Selectors
export const selectUser = (state: RootState) => state.users.users;

export default usersSlice.reducer;
