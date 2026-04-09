"use client";

import { Users, Calendar, DollarSign, TrendingUp, Activity, UserCheck, Clock } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Progress } from "../components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { motion } from "motion/react";

const revenueData = [
  { month: "Jan", revenue: 45000, appointments: 320 },
  { month: "Feb", revenue: 52000, appointments: 380 },
  { month: "Mar", revenue: 48000, appointments: 350 },
  { month: "Apr", revenue: 61000, appointments: 420 },
  { month: "May", revenue: 55000, appointments: 390 },
  { month: "Jun", revenue: 67000, appointments: 450 },
];

const departmentData = [
  { name: "Cardiology", patients: 850, color: "#0ea5e9" },
  { name: "General", patients: 1200, color: "#8b5cf6" },
  { name: "Pediatrics", patients: 650, color: "#f59e0b" },
  { name: "Orthopedics", patients: 480, color: "#10b981" },
  { name: "Dermatology", patients: 390, color: "#ef4444" },
];

const appointmentTrends = [
  { day: "Mon", scheduled: 65, completed: 58, cancelled: 7 },
  { day: "Tue", scheduled: 72, completed: 68, cancelled: 4 },
  { day: "Wed", scheduled: 85, completed: 80, cancelled: 5 },
  { day: "Thu", scheduled: 78, completed: 72, cancelled: 6 },
  { day: "Fri", scheduled: 68, completed: 65, cancelled: 3 },
  { day: "Sat", scheduled: 42, completed: 40, cancelled: 2 },
  { day: "Sun", scheduled: 28, completed: 26, cancelled: 2 },
];

const topDoctors = [
  { name: "Dr. Sarah Smith", specialty: "Cardiologist", patients: 234, rating: 4.9, revenue: "$45,200" },
  { name: "Dr. Michael Chen", specialty: "General Physician", patients: 298, rating: 4.8, revenue: "$38,500" },
  { name: "Dr. Emily Johnson", specialty: "Dermatologist", patients: 187, rating: 4.7, revenue: "$32,100" },
  { name: "Dr. Robert Lee", specialty: "Orthopedist", patients: 165, rating: 4.9, revenue: "$42,800" },
];

export function AdminAnalytics() {
  return (
    <div className="space-y-6">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">Analytics Dashboard</h1>
            <p className="text-muted-foreground">Comprehensive healthcare system insights</p>
          </div>
          <Badge className="text-lg px-4 py-2">Admin View</Badge>
        </div>
      </motion.div>

      {/* Key Metrics */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm">Total Patients</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3,570</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-green-600">+12.5%</span> from last month
              </p>
              <Progress value={68} className="mt-3" />
            </CardContent>
          </Card>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm">Appointments Today</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">124</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-green-600">58 completed</span>, 66 pending
              </p>
              <Progress value={47} className="mt-3" />
            </CardContent>
          </Card>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm">Monthly Revenue</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$67,000</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-green-600">+18.2%</span> from last month
              </p>
              <Progress value={75} className="mt-3" />
            </CardContent>
          </Card>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm">Patient Satisfaction</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">4.8/5</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-green-600">+0.3</span> from last month
              </p>
              <Progress value={96} className="mt-3" />
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Revenue & Appointments Trend */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
          <Card>
            <CardHeader>
              <CardTitle>Revenue & Appointments</CardTitle>
              <CardDescription>Last 6 months performance</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={revenueData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis yAxisId="left" />
                  <YAxis yAxisId="right" orientation="right" />
                  <Tooltip />
                  <Legend />
                  <Area
                    yAxisId="left"
                    type="monotone"
                    dataKey="revenue"
                    stroke="#0ea5e9"
                    fill="#0ea5e9"
                    fillOpacity={0.3}
                    name="Revenue ($)"
                  />
                  <Area
                    yAxisId="right"
                    type="monotone"
                    dataKey="appointments"
                    stroke="#8b5cf6"
                    fill="#8b5cf6"
                    fillOpacity={0.3}
                    name="Appointments"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </motion.div>

        {/* Department Distribution */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>
          <Card>
            <CardHeader>
              <CardTitle>Patient Distribution by Department</CardTitle>
              <CardDescription>Current month breakdown</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-center">
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={departmentData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      outerRadius={100}
                      dataKey="patients"
                    >
                      {departmentData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Appointment Trends */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}>
        <Card>
          <CardHeader>
            <CardTitle>Weekly Appointment Trends</CardTitle>
            <CardDescription>Scheduled vs Completed appointments</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={appointmentTrends}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="scheduled" fill="#0ea5e9" name="Scheduled" />
                <Bar dataKey="completed" fill="#10b981" name="Completed" />
                <Bar dataKey="cancelled" fill="#ef4444" name="Cancelled" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </motion.div>

      {/* Top Performing Doctors */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}>
        <Card>
          <CardHeader>
            <CardTitle>Top Performing Doctors</CardTitle>
            <CardDescription>Based on patient volume and ratings</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topDoctors.map((doctor, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-lg font-bold text-primary">#{index + 1}</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">{doctor.name}</h4>
                      <p className="text-sm text-muted-foreground">{doctor.specialty}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-8">
                    <div className="text-center">
                      <p className="text-sm text-muted-foreground">Patients</p>
                      <p className="text-lg font-semibold">{doctor.patients}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-sm text-muted-foreground">Rating</p>
                      <div className="flex items-center gap-1">
                        <span className="text-lg font-semibold">{doctor.rating}</span>
                        <span className="text-yellow-500">⭐</span>
                      </div>
                    </div>
                    <div className="text-center">
                      <p className="text-sm text-muted-foreground">Revenue</p>
                      <p className="text-lg font-semibold">{doctor.revenue}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* System Stats */}
      <div className="grid gap-4 md:grid-cols-3">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 }}>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm">Active Doctors</CardTitle>
              <UserCheck className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">42</div>
              <p className="text-xs text-muted-foreground">Across 8 departments</p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.0 }}>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm">Avg. Wait Time</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12 min</div>
              <p className="text-xs text-muted-foreground">-3 min from last week</p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1 }}>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm">System Uptime</CardTitle>
              <Activity className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">99.9%</div>
              <p className="text-xs text-muted-foreground">Last 30 days</p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
