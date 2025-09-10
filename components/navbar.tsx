"use client"

import { Button } from "@/components/ui/button"
import { ArrowUpRight } from "lucide-react"
import { motion } from "framer-motion"

export function Navbar() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToHowItWorks = () => {
    const element = document.querySelector('[data-section="how-it-works"]')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <motion.nav 
      className="absolute top-0 left-0 right-0 z-50 px-6 py-4"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container mx-auto flex items-center justify-between">
        {/* Left spacer for centering */}
        <div className="hidden md:block w-32"></div>
        
        {/* Navigation Links - Centered */}
        <div className="hidden md:flex items-center space-x-8">
          <motion.button
            onClick={() => scrollToSection('hero')}
            className="text-white hover:text-teal-300 transition-colors duration-300 font-medium text-lg"
            whileHover={{ y: -2 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            Home
          </motion.button>
          <motion.button
            onClick={scrollToHowItWorks}
            className="text-white hover:text-teal-300 transition-colors duration-300 font-medium text-lg"
            whileHover={{ y: -2 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            Working
          </motion.button>
          <motion.button
            onClick={() => scrollToSection('footer')}
            className="text-white hover:text-teal-300 transition-colors duration-300 font-medium text-lg"
            whileHover={{ y: -2 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            Contact
          </motion.button>
        </div>

        {/* Sign Up Button */}
        <motion.div
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <Button
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium px-6 py-2 rounded-lg shadow-lg transition-all duration-300 flex items-center gap-2 cursor-pointer"
          >
            Sign up
            <ArrowUpRight className="w-4 h-4" />
          </Button>
        </motion.div>
      </div>
    </motion.nav>
  )
}
