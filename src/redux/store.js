import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./users-reducer";
import searchReducer from "./search-reducer";

const store = configureStore({
  reducer: {
    users: usersReducer,
    search: searchReducer
  },
});

export default store;
