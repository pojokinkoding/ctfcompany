import { motion } from 'motion/react';

export default function AboutUs() {
  return (
    <main className="pt-[150px] pb-24 font-sans text-brand-green">
      
      {/* 1. ABOUT US Header & Banner */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 mb-20">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-display font-normal text-brand-green text-6xl md:text-7xl lg:text-[5.5rem] uppercase mb-8 tracking-tight"
        >
          ABOUT US
        </motion.h1>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="w-full rounded-2xl overflow-hidden aspect-[21/9] shadow-lg mb-24"
        >
          <img 
            src="https://picsum.photos/seed/coffee-greenhouse-banner/1600/700" 
            alt="Coffee drying facility"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        {/* WHO ARE WE */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display font-normal text-brand-green text-5xl md:text-6xl uppercase mb-8 tracking-tight">
              WHO ARE WE ?
            </h2>
            <div className="space-y-12 text-[17px] md:text-[19px] text-brand-green/90 leading-relaxed font-medium">
              <p>
                Coffee Trade Factory was born from a simple yet profound 
                belief: that coffee is more than a commodity it is a 
                language of connection.
              </p>
              <p>
                Driven by our passion for coffee & commitment to 
                excellence. We believe that great coffee has the power to 
                bring people together and enrich lives.
              </p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden shadow-lg aspect-[16/10]"
          >
            <img 
              src="https://picsum.photos/seed/coffee-greenhouse-sm/900/600" 
              alt="Coffee drying beds"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </section>

      {/* 2. OUR PORTFOLIO */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 mb-24 mt-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden shadow-lg aspect-[16/11] order-2 lg:order-1"
          >
            <img 
              src="https://picsum.photos/seed/coffee-greenhouse-side/900/650" 
              alt="Coffee greenhouse wide"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <h2 className="font-display font-normal text-brand-green text-5xl md:text-6xl lg:text-[4.5rem] uppercase mb-8 tracking-tight">
              OUR PORTFOLIO
            </h2>
            <p className="text-[16px] md:text-[18px] text-brand-green/90 leading-relaxed font-medium mb-12">
              We continue to expand our footprint across the world bridging 
              the gap between Indonesian heritage and global demand. 
              Highlighting our ability to properly source, process, & export 
              top-tier beans. We ensure that every partnership contributes to 
              a more sustainable & flavorful global coffee industry.
            </p>
            
            {/* Flags */}
            <div className="flex flex-wrap gap-x-10 gap-y-6 items-center">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full overflow-hidden border border-gray-200">
                  <img src="https://flagcdn.com/cn.svg" alt="China" className="w-full h-full object-cover" />
                </div>
                <span className="font-display text-2xl md:text-3xl font-bold uppercase text-brand-green tracking-wide">CHINA</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full overflow-hidden border border-gray-200">
                  <img src="https://flagcdn.com/th.svg" alt="Thailand" className="w-full h-full object-cover" />
                </div>
                <span className="font-display text-2xl md:text-3xl font-bold uppercase text-brand-green tracking-wide">THAILAND</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full overflow-hidden border border-gray-200">
                  <img src="https://flagcdn.com/ae.svg" alt="Dubai" className="w-full h-full object-cover" />
                </div>
                <span className="font-display text-2xl md:text-3xl font-bold uppercase text-brand-green tracking-wide">DUBAI</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h3 className="font-sans font-bold text-brand-green text-3xl md:text-4xl mb-6">Vision</h3>
            <p className="text-[17px] md:text-[19px] text-brand-green/90 leading-relaxed font-medium">
              We hope to gain recognition as the most trusted partner in 
              bridging between the world's palates with the flavors of 
              the Indonesian archipelago becoming the gold standard of 
              the industry.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
            <h3 className="font-sans font-bold text-brand-green text-3xl md:text-4xl mb-6">Mission</h3>
            <p className="text-[17px] md:text-[19px] text-brand-green/90 leading-relaxed font-medium">
              To showcase the rich diversity of Indonesian coffee & foster prosperity 
              for the farmers responsible behind such high-quality craftmanship. By 
              bringing their stories to the global stage & while maintaining a "Bean-
              to-Shipment" standard of perfection.
            </p>
          </motion.div>
        </div>

        {/* Two Images */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          <motion.div initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="rounded-2xl overflow-hidden aspect-[4/3]">
            <img src="https://picsum.photos/seed/coffee-cherries-pile/800/600" alt="Coffee cherries" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="rounded-2xl overflow-hidden aspect-[4/3]">
            <img src="https://picsum.photos/seed/lake-boat-id/800/600" alt="Lake in Indonesia" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          </motion.div>
        </div>
      </section>

      {/* 3. STRATEGIC GOAL */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 mb-24 mt-32">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
          <h2 className="font-display font-normal text-brand-green text-5xl md:text-6xl lg:text-[4.5rem] uppercase mb-6 tracking-tight">
            STRATEGIC GOAL
          </h2>
          <p className="text-[17px] md:text-[19px] text-brand-green/90 leading-relaxed max-w-3xl font-medium">
            We focus on bringing the taste of Indonesian coffee culture to the global coffee market & vice 
            versa through connections, sustainability, innovation & rigorous quality control.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-x-12 lg:gap-x-24 gap-y-12 mb-20">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h3 className="font-sans font-bold text-brand-green text-2xl md:text-3xl mb-4">Global Expansion</h3>
            <p className="text-[17px] md:text-[18px] text-brand-green/90 leading-relaxed">
              Establishing a robust distribution network across the 
              global landscape to make Indonesian coffee a staple in 
              specialty roasteries worldwide.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
            <h3 className="font-sans font-bold text-brand-green text-2xl md:text-3xl mb-4">Sustainable Sourcing</h3>
            <p className="text-[17px] md:text-[18px] text-brand-green/90 leading-relaxed">
              Implementing fully verifiable supply chains that 
              prioritize environmental stewardship & ethical labor 
              practices in their farms.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h3 className="font-sans font-bold text-brand-green text-2xl md:text-3xl mb-4">Quality Innovation</h3>
            <p className="text-[17px] md:text-[18px] text-brand-green/90 leading-relaxed">
              Utilizing state-of-the-art processing 
              technology to preserve the delicate flavor 
              profiles unique to Indonesian volcanic soil.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
            <h3 className="font-sans font-bold text-brand-green text-2xl md:text-3xl mb-4">Cultural Exchange</h3>
            <p className="text-[17px] md:text-[18px] text-brand-green/90 leading-relaxed">
              Enriching the local market with international trends, tastes 
              & techniques. While introducing the global scene to 
              Indonesia's exotics coffee flavors.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-full rounded-2xl overflow-hidden aspect-[21/9] shadow-lg"
        >
          <img 
            src="https://picsum.photos/seed/coffee-green-beans-branch/1600/700" 
            alt="Coffee branch with green cherries"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </section>

      {/* 4. STRATEGIC PARTNER */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 mb-24 mt-32">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 rounded-2xl overflow-hidden shadow-lg aspect-[4/5]"
          >
            <img 
              src="https://picsum.photos/seed/johan-kwe-portrait/800/1000" 
              alt="Johan Kwe"
              className="w-full h-full object-cover object-top"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <h2 className="font-display font-normal text-brand-green text-5xl md:text-6xl lg:text-[4.5rem] uppercase mb-8 tracking-tight">
              STRATEGIC PARTNER
            </h2>
            <div className="space-y-6 text-[15px] md:text-[16px] text-brand-green/90 leading-[1.7] font-medium">
              <p>
                <strong>Johan Kwe (陈光宗)</strong> is a coffee producer, educator & post-harvest specialist from Sumatra, 
                Indonesia. With over 10 years of experience in specialty coffee. A CQI-Texas A&M certified 
                Q Processing Expert, as well as a Q Processing & Q Arabica Grader Instructor & Q Robusta 
                Grader.
              </p>
              <p>
                Currently serving as Director at Simalem Specialty Coffee & Greenlot Coffee. Mr. Kwe 
                supports us by focusing on post-harvest improvements, export development & 
                connecting producers with the global market while also making coffee education more 
                accessible.
              </p>
              <p>
                Mr. Kwe has led CQI courses across Brazil, Thailand, Indonesia, China, PNG, Nepal, Timor 
                Leste, Laos, the Philippines & Russia. Collaborating with organizations like FairTrade ANZ, 
                ITC & ACDI/VOCA. As well also having contributed to SCA's The Value of Specialty Coffee 
                Cuppers & helped develop CQI's Q Processing Professional Robusta program.
              </p>
            </div>
          </motion.div>
        </div>

        {/* WHY PARTNER & ARTISANS */}
        <div className="space-y-16 lg:space-y-24 mt-20">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-16">
            <div className="lg:col-span-4">
              <h2 className="font-display font-normal text-brand-green text-4xl lg:text-5xl uppercase tracking-tight leading-[0.95]">
                WHY PARTNER <br/> WITH US
              </h2>
            </div>
            <div className="lg:col-span-8 flex items-center">
              <p className="font-sans font-bold text-brand-green/90 text-xl md:text-2xl lg:text-[1.75rem] leading-[1.5]">
                In the crowded global market, Coffee Trade Factory has the 
                homefield advantage as we understand the nuances of 
                navigating through the local coffee landscape. We are the 
                bridge that brings the best of Indonesia to the world & the 
                best of the world to Indonesia.
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 lg:gap-16">
            <div className="lg:col-span-4">
              <h2 className="font-display font-normal text-brand-green text-4xl lg:text-5xl uppercase tracking-tight leading-[0.95]">
                ARTISANS OF <br/> THE TRADE
              </h2>
            </div>
            <div className="lg:col-span-8 flex items-center">
              <p className="font-sans font-bold text-brand-green/90 text-xl md:text-2xl lg:text-[1.75rem] leading-[1.5]">
                Behind every bean is a dedicated collective of industry 
                experts, master cuppers & logistics specialists. At Coffee 
                Trade Factory, our team combines decades of local 
                agricultural knowledge with a deep understanding of the 
                global market trends.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. OUR Q GRADER TEAM */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 mt-32">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display font-normal text-brand-green text-4xl md:text-5xl uppercase mb-12 tracking-tight"
        >
          OUR Q GRADER TEAM
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-16">
          {[
            "JERRY THOMAS",
            "FERN TAN",
            "YENITA NG",
            "INDRA WIRAWAN",
            "ALFRED"
          ].map((name, i) => (
            <motion.div 
              key={name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="bg-[#E5E7EB] rounded-xl aspect-[4/5] w-full relative overflow-hidden mb-4 border border-gray-200 flex items-center justify-center">
                {/* SVG Placeholder for Avatar */}
                <svg className="w-1/2 h-1/2 text-gray-400 opacity-50" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="font-sans font-[800] text-brand-green text-lg md:text-xl uppercase tracking-wide">
                {name}
              </h3>
            </motion.div>
          ))}
        </div>
      </section>

    </main>
  );
}
