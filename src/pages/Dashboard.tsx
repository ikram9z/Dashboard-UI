import React, { useState, useEffect } from "react";
import { DashboardSidebar } from "@/components/dashboard/Sidebar";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { DataTable } from "@/components/dashboard/DataTable";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";

const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  // Simulate loading data
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Dashboard loaded",
        description: "All data has been successfully loaded",
      });
    }, 1500);

    return () => clearTimeout(timer);
  }, [toast]);

  return (
    <DashboardSidebar>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
          <p className="text-muted-foreground">
            Welcome back! Here's an overview of your store performance.
          </p>
        </div>

        <Tabs defaultValue="overview" className="space-y-4">
          <div className="flex items-center justify-between">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
              <TabsTrigger value="reports">Reports</TabsTrigger>
              <TabsTrigger value="notifications">Notifications</TabsTrigger>
            </TabsList>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                Download Report
              </Button>
              <Button size="sm">Create New</Button>
            </div>
          </div>
          <TabsContent value="overview" className="space-y-8">
            <DashboardHeader />

            <div>
              <div className="flex items-center justify-between pb-4">
                <h3 className="text-xl font-semibold">Recent Customers</h3>
                <Button variant="outline" size="sm">
                  View All
                </Button>
              </div>
              <DataTable isLoading={isLoading} />
            </div>
          </TabsContent>
          <TabsContent value="analytics">
            <div className="rounded-lg border border-dashed p-8 text-center">
              <h3 className="text-lg font-medium">Analytics Section</h3>
              <p className="text-sm text-muted-foreground mt-2">
                This section would contain analytics data and visualizations.
              </p>
            </div>
          </TabsContent>
          <TabsContent value="reports">
            <div className="rounded-lg border border-dashed p-8 text-center">
              <h3 className="text-lg font-medium">Reports Section</h3>
              <p className="text-sm text-muted-foreground mt-2">
                This section would contain report data and export options.
              </p>
            </div>
          </TabsContent>
          <TabsContent value="notifications">
            <div className="rounded-lg border border-dashed p-8 text-center">
              <h3 className="text-lg font-medium">Notifications Section</h3>
              <p className="text-sm text-muted-foreground mt-2">
                This section would contain your recent notifications and alerts.
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardSidebar>
  );
};

export default Dashboard;
