import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const WA_URL = 'https://wa.me/919548552170?text=Hi%2C%20I%20want%20to%20book%20mehndi'

function WhatsAppSVG() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="white">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.534 5.855L.06 23.077a.75.75 0 00.922.925l5.392-1.444A11.938 11.938 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.713 9.713 0 01-5.073-1.423l-.363-.217-3.767 1.01 1.034-3.664-.237-.376A9.72 9.72 0 012.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z" />
    </svg>
  )
}

export default function WhatsAppButton() {
  const [tooltip, setTooltip] = useState(false)

  return (
    <motion.div
      className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, duration: 0.6, type: 'spring', stiffness: 200 }}
    >
      {/* Tooltip */}
      <AnimatePresence>
        {tooltip && (
          <motion.div
            className="mb-1 px-4 py-2.5 bg-espresso text-cream-100 text-xs font-body tracking-wide whitespace-nowrap"
            initial={{ opacity: 0, x: 10, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 10, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            style={{ boxShadow: '0 4px 20px rgba(44,24,16,0.15)' }}
          >
            Book via WhatsApp ✦
            {/* Triangle */}
            <span
              className="absolute right-4 -bottom-1.5 w-3 h-3 bg-espresso rotate-45"
              style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%)' }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Button */}
      <a
        href={WA_URL}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setTooltip(true)}
        onMouseLeave={() => setTooltip(false)}
      >
        <motion.div
          className="relative w-14 h-14 rounded-full flex items-center justify-center wa-btn"
          style={{ background: 'linear-gradient(135deg, #25d366, #128c7e)' }}
          whileHover={{ scale: 1.12 }}
          whileTap={{ scale: 0.94 }}
        >
          <WhatsAppSVG />
          {/* Ping */}
          <span className="absolute inset-0 rounded-full bg-green-400 opacity-30 animate-ping" />
        </motion.div>
      </a>
    </motion.div>
  )
}
