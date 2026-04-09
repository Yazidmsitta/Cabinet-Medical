"use client";

import { Bell, Calendar, TestTube, Pill, CreditCard, Check, Trash2 } from "lucide-react";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { motion } from "motion/react";

const notifications = [
  {
    id: 1,
    type: "appointment",
    title: "Upcoming Appointment Reminder",
    message: "Your appointment with Dr. Sarah Smith is tomorrow at 10:00 AM",
    time: "2 hours ago",
    read: false,
    icon: Calendar,
  },
  {
    id: 2,
    type: "lab",
    title: "Lab Results Available",
    message: "Your lipid profile test results are now available to view",
    time: "5 hours ago",
    read: false,
    icon: TestTube,
  },
  {
    id: 3,
    type: "prescription",
    title: "Prescription Refill Reminder",
    message: "Your Metformin prescription needs refill in 5 days",
    time: "1 day ago",
    read: false,
    icon: Pill,
  },
  {
    id: 4,
    type: "payment",
    title: "Payment Confirmation",
    message: "Your payment of $150 for cardiology consultation has been processed",
    time: "2 days ago",
    read: true,
    icon: CreditCard,
  },
  {
    id: 5,
    type: "appointment",
    title: "Appointment Confirmed",
    message: "Your appointment with Dr. Michael Chen on March 18 is confirmed",
    time: "3 days ago",
    read: true,
    icon: Calendar,
  },
];

export function Notifications() {
  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">Notifications</h1>
            <p className="text-muted-foreground">Stay updated with your health activities</p>
          </div>
          <Button variant="outline">Mark All as Read</Button>
        </div>
      </motion.div>

      <Tabs defaultValue="all" className="space-y-4">
        <TabsList>
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="unread">
            Unread
            <Badge className="ml-2 bg-primary">{notifications.filter(n => !n.read).length}</Badge>
          </TabsTrigger>
          <TabsTrigger value="read">Read</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-3">
          {notifications.map((notification, index) => (
            <motion.div
              key={notification.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <Card className={!notification.read ? "border-primary/50 bg-primary/5" : ""}>
                <CardContent className="p-4">
                  <div className="flex items-start gap-4">
                    <div className={`h-10 w-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                      !notification.read ? "bg-primary text-primary-foreground" : "bg-muted"
                    }`}>
                      <notification.icon className="h-5 w-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2 mb-1">
                        <h3 className="font-semibold">{notification.title}</h3>
                        {!notification.read && (
                          <div className="h-2 w-2 rounded-full bg-primary flex-shrink-0 mt-2" />
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">{notification.message}</p>
                      <p className="text-xs text-muted-foreground">{notification.time}</p>
                    </div>
                    <div className="flex gap-1">
                      {!notification.read && (
                        <Button variant="ghost" size="icon">
                          <Check className="h-4 w-4" />
                        </Button>
                      )}
                      <Button variant="ghost" size="icon">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </TabsContent>

        <TabsContent value="unread" className="space-y-3">
          {notifications.filter(n => !n.read).map((notification, index) => (
            <motion.div
              key={notification.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <Card className="border-primary/50 bg-primary/5">
                <CardContent className="p-4">
                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-lg bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0">
                      <notification.icon className="h-5 w-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2 mb-1">
                        <h3 className="font-semibold">{notification.title}</h3>
                        <div className="h-2 w-2 rounded-full bg-primary flex-shrink-0 mt-2" />
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">{notification.message}</p>
                      <p className="text-xs text-muted-foreground">{notification.time}</p>
                    </div>
                    <div className="flex gap-1">
                      <Button variant="ghost" size="icon">
                        <Check className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </TabsContent>

        <TabsContent value="read" className="space-y-3">
          {notifications.filter(n => n.read).map((notification, index) => (
            <motion.div
              key={notification.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-lg bg-muted flex items-center justify-center flex-shrink-0">
                      <notification.icon className="h-5 w-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold mb-1">{notification.title}</h3>
                      <p className="text-sm text-muted-foreground mb-2">{notification.message}</p>
                      <p className="text-xs text-muted-foreground">{notification.time}</p>
                    </div>
                    <Button variant="ghost" size="icon">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </TabsContent>
      </Tabs>
    </div>
  );
}
