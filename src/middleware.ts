// 미들웨어로 페이지 접근 권한 설정
import { auth } from "./auth"
import {NextResponse} from "next/server";

export async function middleware() {
  const session = await auth();
  // if (!session) {
  //   return NextResponse.redirect('http://localhost:3000/i/flow/login');
  // }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/compose/tweet', '/home', '/explore', '/messages', '/search'],
}