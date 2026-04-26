import { motion } from 'motion/react';
import { Phone, Mail, MapPin, MessageSquare } from 'lucide-react';

export default function Contact() {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone & WhatsApp",
      value: "+62 877 8573 7638",
      link: "https://wa.me/6287785737638",
      label: "Send a message"
    },
    {
      icon: Mail,
      title: "Email Address",
      value: "info@ctfcompany.com",
      link: "mailto:info@ctfcompany.com",
      label: "Drop us a line"
    },
    {
      icon: MapPin,
      title: "Our Office",
      value: "Blessindo Industrial Estate, Blok F no 67, Jl. Raya H. Tabri, Bojongkamal, Kec. Legok, Kabupaten Tangerang, Banten 15820, Indonesia",
      link: "https://maps.google.com/?q=Blessindo+Industrial+Estate+Blok+F+no+67",
      label: "Find us on map"
    }
  ];

  return (
    <main className="pt-[150px] pb-24 font-sans text-brand-green">
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h1 className="font-display text-[3.5rem] md:text-[5rem] lg:text-[6.5rem] uppercase mb-6 tracking-tight leading-none">
            CONTACT US
          </h1>
          <p className="max-w-2xl mx-auto text-[16px] md:text-[18px] text-brand-green/80 font-medium">
            Have questions about our beans or want to discuss a partnership? 
            Reach out to us through any of the channels below.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 max-w-[1200px] mx-auto">
          {contactInfo.map((info, idx) => (
            <motion.a
              key={idx}
              href={info.link}
              target={info.icon === MapPin || info.icon === Phone ? "_blank" : undefined}
              rel={info.icon === MapPin || info.icon === Phone ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="group flex flex-col items-center p-8 md:p-12 rounded-3xl bg-brand-green/5 hover:bg-brand-green/10 transition-all duration-500 border border-brand-green/10 hover:border-brand-green/20"
            >
              <div className="w-16 h-16 rounded-2xl bg-brand-green flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 shadow-lg">
                <info.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="font-display text-2xl uppercase mb-3 tracking-wide">
                {info.title}
              </h3>
              
              <p className="text-center font-medium text-brand-green/90 mb-6 leading-relaxed">
                {info.value}
              </p>
              
              <span className="text-[14px] font-bold uppercase tracking-widest text-brand-green/60 group-hover:text-brand-green transition-colors duration-300">
                {info.label} →
              </span>
            </motion.a>
          ))}
        </div>

        {/* Optional: Simple FAQ or secondary message */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-24 text-center p-12 rounded-3xl border-2 border-dashed border-brand-green/20 max-w-[800px] mx-auto"
        >
          <MessageSquare className="w-10 h-10 text-brand-green/40 mx-auto mb-6" />
          <h4 className="font-display text-2xl uppercase mb-2">Direct Inquiry?</h4>
          <p className="text-brand-green/70">
            For wholesale inquiries and specific trade requests, our team typically responds within 24 business hours.
          </p>
        </motion.div>

      </section>
    </main>
  );
}
