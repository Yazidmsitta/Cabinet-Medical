"use client";

import { Calendar, Users, Clock, CheckCircle, AlertCircle, TrendingUp } from "lucide-react";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { Button } from "../components/ui/button";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from "recharts";
import { motion } from "motion/react";

const appointmentData = [
  { day: "Mon", count: 12 },
  { day: "Tue", count: 15 },
  { day: "Wed", count: 10 },
  { day: "Thu", count: 18 },
  { day: "Fri", count: 14 },
  { day: "Sat", count: 8 },
  { day: "Sun", count: 5 },
];

const patientSatisfaction = [
  { month: "Jan", score: 4.2 },
  { month: "Feb", score: 4.4 },
  { month: "Mar", score: 4.5 },
  { month: "Apr", score: 4.3 },
  { month: "May", score: 4.6 },
  { month: "Jun", score: 4.7 },
];

const todayPatients = [
  {
    id: 1,
    name: "Emma Wilson",
    time: "9:00 AM",
    type: "Checkup",
    status: "waiting",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=emma",
  },
  {
    id: 2,
    name: "James Brown",
    time: "10:00 AM",
    type: "Follow-up",
    status: "in-progress",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=james",
  },
  {
    id: 3,
    name: "Sophia Davis",
    time: "11:30 AM",
    type: "Consultation",
    status: "completed",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=sophia",
  },
  {
    id: 4,
    name: "Oliver Johnson",
    time: "2:00 PM",
    type: "Emergency",
    status: "waiting",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=oliver",
  },
];

export function DoctorDashboard() {
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
            <h1 className="text-3xl font-bold mb-2">Good morning, Dr. Smith!</h1>
            <p className="text-muted-foreground">You have 8 appointments today</p>
          </div>
          <div className="flex gap-3">
            <Link href="/doctor/calendar">
              <Button variant="outline" size="lg">
                <Calendar className="mr-2 h-5 w-5" />
                View Calendar
              </Button>
            </Link>
            <Link href="/doctor/patients">
              <Button size="lg">
                <Users className="mr-2 h-5 w-5" />
                Manage Patients
              </Button>
            </Link>
          </div>
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
              <CardTitle className="text-sm">Today's Appointments</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">8</div>
              <p className="text-xs text-muted-foreground">3 completed, 5 pending</p>
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
              <CardTitle className="text-sm">Total Patients</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
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
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm">Avg. Consultation Time</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">28 min</div>
              <p className="text-xs text-muted-foreground">-3 min from last week</p>
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
              <CardTitle className="text-sm">Patient Satisfaction</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">4.7/5</div>
              <p className="text-xs text-muted-foreground">+0.2 from last month</p>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Weekly Appointments */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Weekly Appointments</CardTitle>
              <CardDescription>Number of appointments per day</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={appointmentData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="day" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="count" fill="#0ea5e9" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </motion.div>

        {/* Patient Satisfaction Trend */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Patient Satisfaction Trend</CardTitle>
              <CardDescription>Average rating over last 6 months</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={250}>
                <LineChart data={patientSatisfaction}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis domain={[0, 5]} />
                  <Tooltip />
                  <Line type="monotone" dataKey="score" stroke="#10b981" strokeWidth={3} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Today's Schedule */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        <Card>
          <CardHeader>
            <CardTitle>Today's Schedule</CardTitle>
            <CardDescription>Manage your appointments for today</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {todayPatients.map((patient) => (
                <div key={patient.id} className="flex items-center gap-4 p-4 bg-muted/50 rounded-lg hover:bg-muted transition-colors">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={patient.avatar} />
                    <AvatarFallback>{patient.name[0]}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <p className="font-medium">{patient.name}</p>
                      {patient.status === "completed" && (
                        <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                          <CheckCircle className="h-3 w-3 mr-1" />
                          Completed
                        </Badge>
                      )}
                      {patient.status === "in-progress" && (
                        <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">
                          <Clock className="h-3 w-3 mr-1" />
                          In Progress
                        </Badge>
                      )}
                      {patient.status === "waiting" && (
                        <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-100">
                          <AlertCircle className="h-3 w-3 mr-1" />
                          Waiting
                        </Badge>
                      )}
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span>{patient.time}</span>
                      <span>•</span>
                      <span>{patient.type}</span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Link href={`/patients/${patient.id}/record`}>
                      <Button variant="outline" size="sm">
                        View Record
                      </Button>
                    </Link>
                    {patient.status !== "completed" && (
                      <Link href={`/consultation/${patient.id}`}>
                        <Button size="sm">
                          Start Consultation
                        </Button>
                      </Link>
                    )}
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