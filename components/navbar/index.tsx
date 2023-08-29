/* eslint-disable @next/next/no-img-element */

import CallToAction from "./CallToAction";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import Link from "next/link";
import MobileNav from "./mobile-nav";
import Navigations from "./Navs";
import { motion } from "framer-motion";
import { useState } from "react";

const Header = ({ bg }: { bg?: boolean }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenMobileNav, setIsOpenMobileNav] = useState(false);

  return (
    <header
      className={`
    w-full fixed top-0 z-50  md:p-3 md:px-4 lg:p-4 lg:px-16
    ${bg ? "bg-primary" : "bg-cardOverlay backdrop-blur-md"}
    `}
    >
      {/* Tablet and Desktop */}
      <div className="hidden md:flex w-full justify-between itesm-center">
        <Link href={"/"}>
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="flex items-center gap-2 cursor-pointer"
          >
            <img
              src={"/assets/logo.png"}
              alt="Logo"
              className="md:w-6 lg:w-8 object-cover"
            />
            <p className="text-white md:text-lg lg:text-xl font-bold">InfoNauts</p>
          </motion.div>
        </Link>

        {/* navigation */}
        <Navigations />

        <CallToAction text={"Request Demo"} />
      </div>

      {/* Mobile */}
      <motion.div
        className="flex md:hidden w-full p-0 items-center justify-between"
        initial={{ opacity: 0, x: 200 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 200 }}
      >
        {isOpenMobileNav ? (
          <MobileNav isOpen={isOpenMobileNav} setIsOpen={setIsOpenMobileNav} />
        ) : (
          <div className="p-5 flex items-center justify-between w-full">
            <motion.div
              whileTap={{ scale: 0.9 }}
              className=" flex items-center justify-center"
              onClick={() => setIsOpenMobileNav(!isOpenMobileNav)}
            >
              <HiOutlineMenuAlt2 className="text-textColor text-4xl" />
            </motion.div>
            <Link href={"/"}>
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="flex items-center gap-2 cursor-pointer"
              >
                <img
                  src={"/assets/logo.png"}
                  alt="Logo"
                  className="w-8 object-cover"
                />
                <p className="text-textColor text-xl font-bold">InfoNauts</p>
              </motion.div>
            </Link>

            <CallToAction mobile />
          </div>
        )}
      </motion.div>
    </header>
  );
};

export default Header;
