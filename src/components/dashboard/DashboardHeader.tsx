import React from "react";
import { ArrowDownIcon, ArrowRightIcon, ArrowUpIcon } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { overviewData } from "./data-table/data";

export function DashboardHeader() {
  return (
    <div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {overviewData.map((item, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {item.title}
              </CardTitle>
              {item.isPositive ? (
                <ArrowUpIcon className="h-4 w-4 text-emerald-500" />
              ) : (
                <ArrowDownIcon className="h-4 w-4 text-rose-500" />
              )}
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{item.value}</div>
              <p
                className={`text-xs ${item.isPositive ? "text-emerald-500" : "text-rose-500"}`}
              >
                {item.change} from last month
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Recent Transactions</CardTitle>
            <CardDescription>
              There were 24 transactions in the last 24 hours.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[1, 2, 3].map((_, i) => (
                <div key={i} className="flex items-center justify-between px-1">
                  <div className="flex items-center gap-3">
                    <div className="rounded-full bg-slate-100 p-2">
                      {/* Simple placeholder for transaction icon */}
                      <div className="h-6 w-6 rounded-full bg-slate-300"></div>
                    </div>
                    <div>
                      <p className="text-sm font-medium">
                        Transaction #{i + 1}
                      </p>
                      <p className="text-xs text-slate-500">
                        {new Date().toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium">
                      ${Math.floor(Math.random() * 100) + 10}.99
                    </p>
                    <p className="text-xs text-slate-500">
                      {Math.random() > 0.5 ? "Completed" : "Processing"}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 flex items-center">
              <p className="text-sm text-muted-foreground">
                View all transactions
              </p>
              <ArrowRightIcon className="ml-1 h-4 w-4" />
            </div>
          </CardContent>
        </Card>
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Recent Sales</CardTitle>
            <CardDescription>You made 265 sales this month.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[1, 2, 3, 4].map((_, i) => (
                <div key={i} className="flex items-center">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-slate-100">
                      {/* Placeholder for avatar */}
                      <span className="text-sm font-semibold">
                        {String.fromCharCode(65 + i)}
                      </span>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Customer {i + 1}</p>
                      <p className="text-xs text-slate-500">
                        {new Date(
                          Date.now() - i * 24 * 60 * 60 * 1000,
                        ).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}
                      </p>
                    </div>
                  </div>
                  <div className="ml-auto">
                    <p className="text-sm font-medium">
                      +${Math.floor(Math.random() * 100) + 50}.00
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
