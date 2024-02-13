

import Image from "next/image";
import React from "react";
import logo from "@/public/images/ada-logo.png";
import Link from "next/link";
import {
  FaLinkedinIn,
  FaGithub,
  FaTwitter,
  FaInstagram,
  FaTiktok,
  FaFacebookF,
} from "react-icons/fa";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { BsBroadcast } from "react-icons/bs";

import AuthNavContent from "./AuthNavContent";

const Navbar = () => {
  
  return (
    <nav className="w-full h-40 flex bg-gradient-to-r from-slate-800 to-violet-900 px-10">
      <div className="w-auto bg-green-00 h-full flex items-center justify-center gap-">
        <div className="w-32 md:w-60 h-full bg-rd-300 flex items-center justify-center">
          <Image src={logo} alt="ada logo" />
        </div>
        <div className="h-full bg-red-40 hidden  md:flex items-center justify-center px-5 w-auto">
          <button className="bg-slate-300 px-2 py-2 rounded-3xl text-lg text-blue-500 w-40 flex items-center justify-center">
          <div className="flex items-center gap-2"> <BsBroadcast className="text-2xl"/> 
           <p className="">Live watch</p>
           </div>
          </button>
        </div>
        <div className="w-40 h-full bg-ed-200 hidden  md:flex items-center justify-center space-x-3">
          <Link href="">
            <FaLinkedinIn className="hover:text-blue-500 transition ease-in-out duration-200" />{" "}
          </Link>
          <Link href="">
            <FaTiktok className="hover:text-blue-500 transition ease-in-out duration-200" />{" "}
          </Link>
          <Link href="">
            <FaTwitter className="hover:text-blue-500 transition ease-in-out duration-200" />{" "}
          </Link>
          <Link href="">
            <FaInstagram className="hover:text-blue-500 transition ease-in-out duration-200" />{" "}
          </Link>
          <Link href="">
            <FaFacebookF className="hover:text-blue-500 transition ease-in-out duration-200" />
          </Link>{" "}
        </div>
      </div>
      <div className="w-full hidden md:block  bg-red-90 h-full">
        <div className="w-full h-20 bg-red-00 flex items-center justify-end gap-2">
          <div className="text-5xl"><TiWeatherPartlySunny/></div>
          <div className="flex flex-col">
            <p>Today</p>
            <p className="font-semibold text-xl flex justify-end">9 C</p>
          </div>
        </div>
        <div className="w-full h-[1px] bg-gradient-to-r from-BASE_line to-slate-400"></div>
        <div className="w-full h-[79px] bg-reen-300 flex items-center justify-end">
          <ul>
            <li className="space-x-10 font-semibold text-lg ">
              <Link
                className="hover:text-blue-500 transition ease-in-out duration-200"
                href="/world"
              >
                World
              </Link>
              <Link
                className="hover:text-blue-500 transition ease-in-out duration-200"
                href="/business"
              >
                Business
              </Link>
              <Link
                className="hover:text-blue-500 transition ease-in-out duration-200"
                href="/science"
              >
                Science
              </Link>
              <Link
                className="hover:text-blue-500 transition ease-in-out duration-200"
                href="/health"
              >
                Health
              </Link>
              <Link
                className="hover:text-blue-500 transition ease-in-out duration-200"
                href="/sport"
              >
                Sport
              </Link>
              <Link
                className="hover:text-blue-500 transition ease-in-out duration-200"
                href="/lifestyle"
              >
                Lifestyle
              </Link>
              <Link
                className="hover:text-blue-500 transition ease-in-out duration-200"
                href="/food"
              >
                Food
              </Link>
              <Link
                className="hover:text-blue-500 transition ease-in-out duration-200"
                href="/travel"
              >
                Travel
              </Link>
              <AuthNavContent/>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
