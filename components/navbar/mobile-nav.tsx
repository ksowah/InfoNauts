/* eslint-disable @next/next/no-img-element */

import { MdOutlineRestaurantMenu, MdShoppingBasket } from "react-icons/md";

import { AiOutlineClose } from "react-icons/ai";
import Link from "next/link";
import { motion } from "framer-motion";

const MobileNav = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: any;
}) => {
  return (
    <div className="flex flex-col bg-cardOverlay backdrop-blur-sm items-start justify-start gap-y-10 w-screen h-screen  overflow-y-hidden  z-50 overflow-hidden ">
      <motion.div className="flex items-center justify-end w-screen h-14  px-10 py-2">
        <motion.div
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, x: 200 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 200 }}
          className="relative flex items-center justify-center text-textColor"
          onClick={() => setIsOpen(!isOpen)}
        >
          <AiOutlineClose className="text-headingColor text-2xl" />
        </motion.div>
      </motion.div>
      <div
        className={`flex items-center justify-center w-full  h-72 gap-10 flex-col`}
      >
        <p className="text-base text-active cursor-pointer hover:text-headingColor duration-100 transition-all ease-in-out px-10">
          Home
        </p>
        <Link href={"/about"} className="text-base text-textColor cursor-pointer hover:text-headingColor duration-100 transition-all ease-in-out px-10">
          About Us
        </Link>
        <p className="text-base text-textColor cursor-pointer hover:text-headingColor duration-100 transition-all ease-in-out px-10">
          Feature
        </p>
        <p className="text-base text-textColor cursor-pointer hover:text-headingColor duration-100 transition-all ease-in-out px-10">
          Help
        </p>
        <p className="text-base text-textColor cursor-pointer hover:text-headingColor duration-100 transition-all ease-in-out px-10">
          Contact Us
        </p>
      </div>

      <div
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center  justify-center w-full"
      >
        <motion.div
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.1 }}
          className="flex px-2 items-center justify-center gap-x-2 cursor-pointer"
        >
          <img
            src={"/assets/logo.png"}
            alt="Logo"
            className="w-16 object-cover"
          />
          <p className="text-textColor text-3xl font-bold">InfoNauts</p>
        </motion.div>
      </div>
    </div>
  );
};

export default MobileNav;
