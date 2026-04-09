"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import { Badge } from "../components/ui/badge";
import { Switch } from "../components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { 
  Bell, 
  Send, 
  Mail,
  MessageSquare,
  Calendar,
  Users,
  Settings,
  Clock,
  Check,
  X
} from "lucide-react";
import { toast } from "sonner";

export function NotificationSystem() {
  const [emailEnabled, setEmailEnabled] = useState(true);
  const [smsEnabled, setSmsEnabled] = useState(true);

  const handleSendNotification = () => {
    toast.success("Notification sent successfully");
  };

  const scheduledNotifications = [
    {
      id: "1",
      type: "Appointment Reminder",
      recipients: 45,
      scheduledFor: "2026-03-13 09:00",
      status: "scheduled",
      channel: "email-sms"
    },
    {
      id: "2",
      type: "Lab Results Ready",
      recipients: 12,
      scheduledFor: "2026-03-13 14:00",
      status: "scheduled",
      channel: "email"
    },
    {
      id: "3",
      type: "Payment Due Reminder",
      recipients: 28,
      scheduledFor: "2026-03-14 10:00",
      status: "scheduled",
      channel: "email-sms"
    }
  ];

  const recentNotifications = [
    {
      id: "1",
      type: "Appointment Confirmation",
      recipients: 156,
      sentAt: "2026-03-12 08:30",
      status: "delivered",
      successRate: "98%"
    },
    {
      id: "2",
      type: "Prescription Ready",
      recipients: 34,
      sentAt: "2026-03-11 15:45",
      status: "delivered",
      successRate: "100%"
    },
    {
      id: "3",
      type: "Follow-up Reminder",
      recipients: 67,
      sentAt: "2026-03-10 10:00",
      status: "delivered",
      successRate: "95%"
    }
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Notification & Reminder System</h1>
          <p className="text-muted-foreground">Manage automated notifications and patient reminders</p>
        </div>
        <Button>
          <Settings className="w-4 h-4 mr-2" />
          Configure Settings
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardDescription>Sent Today</CardDescription>
              <Send className="w-4 h-4 text-muted-foreground" />
            </div>
            <CardTitle className="text-3xl">247</CardTitle>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardDescription>Scheduled</CardDescription>
              <Clock className="w-4 h-4 text-muted-foreground" />
            </div>
            <CardTitle className="text-3xl">85</CardTitle>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardDescription>Delivery Rate</CardDescription>
              <Check className="w-4 h-4 text-success" />
            </div>
            <CardTitle className="text-3xl text-success">97%</CardTitle>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardDescription>Failed</CardDescription>
              <X className="w-4 h-4 text-destructive" />
            </div>
            <CardTitle className="text-3xl text-destructive">8</CardTitle>
          </CardHeader>
        </Card>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2">
          <Card>
            <CardContent className="p-6">
              <Tabs defaultValue="compose" className="space-y-6">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="compose">
                    <Send className="w-4 h-4 mr-2" />
                    Compose
                  </TabsTrigger>
                  <TabsTrigger value="scheduled">
                    <Clock className="w-4 h-4 mr-2" />
                    Scheduled
                  </TabsTrigger>
                  <TabsTrigger value="history">
                    <Bell className="w-4 h-4 mr-2" />
                    History
                  </TabsTrigger>
                </TabsList>

                {/* Compose Tab */}
                <TabsContent value="compose" className="space-y-6">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label>Notification Type</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select notification type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="appointment">Appointment Reminder</SelectItem>
                          <SelectItem value="labresults">Lab Results Ready</SelectItem>
                          <SelectItem value="prescription">Prescription Ready</SelectItem>
                          <SelectItem value="payment">Payment Reminder</SelectItem>
                          <SelectItem value="followup">Follow-up Reminder</SelectItem>
                          <SelectItem value="custom">Custom Message</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label>Recipients</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select recipients" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All Patients</SelectItem>
                          <SelectItem value="appointments-today">Today's Appointments</SelectItem>
                          <SelectItem value="appointments-tomorrow">Tomorrow's Appointments</SelectItem>
                          <SelectItem value="pending-payments">Pending Payments</SelectItem>
                          <SelectItem value="custom">Custom Selection</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        placeholder="Enter notification subject..."
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        placeholder="Enter your message here..."
                        rows={8}
                      />
                      <p className="text-xs text-muted-foreground">
                        Use variables: {"{patient_name}"}, {"{appointment_date}"}, {"{doctor_name}"}
                      </p>
                    </div>

                    <div className="space-y-4 p-4 bg-muted/30 rounded-lg">
                      <Label>Delivery Channels</Label>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Mail className="w-4 h-4 text-primary" />
                            <span className="text-sm">Email</span>
                          </div>
                          <Switch checked={emailEnabled} onCheckedChange={setEmailEnabled} />
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <MessageSquare className="w-4 h-4 text-secondary" />
                            <span className="text-sm">SMS</span>
                          </div>
                          <Switch checked={smsEnabled} onCheckedChange={setSmsEnabled} />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label>Schedule</Label>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="date" className="text-sm text-muted-foreground">Date</Label>
                          <Input id="date" type="date" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="time" className="text-sm text-muted-foreground">Time</Label>
                          <Input id="time" type="time" />
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-2 pt-4">
                      <Button onClick={handleSendNotification} className="flex-1">
                        <Send className="w-4 h-4 mr-2" />
                        Send Now
                      </Button>
                      <Button variant="outline" className="flex-1">
                        <Clock className="w-4 h-4 mr-2" />
                        Schedule
                      </Button>
                    </div>
                  </div>
                </TabsContent>

                {/* Scheduled Tab */}
                <TabsContent value="scheduled" className="space-y-4">
                  {scheduledNotifications.map((notification) => (
                    <Card key={notification.id}>
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div>
                            <CardTitle className="text-base">{notification.type}</CardTitle>
                            <CardDescription>
                              {notification.recipients} recipients
                            </CardDescription>
                          </div>
                          <Badge variant="outline">Scheduled</Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              {new Date(notification.scheduledFor).toLocaleString("en-US", {
                                month: "short",
                                day: "numeric",
                                hour: "2-digit",
                                minute: "2-digit"
                              })}
                            </div>
                            <div className="flex items-center gap-1">
                              {notification.channel === "email-sms" ? (
                                <>
                                  <Mail className="w-4 h-4" />
                                  <MessageSquare className="w-4 h-4" />
                                </>
                              ) : (
                                <Mail className="w-4 h-4" />
                              )}
                            </div>
                          </div>
                          <div className="flex gap-2">
                            <Button variant="outline" size="sm">Edit</Button>
                            <Button variant="outline" size="sm">Cancel</Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </TabsContent>

                {/* History Tab */}
                <TabsContent value="history" className="space-y-4">
                  {recentNotifications.map((notification) => (
                    <Card key={notification.id}>
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div>
                            <CardTitle className="text-base">{notification.type}</CardTitle>
                            <CardDescription>
                              {notification.recipients} recipients • {notification.successRate} success rate
                            </CardDescription>
                          </div>
                          <Badge className="bg-success">Delivered</Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {new Date(notification.sentAt).toLocaleString("en-US", {
                              month: "short",
                              day: "numeric",
                              hour: "2-digit",
                              minute: "2-digit"
                            })}
                          </div>
                          <Button variant="link" size="sm" className="h-auto p-0">
                            View Details
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-4">
          {/* Templates */}
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Quick Templates</CardTitle>
              <CardDescription>Pre-configured message templates</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button variant="outline" className="w-full justify-start text-sm" size="sm">
                <Calendar className="w-4 h-4 mr-2" />
                Appointment in 24h
              </Button>
              <Button variant="outline" className="w-full justify-start text-sm" size="sm">
                <Calendar className="w-4 h-4 mr-2" />
                Appointment Confirmed
              </Button>
              <Button variant="outline" className="w-full justify-start text-sm" size="sm">
                <Bell className="w-4 h-4 mr-2" />
                Lab Results Ready
              </Button>
              <Button variant="outline" className="w-full justify-start text-sm" size="sm">
                <Bell className="w-4 h-4 mr-2" />
                Prescription Ready
              </Button>
            </CardContent>
          </Card>

          {/* Settings */}
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Automation Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Auto-remind 24h before</span>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Auto-confirm appointments</span>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Payment reminders</span>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Follow-up reminders</span>
                  <Switch />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Analytics Preview */}
          <Card>
            <CardHeader>
              <CardTitle className="text-base">This Week</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Total Sent</span>
                <span className="font-semibold">1,247</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Delivered</span>
                <span className="font-semibold text-success">1,205</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Failed</span>
                <span className="font-semibold text-destructive">42</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
