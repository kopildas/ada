import { NextRequest, NextResponse } from "next/server";
import { analytics } from "./utils/analytics";

export default async function middleware(req: NextRequest) {
  if (req.nextUrl.pathname === "/" ) {
    try {
        analytics.track('pageview', {
          page: '/',
          country: req.geo?.country,
        })
      console.log("tracked hihihi");
      const link = new URL(`${process.env.NEXTAUTH_URL}/api/addviewer`);
      console.log("Link frm middleware = "+link)
    } catch (err) {
      // fail silently to not affect request
      console.error(err);
    }
  }

  return NextResponse.next();
}

export const matcher = {
  matcher: ["/"],
};
