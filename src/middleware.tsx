import { NextResponse } from "next/server";

export function middleware (request
    ) {
    console.log("middleware");
    // if(request.nextUrl.pathname!="http://localhost:3000/login") 
    
        return NextResponse.redirect(new URL("http://localhost:3000/login",request.url))

    // return NextResponse.redirect("http://localhost:3000/login");
}

export const config = {
    metcher: "http://localhost:3000/:path*"
}