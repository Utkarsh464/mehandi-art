import React, { useState } from 'react'
import { motion } from 'framer-motion'
import handMehndiImg from '../assets/gallery/mehndi2.jpeg'
import feetMehndiImg from '../assets/gallery/mehndi5.jpeg'

const CATEGORIES = [
  {
    id: 'hand',
    label: 'Hand Mehndi',
    sublabel: 'Bridal & Decorative',
    description: 'Intricate bridal patterns, Arabic styles, and contemporary fusion designs crafted with the finest henna.',
    image: handMehndiImg,
    accent: 'Palm & Back of Hand',
    icon: '✋',
  },
  {
    id: 'feet',
    label: 'Feet Mehndi',
    sublabel: 'Traditional & Modern',
    description: 'Elegant feet adornments perfect for brides and ceremonies, from delicate vines to bold geometric work.',
    image: feetMehndiImg,
    accent: 'Ankles & Soles',
    icon: '🦶',
  },
]

function CategoryCard({ category, onSelect, index }) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      className="relative w-full cursor-pointer"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ delay: index * 0.15, duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
      whileTap={{ scale: 0.98 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => onSelect(category.id)}
    >
      <motion.div
        className="relative overflow-hidden h-[520px] sm:h-[580px]"
        animate={{
          boxShadow: hovered
            ? '0 24px 60px rgba(44,24,16,0.22), 0 0 0 1px rgba(196,154,42,0.4)'
            : '0 4px 20px rgba(44,24,16,0.1), 0 0 0 1px rgba(196,154,42,0.1)',
        }}
        transition={{ duration: 0.4 }}
      >
        {/* Image */}
        <motion.img
          src={category.image}
          alt={category.label}
          className="absolute inset-0 w-full h-full object-cover"
          animate={{ scale: hovered ? 1.06 : 1 }}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-mehndi-900/90 via-espresso/35 to-transparent" />

        {/* Gold inset border on hover */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.35 }}
          style={{ boxShadow: 'inset 0 0 0 1px rgba(196,154,42,0.45)' }}
        />

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-10">
          <motion.div
            animate={{ y: hovered ? -6 : 0 }}
            transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
          >
            <p className="section-tag text-gold-300/80 mb-3 text-xs">
              {category.sublabel} &nbsp;·&nbsp; {category.accent}
            </p>
            <h3 className="font-display text-4xl sm:text-5xl text-cream-50 font-light leading-tight mb-3">
              {category.label}
            </h3>
            <div className="gold-divider mb-4 w-16" />
            <motion.p
              className="font-body text-cream-200/70 text-sm leading-relaxed mb-6 max-w-xs"
              animate={{ opacity: hovered ? 1 : 0.7 }}
              transition={{ duration: 0.3 }}
            >
              {category.description}
            </motion.p>
          </motion.div>

          {/* CTA */}
          <motion.div
            className="flex items-center gap-3"
            animate={{ y: hovered ? 0 : 8, opacity: hovered ? 1 : 0.6 }}
            transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
          >
            <span className="font-body text-xs tracking-[0.25em] uppercase text-gold-300">
              View Pricing
            </span>
            <motion.div
              className="h-px bg-gold-400"
              animate={{ width: hovered ? 48 : 24 }}
              transition={{ duration: 0.4 }}
            />
            <span className="text-gold-400 text-sm">→</span>
          </motion.div>
        </div>

        {/* Corner ornament */}
        <div className="absolute top-6 right-6">
          <motion.div
            className="w-8 h-8 border border-gold-400/40 flex items-center justify-center"
            animate={{ borderColor: hovered ? 'rgba(196,154,42,0.75)' : 'rgba(196,154,42,0.4)' }}
            transition={{ duration: 0.3 }}
          >
            <span className="text-base">{category.icon}</span>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function CategoryCards({ onSelect }) {
  return (
    <section className="relative py-24 sm:py-32 bg-cream-100 mesh-bg overflow-hidden">
      <div className="absolute inset-0 noise-overlay pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
        >
          <p className="section-tag mb-4">Select Category</p>
          <h2 className="font-display text-[clamp(2.5rem,6vw,4.5rem)] text-espresso font-light leading-tight">
            Choose Your&nbsp;
            <span className="italic text-sienna">Canvas</span>
          </h2>
          <div className="ornament mt-5 max-w-xs mx-auto">
            <span className="text-gold-400 text-xs">✦</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {CATEGORIES.map((cat, i) => (
            <CategoryCard key={cat.id} category={cat} onSelect={onSelect} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
