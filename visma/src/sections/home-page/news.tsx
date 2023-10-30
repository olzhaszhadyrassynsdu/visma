import { FC } from "react";
import { purpleArrow } from "@/assets/icons";
import { port } from "@/assets/images";
import { NewsCard } from "@/shared/ui/news-card";

export const News: FC = () => {
  const NewsBase = [
    {
      id: 1,
      date: "20/05/22",
      title: "Semper eu pulvinar eget integer",
      content:
        "Pretium duis phasellus netus ac. Nunc nibh nunc integer feugiat et aliquam cras",
    },
    {
      id: 2,
      date: "20/05/20",
      title: "Semper eu pulvinar eget integer",
      content:
        "Pretium duis phasellus netus ac. Nunc nibh nunc integer feugiat et aliquam cras",
    },
    {
      id: 3,
      date: "20/09/22",
      title: "lorem ipsum",
      content:
        "Pretium duis phasellus netus ac. Nunc nibh nunc integer feugiat et aliquam cras",
    },
    {
      id: 4,
      date: "10/05/22",
      title: "Semper eu pulvinar eget integer",
      content: "lorem",
    },
  ];

  return (
    <section id="news" className="px-8 pb-20">
      <div className="flex flex-col justify-center items-center sm:flex-row sm:justify-between">
        <h1 className="text-[40px] font-bold">Новости</h1>
        <div className="flex items-center">
          <p>все новости</p>
          <a href="#">
            <img
              src={purpleArrow}
              className="p-2 border-2 border-[#3D348B] rounded-full ml-4"
            />
          </a>
        </div>
      </div>
      <div className=" mt-8 grid justify-center sm:grid-cols-2 gap-4 lg:grid-cols-3 xl:grid-cols-4">
        {NewsBase.map((news) => (
          <NewsCard
            key={news.id}
            id={news.id}
            imgURL={port}
            date={news.date}
            title={news.title}
            content={news.content}
          />
        ))}
      </div>
    </section>
  );
};
