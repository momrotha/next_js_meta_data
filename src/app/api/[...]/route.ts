import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const url = new URL(req.url);
  const queryParam = new URLSearchParams(url.searchParams.toString());

  try {
    const token = (await cookies()).get("token")?.value;
    console.log(token);

    // Optional: send back something
    return NextResponse.json({ message: "Token received", token });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}
