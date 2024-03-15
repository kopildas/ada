"use client";

import { usePathname } from "next/navigation";
import React from "react";
import {
  EmailShareButton,
  FacebookShareButton,
  WhatsappShareButton,
  TwitterShareButton,
  TelegramShareButton,
  EmailIcon,
  FacebookIcon,
  WhatsappIcon,
  TwitterIcon,
  TelegramIcon,
} from "react-share";

function Share_Buttons() {
  const currentURL = usePathname();
  const url ="https://adanews.vercel.app"
  const link = `${url}${currentURL}`;
//   console.log(link);
//   console.log(currentURL);

  return (
    <div className="flex gap-3 bg-red-0">
      <EmailShareButton url={link}>
          <EmailIcon className="w-8 h-8 rounded-full hover:scale-110 duration-500 transition ease-in-out "/>
      </EmailShareButton>
      <FacebookShareButton url={link}>
          <FacebookIcon className="w-8 h-8 rounded-full hover:scale-110 duration-500 transition ease-in-out "/>
      </FacebookShareButton>
      <WhatsappShareButton url={link}>
          <WhatsappIcon className="w-8 h-8 rounded-full hover:scale-110 duration-500 transition ease-in-out "/>
      </WhatsappShareButton>
      <TwitterShareButton url={link}>
          <TwitterIcon className="w-8 h-8 rounded-full hover:scale-110 duration-500 transition ease-in-out "/>
      </TwitterShareButton>
      <TelegramShareButton url={link}>
          <TelegramIcon className="w-8 h-8 rounded-full hover:scale-110 duration-500 transition ease-in-out "/>
      </TelegramShareButton>
    </div>
  );
}

export default Share_Buttons;
