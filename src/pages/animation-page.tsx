import { FC, useState } from "react";
import { motion } from "framer-motion";

export const Animation: FC = () => {
  const [rotate, setRotate] = useState(false);
  const [move, setMove] = useState(false);
  return (
    <div className="bg-green-500 min-h-screen flex justify-center items-center gap-12">
      <motion.div
        animate={{ rotate: rotate ? 360 : 0 }}
        onClick={() => setRotate(!rotate)}
        className="w-[300px] h-[300px] bg-purple-700 rounded-xl"
      ></motion.div>
      <motion.div
        animate={{ y: move ? 200 : 0, scale: move ? 0.5 : 1 }}
        transition={{ type: "tween", duration: 1.5 }}
        onClick={() => setMove(!move)}
        className="w-[300px] h-[300px] bg-purple-700 rounded-xl"
      ></motion.div>
      <motion.div
        drag
        whileDrag={{ scale: 1.5 }}
        className="w-[300px] h-[300px] bg-purple-700 rounded-xl"
      ></motion.div>
    </div>
  );
};
