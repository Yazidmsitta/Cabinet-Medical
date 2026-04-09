"use client";

import { useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { ArrowLeft, CreditCard, Lock } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { RadioGroup, RadioGroupItem } from "../components/ui/radio-group";
import { Separator } from "../components/ui/separator";
import { motion } from "motion/react";
import { toast } from "sonner";

export function PayInvoice() {
  const router = useRouter();
  const params = useParams<{ id: string }>();
  const id = params?.id;
  const [paymentMethod, setPaymentMethod] = useState("card");

  const invoice = {
    id: id,
    description: "Follow-up Appointment",
    doctor: "Dr. Sarah Smith",
    date: "March 15, 2026",
    amount: 120,
    items: [
      { description: "Consultation Fee", amount: 100 },
      { description: "Administrative Fee", amount: 20 },
    ],
  };

  const handlePayment = () => {
    toast.success("Payment processed successfully!");
    setTimeout(() => router.push("/payments"), 1500);
  };

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <Button variant="ghost" onClick={() => router.push("/payments")} className="mb-4">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Payments
        </Button>
        <h1 className="text-3xl font-bold mb-2">Pay Invoice</h1>
        <p className="text-muted-foreground">Complete your payment securely</p>
      </motion.div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            <Card>
              <CardHeader>
                <CardTitle>Payment Method</CardTitle>
                <CardDescription>Select how you'd like to pay</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                  <div className={`flex items-center gap-4 p-4 border-2 rounded-lg cursor-pointer ${
                    paymentMethod === "card" ? "border-primary bg-primary/5" : "border-border"
                  }`} onClick={() => setPaymentMethod("card")}>
                    <RadioGroupItem value="card" id="card" />
                    <div className="flex-1">
                      <Label htmlFor="card" className="cursor-pointer flex items-center gap-2">
                        <CreditCard className="h-5 w-5" />
                        Credit/Debit Card
                      </Label>
                    </div>
                  </div>

                  <div className={`flex items-center gap-4 p-4 border-2 rounded-lg cursor-pointer ${
                    paymentMethod === "saved" ? "border-primary bg-primary/5" : "border-border"
                  }`} onClick={() => setPaymentMethod("saved")}>
                    <RadioGroupItem value="saved" id="saved" />
                    <div className="flex-1">
                      <Label htmlFor="saved" className="cursor-pointer">
                        Saved Card ending in 4242
                      </Label>
                    </div>
                  </div>
                </RadioGroup>

                {paymentMethod === "card" && (
                  <div className="space-y-4 pt-4">
                    <div className="space-y-2">
                      <Label htmlFor="card-number">Card Number</Label>
                      <Input id="card-number" placeholder="1234 5678 9012 3456" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="expiry">Expiry Date</Label>
                        <Input id="expiry" placeholder="MM/YY" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="cvv">CVV</Label>
                        <Input id="cvv" placeholder="123" type="password" maxLength={3} />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="name">Cardholder Name</Label>
                      <Input id="name" placeholder="John Doe" />
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            <div className="flex items-center gap-2 p-4 bg-muted/50 rounded-lg">
              <Lock className="h-5 w-5 text-primary" />
              <p className="text-sm text-muted-foreground">
                Your payment information is encrypted and secure
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
          <Card>
            <CardHeader>
              <CardTitle>Invoice Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="font-semibold mb-1">{invoice.description}</p>
                <p className="text-sm text-muted-foreground">{invoice.doctor}</p>
                <p className="text-sm text-muted-foreground">{invoice.date}</p>
              </div>

              <Separator />

              <div className="space-y-2">
                {invoice.items.map((item, index) => (
                  <div key={index} className="flex justify-between text-sm">
                    <span className="text-muted-foreground">{item.description}</span>
                    <span className="font-medium">${item.amount}</span>
                  </div>
                ))}
              </div>

              <Separator />

              <div className="flex justify-between items-center">
                <span className="font-semibold">Total</span>
                <span className="text-2xl font-bold">${invoice.amount}</span>
              </div>

              <Button className="w-full" size="lg" onClick={handlePayment}>
                Pay ${invoice.amount}
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
