"use client"
import { Button } from "@repo/ui/Button";
import { Card } from "@repo/ui/Card";
import { Center } from "@repo/ui/Center"
import { TextInput } from "@repo/ui/TextInput";
import { useState } from "react";
import { p2pTansfer } from "../lib/actions/p2ptransaction";
export const SendCard = () => {
  const [number, setNumber] = useState("")
  const [amount, setAmount] = useState(0)
  const [status, setStatus] = useState("processing")

  return (
    <div className="h-[90vh] w-[100%]">
      <Center>

        <Card title="Send">
          <TextInput placeholder={"Number"} label="Number" onChange={(value) => {
            setNumber(value)
          }}></TextInput>
          <TextInput placeholder={"Amount"} label="Amount" onChange={(value) => {
            setAmount(Number(value) * 100)
          }}></TextInput>
          <div className="flex justify-center items-center">
            <Button className="mt-4" onClick={() => {
              let stauts = p2pTansfer(number, amount)
              setStatus("success")

            }}>
              Send
            </Button>

          </div>

        </Card>

      </Center>
    </div>

  )
}

export default SendCard 
