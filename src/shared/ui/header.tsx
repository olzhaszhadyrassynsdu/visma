import { FC } from "react";
import { icon, search } from "@/assets/icons";
import { Link } from "react-router-dom";

export const Header: FC = () => {
  return (
    <header className=" flex justify-center items-center py-8 lg:justify-between lg:pr-16 lg:pl-[312px]">
      <Link to="/">
        <img src={icon} />
      </Link>
      <nav className="hidden lg:block ">
        <ul>
          <li>
            <a href="#main" className="mr-8">
              Main
            </a>
            <a href="#services" className="mr-8">
              Services
            </a>
            <a href="#news" className="mr-8">
              News
            </a>
            <Link to="/contacts" className="mr-8">
              Contacts Form
            </Link>
            <a href="#footer">Footer</a>
          </li>
        </ul>
      </nav>
      <div className="flex">
        <img src={search} />
        <span className="ml-5 inline-block w-32 border-b-2 border-black"></span>
      </div>
    </header>
  );
};
