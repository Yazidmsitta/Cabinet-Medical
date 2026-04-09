"use client";

import { useState } from "react";
import Link from "next/link";
import { Calendar as CalendarIcon, Clock, Video, MapPin, Search, Filter, Plus } from "lucide-react";
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
    doctor: "Dr. Sarah Smith",
    specialty: "Cardiologist",
    date: "March 15, 2026",
    time: "10:00 AM",
    type: "Video Call",
    status: "upcoming",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah",
    location: "Online",
  },
  {
    id: 2,
    doctor: "Dr. Michael Chen",
    specialty: "General Physician",
    date: "March 18, 2026",
    time: "2:30 PM",
    type: "In-Person",
    status: "upcoming",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=michael",
    location: "Building A, Room 203",
  },
  {
    id: 3,
    doctor: "Dr. Emily Johnson",
    specialty: "Dermatologist",
    date: "March 8, 2026",
    time: "11:00 AM",
    type: "In-Person",
    status: "completed",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=emily",
    location: "Building B, Room 105",
  },
  {
    id: 4,
    doctor: "Dr. Robert Lee",
    specialty: "Orthopedist",
    date: "March 5, 2026",
    time: "3:00 PM",
    type: "Video Call",
    status: "completed",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=robert",
    location: "Online",
  },
  {
    id: 5,
    doctor: "Dr. Lisa Anderson",
    specialty: "Pediatrician",
    date: "February 28, 2026",
    time: "9:30 AM",
    type: "In-Person",
    status: "cancelled",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=lisa",
    location: "Building A, Room 310",
  },
];

export function Appointments() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [searchQuery, setSearchQuery] = useState("");

  const filteredAppointments = (status: string) => {
    return appointments.filter(apt => 
      (status === "all" || apt.status === status) &&
      (apt.doctor.toLowerCase().includes(searchQuery.toLowerCase()) ||
       apt.specialty.toLowerCase().includes(searchQuery.toLowerCase()))
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
          <h1 className="text-3xl font-bold mb-2">Appointments</h1>
          <p className="text-muted-foreground">Manage and track your medical appointments</p>
        </div>
        <Link href="/appointments/book">
          <Button size="lg">
            <Plus className="mr-2 h-5 w-5" />
            Book New Appointment
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
            placeholder="Search by doctor or specialty..."
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
                          <AvatarFallback>{appointment.doctor[4]}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between mb-2">
                            <div>
                              <h3 className="font-semibold text-lg">{appointment.doctor}</h3>
                              <p className="text-sm text-muted-foreground">{appointment.specialty}</p>
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
                              {appointment.type === "Video Call" ? (
                                <Video className="h-4 w-4" />
                              ) : (
                                <MapPin className="h-4 w-4" />
                              )}
                              <span>{appointment.location}</span>
                            </div>
                          </div>
                          <div className="flex gap-2">
                            <Link href={`/appointments/${appointment.id}`} className="flex-1">
                              <Button variant="outline" className="w-full">View Details</Button>
                            </Link>
                            {appointment.type === "Video Call" && (
                              <Button className="flex-1">Join Call</Button>
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
                          <AvatarFallback>{appointment.doctor[4]}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between mb-2">
                            <div>
                              <h3 className="font-semibold text-lg">{appointment.doctor}</h3>
                              <p className="text-sm text-muted-foreground">{appointment.specialty}</p>
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
                          <Link href={`/appointments/${appointment.id}`}>
                            <Button variant="outline" className="w-full">View Summary</Button>
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
                          <AvatarFallback>{appointment.doctor[4]}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between mb-2">
                            <div>
                              <h3 className="font-semibold text-lg">{appointment.doctor}</h3>
                              <p className="text-sm text-muted-foreground">{appointment.specialty}</p>
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
                          <Button variant="outline" className="w-full">Reschedule</Button>
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
        </motion.div>
      </div>
    </div>
  );
}
