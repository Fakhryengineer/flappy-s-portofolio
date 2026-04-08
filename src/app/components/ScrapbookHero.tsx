import { motion } from "motion/react";
import { Sparkles } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import { AnimatedMascot } from "./AnimatedMascot";

export function ScrapbookHero() {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-amber-50">
      {/* Paper Texture Background */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1642781319034-04153f7a0e09?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrcmFmdCUyMHBhcGVyJTIwdGV4dHVyZSUyMGJhY2tncm91bmR8ZW58MXx8fHwxNzc0NTAwODk0fDA&ixlib=rb-4.1.0&q=80&w=1080')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />

      {/* Floating Doodles */}
      <motion.div
        className="absolute top-20 right-20 text-6xl"
        animate={{
          rotate: [0, 10, -10, 0],
          y: [0, -20, 0],
        }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        ✏️
      </motion.div>
      
      <motion.div
        className="absolute bottom-32 left-20 text-5xl"
        animate={{
          rotate: [0, -15, 15, 0],
          y: [0, 15, 0],
        }}
        transition={{ duration: 5, repeat: Infinity }}
      >
        📐
      </motion.div>

      <motion.div
        className="absolute top-40 left-32 text-4xl"
        animate={{
          rotate: [0, 20, -20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 6, repeat: Infinity }}
      >
        ✨
      </motion.div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10 py-20">
        <div className="max-w-6xl mx-auto">
          {/* Washi Tape Decoration */}
          <motion.div
            className="absolute -top-4 left-0 w-32 h-8 bg-gradient-to-r from-pink-400 to-pink-500 opacity-70 -rotate-2"
            initial={{ width: 0 }}
            animate={{ width: 128 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{
              clipPath: 'polygon(0 0, 100% 0, 98% 100%, 2% 100%)'
            }}
          />

          {/* Main Content Card - Scrapbook Style */}
          <motion.div
            className="relative bg-white rounded-3xl shadow-2xl p-8 lg:p-16 border-4 border-amber-100"
            initial={{ opacity: 0, y: 50, rotate: -2 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ duration: 0.8 }}
            style={{
              boxShadow: '0 20px 60px rgba(0,0,0,0.15), 0 0 0 1px rgba(0,0,0,0.05)',
            }}
          >
            {/* Corner Stickers */}
            <motion.div
              className="absolute -top-3 -right-3 w-20 h-20 bg-yellow-300 rounded-full flex items-center justify-center text-3xl shadow-lg rotate-12"
              animate={{ rotate: [12, 18, 12] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              ⭐
            </motion.div>

            <motion.div
              className="absolute -bottom-4 -left-4 w-16 h-16 bg-pink-400 rounded-full flex items-center justify-center text-2xl shadow-lg -rotate-12"
              animate={{ rotate: [-12, -18, -12] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              💝
            </motion.div>

            {/* Masking Tape Top */}
            <div className="absolute -top-6 left-1/4 w-40 h-10 bg-blue-200/60 -rotate-3 shadow-md" 
              style={{ clipPath: 'polygon(2% 0, 98% 0, 100% 100%, 0% 100%)' }}
            />
            
            {/* Main Title - Pixel Font */}
            <motion.h1
              className="text-[clamp(1.5rem,5vw,3rem)] leading-tight mb-8 text-center lg:text-left"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              style={{
                fontFamily: "'Press Start 2P', cursive",
                background: 'linear-gradient(135deg, #f59e0b 0%, #ec4899 50%, #8b5cf6 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                lineHeight: '1.6',
                textShadow: '3px 3px 0px rgba(0,0,0,0.1)'
              }}
            >
              WELCOME TO
              <br />
              MY PORTFOLIO! 📚
            </motion.h1>

            {/* Subtitle with Marker Style */}
            <motion.div
              className="relative inline-block mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <p className="text-lg lg:text-xl text-gray-700 relative z-10 px-4 py-2">
                Created by <span className="font-bold text-amber-600">Fakhry Zacky Akhmad</span>
              </p>
              <motion.div
                className="absolute inset-0 bg-yellow-200/50 -rotate-1 rounded"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.4, delay: 0.8 }}
              />
            </motion.div>

            {/* Doodle Line */}
            <motion.svg
              className="w-full h-8 mb-8"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, delay: 0.9 }}
            >
              <motion.path
                d="M 0 15 Q 50 5, 100 15 T 200 15 T 300 15 T 400 15"
                stroke="#f59e0b"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
                strokeDasharray="0 1"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, delay: 0.9 }}
              />
            </motion.svg>

            {/* Description */}
            <motion.p
              className="text-base text-gray-600 leading-relaxed mb-10 max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              Selamat datang di buku portfolio saya! Di sini kamu bisa melihat
              berbagai project yang telah saya kerjakan dengan penuh kreativitas
              dan semangat. Mari jelajahi halaman demi halaman! 🎨
            </motion.p>

            {/* Bottom Decoration - Torn Paper Effect */}
            <div className="absolute -bottom-3 left-1/3 w-24 h-3 bg-amber-200 rotate-1" 
              style={{ 
                clipPath: 'polygon(0 0, 10% 40%, 15% 10%, 25% 50%, 35% 20%, 45% 60%, 55% 30%, 65% 70%, 75% 20%, 85% 50%, 95% 10%, 100% 0, 100% 100%, 0 100%)'
              }}
            />
          </motion.div>

          {/* Scattered Sticky Notes */}
          <motion.div
            className="absolute -bottom-8 -right-8 w-32 h-32 bg-pink-200 shadow-lg rotate-12 p-4 hidden lg:block"
            initial={{ opacity: 0, rotate: 0 }}
            animate={{ opacity: 1, rotate: 12 }}
            transition={{ duration: 0.6, delay: 1.3 }}
            whileHover={{ rotate: 15, scale: 1.05 }}
          >
            <div className="text-xs text-gray-700 font-handwriting">
              Let's create something amazing! ✨
            </div>
          </motion.div>

          <motion.div
            className="absolute -top-8 -left-8 w-28 h-28 bg-yellow-200 shadow-lg -rotate-6 p-4 hidden lg:block"
            initial={{ opacity: 0, rotate: 0 }}
            animate={{ opacity: 1, rotate: -6 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            whileHover={{ rotate: -10, scale: 1.05 }}
          >
            <div className="text-xs text-gray-700 font-handwriting">
              Portfolio
              <br />
              2024-2025
              <br />
              📖
            </div>
          </motion.div>
        </div>

        {/* Interactive Mascot Character */}
        <div className="absolute bottom-4 right-4 lg:bottom-8 lg:right-12 z-20">
          <AnimatedMascot />
        </div>
      </div>

      {/* Bottom Wave - Paper Tear Effect */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-white"
        style={{
          clipPath: 'polygon(0 30%, 5% 20%, 10% 35%, 15% 15%, 20% 40%, 25% 20%, 30% 45%, 35% 25%, 40% 50%, 45% 30%, 50% 55%, 55% 35%, 60% 50%, 65% 30%, 70% 45%, 75% 25%, 80% 40%, 85% 20%, 90% 35%, 95% 15%, 100% 30%, 100% 100%, 0 100%)'
        }}
      />
    </section>
  );
}