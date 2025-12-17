import { useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  MapPin, 
  Phone, 
  Mail, 
  User,
  MessageSquare,
  Send,
  Clock,
  Navigation
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactUs = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="relative py-24 overflow-hidden bg-card">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="relative container mx-auto px-6">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold text-primary bg-primary/10 rounded-full px-4 py-1.5 mb-4">
            Get In Touch
          </span>
          {/* <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Contact <span className="text-gradient">Us</span>
          </h2> */}
          <p className="text-lg text-muted-foreground">
            Have questions? We're here to help you start your journey to success
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <div className="glass-card rounded-3xl p-8 md:p-10 shadow-card">
            <h3 className="text-2xl font-bold text-foreground mb-6">Send us a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name field */}
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="w-full pl-12 pr-4 py-4 rounded-2xl border border-border bg-background/50 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-foreground placeholder:text-muted-foreground"
                />
              </div>

              {/* Email field */}
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  required
                  className="w-full pl-12 pr-4 py-4 rounded-2xl border border-border bg-background/50 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-foreground placeholder:text-muted-foreground"
                />
              </div>

              {/* Phone field */}
              <div className="relative">
                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  required
                  className="w-full pl-12 pr-4 py-4 rounded-2xl border border-border bg-background/50 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-foreground placeholder:text-muted-foreground"
                />
              </div>

              {/* Message field */}
              <div className="relative">
                <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-muted-foreground" />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  rows={4}
                  required
                  className="w-full pl-12 pr-4 py-4 rounded-2xl border border-border bg-background/50 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none text-foreground placeholder:text-muted-foreground"
                />
              </div>

              <Button type="submit" variant="gradient" size="xl" className="w-full">
                Send Message
                <Send className="w-5 h-5 ml-2" />
              </Button>
            </form>
          </div>

          {/* Contact Info & Map */}
          <div className="space-y-8">
            {/* Contact details card */}
            <div className="glass-card rounded-3xl p-8 shadow-card">
              <h3 className="text-2xl font-bold text-foreground mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 gradient-primary rounded-2xl flex items-center justify-center shadow-soft">
                    <MapPin className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Our Location</h4>
                    <p className="text-muted-foreground leading-relaxed">
                       No:249, Swamy street, Vellore main road,<br />
                      Katpadi, Vellore-632007, Tamilnadu<br />
                      <span className="text-sm italic">Landmark: Near chittoor bus stop</span>
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 gradient-secondary rounded-2xl flex items-center justify-center shadow-soft">
                    <Phone className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Contact Person</h4>
                    <p className="text-muted-foreground">
                      {/* Manikam<br /> */}
                      <a href="tel:+919876543210" className="text-primary hover:underline"> +91 86808 04446</a>
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-2xl flex items-center justify-center shadow-soft">
                    <Mail className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Email Us</h4>
                    <a href="mailto:info@thirdeyebanking.com" className="text-primary hover:underline">
                       thirdeyeinstitutevellore@gmail.com
                    </a>
                  </div>
                </div>

                {/* Timings */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-soft">
                    <Clock className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Working Hours</h4>
                    <p className="text-muted-foreground">
                      Mon - Sat: 9:00 AM - 8:00 PM<br />
                      Sunday: 10:00 AM - 2:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps Embed */}
            <div className="relative rounded-3xl overflow-hidden shadow-card h-72">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.1234567890!2d79.1234567!3d12.9876543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU5JzE0LjQiTiA3OcKwMDcnMjguNCJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Third Eye Institute Location"
                className="rounded-3xl"
              ></iframe>
              
              {/* Glass overlay with address */}
              <div className="absolute bottom-4 left-4 right-4 glass-card rounded-2xl p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-foreground text-sm">Third Eye Institute</p>
                    <p className="text-xs text-muted-foreground">Vellore, Tamilnadu</p>
                  </div>
                  <Button 
                    variant="gradient" 
                    size="sm"
                    onClick={() => window.open('https://maps.app.goo.gl/N4VhyvawzxKLU4366', '_blank')}
                  >
                    Get Directions
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
