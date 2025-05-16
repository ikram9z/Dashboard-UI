import * as React from "react";
import { ArrowUpDown, MoreHorizontal, Circle } from "lucide-react";
import { ColumnDef } from "@tanstack/react-query";

import { Customer } from "./data";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const StatusCell = ({ status }: { status: Customer["status"] }) => {
  const statusMap: Record<
    Customer["status"],
    {
      label: string;
      variant: "default" | "secondary" | "destructive" | "outline";
    }
  > = {
    pending: { label: "Pending", variant: "outline" },
    processing: { label: "Processing", variant: "secondary" },
    success: { label: "Successful", variant: "default" },
    failed: { label: "Failed", variant: "destructive" },
  };

  const { label, variant } = statusMap[status];

  return <Badge variant={variant}>{label}</Badge>;
};

const StatusIcon = ({ status }: { status: Customer["status"] }) => {
  const statusColorMap: Record<Customer["status"], string> = {
    pending: "text-yellow-500",
    processing: "text-blue-500",
    success: "text-green-500",
    failed: "text-red-500",
  };

  return <Circle className={`h-2 w-2 ${statusColorMap[status]}`} />;
};

const AmountCell = ({ amount }: { amount: number }) => {
  const formattedAmount = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(amount);

  return <div>{formattedAmount}</div>;
};

export const columns: ColumnDef<Customer>[] = [
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Customer
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const name = row.getValue("name") as string;
      const email = row.original.email;

      return (
        <div className="flex flex-col space-y-1">
          <span className="font-medium">{name}</span>
          <span className="text-xs text-muted-foreground">{email}</span>
        </div>
      );
    },
  },
  {
    accessorKey: "lastOrder",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Last Order
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const lastOrder = new Date(row.getValue("lastOrder"));
      const formatted = lastOrder.toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      });

      return <div>{formatted}</div>;
    },
  },
  {
    accessorKey: "method",
    header: "Payment Method",
    cell: ({ row }) => <div>{row.getValue("method")}</div>,
  },
  {
    accessorKey: "amount",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Amount
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => <AmountCell amount={row.getValue("amount")} />,
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("status") as Customer["status"];
      return (
        <div className="flex items-center gap-2">
          <StatusIcon status={status} />
          <StatusCell status={status} />
        </div>
      );
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const customer = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(customer.id)}
            >
              Copy customer ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View details</DropdownMenuItem>
            <DropdownMenuItem>View payment history</DropdownMenuItem>
            <DropdownMenuItem>Send message</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
