import { getServerSession } from "next-auth";
import { AddMoney } from "../../../components/AddmoneyCard";
import { BalanceCard } from "../../../components/BalanceCard";
import { OnRampTransactions } from "../../../components/onRampTransaction";
import { getBalance, getOnRampTransactions } from "../../../lib/dbQureies";
import { authOptions } from "../../../lib/auth";


async function getUserId() {
  const session = await getServerSession(authOptions)
  if (!session?.user.id) {
    return 0
  } else {
    return session?.user?.id
  }

}









export default async function () {
  let userId = await getUserId()
  const balance = await getBalance();
  const transactions = await getOnRampTransactions();

  return <div className="w-screen">
    <div className="text-4xl text-[#6a51a6] pt-8 mb-8 font-bold">
      My Wallet
    </div>
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 p-4">
      <div>
        <AddMoney />
      </div>
      <div>
        <BalanceCard amount={balance.amount} locked={balance.locked} />
        <div className="pt-4">
          <OnRampTransactions transactions={transactions} />
        </div>
      </div>
    </div>
  </div>
}
