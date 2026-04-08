import { PageTransition } from "@/components/Layout";
import { MapPin, Phone, Mail, Clock, Instagram } from "lucide-react";

export default function Contact() {
  return (
    <PageTransition>
      <div className="container mx-auto px-6 md:px-12 py-20 md:py-32">
        <div className="text-center mb-16">
          <span className="text-sm uppercase tracking-[0.4em] text-brand-charcoal/80 mb-6 block">Get in touch</span>
          <h1 className="text-5xl md:text-7xl font-serif mb-6">Contact</h1>
          <p className="max-w-2xl mx-auto text-brand-charcoal/70 font-light text-lg">
            Have a question or want to discuss your hair goals? I'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="bg-brand-beige-dark p-10 md:p-16">
            <h2 className="text-3xl font-serif mb-10">Information</h2>
            
            <div className="space-y-8">
              <div className="flex items-start">
                <Phone className="w-6 h-6 mr-4 mt-1 text-brand-gold" />
                <div>
                  <h3 className="text-sm uppercase tracking-widest mb-2 font-medium">Phone</h3>
                  <a href="tel:+447746709233" className="text-brand-charcoal/70 hover:text-brand-gold transition-colors font-light">
                    +44 7746 709233
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail className="w-6 h-6 mr-4 mt-1 text-brand-gold" />
                <div>
                  <h3 className="text-sm uppercase tracking-widest mb-2 font-medium">Email</h3>
                  <a href="mailto:Kmstyles24@gmail.com" className="text-brand-charcoal/70 hover:text-brand-gold transition-colors font-light">
                    Kmstyles24@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <MapPin className="w-6 h-6 mr-4 mt-1 text-brand-gold" />
                <div>
                  <h3 className="text-sm uppercase tracking-widest mb-2 font-medium">Location</h3>
                  <p className="text-brand-charcoal/70 font-light">
                    Kmstyles Studio<br />
                    London, UK
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Clock className="w-6 h-6 mr-4 mt-1 text-brand-gold" />
                <div>
                  <h3 className="text-sm uppercase tracking-widest mb-2 font-medium">Hours</h3>
                  <p className="text-brand-charcoal/70 font-light">
                    Mon - Wed: 2pm - 6pm<br />
                    Thursday: 2pm - 8pm<br />
                    Friday: 4pm - 8pm<br />
                    Sat - Sun: 10am - 3pm
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Instagram className="w-6 h-6 mr-4 mt-1 text-brand-gold" />
                <div>
                  <h3 className="text-sm uppercase tracking-widest mb-2 font-medium">Social</h3>
                  <a href="https://www.instagram.com/kmstyles_xo/" target="_blank" rel="noreferrer" className="text-brand-charcoal/70 hover:text-brand-gold transition-colors font-light">
                    @kmstyles_xo
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-serif mb-10">Send a Message</h2>
            <form action="https://formspree.io/f/xreodwdd" method="POST" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-xs uppercase tracking-widest mb-2">First Name</label>
                  <input 
                    type="text" 
                    id="firstName" 
                    name="firstName"
                    className="w-full bg-transparent border-b border-brand-charcoal/30 py-3 focus:outline-none focus:border-brand-charcoal transition-colors font-light"
                    placeholder="Jane"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-xs uppercase tracking-widest mb-2">Last Name</label>
                  <input 
                    type="text" 
                    id="lastName" 
                    name="lastName"
                    className="w-full bg-transparent border-b border-brand-charcoal/30 py-3 focus:outline-none focus:border-brand-charcoal transition-colors font-light"
                    placeholder="Doe"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-xs uppercase tracking-widest mb-2">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  className="w-full bg-transparent border-b border-brand-charcoal/30 py-3 focus:outline-none focus:border-brand-charcoal transition-colors font-light"
                  placeholder="jane@example.com"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-xs uppercase tracking-widest mb-2">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject"
                  className="w-full bg-transparent border-b border-brand-charcoal/30 py-3 focus:outline-none focus:border-brand-charcoal transition-colors font-light"
                  placeholder="How can I help you?"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-xs uppercase tracking-widest mb-2">Message</label>
                <textarea 
                  id="message" 
                  name="message"
                  rows={4}
                  className="w-full bg-transparent border-b border-brand-charcoal/30 py-3 focus:outline-none focus:border-brand-charcoal transition-colors font-light resize-none"
                  placeholder="Tell me about your hair goals..."
                  required
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className="w-full px-10 py-4 bg-brand-charcoal text-brand-beige uppercase tracking-widest text-sm hover:bg-brand-gold transition-colors duration-300 mt-4"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
