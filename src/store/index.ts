import { configureStore } from '@reduxjs/toolkit';
import userReducer from './reducers/useReducer';
import globalReducer from './reducers/globalReducer';
const store = configureStore({
  reducer: {
    userReducer,
    globalReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export default store;
