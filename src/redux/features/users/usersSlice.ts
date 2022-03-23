import { userService } from 'src/services/user.services';
import { ExampleObject } from 'src/types';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../app/store';

interface UsersState {
  users: ExampleObject[];
}

const initialState: UsersState = {
  users: [],
};

export const getUsers = createAsyncThunk<
  ExampleObject[],
  any,
  { rejectValue: string }
>('users/getUsers', async (_, { rejectWithValue }) => {
  try {
    const users = await userService.getUsers();
    return users;
  } catch (error) {
    return rejectWithValue('Could not fetch users');
  }
});

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUsers.fulfilled, (state, action) => {
      state.users = action.payload;
    });
  },
});

export const {} = usersSlice.actions;

// Selectors
export const selectUser = (state: RootState) => state.users.users

export default usersSlice.reducer;
