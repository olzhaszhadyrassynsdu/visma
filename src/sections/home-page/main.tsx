import { FC } from "react";
import { bg } from "@/assets/images";
import { arrow } from "@/assets/icons";
import { Card } from "@/shared/ui";
export const Main: FC = () => {
  return (
    <section
      id="main"
      style={{ backgroundImage: `url(${bg})` }}
      className="min-h-screen py-28 bg-center bg-cover bg-repeat-none"
    >
      <div className="grid lg:grid-cols-2 justify-center text-white text-center">
        <div className="flex flex-col justify-center">
          <p className="text-5xl font-bold leading-[70px]">
            Тавимский морской <br /> порт VISMA
          </p>
          <p className="leading-6 mt-5">
            Vel posuere nibh odio placerat massa vel tellus <br /> tortor.
            Varius eget nunc scelerisque etiam felis <br /> facilisi ante
            viverra sem. Nunc eros elementum.
          </p>
          <div className="flex mt-16 justify-center">
            <p>о компании</p>
            <a href="#about-us" className="ml-4">
              <img src={arrow} />
            </a>
          </div>
        </div>
        <div className="mt-8 px-6 grid sm:grid-cols-2 gap-4">
          <Card
            title={"Услуги"}
            content={"Погрузочно-разгрузочная деятельность"}
          />
          <Card
            title={"Услуги"}
            content={"Погрузочно-разгрузочная деятельность"}
          />
          <Card
            title={"Услуги"}
            content={"Погрузочно-разгрузочная деятельность"}
          />
          <Card
            title={"Услуги"}
            content={"Погрузочно-разгрузочная деятельность"}
          />
        </div>
      </div>
    </section>
  );
};
