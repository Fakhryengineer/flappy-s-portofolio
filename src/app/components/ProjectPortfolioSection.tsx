import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Sparkles, Star, Palette } from "lucide-react";

export function ProjectPortfolioSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left - Text Content */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            {/* Label */}
            <div className="inline-block px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-xs font-medium uppercase tracking-wider">
              Portfolio Site
            </div>

            {/* Title */}
            <h3 className="text-[clamp(2rem,6vw,3.5rem)] leading-tight tracking-tight">
              Portfolio
              <br />
              Website
            </h3>

            {/* Subtitle */}
            <p className="text-xl text-gray-600 leading-relaxed">
              Website personal untuk menampilkan identitas dan karya secara
              profesional
            </p>

            {/* Description */}
            <div className="space-y-4 pt-4">
              <p className="text-gray-700 leading-relaxed">
                Portfolio website yang dirancang untuk kreator, designer, dan
                freelancer. Menampilkan karya dengan layout yang menarik,
                interactive, dan memorable.
              </p>

              {/* Features */}
              <div className="space-y-3">
                <motion.div
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-400 to-yellow-400 flex items-center justify-center shrink-0">
                    <Palette className="w-4 h-4 text-white" />
                  </div>
                  <div className="text-sm">
                    <span className="font-semibold">Custom Design</span> - Layout unik
                    sesuai personal brand
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-pink-400 to-orange-400 flex items-center justify-center shrink-0">
                    <Star className="w-4 h-4 text-white" />
                  </div>
                  <div className="text-sm">
                    <span className="font-semibold">Interactive UI</span> - Animasi dan
                    micro-interactions
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center shrink-0">
                    <Sparkles className="w-4 h-4 text-white" />
                  </div>
                  <div className="text-sm">
                    <span className="font-semibold">Project Showcase</span> - Tampilan
                    karya yang engaging
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Right - Browser Mockup */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-gray-200 bg-white cursor-hover"
              whileHover={{ scale: 1.02, y: -8 }}
              transition={{ duration: 0.4 }}
            >
              {/* Browser Header */}
              <div className="bg-gray-100 px-4 py-3 flex items-center gap-2 border-b border-gray-200">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="flex-1 ml-4 bg-white rounded px-3 py-1 text-xs text-gray-500">
                  creative-portfolio.com
                </div>
              </div>

              {/* Portfolio Content */}
              <div className="bg-gradient-to-br from-orange-50 via-pink-50 to-yellow-50">
                {/* Header */}
                <div className="px-8 py-8 border-b border-orange-100">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-pink-500 rounded-lg" />
                      <span className="font-bold text-sm">Creative</span>
                    </div>
                    <div className="flex gap-4 text-xs text-gray-600">
                      <span>Work</span>
                      <span>About</span>
                      <span>Contact</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="text-xs text-orange-600 font-medium">
                      Creative Developer
                    </div>
                    <h4 className="text-2xl font-bold leading-tight">
                      Hi, I'm
                      <br />
                      <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
                        Creative Designer
                      </span>
                    </h4>
                  </div>
                </div>

                {/* Projects Grid */}
                <div className="p-8">
                  <div className="text-xs text-gray-600 mb-4 uppercase tracking-wider">
                    Selected Works
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    {/* Project 1 */}
                    <div className="bg-white rounded-xl overflow-hidden shadow-sm group">
                      <div className="h-24 bg-gradient-to-br from-purple-400 to-pink-400 relative overflow-hidden">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-16 h-16 rounded-lg bg-white/20 backdrop-blur-sm" />
                        </div>
                      </div>
                      <div className="p-3">
                        <div className="text-xs font-semibold mb-1">
                          Project One
                        </div>
                        <div className="text-[10px] text-gray-500">
                          Web Design
                        </div>
                      </div>
                    </div>

                    {/* Project 2 */}
                    <div className="bg-white rounded-xl overflow-hidden shadow-sm">
                      <div className="h-24 bg-gradient-to-br from-blue-400 to-cyan-400 relative overflow-hidden">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm" />
                        </div>
                      </div>
                      <div className="p-3">
                        <div className="text-xs font-semibold mb-1">
                          Project Two
                        </div>
                        <div className="text-[10px] text-gray-500">
                          Branding
                        </div>
                      </div>
                    </div>

                    {/* Project 3 */}
                    <div className="bg-white rounded-xl overflow-hidden shadow-sm">
                      <div className="h-24 bg-gradient-to-br from-orange-400 to-yellow-400 relative overflow-hidden">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-12 h-12 rotate-12 rounded-lg bg-white/20 backdrop-blur-sm" />
                        </div>
                      </div>
                      <div className="p-3">
                        <div className="text-xs font-semibold mb-1">
                          Project Three
                        </div>
                        <div className="text-[10px] text-gray-500">
                          UI/UX
                        </div>
                      </div>
                    </div>

                    {/* Project 4 */}
                    <div className="bg-white rounded-xl overflow-hidden shadow-sm">
                      <div className="h-24 bg-gradient-to-br from-green-400 to-teal-400 relative overflow-hidden">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-sm" />
                        </div>
                      </div>
                      <div className="p-3">
                        <div className="text-xs font-semibold mb-1">
                          Project Four
                        </div>
                        <div className="text-[10px] text-gray-500">
                          Development
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Decorative Elements */}
            <motion.div
              className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-orange-200 to-yellow-200 rounded-full blur-3xl -z-10"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
