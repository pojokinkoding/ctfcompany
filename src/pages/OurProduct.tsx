import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

const regions = [
  {
    name: "CENTRAL JAVA",
    title: "CENTRAL\nJAVA",
    description: "The Cultural Heart of Indonesia home to majestic temples & scenic mountains.",
    image: "https://picsum.photos/seed/batik-java/800/500", // Placeholder for batik/textile pattern
    link: "#"
  },
  {
    name: "SUMATERA",
    title: "SUMATERA",
    description: "A diverse land full of ancient rainforests, wild volcanic landscapes & rich wildlife.",
    image: "https://picsum.photos/seed/songket-sumatra/800/500",
    link: "#"
  },
  {
    name: "NORTH SUMATERA",
    title: "NORTH\nSUMATERA",
    description: "Home to the world famous Lake Toba surrounded by lush highlands.",
    image: "https://picsum.photos/seed/ulos-north-sumatra/800/500",
    link: "#"
  },
  {
    name: "SULAWESI",
    title: "SULAWESI",
    description: "Striking landscapes surrounded by pristine seas inhabited by rare flora & fauna.",
    image: "https://picsum.photos/seed/toraja-pattern/800/500",
    link: "#"
  },
  {
    name: "BALI",
    title: "BALI",
    description: "The tropical hotspot island known comprised of captivating beaches & lush rice terraces.",
    image: "https://picsum.photos/seed/endek-bali/800/500",
    link: "#"
  }
];

export default function OurProduct() {
  return (
    <main className="pt-[150px] pb-24 font-sans text-brand-green">
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 mb-20">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-display font-normal text-brand-green text-5xl md:text-6xl lg:text-[4.5rem] uppercase mb-12 tracking-tight"
        >
          OUR PRODUCT
        </motion.h1>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-16">
          {regions.map((region, idx) => (
            <motion.div 
              key={region.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex flex-col group block"
            >
              {/* Image Container with Title overlay */}
              <div className="relative rounded-2xl overflow-hidden aspect-[16/10] mb-6 shadow-sm">
                <img 
                  src={region.image} 
                  alt={`${region.name} pattern`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                {/* Dark overlay for better text readability */}
                <div className="absolute inset-0 bg-black/30 transition-opacity duration-500 group-hover:bg-black/40"></div>
                
                {/* Region Title */}
                <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-end">
                  <h2 className="text-white font-display text-4xl md:text-5xl lg:text-6xl uppercase leading-[0.9] tracking-tight drop-shadow-lg whitespace-pre-line">
                    {region.title}
                  </h2>
                </div>
              </div>

              {/* Description */}
              <p className="font-sans font-medium text-[15px] md:text-[16px] text-brand-green/90 leading-relaxed mb-6">
                {region.description}
              </p>

              {/* Action Link */}
              <Link 
                to={region.link} 
                className="font-display uppercase text-brand-green text-2xl md:text-[28px] tracking-tight hover:opacity-80 transition-opacity inline-flex items-center"
              >
                EXPLORE BEANS
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
