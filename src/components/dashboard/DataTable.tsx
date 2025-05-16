import React, { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { LoadingTable } from "@/components/ui/loading";
import { Download, RefreshCw, Search } from "lucide-react";
import {
  customers,
  Customer,
  statusOptions,
  methodOptions,
} from "./data-table/data";
import { columns } from "./data-table/columns";

interface DataTableProps {
  isLoading?: boolean;
}

export function DataTable({ isLoading = false }: DataTableProps) {
  const [data, setData] = useState<Customer[]>([]);
  const [filteredData, setFilteredData] = useState<Customer[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [methodFilter, setMethodFilter] = useState("all");
  const [sortConfig, setSortConfig] = useState<{
    key: keyof Customer | null;
    direction: "ascending" | "descending";
  }>({
    key: null,
    direction: "ascending",
  });

  // Initialize with data
  useEffect(() => {
    // Simulate API loading
    const timer = setTimeout(() => {
      setData(customers);
      setFilteredData(customers);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // Filter and sort effect
  useEffect(() => {
    let result = [...data];

    // Apply search filter
    if (searchQuery) {
      const lowerCaseQuery = searchQuery.toLowerCase();
      result = result.filter(
        (item) =>
          item.name.toLowerCase().includes(lowerCaseQuery) ||
          item.email.toLowerCase().includes(lowerCaseQuery),
      );
    }

    // Apply status filter
    if (statusFilter && statusFilter !== "all") {
      result = result.filter((item) => item.status === statusFilter);
    }

    // Apply method filter
    if (methodFilter && methodFilter !== "all") {
      result = result.filter((item) => item.method === methodFilter);
    }

    // Apply sorting
    if (sortConfig.key) {
      result.sort((a, b) => {
        if (a[sortConfig.key!] < b[sortConfig.key!]) {
          return sortConfig.direction === "ascending" ? -1 : 1;
        }
        if (a[sortConfig.key!] > b[sortConfig.key!]) {
          return sortConfig.direction === "ascending" ? 1 : -1;
        }
        return 0;
      });
    }

    setFilteredData(result);
  }, [data, searchQuery, statusFilter, methodFilter, sortConfig]);

  const handleSort = (key: keyof Customer) => {
    let direction: "ascending" | "descending" = "ascending";

    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }

    setSortConfig({ key, direction });
  };

  const resetFilters = () => {
    setSearchQuery("");
    setStatusFilter("all");
    setMethodFilter("all");
    setSortConfig({ key: null, direction: "ascending" });
  };

  if (isLoading) {
    return <LoadingTable rows={8} />;
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex w-full max-w-sm items-center space-x-2">
          <Input
            placeholder="Search customers..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="h-9"
            prefix={<Search className="h-4 w-4 text-muted-foreground" />}
          />
          <Button variant="outline" size="sm" onClick={resetFilters}>
            <RefreshCw className="mr-2 h-4 w-4" />
            Reset
          </Button>
        </div>
        <div className="flex items-center space-x-2">
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="h-9 w-[160px]">
              <SelectValue placeholder="Filter by status" />
            </SelectTrigger>
            <SelectContent>
              {statusOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select value={methodFilter} onValueChange={setMethodFilter}>
            <SelectTrigger className="h-9 w-[180px]">
              <SelectValue placeholder="Filter by method" />
            </SelectTrigger>
            <SelectContent>
              {methodOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Button size="sm" variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
        </div>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              {columns.map((column, index) => (
                <TableHead key={index}>
                  {column.header && typeof column.header === "function"
                    ? column.header({
                        column: {
                          toggleSorting: () =>
                            handleSort(column.accessorKey as keyof Customer),
                          getIsSorted: () =>
                            sortConfig.key === column.accessorKey
                              ? sortConfig.direction === "ascending"
                                ? "asc"
                                : "desc"
                              : false,
                        },
                      })
                    : column.header || column.accessorKey}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredData.length === 0 ? (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results found.
                </TableCell>
              </TableRow>
            ) : (
              filteredData.map((row) => (
                <TableRow key={row.id}>
                  {columns.map((column, index) => (
                    <TableCell key={index}>
                      {column.cell
                        ? column.cell({
                            row: {
                              getValue: (key: string) =>
                                row[key as keyof Customer],
                              original: row,
                            },
                          })
                        : row[column.accessorKey as keyof Customer]}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
      <div className="text-sm text-muted-foreground">
        Showing {filteredData.length} of {data.length} customers
      </div>
    </div>
  );
}
