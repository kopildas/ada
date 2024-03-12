import React from "react";

export const Footer = () => {
  return (
    <div className="w-full flex flex-col h-fit bg-red-00 px-5 md:px-[4rem] mt-10">
      <div className="w-full flex flex-col items-center justify-center h-80 bg-gradient-to-r from-slate-800 to-violet-900  rounded-2xl">
        <p className="font-extrabold text-[9rem] md:text-[12rem] bg-gradient-to-r from-slate-500 to-violet-600 inline-block text-transparent bg-clip-text z-10 -mt-10">
          ADA
        </p>
        <p className="font-extrabold text-8xl md:text-9xl bg-gradient-to-r from-slate-400 to-violet-100 inline-block text-transparent bg-clip-text z-0 -mt-24 md:-mt-32">
          NEWS
        </p>
      </div>

      <div className="w-full h-fit mt-10 flex flex-col md:flex-row items-center justify-between text-gray-900 gap-10 px-[4rem]">
        <div className="flex flex-col items-center justify-center">
          <p className="hover:text-blue-500 cursor-pointer duration-200 transition ease-in-out">About us</p>
          <p className="hover:text-blue-500 cursor-pointer duration-200 transition ease-in-out">Contact us</p>
          <p className="hover:text-blue-500 cursor-pointer duration-200 transition ease-in-out">Ada Sports</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="hover:text-blue-500 cursor-pointer duration-200 transition ease-in-out">The Ada Constitution</p>
          <p className="hover:text-blue-500 cursor-pointer duration-200 transition ease-in-out">Job opportunities</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="hover:text-blue-500 cursor-pointer duration-200 transition ease-in-out">Ada frequencies</p>
          <p className="hover:text-blue-500 cursor-pointer duration-200 transition ease-in-out">Ada Digital Services</p>
          <p className="hover:text-blue-500 cursor-pointer duration-200 transition ease-in-out">Ada Mandala</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="hover:text-blue-500 cursor-pointer duration-200 transition ease-in-out">Ada School</p>
          <p className="hover:text-blue-500 cursor-pointer duration-200 transition ease-in-out">The stars of Ada</p>
          <p className="hover:text-blue-500 cursor-pointer duration-200 transition ease-in-out">Ada School</p>
        </div>
      </div>
      <div className="w-full h-[1px] bg-gray-400 px-[5rem] mt-5 mb-2"></div>
      <div className="w-full flex items-center justify-center lg:px-[5rem] mb-5">
        <p className="text-gray-700 text-xs lg:text-base">© 2024 Audio Video Advertisement Entertainment Company For Satellite Broadcasting LTD.</p>
      </div>
    </div>
  );
};
