"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, Filter, FileText, Download, Eye, Calendar, User } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { motion } from "motion/react";

const patientRecords = [
  {
    id: 1,
    patientName: "Emma Wilson",
    patientId: "P-12345",
    age: 34,
    gender: "Female",
    lastVisit: "March 10, 2026",
    recordCount: 12,
    status: "Active",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=emma",
    recentDiagnosis: "Hypertension Management",
  },
  {
    id: 2,
    patientName: "James Brown",
    patientId: "P-23456",
    age: 45,
    gender: "Male",
    lastVisit: "March 12, 2026",
    recordCount: 8,
    status: "Active",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=james",
    recentDiagnosis: "Diabetes Type 2",
  },
  {
    id: 3,
    patientName: "Sophia Davis",
    patientId: "P-34567",
    age: 28,
    gender: "Female",
    lastVisit: "March 8, 2026",
    recordCount: 5,
    status: "Active",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=sophia",
    recentDiagnosis: "Allergic Rhinitis",
  },
  {
    id: 4,
    patientName: "Oliver Johnson",
    patientId: "P-45678",
    age: 52,
    gender: "Male",
    lastVisit: "February 28, 2026",
    recordCount: 15,
    status: "Active",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=oliver",
    recentDiagnosis: "Arthritis",
  },
  {
    id: 5,
    patientName: "Isabella Martinez",
    patientId: "P-56789",
    age: 39,
    gender: "Female",
    lastVisit: "March 5, 2026",
    recordCount: 10,
    status: "Active",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=isabella",
    recentDiagnosis: "Post-Surgery Follow-up",
  },
  {
    id: 6,
    patientName: "Liam Anderson",
    patientId: "P-67890",
    age: 41,
    gender: "Male",
    lastVisit: "January 15, 2026",
    recordCount: 6,
    status: "Inactive",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=liam",
    recentDiagnosis: "Migraine",
  },
];

export function DoctorMedicalRecords() {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const filteredRecords = patientRecords.filter(record => {
    const matchesSearch = record.patientName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         record.patientId.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         record.recentDiagnosis.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === "all" || record.status.toLowerCase() === statusFilter;
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
            <h1 className="text-3xl font-bold mb-2">Patient Medical Records</h1>
            <p className="text-muted-foreground">Access and manage your patients' medical records</p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline">
              <Download className="mr-2 h-4 w-4" />
              Export All
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
              <CardTitle className="text-sm">Total Patients</CardTitle>
              <User className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">234</div>
              <p className="text-xs text-muted-foreground">+12 this month</p>
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
              <CardTitle className="text-sm">Active Patients</CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">189</div>
              <p className="text-xs text-muted-foreground">Last 90 days</p>
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
              <CardTitle className="text-sm">Total Records</CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1,247</div>
              <p className="text-xs text-muted-foreground">All time</p>
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
              <CardTitle className="text-sm">Pending Reviews</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">8</div>
              <p className="text-xs text-muted-foreground">Requires attention</p>
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
            placeholder="Search by patient name, ID, or diagnosis..."
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
            <SelectItem value="all">All Patients</SelectItem>
            <SelectItem value="active">Active</SelectItem>
            <SelectItem value="inactive">Inactive</SelectItem>
          </SelectContent>
        </Select>
        <Button variant="outline">
          <Filter className="mr-2 h-4 w-4" />
          More Filters
        </Button>
      </motion.div>

      {/* Patient Records Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filteredRecords.map((record, index) => (
          <motion.div
            key={record.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index }}
          >
            <Card className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={record.avatar} />
                    <AvatarFallback>{record.patientName[0]}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-base">{record.patientName}</CardTitle>
                        <CardDescription className="text-sm">{record.patientId}</CardDescription>
                      </div>
                      <Badge variant={record.status === "Active" ? "default" : "secondary"}>
                        {record.status}
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div>
                    <p className="text-muted-foreground">Age</p>
                    <p className="font-medium">{record.age} years</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Gender</p>
                    <p className="font-medium">{record.gender}</p>
                  </div>
                </div>
                <div className="text-sm">
                  <p className="text-muted-foreground">Recent Diagnosis</p>
                  <p className="font-medium">{record.recentDiagnosis}</p>
                </div>
                <div className="text-sm">
                  <p className="text-muted-foreground">Last Visit</p>
                  <p className="font-medium">{record.lastVisit}</p>
                </div>
                <div className="text-sm">
                  <p className="text-muted-foreground">Total Records</p>
                  <p className="font-medium">{record.recordCount} documents</p>
                </div>
                <div className="flex gap-2 pt-2">
                  <Link href={`/patients/${record.id}/record`} className="flex-1">
                    <Button variant="outline" className="w-full" size="sm">
                      <Eye className="mr-2 h-4 w-4" />
                      View Record
                    </Button>
                  </Link>
                  <Link href={`/consultation/${record.id}`} className="flex-1">
                    <Button className="w-full" size="sm">
                      Start Visit
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {filteredRecords.length === 0 && (
        <Card>
          <CardContent className="py-12 text-center">
            <FileText className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
            <h3 className="text-lg font-semibold mb-2">No records found</h3>
            <p className="text-muted-foreground">
              Try adjusting your search or filter criteria
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
