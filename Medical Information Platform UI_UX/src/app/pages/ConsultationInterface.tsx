"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import { Badge } from "../components/ui/badge";
import { Avatar, AvatarFallback } from "../components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { 
  FileText, 
  User, 
  Activity,
  Pill,
  Save,
  Printer,
  Send,
  AlertCircle,
  ClipboardList,
  Heart,
  Thermometer,
  Weight
} from "lucide-react";
import { toast } from "sonner";

export function ConsultationInterface() {
  const { id } = useParams();
  const [diagnosis, setDiagnosis] = useState("");
  const [notes, setNotes] = useState("");
  const [prescriptions, setPrescriptions] = useState<any[]>([]);

  const patient = {
    id: "1",
    name: "Sarah Johnson",
    age: 34,
    gender: "Female",
    bloodType: "O+",
    allergies: ["Penicillin", "Peanuts"],
    conditions: ["Hypertension"],
    lastVisit: "2026-02-10"
  };

  const vitals = {
    bloodPressure: "128/82",
    heartRate: "72",
    temperature: "98.4°F",
    weight: "145 lbs",
    height: "5'6\""
  };

  const addPrescription = () => {
    setPrescriptions([...prescriptions, {
      id: Date.now(),
      medication: "",
      dosage: "",
      frequency: "",
      duration: "",
      instructions: ""
    }]);
  };

  const handleSaveConsultation = () => {
    toast.success("Consultation notes saved successfully");
  };

  const handleGeneratePrescription = () => {
    toast.success("Prescription generated and saved");
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Consultation Interface</h1>
          <p className="text-muted-foreground">Document patient consultation and generate prescriptions</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Printer className="w-4 h-4 mr-2" />
            Print
          </Button>
          <Button onClick={handleSaveConsultation}>
            <Save className="w-4 h-4 mr-2" />
            Save
          </Button>
        </div>
      </div>

      <div className="grid lg:grid-cols-12 gap-6">
        {/* Patient Info Sidebar */}
        <div className="lg:col-span-4 space-y-4">
          {/* Patient Details */}
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Patient Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3 pb-4 border-b">
                <Avatar className="w-16 h-16">
                  <AvatarFallback className="bg-primary text-white text-lg">
                    {patient.name.split(" ").map(n => n[0]).join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-semibold text-lg">{patient.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    {patient.age} years • {patient.gender}
                  </p>
                </div>
              </div>

              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Blood Type</span>
                  <span className="font-medium">{patient.bloodType}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Last Visit</span>
                  <span className="font-medium">
                    {new Date(patient.lastVisit).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric"
                    })}
                  </span>
                </div>
              </div>

              {patient.allergies.length > 0 && (
                <div className="pt-3 border-t">
                  <div className="flex items-start gap-2 mb-2">
                    <AlertCircle className="w-4 h-4 text-destructive mt-0.5" />
                    <span className="text-sm font-medium text-destructive">Allergies</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {patient.allergies.map((allergy, index) => (
                      <Badge key={index} variant="destructive" className="text-xs">
                        {allergy}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              {patient.conditions.length > 0 && (
                <div className="pt-3 border-t">
                  <span className="text-sm font-medium mb-2 block">Current Conditions</span>
                  <div className="flex flex-wrap gap-2">
                    {patient.conditions.map((condition, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {condition}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Vitals */}
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Current Vitals</CardTitle>
              <CardDescription>Recorded today at 09:30 AM</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                <div className="flex items-center gap-2">
                  <Activity className="w-4 h-4 text-primary" />
                  <span className="text-sm">Blood Pressure</span>
                </div>
                <span className="font-semibold">{vitals.bloodPressure}</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                <div className="flex items-center gap-2">
                  <Heart className="w-4 h-4 text-destructive" />
                  <span className="text-sm">Heart Rate</span>
                </div>
                <span className="font-semibold">{vitals.heartRate} bpm</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                <div className="flex items-center gap-2">
                  <Thermometer className="w-4 h-4 text-secondary" />
                  <span className="text-sm">Temperature</span>
                </div>
                <span className="font-semibold">{vitals.temperature}</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                <div className="flex items-center gap-2">
                  <Weight className="w-4 h-4 text-primary" />
                  <span className="text-sm">Weight</span>
                </div>
                <span className="font-semibold">{vitals.weight}</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Consultation Area */}
        <div className="lg:col-span-8">
          <Card>
            <CardContent className="p-6">
              <Tabs defaultValue="consultation" className="space-y-6">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="consultation">
                    <ClipboardList className="w-4 h-4 mr-2" />
                    Consultation Notes
                  </TabsTrigger>
                  <TabsTrigger value="prescription">
                    <Pill className="w-4 h-4 mr-2" />
                    Prescription
                  </TabsTrigger>
                  <TabsTrigger value="history">
                    <FileText className="w-4 h-4 mr-2" />
                    History
                  </TabsTrigger>
                </TabsList>

                {/* Consultation Notes Tab */}
                <TabsContent value="consultation" className="space-y-6">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="chiefComplaint">Chief Complaint</Label>
                      <Input
                        id="chiefComplaint"
                        placeholder="Patient's main concern or reason for visit..."
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="symptoms">Symptoms</Label>
                      <Textarea
                        id="symptoms"
                        placeholder="Describe symptoms, onset, duration, severity..."
                        rows={4}
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="diagnosis">Diagnosis</Label>
                        <Input
                          id="diagnosis"
                          value={diagnosis}
                          onChange={(e) => setDiagnosis(e.target.value)}
                          placeholder="Primary diagnosis..."
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="icd">ICD-10 Code</Label>
                        <Input
                          id="icd"
                          placeholder="Diagnosis code..."
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="examination">Physical Examination</Label>
                      <Textarea
                        id="examination"
                        placeholder="Examination findings..."
                        rows={4}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="assessment">Assessment & Plan</Label>
                      <Textarea
                        id="assessment"
                        placeholder="Assessment and treatment plan..."
                        rows={4}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="notes">Additional Notes</Label>
                      <Textarea
                        id="notes"
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        placeholder="Any additional observations or instructions..."
                        rows={3}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="followUp">Follow-up</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select follow-up timeframe" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1week">1 Week</SelectItem>
                          <SelectItem value="2weeks">2 Weeks</SelectItem>
                          <SelectItem value="1month">1 Month</SelectItem>
                          <SelectItem value="3months">3 Months</SelectItem>
                          <SelectItem value="asneeded">As Needed</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </TabsContent>

                {/* Prescription Tab */}
                <TabsContent value="prescription" className="space-y-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold">Prescriptions</h3>
                    <Button onClick={addPrescription} variant="outline" size="sm">
                      <Pill className="w-4 h-4 mr-2" />
                      Add Medication
                    </Button>
                  </div>

                  {prescriptions.length === 0 ? (
                    <div className="text-center py-12 text-muted-foreground">
                      <Pill className="w-12 h-12 mx-auto mb-4 opacity-20" />
                      <p>No prescriptions added yet</p>
                      <Button onClick={addPrescription} variant="outline" size="sm" className="mt-4">
                        Add First Prescription
                      </Button>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {prescriptions.map((rx, index) => (
                        <Card key={rx.id} className="border-2">
                          <CardHeader>
                            <CardTitle className="text-base">Medication #{index + 1}</CardTitle>
                          </CardHeader>
                          <CardContent className="space-y-4">
                            <div className="grid md:grid-cols-2 gap-4">
                              <div className="space-y-2">
                                <Label>Medication Name</Label>
                                <Input placeholder="e.g., Lisinopril" />
                              </div>
                              <div className="space-y-2">
                                <Label>Dosage</Label>
                                <Input placeholder="e.g., 10mg" />
                              </div>
                            </div>
                            <div className="grid md:grid-cols-2 gap-4">
                              <div className="space-y-2">
                                <Label>Frequency</Label>
                                <Select>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select frequency" />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectItem value="once">Once daily</SelectItem>
                                    <SelectItem value="twice">Twice daily</SelectItem>
                                    <SelectItem value="three">Three times daily</SelectItem>
                                    <SelectItem value="four">Four times daily</SelectItem>
                                    <SelectItem value="asneeded">As needed</SelectItem>
                                  </SelectContent>
                                </Select>
                              </div>
                              <div className="space-y-2">
                                <Label>Duration</Label>
                                <Input placeholder="e.g., 30 days" />
                              </div>
                            </div>
                            <div className="space-y-2">
                              <Label>Instructions</Label>
                              <Textarea placeholder="Special instructions for taking this medication..." rows={2} />
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  )}

                  {prescriptions.length > 0 && (
                    <div className="flex gap-2 pt-4">
                      <Button onClick={handleGeneratePrescription} className="flex-1">
                        <Send className="w-4 h-4 mr-2" />
                        Generate & Send Prescription
                      </Button>
                      <Button variant="outline">
                        <Printer className="w-4 h-4 mr-2" />
                        Print
                      </Button>
                    </div>
                  )}
                </TabsContent>

                {/* History Tab */}
                <TabsContent value="history" className="space-y-4">
                  <div className="space-y-4">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-sm">Previous Consultation - Feb 10, 2026</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">
                          <strong>Diagnosis:</strong> Hypertension - Stage 1<br />
                          <strong>Treatment:</strong> Prescribed Lisinopril 10mg once daily. Patient advised to monitor blood pressure at home and maintain low-sodium diet. Follow-up in 1 month.
                        </p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-sm">Previous Consultation - Jan 15, 2026</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">
                          <strong>Diagnosis:</strong> Annual Physical Exam<br />
                          <strong>Treatment:</strong> All routine tests normal. Discussed lifestyle modifications for borderline blood pressure. Patient to return in 1 month for BP check.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
