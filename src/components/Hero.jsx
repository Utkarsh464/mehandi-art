import React, { useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const HERO_BG =
  'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=1600&q=90&auto=format'

/* Decorative SVG mandala */
function MandalaSVG({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 300 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="150" cy="150" r="148" stroke="rgba(196,154,42,0.18)" strokeWidth="0.8" />
      <circle cx="150" cy="150" r="120" stroke="rgba(196,154,42,0.14)" strokeWidth="0.6" />
      <circle cx="150" cy="150" r="90" stroke="rgba(196,154,42,0.18)" strokeWidth="0.6" />
      <circle cx="150" cy="150" r="60" stroke="rgba(196,154,42,0.22)" strokeWidth="0.8" />
      <circle cx="150" cy="150" r="30" stroke="rgba(196,154,42,0.28)" strokeWidth="1" />
      {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle) => (
        <line
          key={angle}
          x1="150"
          y1="2"
          x2="150"
          y2="148"
          stroke="rgba(196,154,42,0.1)"
          strokeWidth="0.5"
          transform={`rotate(${angle} 150 150)`}
        />
      ))}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
        <ellipse
          key={`p${angle}`}
          cx="150"
          cy="90"
          rx="6"
          ry="18"
          fill="rgba(196,154,42,0.12)"
          transform={`rotate(${angle} 150 150)`}
        />
      ))}
    </svg>
  )
}

export default function Hero({ onExplore }) {
  const ref = useRef(null)
  const { scrollY } = useScroll()
  const bgY = useTransform(scrollY, [0, 700], ['0%', '18%'])
  const textY = useTransform(scrollY, [0, 700], ['0%', '10%'])
  const opacity = useTransform(scrollY, [0, 500], [1, 0])

  return (
    <section
      ref={ref}
      className="relative w-full h-screen min-h-[650px] overflow-hidden flex items-center justify-center"
    >
      {/* ── Background image with parallax ── */}
      <motion.div
        className="absolute inset-0 w-full h-full"
        style={{ y: bgY }}
      >
        <div className="w-full h-[115%] -mt-[7.5%]">
          <img
            src={HERO_BG}
            alt="Bridal Mehndi"
            className="w-full h-full object-cover animate-slow-zoom"
            style={{ transformOrigin: 'center center' }}
          />
        </div>
      </motion.div>

      {/* ── Deep gradient overlays ── */}
      <div className="absolute inset-0 bg-gradient-to-b from-mehndi-900/70 via-espresso/55 to-mehndi-900/80" />
      <div className="absolute inset-0 bg-gradient-to-r from-mehndi-900/40 via-transparent to-mehndi-900/30" />

      {/* ── Floating mandala left ── */}
      <motion.div
        className="absolute -left-24 top-1/4 w-72 h-72 mandala-spin opacity-30 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ delay: 1.5, duration: 1.5 }}
      >
        <MandalaSVG />
      </motion.div>

      {/* ── Floating mandala right ── */}
      <motion.div
        className="absolute -right-20 bottom-1/4 w-56 h-56 opacity-20 pointer-events-none"
        style={{ animation: 'rotateSlow 80s linear infinite reverse' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ delay: 2, duration: 1.5 }}
      >
        <MandalaSVG />
      </motion.div>

      {/* ── Content ── */}
      <motion.div
        className="relative z-10 text-center px-6 max-w-4xl mx-auto"
        style={{ y: textY, opacity }}
      >
        {/* Tag line */}
        <motion.p
          className="section-tag text-gold-400 mb-6 tracking-[0.35em]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.9, ease: [0.23, 1, 0.32, 1] }}
        >
          ✦ &nbsp; Est. Kasganj, Uttar Pradesh &nbsp; ✦
        </motion.p>

        {/* Brand name */}
        <motion.h1
          className="font-display text-[clamp(3rem,10vw,7rem)] leading-[0.92] font-light tracking-tight mb-2"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1.1, ease: [0.23, 1, 0.32, 1] }}
        >
          <span className="text-cream-50 block">Khandwa</span>
          <span className="gold-shimmer block font-medium italic">Mehndi Art</span>
        </motion.h1>

        {/* Ornament */}
        <motion.div
          className="my-6 px-8"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          <div className="gold-divider" />
        </motion.div>

        {/* Subtitle */}
        <motion.p
          className="font-display italic text-[clamp(1rem,3vw,1.5rem)] text-gold-300/90 tracking-widest mb-10 font-light"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.9, ease: [0.23, 1, 0.32, 1] }}
        >
          Bridal &nbsp;•&nbsp; Party &nbsp;•&nbsp; Custom Designs
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.9, ease: [0.23, 1, 0.32, 1] }}
        >
          <motion.button
            onClick={onExplore}
            className="group relative overflow-hidden px-10 py-4 font-body font-medium text-sm tracking-[0.2em] uppercase text-espresso bg-gold-400 rounded-none border border-gold-400 transition-all duration-300"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="relative z-10">Explore Designs</span>
            <motion.div
              className="absolute inset-0 bg-gold-500"
              initial={{ x: '-100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.35, ease: [0.23, 1, 0.32, 1] }}
            />
          </motion.button>

          <motion.a
            href="https://wa.me/919548552170?text=Hi%2C%20I%20want%20to%20book%20mehndi"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 px-10 py-4 font-body font-medium text-sm tracking-[0.2em] uppercase text-cream-100 border border-cream-100/40 hover:border-gold-400/70 hover:text-gold-300 transition-all duration-300"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <WhatsAppIcon />
            Book on WhatsApp
          </motion.a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-cream-200/50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
        >
          <span className="text-xs tracking-[0.3em] uppercase font-body">Scroll</span>
          <motion.div
            className="w-px h-10 bg-gradient-to-b from-gold-400/60 to-transparent"
            animate={{ scaleY: [1, 0.5, 1], opacity: [0.6, 0.2, 0.6] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

function WhatsAppIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.534 5.855L.06 23.077a.75.75 0 00.922.925l5.392-1.444A11.938 11.938 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.713 9.713 0 01-5.073-1.423l-.363-.217-3.767 1.01 1.034-3.664-.237-.376A9.72 9.72 0 012.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z" />
    </svg>
  )
}
