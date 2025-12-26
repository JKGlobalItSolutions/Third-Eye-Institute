import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button";
import { EMAILJS_CONFIG } from "@/config/config";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

interface EnrollmentDialogProps {
  children: React.ReactNode;
}

const courses = [
  "Bank Exam Coaching",
  "SSC Coaching",
  "Railway Exam Coaching",
  "UPSC Coaching",
  "Police & Defence Coaching",
  "Insurance Exam Coaching",
  "TNPSC Coaching",
];

const EnrollmentDialog = ({ children }: EnrollmentDialogProps) => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    course: "",
    phone: "",
    email: "",
  });

  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    emailjs
  .send(
    EMAILJS_CONFIG.SERVICE_ID,
    EMAILJS_CONFIG.TEMPLATE_ID,
    {
      name: formData.name,
      course: formData.course,
      phone: formData.phone,
      email: formData.email,
    },
    EMAILJS_CONFIG.PUBLIC_KEY
  )
  .then(() => {
    toast({
      title: "Enrollment Submitted!",
      description: "We will contact you shortly.",
    });

    setFormData({
      name: "",
      course: "",
      phone: "",
      email: "",
    });

    setOpen(false);
  })
  .catch((error) => {
    console.error("EmailJS Error:", error);
    toast({
      title: "Submission Failed",
      description: "Please try again later.",
      variant: "destructive",
    });
  })
  .finally(() => {
    setLoading(false);
  });

  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>

      <DialogContent className="sm:max-w-md bg-card border-border">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-foreground">
            Enroll Now
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Fill in your details and we'll get back to you shortly.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          {/* Name */}
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <Input
              id="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              required
            />
          </div>

          {/* Course */}
          <div className="space-y-2">
            <Label>Select Course</Label>
            <Select
              value={formData.course}
              onValueChange={(value) =>
                setFormData({ ...formData, course: value })
              }
              required
            >
              <SelectTrigger>
                <SelectValue placeholder="Choose a course" />
              </SelectTrigger>
              <SelectContent>
                {courses.map((course) => (
                  <SelectItem key={course} value={course}>
                    {course}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Phone */}
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              type="tel"
              placeholder="Enter phone number"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
              required
            />
          </div>

          {/* Email */}
          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              required
            />
          </div>

          {/* Submit */}
          <Button
            type="submit"
            className="w-full mt-6"
            disabled={loading}
          >
            {loading ? "Sending..." : "Submit Enrollment"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EnrollmentDialog;
