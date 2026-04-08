import { PageTransition } from "@/components/Layout";
import { Calendar, Clock, MapPin } from "lucide-react";

const allServices = [
  "Wash - £10",
  "Wash & Blow-Dry - £20",
  "Blow-Dry - £10",
  "Blow-Dry & Style - £20",
  "Wash, Blow-Dry & Style - £25",
  "Style - £15",
  "Regrowth Tint - £30",
  "Full Head Tint - £40",
  "Full Head Highlights - From £85",
  "Half Head Highlights - From £65",
  "Balayage - £55",
  "Money Piece - From £10",
  "Toner - £15",
  "Wet Cut - £15",
  "Cut & Blow-Dry - £30",
  "Kids Cut - Under 10 £6 / Over 10 £10"
];

const openingHours = [
  { day: "Monday", hours: "2pm - 6pm" },
  { day: "Tuesday", hours: "2pm - 6pm" },
  { day: "Wednesday", hours: "2pm - 6pm" },
  { day: "Thursday", hours: "2pm - 8pm" },
  { day: "Friday", hours: "4pm - 8pm" },
  { day: "Saturday", hours: "10am - 3pm" },
  { day: "Sunday", hours: "10am - 3pm" }
];

export default function Book() {
  return (
    <PageTransition>
      <div className="container mx-auto px-6 md:px-12 py-20 md:py-32">
        <div className="text-center mb-16">
          <div className="w-20 h-20 bg-brand-beige-dark rounded-full flex items-center justify-center mx-auto mb-8">
            <Calendar className="w-8 h-8 text-brand-charcoal" />
          </div>
          <h1 className="text-5xl md:text-6xl font-serif mb-6">Book an Appointment</h1>
          <p className="text-brand-charcoal/70 font-light text-lg max-w-2xl mx-auto leading-relaxed">
            Ready to transform your look? Secure your spot with Kerri's-Mae. Select your desired service, date, and time.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 max-w-6xl mx-auto items-start">
          
          {/* Booking Form */}
          <div className="lg:col-span-7 bg-white p-8 md:p-12 shadow-sm border border-brand-charcoal/10">
            <h2 className="text-3xl font-serif mb-8 border-b border-brand-charcoal/10 pb-4">Your Details</h2>
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              
              {/* Service Selection */}
              <div>
                <label htmlFor="service" className="block text-xs uppercase tracking-widest mb-3 font-medium">Select Service</label>
                <div className="relative">
                  <select 
                    id="service" 
                    className="w-full bg-transparent border border-brand-charcoal/20 p-4 focus:outline-none focus:border-brand-charcoal transition-colors font-light appearance-none cursor-pointer"
                    defaultValue=""
                  >
                    <option value="" disabled>Choose a treatment...</option>
                    {allServices.map((service, idx) => (
                      <option key={idx} value={service}>{service}</option>
                    ))}
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-brand-charcoal/50">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" fillRule="evenodd"></path></svg>
                  </div>
                </div>
              </div>

              {/* Date & Time */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="date" className="block text-xs uppercase tracking-widest mb-3 font-medium">Preferred Date</label>
                  <input 
                    type="date" 
                    id="date" 
                    className="w-full bg-transparent border border-brand-charcoal/20 p-4 focus:outline-none focus:border-brand-charcoal transition-colors font-light"
                  />
                </div>
                <div>
                  <label htmlFor="time" className="block text-xs uppercase tracking-widest mb-3 font-medium">Preferred Time</label>
                  <div className="relative">
                    <select 
                      id="time" 
                      className="w-full bg-transparent border border-brand-charcoal/20 p-4 focus:outline-none focus:border-brand-charcoal transition-colors font-light appearance-none cursor-pointer"
                      defaultValue=""
                    >
                      <option value="" disabled>Select time...</option>
                      <option value="10:00">10:00 AM</option>
                      <option value="11:00">11:00 AM</option>
                      <option value="12:00">12:00 PM</option>
                      <option value="13:00">1:00 PM</option>
                      <option value="14:00">2:00 PM</option>
                      <option value="15:00">3:00 PM</option>
                      <option value="16:00">4:00 PM</option>
                      <option value="17:00">5:00 PM</option>
                      <option value="18:00">6:00 PM</option>
                      <option value="19:00">7:00 PM</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-brand-charcoal/50">
                      <Clock className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Personal Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-xs uppercase tracking-widest mb-3 font-medium">First Name</label>
                  <input 
                    type="text" 
                    id="firstName" 
                    className="w-full bg-transparent border-b border-brand-charcoal/30 py-3 focus:outline-none focus:border-brand-charcoal transition-colors font-light"
                    placeholder="Jane"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-xs uppercase tracking-widest mb-3 font-medium">Last Name</label>
                  <input 
                    type="text" 
                    id="lastName" 
                    className="w-full bg-transparent border-b border-brand-charcoal/30 py-3 focus:outline-none focus:border-brand-charcoal transition-colors font-light"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-xs uppercase tracking-widest mb-3 font-medium">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full bg-transparent border-b border-brand-charcoal/30 py-3 focus:outline-none focus:border-brand-charcoal transition-colors font-light"
                    placeholder="jane@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-xs uppercase tracking-widest mb-3 font-medium">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    className="w-full bg-transparent border-b border-brand-charcoal/30 py-3 focus:outline-none focus:border-brand-charcoal transition-colors font-light"
                    placeholder="+44 7000 000000"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="notes" className="block text-xs uppercase tracking-widest mb-3 font-medium">Additional Notes (Optional)</label>
                <textarea 
                  id="notes" 
                  rows={3}
                  className="w-full bg-transparent border border-brand-charcoal/20 p-4 focus:outline-none focus:border-brand-charcoal transition-colors font-light resize-none"
                  placeholder="Any specific requests or hair history I should know about?"
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full px-10 py-5 bg-brand-charcoal text-brand-beige uppercase tracking-widest text-sm hover:bg-brand-gold transition-colors duration-300 mt-4"
              >
                Confirm Booking
              </button>
              
              <p className="text-center text-xs text-brand-charcoal/50 uppercase tracking-widest mt-4">
                By booking, you agree to our <a href="#" className="underline hover:text-brand-charcoal">cancellation policy</a>.
              </p>
            </form>
          </div>

          {/* Opening Hours */}
          <div className="lg:col-span-5 bg-brand-beige-dark p-10 md:p-12 shadow-sm relative overflow-hidden">
            {/* Decorative background element */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-brand-gold/10 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              <div className="text-center mb-10">
                <h2 className="text-5xl md:text-6xl font-serif mb-2">Opening</h2>
                <h3 className="text-sm uppercase tracking-[0.3em] font-medium text-brand-charcoal/80">Hours</h3>
              </div>
              
              <div className="space-y-4 mb-12">
                {openingHours.map((schedule, idx) => (
                  <div key={idx} className="flex justify-between items-center text-lg">
                    <span className="font-medium text-brand-charcoal/90">{schedule.day}</span>
                    <span className="font-light text-brand-charcoal/80">{schedule.hours}</span>
                  </div>
                ))}
              </div>
              
              <div className="pt-8 border-t border-brand-charcoal/10 text-center space-y-3">
                <p className="flex items-center justify-center text-brand-charcoal/80">
                  Friday's <MapPin className="w-4 h-4 mx-2 text-brand-gold" /> Glow 'N' Go, Bourne
                </p>
                <p className="flex items-center justify-center text-brand-charcoal/80">
                  <MapPin className="w-4 h-4 mr-2 text-brand-gold" /> mobile hairdresser
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </PageTransition>
  );
}
