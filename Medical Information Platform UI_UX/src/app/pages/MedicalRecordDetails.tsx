"use client";

import { useRouter, useParams } from "next/navigation";
import { ArrowLeft, Download, Share, FileText, Calendar, User } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Separator } from "../components/ui/separator";
import { motion } from "motion/react";

export function MedicalRecordDetails() {
  const router = useRouter();
  const params = useParams<{ id: string }>();
  const id = params?.id;

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <Button variant="ghost" onClick={() => router.push("/medical-records")} className="mb-4">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Records
        </Button>
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">Cardiology Consultation</h1>
          <div className="flex gap-2">
            <Button variant="outline">
              <Share className="mr-2 h-4 w-4" />
              Share
            </Button>
            <Button>
              <Download className="mr-2 h-4 w-4" />
              Download PDF
            </Button>
          </div>
        </div>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <FileText className="h-8 w-8 text-primary" />
                <div>
                  <CardTitle>Consultation Notes</CardTitle>
                  <p className="text-sm text-muted-foreground">Cardiology Department</p>
                </div>
              </div>
              <Badge>Cardiology</Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Date</p>
                  <p className="font-medium">March 5, 2026</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <User className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Doctor</p>
                  <p className="font-medium">Dr. Sarah Smith</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Type</p>
                  <p className="font-medium">Consultation Notes</p>
                </div>
              </div>
            </div>

            <Separator />

            <div>
              <h3 className="font-semibold mb-3">Chief Complaint</h3>
              <p className="text-muted-foreground">Patient reports occasional chest discomfort and shortness of breath during physical activity.</p>
            </div>

            <Separator />

            <div>
              <h3 className="font-semibold mb-3">Examination Findings</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Blood Pressure: 128/82 mmHg</li>
                <li>• Heart Rate: 72 bpm (regular rhythm)</li>
                <li>• Respiratory Rate: 16 breaths/min</li>
                <li>• O2 Saturation: 98% on room air</li>
                <li>• Heart sounds: Normal S1, S2, no murmurs</li>
                <li>• Lungs: Clear to auscultation bilaterally</li>
              </ul>
            </div>

            <Separator />

            <div>
              <h3 className="font-semibold mb-3">Diagnosis</h3>
              <p className="text-muted-foreground">Mild hypertension with episodes of exertional dyspnea. ECG shows normal sinus rhythm with no acute changes.</p>
            </div>

            <Separator />

            <div>
              <h3 className="font-semibold mb-3">Treatment Plan</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Start Lisinopril 10mg once daily</li>
                <li>• Continue Atorvastatin 20mg at bedtime</li>
                <li>• Lifestyle modifications: low-sodium diet, regular exercise</li>
                <li>• Follow-up in 4 weeks for blood pressure monitoring</li>
                <li>• Stress test scheduled for March 22, 2026</li>
              </ul>
            </div>

            <Separator />

            <div>
              <h3 className="font-semibold mb-3">Patient Instructions</h3>
              <p className="text-muted-foreground">Monitor blood pressure daily. Report any severe chest pain, shortness of breath, or dizziness immediately. Maintain medication compliance and attend all follow-up appointments.</p>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
