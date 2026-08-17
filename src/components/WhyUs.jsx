import { motion } from 'motion/react';
import { Globe, Shield, RefreshCw } from 'lucide-react';

export default function WhyUs() {
  const differentiators = [
    {
      title: "International Network",
      icon: Globe,
      description: "Access to suppliers, manufacturers and logistics partners across 40+ countries."
    },
    {
      title: "Equipment Expertise",
      icon: Shield,
      description: "Sector knowledge across agricultural, industrial and infrastructure equipment categories."
    },
    {
      title: "Coordinated Delivery",
      icon: RefreshCw,
      description: "From sourcing and export documentation through to final delivery, managed under one point of contact."
    }
  ];

  return (
    <section id="why-us" className="py-24 bg-brand-sand border-t border-brand-stone overflow-hidden">
      <div className="max-w-7xl mx-auto px-3 md:px-10">

        {/* Content */}
        <motion.div
          className="max-w-240 mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <p className="font-sans text-xs font-bold tracking-[0.2em] uppercase text-brand-gold mb-4">
            Our Approach
          </p>
          <h2 className="font-serif text-heading-md md:text-heading-lg lg:text-heading-xl font-normal text-brand-green leading-none mb-8">
            More Than a Logistics Provider
          </h2>
          <div className="font-sans text-base md:text-body-lg text-brand-slate leading-relaxed font-light space-y-6">
            <p className="font-medium text-brand-green text-body-xl leading-relaxed">
              We do not simply move cargo. We act as a trade and logistics partner — advising on sourcing options, managing supplier relationships and coordinating delivery for complex international requirements.
            </p>
            <p className="text-brand-slate/85 text-sm md:text-base font-light">
              Our clients benefit from access to an established international network, experienced operations teams and a structured approach to documentation, customs and compliance. Whether the requirement is a single equipment consignment or an ongoing supply programme, we apply the same standards of planning and execution.
            </p>
          </div>
        </motion.div>

        {/* Cards */}
        <div className="mt-16 border-t border-brand-stone pt-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {differentiators.map((diff, i) => {
              const IconComponent = diff.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.55, ease: 'easeOut', delay: i * 0.12 }}
                  className="flex flex-col items-center text-center bg-brand-white border border-brand-stone px-10 py-12 hover:border-brand-gold/50 hover:shadow-md transition-all duration-300"
                >
                  {/* Icon */}
                  <motion.div
                    className="w-14 h-14 bg-brand-gold flex items-center justify-center mb-7 shrink-0"
                    initial={{ scale: 0.7, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, ease: 'easeOut', delay: i * 0.12 + 0.2 }}
                  >
                    <IconComponent size={26} className="stroke-[1.75px] text-white" />
                  </motion.div>

                  <h3 className="font-serif text-heading-sm font-normal text-brand-green tracking-wide mb-4">
                    {diff.title}
                  </h3>
                  <p className="font-sans text-body text-brand-slate font-light leading-relaxed max-w-75">
                    {diff.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
