import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  BarChart,
  Users,
  ShoppingCart,
  Package,
  Settings,
  AlertCircle,
  HelpCircle,
  LayoutDashboard,
  LogOut,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
  SidebarRail,
  SidebarInset,
} from "@/components/ui/sidebar";

const mainNavItems = [
  {
    title: "Dashboard",
    icon: <LayoutDashboard />,
    href: "/dashboard",
  },
  {
    title: "Analytics",
    icon: <BarChart />,
    href: "/dashboard/analytics",
  },
  {
    title: "Customers",
    icon: <Users />,
    href: "/dashboard/customers",
  },
  {
    title: "Orders",
    icon: <ShoppingCart />,
    href: "/dashboard/orders",
  },
  {
    title: "Products",
    icon: <Package />,
    href: "/dashboard/products",
  },
];

const otherNavItems = [
  {
    title: "Settings",
    icon: <Settings />,
    href: "/dashboard/settings",
  },
  {
    title: "Help & Support",
    icon: <HelpCircle />,
    href: "/dashboard/help",
  },
];

interface DashboardSidebarProps {
  children?: React.ReactNode;
}

export function DashboardSidebar({ children }: DashboardSidebarProps) {
  const location = useLocation();

  const isActive = (href: string) => {
    if (href === "/dashboard" && location.pathname === "/dashboard") {
      return true;
    }
    if (href !== "/dashboard" && location.pathname.startsWith(href)) {
      return true;
    }
    return false;
  };

  return (
    <SidebarProvider defaultOpen>
      <Sidebar>
        <SidebarRail />
        <SidebarHeader>
          <div className="flex h-16 items-center px-4">
            <div className="flex items-center gap-2">
              <div className="rounded-md bg-primary p-1">
                <div className="h-6 w-6 rounded-sm bg-white" />
              </div>
              <span className="font-semibold">Acme Inc</span>
            </div>
            <SidebarTrigger className="ml-auto md:hidden" />
          </div>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Main Menu</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {mainNavItems.map((item) => (
                  <SidebarMenuItem key={item.href}>
                    <SidebarMenuButton
                      asChild
                      isActive={isActive(item.href)}
                      tooltip={item.title}
                    >
                      <Link to={item.href}>
                        {item.icon}
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
          <SidebarGroup>
            <SidebarGroupLabel>Other</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {otherNavItems.map((item) => (
                  <SidebarMenuItem key={item.href}>
                    <SidebarMenuButton
                      asChild
                      isActive={isActive(item.href)}
                      tooltip={item.title}
                    >
                      <Link to={item.href}>
                        {item.icon}
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild tooltip="Logout">
                <a href="#">
                  <LogOut />
                  <span>Logout</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
      </Sidebar>
      <SidebarInset>
        <div className="flex h-16 items-center gap-4 border-b bg-background px-6">
          <SidebarTrigger />
          <div className="flex-1">
            <h1 className="text-xl font-semibold">Dashboard</h1>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-slate-200"></div>
          </div>
        </div>
        <main className="flex-1 px-6 py-6">{children}</main>
      </SidebarInset>
    </SidebarProvider>
  );
}
