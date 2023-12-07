import { configureStore } from '@reduxjs/toolkit';
import userReducer from './reducers/useReducer';
import cartReducer from './reducers/cartReducer';
import productReducer from './reducers/productReducer';
import globalReducer from './reducers/globalReducer';
const store = configureStore({
  reducer: {
    userReducer,
    cartReducer,
    productReducer,
    globalReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export default store;
