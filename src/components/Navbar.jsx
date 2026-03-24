import React, { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const INSTA_URL = 'https://www.instagram.com/kasganj_mehandi_art'

function InstagramSVG({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  )
}

export default function Navbar({ onHome }) {
  const [scrolled, setScrolled] = useState(false)
  const { scrollY } = useScroll()

  useEffect(() => {
    return scrollY.on('change', (v) => setScrolled(v > 60))
  }, [scrollY])

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-30 transition-all duration-500"
      style={{
        background: scrolled ? 'rgba(250,243,224,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(196,154,42,0.15)' : '1px solid transparent',
        boxShadow: scrolled ? '0 4px 24px rgba(44,24,16,0.06)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 py-4 flex items-center justify-between">
        {/* Logo */}
        <motion.button
          onClick={onHome}
          className="flex flex-col items-start"
          whileHover={{ scale: 1.01 }}
        >
          <span
            className="font-display font-medium leading-tight"
            style={{
              fontSize: 'clamp(1rem, 2.5vw, 1.3rem)',
              color: scrolled ? '#2c1810' : '#faf3e0',
            }}
          >
            Khandwa
          </span>
          <span
            className="font-display italic font-light leading-tight"
            style={{
              fontSize: 'clamp(0.7rem, 1.5vw, 0.9rem)',
              color: scrolled ? '#c49a2a' : 'rgba(240,208,96,0.85)',
              letterSpacing: '0.1em',
            }}
          >
            Mehndi Art
          </span>
        </motion.button>

        {/* Right nav */}
        <div className="flex items-center gap-5">
          {/* Instagram */}
          <motion.a
            href={INSTA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 font-body text-xs tracking-[0.2em] uppercase transition-colors duration-300"
            style={{ color: scrolled ? '#7b3f1e' : 'rgba(250,243,224,0.8)' }}
            whileHover={{ scale: 1.03 }}
          >
            <InstagramSVG />
            <span className="hidden sm:inline">Instagram</span>
          </motion.a>

          {/* Divider */}
          <div
            className="w-px h-4"
            style={{ background: scrolled ? 'rgba(196,154,42,0.3)' : 'rgba(250,243,224,0.25)' }}
          />

          {/* Book CTA */}
          <motion.a
            href="https://wa.me/919548552170?text=Hi%2C%20I%20want%20to%20book%20mehndi"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 font-body text-xs tracking-[0.18em] uppercase border transition-all duration-300"
            style={
              scrolled
                ? { border: '1px solid rgba(196,154,42,0.6)', color: '#c49a2a' }
                : { border: '1px solid rgba(240,208,96,0.5)', color: 'rgba(240,208,96,0.9)' }
            }
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
          >
            Book Now
          </motion.a>
        </div>
      </div>
    </motion.header>
  )
}
