"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, Filter, TestTube, Download, Eye, Calendar, AlertCircle } from "lucide-react";
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

const labResults = [
  {
    id: 1,
    patientName: "Emma Wilson",
    patientId: "P-12345",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=emma",
    testName: "Complete Blood Count",
    date: "March 10, 2026",
    status: "Normal",
    priority: "Routine",
    reviewed: true,
  },
  {
    id: 2,
    patientName: "James Brown",
    patientId: "P-23456",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=james",
    testName: "HbA1c Test",
    date: "March 12, 2026",
    status: "Abnormal",
    priority: "High",
    reviewed: false,
  },
  {
    id: 3,
    patientName: "Sophia Davis",
    patientId: "P-34567",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=sophia",
    testName: "Allergy Panel",
    date: "March 8, 2026",
    status: "Normal",
    priority: "Routine",
    reviewed: true,
  },
  {
    id: 4,
    patientName: "Oliver Johnson",
    patientId: "P-45678",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=oliver",
    testName: "Lipid Panel",
    date: "February 28, 2026",
    status: "Borderline",
    priority: "Medium",
    reviewed: true,
  },
  {
    id: 5,
    patientName: "Isabella Martinez",
    patientId: "P-56789",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=isabella",
    testName: "Post-Op Blood Work",
    date: "March 5, 2026",
    status: "Normal",
    priority: "High",
    reviewed: true,
  },
  {
    id: 6,
    patientName: "Liam Anderson",
    patientId: "P-67890",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=liam",
    testName: "Thyroid Function",
    date: "March 11, 2026",
    status: "Abnormal",
    priority: "High",
    reviewed: false,
  },
];

export function DoctorLabResults() {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [reviewFilter, setReviewFilter] = useState("all");

  const filteredResults = labResults.filter(result => {
    const matchesSearch = result.patientName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         result.testName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         result.patientId.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === "all" || result.status.toLowerCase() === statusFilter;
    const matchesReview = reviewFilter === "all" || 
                         (reviewFilter === "reviewed" && result.reviewed) ||
                         (reviewFilter === "pending" && !result.reviewed);
    return matchesSearch && matchesStatus && matchesReview;
  });

  const pendingReviews = labResults.filter(r => !r.reviewed).length;
  const abnormalResults = labResults.filter(r => r.status === "Abnormal").length;

  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold mb-2">Lab Results</h1>
            <p className="text-muted-foreground">Review and manage patient laboratory test results</p>
          </div>
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Export All
          </Button>
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
              <CardTitle className="text-sm">Total Results</CardTitle>
              <TestTube className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">342</div>
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
              <CardTitle className="text-sm">Pending Review</CardTitle>
              <AlertCircle className="h-4 w-4 text-orange-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{pendingReviews}</div>
              <p className="text-xs text-muted-foreground">Requires attention</p>
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
              <CardTitle className="text-sm">Abnormal Results</CardTitle>
              <AlertCircle className="h-4 w-4 text-destructive" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{abnormalResults}</div>
              <p className="text-xs text-muted-foreground">Needs follow-up</p>
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
              <CardTitle className="text-sm">This Week</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">18</div>
              <p className="text-xs text-muted-foreground">+5 from last week</p>
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
            placeholder="Search by patient name, test, or ID..."
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
            <SelectItem value="normal">Normal</SelectItem>
            <SelectItem value="abnormal">Abnormal</SelectItem>
            <SelectItem value="borderline">Borderline</SelectItem>
          </SelectContent>
        </Select>
        <Select value={reviewFilter} onValueChange={setReviewFilter}>
          <SelectTrigger className="w-full sm:w-[180px]">
            <SelectValue placeholder="Review status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Results</SelectItem>
            <SelectItem value="pending">Pending Review</SelectItem>
            <SelectItem value="reviewed">Reviewed</SelectItem>
          </SelectContent>
        </Select>
        <Button variant="outline">
          <Filter className="mr-2 h-4 w-4" />
          More Filters
        </Button>
      </motion.div>

      {/* Lab Results Grid */}
      <div className="grid gap-4">
        {filteredResults.map((result, index) => (
          <motion.div
            key={result.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index }}
          >
            <Card className={`hover:shadow-md transition-shadow ${!result.reviewed ? 'border-l-4 border-l-orange-500' : ''}`}>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={result.avatar} />
                    <AvatarFallback>{result.patientName[0]}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="font-semibold text-lg">{result.patientName}</h3>
                        <p className="text-sm text-muted-foreground">{result.patientId}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge
                          variant={
                            result.status === "Normal"
                              ? "default"
                              : result.status === "Abnormal"
                              ? "destructive"
                              : "secondary"
                          }
                        >
                          {result.status}
                        </Badge>
                        {!result.reviewed && (
                          <Badge variant="outline" className="bg-orange-50 text-orange-700 border-orange-200">
                            Pending Review
                          </Badge>
                        )}
                      </div>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4 text-sm">
                      <div>
                        <p className="text-muted-foreground">Test Name</p>
                        <p className="font-medium">{result.testName}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Date</p>
                        <p className="font-medium">{result.date}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Priority</p>
                        <Badge variant="outline">{result.priority}</Badge>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Status</p>
                        <p className="font-medium">{result.reviewed ? "Reviewed" : "Pending Review"}</p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Link href={`/lab-results/${result.id}`} className="flex-1">
                        <Button variant="outline" className="w-full">
                          <Eye className="mr-2 h-4 w-4" />
                          View Results
                        </Button>
                      </Link>
                      <Link href={`/patients/${result.id}/record`} className="flex-1">
                        <Button variant="outline" className="w-full">
                          View Patient Record
                        </Button>
                      </Link>
                      {!result.reviewed && (
                        <Button className="flex-1">
                          Mark as Reviewed
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {filteredResults.length === 0 && (
        <Card>
          <CardContent className="py-12 text-center">
            <TestTube className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
            <h3 className="text-lg font-semibold mb-2">No lab results found</h3>
            <p className="text-muted-foreground">
              Try adjusting your search or filter criteria
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
