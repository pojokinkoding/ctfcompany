import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Globe, ClipboardList, Award, Settings, Ruler, Leaf, CalendarDays } from 'lucide-react';

export default function CentralJava() {
  const regions = [
    { name: "SULAWESI", image: `${import.meta.env.BASE_URL}product5.png`, link: '/product/sulawesi' },
    { name: "BALI", image: `${import.meta.env.BASE_URL}product6.png`, link: '/product/bali' },
    { name: "SUMATERA", image: `${import.meta.env.BASE_URL}product3.png`, link: '/product/sumatera' },
    { name: "NORTH\nSUMATERA", image: `${import.meta.env.BASE_URL}product4.png`, link: '/product/north-sumatera' },
  ];

  const products = [
    {
      title: "Central Java Natural",
      details: [
        { icon: Globe, label: "Origin: Temanggung, Central Java" },
        { icon: ClipboardList, label: "Highlight Note:\nFruity, Caramel, Red Apple,\nBrown Sugar, Medium Acidity" },
        { icon: Award, label: "Grade: G1" },
        { icon: Settings, label: "Post process: Natural" },
        { icon: Ruler, label: "Altitude: 1600 - 1800" },
        { icon: Leaf, label: "Variety: Kartika, Lini S" },
        { icon: CalendarDays, label: "Crop availability: 2026" }
      ]
    },
    {
      title: "Central Java Fullwashed",
      details: [
        { icon: Globe, label: "Origin: Temanggung, Central Java" },
        { icon: ClipboardList, label: "Highlight note: Brown Sugar,\nTobacco, Medium Body, Grapefruit" },
        { icon: Award, label: "Grade: G1" },
        { icon: Settings, label: "Post process: Fullwashed" },
        { icon: Ruler, label: "Altitude: 1600 - 1800" },
        { icon: Leaf, label: "Variety: Kartika, Lini S" },
        { icon: CalendarDays, label: "Crop availability: 2026" }
      ]
    },
    {
      title: "Robusta Fine Natural Process",
      details: [
        { icon: Globe, label: "Origin: Temanggung, Central Java" },
        { icon: ClipboardList, label: "Highlight Note: Dark Chocolate, Nutty,\nBrown Sugar. Spices" },
        { icon: Award, label: "Grade: G1" },
        { icon: Settings, label: "Post process: Natural" },
        { icon: Ruler, label: "Altitude: 900-1200" },
        { icon: Leaf, label: "Variety: Robusta" },
        { icon: CalendarDays, label: "Crop availability: 2026" }
      ]
    }
  ];

  return (
    <main className="pt-[150px] pb-24 font-sans text-brand-green">
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 mb-20">

        {/* Top Region Links Grid */}
        <div className="grid grid-cols-4 gap-2 md:gap-4 mb-4">
          {regions.map((region, idx) => (
            <Link to={region.link} key={idx} className="block group relative aspect-square rounded-xl sm:rounded-2xl overflow-hidden shadow-sm">
              <img
                src={region.image}
                alt={region.name.replace('\n', ' ')}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-500"></div>
              <div className="absolute inset-0 p-2 sm:p-4 flex flex-col justify-end">
                <h3 className="text-white font-display text-[12px] sm:text-[18px] md:text-[28px] uppercase leading-[1.1] tracking-tight drop-shadow-md whitespace-pre-line">
                  {region.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>

        {/* Hero Banner */}
        <div className="w-full aspect-[4.5/1] rounded-xl sm:rounded-2xl overflow-hidden shadow-sm mb-10">
          <img
            src={`${import.meta.env.BASE_URL}product2.png`}
            alt="Central Java Banner"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Title */}
        <h1 className="text-center font-display font-normal text-brand-green text-[3.5rem] md:text-[5rem] lg:text-[6.5rem] uppercase mb-8 tracking-tight">
          CENTRAL JAVA
        </h1>

        {/* Map */}
        <div className="w-full mb-16 flex justify-center">
          <img
            src={`${import.meta.env.BASE_URL}centraljava.png`}
            alt="Map of Indonesia with pin on Central Java"
            className="w-full max-w-[1000px] h-auto object-contain"
            referrerPolicy="no-referrer"
            onError={(e) => {
              (e.target as HTMLImageElement).src = "https://placehold.co/1000x500/e0e5e1/4a5d4e?text=Map+of+Indonesia+with+Pin+on+Central+Java";
            }}
          />
        </div>

        {/* Coffee Specs Grid */}
        <div className="max-w-[1200px] mx-auto grid md:grid-cols-3 gap-12 lg:gap-16">
          {products.map((product, idx) => (
            <div key={idx}>
              <h2 className="font-display text-[20px] md:text-[24px] font-bold text-brand-green mb-4 tracking-wide">{product.title}</h2>
              <ul className="space-y-3 text-[13px] md:text-[14px] font-medium text-brand-green/90">
                {product.details.map((detail, dIdx) => (
                  <li key={dIdx} className="flex items-start gap-3">
                    <detail.icon className="w-[16px] h-[16px] shrink-0 mt-0.5 text-brand-green" />
                    <div className="whitespace-pre-line">
                      {detail.label}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Start Your Order Button */}
        <div className="flex justify-center mt-16 md:mt-24">
          <a 
            href="https://wa.me/6287785737638"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#485c49] text-white font-display text-[26px] md:text-[34px] px-8 py-1 md:px-10 md:py-1.5 rounded-full hover:bg-[#3d4d3e] transition-all duration-300 tracking-tight shadow-md"
          >
            START YOUR ORDER
          </a>
        </div>
      </section>
    </main>
  );
}
