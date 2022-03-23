import { configureStore } from '@reduxjs/toolkit';
import modalsSlice from '../features/modals/modalsSlice';
import usersSlice from '../features/users/usersSlice';

const store = configureStore({
  reducer: {
    modals: modalsSlice, 
    users: usersSlice
  },
});

export default store

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
