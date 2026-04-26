import { motion } from 'motion/react';
import { useParams, Link } from 'react-router-dom';
import {
    Globe2,
    Award,
    Settings,
    ClipboardList,
    SlidersVertical,
    Leaf,
    CalendarDays,
    Target
} from 'lucide-react';

const otherRegions = [
    { name: 'SULAWESI', image: `${import.meta.env.BASE_URL}product5.png`, link: '/product/sulawesi' },
    { name: 'BALI', image: `${import.meta.env.BASE_URL}product6.png`, link: '/product/bali' },
    { name: 'CENTRAL\nJAVA', image: `${import.meta.env.BASE_URL}product2.png`, link: '/product/central-java' },
    { name: 'SUMATERA', image: `${import.meta.env.BASE_URL}product3.png`, link: '/product/sumatera' }
];

const northSumatraProducts = [
    {
        title: "Co Fermentation Karo Process",
        details: [
            { icon: Globe2, label: "Origin: Lake Toba, Karo,\nNorth Sumatra, Indonesia" },
            { icon: Award, label: "Grade: G1" },
            { icon: Target, label: "Post process: Wash Wethulled with\nCo Fermentation (Jasmine, Strawberry,\nHoneydew, Osmanthus, Grape, Lychee)" },
            { icon: SlidersVertical, label: "Altitude: 1300-1600" },
            { icon: Leaf, label: "Variety: Catimor, Sigararutang" },
            { icon: CalendarDays, label: "Crop availability: 2026" }
        ]
    },
    {
        title: "Mandheling Wethulled",
        details: [
            { icon: Globe2, label: "Origin: Mandheling Natal, North\nSumatra, Indonesia" },
            { icon: ClipboardList, label: "Highlight note: Spice, Dark\nChocolate, Citrus" },
            { icon: Award, label: "Grade: G1" },
            { icon: Target, label: "Post process: Washed" },
            { icon: SlidersVertical, label: "Altitude: 1400-1600" },
            { icon: Leaf, label: "Variety: Catimor, Sigararutang" },
            { icon: CalendarDays, label: "Crop availability: 2026" }
        ]
    },
    {
        title: "Mandheling Honey",
        details: [
            { icon: Globe2, label: "Origin: Mandheling Natal,\nNorth Sumatra, Indonesia" },
            { icon: ClipboardList, label: "Highlight note: Spice, Honey,\nLime, Black tea" },
            { icon: Award, label: "Grade: G1" },
            { icon: Target, label: "Post process: Wet-hulled" },
            { icon: SlidersVertical, label: "Altitude: 1400-1600" },
            { icon: Leaf, label: "Variety: Catimor, Sigararutang" },
            { icon: CalendarDays, label: "Crop availability: 2026" }
        ]
    }
];

export default function RegionDetail() {
    const { regionId } = useParams();

    // For now, we only have detailed data for north-sumatera based on the UI provided.
    // We will default to it or show coming soon for others.
    if (regionId !== 'north-sumatera') {
        return (
            <div className="min-h-[50vh] flex flex-col items-center justify-center pt-[150px]">
                <h1 className="text-4xl text-gray-500 font-display mb-4">Coming Soon</h1>
                <Link to="/product" className="text-brand-green underline">Back to Products</Link>
            </div>
        );
    }

    return (
        <main className="pt-[150px] pb-24 font-sans text-brand-green w-full">
            <section className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 mb-20">

                {/* Top Region Links Grid */}
                <div className="grid grid-cols-4 gap-2 md:gap-4 mb-4">
                    {otherRegions.map((region, idx) => (
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
                        alt="North Sumatera Theme"
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                    />
                </div>

                {/* Main Title */}
                <h1 className="text-center font-display font-normal text-brand-green text-[3.5rem] md:text-[5rem] lg:text-[6.5rem] uppercase mb-8 tracking-tight">
                    NORTH SUMATERA
                </h1>

                {/* Map Section */}
                <div className="w-full mb-16 flex justify-center">
                    <img 
                        src={`${import.meta.env.BASE_URL}north sumatra 1 (1).png`}
                        alt="Map of North Sumatera"
                        className="w-full max-w-[850px] lg:max-w-[1000px] h-auto object-contain"
                        referrerPolicy="no-referrer"
                        onError={(e) => {
                            (e.target as HTMLImageElement).src = "https://placehold.co/1000x500/e0e5e1/4a5d4e?text=Map+of+North+Sumatera";
                        }}
                    />
                </div>

                {/* Product Columns */}
                <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
                    {northSumatraProducts.map((product, idx) => (
                        <div key={idx} className="flex flex-col">
                            <h3 className="font-display text-[20px] md:text-[24px] font-bold text-brand-green mb-4 tracking-wide">
                                {product.title}
                            </h3>
                            <div className="flex flex-col gap-5">
                                {product.details.map((detail, dIdx) => (
                                    <div key={dIdx} className="flex items-start gap-4 text-brand-green/80">
                                        <detail.icon className="w-[16px] h-[16px] shrink-0 mt-0.5 text-brand-green" strokeWidth={2} />
                                        <p className="font-sans font-medium text-[13px] md:text-[14px] leading-snug whitespace-pre-line">
                                            {detail.label}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Start Your Order Button */}
                <div className="flex justify-center mt-16 md:mt-24">
                    <Link 
                        to="/order" 
                        className="bg-[#485c49] text-white font-display text-[26px] md:text-[34px] px-8 py-1 md:px-10 md:py-1.5 rounded-full hover:bg-[#3d4d3e] transition-all duration-300 tracking-tight shadow-md"
                    >
                        START YOUR ORDER
                    </Link>
                </div>
            </section>
        </main>
    );
}
