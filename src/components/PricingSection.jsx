import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const PRICING = {
  hand: [
    {
      tier: 'Silver',
      price: 3500,
      label: 'Simple Grace',
      features: ['Arabic single hand', 'Up to 45 minutes', 'Floral & vine patterns', 'Basic bridal starter'],
      icon: '◇',
      popular: false,
    },
    {
      tier: 'Gold',
      price: 5000,
      label: 'Classic Bridal',
      features: ['Both hands full', 'Up to 75 minutes', 'Traditional motifs', 'Peacock & mango patterns'],
      icon: '◈',
      popular: false,
    },
    {
      tier: 'Platinum',
      price: 6500,
      label: 'Royal Elegance',
      features: ['Both hands & wrists', 'Up to 100 minutes', 'Fine-line artwork', 'Custom name hidden in design'],
      icon: '✦',
      popular: true,
    },
    {
      tier: 'Diamond',
      price: 8000,
      label: 'Grand Bridal',
      features: ['Full arm coverage', 'Up to 2.5 hours', 'Intricate jali work', 'Portrait elements optional'],
      icon: '◆',
      popular: false,
    },
    {
      tier: 'Crown',
      price: 10000,
      label: 'Maharani Special',
      features: ['Full bridal package', 'Unlimited time', 'Signature exclusive design', 'Touch-up included'],
      icon: '♛',
      popular: false,
    },
  ],
  feet: [
    {
      tier: 'Silver',
      price: 3500,
      label: 'Dainty Anklet',
      features: ['Single foot', 'Up to 40 minutes', 'Simple anklet design', 'Floral toe rings'],
      icon: '◇',
      popular: false,
    },
    {
      tier: 'Gold',
      price: 5000,
      label: 'Bridal Feet',
      features: ['Both feet', 'Up to 70 minutes', 'Traditional payal design', 'Floral sole work'],
      icon: '◈',
      popular: false,
    },
    {
      tier: 'Platinum',
      price: 6500,
      label: 'Full Sole Art',
      features: ['Both feet + ankles', 'Up to 90 minutes', 'Intricate sole patterns', 'Symmetrical mirroring'],
      icon: '✦',
      popular: true,
    },
    {
      tier: 'Diamond',
      price: 8000,
      label: 'Calf Extension',
      features: ['Feet + lower calf', 'Up to 2 hours', 'Continuous design flow', 'Paisley calf motifs'],
      icon: '◆',
      popular: false,
    },
    {
      tier: 'Crown',
      price: 10000,
      label: 'Bridal Grand',
      features: ['Full leg artwork', 'Unlimited time', 'Exclusive heritage design', 'Free touch-up'],
      icon: '♛',
      popular: false,
    },
  ],
}

function PricingCard({ plan, index, onSelect }) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
      className="relative cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => onSelect(plan.price)}
    >
      {/* Popular badge */}
      {plan.popular && (
        <motion.div
          className="absolute -top-3 left-1/2 -translate-x-1/2 z-20 px-5 py-1 bg-gold-400 text-espresso text-[10px] tracking-[0.25em] uppercase font-body font-medium"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 + 0.4 }}
        >
          Most Loved
        </motion.div>
      )}

      <motion.div
        className="relative overflow-hidden h-full"
        animate={{
          y: hovered ? -8 : 0,
          boxShadow: hovered
            ? '0 24px 60px rgba(44,24,16,0.15), 0 0 0 1px rgba(212,168,67,0.4), inset 0 1px 0 rgba(240,208,96,0.2)'
            : plan.popular
            ? '0 8px 32px rgba(44,24,16,0.1), 0 0 0 1px rgba(212,168,67,0.3)'
            : '0 4px 24px rgba(44,24,16,0.06), 0 0 0 1px rgba(212,168,67,0.12)',
        }}
        transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
        style={{
          background: plan.popular
            ? 'rgba(44,24,16,0.06)'
            : 'rgba(250,243,224,0.5)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: plan.popular
            ? '1px solid rgba(212,168,67,0.45)'
            : '1px solid rgba(212,168,67,0.18)',
        }}
      >
        {/* Background shimmer on hover */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          animate={{
            opacity: hovered ? 1 : 0,
            background: `radial-gradient(ellipse at 50% 0%, rgba(212,168,67,0.08), transparent 70%)`,
          }}
          transition={{ duration: 0.4 }}
        />

        <div className="relative z-10 p-8">
          {/* Icon */}
          <div className="text-gold-400 text-2xl mb-4 font-display">{plan.icon}</div>

          {/* Tier */}
          <p className="section-tag text-gold-600 mb-2 text-[10px]">{plan.tier}</p>
          <h3 className="font-display text-xl text-espresso font-medium italic mb-1">{plan.label}</h3>

          {/* Divider */}
          <div className="gold-divider my-4 w-10" />

          {/* Price */}
          <div className="mb-6">
            <div className="flex items-baseline gap-1">
              <span className="font-body text-sm text-mehndi text-opacity-60">₹</span>
              <span className="font-display text-4xl text-espresso font-light">
                {plan.price.toLocaleString('en-IN')}
              </span>
            </div>
            <p className="font-body text-xs text-espresso/40 mt-1 tracking-wide">per session</p>
          </div>

          {/* Features */}
          <ul className="space-y-2.5 mb-7">
            {plan.features.map((f, i) => (
              <li key={i} className="flex items-start gap-2.5">
                <span className="text-gold-400 text-xs mt-0.5">◦</span>
                <span className="font-body text-xs text-espresso/70 leading-snug">{f}</span>
              </li>
            ))}
          </ul>

          {/* Button */}
          <motion.div
            className="relative overflow-hidden py-3 text-center border border-gold-400/50 font-body text-xs tracking-[0.2em] uppercase"
            animate={{
              background: hovered ? 'rgba(196,154,42,1)' : 'transparent',
              color: hovered ? '#2c1810' : '#c49a2a',
            }}
            transition={{ duration: 0.3 }}
          >
            Select Design
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function PricingSection({ category, onSelect }) {
  const plans = PRICING[category] || PRICING.hand
  const categoryLabel = category === 'hand' ? 'Hand Mehndi' : 'Feet Mehndi'

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden bg-cream-50">
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-400/30 to-transparent" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 48px, rgba(196,154,42,0.8) 48px, rgba(196,154,42,0.8) 49px),
              repeating-linear-gradient(90deg, transparent, transparent 48px, rgba(196,154,42,0.8) 48px, rgba(196,154,42,0.8) 49px)`,
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10">
        {/* Heading */}
        <AnimatePresence mode="wait">
          <motion.div
            key={category}
            className="text-center mb-14"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
          >
            <p className="section-tag mb-4">
              {categoryLabel} &nbsp;·&nbsp; Pricing
            </p>
            <h2 className="font-display text-[clamp(2.2rem,5vw,4rem)] text-espresso font-light leading-tight">
              Choose Your&nbsp;
              <span className="italic gold-shimmer">Experience</span>
            </h2>
            <p className="font-body text-sm text-espresso/50 mt-4 max-w-md mx-auto leading-relaxed">
              Every package is crafted with pure henna and delivered with artistry honed over years of bridal work.
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-5">
          {plans.map((plan, i) => (
            <PricingCard key={plan.tier} plan={plan} index={i} onSelect={onSelect} />
          ))}
        </div>

        {/* Back note */}
        <motion.p
          className="text-center font-body text-[11px] text-espresso/30 tracking-wider mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
        >
          All prices include henna material. Travel charges extra. ·&nbsp;
          <a
            href="https://wa.me/919548552170"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 text-gold-600 hover:text-gold-400 transition-colors"
          >
            Custom package? WhatsApp us
          </a>
        </motion.p>
      </div>
    </section>
  )
}
