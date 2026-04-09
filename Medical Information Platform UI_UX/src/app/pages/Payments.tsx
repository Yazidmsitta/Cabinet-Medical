"use client";

import Link from "next/link";
import { CreditCard, Download, Calendar, AlertCircle, CheckCircle } from "lucide-react";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { motion } from "motion/react";

const payments = [
  { id: 1, description: "Cardiology Consultation", doctor: "Dr. Sarah Smith", date: "March 5, 2026", amount: 150, status: "paid" },
  { id: 2, description: "Lab Tests - Blood Panel", doctor: "Dr. Michael Chen", date: "March 8, 2026", amount: 85, status: "paid" },
  { id: 3, description: "Follow-up Appointment", doctor: "Dr. Sarah Smith", date: "March 15, 2026", amount: 120, status: "pending" },
  { id: 4, description: "Prescription Refill", doctor: "Pharmacy", date: "March 10, 2026", amount: 45, status: "pending" },
  { id: 5, description: "Annual Physical Exam", doctor: "Dr. Michael Chen", date: "February 28, 2026", amount: 200, status: "paid" },
  { id: 6, description: "X-Ray Imaging", doctor: "Radiology Dept", date: "February 28, 2026", amount: 150, status: "paid" },
];

export function Payments() {
  const totalPending = payments.filter(p => p.status === "pending").reduce((sum, p) => sum + p.amount, 0);
  const totalPaid = payments.filter(p => p.status === "paid").reduce((sum, p) => sum + p.amount, 0);

  return (
    <div className="space-y-6">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-3xl font-bold mb-2">Payments & Billing</h1>
        <p className="text-muted-foreground">Manage your medical expenses and payment history</p>
      </motion.div>

      <div className="grid gap-4 md:grid-cols-3">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <p className="text-sm text-muted-foreground">Pending Payments</p>
                <AlertCircle className="h-5 w-5 text-orange-500" />
              </div>
              <p className="text-3xl font-bold">${totalPending}</p>
              <Link href="/payments" className="text-sm text-primary hover:underline">View pending invoices</Link>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <p className="text-sm text-muted-foreground">Paid This Month</p>
                <CheckCircle className="h-5 w-5 text-green-500" />
              </div>
              <p className="text-3xl font-bold">${totalPaid}</p>
              <p className="text-sm text-muted-foreground">March 2026</p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <p className="text-sm text-muted-foreground">Payment Methods</p>
                <CreditCard className="h-5 w-5 text-primary" />
              </div>
              <p className="text-3xl font-bold">2</p>
              <Button variant="link" className="p-0 h-auto text-sm">Manage cards</Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
        <Tabs defaultValue="pending" className="space-y-4">
          <TabsList>
            <TabsTrigger value="pending">Pending</TabsTrigger>
            <TabsTrigger value="paid">Paid</TabsTrigger>
            <TabsTrigger value="all">All Invoices</TabsTrigger>
          </TabsList>

          <TabsContent value="pending" className="space-y-4">
            {payments.filter(p => p.status === "pending").map((payment, index) => (
              <motion.div key={payment.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.05 }}>
                <Card className="border-orange-200">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-4 flex-1">
                        <div className="h-12 w-12 rounded-lg bg-orange-100 flex items-center justify-center">
                          <AlertCircle className="h-6 w-6 text-orange-600" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-lg mb-1">{payment.description}</h3>
                          <p className="text-sm text-muted-foreground mb-2">{payment.doctor}</p>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Calendar className="h-4 w-4" />
                            <span>{payment.date}</span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold mb-2">${payment.amount}</p>
                        <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-100 mb-2">Pending</Badge>
                        <div className="flex gap-2">
                          <Link href={`/payments/invoice/${payment.id}`}>
                            <Button size="sm">Pay Now</Button>
                          </Link>
                          <Button variant="outline" size="sm">
                            <Download className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </TabsContent>

          <TabsContent value="paid" className="space-y-4">
            {payments.filter(p => p.status === "paid").map((payment, index) => (
              <motion.div key={payment.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.05 }}>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-4 flex-1">
                        <div className="h-12 w-12 rounded-lg bg-green-100 flex items-center justify-center">
                          <CheckCircle className="h-6 w-6 text-green-600" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-lg mb-1">{payment.description}</h3>
                          <p className="text-sm text-muted-foreground mb-2">{payment.doctor}</p>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Calendar className="h-4 w-4" />
                            <span>{payment.date}</span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold mb-2">${payment.amount}</p>
                        <Badge className="bg-green-100 text-green-800 hover:bg-green-100 mb-2">Paid</Badge>
                        <Button variant="outline" size="sm">
                          <Download className="mr-2 h-4 w-4" />
                          Receipt
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </TabsContent>

          <TabsContent value="all" className="space-y-4">
            {payments.map((payment, index) => (
              <motion.div key={payment.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.05 }}>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-4 flex-1">
                        <div className={`h-12 w-12 rounded-lg flex items-center justify-center ${
                          payment.status === "paid" ? "bg-green-100" : "bg-orange-100"
                        }`}>
                          {payment.status === "paid" ? (
                            <CheckCircle className="h-6 w-6 text-green-600" />
                          ) : (
                            <AlertCircle className="h-6 w-6 text-orange-600" />
                          )}
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-lg mb-1">{payment.description}</h3>
                          <p className="text-sm text-muted-foreground mb-2">{payment.doctor}</p>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Calendar className="h-4 w-4" />
                            <span>{payment.date}</span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold mb-2">${payment.amount}</p>
                        <Badge className={payment.status === "paid" 
                          ? "bg-green-100 text-green-800 hover:bg-green-100"
                          : "bg-orange-100 text-orange-800 hover:bg-orange-100"
                        }>
                          {payment.status === "paid" ? "Paid" : "Pending"}
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </TabsContent>
        </Tabs>
      </motion.div>
    </div>
  );
}
