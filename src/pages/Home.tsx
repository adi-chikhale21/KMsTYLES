import { Link } from "react-router-dom";
import { PageTransition } from "@/components/Layout";
import { ArrowRight, Star } from "lucide-react";

export default function Home() {
  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://booksolo.co/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fsecretspa-app-images%2FprofessionalImage%2F69cd5172110f9f73e9baf2ba-website-1775064117867.jpg&w=1920&q=75" 
            alt="Salon interior" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-beige/50 to-brand-beige"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <span className="text-sm md:text-base uppercase tracking-[0.4em] text-brand-charcoal/80 mb-6 block">Fixing bad hair days</span>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-script text-brand-charcoal mb-8">Kmstyles</h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl font-light text-brand-charcoal/80 mb-12 leading-relaxed">
            Helping you feel confident and beautiful with bespoke hair styling, cutting, and care.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link 
              to="/book" 
              className="w-full sm:w-auto px-10 py-4 bg-brand-charcoal text-brand-beige uppercase tracking-widest text-sm hover:bg-brand-gold transition-colors duration-300"
            >
              Book an Appointment
            </Link>
            <Link 
              to="/services" 
              className="w-full sm:w-auto px-10 py-4 border border-brand-charcoal text-brand-charcoal uppercase tracking-widest text-sm hover:bg-brand-charcoal hover:text-brand-beige transition-colors duration-300"
            >
              View Price List
            </Link>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 md:py-32 bg-brand-beige">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1 relative">
              <div className="aspect-[3/4] overflow-hidden">
                <img 
                  src="https://booksolo.co/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fsecretspa-app-images%2FprofessionalImage%2F69cd5172110f9f73e9baf2ba-website-1775063873479.jpg&w=750&q=75" 
                  alt="Hair styling" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-brand-gold/20 -z-10"></div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-4xl md:text-5xl font-serif mb-8">A little time out to relax and leave feeling your best.</h2>
              <p className="text-brand-charcoal/70 font-light leading-relaxed mb-8 text-lg">
                I am a hair stylist who loves helping people feel confident and beautiful. I offer a range of treatments including hair styling, hair cutting, and hair care. Whether you are after something simple and natural or bold and creative, I'll work with you to create a look that feels just right.
              </p>
              <Link to="/about" className="inline-flex items-center text-brand-charcoal uppercase tracking-widest text-sm font-medium hover:text-brand-gold transition-colors group">
                Read my story
                <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-24 md:py-32 bg-brand-beige-dark">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif mb-4">Signature Services</h2>
            <p className="text-brand-charcoal/70 uppercase tracking-widest text-sm">Tailored to your unique style</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Hair Services", desc: "From sleek blowouts to intricate styling for your special occasions.", img: "https://booksolo.co/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fsecretspa-app-images%2FprofessionalImage%2F69cd5172110f9f73e9baf2ba-website-1775063898236.jpg&w=750&q=75" },
              { title: "Mobile Hair Services", desc: "Expert coloring, highlights, and balayage brought directly to you.", img: "https://booksolo.co/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fsecretspa-app-images%2FprofessionalImage%2F69cd5172110f9f73e9baf2ba-website-1775063930760.jpg&w=750&q=75" },
              { title: "Cutting", desc: "Precision cuts designed to enhance your features and lifestyle.", img: "https://booksolo.co/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fsecretspa-app-images%2FprofessionalImage%2F69cd5172110f9f73e9baf2ba-website-1775063963028.jpg&w=750&q=75" }
            ].map((service, idx) => (
              <div key={idx} className="group cursor-pointer">
                <div className="aspect-[4/5] overflow-hidden mb-6">
                  <img src={service.img} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <h3 className="text-2xl font-serif mb-2">{service.title}</h3>
                <p className="text-brand-charcoal/70 font-light mb-4">{service.desc}</p>
                <Link to="/services" className="text-sm uppercase tracking-widest border-b border-brand-charcoal pb-1 hover:text-brand-gold hover:border-brand-gold transition-colors">
                  View Price List
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-24 md:py-32 bg-brand-beige">
        <div className="container mx-auto px-6 md:px-12 text-center max-w-4xl">
          <div className="flex justify-center space-x-1 mb-8 text-brand-gold">
            {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" size={20} />)}
          </div>
          <blockquote className="text-2xl md:text-4xl font-serif leading-relaxed mb-8">
            "I had a roller set done by Kerri's-Mae and I was blown away by the results!! My curls lasted all night and the next day, the volume I was obsessed with!"
          </blockquote>
          <cite className="block text-sm uppercase tracking-widest text-brand-charcoal/70 not-italic">
            — Emma
          </cite>
        </div>
      </section>
    </PageTransition>
  );
}
