"use client";

import Link from "next/link";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Search, Calendar, FileText, Users, ShieldCheck, Clock } from "lucide-react";

export function Landing() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-white sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <ShieldCheck className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-xl font-bold text-foreground">SIMI</h1>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#features" className="text-sm text-muted-foreground hover:text-foreground">Features</a>
            <a href="#services" className="text-sm text-muted-foreground hover:text-foreground">Services</a>
            <a href="#about" className="text-sm text-muted-foreground hover:text-foreground">About</a>
          </nav>
          <div className="flex items-center gap-3">
            <Link href="/login">
              <Button variant="ghost">Login</Button>
            </Link>
            <Link href="/register">
              <Button>Sign Up</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 via-secondary/5 to-background py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Smart Medical Information System
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Manage appointments, medical records, and patient care with AI-powered scheduling and seamless communication
            </p>
            
            {/* Doctor Search */}
            <div className="bg-white rounded-xl shadow-lg p-6 max-w-2xl mx-auto">
              <div className="flex gap-3">
                <div className="flex-1">
                  <Input 
                    placeholder="Search doctors by specialty, name, or location..." 
                    className="h-12"
                  />
                </div>
                <Link href="/doctors">
                  <Button size="lg" className="h-12">
                    <Search className="w-4 h-4 mr-2" />
                    Search
                  </Button>
                </Link>
              </div>
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="text-sm text-muted-foreground">Popular:</span>
                <Button variant="outline" size="sm">Cardiology</Button>
                <Button variant="outline" size="sm">Dermatology</Button>
                <Button variant="outline" size="sm">Pediatrics</Button>
                <Button variant="outline" size="sm">Neurology</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Why Choose SIMI?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A complete healthcare management platform designed for patients, doctors, and medical staff
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-2 hover:border-primary/50 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Calendar className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Smart Scheduling</CardTitle>
                <CardDescription>
                  AI-powered appointment scheduling with no-show predictions and automated reminders
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                  <FileText className="w-6 h-6 text-secondary" />
                </div>
                <CardTitle>Medical Records</CardTitle>
                <CardDescription>
                  Secure digital medical records, prescriptions, and lab results accessible anytime
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Patient Care</CardTitle>
                <CardDescription>
                  Real-time messaging between doctors and patients for better communication
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Services</h2>
            <p className="text-lg text-muted-foreground">Comprehensive healthcare solutions</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Online Consultations</CardTitle>
                <CardDescription>Connect with doctors remotely</CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Prescription Management</CardTitle>
                <CardDescription>Digital prescriptions & refills</CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Lab Results</CardTitle>
                <CardDescription>Access reports instantly</CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Payment Processing</CardTitle>
                <CardDescription>Secure online payments</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 text-primary-foreground/90">
            Join thousands of patients and doctors using SIMI
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/register">
              <Button size="lg" variant="secondary">
                Create Account
              </Button>
            </Link>
            <Link href="/doctors">
              <Button size="lg" variant="outline" className="bg-white text-primary hover:bg-white/90">
                Find a Doctor
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5 text-white" />
                </div>
                <span className="font-bold">SIMI</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Smart Medical Information System
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Platform</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#features">Features</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#about">About Us</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#">Help Center</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Privacy Policy</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <p className="text-sm text-muted-foreground">
                support@simi.health<br />
                1-800-SIMI-HELP
              </p>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
            © 2026 SIMI. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
