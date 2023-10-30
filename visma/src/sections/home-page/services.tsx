import { FC } from "react";
import { pdf } from "@/assets/icons";
import { ServicesCard } from "@/shared/ui";
export const Services: FC = () => {
  return (
    <section id="services" className="py-20 grid lg:grid-cols-2">
      <div className="text-[#3D348B]">
        <h1 className="text-center text-black text-[40px] font-bold">Услуги</h1>
        <div className="flex justify-center items-center mt-12">
          <p>
            Тарифы на услуги по обеспечению <br />
            контроля доступа на территорию <br /> VISMA на 2022 год
          </p>
          <a href="#">
            <img
              src={pdf}
              alt="pdf"
              className="ml-3 bg-[#5DB7DE] rounded-lg px-5 py-4 object-contain"
            />
          </a>
        </div>
        <div className="flex justify-center items-center mt-12">
          <p>
            Тарифы на услуги по обеспечению <br />
            контроля доступа на территорию <br /> VISMA на 2022 год
          </p>
          <a href="#">
            <img
              src={pdf}
              alt="pdf"
              className="ml-3 bg-[#5DB7DE] rounded-lg px-5 py-4 object-contain"
            />
          </a>
        </div>
        <div className="flex justify-center items-center mt-12">
          <p>
            Тарифы на услуги по обеспечению <br />
            контроля доступа на территорию <br /> VISMA на 2022 год
          </p>
          <a href="#">
            <img
              src={pdf}
              alt="pdf"
              className="ml-3 bg-[#5DB7DE] rounded-lg px-5 py-4 object-contain"
            />
          </a>
        </div>
      </div>
      <div className="mt-16 px-6 grid sm:grid-cols-2 gap-4">
        <ServicesCard title="Услуги" content="Хранение грузов" />
        <ServicesCard title="Услуги" content="Хранение грузов" />
        <ServicesCard title="Услуги" content="Хранение грузов" />
        <ServicesCard title="Услуги" content="Хранение грузов" />
        <ServicesCard title="Услуги" content="Хранение грузов" />
        <ServicesCard title="Услуги" content="Хранение грузов" />
      </div>
    </section>
  );
};
