"use client";

import { Pill, Calendar, AlertCircle, Download, RotateCcw } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Progress } from "../components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { motion } from "motion/react";

const prescriptions = [
  { id: 1, name: "Lisinopril", dosage: "10mg", frequency: "Once daily", doctor: "Dr. Sarah Smith", startDate: "Feb 20, 2026", endDate: "Mar 22, 2026", remaining: 15, total: 30, status: "active" },
  { id: 2, name: "Atorvastatin", dosage: "20mg", frequency: "Once at bedtime", doctor: "Dr. Sarah Smith", startDate: "Feb 20, 2026", endDate: "Mar 22, 2026", remaining: 18, total: 30, status: "active" },
  { id: 3, name: "Metformin", dosage: "500mg", frequency: "Twice daily", doctor: "Dr. Michael Chen", startDate: "Jan 15, 2026", endDate: "Mar 15, 2026", remaining: 5, total: 60, status: "refill-needed" },
  { id: 4, name: "Amoxicillin", dosage: "250mg", frequency: "Three times daily", doctor: "Dr. Michael Chen", startDate: "Feb 1, 2026", endDate: "Feb 10, 2026", remaining: 0, total: 30, status: "completed" },
];

export function Prescriptions() {
  return (
    <div className="space-y-6">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-3xl font-bold mb-2">Prescriptions</h1>
        <p className="text-muted-foreground">Manage your medications and refills</p>
      </motion.div>

      <Tabs defaultValue="active" className="space-y-6">
        <TabsList>
          <TabsTrigger value="active">Active</TabsTrigger>
          <TabsTrigger value="refill">Needs Refill</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
        </TabsList>

        <TabsContent value="active" className="space-y-4">
          {prescriptions.filter(p => p.status === "active").map((prescription, index) => (
            <motion.div key={prescription.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }}>
              <Card>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-4">
                      <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Pill className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle>{prescription.name} {prescription.dosage}</CardTitle>
                        <CardDescription>{prescription.frequency}</CardDescription>
                        <p className="text-sm text-muted-foreground mt-1">Prescribed by {prescription.doctor}</p>
                      </div>
                    </div>
                    <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Active</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Start Date</p>
                      <p className="font-medium">{prescription.startDate}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">End Date</p>
                      <p className="font-medium">{prescription.endDate}</p>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <p className="text-sm text-muted-foreground">Pills Remaining</p>
                      <p className="font-medium">{prescription.remaining} / {prescription.total}</p>
                    </div>
                    <Progress value={(prescription.remaining / prescription.total) * 100} />
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" className="flex-1">
                      <Download className="mr-2 h-4 w-4" />
                      Download
                    </Button>
                    <Button variant="outline" className="flex-1">
                      <RotateCcw className="mr-2 h-4 w-4" />
                      Request Refill
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </TabsContent>

        <TabsContent value="refill" className="space-y-4">
          {prescriptions.filter(p => p.status === "refill-needed").map((prescription, index) => (
            <motion.div key={prescription.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }}>
              <Card className="border-orange-200">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-4">
                      <div className="h-12 w-12 rounded-lg bg-orange-100 flex items-center justify-center">
                        <AlertCircle className="h-6 w-6 text-orange-600" />
                      </div>
                      <div>
                        <CardTitle>{prescription.name} {prescription.dosage}</CardTitle>
                        <CardDescription>{prescription.frequency}</CardDescription>
                        <p className="text-sm text-muted-foreground mt-1">Prescribed by {prescription.doctor}</p>
                      </div>
                    </div>
                    <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-100">Refill Needed</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-3 bg-orange-50 border border-orange-200 rounded-lg flex items-start gap-2">
                    <AlertCircle className="h-5 w-5 text-orange-600 mt-0.5" />
                    <p className="text-sm text-orange-900">Only {prescription.remaining} pills remaining. Please request a refill soon.</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Start Date</p>
                      <p className="font-medium">{prescription.startDate}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">End Date</p>
                      <p className="font-medium">{prescription.endDate}</p>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <p className="text-sm text-muted-foreground">Pills Remaining</p>
                      <p className="font-medium">{prescription.remaining} / {prescription.total}</p>
                    </div>
                    <Progress value={(prescription.remaining / prescription.total) * 100} className="bg-orange-100" />
                  </div>
                  <Button className="w-full">
                    <RotateCcw className="mr-2 h-4 w-4" />
                    Request Refill Now
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </TabsContent>

        <TabsContent value="completed" className="space-y-4">
          {prescriptions.filter(p => p.status === "completed").map((prescription, index) => (
            <motion.div key={prescription.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }}>
              <Card>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-4">
                      <div className="h-12 w-12 rounded-lg bg-muted flex items-center justify-center">
                        <Pill className="h-6 w-6 text-muted-foreground" />
                      </div>
                      <div>
                        <CardTitle>{prescription.name} {prescription.dosage}</CardTitle>
                        <CardDescription>{prescription.frequency}</CardDescription>
                        <p className="text-sm text-muted-foreground mt-1">Prescribed by {prescription.doctor}</p>
                      </div>
                    </div>
                    <Badge variant="secondary">Completed</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Start Date</p>
                      <p className="font-medium">{prescription.startDate}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">End Date</p>
                      <p className="font-medium">{prescription.endDate}</p>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full">
                    <Download className="mr-2 h-4 w-4" />
                    Download Record
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </TabsContent>
      </Tabs>
    </div>
  );
}
