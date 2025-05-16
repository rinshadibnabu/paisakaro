"use server"

import { prisma } from "@repo/db";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth";

export async function createOnTrampTransaction(provider: string, amount: number): Promise<{ message: string }> {
  const session = await getServerSession(authOptions)
  console.log(provider)
  console.log(session)
  if (!session?.user) {
    console.log(session?.user.id)
    console.log(session?.user)
    console.log("no user session")
    return {
      message: "unotharized request"

    }
  }

  const token = ((Math.random() * 1000).toString())
  try {
    await prisma.onRampTransaction.create({
      data: {
        provider,
        status: "Processing",
        startTime: new Date(),
        token: token,
        userId: Number(session.user?.id),
        amount: amount * 100
      }
    })
  } catch (e) {
    console.error(e)
  }


  return {
    message: "done"
  }
}
