"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, Calendar as CalendarIcon, Clock, Video, MapPin, Search } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { Badge } from "../components/ui/badge";
import { Calendar } from "../components/ui/calendar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { RadioGroup, RadioGroupItem } from "../components/ui/radio-group";
import { motion } from "motion/react";
import { toast } from "sonner";

const doctors = [
  {
    id: 1,
    name: "Dr. Sarah Smith",
    specialty: "Cardiologist",
    rating: 4.9,
    experience: "15 years",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah",
  },
  {
    id: 2,
    name: "Dr. Michael Chen",
    specialty: "General Physician",
    rating: 4.8,
    experience: "12 years",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=michael",
  },
  {
    id: 3,
    name: "Dr. Emily Johnson",
    specialty: "Dermatologist",
    rating: 4.7,
    experience: "10 years",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=emily",
  },
];

const timeSlots = [
  "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
  "2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM",
];

export function BookAppointment() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [selectedDoctor, setSelectedDoctor] = useState<any>(null);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>();
  const [selectedTime, setSelectedTime] = useState("");
  const [appointmentType, setAppointmentType] = useState("video");
  const [reason, setReason] = useState("");

  const handleBookAppointment = () => {
    toast.success("Appointment booked successfully!");
    setTimeout(() => router.push("/appointments"), 1500);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <Button
          variant="ghost"
          onClick={() => step > 1 ? setStep(step - 1) : router.push("/appointments")}
          className="mb-4"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>
        <h1 className="text-3xl font-bold mb-2">Book New Appointment</h1>
        <p className="text-muted-foreground">Schedule a consultation with our healthcare professionals</p>
      </motion.div>

      {/* Progress Steps */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <div className="flex items-center justify-between mb-8">
          {[1, 2, 3, 4].map((s) => (
            <div key={s} className="flex items-center flex-1">
              <div className={`flex items-center justify-center h-10 w-10 rounded-full border-2 ${
                step >= s ? "bg-primary border-primary text-primary-foreground" : "border-muted text-muted-foreground"
              }`}>
                {s}
              </div>
              {s < 4 && (
                <div className={`flex-1 h-1 mx-2 ${step > s ? "bg-primary" : "bg-muted"}`} />
              )}
            </div>
          ))}
        </div>
      </motion.div>

      {/* Step 1: Select Doctor */}
      {step === 1 && (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Select a Doctor</CardTitle>
              <CardDescription>Choose the healthcare professional you want to consult</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input placeholder="Search by name or specialty..." className="pl-10" />
              </div>

              <div className="space-y-3">
                {doctors.map((doctor) => (
                  <div
                    key={doctor.id}
                    onClick={() => setSelectedDoctor(doctor)}
                    className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                      selectedDoctor?.id === doctor.id
                        ? "border-primary bg-primary/5"
                        : "border-border hover:border-primary/50"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <Avatar className="h-16 w-16">
                        <AvatarImage src={doctor.avatar} />
                        <AvatarFallback>{doctor.name[4]}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg">{doctor.name}</h3>
                        <p className="text-sm text-muted-foreground">{doctor.specialty}</p>
                        <div className="flex items-center gap-4 mt-2">
                          <Badge variant="outline">⭐ {doctor.rating}</Badge>
                          <span className="text-sm text-muted-foreground">{doctor.experience} experience</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <Button
                className="w-full"
                disabled={!selectedDoctor}
                onClick={() => setStep(2)}
              >
                Continue
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      )}

      {/* Step 2: Select Date & Time */}
      {step === 2 && (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Select Date & Time</CardTitle>
              <CardDescription>Choose your preferred appointment slot</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label className="mb-3 block">Select Date</Label>
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={setSelectedDate}
                  className="rounded-md border mx-auto"
                  disabled={(date) => date < new Date()}
                />
              </div>

              {selectedDate && (
                <div>
                  <Label className="mb-3 block">Available Time Slots</Label>
                  <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                    {timeSlots.map((time) => (
                      <Button
                        key={time}
                        variant={selectedTime === time ? "default" : "outline"}
                        onClick={() => setSelectedTime(time)}
                        className="w-full"
                      >
                        <Clock className="mr-2 h-4 w-4" />
                        {time}
                      </Button>
                    ))}
                  </div>
                </div>
              )}

              <Button
                className="w-full"
                disabled={!selectedDate || !selectedTime}
                onClick={() => setStep(3)}
              >
                Continue
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      )}

      {/* Step 3: Appointment Type */}
      {step === 3 && (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Appointment Type</CardTitle>
              <CardDescription>Choose how you'd like to meet with the doctor</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <RadioGroup value={appointmentType} onValueChange={setAppointmentType}>
                <div
                  className={`flex items-start gap-4 p-4 border-2 rounded-lg cursor-pointer ${
                    appointmentType === "video" ? "border-primary bg-primary/5" : "border-border"
                  }`}
                  onClick={() => setAppointmentType("video")}
                >
                  <RadioGroupItem value="video" id="video" />
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <Video className="h-5 w-5 text-primary" />
                      <Label htmlFor="video" className="cursor-pointer">Video Consultation</Label>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Meet with your doctor online from the comfort of your home
                    </p>
                  </div>
                </div>

                <div
                  className={`flex items-start gap-4 p-4 border-2 rounded-lg cursor-pointer ${
                    appointmentType === "in-person" ? "border-primary bg-primary/5" : "border-border"
                  }`}
                  onClick={() => setAppointmentType("in-person")}
                >
                  <RadioGroupItem value="in-person" id="in-person" />
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <MapPin className="h-5 w-5 text-primary" />
                      <Label htmlFor="in-person" className="cursor-pointer">In-Person Visit</Label>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Visit the hospital for face-to-face consultation
                    </p>
                    {appointmentType === "in-person" && (
                      <div className="mt-3">
                        <Select defaultValue="building-a">
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="building-a">Building A, Room 203</SelectItem>
                            <SelectItem value="building-b">Building B, Room 105</SelectItem>
                            <SelectItem value="building-c">Building C, Room 401</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    )}
                  </div>
                </div>
              </RadioGroup>

              <div className="space-y-2">
                <Label htmlFor="reason">Reason for Visit</Label>
                <Textarea
                  id="reason"
                  placeholder="Please describe your symptoms or reason for consultation..."
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                  rows={4}
                />
              </div>

              <Button className="w-full" onClick={() => setStep(4)}>
                Continue
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      )}

      {/* Step 4: Confirmation */}
      {step === 4 && (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Confirm Appointment</CardTitle>
              <CardDescription>Review your appointment details</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center gap-4 p-4 bg-muted/50 rounded-lg">
                <Avatar className="h-16 w-16">
                  <AvatarImage src={selectedDoctor?.avatar} />
                  <AvatarFallback>{selectedDoctor?.name[4]}</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-semibold text-lg">{selectedDoctor?.name}</h3>
                  <p className="text-sm text-muted-foreground">{selectedDoctor?.specialty}</p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                  <CalendarIcon className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">Date</p>
                    <p className="font-medium">{selectedDate?.toLocaleDateString()}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                  <Clock className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">Time</p>
                    <p className="font-medium">{selectedTime}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                  {appointmentType === "video" ? (
                    <Video className="h-5 w-5 text-primary" />
                  ) : (
                    <MapPin className="h-5 w-5 text-primary" />
                  )}
                  <div>
                    <p className="text-sm text-muted-foreground">Type</p>
                    <p className="font-medium">
                      {appointmentType === "video" ? "Video Consultation" : "In-Person Visit"}
                    </p>
                  </div>
                </div>

                {reason && (
                  <div className="p-3 bg-muted/50 rounded-lg">
                    <p className="text-sm text-muted-foreground mb-1">Reason for Visit</p>
                    <p className="text-sm">{reason}</p>
                  </div>
                )}
              </div>

              <Button className="w-full" size="lg" onClick={handleBookAppointment}>
                Confirm & Book Appointment
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      )}
    </div>
  );
}
