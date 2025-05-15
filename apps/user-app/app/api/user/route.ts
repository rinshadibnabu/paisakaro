import { NextRequest, NextResponse } from "next/server"
import { prisma } from "@repo/db";



export const GET = async () => {

  return NextResponse.json({
    message: "hi there"
  })
}
