"use server"

import { getServerSession } from "next-auth"
import { authOptions } from "../auth"
import { prisma } from "@repo/db"
import { Session } from "next-auth"


export async function p2pTansfer(recieverNumber: string, amount: number) {
  console.log("reached here")
  if (!recieverNumber || isNaN(Number(recieverNumber))) {
    return {
      success: false,
      message: 'Invalid reciever phone Number'
    }
  }

  if (!amount || isNaN(Number(amount))) {
    return {
      success: false,
      message: 'Invalid transfer amount'
    }
  }

  const session: Session | null = await getServerSession(authOptions)
  const senderId = session?.user.id
  const number = session?.user.email

  if (!session || !senderId) {
    return {
      success: false,
      message: "user Not authaticated"
    }
  }
  let sender = null
  let reciever: {
    id: number;
    email: string | null;
    name: string | null;
  } | null = null
  try {
    if (number === null) {
      return {
        success: false,
        message: "user Not authaticated"
      }
    }
    sender = await prisma.user.findUnique({
      where: {
        number: number
      },
      select: {
        id: true,
      }

    })
    if (!sender) {
      return {
        success: false,
        message: "user Not authaticated"
      }
    }
    reciever = await prisma.user.findFirst({
      where: {
        number: recieverNumber
      },
      select: {
        id: true,
        email: true,
        name: true
      }
    })


    try {
      await prisma.$transaction(async (tx) => {
        let senderBalance = await tx.balance.findUnique({
          where: {
            userId: Number(senderId)
          }
        })


        if (reciever === null || reciever.id === null) {
          return {
            success: false,
            message: "no sende found"
          }
        }
        if (!senderBalance) {
          return {
            success: false,
            message: "insuffient amount"
          }
        }

        await tx.$queryRaw`SELECT * FROM "Balance" WHERE "userId" = ${Number(senderId)} FOR UPDATE`
        if (senderBalance.amount < amount) {
          return {
            success: false,
            message: "insuffient amount"
          }
        }
        await tx.balance.update(({
          where: {
            userId: Number(senderId)
          },
          data: {
            amount: {
              decrement: amount
            }
          }
        }))
        await tx.balance.upsert({
          where: {
            userId: Number(reciever.id)
          },
          update: {
            amount: {
              increment: amount
            }
          },
          create: {
            amount: amount,
            locked: 0,
            userId: Number(reciever?.id)
          }
        })


        try {
          await tx.p2pTransfer.create({
            data: {
              timeStamp: new Date,
              amount: amount,
              senderUserId: Number(senderId),
              receiverUserId: Number(reciever.id)
            }
          })

        } catch (error) {

          throw error

        }

        console.log("balance created or updated for reaciver")
      })


    } catch (error) {

      console.error("error while transaction")
      return {
        success: false,
        code: 500,
        message: "interalSeval error"
      }
    }
  } catch (error) {
    console.error("prisma error while finding uninque number")
    return {
      success: false,
      code: 500,
      message: "interalSeval error"
    }
  }
}
