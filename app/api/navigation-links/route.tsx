import { builder } from "@builder.io/sdk";
import { NextResponse } from "next/server";

// Builder Public API Key set in .env file
builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

export async function GET() {
  const result = await builder.get("navigation-links", {}).promise();

  //console.log("result", result);
  return NextResponse.json(result);
  //return result;  // Return the navigation content
}
