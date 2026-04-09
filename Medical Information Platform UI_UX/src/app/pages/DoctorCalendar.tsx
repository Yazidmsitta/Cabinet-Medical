"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Avatar, AvatarFallback } from "../components/ui/avatar";
import { 
  Calendar, 
  ChevronLeft, 
  ChevronRight, 
  Clock, 
  User, 
  Video,
  MapPin,
  Phone
} from "lucide-react";

interface Appointment {
  id: string;
  time: string;
  duration: number;
  patient: string;
  type: "in-person" | "video";
  reason: string;
  status: "scheduled" | "completed" | "cancelled";
}

export function DoctorCalendar() {
  const [selectedDate] = useState(new Date());
  const [view, setView] = useState<"day" | "week">("day");

  const timeSlots = Array.from({ length: 12 }, (_, i) => `${8 + i}:00`);

  const appointments: Appointment[] = [
    {
      id: "1",
      time: "09:00",
      duration: 30,
      patient: "Sarah Johnson",
      type: "in-person",
      reason: "Regular Checkup",
      status: "scheduled"
    },
    {
      id: "2",
      time: "10:00",
      duration: 45,
      patient: "Michael Chen",
      type: "video",
      reason: "Follow-up Consultation",
      status: "scheduled"
    },
    {
      id: "3",
      time: "11:30",
      duration: 30,
      patient: "Emma Wilson",
      type: "in-person",
      reason: "Lab Results Review",
      status: "scheduled"
    },
    {
      id: "4",
      time: "14:00",
      duration: 60,
      patient: "James Martinez",
      type: "in-person",
      reason: "Initial Consultation",
      status: "scheduled"
    },
    {
      id: "5",
      time: "15:30",
      duration: 30,
      patient: "Lisa Anderson",
      type: "video",
      reason: "Prescription Renewal",
      status: "scheduled"
    }
  ];

  const getAppointmentForTime = (time: string) => {
    return appointments.find(apt => apt.time === time);
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">My Calendar</h1>
          <p className="text-muted-foreground">Manage your daily schedule and appointments</p>
        </div>
        <Button>
          <Calendar className="w-4 h-4 mr-2" />
          Schedule Availability
        </Button>
      </div>

      <div className="grid lg:grid-cols-12 gap-6">
        {/* Main Calendar */}
        <div className="lg:col-span-8 space-y-4">
          {/* Calendar Controls */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="icon">
                      <ChevronLeft className="w-4 h-4" />
                    </Button>
                    <div className="text-center min-w-[200px]">
                      <h3 className="font-semibold">
                        {selectedDate.toLocaleDateString("en-US", { 
                          weekday: "long",
                          year: "numeric", 
                          month: "long", 
                          day: "numeric" 
                        })}
                      </h3>
                    </div>
                    <Button variant="outline" size="icon">
                      <ChevronRight className="w-4 h-4" />
                    </Button>
                  </div>
                  <Button variant="outline" size="sm">
                    Today
                  </Button>
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    variant={view === "day" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setView("day")}
                  >
                    Day
                  </Button>
                  <Button
                    variant={view === "week" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setView("week")}
                  >
                    Week
                  </Button>
                </div>
              </div>
            </CardHeader>
          </Card>

          {/* Time Grid */}
          <Card>
            <CardContent className="p-0">
              <div className="divide-y">
                {timeSlots.map((time) => {
                  const appointment = getAppointmentForTime(time);
                  return (
                    <div
                      key={time}
                      className="grid grid-cols-12 hover:bg-muted/30 transition-colors"
                    >
                      <div className="col-span-2 p-4 border-r bg-muted/20">
                        <span className="text-sm font-medium text-muted-foreground">
                          {time}
                        </span>
                      </div>
                      <div className="col-span-10 p-2">
                        {appointment ? (
                          <div className="h-full">
                            <Card className="border-l-4 border-l-primary bg-primary/5 hover:bg-primary/10 transition-colors cursor-pointer">
                              <CardContent className="p-3">
                                <div className="flex items-start justify-between gap-4">
                                  <div className="flex items-start gap-3 flex-1">
                                    <Avatar className="h-10 w-10">
                                      <AvatarFallback className="bg-primary text-white">
                                        {appointment.patient.split(" ").map(n => n[0]).join("")}
                                      </AvatarFallback>
                                    </Avatar>
                                    <div className="flex-1">
                                      <div className="flex items-center gap-2 mb-1">
                                        <h4 className="font-semibold">{appointment.patient}</h4>
                                        {appointment.type === "video" ? (
                                          <Badge variant="secondary" className="text-xs">
                                            <Video className="w-3 h-3 mr-1" />
                                            Video
                                          </Badge>
                                        ) : (
                                          <Badge variant="outline" className="text-xs">
                                            <MapPin className="w-3 h-3 mr-1" />
                                            In-Person
                                          </Badge>
                                        )}
                                      </div>
                                      <p className="text-sm text-muted-foreground mb-2">
                                        {appointment.reason}
                                      </p>
                                      <div className="flex items-center gap-3 text-xs text-muted-foreground">
                                        <span className="flex items-center gap-1">
                                          <Clock className="w-3 h-3" />
                                          {appointment.duration} min
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="flex gap-2">
                                    <Button size="sm" variant="outline">
                                      Reschedule
                                    </Button>
                                    <Button size="sm">
                                      Start
                                    </Button>
                                  </div>
                                </div>
                              </CardContent>
                            </Card>
                          </div>
                        ) : (
                          <div className="h-full min-h-[60px] flex items-center justify-center text-muted-foreground/30 text-sm">
                            Available
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-4 space-y-4">
          {/* Today's Summary */}
          <Card>
            <CardHeader>
              <CardTitle>Today's Summary</CardTitle>
              <CardDescription>
                {selectedDate.toLocaleDateString("en-US", { 
                  weekday: "long",
                  month: "short", 
                  day: "numeric" 
                })}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Total Appointments</span>
                <span className="text-2xl font-bold text-foreground">{appointments.length}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">In-Person</span>
                <span className="text-lg font-semibold text-foreground">
                  {appointments.filter(a => a.type === "in-person").length}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Video Calls</span>
                <span className="text-lg font-semibold text-foreground">
                  {appointments.filter(a => a.type === "video").length}
                </span>
              </div>
              <div className="pt-4 border-t">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-muted-foreground">Total Hours</span>
                  <span className="text-lg font-semibold text-foreground">
                    {appointments.reduce((acc, apt) => acc + apt.duration, 0) / 60}h
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Upcoming Next */}
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Next Appointment</CardTitle>
            </CardHeader>
            <CardContent>
              {appointments[0] && (
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarFallback className="bg-primary text-white">
                        {appointments[0].patient.split(" ").map(n => n[0]).join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <h4 className="font-semibold">{appointments[0].patient}</h4>
                      <p className="text-sm text-muted-foreground">{appointments[0].reason}</p>
                    </div>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      <span>{appointments[0].time} ({appointments[0].duration} min)</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      {appointments[0].type === "video" ? (
                        <>
                          <Video className="w-4 h-4" />
                          <span>Video Consultation</span>
                        </>
                      ) : (
                        <>
                          <MapPin className="w-4 h-4" />
                          <span>Room 203</span>
                        </>
                      )}
                    </div>
                  </div>
                  <Button className="w-full mt-4">
                    Start Consultation
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button variant="outline" className="w-full justify-start">
                <User className="w-4 h-4 mr-2" />
                Add Walk-in Patient
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Phone className="w-4 h-4 mr-2" />
                Emergency Call
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Calendar className="w-4 h-4 mr-2" />
                Block Time
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
