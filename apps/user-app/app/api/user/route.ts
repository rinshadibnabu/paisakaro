import { NextRequest, NextResponse } from "next/server"
import { prisma } from "@repo/db";



export const GET = async () => {

  await prisma.user.create({
    data: {
      email: "asaljfd@gmail.com",
      name: "adsadsakjlaj"
    }
  })
  return NextResponse.json({
    message: "hi there"
  })
}
