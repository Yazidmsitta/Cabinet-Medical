"use client";

import { Brain, Calendar, Clock, TrendingUp, Sparkles, ChevronRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Progress } from "../components/ui/progress";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { motion } from "motion/react";

const predictionData = [
  { day: "Mon", probability: 85 },
  { day: "Tue", probability: 72 },
  { day: "Wed", probability: 90 },
  { day: "Thu", probability: 65 },
  { day: "Fri", probability: 78 },
];

const typeDistribution = [
  { name: "Routine Checkup", value: 45, color: "#0ea5e9" },
  { name: "Follow-up", value: 30, color: "#8b5cf6" },
  { name: "Urgent Care", value: 15, color: "#f59e0b" },
  { name: "Specialist", value: 10, color: "#10b981" },
];

const recommendations = [
  {
    title: "Optimal Appointment Time",
    description: "Book appointments on Wednesday mornings for best availability",
    impact: "High",
    probability: 90,
  },
  {
    title: "Preventive Care Due",
    description: "Annual physical exam recommended within next 30 days",
    impact: "Medium",
    probability: 85,
  },
  {
    title: "Medication Refill",
    description: "Prescription refill needed in 2 weeks - schedule consultation",
    impact: "High",
    probability: 95,
  },
  {
    title: "Follow-up Scheduling",
    description: "Cardiology follow-up recommended after recent test results",
    impact: "Medium",
    probability: 80,
  },
];

export function AIScheduling() {
  return (
    <div className="space-y-6">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <div className="flex items-center gap-3 mb-2">
          <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center">
            <Brain className="h-7 w-7 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">AI Scheduling Assistant</h1>
            <p className="text-muted-foreground">Smart predictions and recommendations for your healthcare</p>
          </div>
        </div>
      </motion.div>

      <div className="grid gap-4 md:grid-cols-3">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
          <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-purple-500/5">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <Sparkles className="h-8 w-8 text-primary" />
                <Badge className="bg-primary">AI Powered</Badge>
              </div>
              <p className="text-2xl font-bold mb-1">95%</p>
              <p className="text-sm text-muted-foreground">Prediction Accuracy</p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <Calendar className="h-8 w-8 text-primary" />
              </div>
              <p className="text-2xl font-bold mb-1">8</p>
              <p className="text-sm text-muted-foreground">Smart Recommendations</p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <TrendingUp className="h-8 w-8 text-primary" />
              </div>
              <p className="text-2xl font-bold mb-1">23%</p>
              <p className="text-sm text-muted-foreground">Time Saved vs Manual</p>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
          <Card>
            <CardHeader>
              <CardTitle>Best Appointment Times</CardTitle>
              <CardDescription>AI-predicted availability for optimal scheduling</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={predictionData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="day" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="probability" fill="#0ea5e9" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
              <div className="mt-4 p-3 bg-primary/5 border border-primary/20 rounded-lg">
                <p className="text-sm">
                  <strong>AI Insight:</strong> Wednesday shows highest availability. Book early morning slots for best results.
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
          <Card>
            <CardHeader>
              <CardTitle>Appointment Type Distribution</CardTitle>
              <CardDescription>Your healthcare patterns analysis</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-center">
                <ResponsiveContainer width="100%" height={250}>
                  <PieChart>
                    <Pie
                      data={typeDistribution}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={100}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {typeDistribution.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="grid grid-cols-2 gap-2 mt-4">
                {typeDistribution.map((type, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full" style={{ backgroundColor: type.color }} />
                    <span className="text-sm">{type.name}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>
        <Card>
          <CardHeader>
            <CardTitle>Smart Recommendations</CardTitle>
            <CardDescription>AI-generated insights based on your health data</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {recommendations.map((rec, index) => (
              <div key={index} className="p-4 border rounded-lg hover:border-primary transition-colors">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-semibold">{rec.title}</h4>
                      <Badge variant={rec.impact === "High" ? "default" : "secondary"}>
                        {rec.impact} Impact
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{rec.description}</p>
                  </div>
                  <Button variant="ghost" size="icon">
                    <ChevronRight className="h-5 w-5" />
                  </Button>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Confidence</span>
                    <span className="font-medium">{rec.probability}%</span>
                  </div>
                  <Progress value={rec.probability} />
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}>
        <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-purple-500/5">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className="h-12 w-12 rounded-lg bg-primary flex items-center justify-center flex-shrink-0">
                <Sparkles className="h-6 w-6 text-primary-foreground" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold mb-2">Get Personalized Scheduling</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Let our AI analyze your schedule, health patterns, and doctor availability to suggest the perfect appointment times for you.
                </p>
                <Button>
                  <Brain className="mr-2 h-4 w-4" />
                  Generate AI Schedule
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
