import React, { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from '../components/Navbar.jsx'
import Hero from '../components/Hero.jsx'
import CategoryCards from '../components/CategoryCards.jsx'
import PricingSection from '../components/PricingSection.jsx'
import Gallery from '../components/Gallery.jsx'
import TestimonialsSection from '../components/TestimonialsSection.jsx'
import WhatsAppButton from '../components/WhatsAppButton.jsx'
import Footer from '../components/Footer.jsx'

/* Page-level transition wrapper */
function SectionReveal({ children, id }) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.section>
  )
}

/* Stats strip between hero and categories */
function StatsStrip() {
  const stats = [
    { value: '500+', label: 'Brides Adorned' },
    { value: '8+', label: 'Years of Artistry' },
    { value: '100%', label: 'Pure Henna' },
    { value: '5★', label: 'Client Rating' },
  ]
  return (
    <div className="bg-espresso py-8 border-y border-gold-400/10">
      <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 sm:grid-cols-4 gap-6">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            className="text-center"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.7 }}
          >
            <p className="font-display text-2xl sm:text-3xl text-gold-400 font-light">{s.value}</p>
            <p className="font-body text-[11px] text-cream-200/40 tracking-[0.2em] uppercase mt-1">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

/* Divider ornament */
function SectionDivider({ light = false }) {
  return (
    <div className={`py-10 flex items-center justify-center ${light ? 'bg-cream-50' : 'bg-cream-100'}`}>
      <div className="flex items-center gap-4">
        <div className="w-16 h-px bg-gradient-to-r from-transparent to-gold-400/40" />
        <span className="text-gold-400/60 text-xl font-display">✦</span>
        <div className="w-4 h-px bg-gold-400/30" />
        <span className="text-gold-300/40 text-base font-display">◆</span>
        <div className="w-4 h-px bg-gold-400/30" />
        <span className="text-gold-400/60 text-xl font-display">✦</span>
        <div className="w-16 h-px bg-gradient-to-l from-transparent to-gold-400/40" />
      </div>
    </div>
  )
}

/* Step indicator */
function StepIndicator({ current }) {
  const steps = ['Home', 'Category', 'Pricing', 'Gallery']
  return (
    <div className="fixed left-6 top-1/2 -translate-y-1/2 z-20 hidden lg:flex flex-col gap-3">
      {steps.map((step, i) => (
        <div key={step} className="flex items-center gap-2">
          <motion.div
            className="rounded-full"
            animate={{
              width: i === current ? 20 : 6,
              height: 6,
              background: i === current ? '#c49a2a' : 'rgba(196,154,42,0.3)',
            }}
            transition={{ duration: 0.4 }}
          />
          {i === current && (
            <motion.span
              className="font-body text-[10px] tracking-wider uppercase text-gold-400/70"
              initial={{ opacity: 0, x: -4 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              {step}
            </motion.span>
          )}
        </div>
      ))}
    </div>
  )
}

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [selectedPrice, setSelectedPrice] = useState(null)
  const pricingRef = useRef(null)
  const galleryRef = useRef(null)
  const categoryRef = useRef(null)

  const scrollTo = (ref) => {
    setTimeout(() => {
      ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 80)
  }

  const handleGallerySelect = (category, price) => {
    setSelectedCategory(category)
    setSelectedPrice(price)
    // Wait for AnimatePresence to mount the pricing section, then scroll
    setTimeout(() => {
      document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 350)
  }

  const handleCategorySelect = (cat) => {
    setSelectedCategory(cat)
    setSelectedPrice(null)
    scrollTo(pricingRef)
  }

  const handlePriceSelect = (price) => {
    setSelectedPrice(price)
    scrollTo(galleryRef)
  }

  const handleExplore = () => scrollTo(categoryRef)
  const handleHome = () => {
    setSelectedCategory(null)
    setSelectedPrice(null)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  /* Determine current step for indicator */
  const currentStep = selectedPrice ? 3 : selectedCategory ? 2 : 1

  return (
    <div className="min-h-screen">
      <Navbar onHome={handleHome} />
      <StepIndicator current={currentStep} />

      {/* Hero */}
      <Hero onExplore={handleExplore} />

      <StatsStrip />
      <SectionDivider />

      {/* Category */}
      <div ref={categoryRef} id="categories">
        <SectionReveal id="categories-inner">
          <CategoryCards onSelect={handleCategorySelect} />
        </SectionReveal>
      </div>

      {/* Pricing — appears after category selected */}
      <AnimatePresence>
        {selectedCategory && (
          <motion.div
            key={`pricing-${selectedCategory}`}
            ref={pricingRef}
            id="pricing"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
          >
            <SectionDivider light />
            <PricingSection category={selectedCategory} onSelect={handlePriceSelect} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Gallery — always visible */}
      <div ref={galleryRef} id="gallery">
        <SectionDivider />
        <Gallery selectedPrice={selectedPrice} onCategoryAndPriceSelect={handleGallerySelect} />
      </div>

      <SectionDivider light />

      {/* Testimonials */}
      <SectionReveal id="testimonials">
        <TestimonialsSection />
      </SectionReveal>

      <Footer />
      <WhatsAppButton />
    </div>
  )
}
