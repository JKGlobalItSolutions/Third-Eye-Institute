import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ellipse1 from "@/assets/ellipse1.png";
import ellipse2 from "@/assets/ellipse2.png";
import ellipse3 from "@/assets/ellipse3.png";
import ellipse4 from "@/assets/ellipse4.png";
import ellipse5 from "@/assets/ellipse5.png";
import ellipse6 from "@/assets/ellipse6.png";
import ellipse7 from "@/assets/ellipse7.png";
import ellipse8 from "@/assets/ellipse8.png";
import ellipse9 from "@/assets/ellipse9.png";
import ellipse10 from "@/assets/ellipse10.png";
import ellipse11 from "@/assets/ellipse11.png";
import ellipse12 from "@/assets/ellipse12.png";
import ellipse13 from "@/assets/ellipse13.png";
import ellipse14 from "@/assets/ellipse14.png";
import ellipse15 from "@/assets/ellipse15.png";
import ellipse16 from "@/assets/ellipse16.png";

import { Trophy, Star, Award, TrendingUp } from "lucide-react";

const achievers = [
  { name: "B. Lavanya", exam: "hrs Bank clerk", image: ellipse4 },
  { name: "M. Rajesh", exam: "Canara Bank PO", image: ellipse2 },
  { name: "P.Murugan", exam: "Police", image: ellipse3 },
  { name: "A.S. Jagannathan", exam: "SBI Clerk", image: ellipse1 },
  { name: "K. Asha Rani", exam: "Indian Bank Clerk", image: ellipse7 },
  { name: "S. Parthiban", exam: "Sub Inspector", image: ellipse6 },
  { name: "R. Divya", exam: "Union Bank Clerk", image: ellipse5 },
  { name: "K. Nirosha", exam: "KVB Bank PO", image: ellipse11 },
  { name: "N. Bhuvanesh", exam: "Canara Bank PO", image: ellipse10 },
  { name: "R. Amal", exam: "IOB Bank Clerk", image: ellipse9 },
  { name: "S. Usha", exam: "TNPSC VAO", image: ellipse8 },
  { name: "R. Rajesh Kannan", exam: "TNPSC Gr-2 Education Dept", image: ellipse15 },
  { name: "R. Nithiyanantham", exam: "SBI PO", image: ellipse13 },
  { name: "L. Ramya", exam: "TNPSC Typist", image: ellipse12 },
  { name: "S. Venket", exam: "IB Officer", image: ellipse15 },
  { name: "A. Priya", exam: "TNPSC Gr-4", image: ellipse16 },
  { name: "K. Manikandan", exam: "TNPSC Revenue Dept", image: ellipse14 },
];

const yearlyResults = [
  { year: "2024", selected: 520, total: 550 },
  { year: "2023", selected: 450, total: 480 },
  { year: "2022", selected: 420, total: 450 },
  { year: "2021", selected: 380, total: 410 },
];

const Achievements = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 -left-20 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-6 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our <span className="text-gradient">Achievements</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Celebrating the success of our TNPSC achievers who made us proud
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Trophy, value: "10,000+", label: "Selections" },
              { icon: Star, value: "95%", label: "Success Rate" },
              { icon: Award, value: "500+", label: "Top Ranks" },
              { icon: TrendingUp, value: "14+", label: "Years" },
            ].map((stat, index) => (
              <div key={index} className="glass-card rounded-3xl p-6 text-center">
                <stat.icon className="w-10 h-10 text-primary mx-auto mb-4" />
                <div className="text-3xl font-bold text-foreground">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Achievers */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-foreground mb-4 text-center">Our Top TNPSC Achievers</h2>
          <p className="text-muted-foreground text-center mb-12">Meet our star students who cracked TNPSC exams with flying colors</p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {achievers.map((achiever, index) => (
              <div
                key={index}
                className="glass-card rounded-3xl p-6 text-center hover:shadow-hover transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative inline-block mb-4">
                  <img
                    src={achiever.image}
                    alt={achiever.name}
                    className="w-20 h-20 rounded-full mx-auto object-cover border-4 border-primary/20"
                  />
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                    <Trophy className="w-4 h-4 text-primary-foreground" />
                  </div>
                </div>
                <h3 className="font-semibold text-foreground">{achiever.name}</h3>
                <p className="text-sm text-primary font-medium mt-1">{achiever.exam}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Yearly Results */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Year-wise Success Rate</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {yearlyResults.map((result, index) => (
              <div key={index} className="glass-card rounded-2xl p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-bold text-foreground text-lg">{result.year}</span>
                  <span className="text-primary font-semibold">
                    {result.selected} / {result.total} Selected
                  </span>
                </div>
                <div className="w-full bg-muted rounded-full h-3">
                  <div
                    className="gradient-primary h-3 rounded-full transition-all duration-500"
                    style={{ width: `${(result.selected / result.total) * 100}%` }}
                  />
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  {Math.round((result.selected / result.total) * 100)}% Success Rate
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Achievements;
