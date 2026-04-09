"use client";

import { useState } from "react";
import { Send, Search, Paperclip, MoreVertical } from "lucide-react";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { Badge } from "../components/ui/badge";
import { motion } from "motion/react";

const conversations = [
  {
    id: 1,
    doctor: "Dr. Sarah Smith",
    specialty: "Cardiologist",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah",
    lastMessage: "Your lab results look good. Let's schedule a follow-up.",
    time: "2h ago",
    unread: 2,
  },
  {
    id: 2,
    doctor: "Dr. Michael Chen",
    specialty: "General Physician",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=michael",
    lastMessage: "Please continue taking the prescribed medication.",
    time: "1d ago",
    unread: 0,
  },
  {
    id: 3,
    doctor: "Dr. Emily Johnson",
    specialty: "Dermatologist",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=emily",
    lastMessage: "The treatment is showing good progress.",
    time: "2d ago",
    unread: 0,
  },
];

const messages = [
  {
    id: 1,
    sender: "doctor",
    text: "Hello! I've reviewed your recent test results.",
    time: "10:30 AM",
  },
  {
    id: 2,
    sender: "patient",
    text: "Thank you, Doctor. How do they look?",
    time: "10:32 AM",
  },
  {
    id: 3,
    sender: "doctor",
    text: "Your cholesterol levels have improved significantly since our last check. The medication is working well.",
    time: "10:35 AM",
  },
  {
    id: 4,
    sender: "patient",
    text: "That's great news! Should I continue the same dosage?",
    time: "10:36 AM",
  },
  {
    id: 5,
    sender: "doctor",
    text: "Yes, continue with the current dosage. Let's schedule a follow-up in 3 months to monitor your progress.",
    time: "10:40 AM",
  },
];

export function Messages() {
  const [selectedChat, setSelectedChat] = useState(conversations[0]);
  const [newMessage, setNewMessage] = useState("");

  return (
    <div className="space-y-6">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-3xl font-bold mb-2">Messages</h1>
        <p className="text-muted-foreground">Communicate with your healthcare providers</p>
      </motion.div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Conversations List */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="lg:col-span-1"
        >
          <Card>
            <CardContent className="p-4">
              <div className="relative mb-4">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input placeholder="Search conversations..." className="pl-10" />
              </div>

              <div className="space-y-2">
                {conversations.map((conversation) => (
                  <div
                    key={conversation.id}
                    onClick={() => setSelectedChat(conversation)}
                    className={`p-3 rounded-lg cursor-pointer transition-colors ${
                      selectedChat.id === conversation.id
                        ? "bg-primary text-primary-foreground"
                        : "hover:bg-muted"
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <Avatar>
                        <AvatarImage src={conversation.avatar} />
                        <AvatarFallback>{conversation.doctor[4]}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <p className="font-medium truncate">{conversation.doctor}</p>
                          {conversation.unread > 0 && (
                            <Badge className={selectedChat.id === conversation.id 
                              ? "bg-primary-foreground text-primary" 
                              : "bg-primary text-primary-foreground"
                            }>
                              {conversation.unread}
                            </Badge>
                          )}
                        </div>
                        <p className={`text-xs mb-1 ${
                          selectedChat.id === conversation.id ? "opacity-90" : "text-muted-foreground"
                        }`}>
                          {conversation.specialty}
                        </p>
                        <p className={`text-sm truncate ${
                          selectedChat.id === conversation.id ? "opacity-80" : "text-muted-foreground"
                        }`}>
                          {conversation.lastMessage}
                        </p>
                        <p className={`text-xs mt-1 ${
                          selectedChat.id === conversation.id ? "opacity-70" : "text-muted-foreground"
                        }`}>
                          {conversation.time}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Chat Window */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="lg:col-span-2"
        >
          <Card className="h-[600px] flex flex-col">
            {/* Chat Header */}
            <div className="p-4 border-b flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarImage src={selectedChat.avatar} />
                  <AvatarFallback>{selectedChat.doctor[4]}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold">{selectedChat.doctor}</p>
                  <p className="text-sm text-muted-foreground">{selectedChat.specialty}</p>
                </div>
              </div>
              <Button variant="ghost" size="icon">
                <MoreVertical className="h-5 w-5" />
              </Button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === "patient" ? "justify-end" : "justify-start"}`}
                >
                  <div className={`max-w-[70%] ${message.sender === "patient" ? "order-2" : ""}`}>
                    <div
                      className={`p-3 rounded-lg ${
                        message.sender === "patient"
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted"
                      }`}
                    >
                      <p className="text-sm">{message.text}</p>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1 px-1">{message.time}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Message Input */}
            <div className="p-4 border-t">
              <div className="flex items-end gap-2">
                <Button variant="ghost" size="icon" className="flex-shrink-0">
                  <Paperclip className="h-5 w-5" />
                </Button>
                <Textarea
                  placeholder="Type your message..."
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  className="min-h-[60px] max-h-[120px]"
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault();
                      setNewMessage("");
                    }
                  }}
                />
                <Button size="icon" className="flex-shrink-0">
                  <Send className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
