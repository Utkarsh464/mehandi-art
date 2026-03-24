import React from 'react'
import { motion } from 'framer-motion'

const INSTA_URL = 'https://www.instagram.com/kasganj_mehandi_art'
const WA_URL = 'https://wa.me/919548552170?text=Hi%2C%20I%20want%20to%20book%20mehndi'

export default function Footer() {
  return (
    <footer className="relative bg-espresso text-cream-200 overflow-hidden">
      {/* Top border */}
      <div className="h-px bg-gradient-to-r from-transparent via-gold-400/40 to-transparent" />

      {/* Decorative background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, rgba(196,154,42,1), transparent 40%),
            radial-gradient(circle at 80% 50%, rgba(123,63,30,1), transparent 40%)`,
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 py-16 sm:py-20">
        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-14">
          {/* Brand */}
          <div>
            <h3 className="font-display text-2xl text-cream-100 font-light mb-1">Khandwa</h3>
            <p className="font-display italic text-gold-400 text-base mb-5">Mehndi Art</p>
            <div className="gold-divider mb-5 w-12" />
            <p className="font-body text-xs text-cream-200/50 leading-relaxed max-w-xs">
              Luxury bridal and festive mehndi artistry crafted for discerning brides in Kasganj, Uttar Pradesh.
            </p>
          </div>

          {/* Links */}
          <div>
            <p className="section-tag text-gold-400/60 mb-6 text-[10px]">Navigate</p>
            <ul className="space-y-3">
              {[
                { label: 'Hand Mehndi', href: '#categories' },
                { label: 'Feet Mehndi', href: '#categories' },
                { label: 'Pricing', href: '#pricing' },
                { label: 'Gallery', href: '#gallery' },
                { label: 'Book Appointment', href: WA_URL, external: true },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target={item.external ? '_blank' : '_self'}
                    rel={item.external ? 'noopener noreferrer' : undefined}
                    className="font-body text-xs text-cream-200/50 hover:text-gold-300 transition-colors tracking-wide micro-link"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="section-tag text-gold-400/60 mb-6 text-[10px]">Connect</p>
            <div className="space-y-4">
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 group"
              >
                <span className="w-7 h-7 border border-gold-400/30 flex items-center justify-center text-green-400 text-xs group-hover:border-gold-400/70 transition-colors">✓</span>
                <div>
                  <p className="font-body text-xs text-cream-100/70 group-hover:text-gold-300 transition-colors">+91 95485 52170</p>
                  <p className="font-body text-[10px] text-cream-200/30 tracking-wide">WhatsApp for bookings</p>
                </div>
              </a>
              <a
                href={INSTA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 group"
              >
                <span className="w-7 h-7 border border-gold-400/30 flex items-center justify-center text-pink-400 text-xs group-hover:border-gold-400/70 transition-colors">◎</span>
                <div>
                  <p className="font-body text-xs text-cream-100/70 group-hover:text-gold-300 transition-colors">@kasganj_mehandi_art</p>
                  <p className="font-body text-[10px] text-cream-200/30 tracking-wide">Follow on Instagram</p>
                </div>
              </a>
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 border border-gold-400/30 flex items-center justify-center text-gold-400 text-xs">◈</span>
                <div>
                  <p className="font-body text-xs text-cream-100/50">Kasganj, Uttar Pradesh</p>
                  <p className="font-body text-[10px] text-cream-200/30 tracking-wide">Home service available</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="gold-divider mb-8" />

        {/* Instagram CTA */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-between gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-display italic text-cream-200/40 text-sm">
            "Where tradition meets artistry"
          </p>
          <a
            href={INSTA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 px-6 py-3 border border-gold-400/25 hover:border-gold-400/60 transition-all duration-300"
          >
            <span className="text-pink-400 text-sm">◎</span>
            <span className="font-body text-xs tracking-[0.2em] uppercase text-cream-200/60 group-hover:text-gold-300 transition-colors">
              View on Instagram
            </span>
          </a>
        </motion.div>

        {/* Bottom */}
        <div className="mt-8 pt-6 border-t border-cream-200/5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="font-body text-[10px] text-cream-200/25 tracking-wider">
            © 2025 Khandwa Mehndi Art · All rights reserved
          </p>
          <a
            href="https://www.instagram.com/webgrowth.in"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-[10px] text-cream-200/25 hover:text-gold-400/60 tracking-wider transition-colors duration-300 micro-link"
          >
            Crafted with ♡ by <span className="text-gold-400/40 hover:text-gold-400/70 transition-colors">webgrowth.in</span>
          </a>
        </div>
      </div>
    </footer>
  )
}
