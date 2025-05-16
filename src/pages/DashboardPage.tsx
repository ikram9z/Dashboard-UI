import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const DashboardPage = () => {
  const { page } = useParams();
  const navigate = useNavigate();

  // If no specific page is requested, render the main dashboard
  if (!page) {
    return <Dashboard />;
  }

  // Placeholders for different dashboard sections
  const pages: Record<string, React.ReactNode> = {
    analytics: (
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-6">Analytics</h1>
        <p className="text-muted-foreground mb-8">
          Track and analyze your business performance.
        </p>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="rounded-lg border bg-card p-6 shadow-sm">
              <h3 className="text-lg font-semibold mb-2">
                Analytics Card {i + 1}
              </h3>
              <p className="text-sm text-muted-foreground">
                This is where your analytics information would be displayed.
              </p>
            </div>
          ))}
        </div>
      </div>
    ),
    customers: (
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-6">Customers</h1>
        <p className="text-muted-foreground mb-8">
          Manage your customer relationships.
        </p>
        <div className="rounded-lg border">
          <div className="p-6">
            <h3 className="text-lg font-semibold mb-2">Customer List</h3>
            <p className="text-sm text-muted-foreground mb-4">
              This is where your customer list would be displayed.
            </p>
            <div className="rounded-lg border border-dashed p-8 text-center">
              <p>Customer data would be shown here.</p>
            </div>
          </div>
        </div>
      </div>
    ),
    orders: (
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-6">Orders</h1>
        <p className="text-muted-foreground mb-8">
          View and manage your orders.
        </p>
        <div className="rounded-lg border">
          <div className="p-6">
            <h3 className="text-lg font-semibold mb-2">Order History</h3>
            <p className="text-sm text-muted-foreground mb-4">
              This is where your order history would be displayed.
            </p>
            <div className="rounded-lg border border-dashed p-8 text-center">
              <p>Order data would be shown here.</p>
            </div>
          </div>
        </div>
      </div>
    ),
    products: (
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-6">Products</h1>
        <p className="text-muted-foreground mb-8">
          Manage your product catalog.
        </p>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="rounded-lg border bg-card p-6 shadow-sm">
              <div className="aspect-square mb-4 rounded-lg bg-slate-100"></div>
              <h3 className="text-lg font-semibold mb-1">Product {i + 1}</h3>
              <p className="text-sm text-muted-foreground mb-2">
                Product description goes here
              </p>
              <p className="font-medium">
                ${Math.floor(Math.random() * 100) + 10}.99
              </p>
            </div>
          ))}
        </div>
      </div>
    ),
    settings: (
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-6">Settings</h1>
        <p className="text-muted-foreground mb-8">
          Configure your dashboard settings.
        </p>
        <div className="rounded-lg border">
          <div className="p-6">
            <h3 className="text-lg font-semibold mb-2">Account Settings</h3>
            <p className="text-sm text-muted-foreground mb-4">
              This is where your settings would be configured.
            </p>
            <div className="rounded-lg border border-dashed p-8 text-center">
              <p>Settings form would be shown here.</p>
            </div>
          </div>
        </div>
      </div>
    ),
    help: (
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-6">Help & Support</h1>
        <p className="text-muted-foreground mb-8">
          Get help and support for using the dashboard.
        </p>
        <div className="rounded-lg border">
          <div className="p-6">
            <h3 className="text-lg font-semibold mb-2">Support Resources</h3>
            <p className="text-sm text-muted-foreground mb-4">
              These resources can help you use the dashboard effectively.
            </p>
            <div className="rounded-lg border border-dashed p-8 text-center">
              <p>Support resources would be shown here.</p>
            </div>
          </div>
        </div>
      </div>
    ),
  };

  // Render the requested page or a not found message
  return (
    <DashboardSidebar>
      {pages[page] || (
        <div className="p-8">
          <Alert variant="destructive" className="mb-4">
            <AlertTitle>Page Not Found</AlertTitle>
            <AlertDescription>
              The dashboard page "{page}" doesn't exist.
            </AlertDescription>
          </Alert>
          <Button
            variant="outline"
            onClick={() => navigate("/dashboard")}
            className="mt-4"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Dashboard
          </Button>
        </div>
      )}
    </DashboardSidebar>
  );
};

export default DashboardPage;
