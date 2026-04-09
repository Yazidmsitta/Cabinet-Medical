"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, Filter, Plus, Pill, Calendar, User, FileText, Download } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { motion } from "motion/react";

const prescriptions = [
  {
    id: 1,
    patientName: "Emma Wilson",
    patientId: "P-12345",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=emma",
    medication: "Lisinopril 10mg",
    dosage: "Once daily",
    duration: "30 days",
    date: "March 10, 2026",
    status: "Active",
    refills: 2,
  },
  {
    id: 2,
    patientName: "James Brown",
    patientId: "P-23456",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=james",
    medication: "Metformin 500mg",
    dosage: "Twice daily",
    duration: "90 days",
    date: "March 12, 2026",
    status: "Active",
    refills: 3,
  },
  {
    id: 3,
    patientName: "Sophia Davis",
    patientId: "P-34567",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=sophia",
    medication: "Cetirizine 10mg",
    dosage: "Once daily",
    duration: "60 days",
    date: "March 8, 2026",
    status: "Active",
    refills: 1,
  },
  {
    id: 4,
    patientName: "Oliver Johnson",
    patientId: "P-45678",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=oliver",
    medication: "Ibuprofen 400mg",
    dosage: "As needed",
    duration: "14 days",
    date: "February 28, 2026",
    status: "Expired",
    refills: 0,
  },
  {
    id: 5,
    patientName: "Isabella Martinez",
    patientId: "P-56789",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=isabella",
    medication: "Amoxicillin 500mg",
    dosage: "Three times daily",
    duration: "7 days",
    date: "March 5, 2026",
    status: "Completed",
    refills: 0,
  },
];

export function DoctorPrescriptions() {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const filteredPrescriptions = prescriptions.filter(prescription => {
    const matchesSearch = prescription.patientName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         prescription.medication.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         prescription.patientId.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === "all" || prescription.status.toLowerCase() === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold mb-2">Prescriptions Management</h1>
            <p className="text-muted-foreground">Manage prescriptions for your patients</p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline">
              <Download className="mr-2 h-4 w-4" />
              Export
            </Button>
            <Button size="lg">
              <Plus className="mr-2 h-5 w-5" />
              New Prescription
            </Button>
          </div>
        </div>
      </motion.div>

      {/* Stats */}
      <div className="grid gap-4 md:grid-cols-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm">Total Prescriptions</CardTitle>
              <Pill className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">847</div>
              <p className="text-xs text-muted-foreground">All time</p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm">Active Prescriptions</CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">156</div>
              <p className="text-xs text-muted-foreground">Currently active</p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm">This Month</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">47</div>
              <p className="text-xs text-muted-foreground">+12 from last month</p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm">Pending Refills</CardTitle>
              <User className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12</div>
              <p className="text-xs text-muted-foreground">Requires review</p>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Search and Filter */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="flex flex-col sm:flex-row gap-4"
      >
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            placeholder="Search by patient name, medication, or ID..."
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-full sm:w-[180px]">
            <SelectValue placeholder="Filter by status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Status</SelectItem>
            <SelectItem value="active">Active</SelectItem>
            <SelectItem value="completed">Completed</SelectItem>
            <SelectItem value="expired">Expired</SelectItem>
          </SelectContent>
        </Select>
        <Button variant="outline">
          <Filter className="mr-2 h-4 w-4" />
          More Filters
        </Button>
      </motion.div>

      {/* Prescriptions Table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <Card>
          <CardHeader>
            <CardTitle>Recent Prescriptions</CardTitle>
            <CardDescription>All prescriptions you've written for your patients</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Patient</TableHead>
                    <TableHead>Medication</TableHead>
                    <TableHead>Dosage</TableHead>
                    <TableHead>Duration</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Refills</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredPrescriptions.map((prescription) => (
                    <TableRow key={prescription.id}>
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <Avatar className="h-8 w-8">
                            <AvatarImage src={prescription.avatar} />
                            <AvatarFallback>{prescription.patientName[0]}</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-medium">{prescription.patientName}</p>
                            <p className="text-xs text-muted-foreground">{prescription.patientId}</p>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell className="font-medium">{prescription.medication}</TableCell>
                      <TableCell>{prescription.dosage}</TableCell>
                      <TableCell>{prescription.duration}</TableCell>
                      <TableCell>{prescription.date}</TableCell>
                      <TableCell>{prescription.refills} left</TableCell>
                      <TableCell>
                        <Badge
                          variant={
                            prescription.status === "Active"
                              ? "default"
                              : prescription.status === "Completed"
                              ? "secondary"
                              : "destructive"
                          }
                        >
                          {prescription.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
                          <Button variant="ghost" size="sm">
                            View
                          </Button>
                          {prescription.status === "Active" && (
                            <Button variant="outline" size="sm">
                              Renew
                            </Button>
                          )}
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {filteredPrescriptions.length === 0 && (
        <Card>
          <CardContent className="py-12 text-center">
            <Pill className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
            <h3 className="text-lg font-semibold mb-2">No prescriptions found</h3>
            <p className="text-muted-foreground">
              Try adjusting your search or filter criteria
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
