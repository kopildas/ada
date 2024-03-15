"use client";

import { usePathname } from "next/navigation";
import React from 'react'

interface FuncProps {
    HiddenFooter(arg: boolean):void
}


export const ShouldHideFooter: React.FC<FuncProps> = ({HiddenFooter}) => {
    const currentURL = usePathname();
    const hideFooterRoutes = [
        "/admin/dashboard",
        "/admin/products",
        "/admin/products/addproducts",
        "/admin/products/addproducts/edit",
        "/admin/users",
        "/admin/orders",
        "/admin/review",
      ];
      const HideFooter = hideFooterRoutes.some((path) =>
      path===currentURL
    );
    console.log(HideFooter)
  return (
    <div>ShouldHideFooter</div>
  )
}
