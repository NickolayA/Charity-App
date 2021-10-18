export interface SavingAccountDataItem {
  depositType: string;
  date: string;
  amount: number;
}

const totalAvailableCash: number = 5000.2;
const totalInterest: number = 50.0;
const goodnessPoints: number = 600;
const savingAccountData: Array<SavingAccountDataItem> = [
  {
    depositType: 'Deposit',
    date: 'Jul 11',
    amount: 2000.0,
  },
  {
    depositType: 'Deposit',
    date: 'Jul 11',
    amount: 2000.0,
  },
  {
    depositType: 'Wire Transfer',
    date: 'Jul 11',
    amount: 200.5,
  },
  {
    depositType: 'Transfer',
    date: 'Jul 11',
    amount: 800.56,
  },
  {
    depositType: 'Deposit',
    date: 'Jul 10',
    amount: 2000.0,
  },
  {
    depositType: 'Deposit',
    date: 'Jul 10',
    amount: 2000.0,
  },
  {
    depositType: 'Wire Transfer',
    date: 'Jul 10',
    amount: 200.5,
  },
  {
    depositType: 'Transfer',
    date: 'Jul 10',
    amount: 800.56,
  },
];

export type TransactionsByDate = Array<{
  date: string;
  transactions: Array<SavingAccountDataItem>;
}>;

export const savingAccountService: {
  totalAvailableCash: number;
  totalInterest: number;
  goodnessPoints: number;
  getTransactionsPerDate: (
    transactions?: Array<SavingAccountDataItem>,
  ) => TransactionsByDate;
  filterTransactionsByInput: (input: string) => Array<SavingAccountDataItem>;
} = {
  totalAvailableCash,
  totalInterest,
  goodnessPoints,
  filterTransactionsByInput: (input: string): Array<SavingAccountDataItem> => {
    return savingAccountData.filter(
      t =>
        t.depositType.startsWith(input) ||
        t.amount.toString().startsWith(input),
    );
  },
  getTransactionsPerDate: (
    transactions?: Array<SavingAccountDataItem>,
  ): TransactionsByDate => {
    const transactionDates = [
      ...new Set<string>(savingAccountData.map(t => t.date)),
    ];

    const transactionsPerDate: TransactionsByDate = [];

    transactionDates.forEach(td => {
      transactionsPerDate.push({
        date: td,
        transactions: transactions
          ? transactions.filter(t => t.date === td)
          : savingAccountData.filter(t => t.date === td),
      });
    });

    return transactionsPerDate;
  },
};
