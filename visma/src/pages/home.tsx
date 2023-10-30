import { FC } from "react";
import { Section } from "@/sections";
import { Header, Footer } from "@/shared/ui";
import { motion } from "framer-motion";

export const Home: FC = () => {
  return (
    <>
      <motion.main
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        exit={{ x: "100%", transition: { duration: 0.1 } }}
      >
        <Header />
        <Section.Main />
        <Section.Services />
        <Section.News />
        <Footer />
      </motion.main>
    </>
  );
};
