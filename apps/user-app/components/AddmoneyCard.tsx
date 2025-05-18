"use client"
import { Button } from "@repo/ui/Button";
import { Card } from "@repo/ui/Card";
import { Center } from "@repo/ui/Center";
import { Select } from "@repo/ui/Select";
import { TextInput } from "@repo/ui/textinput";
import { use, useState } from "react";
import { createOnTrampTransaction } from "../lib/actions/onRampingTransaction";

const SUPPORTED_BANKS = [{
  name: "HDFC Bank",
  redirectUrl: "https://netbanking.hdfcbank.com"
}, {
  name: "Axis Bank",
  redirectUrl: "https://www.axisbank.com/"
}];

export const AddMoney = () => {
  const [redirectUrl, setRedirectUrl] = useState(SUPPORTED_BANKS[0]?.redirectUrl);
  const [amount, setAmount] = useState(0)
  const [provider, setProvider] = useState(SUPPORTED_BANKS[0]?.name)

  return <Card title="Add Money to your wallet">
    <div className="w-full">
      <TextInput label={"Amount"} placeholder={"Amount"} onChange={(value) => {
        setAmount(Number(value) * 100)
      }} />
      <div className="py-4 text-left">
        Bank
      </div>
      <Select onSelect={(value) => {
        setProvider(value)
        setRedirectUrl(SUPPORTED_BANKS.find(x => x.name === value)?.redirectUrl || "")
      }} options={SUPPORTED_BANKS.map(x => ({
        key: x.name,
        value: x.name
      }))} />
      <div className="flex justify-center pt-4">
        <Button className="" onClick={() => {
          createOnTrampTransaction(provider || "", amount)
        }}>
          Add Money
        </Button>
      </div>
    </div>
  </Card>
}
