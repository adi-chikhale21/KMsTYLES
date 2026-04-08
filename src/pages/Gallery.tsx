import { PageTransition } from "@/components/Layout";

const images = [
  "https://booksolo.co/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fsecretspa-app-images%2FprofessionalImage%2F69cd5172110f9f73e9baf2ba-website-1775063873479.jpg&w=750&q=75",
  "https://booksolo.co/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fsecretspa-app-images%2FprofessionalImage%2F69cd5172110f9f73e9baf2ba-website-1775063898236.jpg&w=750&q=75",
  "https://booksolo.co/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fsecretspa-app-images%2FprofessionalImage%2F69cd5172110f9f73e9baf2ba-website-1775063930760.jpg&w=750&q=75",
  "https://booksolo.co/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fsecretspa-app-images%2FprofessionalImage%2F69cd5172110f9f73e9baf2ba-website-1775063963028.jpg&w=750&q=75",
  "https://booksolo.co/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fsecretspa-app-images%2FprofessionalImage%2F69cd5172110f9f73e9baf2ba-website-1775063983151.jpg&w=750&q=75",
  "https://booksolo.co/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fsecretspa-app-images%2FprofessionalImage%2F69cd5172110f9f73e9baf2ba-website-1775063994639.jpg&w=750&q=75",
  "https://booksolo.co/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fsecretspa-app-images%2FprofessionalImage%2F69cd5172110f9f73e9baf2ba-website-1775064044602.jpg&w=750&q=75",
  "https://booksolo.co/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fsecretspa-app-images%2FprofessionalImage%2F69cd5172110f9f73e9baf2ba-website-1775064117867.jpg&w=1920&q=75",
  "https://booksolo.co/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fsecretspa-app-images%2FprofessionalImage%2F69cd5172110f9f73e9baf2ba-website-1775064044602.jpg&w=750&q=75"
];

export default function Gallery() {
  return (
    <PageTransition>
      <div className="container mx-auto px-6 md:px-12 py-20 md:py-32">
        <div className="text-center mb-16">
          <span className="text-sm uppercase tracking-[0.4em] text-brand-charcoal/80 mb-6 block">Portfolio</span>
          <h1 className="text-5xl md:text-7xl font-serif mb-6">Gallery</h1>
          <p className="max-w-2xl mx-auto text-brand-charcoal/70 font-light text-lg">
            A glimpse into my work and the beautiful transformations of my clients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {images.map((src, idx) => (
            <div key={idx} className="group relative aspect-[4/5] overflow-hidden bg-brand-beige-dark">
              <img 
                src={src} 
                alt={`Gallery image ${idx + 1}`} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-brand-charcoal/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>
        
        <div className="mt-20 text-center">
          <a 
            href="https://www.instagram.com/kmstyles_xo/" 
            target="_blank" 
            rel="noreferrer"
            className="inline-flex items-center text-sm uppercase tracking-widest border-b border-brand-charcoal pb-1 hover:text-brand-gold hover:border-brand-gold transition-colors"
          >
            Follow on Instagram for more
          </a>
        </div>
      </div>
    </PageTransition>
  );
}
