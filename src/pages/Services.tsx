import { PageTransition } from "@/components/Layout";
import { Link } from "react-router-dom";

const services = [
  {
    category: "Hair services @ Glow 'N' Go",
    items: [
      { name: "Wash", price: "£10" },
      { name: "Wash & Blow-Dry", price: "£20" },
      { name: "Blow-Dry", price: "£10" },
      { name: "Blow-Dry & Style", price: "£20" },
      { name: "Wash, Blow-Dry & Style", price: "£25" },
      { name: "Style", price: "£15" }
    ]
  },
  {
    category: "Mobile hair services",
    items: [
      { name: "Regrowth Tint", price: "£30" },
      { name: "Full Head Tint", price: "£40" },
      { name: "Full Head Highlights", price: "From £85" },
      { name: "Half Head Highlights", price: "From £65" },
      { name: "Balayage", price: "£55" },
      { name: "Money Piece", price: "From £10" },
      { name: "Toner", price: "£15" }
    ]
  },
  {
    category: "Cutting",
    items: [
      { name: "Wet Cut", price: "£15" },
      { name: "Cut & Blow-Dry", price: "£30" },
      { name: "Kids Cut", price: "Under 10 £6 / Over 10 £10" }
    ]
  }
];

export default function Services() {
  return (
    <PageTransition>
      <div className="bg-brand-beige">
        {/* Header */}
        <div className="py-20 md:py-32 text-center px-6">
          <span className="text-sm uppercase tracking-[0.4em] text-brand-charcoal/80 mb-6 block">Menu</span>
          <h1 className="text-5xl md:text-7xl font-serif mb-4">Price list.</h1>
          <p className="max-w-2xl mx-auto text-brand-charcoal/70 font-light text-lg">
            A curated selection of services designed to enhance your natural beauty and maintain the health of your hair.
          </p>
        </div>

        {/* Services List */}
        <div className="container mx-auto px-6 md:px-12 pb-32 max-w-4xl">
          {services.map((section, idx) => (
            <div key={idx} className="mb-16 last:mb-0">
              <h2 className="text-2xl md:text-3xl font-serif mb-8 pb-4 border-b border-brand-charcoal/20 text-brand-charcoal/90">{section.category}</h2>
              <div className="space-y-6">
                {section.items.map((item, itemIdx) => (
                  <div key={itemIdx} className="group pl-4 md:pl-12">
                    <div className="flex justify-between items-baseline mb-1">
                      <h3 className="text-sm md:text-base font-medium tracking-widest uppercase text-brand-charcoal/80">{item.name}</h3>
                      <div className="flex-grow border-b border-brand-charcoal/10 mx-4 relative top-[-6px]"></div>
                      <span className="text-sm md:text-base font-medium tracking-widest uppercase text-brand-charcoal/80">{item.price}</span>
                    </div>
                    {item.desc && <p className="text-brand-charcoal/60 font-light text-sm md:text-base w-3/4 mt-2">{item.desc}</p>}
                  </div>
                ))}
              </div>
            </div>
          ))}

          <div className="mt-24 text-center p-12 bg-brand-beige-dark">
            <h3 className="text-2xl font-serif mb-4">Ready for a change?</h3>
            <p className="text-brand-charcoal/70 mb-8 font-light">Book your appointment today and let's create something beautiful.</p>
            <Link 
              to="/book" 
              className="inline-block px-10 py-4 bg-brand-charcoal text-brand-beige uppercase tracking-widest text-sm hover:bg-brand-gold transition-colors duration-300"
            >
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
