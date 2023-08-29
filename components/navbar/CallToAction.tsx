import { AiOutlineDownload } from "react-icons/ai";
import { motion } from "framer-motion";

const CallToAction = ({
  text,
  mobile,
}: {
  text?: string;
  mobile?: boolean;
}) => {
  return (
    <motion.div
      className={`h-10 flex items-center text-sm bg-active gap-x-3 px-3 rounded-lg md:rounded-full cursor-pointer`}
      whileTap={{ scale: 0.97 }}
      whileHover={{ scale: 1.01 }}
    >
      <AiOutlineDownload
        className={`text-white ${mobile && "text-xl text-headingColor"}`}
      />
      {text && <p className="text-white text-sm">{text}</p>}
    </motion.div>
  );
};

export default CallToAction;
