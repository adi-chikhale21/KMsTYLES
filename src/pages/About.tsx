import { PageTransition } from "@/components/Layout";

export default function About() {
  return (
    <PageTransition>
      <div className="container mx-auto px-6 md:px-12 py-12 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <h1 className="text-5xl md:text-7xl font-serif mb-8">Meet Kerri's-Mae</h1>
            <p className="text-xl font-light text-brand-charcoal/80 mb-8 leading-relaxed">
              A hair stylist who loves helping people feel confident and beautiful.
            </p>
            <div className="space-y-6 text-brand-charcoal/70 font-light leading-relaxed">
              <p>
                For me, it's not just about hair - it's about giving you a little time out to relax and leave feeling your best. I believe that a great hairstyle can transform not just how you look, but how you feel about yourself.
              </p>
              <p>
                I offer a range of treatments including hair styling, hair cutting, and hair care. Whether you are after something simple and natural or bold and creative, I'll work with you to create a look that feels just right.
              </p>
              <p>
                My approach is highly personalized. I take the time to understand your hair type, your lifestyle, and your aesthetic goals to ensure that the results are not only beautiful but also manageable for your everyday life.
              </p>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 relative">
            <div className="aspect-[3/4] overflow-hidden">
              <img 
                src="https://booksolo.co/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fsecretspa-app-images%2FprofessionalImage%2F69cd5172110f9f73e9baf2ba-website-1775063873479.jpg&w=1920&q=75" 
                alt="Kerri's-Mae" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -top-8 -left-8 w-32 h-32 bg-brand-gold/20 -z-10"></div>
            <div className="absolute -bottom-8 -right-8 w-48 h-48 border border-brand-charcoal/20 -z-10"></div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
