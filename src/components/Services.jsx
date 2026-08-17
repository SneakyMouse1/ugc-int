import { motion } from 'motion/react';
import { Globe, Settings, Wrench, Wheat, Ship, Boxes } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: 'easeOut', delay: i * 0.09 }
  })
};

export default function Services() {
  const serviceItems = [
    {
      id: "trade",
      num: "01",
      title: "International Trade",
      icon: Globe,
      description: "We facilitate international procurement and supply operations, connecting buyers with verified suppliers across global markets. Our trade services cover sourcing strategy, supplier qualification, export documentation and payment coordination for cross-border transactions."
    },
    {
      id: "equipment",
      num: "02",
      title: "Equipment Supply",
      icon: Settings,
      description: "We supply industrial, agricultural and infrastructure equipment through an international network of manufacturers and distributors. Availability and specifications for specific equipment categories are provided upon request, based on current partner stock and production schedules."
    },
    {
      id: "parts",
      num: "03",
      title: "Spare Parts Supply",
      icon: Wrench,
      description: "We source and supply spare parts for agricultural machinery, industrial equipment and commercial vehicles. Parts availability and sourcing options are confirmed on a per-enquiry basis through our international supply network."
    },
    {
      id: "agri",
      num: "04",
      title: "Agricultural Machinery",
      icon: Wheat,
      description: "We supply tractors, combine harvesters, forage equipment and agricultural attachments for farming operations and agribusiness projects. Equipment options are available through our partner network; please submit an enquiry with specific requirements for availability confirmation."
    },
    {
      id: "logistics",
      num: "05",
      title: "Multimodal Logistics",
      icon: Ship,
      description: "We plan and execute freight movements combining sea, road, air and rail transport across international corridors. Our logistics operations include customs brokerage, port handling, inland transport and final-mile delivery coordination across all major global trade lanes."
    },
    {
      id: "oversized",
      num: "06",
      title: "Oversized & Project Cargo",
      icon: Boxes,
      description: "We manage the transport of heavy, oversized and non-standard freight, including industrial machinery, infrastructure components and capital equipment. Project cargo operations are planned on a case-by-case basis with route surveys, special permits and dedicated handling coordination."
    }
  ];

  return (
    <section id="services" className="py-24 bg-brand-green overflow-hidden">
      <div className="max-w-7xl mx-auto px-3 md:px-10">
        
        {/* Header */}
        <motion.div
          className="text-center max-w-180 mx-auto mb-20"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <p className="font-sans text-xs font-bold tracking-[0.2em] uppercase text-brand-gold-light mb-4">
            What We Do
          </p>
          <h2 className="font-serif text-heading-md md:text-heading-lg lg:text-heading-xl font-normal text-brand-white leading-none">
            Our Core Services
          </h2>
          <p className="font-sans text-body-md md:text-body-xl text-brand-white/80 mt-4 leading-relaxed font-light">
            From equipment sourcing to multimodal freight — we cover the full scope of international trade and supply chain requirements.
          </p>
        </motion.div>

        {/* 3x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceItems.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
                className="bg-brand-green-mid border border-brand-green-light/40 p-8 md:p-10 flex flex-col items-start text-left transition-all duration-300 hover:border-brand-gold hover:bg-brand-green-light/25 group shadow-sm"
              >
                {/* Icon */}
                <div className="mb-8">
                  <span className="text-brand-gold-light transition-transform duration-300 group-hover:scale-110">
                    <Icon size={32} className="stroke-[1.25px]" />
                  </span>
                </div>

                {/* Heading */}
                <h3 className="font-serif text-heading-xs md:text-heading-sm font-normal text-brand-white leading-tight mb-4">
                  <span className="font-sans text-body-md font-bold text-brand-gold mr-2 not-italic">{item.num}</span>{item.title}
                </h3>

                {/* Body */}
                <p className="font-sans text-body-sm md:text-body text-brand-white/75 leading-relaxed font-light mt-1">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
