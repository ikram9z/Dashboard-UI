export type Customer = {
  id: string;
  name: string;
  email: string;
  lastOrder: string;
  method: "Credit Card" | "PayPal" | "Apple Pay" | "Google Pay";
  amount: number;
  status: "pending" | "processing" | "success" | "failed";
};

export const customers: Customer[] = [
  {
    id: "CUST-1001",
    name: "Olivia Martin",
    email: "olivia.martin@email.com",
    lastOrder: "2023-10-22",
    method: "Credit Card",
    amount: 89.99,
    status: "success",
  },
  {
    id: "CUST-1002",
    name: "Jackson Lee",
    email: "jackson.lee@email.com",
    lastOrder: "2023-10-21",
    method: "PayPal",
    amount: 149.99,
    status: "processing",
  },
  {
    id: "CUST-1003",
    name: "Isabella Nguyen",
    email: "isabella.nguyen@email.com",
    lastOrder: "2023-10-20",
    method: "Credit Card",
    amount: 64.99,
    status: "success",
  },
  {
    id: "CUST-1004",
    name: "William Kim",
    email: "william.kim@email.com",
    lastOrder: "2023-10-19",
    method: "Apple Pay",
    amount: 199.99,
    status: "success",
  },
  {
    id: "CUST-1005",
    name: "Sofia Davis",
    email: "sofia.davis@email.com",
    lastOrder: "2023-10-18",
    method: "Google Pay",
    amount: 29.99,
    status: "failed",
  },
  {
    id: "CUST-1006",
    name: "Ethan Johnson",
    email: "ethan.johnson@email.com",
    lastOrder: "2023-10-17",
    method: "PayPal",
    amount: 119.99,
    status: "pending",
  },
  {
    id: "CUST-1007",
    name: "Ava Williams",
    email: "ava.williams@email.com",
    lastOrder: "2023-10-16",
    method: "Credit Card",
    amount: 74.99,
    status: "success",
  },
  {
    id: "CUST-1008",
    name: "Lucas Brown",
    email: "lucas.brown@email.com",
    lastOrder: "2023-10-15",
    method: "Apple Pay",
    amount: 49.99,
    status: "processing",
  },
  {
    id: "CUST-1009",
    name: "Mia Taylor",
    email: "mia.taylor@email.com",
    lastOrder: "2023-10-14",
    method: "Credit Card",
    amount: 159.99,
    status: "success",
  },
  {
    id: "CUST-1010",
    name: "Noah Martinez",
    email: "noah.martinez@email.com",
    lastOrder: "2023-10-13",
    method: "Google Pay",
    amount: 99.99,
    status: "failed",
  },
];

export const statusOptions = [
  { label: "All", value: "all" },
  { label: "Pending", value: "pending" },
  { label: "Processing", value: "processing" },
  { label: "Success", value: "success" },
  { label: "Failed", value: "failed" },
];

export const methodOptions = [
  { label: "All Methods", value: "all" },
  { label: "Credit Card", value: "Credit Card" },
  { label: "PayPal", value: "PayPal" },
  { label: "Apple Pay", value: "Apple Pay" },
  { label: "Google Pay", value: "Google Pay" },
];

// Overview statistics
export const overviewData = [
  {
    title: "Total Revenue",
    value: "$45,231.89",
    change: "+20.1%",
    isPositive: true,
  },
  {
    title: "Subscriptions",
    value: "2,350",
    change: "+180.1%",
    isPositive: true,
  },
  {
    title: "Sales",
    value: "+12,234",
    change: "+19.5%",
    isPositive: true,
  },
  {
    title: "Active Users",
    value: "573",
    change: "-1.3%",
    isPositive: false,
  },
];
