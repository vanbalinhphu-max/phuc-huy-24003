import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(request) {
  const body = await request.json();
  const { userName, password } = body;

  if(userName !== "admin" || password !== "admin") {
    return NextResponse.json(
      { message: "Username hoặc password không đúng. Vui lòng thử lại." },
      { status: 401 }
    )
  }

  const accessToken = "your-access-token";

  const cookieStore = await cookies();

  cookieStore.set("access_token", accessToken, {
    httpOnly: true, //ngăn phía client truy cập cookie
    secure: process.env.NODE_ENV === "production", //chỉ gửi cookie qua HTTPS trong production
    maxAge: 60 * 60 * 24 * 7, //1 tuần
    path: "/", //cookie có hiệu lực trên toàn bộ trang
  })

  return NextResponse.json({ accessToken });
}

