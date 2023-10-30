import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/todo-slice";
import newsReducer from "../features/news/news-slice";

export const store = configureStore({
  reducer: {
    todoReducer,
    newsReducer,
  },
});
