"use client";

import { useState } from "react";
import Link from "next/link";
import { Calendar as CalendarIcon, Clock, Video, MapPin, Search, Filter, User, Phone, Mail } from "lucide-react";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Badge } from "../components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Calendar } from "../components/ui/calendar";
import { motion } from "motion/react";

const appointments = [
  {
    id: 1,
    patient: "Emma Wilson",
    age: 34,
    date: "March 15, 2026",
    time: "10:00 AM",
    type: "Video Call",
    status: "upcoming",
    reason: "Follow-up Consultation",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=emma",
    phone: "+1 234-567-8901",
    email: "emma.wilson@email.com",
  },
  {
    id: 2,
    patient: "James Brown",
    age: 45,
    date: "March 15, 2026",
    time: "11:30 AM",
    type: "In-Person",
    status: "upcoming",
    reason: "General Checkup",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=james",
    phone: "+1 234-567-8902",
    email: "james.brown@email.com",
  },
  {
    id: 3,
    patient: "Sophia Davis",
    age: 28,
    date: "March 16, 2026",
    time: "2:00 PM",
    type: "Video Call",
    status: "upcoming",
    reason: "Test Results Review",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=sophia",
    phone: "+1 234-567-8903",
    email: "sophia.davis@email.com",
  },
  {
    id: 4,
    patient: "Oliver Johnson",
    age: 52,
    date: "March 10, 2026",
    time: "9:00 AM",
    type: "In-Person",
    status: "completed",
    reason: "Routine Physical",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=oliver",
    phone: "+1 234-567-8904",
    email: "oliver.johnson@email.com",
  },
  {
    id: 5,
    patient: "Isabella Martinez",
    age: 39,
    date: "March 8, 2026",
    time: "3:30 PM",
    type: "Video Call",
    status: "completed",
    reason: "Post-Surgery Follow-up",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=isabella",
    phone: "+1 234-567-8905",
    email: "isabella.martinez@email.com",
  },
  {
    id: 6,
    patient: "Liam Anderson",
    age: 41,
    date: "March 5, 2026",
    time: "1:00 PM",
    type: "In-Person",
    status: "cancelled",
    reason: "Consultation",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=liam",
    phone: "+1 234-567-8906",
    email: "liam.anderson@email.com",
  },
];

export function DoctorAppointments() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [searchQuery, setSearchQuery] = useState("");

  const filteredAppointments = (status: string) => {
    return appointments.filter(apt => 
      (status === "all" || apt.status === status) &&
      (apt.patient.toLowerCase().includes(searchQuery.toLowerCase()) ||
       apt.reason.toLowerCase().includes(searchQuery.toLowerCase()))
    );
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
      >
        <div>
          <h1 className="text-3xl font-bold mb-2">My Appointments</h1>
          <p className="text-muted-foreground">Manage your patient appointments and schedules</p>
        </div>
        <Link href="/doctor/calendar">
          <Button size="lg">
            <CalendarIcon className="mr-2 h-5 w-5" />
            View Calendar
          </Button>
        </Link>
      </motion.div>

      {/* Search and Filters */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="flex flex-col sm:flex-row gap-4"
      >
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            placeholder="Search by patient name or reason..."
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <Button variant="outline">
          <Filter className="mr-2 h-4 w-4" />
          Filters
        </Button>
      </motion.div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Appointments List */}
        <div className="lg:col-span-2">
          <Tabs defaultValue="upcoming" className="space-y-4">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
              <TabsTrigger value="completed">Completed</TabsTrigger>
              <TabsTrigger value="cancelled">Cancelled</TabsTrigger>
            </TabsList>

            <TabsContent value="upcoming" className="space-y-4">
              {filteredAppointments("upcoming").map((appointment, index) => (
                <motion.div
                  key={appointment.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <Avatar className="h-14 w-14">
                          <AvatarImage src={appointment.avatar} />
                          <AvatarFallback>{appointment.patient[0]}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between mb-2">
                            <div>
                              <h3 className="font-semibold text-lg">{appointment.patient}</h3>
                              <p className="text-sm text-muted-foreground">Age: {appointment.age} • {appointment.reason}</p>
                            </div>
                            <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">
                              {appointment.type === "Video Call" ? (
                                <><Video className="h-3 w-3 mr-1" /> Video</>
                              ) : (
                                <><MapPin className="h-3 w-3 mr-1" /> In-Person</>
                              )}
                            </Badge>
                          </div>
                          <div className="flex flex-wrap gap-4 text-sm mb-4">
                            <div className="flex items-center gap-1 text-muted-foreground">
                              <CalendarIcon className="h-4 w-4" />
                              <span>{appointment.date}</span>
                            </div>
                            <div className="flex items-center gap-1 text-muted-foreground">
                              <Clock className="h-4 w-4" />
                              <span>{appointment.time}</span>
                            </div>
                            <div className="flex items-center gap-1 text-muted-foreground">
                              <Phone className="h-4 w-4" />
                              <span>{appointment.phone}</span>
                            </div>
                          </div>
                          <div className="flex gap-2">
                            <Link href={`/patients/${appointment.id}/record`} className="flex-1">
                              <Button variant="outline" className="w-full">
                                <User className="mr-2 h-4 w-4" />
                                View Record
                              </Button>
                            </Link>
                            {appointment.type === "Video Call" ? (
                              <Link href={`/consultation/${appointment.id}`} className="flex-1">
                                <Button className="w-full">
                                  <Video className="mr-2 h-4 w-4" />
                                  Start Call
                                </Button>
                              </Link>
                            ) : (
                              <Link href={`/consultation/${appointment.id}`} className="flex-1">
                                <Button className="w-full">Start Consultation</Button>
                              </Link>
                            )}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </TabsContent>

            <TabsContent value="completed" className="space-y-4">
              {filteredAppointments("completed").map((appointment, index) => (
                <motion.div
                  key={appointment.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <Avatar className="h-14 w-14">
                          <AvatarImage src={appointment.avatar} />
                          <AvatarFallback>{appointment.patient[0]}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between mb-2">
                            <div>
                              <h3 className="font-semibold text-lg">{appointment.patient}</h3>
                              <p className="text-sm text-muted-foreground">Age: {appointment.age} • {appointment.reason}</p>
                            </div>
                            <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Completed</Badge>
                          </div>
                          <div className="flex flex-wrap gap-4 text-sm mb-4">
                            <div className="flex items-center gap-1 text-muted-foreground">
                              <CalendarIcon className="h-4 w-4" />
                              <span>{appointment.date}</span>
                            </div>
                            <div className="flex items-center gap-1 text-muted-foreground">
                              <Clock className="h-4 w-4" />
                              <span>{appointment.time}</span>
                            </div>
                          </div>
                          <Link href={`/patients/${appointment.id}/record`}>
                            <Button variant="outline" className="w-full">View Medical Record</Button>
                          </Link>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </TabsContent>

            <TabsContent value="cancelled" className="space-y-4">
              {filteredAppointments("cancelled").map((appointment, index) => (
                <motion.div
                  key={appointment.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <Avatar className="h-14 w-14">
                          <AvatarImage src={appointment.avatar} />
                          <AvatarFallback>{appointment.patient[0]}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between mb-2">
                            <div>
                              <h3 className="font-semibold text-lg">{appointment.patient}</h3>
                              <p className="text-sm text-muted-foreground">Age: {appointment.age} • {appointment.reason}</p>
                            </div>
                            <Badge variant="destructive">Cancelled</Badge>
                          </div>
                          <div className="flex flex-wrap gap-4 text-sm mb-4">
                            <div className="flex items-center gap-1 text-muted-foreground">
                              <CalendarIcon className="h-4 w-4" />
                              <span>{appointment.date}</span>
                            </div>
                            <div className="flex items-center gap-1 text-muted-foreground">
                              <Clock className="h-4 w-4" />
                              <span>{appointment.time}</span>
                            </div>
                          </div>
                          <div className="flex items-center gap-1 text-sm text-muted-foreground">
                            <Mail className="h-4 w-4" />
                            <span>Contact: {appointment.email}</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </TabsContent>
          </Tabs>
        </div>

        {/* Calendar Sidebar */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold mb-4">Calendar</h3>
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border"
              />
              <div className="mt-6 space-y-3">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-blue-500"></div>
                  <span className="text-sm">Upcoming</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-green-500"></div>
                  <span className="text-sm">Completed</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-red-500"></div>
                  <span className="text-sm">Cancelled</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Quick Stats */}
          <Card className="mt-6">
            <CardContent className="p-6">
              <h3 className="font-semibold mb-4">Today's Summary</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Total Appointments</span>
                  <span className="font-semibold">8</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Completed</span>
                  <span className="font-semibold text-green-600">5</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Remaining</span>
                  <span className="font-semibold text-blue-600">3</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
