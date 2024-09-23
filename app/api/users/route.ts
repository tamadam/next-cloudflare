import { NextRequest, NextResponse } from "next/server";

export const runtime = "edge";

export async function GET(request: NextRequest) {
  const data = await fetch("https://dummyjson.com/users").then((res) =>
    res.json()
  );

  /* console.log(data); */

  return NextResponse.json(data, { status: 200 });
}

export async function POST(request: NextRequest) {
  const body = request.json();

  console.log(body);

  // DATABASE STUFF

  return NextResponse.json(
    { data: "Good Stuff", message: "Successful POST request" },
    { status: 201 }
  );
}
