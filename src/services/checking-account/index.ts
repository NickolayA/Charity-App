import {TransactionTypes} from '../../Constants';

export interface CheckingAccountDataItem {
  date: string;
  business: string;
  location?: string;
  paymentMethod: string;
  amount: number;
  transactionType: TransactionTypes;
}

const totalAvailableCash: number = 1500.2;

const checkingAccountData: Array<CheckingAccountDataItem> = [
  {
    date: 'Jul 11',
    business: 'Target',
    location: 'Closter NJ',
    paymentMethod: 'Debit card',
    amount: 63.95,
    transactionType: TransactionTypes.Withdraw,
  },
  {
    date: 'Jul 11',
    business: 'AplPay 7-Eleven',
    location: 'Cresskill NJ',
    paymentMethod: 'IPhone',
    amount: 17.75,
    transactionType: TransactionTypes.Withdraw,
  },
  {
    date: 'Jul 11',
    business: 'Facebook inc',
    paymentMethod: 'Pay day! Yay!',
    amount: 1200.5,
    transactionType: TransactionTypes.SpecialDeposit,
  },
  {
    date: 'Jul 11',
    business: 'Lencrafters',
    location: 'Paramus NJ',
    paymentMethod: 'Debit card',
    amount: 320.73,
    transactionType: TransactionTypes.Withdraw,
  },
  {
    date: 'Jul 10',
    business: 'Transfer from savings',
    paymentMethod: 'Buy a house (...4044)',
    amount: 10000.0,
    transactionType: TransactionTypes.Deposit,
  },
  {
    date: 'Jul 10',
    business: 'Starbucks',
    location: 'Closter NJ',
    paymentMethod: 'Debit card',
    amount: 12.02,
    transactionType: TransactionTypes.Withdraw,
  },
  {
    date: 'Jul 10',
    business: 'Starbucks',
    location: 'Closter NJ',
    paymentMethod: 'Debit card',
    amount: 236.52,
    transactionType: TransactionTypes.Withdraw,
  },
  {
    date: 'Jul 10',
    business: 'Lencrafters',
    location: 'Closter NJ',
    paymentMethod: 'Debit card',
    amount: 100.99,
    transactionType: TransactionTypes.Withdraw,
  },
];

export type TransactionsByDate = Array<{
  date: string;
  transactions: Array<CheckingAccountDataItem>;
}>;

export const checkingAccountService: {
  totalAvailableCash: number;
  transactions: Array<CheckingAccountDataItem>;
  getTransactionsPerDate: (
    transactions: Array<CheckingAccountDataItem>,
  ) => TransactionsByDate;
  filterTransactionsByInput: (
    input: string,
    transactions: Array<CheckingAccountDataItem>,
  ) => Array<CheckingAccountDataItem>;
} = {
  totalAvailableCash,
  transactions: checkingAccountData,
  filterTransactionsByInput: (
    input: string,
    transactions: Array<CheckingAccountDataItem>,
  ): Array<CheckingAccountDataItem> => {
    return transactions.filter(
      t =>
        t.business.startsWith(input) ||
        t.amount.toString().startsWith(input) ||
        t.location?.startsWith(input) ||
        t.paymentMethod.startsWith(input),
    );
  },
  getTransactionsPerDate: (
    transactions: Array<CheckingAccountDataItem>,
  ): TransactionsByDate => {
    const transactionDates = [
      ...new Set<string>(transactions.map(t => t.date)),
    ];

    const transactionsPerDate: TransactionsByDate = [];

    transactionDates.forEach(td => {
      transactionsPerDate.push({
        date: td,
        transactions: transactions.filter(t => t.date === td),
      });
    });

    return transactionsPerDate;
  },
};
