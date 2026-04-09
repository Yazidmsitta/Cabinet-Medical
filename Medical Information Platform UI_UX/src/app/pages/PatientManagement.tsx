"use client";

import { useState } from "react";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Badge } from "../components/ui/badge";
import { Avatar, AvatarFallback } from "../components/ui/avatar";
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
import { 
  Search, 
  Filter, 
  Users, 
  UserPlus,
  Eye,
  Calendar,
  FileText,
  MoreHorizontal
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../components/ui/dropdown-menu";

interface Patient {
  id: string;
  name: string;
  age: number;
  gender: string;
  lastVisit: string;
  nextAppointment: string | null;
  condition: string;
  status: "active" | "inactive" | "critical";
  phone: string;
  email: string;
}

export function PatientManagement() {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");

  const patients: Patient[] = [
    {
      id: "1",
      name: "Sarah Johnson",
      age: 34,
      gender: "Female",
      lastVisit: "2026-03-10",
      nextAppointment: "2026-03-20",
      condition: "Hypertension",
      status: "active",
      phone: "+1 555-0101",
      email: "sarah.j@email.com"
    },
    {
      id: "2",
      name: "Michael Chen",
      age: 45,
      gender: "Male",
      lastVisit: "2026-03-08",
      nextAppointment: "2026-03-15",
      condition: "Diabetes Type 2",
      status: "active",
      phone: "+1 555-0102",
      email: "m.chen@email.com"
    },
    {
      id: "3",
      name: "Emma Wilson",
      age: 28,
      gender: "Female",
      lastVisit: "2026-03-05",
      nextAppointment: null,
      condition: "Asthma",
      status: "active",
      phone: "+1 555-0103",
      email: "emma.w@email.com"
    },
    {
      id: "4",
      name: "James Martinez",
      age: 52,
      gender: "Male",
      lastVisit: "2026-03-11",
      nextAppointment: "2026-03-18",
      condition: "Cardiovascular Disease",
      status: "critical",
      phone: "+1 555-0104",
      email: "james.m@email.com"
    },
    {
      id: "5",
      name: "Lisa Anderson",
      age: 39,
      gender: "Female",
      lastVisit: "2026-02-28",
      nextAppointment: "2026-03-25",
      condition: "Migraine",
      status: "active",
      phone: "+1 555-0105",
      email: "lisa.a@email.com"
    },
    {
      id: "6",
      name: "Robert Taylor",
      age: 61,
      gender: "Male",
      lastVisit: "2026-01-15",
      nextAppointment: null,
      condition: "Arthritis",
      status: "inactive",
      phone: "+1 555-0106",
      email: "robert.t@email.com"
    }
  ];

  const filteredPatients = patients.filter(patient => {
    const matchesSearch = patient.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         patient.condition.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === "all" || patient.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active": return "bg-success text-success-foreground";
      case "critical": return "bg-destructive text-destructive-foreground";
      case "inactive": return "bg-muted text-muted-foreground";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Patient Management</h1>
          <p className="text-muted-foreground">View and manage all your patients</p>
        </div>
        <Button>
          <UserPlus className="w-4 h-4 mr-2" />
          Add New Patient
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-3">
            <CardDescription>Total Patients</CardDescription>
            <CardTitle className="text-3xl">{patients.length}</CardTitle>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardDescription>Active Patients</CardDescription>
            <CardTitle className="text-3xl text-success">
              {patients.filter(p => p.status === "active").length}
            </CardTitle>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardDescription>Critical Cases</CardDescription>
            <CardTitle className="text-3xl text-destructive">
              {patients.filter(p => p.status === "critical").length}
            </CardTitle>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardDescription>This Month</CardDescription>
            <CardTitle className="text-3xl text-primary">+12</CardTitle>
          </CardHeader>
        </Card>
      </div>

      {/* Filters and Search */}
      <Card>
        <CardHeader>
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
            <div className="flex-1 w-full md:max-w-md">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Search by name or condition..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <div className="flex gap-2 w-full md:w-auto">
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-full md:w-[180px]">
                  <Filter className="w-4 h-4 mr-2" />
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Statuses</SelectItem>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="critical">Critical</SelectItem>
                  <SelectItem value="inactive">Inactive</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="rounded-lg border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Patient</TableHead>
                  <TableHead>Age/Gender</TableHead>
                  <TableHead>Condition</TableHead>
                  <TableHead>Last Visit</TableHead>
                  <TableHead>Next Appointment</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredPatients.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={7} className="text-center py-8 text-muted-foreground">
                      No patients found
                    </TableCell>
                  </TableRow>
                ) : (
                  filteredPatients.map((patient) => (
                    <TableRow key={patient.id} className="hover:bg-muted/50">
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <Avatar>
                            <AvatarFallback className="bg-primary text-white">
                              {patient.name.split(" ").map(n => n[0]).join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="font-medium">{patient.name}</div>
                            <div className="text-sm text-muted-foreground">{patient.email}</div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="text-sm">
                          <div>{patient.age} years</div>
                          <div className="text-muted-foreground">{patient.gender}</div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline">{patient.condition}</Badge>
                      </TableCell>
                      <TableCell className="text-sm">
                        {new Date(patient.lastVisit).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric"
                        })}
                      </TableCell>
                      <TableCell className="text-sm">
                        {patient.nextAppointment ? (
                          new Date(patient.nextAppointment).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric"
                          })
                        ) : (
                          <span className="text-muted-foreground">Not scheduled</span>
                        )}
                      </TableCell>
                      <TableCell>
                        <Badge className={getStatusColor(patient.status)}>
                          {patient.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="sm">
                              <MoreHorizontal className="w-4 h-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem asChild>
                              <Link href={`/patients/${patient.id}/record`} className="flex items-center">
                                <Eye className="w-4 h-4 mr-2" />
                                View Record
                              </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Calendar className="w-4 h-4 mr-2" />
                              Schedule Appointment
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild>
                              <Link href={`/consultation/${patient.id}`} className="flex items-center">
                                <FileText className="w-4 h-4 mr-2" />
                                Start Consultation
                              </Link>
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
