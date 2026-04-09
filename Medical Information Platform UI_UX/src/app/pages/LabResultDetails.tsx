"use client";

import { useRouter, useParams } from "next/navigation";
import { ArrowLeft, TestTube, Download, Share, TrendingDown } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Progress } from "../components/ui/progress";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { motion } from "motion/react";

const trendData = [
  { date: "Jan", value: 185 },
  { date: "Feb", value: 175 },
  { date: "Mar", value: 165 },
];

const testResults = [
  { name: "Total Cholesterol", value: 165, unit: "mg/dL", range: "< 200", status: "normal", percentage: 82.5 },
  { name: "LDL Cholesterol", value: 98, unit: "mg/dL", range: "< 100", status: "normal", percentage: 98 },
  { name: "HDL Cholesterol", value: 55, unit: "mg/dL", range: "> 40", status: "normal", percentage: 137.5 },
  { name: "Triglycerides", value: 142, unit: "mg/dL", range: "< 150", status: "normal", percentage: 94.7 },
];

export function LabResultDetails() {
  const router = useRouter();
  const params = useParams<{ id: string }>();
  const id = params?.id;

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <Button variant="ghost" onClick={() => router.push("/lab-results")} className="mb-4">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Lab Results
        </Button>
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">Lipid Profile</h1>
            <p className="text-muted-foreground">Test conducted on March 5, 2026</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline">
              <Share className="mr-2 h-4 w-4" />
              Share
            </Button>
            <Button>
              <Download className="mr-2 h-4 w-4" />
              Download
            </Button>
          </div>
        </div>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-lg bg-green-100 flex items-center justify-center">
                  <TestTube className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <CardTitle>Overall Status</CardTitle>
                  <p className="text-sm text-muted-foreground">Ordered by Dr. Sarah Smith</p>
                </div>
              </div>
              <Badge className="bg-green-100 text-green-800 hover:bg-green-100 text-lg px-4 py-2">Normal</Badge>
            </div>
          </CardHeader>
        </Card>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
        <Card>
          <CardHeader>
            <CardTitle>Cholesterol Trend</CardTitle>
            <p className="text-sm text-muted-foreground">Last 3 months</p>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={trendData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="value" stroke="#10b981" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
            <div className="flex items-center justify-center gap-2 mt-4 p-3 bg-green-50 rounded-lg">
              <TrendingDown className="h-5 w-5 text-green-600" />
              <span className="text-sm text-green-900">Your cholesterol levels are improving! Down 20 mg/dL from January.</span>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
        <Card>
          <CardHeader>
            <CardTitle>Detailed Results</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {testResults.map((test, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold">{test.name}</h4>
                    <p className="text-sm text-muted-foreground">Normal range: {test.range} {test.unit}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold">{test.value}</p>
                    <p className="text-sm text-muted-foreground">{test.unit}</p>
                  </div>
                </div>
                <div className="space-y-1">
                  <Progress value={test.percentage > 100 ? 100 : test.percentage} className="h-2" />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>Low</span>
                    <span>Optimal</span>
                    <span>High</span>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
        <Card>
          <CardHeader>
            <CardTitle>Doctor's Notes</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              Patient's lipid profile shows significant improvement since last test. All values are within normal ranges. Continue current medication (Atorvastatin 20mg) and maintain healthy lifestyle choices.
            </p>
            <div className="p-4 bg-primary/5 border border-primary/20 rounded-lg">
              <h4 className="font-semibold mb-2">Recommendations:</h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Continue current medication regimen</li>
                <li>• Maintain low-fat, heart-healthy diet</li>
                <li>• Regular exercise (30 minutes, 5 days/week)</li>
                <li>• Follow-up lipid panel in 3 months</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
