import { motion } from 'motion/react';

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: 'easeOut', delay: i * 0.1 }
  })
};

export default function Projects() {
  const cases = [
    {
      id: "case-01",
      title: "John Deere Agricultural Machinery",
      route: "Europe → East Africa",
      cargo: "12 John Deere tractors and agricultural attachments",
      mode: "Road + Sea Freight",
      description: "Supply and transportation of agricultural machinery for a large-scale farming project in East Africa. The project included export coordination, port handling and delivery prior to the planting season.",
      imageUrl: "https://images.unsplash.com/photo-1530900185557-124b1e8d10ee?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "case-02",
      title: "Krone Harvesting Equipment",
      route: "Germany → South America",
      cargo: "4 Krone forage harvesters and spare parts",
      mode: "Road + Ocean Freight",
      description: "International delivery of harvesting equipment for a commercial agricultural operation. The project required careful transport planning due to oversized dimensions and seasonal delivery deadlines.",
      imageUrl: "https://images.unsplash.com/photo-1550147760-44c9966d6bc7?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "case-03",
      title: "Power Generation Equipment",
      route: "Austria → Middle East",
      cargo: "2 gas-powered generation units",
      mode: "Road + Sea Freight",
      description: "Transportation of power generation equipment for an industrial infrastructure project. Scope included heavy-lift handling, customs coordination and multimodal logistics management.",
      imageUrl: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "case-04",
      title: "Adaptive Mobility Equipment",
      route: "Germany → Canada",
      cargo: "Racing wheelchairs and rehabilitation equipment",
      mode: "Air Freight",
      description: "Time-sensitive delivery of adaptive mobility equipment for sports and rehabilitation organizations. The shipment required protective packaging and priority cargo handling.",
      imageUrl: "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "case-05",
      title: "Premium Motorcycles",
      route: "Europe → North America",
      cargo: "18 Ducati Multistrada V4 motorcycles",
      mode: "Road + Container Shipping",
      description: "Export and transportation of premium motorcycles using custom transport frames and secure loading procedures. The project included export documentation and overseas delivery coordination.",
      imageUrl: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "case-06",
      title: "Medical Imaging Equipment",
      route: "USA → Middle East",
      cargo: "Medical imaging and diagnostic systems",
      mode: "Air Freight",
      description: "Air transportation of high-value medical equipment requiring specialized packaging, controlled handling procedures and accelerated delivery schedules.",
      imageUrl: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section id="projects" className="py-24 bg-brand-white border-t border-brand-stone overflow-hidden">
      <div className="max-w-7xl mx-auto px-3 md:px-10">
        
        {/* Section Header */}
        <motion.div
          className="text-center max-w-170 mx-auto mb-20"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <p className="font-sans text-xs font-bold tracking-[0.2em] uppercase text-brand-gold mb-4">
            Selected Projects
          </p>
          <h2 className="font-serif text-heading-md md:text-heading-lg lg:text-heading-xl font-normal text-brand-green leading-none">
            Representative Work
          </h2>
          <p className="font-sans text-body-md md:text-body-xl text-brand-slate mt-4 leading-relaxed font-light">
            A selection of international trade and logistics projects delivered across multiple sectors and geographies.
          </p>
        </motion.div>

        {/* 3x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cases.map((project, i) => (
            <motion.div
              key={project.id}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              className="bg-brand-white border border-brand-stone p-0 flex flex-col justify-between text-left group overflow-hidden h-full hover:border-brand-gold transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <div>
                {/* Image */}
                <div className="h-54 w-full overflow-hidden relative">
                  <img
                    src={project.imageUrl}
                    alt={`${project.title} - ${project.cargo}`}
                    className="w-full h-full object-cover transition-all duration-500 ease-out group-hover:scale-105 brightness-90 contrast-105 saturate-75 group-hover:brightness-95 group-hover:contrast-100"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                </div>

                {/* Card Body */}
                <div className="p-7">
                  <span className="font-sans text-label-sm font-bold uppercase tracking-[0.15em] text-brand-gold block mb-3">
                    {project.route}
                  </span>
                  <h3 className="font-serif text-heading-xs md:text-heading-sm font-normal text-brand-green leading-tight mb-4">
                    {project.title}
                  </h3>
                  <div className="space-y-3 border-b border-brand-stone/50 pb-4 mb-4">
                    <p className="font-sans text-body-xs text-brand-slate font-light">
                      <strong className="font-semibold text-brand-gold uppercase text-label-2xs tracking-[0.15em] block mb-1">Cargo</strong>
                      {project.cargo}
                    </p>
                    <p className="font-sans text-body-xs text-brand-slate font-light">
                      <strong className="font-semibold text-brand-gold uppercase text-label-2xs tracking-[0.15em] block mb-1">Mode</strong>
                      {project.mode}
                    </p>
                  </div>
                  <p className="font-sans text-body-sm md:text-body text-brand-slate leading-relaxed font-light">
                    {project.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
