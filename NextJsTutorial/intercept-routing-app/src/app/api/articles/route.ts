import {NextResponse} from "next/server";
import db from "@/db"
export async function GET(request: Request) {
  console.log(request)
  return "1"
}

export async function POST(request: Request) {
  const data = await request.json()

  await db.update(({posts})=> posts.push({
    id: Math.random().toString(36).slice(-8),
    ...data
  }))
  console.log(db.data)
  return NextResponse.json({
    code: 0,
    message: "add succesfully",
    data
  })
}