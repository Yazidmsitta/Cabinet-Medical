"use client";

import Link from "next/link";
import { Search, Filter, Star, MapPin, Calendar } from "lucide-react";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Badge } from "../components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { motion } from "motion/react";

const doctors = [
  { id: 1, name: "Dr. Sarah Smith", specialty: "Cardiologist", rating: 4.9, reviews: 234, experience: "15 years", location: "Building A", available: "Today", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah" },
  { id: 2, name: "Dr. Michael Chen", specialty: "General Physician", rating: 4.8, reviews: 189, experience: "12 years", location: "Building B", available: "Tomorrow", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=michael" },
  { id: 3, name: "Dr. Emily Johnson", specialty: "Dermatologist", rating: 4.7, reviews: 156, experience: "10 years", location: "Building A", available: "Today", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=emily" },
  { id: 4, name: "Dr. Robert Lee", specialty: "Orthopedist", rating: 4.9, reviews: 201, experience: "18 years", location: "Building C", available: "Mar 15", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=robert" },
  { id: 5, name: "Dr. Lisa Anderson", specialty: "Pediatrician", rating: 4.8, reviews: 178, experience: "11 years", location: "Building B", available: "Tomorrow", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=lisa" },
  { id: 6, name: "Dr. James Wilson", specialty: "Neurologist", rating: 4.6, reviews: 143, experience: "14 years", location: "Building C", available: "Mar 16", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=james" },
];

export function DoctorsDirectory() {
  return (
    <div className="space-y-6">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-3xl font-bold mb-2">Find a Doctor</h1>
        <p className="text-muted-foreground">Search and connect with our healthcare professionals</p>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input placeholder="Search by name or specialty..." className="pl-10" />
        </div>
        <Select defaultValue="all">
          <SelectTrigger className="w-full md:w-48">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Specialties</SelectItem>
            <SelectItem value="cardiology">Cardiology</SelectItem>
            <SelectItem value="general">General Medicine</SelectItem>
            <SelectItem value="dermatology">Dermatology</SelectItem>
            <SelectItem value="orthopedics">Orthopedics</SelectItem>
          </SelectContent>
        </Select>
        <Button variant="outline">
          <Filter className="mr-2 h-4 w-4" />
          More Filters
        </Button>
      </motion.div>

      <div className="grid gap-4 md:grid-cols-2">
        {doctors.map((doctor, index) => (
          <motion.div key={doctor.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.05 }}>
            <Card className="hover:shadow-md transition-shadow h-full">
              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <Avatar className="h-16 w-16">
                    <AvatarImage src={doctor.avatar} />
                    <AvatarFallback>{doctor.name[4]}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-lg mb-1">{doctor.name}</h3>
                    <p className="text-sm text-muted-foreground mb-2">{doctor.specialty}</p>
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="font-medium">{doctor.rating}</span>
                        <span className="text-sm text-muted-foreground">({doctor.reviews})</span>
                      </div>
                      <span className="text-muted-foreground">•</span>
                      <span className="text-sm text-muted-foreground">{doctor.experience}</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span className="text-muted-foreground">{doctor.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">Next available:</span>
                    <Badge variant="outline">{doctor.available}</Badge>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Link href={`/doctors/${doctor.id}`} className="flex-1">
                    <Button variant="outline" className="w-full">View Profile</Button>
                  </Link>
                  <Link href="/appointments/book" className="flex-1">
                    <Button className="w-full">Book Now</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
