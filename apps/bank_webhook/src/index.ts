import { prisma } from "@repo/db";
import express from "express";
import type { Response, Request } from "express";
import z, { SafeParseError, SafeParseSuccess } from "zod";
const app = express();
app.use(express.json())

const webhookSchema = z.object({
  token: z.string(),
  user_identifier: z.number(),
  amount: z.number().positive(),
});

app.post("/hdfcWebhook", async (req: Request, res: Response) => {

  const parseResult = webhookSchema.safeParse(req.body);

  if (!parseResult.success) {
    res.status(400).json({
      msg: "Invalid request body",
      error: parseResult.error.flatten(),
    });
    return
  }


  const paymentInformation = {
    token: parseResult.data.token,
    userId: parseResult.data.user_identifier,
    amount: parseResult.data.amount,
  };


  try {
    let onTramp = await prisma.onRampTransaction.findUnique({
      where: {
        token: paymentInformation.token
      }
    })

    if (!onTramp || onTramp.token !== paymentInformation.token) {
      res.status(400).json({
        msg: "Invalid token",
        error: "token doesn't match",
      });
      return
    }



    if (onTramp.status === 'Success') {
      res.status(400).json({
        msg: "succesfull onTramp transaction ",
        error: "token doesn't match",
      });
      return
    }

  } catch (e) {
    console.log(e)
  }

  try {

    await prisma.$transaction(async (tx) => {
      await tx.balance.upsert({
        where: {
          userId: paymentInformation.userId,
        },
        update: {
          amount: {
            increment: paymentInformation.amount
          }
        },
        create: {
          userId: Number(paymentInformation.userId),
          amount: paymentInformation.amount,
          locked: 0,
        }
      }),

        await tx.onRampTransaction.update({
          where: {
            token: paymentInformation.token,

          },
          data: {
            status: "Success"
          }
        })

    })

    res.status(200).json({
      msg: "captured"
    })

  } catch (e) {
    console.log(e)
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
      error: e,
    })
  }
})

app.get("/health", async (req: Request, res: Response) => {
  res.status(200).json({
    msg: "server is up"
  })
})
app.listen(3003)
