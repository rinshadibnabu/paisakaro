"use server"

import { prisma } from "@repo/db";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth";

export async function createOnTrampTransaction(provider: string, amount: number): Promise<{ message: string }> {
  const session = await getServerSession(authOptions)

  if (!session?.user) {
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
