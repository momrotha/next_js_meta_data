import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const body = await req.json();

  // Example logic
  console.log("User signing up:", body);

  return NextResponse.json({
    message: "Signup successful",
    user: body,
  });
}
