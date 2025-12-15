import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { CheckCircle, BookOpen, Users, Trophy, Clock, Target } from "lucide-react";
import EnrollmentDialog from "@/components/EnrollmentDialog";

interface CourseDetailsDialogProps {
  children: React.ReactNode;
  courseTitle: string;
}

const CourseDetailsDialog = ({ children, courseTitle }: CourseDetailsDialogProps) => {
  const courseData: Record<string, { duration: string }> = {
    "Bank Exam Coaching": { duration: "6 Months" },
    "SSC Coaching": { duration: "6 Months" },
    "Railway Exam Coaching": { duration: "4 Months" },
    "UPSC Coaching": { duration: "1 Year" },
    "Police & Defence Coaching": { duration: "4 Months" },
    "Insurance Exam Coaching": { duration: "5 Months" },
  };
  
  const duration = courseData[courseTitle]?.duration || "6 Months";
  const courseDetails = {
    "Bank Exam Coaching": {
      overview: "Comprehensive coaching for all major banking exams including IBPS PO, IBPS Clerk, SBI PO, SBI Clerk, RBI Grade B, and more. Our structured program covers all subjects with expert faculty guidance.",
      syllabus: ["Quantitative Aptitude", "Reasoning Ability", "English Language", "General Awareness", "Computer Knowledge", "Banking Awareness"],
      howToCrack: [
        "Master the basics of Mathematics and Reasoning",
        "Read newspapers daily for current affairs",
        "Practice mock tests regularly",
        "Focus on time management",
        "Revise previous year questions",
        "Join our doubt clearing sessions"
      ],
    },
    "SSC Coaching": {
      overview: "Expert preparation for SSC CGL, SSC CHSL, SSC MTS, SSC GD, and other Staff Selection Commission exams. Our proven methodology has helped thousands achieve their goals.",
      syllabus: ["General Intelligence & Reasoning", "General Awareness", "Quantitative Aptitude", "English Comprehension", "GK & Current Affairs"],
      howToCrack: [
        "Build strong foundation in Mathematics",
        "Practice reasoning questions daily",
        "Improve English vocabulary and grammar",
        "Stay updated with current affairs",
        "Attempt full-length mock tests weekly",
        "Analyze your weak areas and improve"
      ],
    },
    "Railway Exam Coaching": {
      overview: "Specialized coaching for RRB NTPC, RRB Group D, RRB JE, and all Railway Recruitment Board examinations. Learn from the best faculty with proven track records.",
      syllabus: ["Mathematics", "General Intelligence & Reasoning", "General Science", "General Awareness", "Current Affairs"],
      howToCrack: [
        "Focus on General Science basics",
        "Practice mental calculations",
        "Stay updated with Railway-related news",
        "Solve previous year papers",
        "Improve speed and accuracy",
        "Attend our special Railway awareness classes"
      ],
    },
    "UPSC Coaching": {
      overview: "Comprehensive preparation for Civil Services examination covering Preliminary, Mains, and Interview stages. Our experienced faculty guide you through every step.",
      syllabus: ["General Studies I, II, III, IV", "Indian Polity", "Economy", "History", "Geography", "Ethics", "Essay Writing", "Optional Subject"],
      howToCrack: [
        "Read NCERT books thoroughly",
        "Follow standard reference books",
        "Make notes for revision",
        "Practice answer writing daily",
        "Stay updated with current affairs",
        "Join our discussion groups"
      ],
    },
    "Police & Defence Coaching": {
      overview: "Focused preparation for TNPSC, Police SI, Constable, NDA, CDS, and all defence-related examinations. Physical training guidance also provided.",
      syllabus: ["General Tamil/English", "Current Affairs", "General Knowledge", "Aptitude & Reasoning", "Constitution of India", "History & Geography"],
      howToCrack: [
        "Master Tamil Nadu history and culture",
        "Practice aptitude questions regularly",
        "Stay physically fit",
        "Read The Hindu newspaper daily",
        "Solve TNPSC previous papers",
        "Attend our mock interview sessions"
      ],
    },
    "Insurance Exam Coaching": {
      overview: "Specialized coaching for LIC AAO, LIC ADO, NIACL, UIIC, and other insurance sector examinations. Learn insurance-specific knowledge from industry experts.",
      syllabus: ["Quantitative Aptitude", "Reasoning", "English Language", "General Awareness", "Insurance Awareness", "Computer Knowledge"],
      howToCrack: [
        "Understand insurance industry basics",
        "Practice numerical ability questions",
        "Learn insurance terminologies",
        "Stay updated with insurance sector news",
        "Attempt sectional tests regularly",
        "Focus on interview preparation"
      ],
    },
  };

  const details = courseDetails[courseTitle as keyof typeof courseDetails] || courseDetails["Bank Exam Coaching"];

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-card border-border">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-foreground flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-primary" />
            {courseTitle}
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6 py-4">
          {/* Duration Badge */}
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-muted-foreground">Duration: {duration}</span>
          </div>

          {/* Course Overview */}
          <div className="glass-card rounded-2xl p-5">
            <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
              <Target className="w-5 h-5 text-primary" />
              Course Overview
            </h3>
            <p className="text-muted-foreground leading-relaxed">{details.overview}</p>
          </div>

          {/* Syllabus */}
          <div className="glass-card rounded-2xl p-5">
            <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-primary" />
              Syllabus Covered
            </h3>
            <div className="grid grid-cols-2 gap-2">
              {details.syllabus.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* How to Crack */}
          <div className="glass-card rounded-2xl p-5">
            <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
              <Trophy className="w-5 h-5 text-primary" />
              How to Crack This Exam
            </h3>
            <ul className="space-y-2">
              {details.howToCrack.map((tip, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="w-5 h-5 rounded-full bg-primary/20 text-primary text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                    {index + 1}
                  </span>
                  <span className="text-sm text-muted-foreground">{tip}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Why Choose Third Eye */}
          <div className="glass-card rounded-2xl p-5 bg-gradient-to-br from-primary/10 to-secondary/10">
            <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
              <Users className="w-5 h-5 text-primary" />
              Why Choose Third Eye TNPSC Academy?
            </h3>
            <div className="grid gap-3">
              {[
                "14+ years of experience in coaching",
                "Expert faculty with proven track records",
                "Comprehensive study materials provided",
                "Regular mock tests and assessments",
                "Personal attention and doubt clearing",
                "Affordable fee structure",
                "10,000+ successful students",
                "Located conveniently in Vellore"
              ].map((reason, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="text-sm text-foreground">{reason}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-4">
            <EnrollmentDialog>
              <Button variant="gradient" size="lg" className="w-full">
                Enroll in {courseTitle}
              </Button>
            </EnrollmentDialog>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CourseDetailsDialog;
