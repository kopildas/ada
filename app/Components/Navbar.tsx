

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
import { HamBurg_Menu } from "./HamBurg_Menu";

const Navbar = () => {
  
  return (
    <nav className="w-full h-40 flex bg-gradient-to-r from-slate-800 to-violet-900 px-">
      <div className="w-auto bg-green-00 h-full flex items-center justify-center gap- ml-5">
        <div className="w-32 md:w-36 h-full bg-rd-300 flex items-center justify-center">
          <Image src={logo} alt="ada logo" />
        </div>
        <div className="h-full bg-red-40 hidden  md:flex items-center justify-center px-5 w-auto">
          <button className="bg-slate-300 px-3 py-2 rounded-3xl text-lg text-blue-500 md:w-36 flex items-center justify-center">
          <div className="flex items-center gap-2"> <BsBroadcast className="text-xl"/> 
           <p className="">Live watch</p>
           </div>
          </button>
        </div>
        <div className="w-36 h-full bg-ed-200 hidden  md:flex items-center justify-center space-x-3">
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

      <div className="w-full hidden lg:block  bg-red-00 h-full mr-5">
        <div className="w-full h-20 bg-red-00 flex items-center justify-end gap-2 ">
          <div className="text-5xl "><TiWeatherPartlySunny/></div>
          <div className="flex flex-col ">
            <p>Today</p>
            <p className="font-semibold text-xl flex justify-end">9 C</p>
          </div>
        </div>
        <div className="w-full h-[1px] bg-gradient-to-r from-BASE_line to-slate-400"></div>
        <div className="w-full h-[79px] bg-reen-300 flex items-center justify-end">
          <ul>
            <li className="space-x-6 font-semibold text-base ">
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

      <div className="flex lg:hidden w-full flex-col gap-2 mr-2 ">
        <div className="w-full h-20 bg-red-00 flex items-center justify-end  ">
          <div className="text-5xl "><TiWeatherPartlySunny/></div>
          <div className="flex flex-col ">
            <p>Today</p>
            <p className="font-semibold text-xl flex justify-end">9 C</p>
          </div>
        </div>
        
        <div className="w-full h-[1px] bg-gradient-to-r from-BASE_line to-slate-400"></div>

        <div className="w-full h-10 flex items-center justify-end">
            <HamBurg_Menu/>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
