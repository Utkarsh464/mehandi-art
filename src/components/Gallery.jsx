import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import mehndi4 from '../assets/gallery/mehndi4.jpeg'
import mehndi1 from '../assets/gallery/mehndi1.jpeg'
import mehndi6 from '../assets/gallery/mehndi6.jpeg'
import mehndi3 from '../assets/gallery/mehndi3.jpeg'
import mehndi5 from '../assets/gallery/mehndi5.jpeg'
import mehndi2 from '../assets/gallery/mehndi2.jpeg'

// category + price tag lets clicking redirect to the right pricing tier
const GALLERY_IMAGES = [
  { id: 1,  src: mehndi3,   label: 'Temple & Peacock',        style: 'Mughal Inspired',      category: 'hand', price: 10000, tier: 'Crown' },
  { id: 2,  src: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=700&q=85&auto=format', label: 'Arabic Florals', style: 'Contemporary Arabic', category: 'hand', price: 3500, tier: 'Silver' },
  { id: 3,  src: mehndi1,   label: 'Royal Elephant Full Hand', style: 'Traditional Bridal',  category: 'hand', price: 8000, tier: 'Diamond' },
  { id: 4,  src: 'https://images.unsplash.com/photo-1597248881519-db089d9f8e2f?w=700&q=85&auto=format', label: 'Bridal Full Hand', style: 'Rajasthani Fusion', category: 'hand', price: 6500, tier: 'Platinum' },
  { id: 5,  src: mehndi6,   label: 'Elephant Procession',     style: 'Heritage Rajasthani',  category: 'hand', price: 10000, tier: 'Crown' },
  { id: 6,  src: 'https://images.unsplash.com/photo-1559538360-9d2975d70d59?w=700&q=85&auto=format', label: 'Geometric Lines', style: 'Modern Minimal', category: 'feet', price: 3500, tier: 'Silver' },
  { id: 7,  src: mehndi4,   label: 'Peacock Bridal',          style: 'Rajasthani Bridal',    category: 'hand', price: 6500, tier: 'Platinum' },
  { id: 8,  src: 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=700&q=85&auto=format', label: 'Feet Elegance', style: 'Traditional Bridal', category: 'feet', price: 6500, tier: 'Platinum' },
  { id: 9,  src: mehndi5,   label: 'Bride Portrait',          style: 'Portrait Mehndi',      category: 'feet', price: 8000, tier: 'Diamond' },
  { id: 10, src: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=700&q=85&auto=format', label: 'Heritage Patterns', style: 'Mughal Inspired', category: 'feet', price: 5000, tier: 'Gold' },
  { id: 11, src: mehndi2,   label: 'Peacock Full Arm',        style: 'Contemporary Fusion',  category: 'hand', price: 5000, tier: 'Gold' },
  { id: 12, src: 'https://images.unsplash.com/photo-1591208813429-680a62f5777c?w=700&q=85&auto=format', label: 'Floral Back Hand', style: 'Indo-Arabic', category: 'hand', price: 5000, tier: 'Gold' },
]

function GalleryCard({ image, index, onOpen }) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      className="relative overflow-hidden cursor-pointer"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ delay: index * 0.07, duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
      whileTap={{ scale: 0.98 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => onOpen(image)}
    >
      <motion.div
        className="relative overflow-hidden"
        animate={{
          boxShadow: hovered
            ? '0 20px 50px rgba(44,24,16,0.18), 0 0 0 1px rgba(196,154,42,0.35)'
            : '0 4px 20px rgba(44,24,16,0.08)',
        }}
        transition={{ duration: 0.4 }}
      >
        {/* Image */}
        <motion.img
          src={image.src}
          alt={image.label}
          className="w-full h-72 sm:h-80 object-cover"
          animate={{ scale: hovered ? 1.06 : 1 }}
          transition={{ duration: 0.75, ease: [0.23, 1, 0.32, 1] }}
          loading="lazy"
        />

        {/* Gradient */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-mehndi-900/80 via-transparent to-transparent"
          animate={{ opacity: hovered ? 1 : 0.6 }}
          transition={{ duration: 0.4 }}
        />

        {/* Gold shimmer line */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold-400 to-transparent"
          animate={{ scaleX: hovered ? 1 : 0, opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.4 }}
          style={{ originX: '50%' }}
        />

        {/* Info */}
        <div className="absolute bottom-0 left-0 right-0 p-5">
          <motion.div
            animate={{ y: hovered ? 0 : 6, opacity: hovered ? 1 : 0.85 }}
            transition={{ duration: 0.35 }}
          >
            <p className="font-body text-[10px] tracking-[0.25em] uppercase text-gold-300/80 mb-1">
              {image.style} &nbsp;·&nbsp; {image.tier}
            </p>
            <p className="font-display text-lg text-cream-50 italic font-light">{image.label}</p>
          </motion.div>
        </div>

        {/* View icon */}
        <motion.div
          className="absolute top-4 right-4 w-9 h-9 border border-gold-400/50 flex items-center justify-center bg-espresso/30 backdrop-blur-sm"
          animate={{ opacity: hovered ? 1 : 0, scale: hovered ? 1 : 0.8 }}
          transition={{ duration: 0.3 }}
        >
          <span className="text-gold-300 text-sm">+</span>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

/* Lightbox */
function Lightbox({ image, onClose, onViewPricing }) {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-mehndi-900/92 backdrop-blur-sm" />
      <motion.div
        className="relative max-w-2xl w-full"
        initial={{ scale: 0.9, y: 30 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.95, y: 20 }}
        transition={{ duration: 0.45, ease: [0.23, 1, 0.32, 1] }}
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={image.src}
          alt={image.label}
          className="w-full object-cover max-h-[70vh]"
          style={{ boxShadow: '0 0 0 1px rgba(196,154,42,0.3), 0 40px 80px rgba(0,0,0,0.5)' }}
        />
        <div className="mt-4 text-center">
          <p className="font-body text-[10px] tracking-[0.3em] uppercase text-gold-400/70 mb-1">
            {image.style} &nbsp;·&nbsp; {image.tier} Tier
          </p>
          <p className="font-display text-xl text-cream-50 italic">{image.label}</p>
        </div>

        {/* Close */}
        <button
          onClick={onClose}
          className="absolute -top-4 -right-4 w-10 h-10 bg-gold-400 text-espresso flex items-center justify-center text-lg font-light hover:bg-gold-500 transition-colors"
        >
          ×
        </button>

        {/* CTAs */}
        <div className="mt-5 flex flex-col sm:flex-row gap-3">
          <motion.button
            onClick={onViewPricing}
            className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gold-400 text-espresso font-body text-xs tracking-[0.2em] uppercase hover:bg-gold-500 transition-colors"
            whileTap={{ scale: 0.97 }}
          >
            See {image.tier} Pricing →
          </motion.button>
          <motion.a
            href={`https://wa.me/919548552170?text=Hi%2C%20I%20love%20the%20${encodeURIComponent(image.label)}%20design!%20I%20want%20to%20book%20the%20${encodeURIComponent(image.tier)}%20package.`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 px-6 py-3 border border-gold-400/50 text-gold-300 font-body text-xs tracking-[0.2em] uppercase hover:border-gold-400 transition-colors"
            whileTap={{ scale: 0.97 }}
          >
            Book on WhatsApp
          </motion.a>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function Gallery({ selectedPrice, onCategoryAndPriceSelect }) {
  const [lightbox, setLightbox] = useState(null)

  const handleViewPricing = (image) => {
    setLightbox(null)
    if (onCategoryAndPriceSelect) {
      onCategoryAndPriceSelect(image.category, image.price)
    }
    // Small delay so state updates before scroll
    setTimeout(() => {
      document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 150)
  }

  return (
    <section className="relative py-24 sm:py-32 bg-cream-100 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-400/25 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        {/* Heading */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
        >
          <p className="section-tag mb-4">
            {selectedPrice ? `₹${selectedPrice.toLocaleString('en-IN')} Package` : 'Our Portfolio'} &nbsp;·&nbsp; Gallery
          </p>
          <h2 className="font-display text-[clamp(2.2rem,5vw,4rem)] text-espresso font-light leading-tight">
            Design&nbsp;<span className="italic gold-shimmer">Inspirations</span>
          </h2>
          <p className="font-body text-sm text-espresso/50 mt-4 max-w-sm mx-auto">
            Tap any design to explore its pricing tier and book your appointment.
          </p>
          <div className="ornament mt-6 max-w-xs mx-auto">
            <span className="text-gold-400 text-xs">✦</span>
          </div>
        </motion.div>

        {/* Grid — staggered fade+slide */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 xl:gap-6">
          {GALLERY_IMAGES.map((img, i) => (
            <GalleryCard key={img.id} image={img} index={i} onOpen={setLightbox} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          <p className="font-display italic text-xl text-espresso/60 mb-6">
            Loved what you see?
          </p>
          <a
            href="https://wa.me/919548552170?text=Hi%2C%20I%20want%20to%20book%20mehndi"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.button
              className="px-12 py-4 bg-espresso text-cream-100 font-body text-sm tracking-[0.25em] uppercase hover:bg-mehndi transition-colors duration-300"
              whileTap={{ scale: 0.97 }}
            >
              Book Your Appointment
            </motion.button>
          </a>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <Lightbox
            image={lightbox}
            onClose={() => setLightbox(null)}
            onViewPricing={() => handleViewPricing(lightbox)}
          />
        )}
      </AnimatePresence>
    </section>
  )
}
