import { visma } from "@/assets/icons";
import { FooterCard } from "@/shared/ui/footer-card";
import { FC } from "react";
import { location, phone, email } from "@/assets/icons";

export const Footer: FC = () => {
  return (
    <footer
      id="footer"
      className="bg-[#3D348B] flex flex-col flex-wrap items-center p-6 lg:flex-row lg:justify-between"
    >
      <img src={visma} className="max-lg:mb-8" />
      <FooterCard
        imgURL={location}
        text="123456, г. Тавима, ул. Морская, д. 21"
      />
      <FooterCard imgURL={phone} text="+7 (123) 456-67-89" />
      <FooterCard imgURL={email} text="order@visma.ru" />
    </footer>
  );
};
