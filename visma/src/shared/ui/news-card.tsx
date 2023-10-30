import { FC } from "react";
import { useDispatch } from "react-redux";
import { loadNews } from "@/features/news/news-slice";
import { Link } from "react-router-dom";

export const NewsCard: FC = ({ imgURL, date, title, content, id }) => {
  const dispatch = useDispatch();

  // const [news, setNews] = useState([]);

  // const newsHandler = (content: string, id: number) => {
  //   setNews([content, id]);
  //   dispatch(loadNews(news));
  //   console.log(news);
  // };

  // const loadNewsHandler = (content: string) => {
  //   dispatch(loadNews(content));
  // };

  return (
    <div className="flex flex-col flex-wrap max-w-[306px]">
      <img src={imgURL} className="self-start" />
      <p>{date}</p>
      <p>{title}</p>
      <button
        className="p-4 rounded-2xl bg-black text-white"
        onClick={() => dispatch(loadNews(content))}
      >
        <Link to="/loadedNews" id={id}>
          show more
        </Link>
      </button>
    </div>
  );
};
