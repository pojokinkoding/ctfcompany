import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <main className="pt-[150px] pb-20">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 mb-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-7xl leading-[0.95] mb-8 max-w-4xl relative">
            <span className="absolute -left-6 top-1 text-4xl opacity-50">“</span>
            SETTING THE STANDARD FOR QUALITY INDONESIA COFFEE DISTRIBUTION 
            <span className="inline-block align-top text-4xl opacity-50 ml-1">”</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="rounded-3xl overflow-hidden aspect-[16/7] shadow-xl"
        >
          <img 
            src="https://picsum.photos/seed/coffee-hero-1/1600/700" 
            alt="Ripening coffee cherries on branch"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </section>

      {/* Welcome Section */}
      <section className="max-w-7xl mx-auto px-6 mb-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl mb-6">WELCOME</h2>
            <p className="text-gray-600 leading-relaxed text-lg max-w-lg">
              Coffee Trade Factory bridges the finest quality of beans to coffee lovers both global & local. 
              Because we don't just move cargo; we curate experiences. Blending traditional Indonesian 
              craftsmanship with modern global standards, we ensure that every bean we export carries 
              the spirit of its origins & the rich stories of our heritage.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden aspect-[4/3] md:aspect-[3/2] shadow-lg"
          >
            <img 
              src="https://picsum.photos/seed/coffee-welcome-1/900/600" 
              alt="Coffee warehouse or greenhouse"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </section>

      {/* Action Cards */}
      <section className="max-w-7xl mx-auto px-6 mb-20">
        <div className="grid md:grid-cols-2 gap-6">
          <Link to="/about" className="block">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group relative rounded-2xl overflow-hidden aspect-[4/3] cursor-pointer"
            >
              <img 
                src="https://picsum.photos/seed/coffee-about-1/1000/750" 
                alt="About us coffee processing"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/30 flex items-end p-8">
                <h3 className="text-white text-6xl m-0 drop-shadow-lg">ABOUT US</h3>
              </div>
            </motion.div>
          </Link>

          <Link to="/product" className="block">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="group relative rounded-2xl overflow-hidden aspect-[4/3] cursor-pointer"
            >
              <img 
                src="https://picsum.photos/seed/coffee-product-1/1000/750" 
                alt="Our product coffee cherries"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/30 flex items-end p-8">
                <h3 className="text-white text-6xl m-0 drop-shadow-lg">OUR PRODUCT</h3>
              </div>
            </motion.div>
          </Link>
        </div>
      </section>
    </main>
  );
}
