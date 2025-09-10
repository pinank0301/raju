"use client"

import { Button } from "@/components/ui/button"
import { Play, Rocket, Sparkles } from "lucide-react"
import { motion } from "framer-motion"
import { Navbar } from "./navbar"

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url(/images/hero-background.jpg)",
        }}
      />

      {/* Navbar */}
      <Navbar />

      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 text-teal-300/20"
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        >
          <Sparkles className="w-8 h-8" />
        </motion.div>
        <motion.div
          className="absolute top-40 right-20 text-teal-400/30"
          animate={{ y: [0, 15, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
        >
          <Sparkles className="w-6 h-6" />
        </motion.div>
        <motion.div
          className="absolute bottom-40 left-20 text-teal-200/25"
          animate={{ y: [0, -10, 0], rotate: [0, 3, 0] }}
          transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 2 }}
        >
          <Sparkles className="w-10 h-10" />
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-white mb-8 text-balance drop-shadow-2xl leading-tight">
              Create{" "}
              <motion.span
                className="inline-block text-teal-300 bg-gradient-to-r from-teal-400 via-teal-300 to-cyan-300 bg-clip-text"
                style={{
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundSize: "200% 200%",
                }}
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              >
                Viral
              </motion.span>{" "}
              AI Videos
              <motion.span
                className="inline-block ml-4"
                animate={{
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              >
                <Rocket className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 text-teal-400 drop-shadow-2xl" />
              </motion.span>
            </h1>
          </motion.div>

          <motion.p
            className="text-xl md:text-2xl lg:text-3xl text-white/90 mb-12 text-pretty max-w-4xl mx-auto leading-relaxed drop-shadow-xl font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            Transform any topic into engaging{" "}
            <motion.span
              className="text-teal-300 font-medium"
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            >
              meme-style videos
            </motion.span>{" "}
            with AI voice cloning, viral templates, and automated script generation.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-teal-500 via-teal-600 to-cyan-600 hover:from-teal-600 hover:via-teal-700 hover:to-cyan-700 text-white px-10 py-6 text-xl font-bold rounded-2xl shadow-2xl hover:shadow-teal-500/25 transition-all duration-300 drop-shadow-lg border border-teal-400/20 cursor-pointer"
              >
                <motion.span
                  animate={{ opacity: [1, 0.8, 1] }}
                  transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                >
                  Start Creating
                </motion.span>
              </Button>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-teal-300/50 text-white hover:bg-teal-400/30 hover:border-teal-300 px-10 py-6 text-xl font-semibold rounded-2xl backdrop-blur-md bg-teal-900/60 transition-all duration-300 shadow-lg hover:shadow-teal-400/20 cursor-pointer"
              >
                <Play className="w-6 h-6 mr-3" />
                Watch Demo
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
