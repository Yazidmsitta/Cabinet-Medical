"use client";

import Link from "next/link";
import { useRouter, useParams } from "next/navigation";
import { ArrowLeft, Star, MapPin, Calendar, Award, GraduationCap, Briefcase, Languages, Clock, MessageSquare } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { Separator } from "../components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { motion } from "motion/react";

const reviews = [
  { id: 1, patient: "John D.", rating: 5, date: "March 5, 2026", comment: "Excellent doctor! Very thorough and caring." },
  { id: 2, patient: "Sarah M.", rating: 5, date: "March 1, 2026", comment: "Dr. Smith is fantastic. She takes time to explain everything clearly." },
  { id: 3, patient: "Mike R.", rating: 4, date: "February 28, 2026", comment: "Professional and knowledgeable. Highly recommend!" },
];

export function DoctorProfile() {
  const router = useRouter();
  const params = useParams<{ id: string }>();
  const id = params?.id;

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <Button variant="ghost" onClick={() => router.push("/doctors")} className="mb-4">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Doctors
        </Button>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
        <Card>
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row gap-6">
              <Avatar className="h-32 w-32">
                <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=sarah" />
                <AvatarFallback>SS</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div>
                    <h1 className="text-3xl font-bold mb-2">Dr. Sarah Smith</h1>
                    <p className="text-xl text-muted-foreground mb-3">Cardiologist</p>
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1">
                        <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                        <span className="text-lg font-semibold">4.9</span>
                        <span className="text-muted-foreground">(234 reviews)</span>
                      </div>
                      <Badge>15 years experience</Badge>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button size="lg">
                      <MessageSquare className="mr-2 h-5 w-5" />
                      Message
                    </Button>
                    <Link href="/appointments/book">
                      <Button size="lg">
                        <Calendar className="mr-2 h-5 w-5" />
                        Book Appointment
                      </Button>
                    </Link>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    <div>
                      <p className="text-sm text-muted-foreground">Location</p>
                      <p className="font-medium">Building A, Room 203</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-primary" />
                    <div>
                      <p className="text-sm text-muted-foreground">Next Available</p>
                      <p className="font-medium">Today at 2:00 PM</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Languages className="h-5 w-5 text-primary" />
                    <div>
                      <p className="text-sm text-muted-foreground">Languages</p>
                      <p className="font-medium">English, Spanish</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-primary" />
                    <div>
                      <p className="text-sm text-muted-foreground">Availability</p>
                      <p className="font-medium">Mon-Fri, 9AM-5PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
        <Tabs defaultValue="about" className="space-y-4">
          <TabsList>
            <TabsTrigger value="about">About</TabsTrigger>
            <TabsTrigger value="education">Education & Training</TabsTrigger>
            <TabsTrigger value="specialties">Specialties</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
          </TabsList>

          <TabsContent value="about">
            <Card>
              <CardHeader>
                <CardTitle>About Dr. Sarah Smith</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Dr. Sarah Smith is a board-certified cardiologist with over 15 years of experience in treating heart conditions. She specializes in preventive cardiology, heart failure management, and interventional cardiology procedures.
                </p>
                <p className="text-muted-foreground">
                  Dr. Smith is committed to providing patient-centered care and takes time to understand each patient's unique health needs. She believes in a holistic approach to cardiovascular health that includes lifestyle modifications, preventive care, and advanced medical treatments when necessary.
                </p>
                <Separator />
                <div>
                  <h3 className="font-semibold mb-3">Professional Memberships</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2" />
                      <span>American College of Cardiology (ACC)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2" />
                      <span>American Heart Association (AHA)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2" />
                      <span>Society for Cardiovascular Angiography and Interventions</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="education">
            <Card>
              <CardHeader>
                <CardTitle>Education & Training</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex gap-4">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Medical Degree</h4>
                    <p className="text-muted-foreground">Harvard Medical School</p>
                    <p className="text-sm text-muted-foreground">2005 - 2009</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Briefcase className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Residency - Internal Medicine</h4>
                    <p className="text-muted-foreground">Johns Hopkins Hospital</p>
                    <p className="text-sm text-muted-foreground">2009 - 2012</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Fellowship - Cardiology</h4>
                    <p className="text-muted-foreground">Mayo Clinic</p>
                    <p className="text-sm text-muted-foreground">2012 - 2015</p>
                  </div>
                </div>

                <Separator />

                <div>
                  <h3 className="font-semibold mb-3">Board Certifications</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">American Board of Internal Medicine</Badge>
                    <Badge variant="outline">American Board of Cardiovascular Disease</Badge>
                    <Badge variant="outline">Interventional Cardiology Certification</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="specialties">
            <Card>
              <CardHeader>
                <CardTitle>Areas of Expertise</CardTitle>
                <CardDescription>Specialized treatments and procedures</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    "Preventive Cardiology",
                    "Heart Failure Management",
                    "Coronary Artery Disease",
                    "Hypertension Treatment",
                    "Cardiac Catheterization",
                    "Echocardiography",
                    "Stress Testing",
                    "Arrhythmia Management",
                  ].map((specialty, index) => (
                    <div key={index} className="flex items-center gap-2 p-3 bg-muted/50 rounded-lg">
                      <div className="h-2 w-2 rounded-full bg-primary" />
                      <span>{specialty}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reviews">
            <Card>
              <CardHeader>
                <CardTitle>Patient Reviews</CardTitle>
                <CardDescription>See what patients are saying</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {reviews.map((review) => (
                  <div key={review.id} className="pb-6 border-b last:border-0">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <Avatar className="h-10 w-10">
                          <AvatarFallback>{review.patient[0]}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">{review.patient}</p>
                          <p className="text-sm text-muted-foreground">{review.date}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-1">
                        {Array.from({ length: review.rating }).map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                    <p className="text-muted-foreground">{review.comment}</p>
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
