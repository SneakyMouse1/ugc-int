import { motion } from 'motion/react';
import { Globe } from "lucide-react";

export default function Geography() {
  const directions = [
    {
      id: "europe",
      code: "UK-EUR",
      name: "Europe & United Kingdom",
      countries: "United Kingdom · Germany · Netherlands · Poland · Austria · France",
      hubs: ["London Heathrow (LHR)", "Rotterdam Port (RTM)", "Frankfurt (FRA)"],
      focus: "Consolidation & Compliance"
    },
    {
      id: "middle-east",
      code: "EUR-ME",
      name: "Middle East & Gulf",
      countries: "UAE · Saudi Arabia · Kuwait · Qatar · Oman · Jordan",
      hubs: ["Jebel Ali Port (DXB)", "Riyadh Dry Port (RUH)", "Doha Port (DOH)"],
      focus: "Industrial Capital Projects"
    },
    {
      id: "asia",
      code: "APAC-WEST",
      name: "Asia & Far East",
      countries: "China · South Korea · India · Japan · Singapore",
      hubs: ["Shanghai Port (PVG)", "Port of Singapore (SIN)", "Tokyo Airport (NRT)"],
      focus: "Sourcing & Ocean Freight"
    },
    {
      id: "na",
      code: "ATL-TRANS",
      name: "North America",
      countries: "United States · Canada · Mexico",
      hubs: ["New York (JFK)", "Port of Houston (IAH)", "Chicago O'Hare (ORD)"],
      focus: "Heavy Machinery & Air Cargo"
    },
    {
      id: "africa",
      code: "AFR-SOUTH",
      name: "African Continent",
      countries: "South Africa · Kenya · Tanzania · Ethiopia · Nigeria · Egypt",
      hubs: ["Johannesburg (JNB)", "Nairobi (NBO)", "Port of Durban (DUR)"],
      focus: "Mining & Infrastructure Supply"
    },
    {
      id: "sa",
      code: "LATAM-LNK",
      name: "South America",
      countries: "Brazil · Argentina · Chile · Colombia",
      hubs: ["Port of Santos (SSZ)", "Buenos Aires (EZE)", "El Dorado (BOG)"],
      focus: "Bulk Energy & Agriculture"
    }
  ];

  return (
    <section id="geography" className="py-24 bg-brand-offwhite border-t border-brand-stone">
      <div className="max-w-7xl mx-auto px-3 md:px-10">
        
        {/* Header Block */}
        <motion.div
          className="mb-16 text-left max-w-3xl"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <p className="font-sans text-xs font-bold tracking-[0.2em] uppercase text-brand-gold mb-4">
            Global Infrastructure
          </p>
          <h2 className="font-serif text-heading-md md:text-heading-lg lg:text-heading-xl font-normal text-brand-green leading-none mb-6">
            Our Trade Directions
          </h2>
          <p className="font-sans text-body-md md:text-body-xl text-brand-slate leading-relaxed font-light">
            Through established commercial agreements and local customs representation, UGC International operates active trade lanes linking major production regions to global development hubs.
          </p>
        </motion.div>

        {/* Trade Directions — full-width compact rows */}
        <div className="flex flex-col gap-2">
          {directions.map((dir, i) => (
            <motion.div
              key={dir.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, ease: 'easeOut', delay: i * 0.07 }}
              className="group grid grid-cols-1 md:grid-cols-[96px_260px_1fr_1fr_20px] items-center gap-x-6 gap-y-2 px-6 py-5 bg-brand-white border border-brand-stone hover:border-brand-gold/50 hover:bg-brand-sand/30 transition-colors duration-200"
            >
              {/* Col 1: code badge */}
              <span className="font-sans text-label-xs font-extrabold uppercase tracking-[0.18em] text-brand-gold bg-brand-sand px-2.5 py-1 border border-brand-stone/40 text-center shrink-0 w-fit">
                {dir.code}
              </span>

              {/* Col 2: name + focus */}
              <div>
                <h3 className="font-serif text-heading-xs font-bold text-brand-green leading-tight">
                  {dir.name}
                </h3>
                <span className="font-sans text-label-sm text-brand-gold font-semibold uppercase tracking-[0.12em] border-l-2 border-brand-gold pl-2 mt-1 block">
                  {dir.focus}
                </span>
              </div>

              {/* Col 3: countries */}
              <p className="font-sans text-label text-brand-slate font-light leading-relaxed hidden md:block">
                {dir.countries}
              </p>

              {/* Col 4: hubs */}
              <div className="hidden md:flex flex-wrap gap-x-2.5 gap-y-1 items-start">
                {dir.hubs.map((hub, index) => (
                  <span key={index} className="font-sans text-label-sm text-brand-slate/65 font-light">
                    {hub}{index < dir.hubs.length - 1 ? " ·" : ""}
                  </span>
                ))}
              </div>

              {/* Col 5: icon */}
              <div className="hidden md:block text-brand-stone/25 group-hover:text-brand-gold transition-colors duration-200 justify-self-end">
                <Globe size={14} className="stroke-[1.5px]" />
              </div>

              {/* Mobile: countries */}
              <p className="font-sans text-label text-brand-slate font-light md:hidden col-span-1">
                {dir.countries}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Disclaimer */}
        <div className="mt-12 text-left">
          <p className="text-xs text-brand-slate font-sans leading-relaxed max-w-3xl">
            * All transport times, container routing sequences, and local customs clearances are calculated dynamically based on cargo class, port state control constraints, and consignment packing specification lists. Custom routing configurations can be established during the initial quotation session.
          </p>
        </div>

      </div>
    </section>
  );
}
