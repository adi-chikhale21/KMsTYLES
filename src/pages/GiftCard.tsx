import { useState } from "react";
import { PageTransition } from "@/components/Layout";
import { Gift } from "lucide-react";
import { cn } from "@/lib/utils";

export default function GiftCard() {
  const [selectedAmount, setSelectedAmount] = useState<string>('10');
  const [customAmount, setCustomAmount] = useState<string>('');

  const displayAmount = selectedAmount === 'Custom' 
    ? (customAmount ? `£${customAmount}` : '£0') 
    : `£${selectedAmount}`;

  return (
    <PageTransition>
      <div className="container mx-auto px-6 md:px-12 py-20 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          <div className="order-2 lg:order-1">
            <span className="text-sm uppercase tracking-[0.4em] text-brand-charcoal/80 mb-6 block">The Perfect Gift</span>
            <h1 className="text-5xl md:text-6xl font-serif mb-6">Gift Cards</h1>
            <p className="text-brand-charcoal/70 font-light text-lg mb-10 leading-relaxed">
              Treat someone special to a luxurious hair experience. Our digital gift cards can be used towards any treatment or service at Kmstyles.
            </p>
            
            <div className="bg-brand-beige-dark p-8 mb-8">
              <h3 className="text-xl font-serif mb-6">Select Amount</h3>
              <div className="grid grid-cols-3 gap-4 mb-6">
                {['10', '20', '30', '40', '50', 'Custom'].map((amount) => (
                  <button 
                    key={amount}
                    onClick={() => setSelectedAmount(amount)}
                    className={cn(
                      "py-3 border transition-colors font-light",
                      selectedAmount === amount 
                        ? "border-brand-charcoal bg-brand-charcoal text-brand-beige" 
                        : "border-brand-charcoal/20 text-brand-charcoal hover:border-brand-charcoal hover:bg-brand-charcoal/5"
                    )}
                  >
                    {amount === 'Custom' ? 'Custom' : `£${amount}`}
                  </button>
                ))}
              </div>

              {selectedAmount === 'Custom' && (
                <div className="mb-8">
                  <label htmlFor="custom-amount" className="block text-xs uppercase tracking-widest mb-2">Enter Custom Amount (£)</label>
                  <input 
                    type="number" 
                    id="custom-amount"
                    min="10"
                    max="50"
                    value={customAmount}
                    onChange={(e) => setCustomAmount(e.target.value)}
                    className="w-full bg-transparent border-b border-brand-charcoal/30 py-3 focus:outline-none focus:border-brand-charcoal transition-colors font-light"
                    placeholder="e.g. 25"
                  />
                </div>
              )}
              
              <a 
                href="https://booksolo.co/kmstyles/giftcard" 
                target="_blank" 
                rel="noreferrer"
                className="block w-full text-center px-8 py-4 bg-brand-charcoal text-brand-beige uppercase tracking-widest text-sm hover:bg-brand-gold transition-colors duration-300 mt-2"
              >
                Purchase Gift Card
              </a>
            </div>
            
            <p className="text-sm text-brand-charcoal/60 font-light">
              Gift cards are delivered by email and contain instructions to redeem them at checkout. Our gift cards have no additional processing fees.
            </p>
          </div>
          
          <div className="order-1 lg:order-2 relative">
            <div className="aspect-square bg-brand-charcoal p-12 flex flex-col justify-between text-brand-beige relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
              
              <div className="relative z-10 flex justify-between items-start">
                <span className="font-script text-4xl">Kmstyles</span>
                <Gift className="w-8 h-8 text-brand-gold" />
              </div>
              
              <div className="relative z-10 text-center my-12">
                <span className="block text-sm uppercase tracking-[0.3em] text-brand-beige/70 mb-4">Gift Certificate</span>
                <span className="text-6xl font-serif font-light">{displayAmount}</span>
              </div>
              
              <div className="relative z-10 flex justify-between items-end text-xs uppercase tracking-widest text-brand-beige/50">
                <span>Valid for all services</span>
                <span>No expiry date</span>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 w-full h-full border border-brand-charcoal/20 -z-10"></div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
