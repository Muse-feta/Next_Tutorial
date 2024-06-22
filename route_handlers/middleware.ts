import { type NextRequest, NextResponse } from "next/server";

export const middleware = (req: NextRequest) => {
    if(req.nextUrl.pathname === "/profile"){
        return NextResponse.redirect(new URL("/hello", req.url))
    }
    // return NextResponse.redirect(new URL("/", req.url))
}

// export const config = {
//     matcher: '/profile'
// }