import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import EnrollmentDialog from "@/components/EnrollmentDialog";
import CourseDetailsDialog from "@/components/CourseDetailsDialog";
import { 
  Banknote, 
  GraduationCap, 
  TrainFront, 
  ScrollText, 
  Swords, 
  ShieldCheck,
  Clock,
  Users,
  CheckCircle,
  Sparkles
} from "lucide-react";

const courses = [
  {
    icon: Banknote,
    title: "Bank Exam Coaching",
    description: "Comprehensive preparation for IBPS PO/Clerk, SBI PO/Clerk, RBI Grade B, and other banking exams.",
    duration: "6 Months",
    features: ["Quantitative Aptitude", "Reasoning", "English", "Banking Awareness", "Computer Knowledge"],
  },
  {
    icon: GraduationCap,
    title: "SSC Coaching",
    description: "Complete guidance for SSC CGL, CHSL, MTS, Stenographer, and other SSC examinations.",
    duration: "6 Months",
    features: ["General Intelligence", "English", "Quantitative Aptitude", "General Awareness"],
  },
  {
    icon: TrainFront,
    title: "Railway Exam Coaching",
    description: "Expert coaching for RRB NTPC, Group D, ALP, JE, and other railway recruitment exams.",
    duration: "4 Months",
    features: ["Mathematics", "General Intelligence", "General Science", "General Awareness"],
  },
  {
    icon: ScrollText,
    title: "UPSC Coaching",
    description: "Structured preparation for UPSC Civil Services Prelims and Mains examination.",
    duration: "1 Year",
    features: ["General Studies", "CSAT", "Optional Subjects", "Essay Writing", "Interview Prep"],
  },
  {
    icon: Swords,
    title: "Police & Defence Coaching",
    description: "Training for TNUSRB, Army, Navy, Air Force, and paramilitary forces recruitment.",
    duration: "4 Months",
    features: ["Written Exam Prep", "Physical Training", "Medical Guidance", "Interview Tips"],
  },
  {
    icon: ShieldCheck,
    title: "Insurance Exam Coaching",
    description: "Preparation for LIC AAO, NIACL AO, UIIC AO, and other insurance sector exams.",
    duration: "5 Months",
    features: ["Reasoning", "English", "Quantitative Aptitude", "Insurance Awareness"],
  },
];

const Courses = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 -left-20 w-72 h-72 bg-secondary/10 rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-6 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our <span className="text-gradient">Courses</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Comprehensive coaching programs designed to help you crack competitive exams with confidence
            </p>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <div
                key={index}
                className="glass-card rounded-3xl p-8 hover:shadow-hover transition-all duration-300 hover:-translate-y-2 group"
              >
                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                  <course.icon className="w-8 h-8 text-primary-foreground" />
                </div>

                {/* Duration Badge */}
                <div className="inline-flex items-center gap-2 bg-muted rounded-full px-3 py-1 mb-4">
                  <Clock className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-foreground">{course.duration}</span>
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-bold text-foreground mb-3">{course.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{course.description}</p>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {course.features.slice(0, 3).map((feature, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-3">
                  <EnrollmentDialog>
                    <Button variant="gradient" className="flex-1">Register Now</Button>
                  </EnrollmentDialog>
                  <CourseDetailsDialog courseTitle={course.title}>
                    <Button variant="outline" className="flex-1 group-hover:border-primary">
                      <Sparkles className="w-4 h-4 mr-1" />
                      Details
                    </Button>
                  </CourseDetailsDialog>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Why Choose Our Courses?</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { icon: Users, title: "Expert Faculty", desc: "Learn from experienced educators with proven track records" },
              { icon: GraduationCap, title: "Study Materials", desc: "Comprehensive notes and practice papers provided" },
              { icon: CheckCircle, title: "Mock Tests", desc: "Regular assessments to track your progress" },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-14 h-14 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Courses;
