"use client";

import { useRouter, useParams } from "next/navigation";
import { ArrowLeft, Calendar, Clock, Video, MapPin, FileText, Pill, Download, MessageSquare } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { Separator } from "../components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { motion } from "motion/react";

export function AppointmentDetails() {
  const router = useRouter();
  const params = useParams<{ id: string }>();
  const id = params?.id;

  const appointment = {
    id: id,
    doctor: "Dr. Sarah Smith",
    specialty: "Cardiologist",
    date: "March 15, 2026",
    time: "10:00 AM",
    type: "Video Call",
    status: "upcoming",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah",
    location: "Online",
    duration: "30 minutes",
    reason: "Follow-up consultation for recent heart checkup and medication review",
    notes: "Patient has been taking prescribed medication regularly. Blood pressure readings have improved significantly over the past month.",
    prescriptions: [
      { name: "Lisinopril 10mg", dosage: "Once daily", duration: "30 days" },
      { name: "Atorvastatin 20mg", dosage: "Once at bedtime", duration: "30 days" },
    ],
    labOrders: [
      { name: "Lipid Profile", status: "Pending", date: "March 20, 2026" },
      { name: "ECG", status: "Scheduled", date: "March 22, 2026" },
    ],
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <Button variant="ghost" onClick={() => router.push("/appointments")} className="mb-4">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Appointments
        </Button>
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">Appointment Details</h1>
            <p className="text-muted-foreground">View and manage your appointment information</p>
          </div>
          <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100 text-lg px-4 py-2">
            Upcoming
          </Badge>
        </div>
      </motion.div>

      {/* Doctor Info Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Card>
          <CardContent className="p-6">
            <div className="flex items-start gap-6">
              <Avatar className="h-24 w-24">
                <AvatarImage src={appointment.avatar} />
                <AvatarFallback>{appointment.doctor[4]}</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <h2 className="text-2xl font-bold mb-1">{appointment.doctor}</h2>
                <p className="text-muted-foreground mb-4">{appointment.specialty}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-primary" />
                    <div>
                      <p className="text-sm text-muted-foreground">Date</p>
                      <p className="font-medium">{appointment.date}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-primary" />
                    <div>
                      <p className="text-sm text-muted-foreground">Time</p>
                      <p className="font-medium">{appointment.time} ({appointment.duration})</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {appointment.type === "Video Call" ? (
                      <Video className="h-5 w-5 text-primary" />
                    ) : (
                      <MapPin className="h-5 w-5 text-primary" />
                    )}
                    <div>
                      <p className="text-sm text-muted-foreground">Type</p>
                      <p className="font-medium">{appointment.type}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    <div>
                      <p className="text-sm text-muted-foreground">Location</p>
                      <p className="font-medium">{appointment.location}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Action Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="flex flex-wrap gap-3"
      >
        {appointment.type === "Video Call" && (
          <Button size="lg" className="flex-1">
            <Video className="mr-2 h-5 w-5" />
            Join Video Call
          </Button>
        )}
        <Button variant="outline" size="lg" className="flex-1">
          <MessageSquare className="mr-2 h-5 w-5" />
          Message Doctor
        </Button>
        <Button variant="outline" size="lg">
          Reschedule
        </Button>
        <Button variant="outline" size="lg">
          Cancel
        </Button>
      </motion.div>

      {/* Details Tabs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="prescriptions">Prescriptions</TabsTrigger>
            <TabsTrigger value="lab-orders">Lab Orders</TabsTrigger>
          </TabsList>

          <TabsContent value="overview">
            <Card>
              <CardHeader>
                <CardTitle>Appointment Overview</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-2">Reason for Visit</h3>
                  <p className="text-muted-foreground">{appointment.reason}</p>
                </div>

                <Separator />

                <div>
                  <h3 className="font-semibold mb-2">Doctor's Notes</h3>
                  <p className="text-muted-foreground">{appointment.notes}</p>
                </div>

                <Separator />

                <div>
                  <h3 className="font-semibold mb-3">Preparation Instructions</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2" />
                      <span>Have your recent medical reports ready</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2" />
                      <span>List any new symptoms or concerns</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2" />
                      <span>Join the call 5 minutes before the scheduled time</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="prescriptions">
            <Card>
              <CardHeader>
                <CardTitle>Prescriptions</CardTitle>
                <CardDescription>Medications prescribed during this appointment</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {appointment.prescriptions.map((prescription, index) => (
                  <div key={index} className="p-4 border rounded-lg">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <Pill className="h-5 w-5 text-primary" />
                        <h3 className="font-semibold">{prescription.name}</h3>
                      </div>
                      <Button variant="ghost" size="sm">
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="grid grid-cols-2 gap-4 ml-8">
                      <div>
                        <p className="text-sm text-muted-foreground">Dosage</p>
                        <p className="font-medium">{prescription.dosage}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Duration</p>
                        <p className="font-medium">{prescription.duration}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="lab-orders">
            <Card>
              <CardHeader>
                <CardTitle>Lab Orders</CardTitle>
                <CardDescription>Tests ordered during this appointment</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {appointment.labOrders.map((lab, index) => (
                  <div key={index} className="p-4 border rounded-lg">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <FileText className="h-5 w-5 text-primary" />
                        <div>
                          <h3 className="font-semibold">{lab.name}</h3>
                          <p className="text-sm text-muted-foreground">Scheduled for {lab.date}</p>
                        </div>
                      </div>
                      <Badge variant={lab.status === "Pending" ? "outline" : "secondary"}>
                        {lab.status}
                      </Badge>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </motion.div>
    </div>
  );
}
