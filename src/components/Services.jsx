// Services Section Component – Premium Grid of Dance Offerings
import React from 'react';
import { motion } from 'framer-motion';
import { featuredStyles } from '../pages/Home.jsx'; // Reuse data



const ease = [0.16, 1, 0.3, 1];

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-48 bg-luxury-black relative overflow-hidden">
      {/* Ambient glow for visual depth */}
      <div className="glow-ambient animate-float-glow w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] -top-12 right-12 opacity-30" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 1.5, ease }}
          className="space-y-8 text-center"
        >
          <h2 className="font-serif text-[clamp(2rem,6vw,4rem)] text-luxury-white font-light tracking-tight">
            Our <span className="italic text-luxury-muted">Disciplines</span>
          </h2>
          <p className="font-sans text-luxury-muted max-w-2xl mx-auto text-base md:text-lg">
            Explore the range of classes we offer – from choreography to kid‑friendly dance, from high‑energy Zumba to expressive hip‑hop.
          </p>
        </motion.div>

        {/* Grid of service cards */}
        <motion.div
          className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.1 }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.12 } },
          }}
        >
          {featuredStyles.map((style, idx) => (
            <motion.div
              key={style.title}
              className="relative rounded-xl bg-luxury-black/60 backdrop-blur-xl border border-luxury-border/30 p-6 overflow-hidden group hover:border-luxury-gold/50 transition-all duration-500"
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0, transition: { duration: 0.8, ease } },
              }}
            >
              {/* Decorative overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-luxury-black/30 via-transparent to-luxury-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <img
                src={style.image}
                alt={style.title}
                className="w-full h-48 object-cover rounded-md mb-4 transition-transform duration-500 group-hover:scale-105"
                onError={(e) => {
                  e.currentTarget.src = 'https://images.unsplash.com/photo-1547153760-18fc86324498?q=80&w=800&auto=format&fit=crop';
                }}
              />
              <h3 className="font-serif text-lg text-luxury-white mb-2">{style.title}</h3>
              <p className="text-xs text-luxury-muted mb-2 line-clamp-2">{style.desc}</p>
              <div className="flex items-center justify-between text-[0.75rem] text-luxury-muted mt-4">
                <span className="flex items-center gap-1">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
                  {style.schedule}
                </span>
                <span className="flex items-center gap-1">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
                  {style.mentor}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
