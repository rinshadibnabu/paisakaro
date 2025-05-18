"use server"
import { prisma } from "@repo/db";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth";
let session = await getServerSession(authOptions)
let userId = session?.user.id
let number = session?.user.email
let userName = session?.user.name

export async function getBalance() {
  const balance = await prisma.balance.findFirst({
    where: {
      userId: Number(userId)
    }
  });
  return {
    amount: balance?.amount || 0,
    locked: balance?.locked || 0
  }
}

export async function getOnRampTransactions() {
  const txns = await prisma.onRampTransaction.findMany({
    where: {
      userId: Number(userId)
    },
  });
  return txns.map(t => ({
    time: t.startTime,
    amount: t.amount,
    status: t.status,
    provider: t.provider
  }))
}


export async function getReacievedTransactionHistory() {
  const txns = await prisma.p2pTransfer.findMany({
    where: {
      receiverUserId: Number(userId)
    }
  })
  return txns
}

export async function getTransactionHistory() {
  const txns = await prisma.p2pTransfer.findMany({
    where: {
      OR: [{
        senderUserId: Number(userId),

      },
      {
        receiverUserId: Number(userId)
      }
      ]
    },
    include: {
      sentUser: {
        omit: {
          password: true,
          id: true
        }
      },
      receivedUser: {
        omit: {
          password: true,
          id: true
        }
      }

    },

    orderBy: {
      timeStamp: "asc"
    },
    omit: {
      senderUserId: true,
      receiverUserId: true,
    }
  })
  const tranSaction = txns.map((txn) => {
    const transformedTxn = {
      ...txn,
      type: txn.sentUser.name == name ? 'sent' : 'received'
    };

    return transformedTxn;
  })

  return tranSaction
}
export async function getSendedTransactionHistory(userId: number) {
  const txns = await prisma.p2pTransfer.findMany({
    where: {
      senderUserId: Number(userId)
    }
  })

  return txns
}



