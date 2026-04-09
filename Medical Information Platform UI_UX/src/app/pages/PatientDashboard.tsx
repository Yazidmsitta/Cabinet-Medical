"use client";

import Link from "next/link";
import { Calendar, FileText, Pill, TestTube, Activity, TrendingUp, Clock, AlertCircle } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Progress } from "../components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { motion } from "motion/react";

const healthData = [
  { month: "Jan", value: 120 },
  { month: "Feb", value: 118 },
  { month: "Mar", value: 122 },
  { month: "Apr", value: 119 },
  { month: "May", value: 116 },
  { month: "Jun", value: 115 },
];

const upcomingAppointments = [
  {
    id: 1,
    doctor: "Dr. Sarah Smith",
    specialty: "Cardiologist",
    date: "March 15, 2026",
    time: "10:00 AM",
    type: "Follow-up",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah",
  },
  {
    id: 2,
    doctor: "Dr. Michael Chen",
    specialty: "General Physician",
    date: "March 18, 2026",
    time: "2:30 PM",
    type: "Checkup",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=michael",
  },
];

const recentActivities = [
  { id: 1, type: "prescription", text: "New prescription added", time: "2 hours ago" },
  { id: 2, type: "lab", text: "Lab results available", time: "1 day ago" },
  { id: 3, type: "appointment", text: "Appointment confirmed", time: "2 days ago" },
  { id: 4, type: "payment", text: "Payment processed", time: "3 days ago" },
];

export function PatientDashboard() {
  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">Welcome back, John!</h1>
            <p className="text-muted-foreground">Here's your health overview for today</p>
          </div>
          <Link href="/appointments/book">
            <Button size="lg">
              <Calendar className="mr-2 h-5 w-5" />
              Book Appointment
            </Button>
          </Link>
        </div>
      </motion.div>

      {/* Quick Stats */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm">Upcoming Appointments</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2</div>
              <p className="text-xs text-muted-foreground">Next in 3 days</p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm">Active Prescriptions</CardTitle>
              <Pill className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3</div>
              <p className="text-xs text-muted-foreground">1 needs refill</p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm">Pending Lab Results</CardTitle>
              <TestTube className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1</div>
              <p className="text-xs text-muted-foreground">Blood test pending</p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm">Health Score</CardTitle>
              <Activity className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">85%</div>
              <Progress value={85} className="mt-2" />
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Health Trend */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Blood Pressure Trend</CardTitle>
              <CardDescription>Last 6 months average (systolic)</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={250}>
                <AreaChart data={healthData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Area type="monotone" dataKey="value" stroke="#0ea5e9" fill="#0ea5e9" fillOpacity={0.3} />
                </AreaChart>
              </ResponsiveContainer>
              <div className="flex items-center justify-between mt-4 p-3 bg-accent/50 rounded-lg">
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-4 w-4 text-green-600" />
                  <span className="text-sm">Improving trend</span>
                </div>
                <span className="text-sm font-medium">-4.2% from last month</span>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Upcoming Appointments */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Appointments</CardTitle>
              <CardDescription>Your scheduled consultations</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {upcomingAppointments.map((appointment) => (
                <Link 
                  key={appointment.id} 
                  href={`/appointments/${appointment.id}`}
                  className="block"
                >
                  <div className="flex items-start gap-4 p-4 bg-muted/50 rounded-lg hover:bg-muted transition-colors cursor-pointer">
                    <Avatar>
                      <AvatarImage src={appointment.avatar} />
                      <AvatarFallback>{appointment.doctor[4]}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <p className="font-medium">{appointment.doctor}</p>
                        <Badge variant="outline">{appointment.type}</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">{appointment.specialty}</p>
                      <div className="flex items-center gap-4 text-sm">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          <span>{appointment.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          <span>{appointment.time}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
              <Link href="/appointments">
                <Button variant="outline" className="w-full">View All Appointments</Button>
              </Link>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Recent Activity */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Latest updates on your health records</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivities.map((activity) => (
                <div key={activity.id} className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                    {activity.type === "prescription" && <Pill className="h-5 w-5 text-primary" />}
                    {activity.type === "lab" && <TestTube className="h-5 w-5 text-primary" />}
                    {activity.type === "appointment" && <Calendar className="h-5 w-5 text-primary" />}
                    {activity.type === "payment" && <AlertCircle className="h-5 w-5 text-primary" />}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">{activity.text}</p>
                    <p className="text-xs text-muted-foreground">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}