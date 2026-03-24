import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Home from './pages/Home.jsx'

export default function App() {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key="main"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <Home />
      </motion.div>
    </AnimatePresence>
  )
}
