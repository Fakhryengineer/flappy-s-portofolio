import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Code2, Palette, Zap } from "lucide-react";

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Label */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px w-12 bg-black" />
            <span className="text-xs uppercase tracking-[0.3em] text-gray-500">ABOUT ME</span>
          </div>
          <h2 className="text-[clamp(3rem,10vw,6rem)] font-bold leading-[0.9] tracking-tight uppercase">
            WHO I AM
          </h2>
        </motion.div>

        {/* Grid 2 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p className="text-lg text-gray-700 leading-relaxed">
              Seorang kreator digital yang membangun solusi sederhana menjadi
              pengalaman yang bermakna melalui{" "}
              <span className="font-semibold text-black">Kresify Studio</span>.
            </p>
            
            <p className="text-base text-gray-600 leading-relaxed">
              Dengan fokus pada website yang cepat, fungsional, dan mudah
              digunakan, saya membantu pelajar dan UMKM untuk hadir secara
              digital tanpa ribet.
            </p>
          </motion.div>

          {/* Right Column - ID Card Visual */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="relative max-w-sm mx-auto lg:ml-auto">
              {/* Lanyard */}
              <motion.div
                className="absolute -top-32 left-1/2 -translate-x-1/2 w-6 h-32 bg-gradient-to-b from-gray-800 to-gray-600 rounded-b-lg shadow-lg"
                initial={{ height: 0 }}
                animate={isInView ? { height: 128 } : {}}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <div className="absolute top-6 left-1/2 -translate-x-1/2 -rotate-90 whitespace-nowrap">
                  <span className="text-[10px] text-white tracking-[0.3em] font-medium">
                    KRESIFY
                  </span>
                </div>
              </motion.div>

              {/* Lanyard Clip */}
              <motion.div
                className="absolute -top-4 left-1/2 -translate-x-1/2 w-10 h-6 bg-gray-700 rounded-t-lg rounded-b-sm z-20 shadow-xl"
                initial={{ opacity: 0, y: -20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-5 h-0.5 bg-gray-800 rounded-full" />
              </motion.div>

              {/* ID Card */}
              <motion.div
                className="relative cursor-hover"
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.2 },
                }}
              >
                <div className="bg-white rounded-2xl p-6 shadow-2xl border-2 border-gray-100 relative overflow-hidden">
                  {/* Colorful Top Stripe */}
                  <div className="absolute top-0 left-0 right-0 h-1.5 flex">
                    <div className="flex-1 bg-purple-500" />
                    <div className="flex-1 bg-pink-500" />
                    <div className="flex-1 bg-orange-500" />
                    <div className="flex-1 bg-yellow-500" />
                    <div className="flex-1 bg-cyan-500" />
                  </div>

                  {/* Logo Header */}
                  <div className="flex items-center gap-2 mb-4 pt-1">
                    <div className="w-6 h-6 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg" />
                    <div>
                      <div className="text-[10px] text-gray-500">
                        Kresify Studio
                      </div>
                      <div className="text-xs">ID Member</div>
                    </div>
                  </div>

                  {/* Photo */}
                  <div className="relative mb-4">
                    <div className="w-full aspect-[4/5] rounded-xl overflow-hidden bg-gradient-to-br from-gray-200 to-gray-300 shadow-lg border-2 border-white">
                      <img
                        src="figma:asset/7240f4391cc1c7e743b569fac747c964024239b6.png"
                        alt="Fakhry"
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    {/* Verified Badge */}
                    <motion.div
                      className="absolute -top-2 -right-2 w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white shadow-lg"
                      animate={{ rotate: [0, 8, 0, -8, 0] }}
                      transition={{ duration: 4, repeat: Infinity }}
                    >
                      <span className="text-lg">✓</span>
                    </motion.div>
                  </div>

                  {/* Name & Role */}
                  <div className="text-center space-y-2">
                    <h3 className="text-lg">Fakhry Zacky Akhmad</h3>
                    <div className="inline-block px-3 py-1.5 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full text-xs">
                      Creative Developer
                    </div>
                  </div>

                  {/* Bottom Info */}
                  <div className="mt-4 flex justify-between items-center text-[10px] text-gray-400">
                    <div className="flex gap-0.5">
                      <div className="w-2 h-2 rounded-full bg-purple-500" />
                      <div className="w-2 h-2 rounded-full bg-pink-500" />
                      <div className="w-2 h-2 rounded-full bg-orange-500" />
                    </div>
                    <div>ID: KRS-2025</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}