import { Star, Quote } from "lucide-react";
import ellipse1 from "@/assets/ellipse1.png";
import ellipse2 from "@/assets/ellipse2.png";
import ellipse3 from "@/assets/ellipse3.png";
import ellipse4 from "@/assets/ellipse4.png";
import ellipse15 from "@/assets/ellipse15.png";
import ellipse8 from "@/assets/ellipse8.png";

const testimonials = [
  {
    name: "A.S.Jagannathan SBI Clerk",
    achievement: "Cleared SBI Clerk",
    image: ellipse1,
    rating: 5,
    quote: "Third Eye Institute transformed my preparation journey. The faculty's guidance and systematic approach helped me crack IBPS PO in my first attempt!",
  },
  {
    name: "M Rajesh",
    achievement: "Cleared Canada Bank Po",
    image: ellipse2,
    rating: 5,
    quote: "The mock tests and doubt clearing sessions were game-changers. I'm grateful for the personalized attention I received throughout my preparation.",
  },
  {
    name: "P Murugan ",
    achievement: "Cleared Police",
    image: ellipse3,
    rating: 5,
    quote: "From basic concepts to advanced problem-solving, the institute covered everything. Their study materials are comprehensive and exam-focused.",
  },
  {
    name: "B.Lavanya",
    achievement: "Cleared HRS Bank Clerk",
    image: ellipse4,
    rating: 5,
    quote: "The faculty's experience in banking exams is unmatched. Their tips and strategies for RBI Grade B interview were invaluable.",
  },
  {
    name: "R.Rajesh Kannan",
    achievement: "Cleared TNPSC Group-2 Education department",
    image: ellipse15,
    rating: 5,
    quote: "Best coaching institute in Thiruvannamalai! The current affairs classes and group discussions boosted my confidence tremendously.",
  },
  {
    name: "S Usha",
    achievement: "Cleared TNPSC VAO",
    image: ellipse8 ,
    rating: 5,
    quote: "Affordable fees with quality education. The weekend batches helped me prepare while working. Highly recommended!",
  },
];

const Testimonials = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-hero" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="relative container mx-auto px-6">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold text-primary bg-primary/10 rounded-full px-4 py-1.5 mb-4">
            Success Stories
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            What Our <span className="text-gradient">Students Say</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Hear from our successful students who achieved their dreams with our guidance
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative glass-card rounded-3xl p-8 shadow-card hover:shadow-hover transition-all duration-500 hover:-translate-y-2"
            >
              {/* Quote icon */}
              <div className="absolute -top-4 -right-4 w-12 h-12 gradient-primary rounded-2xl flex items-center justify-center shadow-lg opacity-80">
                <Quote className="w-6 h-6 text-primary-foreground" />
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-foreground/80 leading-relaxed mb-6 italic">
                "{testimonial.quote}"
              </p>

              {/* Profile */}
              <div className="flex items-center gap-4">
                <div className="relative">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover ring-4 ring-primary/20 group-hover:ring-primary/40 transition-all"
                  />
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-card" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-primary font-medium">{testimonial.achievement}</p>
                </div>
              </div>

              {/* Hover glow */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/0 via-transparent to-secondary/0 group-hover:from-primary/5 group-hover:to-secondary/5 transition-all duration-500 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-6">Trusted by students across Tamil Nadu</p>
          <div className="flex flex-wrap items-center justify-center gap-8">
            {["⭐ 4.9 Rating", "🎓 10,000+ Alumni", "📚 95% Success Rate", "🏆 15+ Years Legacy"].map((badge, i) => (
              <div key={i} className="glass-card rounded-full px-6 py-2 text-sm font-medium text-foreground">
                {badge}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
