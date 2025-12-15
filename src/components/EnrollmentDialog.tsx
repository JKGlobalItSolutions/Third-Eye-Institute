import { useState } from "react";
import { Button } from "@/components/ui/button";
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
  const [formData, setFormData] = useState({
    name: "",
    course: "",
    phone: "",
    email: "",
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Enrollment Request Submitted!",
      description: "We will contact you shortly. Thank you for your interest!",
    });
    setFormData({ name: "", course: "", phone: "", email: "" });
    setOpen(false);
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
          <div className="space-y-2">
            <Label htmlFor="name" className="text-foreground">Full Name</Label>
            <Input
              id="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              className="bg-muted border-border text-foreground placeholder:text-muted-foreground"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="course" className="text-foreground">Select Course</Label>
            <Select
              value={formData.course}
              onValueChange={(value) => setFormData({ ...formData, course: value })}
              required
            >
              <SelectTrigger className="bg-muted border-border text-foreground">
                <SelectValue placeholder="Choose a course" />
              </SelectTrigger>
              <SelectContent className="bg-card border-border">
                {courses.map((course) => (
                  <SelectItem key={course} value={course} className="text-foreground">
                    {course}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone" className="text-foreground">Phone Number</Label>
            <Input
              id="phone"
              type="tel"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              required
              className="bg-muted border-border text-foreground placeholder:text-muted-foreground"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email" className="text-foreground">Email Address</Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              className="bg-muted border-border text-foreground placeholder:text-muted-foreground"
            />
          </div>
          <Button type="submit" variant="gradient" className="w-full mt-6">
            Submit Enrollment
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EnrollmentDialog;
