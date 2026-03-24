import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const TESTIMONIALS = [
  {
    name: 'Priya Sharma',
    event: 'Bridal Mehndi — 2024',
    quote: 'Absolutely breathtaking work. My wedding mehndi was everything I dreamed of and more. The intricate patterns and attention to detail were beyond expectations.',
    stars: 5,
  },
  {
    name: 'Anjali Gupta',
    event: 'Karva Chauth — 2024',
    quote: 'The most beautiful mehndi I have ever seen. Every pattern told a story, and the artist was so patient and skilled. Highly recommend to every bride.',
    stars: 5,
  },
  {
    name: 'Ritu Verma',
    event: 'Party Mehndi — 2023',
    quote: 'Professional, punctual, and pure artistry. The henna paste was fresh and the colour turned out a deep, rich red. Will book again for my sister\'s wedding!',
    stars: 5,
  },
]

export default function TestimonialsSection() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setActive((p) => (p + 1) % TESTIMONIALS.length), 5000)
    return () => clearInterval(t)
  }, [])

  return (
    <section className="relative py-24 overflow-hidden bg-mehndi-900/95">
      {/* Background texture */}
      <div className="absolute inset-0 pointer-events-none opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle at 50% 50%, rgba(196,154,42,0.4), transparent 60%)`,
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="section-tag text-gold-400/70 mb-4">Client Love</p>
          <h2 className="font-display text-[clamp(2rem,5vw,3.5rem)] text-cream-50 font-light italic mb-12">
            What Brides Say
          </h2>
        </motion.div>

        {/* Quote */}
        <div className="relative min-h-[180px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
              className="absolute inset-0 flex flex-col items-center justify-center"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {Array.from({ length: TESTIMONIALS[active].stars }).map((_, i) => (
                  <span key={i} className="text-gold-400 text-sm">★</span>
                ))}
              </div>
              {/* Quote mark */}
              <div className="font-display text-6xl text-gold-400/20 leading-none mb-2 -mt-3">"</div>
              <p className="font-display italic text-lg sm:text-xl text-cream-100/80 leading-relaxed max-w-xl">
                {TESTIMONIALS[active].quote}
              </p>
              <div className="mt-6">
                <p className="font-body text-sm text-cream-50/90 font-medium">{TESTIMONIALS[active].name}</p>
                <p className="font-body text-xs text-gold-400/60 tracking-wider mt-1">{TESTIMONIALS[active].event}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className="transition-all duration-300"
            >
              <motion.div
                className="rounded-full bg-gold-400"
                animate={{ width: i === active ? 24 : 6, height: 6 }}
                transition={{ duration: 0.3 }}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
