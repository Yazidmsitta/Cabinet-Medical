"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, 
  Calendar, 
  FileText, 
  Pill, 
  TestTube, 
  Users, 
  CreditCard, 
  Brain, 
  Bell, 
  MessageSquare, 
  Settings, 
  LogOut,
  Menu,
  X,
  Activity,
  BarChart3,
  UserCog,
  Stethoscope,
  ClipboardList
} from "lucide-react";
import { Button } from "../ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Badge } from "../ui/badge";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

// Detect user role from URL path
const getUserRoleFromPath = (pathname: string): "patient" | "doctor" | "admin" => {
  if (pathname.includes("doctor-dashboard") || pathname.includes("/doctor/")) {
    return "doctor";
  } else if (pathname.includes("admin")) {
    return "admin";
  }
  return "patient";
};

const patientNavigation = [
  { name: "Dashboard", href: "/patient-dashboard", icon: LayoutDashboard },
  { name: "Appointments", href: "/appointments", icon: Calendar },
  { name: "Medical Records", href: "/medical-records", icon: FileText },
  { name: "Prescriptions", href: "/prescriptions", icon: Pill },
  { name: "Lab Results", href: "/lab-results", icon: TestTube },
  { name: "Find Doctors", href: "/doctors", icon: Users },
  { name: "Payments", href: "/payments", icon: CreditCard },
];

const doctorNavigation = [
  { name: "Dashboard", href: "/doctor-dashboard", icon: LayoutDashboard },
  { name: "Calendar", href: "/doctor/calendar", icon: Calendar },
  { name: "Patient Management", href: "/doctor/patients", icon: Users },
  { name: "Appointments", href: "/doctor/appointments", icon: ClipboardList },
  { name: "Medical Records", href: "/doctor/medical-records", icon: FileText },
  { name: "Prescriptions", href: "/doctor/prescriptions", icon: Pill },
  { name: "Lab Results", href: "/doctor/lab-results", icon: TestTube },
];

const adminNavigation = [
  { name: "Analytics", href: "/admin/analytics", icon: BarChart3 },
  { name: "Financial", href: "/admin/financial", icon: CreditCard },
  { name: "AI Scheduling", href: "/ai-scheduling", icon: Brain },
  { name: "Notifications", href: "/admin/notifications", icon: Bell },
  { name: "User Management", href: "/admin/users", icon: UserCog },
];

export function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [notificationCount] = useState(3);
  
  const userRole = getUserRoleFromPath(pathname);
  const navigation = userRole === "doctor" ? doctorNavigation : userRole === "admin" ? adminNavigation : patientNavigation;
  
  const roleDisplay = {
    patient: { name: "John Doe", id: "P-12345", role: "Patient" },
    doctor: { name: "Dr. Sarah Smith", id: "D-67890", role: "Doctor" },
    admin: { name: "Admin User", id: "A-11111", role: "Administrator" }
  };

  const currentUser = roleDisplay[userRole];

  return (
    <div className="min-h-screen bg-background">
      {/* Mobile sidebar backdrop */}
      <AnimatePresence>
        {sidebarOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSidebarOpen(false)}
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-50 h-screen w-80 bg-card border-r border-border flex flex-col transform transition-transform duration-300 lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Logo & Close Button */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-border">
          <Link href={userRole === "doctor" ? "/doctor-dashboard" : userRole === "admin" ? "/admin/analytics" : "/patient-dashboard"} className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-primary flex items-center justify-center">
              <Activity className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">SIMI</h1>
              <p className="text-xs text-muted-foreground">Smart Medical Info</p>
            </div>
          </Link>
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setSidebarOpen(false)}
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* User Profile */}
        <div className="px-6 py-5 border-b border-border">
          <div className="flex items-center gap-3">
            <Avatar className="h-12 w-12">
              <AvatarImage src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${userRole}`} />
              <AvatarFallback>{currentUser.name.split(" ").map(n => n[0]).join("")}</AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium truncate">{currentUser.name}</p>
              <p className="text-xs text-muted-foreground">{currentUser.role} • {currentUser.id}</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto px-4 py-4">
          <ul className="space-y-1">
            {navigation.map((item) => {
              const isActive = pathname === item.href || pathname.startsWith(item.href + "/");
              return (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    onClick={() => setSidebarOpen(false)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                      isActive
                        ? "bg-primary text-primary-foreground"
                        : "text-foreground hover:bg-muted"
                    }`}
                  >
                    <item.icon className="h-5 w-5" />
                    <span>{item.name}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Bottom Actions */}
        <div className="border-t border-border px-4 py-4 space-y-1">
          <Link
            href="/profile"
            className="flex items-center gap-3 px-4 py-3 rounded-lg text-foreground hover:bg-muted transition-colors"
            onClick={() => setSidebarOpen(false)}
          >
            <Settings className="h-5 w-5" />
            <span>Settings</span>
          </Link>
          <Link
            href="/login"
            className="flex items-center gap-3 px-4 py-3 rounded-lg text-foreground hover:bg-muted transition-colors"
          >
            <LogOut className="h-5 w-5" />
            <span>Logout</span>
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <div className="lg:pl-80">
        {/* Top Header */}
        <header className="sticky top-0 z-30 bg-card border-b border-border px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setSidebarOpen(true)}
            >
              <Menu className="h-6 w-6" />
            </Button>

            <div className="hidden lg:block">
              <h2 className="text-xl font-semibold">
                {navigation.find(item => pathname.startsWith(item.href))?.name || "Dashboard"}
              </h2>
            </div>

            <div className="flex items-center gap-3">
              <Link href="/notifications">
                <Button variant="ghost" size="icon" className="relative">
                  <Bell className="h-5 w-5" />
                  {notificationCount > 0 && (
                    <Badge className="absolute -top-1 -right-1 h-5 w-5 p-0 flex items-center justify-center bg-destructive text-destructive-foreground">
                      {notificationCount}
                    </Badge>
                  )}
                </Button>
              </Link>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-4 sm:p-6 lg:p-8">
          {children}
        </main>
      </div>
    </div>
  );
}