import { NextRequest } from "next/server";
import { headers } from "next/headers";

export const GET = async (req: NextRequest) => {
  // const header = await new Headers(req.headers)
  // console.log(header.get("Authorization"));
  const headerLists = headers()
  console.log(headerLists.get("Authorization"));
  return new Response('profile data')
};
