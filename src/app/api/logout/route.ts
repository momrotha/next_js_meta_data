import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST() {
  const cookieStore = cookies();

  // Clear the "token" cookie
  (await
        // Clear the "token" cookie
        cookieStore).delete("token");

  return NextResponse.json({ message: "Logged out successfully." });
}
