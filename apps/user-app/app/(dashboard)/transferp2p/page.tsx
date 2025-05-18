import SendCard from '../../../components/sendCard'
import { getBalance, getTransactionHistory } from '../../../lib/dbQureies'


const TransferP2P = async () => {
  let Balance = await getBalance()
  let transactions = await getTransactionHistory()
  console.log(transactions)
  return (

    <div className="w-screen">
      <div className="text-4xl text-[#6a51a6] pt-8 mb-8 font-bold">
        My Wallet
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 p-4">
        <div>
          <SendCard />
        </div>
        <div>
          <div className="pt-4">
            {/* <BalanceCard amount={balance.amount} locked={balance.locked} /> */}
            {/* <TransactionHistory transactions={transactions} /> */}
          </div>
        </div>
      </div>
    </div>)
}

export default TransferP2P
