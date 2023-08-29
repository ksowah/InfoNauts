/* eslint-disable @next/next/no-img-element */

import { FaDiscord, FaInstagram, FaTwitter } from "react-icons/fa";

import { AiFillGithub } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import React from "react";
import { MdOutlineSupportAgent } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="w-full p-4 bg-primary sm:p-6 ">
      <div className="md:flex md:justify-between mt-2 md:mt-10">
        <div className="mb-6 md:mb-0">
          <div className="flex items-center">
            <img
              src="/assets/logo.png"
              className="mr-3 h-24"
              alt="InfoNauts Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
              InfoNauts
            </span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
          <div>
            <h2 className="mb-6 text-sm font-semibold text-active uppercase">
              About Us
            </h2>
            <ul className="text-gray-100">
              <li className="mb-4">
                <p className="hover:text-active cursor-pointer">Company</p>
              </li>
                <li className="mb-4">
                    <p className="hover:text-active cursor-pointer">Team</p>
                </li>
                <li className="mb-4">
                    <p className="hover:text-active cursor-pointer">Careers</p>
                </li>
                <li className="mb-4">
                    <p className="hover:text-active cursor-pointer">Blog</p>
                </li>

            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-active uppercase">
              Support
            </h2>
            <ul className="text-gray-100  ">
              <li className="mb-4">
                <p className="hover:text-active cursor-pointer">Help Center</p>
              </li>
                <li className="mb-4">
                    <p className="hover:text-active cursor-pointer">Contact Us</p>
                </li>
                <li className="mb-4">
                    <p className="hover:text-active cursor-pointer">Loans</p>
                </li>
                <li className="mb-4">
                    <p className="hover:text-active cursor-pointer">FAQ</p>
                </li>

            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-active uppercase">
              Contact
            </h2>
            <ul className="text-gray-100  ">
              <li className="mb-4">
                <p className="hover:text-active cursor-pointer">East Legon Avenue</p>
              </li>
              <li className="mb-4">
                <p className="hover:text-active cursor-pointer">www.InfoNautstest.com</p>
              </li>
              <li className="mb-4">
                <p className="hover:text-active cursor-pointer">+23356844331</p>
              </li>
                {/* live chat button */}
                <li className="cursor-pointer mb-4 bg-active gap-x-2 text-xl rounded-full py-2 px-4 flex items-center justify-center text-white">
                    <MdOutlineSupportAgent />
                    <p >Live Chat</p>
                </li>

            </ul>
          </div>
        </div>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div className="sm:flex sm:items-center sm:justify-between">
        <span className="text-sm text-gray-100 sm:text-center ">
          © 2022 <span className="hover:text-active cursor-pointer">InfoNauts™</span>. All Rights
          Reserved.
        </span>
        <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
          <a
            href="#"
            className="text-gray-100 hover:text-active"
          >
            <BsFacebook />
            <span className="sr-only">Facebook page</span>
          </a>
          <a
            href="#"
            className="text-gray-100 hover:text-active"
          >
            <FaInstagram />
            <span className="sr-only">Instagram page</span>
          </a>
          <a
            href="#"
            className="text-gray-100 hover:text-active"
          >
            <FaTwitter />
            <span className="sr-only">Twitter page</span>
          </a>
          <a
            href="#"
            className="text-gray-100 hover:text-active"
          >
            <AiFillGithub />
            <span className="sr-only">GitHub account</span>
          </a>
          <a
            href="#"
            className="text-gray-100 hover:text-active"
          >
            <FaDiscord />
            <span className="sr-only">Discord Account </span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
