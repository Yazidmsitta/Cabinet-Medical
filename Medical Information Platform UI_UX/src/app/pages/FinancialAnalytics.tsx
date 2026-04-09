"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { 
  DollarSign, 
  TrendingUp, 
  CreditCard,
  Users,
  Download,
  ArrowUpRight,
  ArrowDownRight
} from "lucide-react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

export function FinancialAnalytics() {
  const revenueData = [
    { month: "Jan", revenue: 45000, expenses: 32000, profit: 13000 },
    { month: "Feb", revenue: 52000, expenses: 34000, profit: 18000 },
    { month: "Mar", revenue: 48000, expenses: 31000, profit: 17000 },
    { month: "Apr", revenue: 61000, expenses: 35000, profit: 26000 },
    { month: "May", revenue: 55000, expenses: 33000, profit: 22000 },
    { month: "Jun", revenue: 67000, expenses: 36000, profit: 31000 }
  ];

  const paymentMethodsData = [
    { name: "Insurance", value: 45, amount: 135000 },
    { name: "Credit Card", value: 30, amount: 90000 },
    { name: "Cash", value: 15, amount: 45000 },
    { name: "Debit Card", value: 10, amount: 30000 }
  ];

  const departmentRevenueData = [
    { department: "Cardiology", revenue: 85000 },
    { department: "Neurology", revenue: 72000 },
    { department: "Orthopedics", revenue: 68000 },
    { department: "Pediatrics", revenue: 54000 },
    { department: "General", revenue: 48000 }
  ];

  const COLORS = ["#1E88E5", "#26A69A", "#FB8C00", "#E53935"];

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Financial Analytics</h1>
          <p className="text-muted-foreground">Revenue tracking and payment analytics</p>
        </div>
        <div className="flex gap-2">
          <Select defaultValue="6months">
            <SelectTrigger className="w-[180px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1month">Last Month</SelectItem>
              <SelectItem value="3months">Last 3 Months</SelectItem>
              <SelectItem value="6months">Last 6 Months</SelectItem>
              <SelectItem value="1year">Last Year</SelectItem>
            </SelectContent>
          </Select>
          <Button>
            <Download className="w-4 h-4 mr-2" />
            Export Report
          </Button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardDescription>Total Revenue</CardDescription>
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <DollarSign className="w-5 h-5 text-primary" />
              </div>
            </div>
            <CardTitle className="text-3xl">$328,000</CardTitle>
            <div className="flex items-center gap-1 text-success text-sm">
              <ArrowUpRight className="w-4 h-4" />
              <span>+12.5% from last period</span>
            </div>
          </CardHeader>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardDescription>Net Profit</CardDescription>
              <div className="w-10 h-10 bg-success/10 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-success" />
              </div>
            </div>
            <CardTitle className="text-3xl">$127,000</CardTitle>
            <div className="flex items-center gap-1 text-success text-sm">
              <ArrowUpRight className="w-4 h-4" />
              <span>+18.2% from last period</span>
            </div>
          </CardHeader>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardDescription>Avg. Transaction</CardDescription>
              <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center">
                <CreditCard className="w-5 h-5 text-secondary" />
              </div>
            </div>
            <CardTitle className="text-3xl">$245</CardTitle>
            <div className="flex items-center gap-1 text-destructive text-sm">
              <ArrowDownRight className="w-4 h-4" />
              <span>-3.1% from last period</span>
            </div>
          </CardHeader>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardDescription>Paying Patients</CardDescription>
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <Users className="w-5 h-5 text-primary" />
              </div>
            </div>
            <CardTitle className="text-3xl">1,338</CardTitle>
            <div className="flex items-center gap-1 text-success text-sm">
              <ArrowUpRight className="w-4 h-4" />
              <span>+8.3% from last period</span>
            </div>
          </CardHeader>
        </Card>
      </div>

      {/* Revenue Trend Chart */}
      <Card>
        <CardHeader>
          <CardTitle>Revenue Trend</CardTitle>
          <CardDescription>Monthly revenue, expenses, and profit over time</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={350}>
            <LineChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis 
                dataKey="month" 
                stroke="#64748b"
                fontSize={12}
              />
              <YAxis 
                stroke="#64748b"
                fontSize={12}
                tickFormatter={(value) => `$${value / 1000}k`}
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#fff',
                  border: '1px solid #e2e8f0',
                  borderRadius: '8px'
                }}
                formatter={(value: any) => `$${value.toLocaleString()}`}
              />
              <Legend />
              <Line 
                type="monotone" 
                dataKey="revenue" 
                stroke="#1E88E5" 
                strokeWidth={2}
                name="Revenue"
              />
              <Line 
                type="monotone" 
                dataKey="expenses" 
                stroke="#E53935" 
                strokeWidth={2}
                name="Expenses"
              />
              <Line 
                type="monotone" 
                dataKey="profit" 
                stroke="#43A047" 
                strokeWidth={2}
                name="Profit"
              />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Payment Methods */}
        <Card>
          <CardHeader>
            <CardTitle>Payment Methods</CardTitle>
            <CardDescription>Distribution of payment types</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                  <Pie
                    data={paymentMethodsData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {paymentMethodsData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value: any) => `${value}%`} />
                </PieChart>
              </ResponsiveContainer>
              <div className="space-y-3">
                {paymentMethodsData.map((method, index) => (
                  <div key={method.name} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div 
                        className="w-3 h-3 rounded-full" 
                        style={{ backgroundColor: COLORS[index % COLORS.length] }}
                      />
                      <span className="text-sm">{method.name}</span>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-semibold">
                        ${method.amount.toLocaleString()}
                      </div>
                      <div className="text-xs text-muted-foreground">{method.value}%</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Department Revenue */}
        <Card>
          <CardHeader>
            <CardTitle>Revenue by Department</CardTitle>
            <CardDescription>Top performing specialties</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={departmentRevenueData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis 
                  dataKey="department" 
                  stroke="#64748b"
                  fontSize={12}
                  angle={-45}
                  textAnchor="end"
                  height={80}
                />
                <YAxis 
                  stroke="#64748b"
                  fontSize={12}
                  tickFormatter={(value) => `$${value / 1000}k`}
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#fff',
                    border: '1px solid #e2e8f0',
                    borderRadius: '8px'
                  }}
                  formatter={(value: any) => `$${value.toLocaleString()}`}
                />
                <Bar dataKey="revenue" fill="#26A69A" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Payment Details Table */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Transactions</CardTitle>
          <CardDescription>Latest payment activities</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { id: "PAY-001", patient: "Sarah Johnson", amount: 250, method: "Insurance", status: "completed", date: "2026-03-12" },
              { id: "PAY-002", patient: "Michael Chen", amount: 180, method: "Credit Card", status: "completed", date: "2026-03-11" },
              { id: "PAY-003", patient: "Emma Wilson", amount: 320, method: "Insurance", status: "pending", date: "2026-03-11" },
              { id: "PAY-004", patient: "James Martinez", amount: 450, method: "Credit Card", status: "completed", date: "2026-03-10" },
              { id: "PAY-005", patient: "Lisa Anderson", amount: 150, method: "Cash", status: "completed", date: "2026-03-10" }
            ].map((transaction) => (
              <div key={transaction.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/30 transition-colors">
                <div className="flex items-center gap-4">
                  <div>
                    <div className="font-semibold">{transaction.patient}</div>
                    <div className="text-sm text-muted-foreground">
                      {transaction.id} • {new Date(transaction.date).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric"
                      })}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="text-right">
                    <div className="font-semibold">${transaction.amount}</div>
                    <div className="text-sm text-muted-foreground">{transaction.method}</div>
                  </div>
                  <Badge 
                    variant={transaction.status === "completed" ? "default" : "secondary"}
                    className={transaction.status === "completed" ? "bg-success" : ""}
                  >
                    {transaction.status}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
