// import React from 'react'

import Link from "next/link";
import { MdShoppingBasket } from "react-icons/md";
import { motion } from "framer-motion";

const Navigations = ({ direction }: { direction?: string }) => {
  return (
    <div className="flex items-center gap-8">
      <motion.ul
        initial={{ opacity: 0, x: 200 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 200 }}
        className={`flex items-center gap-8 ${direction && direction}`}
      >
        <motion.li
          whileHover={{ scale: 1.1 }}
          className="md:text-sm lg:text-md text-base text-active hover:text-active cursor-pointer hover:text-headingColor duration-100 transition-all ease-in-out"
        >
          <Link href={"/"}>Home</Link>
        </motion.li>
        <motion.li
          whileHover={{ scale: 1.1 }}
          className="md:text-sm lg:text-md text-base text-textColor hover:text-active cursor-pointer hover:text-headingColor duration-100 transition-all ease-in-out"
        >
          <Link href={"/about"}>About Us</Link>
        </motion.li>
        <motion.li
          whileHover={{ scale: 1.1 }}
          className="md:text-sm lg:text-md text-base text-textColor hover:text-active cursor-pointer hover:text-headingColor duration-100 transition-all ease-in-out"
        >
          <Link href={"/#"}>Features</Link>
        </motion.li>
        <motion.li
          whileHover={{ scale: 1.1 }}
          className="md:text-sm lg:text-md text-base text-textColor hover:text-active cursor-pointer hover:text-headingColor duration-100 transition-all ease-in-out"
        >
          <Link href={"/#"}>Help</Link>
        </motion.li>
        <motion.li
          whileHover={{ scale: 1.1 }}
          className="md:text-sm lg:text-md text-base text-textColor hover:text-active cursor-pointer hover:text-headingColor duration-100 transition-all ease-in-out"
        >
          Contact us
        </motion.li>
      </motion.ul>
    </div>
  );
};

export default Navigations;
