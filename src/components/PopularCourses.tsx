import { Button } from "@/components/ui/button";
import { 
  Landmark, 
  FileText, 
  Train, 
  Building2, 
  Shield, 
  Briefcase,
  Clock,
  ArrowRight
} from "lucide-react";
import EnrollmentDialog from "@/components/EnrollmentDialog";
import CourseDetailsDialog from "@/components/CourseDetailsDialog";
import { Link } from "react-router-dom";

const courses = [
  {
    icon: Landmark,
    title: "Bank Exam Coaching",
    description: "IBPS PO, IBPS Clerk, SBI PO, SBI Clerk, RBI Grade B & more",
    duration: "6 Months",
  },
  {
    icon: FileText,
    title: "SSC Coaching",
    description: "SSC CGL, SSC CHSL, SSC MTS, SSC GD & all SSC exams",
    duration: "6 Months",
  },
  {
    icon: Train,
    title: "Railway Exam Coaching",
    description: "RRB NTPC, RRB Group D, RRB JE & Railway exams",
    duration: "4 Months",
  },
  {
    icon: Building2,
    title: "UPSC Coaching",
    description: "Civil Services, IAS, IPS, IFS preliminary & mains",
    duration: "1 Year",
  },
  {
    icon: Shield,
    title: "Police & Defence",
    description: "TNPSC, Police SI, Constable, NDA, CDS exams",
    duration: "6 Months",
  },
  {
    icon: Briefcase,
    title: "Insurance Exams",
    description: "LIC AAO, LIC ADO, NIACL, UIIC & insurance sector",
    duration: "3 Months",
  },
];

const PopularCourses = () => {
  return (
    <section className="relative py-24 bg-card overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      
      <div className="relative container mx-auto px-6">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold text-primary bg-primary/10 rounded-full px-4 py-1.5 mb-4">
            Our Programs
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Popular <span className="text-gradient">Courses</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Comprehensive coaching programs designed to help you succeed in your dream government job
          </p>
        </div>

        {/* Course grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div
              key={index}
              className="group relative bg-card rounded-3xl p-8 shadow-card hover:shadow-hover transition-all duration-500 hover:-translate-y-2 border border-border/50"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon container */}
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300">
                <course.icon className="w-8 h-8 text-primary-foreground" />
              </div>

              {/* Duration badge */}
              <div className="absolute top-6 right-6 inline-flex items-center gap-1.5 bg-muted rounded-full px-3 py-1">
                <Clock className="w-3.5 h-3.5 text-muted-foreground" />
                <span className="text-xs font-medium text-muted-foreground">{course.duration}</span>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                {course.title}
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {course.description}
              </p>

              {/* Buttons */}
              <div className="flex items-center gap-3">
                <EnrollmentDialog>
                  <Button variant="gradient" size="sm" className="flex-1">
                    Register Now
                  </Button>
                </EnrollmentDialog>
                <CourseDetailsDialog courseTitle={course.title}>
                  <Button variant="outline" size="sm" className="group/btn">
                    Details
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </CourseDetailsDialog>
              </div>

              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/0 to-secondary/0 group-hover:from-primary/5 group-hover:to-secondary/5 transition-all duration-500 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* View all button */}
        <div className="text-center mt-12">
          <Link to="/courses">
            <Button variant="glass" size="lg">
              View All Courses
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PopularCourses;
