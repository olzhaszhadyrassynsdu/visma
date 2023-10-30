import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  loadedNews: [] as News[],
};

type News = {
  content: string;
  id: string;
};

export const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    loadNews: (state, action) => {
      const news: News = {
        content: action.payload,
        id: nanoid(),
      };
      state.loadedNews.push(news);
    },
    showNews: (state, action) => {
      state.loadedNews = state.loadedNews.filter(
        (news) => news.id !== action.payload
      );
    },
  },
});

export const { loadNews, showNews } = newsSlice.actions;
export default newsSlice.reducer;
