"use server"

import { getServerSession } from "next-auth"
import { authOptions } from "../auth"
import { prisma } from "@repo/db"
import { Session } from "next-auth"


export async function p2pTansfer(recieverNumber: string, amount: number) {

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
  console.log(number)
  console.log(senderId)
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
        if (!senderBalance || senderBalance.amount < amount) {
          return {
            success: false,
            message: "insuffient amount"
          }
        }
        console.log("senderbalance done ")
        //now i want to do like this because of updating the wallet without locking
        //i avoided the serialize cause of locking all of the rows
        // await tx.$queryRaw`
        // BEGIN;
        // SELECT amount FROM "Balance" WHERE userId ${senderId}
        // SET amount = amount + ${amount}
        // COMMIT
        // FOR UPDATE`       
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
        console.log("blaance update done for sender")
        console.log()
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

        console.log("balance created or updated for reaciver")
        // await tx.$queryRaw`
        // BEGIN;
        // SELECT amount FROM "Balance" WHERE userId ${recieverId}
        // SET amount = amount - ${amount}
        // COMMIT
        // FOR UPDATE`       

      })


    } catch (error) {
      console.error("error while transaction")
      console.log(error)
    }
  } catch (error) {
    console.error("prisma error while finding uninque number")

  }
}


