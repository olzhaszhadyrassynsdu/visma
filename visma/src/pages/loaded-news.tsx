import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showNews } from "@/features/news/news-slice";

export const LoadedNews: FC = (id) => {
  const loadedNews = useSelector((state) => state.loadedNews);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(showNews(id));
    console.log("test", loadedNews);
  }, [dispatch, id]);

  return (
    <>
      <div>Loaded News: </div>
      {loadedNews?.map((news) => (
        <div key={news.id}>{news.content}</div>
      ))}
    </>
  );
};
