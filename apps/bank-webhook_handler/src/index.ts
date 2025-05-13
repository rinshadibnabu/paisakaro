import { prisma } from "@repo/db";
import express, { Response, Request } from "express";
const app = express();
app.post("/hdfcWebhook", async (req: Request, res: Response) => {
  //TODO: Add zod validation here?
  const paymentInformation = {
    token: req.body.token,
    userId: req.body.user_identifier,
    amount: req.body.amount
  };

  try {
    await prisma.onRampTransaction.update({
      where: {
        token: paymentInformation.token
      },
      data: {
        status: "Processing"
      }
    })

  } catch (error) {
    res.status(500).json({
      msg: "onRamp Processing update faled",
      error: error
    })
  }

  try {
    await prisma.$transaction([
      prisma.balance.update({
        where: {
          userId: paymentInformation.userId,

        },
        data: {
          amount: {
            increment: paymentInformation.amount
          }
        }
      }),

      prisma.onRampTransaction.update({
        where: {
          token: paymentInformation.token,

        },
        data: {
          status: "Success"
        }
      })
    ])

    res.status(200).json({
      msg: "captured"
    })

  } catch (e) {

    await prisma.onRampTransaction.update({
      where: {
        token: paymentInformation.token,
      },
      data: {
        status: "Failure"
      }
    })
    res.status(500).json({
      msg: "onTramp Success updatig failed",
      error: e
    })
  }
})
