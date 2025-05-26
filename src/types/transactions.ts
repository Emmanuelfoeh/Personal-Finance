export interface Transaction {
  id: string;
  name: string;
  category: string;
  date: string;
  amount: number;
  icon?: string;
}

export type Category =
  | "All Transactions"
  | "General"
  | "Dining Out"
  | "Groceries"
  | "Entertainment";

export type SortOption = "Latest" | "Oldest" | "Highest" | "Lowest";

// Mock data for transactions
export const getTransactions = async (): Promise<Transaction[]> => {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 800));

  return [
    {
      id: '1',
      name: 'Emma Richardson',
      category: 'General',
      date: '19 Aug 2024',
      amount: 75.50,
      icon: '',
    },
    {
      id: '2',
      name: 'Savory Bites Bistro',
      category: 'Dining Out',
      date: '19 Aug 2024',
      amount: -55.50,
      icon: '',
    },
    {
      id: '3',
      name: 'Daniel Carter',
      category: 'General',
      date: '18 Aug 2024',
      amount: -42.30,
      icon: '',
    },
    {
      id: '4',
      name: 'Sun Park',
      category: 'General',
      date: '17 Aug 2024',
      amount: 120.00,
      icon: '',
    },
    {
      id: '5',
      name: 'Urban Services Hub',
      category: 'General',
      date: '17 Aug 2024',
      amount: -65.00,
      icon: '',
    },
    {
      id: '6',
      name: 'Liam Hughes',
      category: 'Groceries',
      date: '15 Aug 2024',
      amount: 65.75,
      icon: '',
    },
    {
      id: '7',
      name: 'Lily Ramirez',
      category: 'General',
      date: '14 Aug 2024',
      amount: 50.00,
      icon: '',
    },
    {
      id: '8',
      name: 'Ethan Clark',
      category: 'Dining Out',
      date: '13 Aug 2024',
      amount: -32.50,
      icon: '',
    },
    {
      id: '9',
      name: 'James Thompson',
      category: 'Entertainment',
      date: '11 Aug 2024',
      amount: -5.00,
      icon: '',
    },
    {
      id: '10',
      name: 'Pixel Playground',
      category: 'Entertainment',
      date: '11 Aug 2024',
      amount: -10.00,
      icon: '',
    }
  ];
};
