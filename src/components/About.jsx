import { motion } from 'motion/react';

export default function About() {
  const stats = [
    { value: "6", label: "Continents Covered" },
    { value: "40+", label: "Countries of Operation" },
    { value: "15+", label: "Years of Trade Experience" },
    { value: "200+", label: "Projects Delivered" }
  ];

  return (
    <section id="about" className="py-24 bg-brand-offwhite border-t border-brand-stone overflow-hidden">
      <div className="max-w-7xl mx-auto px-3 md:px-10">
        
        {/* About Info Layout (Grid split) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column */}
          <motion.div
            className="lg:col-span-12 xl:col-span-5 border-l-2 border-brand-gold pl-6 flex flex-col items-start text-left"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <p className="font-sans text-xs font-bold tracking-[0.2em] uppercase text-brand-gold mb-3">
              About the Company
            </p>
            
            <h2 className="font-serif text-heading-md md:text-heading-lg lg:text-heading-xl font-normal text-brand-green leading-[1.15] tracking-tight">
              Global Trade &<br />Logistics Partner
            </h2>
          </motion.div>

          {/* Right Column: Statement body */}
          <motion.div
            className="lg:col-span-12 xl:col-span-7 flex flex-col gap-6 text-left font-sans text-base md:text-body-lg text-brand-slate leading-relaxed font-light"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
          >
            <p className="font-medium text-brand-green text-body-xl leading-relaxed">
              UGC International is an international trade and logistics company based in the United Kingdom, operating across six continents with a focus on equipment supply, industrial sourcing and multimodal logistics solutions.
            </p>
            <p>
              We work with manufacturers, importers, exporters and project owners who require reliable access to international markets, complex supply chains and time-critical deliveries.
            </p>
            <p>
              Our areas of expertise include the supply of agricultural machinery, industrial equipment, spare parts, commercial vehicles and power infrastructure assets. We coordinate multimodal transport operations across sea, road, air and rail, including project cargo and oversized freight movements.
            </p>
            <p className="border-l-2 border-brand-gold-light pl-6 my-2 text-brand-green-mid/90 italic font-serif text-body-xl leading-relaxed">
              We do not position ourselves as a conventional freight forwarder. We act as a trade and logistics partner — sourcing equipment through an international network of suppliers and manufacturers, managing documentation and export coordination, and ensuring delivery to the final destination regardless of complexity or geography.
            </p>
            <p>
              Our clients include agribusiness operators, infrastructure developers, equipment dealers and procurement departments with international supply requirements.
            </p>
          </motion.div>

        </div>

        {/* Statistics Bar */}
        <div className="mt-20 border-t border-brand-stone pt-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-brand-stone">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, ease: 'easeOut', delay: idx * 0.1 }}
                className={`flex flex-col items-center justify-center text-center ${
                  idx >= 2 ? 'pt-6 md:pt-0' : 'pb-4 md:pb-0'
                } md:px-4`}
              >
                <span className="font-serif text-heading-lg md:text-heading-xl font-normal text-brand-green leading-none mb-2">
                  {stat.value}
                </span>
                <span className="font-sans text-label-sm font-medium uppercase tracking-widest text-brand-slate">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
