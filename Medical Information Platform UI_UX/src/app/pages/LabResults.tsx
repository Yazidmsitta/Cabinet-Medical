"use client";

import Link from "next/link";
import { TestTube, Calendar, TrendingUp, TrendingDown, Eye, Download } from "lucide-react";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { motion } from "motion/react";

const labResults = [
  { id: 1, name: "Complete Blood Count (CBC)", date: "March 8, 2026", status: "Normal", trend: "stable", doctor: "Dr. Michael Chen" },
  { id: 2, name: "Lipid Profile", date: "March 5, 2026", status: "Attention Needed", trend: "up", doctor: "Dr. Sarah Smith" },
  { id: 3, name: "Thyroid Function Test", date: "March 1, 2026", status: "Normal", trend: "down", doctor: "Dr. Emily Johnson" },
  { id: 4, name: "HbA1c (Diabetes)", date: "February 28, 2026", status: "Normal", trend: "down", doctor: "Dr. Michael Chen" },
  { id: 5, name: "Kidney Function Test", date: "February 25, 2026", status: "Normal", trend: "stable", doctor: "Dr. Robert Lee" },
  { id: 6, name: "Liver Function Test", date: "February 20, 2026", status: "Normal", trend: "stable", doctor: "Dr. Michael Chen" },
];

export function LabResults() {
  return (
    <div className="space-y-6">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-3xl font-bold mb-2">Laboratory Results</h1>
        <p className="text-muted-foreground">View and track your lab test results</p>
      </motion.div>

      <div className="grid gap-4">
        {labResults.map((result, index) => (
          <motion.div key={result.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.05 }}>
            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-4 flex-1">
                    <div className={`h-12 w-12 rounded-lg flex items-center justify-center ${
                      result.status === "Normal" ? "bg-green-100" : "bg-orange-100"
                    }`}>
                      <TestTube className={`h-6 w-6 ${
                        result.status === "Normal" ? "text-green-600" : "text-orange-600"
                      }`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-1">{result.name}</h3>
                      <p className="text-sm text-muted-foreground mb-2">Ordered by {result.doctor}</p>
                      <div className="flex flex-wrap items-center gap-3">
                        <div className="flex items-center gap-1 text-sm">
                          <Calendar className="h-4 w-4 text-muted-foreground" />
                          <span className="text-muted-foreground">{result.date}</span>
                        </div>
                        <Badge className={result.status === "Normal" 
                          ? "bg-green-100 text-green-800 hover:bg-green-100"
                          : "bg-orange-100 text-orange-800 hover:bg-orange-100"
                        }>
                          {result.status}
                        </Badge>
                        {result.trend === "up" && (
                          <div className="flex items-center gap-1 text-orange-600">
                            <TrendingUp className="h-4 w-4" />
                            <span className="text-sm">Increasing</span>
                          </div>
                        )}
                        {result.trend === "down" && (
                          <div className="flex items-center gap-1 text-green-600">
                            <TrendingDown className="h-4 w-4" />
                            <span className="text-sm">Improving</span>
                          </div>
                        )}
                        {result.trend === "stable" && (
                          <span className="text-sm text-muted-foreground">Stable</span>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Link href={`/lab-results/${result.id}`}>
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
