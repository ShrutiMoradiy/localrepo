import { NextResponse } from "next/server";

export function middleware(request) {
    console.log("middleware");
    if (request.nextUrl.pathname === "/about") {
        return NextResponse.redirect("http://localhost:3000/login");
    }
}
