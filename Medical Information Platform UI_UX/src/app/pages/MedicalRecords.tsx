"use client";

import Link from "next/link";
import { Search, Filter, FileText, Download, Eye } from "lucide-react";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Badge } from "../components/ui/badge";
import { motion } from "motion/react";

const records = [
  { id: 1, title: "Annual Physical Exam", doctor: "Dr. Michael Chen", date: "March 8, 2026", type: "Exam Report", category: "General" },
  { id: 2, title: "Cardiology Consultation", doctor: "Dr. Sarah Smith", date: "March 5, 2026", type: "Consultation Notes", category: "Cardiology" },
  { id: 3, title: "Blood Test Results", doctor: "Dr. Emily Johnson", date: "March 1, 2026", type: "Lab Results", category: "Laboratory" },
  { id: 4, title: "X-Ray Chest", doctor: "Dr. Robert Lee", date: "February 28, 2026", type: "Imaging", category: "Radiology" },
  { id: 5, title: "Prescription Refill", doctor: "Dr. Michael Chen", date: "February 25, 2026", type: "Prescription", category: "Pharmacy" },
  { id: 6, title: "Allergy Test Results", doctor: "Dr. Lisa Anderson", date: "February 20, 2026", type: "Lab Results", category: "Immunology" },
];

export function MedicalRecords() {
  return (
    <div className="space-y-6">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-3xl font-bold mb-2">Medical Records</h1>
        <p className="text-muted-foreground">Access and manage your health records</p>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input placeholder="Search records..." className="pl-10" />
        </div>
        <Button variant="outline">
          <Filter className="mr-2 h-4 w-4" />
          Filters
        </Button>
      </motion.div>

      <div className="grid gap-4">
        {records.map((record, index) => (
          <motion.div key={record.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.05 }}>
            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-4 flex-1">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <FileText className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-lg mb-1">{record.title}</h3>
                      <p className="text-sm text-muted-foreground mb-2">{record.doctor}</p>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline">{record.type}</Badge>
                        <Badge variant="secondary">{record.category}</Badge>
                        <span className="text-sm text-muted-foreground">{record.date}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Link href={`/medical-records/${record.id}`}>
                      <Button variant="outline" size="icon">
                        <Eye className="h-4 w-4" />
                      </Button>
                    </Link>
                    <Button variant="outline" size="icon">
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
