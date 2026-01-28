"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  country: string;
  message: string;
  terms: boolean;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    firstName: "",
    lastName: "",
    email: "",
    country: "",
    message: "",
    terms: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (checked: boolean) => {
    setFormData((prev) => ({ ...prev, terms: checked }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    // Add your submission logic here
  };

  return (
    <div className="w-72 md:w-full">
      <Card className="ring-0 p-8 gap-6 md:gap-8 border rounded-2xl animate-in fade-in slide-in-from-right-10 duration-1000 delay-100 ease-in-out fill-mode-both">
        <CardHeader className="p-0">
          <CardTitle className="text-2xl font-semibold text-primary">
            Start the project
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-6">
                {/* form inputs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-4">
                  <div>
                    <Input
                      id="firstName"
                      name="firstName"
                      placeholder="First name"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="dark:bg-background"
                      required
                    />
                  </div>
                  <div>
                    <Input
                      id="lastName"
                      name="lastName"
                      placeholder="Last name"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="dark:bg-background"
                      required
                    />
                  </div>
                </div>

                <div>
                  <Input
                    id="email"
                    name="email"
                    placeholder="youremail@website.com"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="dark:bg-background"
                    required
                  />
                </div>

                <div>
                  <Select
                    value={formData.country}
                    onValueChange={(value) =>
                      setFormData((prev) => ({ ...prev, country: value ?? "" }))
                    }
                  >
                    <SelectTrigger id="country" className="w-full h-9 dark:bg-background">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="United States">
                        United States
                      </SelectItem>
                      <SelectItem value="United Kingdom">
                        United Kingdom
                      </SelectItem>
                      <SelectItem value="Canada">Canada</SelectItem>
                      <SelectItem value="Australia">Australia</SelectItem>
                      <SelectItem value="Germany">Germany</SelectItem>
                      <SelectItem value="France">France</SelectItem>
                      <SelectItem value="India">India</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Let us know about your project"
                    value={formData.message}
                    onChange={handleChange}
                    className="h-20 resize-none dark:bg-background"
                    required
                  />
                </div>

                <div className="flex items-center gap-3">
                  <Checkbox
                    id="terms"
                    checked={formData.terms}
                    onCheckedChange={handleCheckboxChange}
                    required
                  />
                  <Label
                    htmlFor="terms"
                    className="text-sm font-normal text-primary select-none"
                  >
                    I have read and acknowledge the Terms and Conditions
                  </Label>
                </div>
              </div>
              {/* submit button */}
              <Button
                type="submit"
                size="lg"
                className="rounded-xl bg-blue-500 text-white"
              >
                Submit Inquiry
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default ContactForm;
