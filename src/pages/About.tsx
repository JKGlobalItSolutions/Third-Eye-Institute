import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Target, Eye, Heart, Award, Users, BookOpen } from "lucide-react";

const About = () => {
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
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              About <span className="text-gradient">Third Eye TNPSC Academy</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              A Gateway to Government Jobs - Empowering thousands of aspirants since 2011
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Our Story</h2>
            <div className="glass-card rounded-3xl p-8 md:p-12">
              <p className="text-muted-foreground leading-relaxed mb-6">
                  Third Eye TNPSC Academy, established in 2011, has been a beacon of hope for thousands of aspirants 
                dreaming of securing government jobs. Located in the heart of Thiruvannamalai, we have grown from a small 
                coaching center to one of the most trusted institutions for competitive exam preparation in Tamil Nadu.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our name "Third Eye Academy" symbolizes the clarity of vision and wisdom we aim to instill in our students. 
                We believe that with the right guidance, dedication, and hard work, every student can achieve their 
                dream of securing a government job.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Over the years, we have successfully trained more than 10,000 students, with a remarkable 95% success rate. 
                Our alumni are now serving in various government departments including banks, railways, SSC, and defense services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision, Mission, Motive */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Vision */}
            <div className="glass-card rounded-3xl p-8 text-center hover:shadow-hover transition-all duration-300">
              <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Eye className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be the premier institution for competitive exam preparation, nurturing talents and creating 
                a generation of successful government servants who contribute positively to nation-building.
              </p>
            </div>

            {/* Mission */}
            <div className="glass-card rounded-3xl p-8 text-center hover:shadow-hover transition-all duration-300">
              <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To provide quality education, comprehensive study materials, and personalized coaching that 
                empowers students from all backgrounds to crack competitive exams and achieve their career goals.
              </p>
            </div>

            {/* Motive */}
            <div className="glass-card rounded-3xl p-8 text-center hover:shadow-hover transition-all duration-300">
              <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Motive</h3>
              <p className="text-muted-foreground leading-relaxed">
                To make quality competitive exam coaching accessible and affordable, ensuring that financial 
                constraints never stand in the way of a student's dream of securing a government job.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Our Achievements</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { icon: Users, value: "10,000+", label: "Students Trained" },
              { icon: Award, value: "95%", label: "Success Rate" },
              { icon: BookOpen, value: "50+", label: "Expert Faculty" },
              { icon: Target, value: "15+", label: "Years Experience" },
            ].map((stat, index) => (
              <div key={index} className="glass-card rounded-3xl p-6 text-center shadow-soft">
                <stat.icon className="w-10 h-10 text-primary mx-auto mb-4" />
                <div className="text-3xl font-bold text-foreground">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
