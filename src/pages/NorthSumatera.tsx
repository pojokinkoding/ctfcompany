import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Globe, ClipboardList, Award, Settings, Ruler, Leaf, CalendarDays, Target } from 'lucide-react';

export default function NorthSumatera() {
  const regions = [
    { name: "SULAWESI", image: `${import.meta.env.BASE_URL}product5.png`, link: '/product/sulawesi' },
    { name: "BALI", image: `${import.meta.env.BASE_URL}product6.png`, link: '/product/bali' },
    { name: "CENTRAL\nJAVA", image: `${import.meta.env.BASE_URL}product2.png`, link: '/product/central-java' },
    { name: "SUMATERA", image: `${import.meta.env.BASE_URL}product3.png`, link: '/product/sumatera' },
  ];

  const products = [
    {
      title: "Co Fermentation Karo Process",
      details: [
        { icon: Globe, label: "Origin: Lake Toba. Karo, North Sumatra, Indonesia" },
        { icon: Award, label: "Grade: G1" },
        { icon: Target, label: "Post process: Wash Wethulled with Co Fermentation (Jasmine, Strawberry, Honeydew, Osmanthus, Grape, Lychee)" },
        { icon: Ruler, label: "Altitude: 1500-1600" },
        { icon: Leaf, label: "Variety: Catimor, Sigararutang" },
        { icon: CalendarDays, label: "Crop availability: 2026" }
      ]
    },
    {
      title: "Mandheling Wethulled",
      details: [
        { icon: Globe, label: "Origin: Mandheling Natal, North Sumatra, Indonesia" },
        { icon: ClipboardList, label: "Highlight note: Spice, Dark Chocolate, Citrus" },
        { icon: Award, label: "Grade: G1" },
        { icon: Settings, label: "Post process: Washed" },
        { icon: Ruler, label: "Altitude: 1400-1600" },
        { icon: Leaf, label: "Variety: Catimor, Sigararutang" },
        { icon: CalendarDays, label: "Crop availability: 2026" }
      ]
    },
    {
      title: "Mandheling Honey",
      details: [
        { icon: Globe, label: "Origin: Mandheling Natal, North Sumatra, Indonesia" },
        { icon: ClipboardList, label: "Highlight note: Spice, Honey, Lime, Black tea" },
        { icon: Award, label: "Grade: G1" },
        { icon: Settings, label: "Post process: Wet-hulled" },
        { icon: Ruler, label: "Altitude: 1400-1600" },
        { icon: Leaf, label: "Variety: Catimor, Sigararutang" },
        { icon: CalendarDays, label: "Crop availability: 2026" }
      ]
    },
    {
      title: "Mandheling Fullwash",
      details: [
        { icon: Globe, label: "Origin: Mandheling Natal, North Sumatra, Indonesia" },
        { icon: ClipboardList, label: "Highlight note: Tropical Fruit, Mandarin orange, brown sugar" },
        { icon: Award, label: "Grade: G1" },
        { icon: Settings, label: "Post process: Natural" },
        { icon: Ruler, label: "Altitude: 1400-1600" },
        { icon: Leaf, label: "Variety: Catimor, Sigararutang" },
        { icon: CalendarDays, label: "Crop availability: 2026" }
      ]
    },
    {
      title: "Lintong Wethulled",
      details: [
        { icon: Globe, label: "Origin: Lintong Nihuta, North Sumatra, Indonesia" },
        { icon: ClipboardList, label: "Highlight note: Chocolate, Spice, Lime" },
        { icon: Award, label: "Grade: G1" },
        { icon: Settings, label: "Post process: Wash Wethulled" },
        { icon: Ruler, label: "Altitude: 1200-1600" },
        { icon: Leaf, label: "Variety: Sigararutang, Lasuna, Lini-S" },
        { icon: CalendarDays, label: "Crop availability: 2026" }
      ]
    },
    {
      title: "Sipirok Wethulled",
      details: [
        { icon: Globe, label: "Origin: Sipirok" },
        { icon: ClipboardList, label: "Highlight note: Citrus, Caramel, Herbal, Chocolate" },
        { icon: Award, label: "Grade: G1" },
        { icon: Settings, label: "Post process: Wash Wethulled" },
        { icon: Ruler, label: "Altitude: 1200-1500" },
        { icon: Leaf, label: "Variety: Mix" },
        { icon: CalendarDays, label: "Crop availability: 2026" }
      ]
    },
    {
      title: "Gayo Natural",
      details: [
        { icon: Globe, label: "Origin: Bener Meriah, Gayo" },
        { icon: ClipboardList, label: "Highlight note: Dark Chocolate, Apple, Nutty" },
        { icon: Award, label: "Grade: G1" },
        { icon: Settings, label: "Post process: Natural" },
        { icon: Ruler, label: "Altitude: 1400-1550" },
        { icon: Leaf, label: "Variety: Ateng. Tim-tim, Catimor" },
        { icon: CalendarDays, label: "Crop availability: 2026" }
      ]
    },
    {
      title: "Gayo Fullwashed",
      details: [
        { icon: Globe, label: "Origin: Bener Meriah, Gayo" },
        { icon: ClipboardList, label: "Highlight note: Orange, Caramel, Green Apple" },
        { icon: Award, label: "Grade: G1" },
        { icon: Settings, label: "Post process: Washed Dryhull" },
        { icon: Ruler, label: "Altitude: 1400-1550" },
        { icon: Leaf, label: "Variety: Ateng. Tim-tim, Catimor" },
        { icon: CalendarDays, label: "Crop availability: 2026" }
      ]
    },
    {
      title: "Gayo Honey",
      details: [
        { icon: Globe, label: "Origin: Bener Meriah, Gayo" },
        { icon: ClipboardList, label: "Highlight note: Black Tea, Honey Pineapple" },
        { icon: Award, label: "Grade: G1" },
        { icon: Settings, label: "Post process: Honey" },
        { icon: Ruler, label: "Altitude: 1400-1550" },
        { icon: Leaf, label: "Variety: Ateng. Tim-tim, Catimor" },
        { icon: CalendarDays, label: "Crop availability: 2026" }
      ]
    },
    {
      title: "Gayo Wethulled",
      details: [
        { icon: Globe, label: "Origin: Bener Meriah, Gayo" },
        { icon: ClipboardList, label: "Highlight note: Spice, Palm Sugar, Orange" },
        { icon: Award, label: "Grade: G1" },
        { icon: Settings, label: "Post process: Wash Wethulled" },
        { icon: Ruler, label: "Altitude: 1400-1550" },
        { icon: Leaf, label: "Variety: Ateng. Tim-tim, Catimor" },
        { icon: CalendarDays, label: "Crop availability: 2026" }
      ]
    },
    {
      title: "Gayo Wine",
      details: [
        { icon: Globe, label: "Origin: Bener Meriah, Gayo" },
        { icon: ClipboardList, label: "Highlight note: Dried Fruit, Lime, Brown Sugar" },
        { icon: Award, label: "Grade: G1" },
        { icon: Settings, label: "Post process: Wine Process" },
        { icon: Ruler, label: "Altitude: 1400-1550" },
        { icon: Leaf, label: "Variety: Ateng. Tim-tim, Catimor" },
        { icon: CalendarDays, label: "Crop availability: 2026" }
      ]
    },
    {
      title: "Natural Anaerob",
      details: [
        { icon: Globe, label: "Origin: Bener Meriah, Gayo" },
        { icon: ClipboardList, label: "Highlight note: Mix Berries, Citrus, Honey" },
        { icon: Award, label: "Grade: G1" },
        { icon: Settings, label: "Post process: Natural Anaerob" },
        { icon: Ruler, label: "Altitude: 1400-1550" },
        { icon: Leaf, label: "Variety: Ateng. Tim-tim, Catimor" },
        { icon: CalendarDays, label: "Crop availability: 2026" }
      ]
    },
    {
      title: "Gayo Raisin CM",
      details: [
        { icon: Globe, label: "Origin: Atu Lintang, Aceh" },
        { icon: Award, label: "Grade: Specialty" },
        { icon: Target, label: "Post process: Raisin Carbonic Maceration" },
        { icon: Ruler, label: "Altitude: 1400-1550" },
        { icon: Leaf, label: "Variety: Ateng. Tim-tim, Lini-S, Bourbon" },
        { icon: CalendarDays, label: "Crop availability: 2026" },
        { icon: ClipboardList, label: "Qty availability: 2000 kg" }
      ]
    },
    {
      title: "Gayo Wild Luwak",
      details: [
        { icon: Globe, label: "Origin: Pondok Gajah, Bener Meriah" },
        { icon: ClipboardList, label: "Highlight note: Milk Chocolate, Palm Sugar, Red Apple, Pear" },
        { icon: Award, label: "Grade: Specialty" },
        { icon: Settings, label: "Post process: Washed Dryhull Luwak Process" },
        { icon: Ruler, label: "Altitude: 1350-1400" },
        { icon: Leaf, label: "Variety: Ateng. Tim-tim, Catimor" },
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
            src={`${import.meta.env.BASE_URL}product4.png`}
            alt="North Sumatera Banner"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Title */}
        <h1 className="text-center font-display font-normal text-brand-green text-[3.5rem] md:text-[5rem] lg:text-[6.5rem] uppercase mb-8 tracking-tight">
          NORTH SUMATERA
        </h1>

        {/* Map */}
        <div className="w-full mb-16 flex justify-center">
          <img 
            src={`${import.meta.env.BASE_URL}north sumatra 1 (1).png`}
            alt="Map of Indonesia with pin on North Sumatera"
            className="w-full max-w-[1000px] h-auto object-contain"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Coffee Specs Grid */}
        <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16 lg:gap-x-16">
          {products.map((product, idx) => (
            <div key={idx}>
              <h2 className="font-display text-[20px] md:text-[24px] font-bold text-brand-green mb-4 tracking-wide whitespace-pre-line">{product.title}</h2>
              <ul className="space-y-4 text-[13px] md:text-[14px] font-medium text-brand-green/90">
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
        <div className="flex justify-center mt-20 md:mt-32">
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
