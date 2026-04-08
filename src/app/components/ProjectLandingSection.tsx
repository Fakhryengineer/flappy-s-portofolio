import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Zap, Smartphone, TrendingUp } from "lucide-react";

export function ProjectLandingSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 bg-gray-50 relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Right - Browser Mockup (Shows first on mobile, left on desktop) */}
          <motion.div
            className="relative order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
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
                  landing-page-demo.com
                </div>
              </div>

              {/* Landing Page Content */}
              <div className="bg-gradient-to-br from-blue-600 via-cyan-600 to-teal-600">
                {/* Hero Section Preview */}
                <div className="px-8 py-12 text-center text-white">
                  <div className="text-xs uppercase tracking-wider opacity-90 mb-3">
                    Solusi Digital Terbaik
                  </div>
                  <h4 className="text-3xl font-bold mb-4 leading-tight">
                    Bangun Presence Digital
                    <br />
                    Bisnis Anda
                  </h4>
                  <p className="text-sm opacity-90 mb-6 max-w-md mx-auto">
                    Website profesional yang cepat, modern, dan siap
                    meningkatkan kredibilitas bisnis Anda
                  </p>
                  <div className="flex gap-3 justify-center">
                    <div className="px-6 py-2.5 bg-white text-blue-600 rounded-full text-sm font-medium">
                      Mulai Sekarang
                    </div>
                    <div className="px-6 py-2.5 border-2 border-white rounded-full text-sm font-medium">
                      Lihat Demo
                    </div>
                  </div>
                </div>

                {/* Services Section Preview */}
                <div className="bg-white px-8 py-10">
                  <div className="text-center mb-8">
                    <div className="text-sm text-blue-600 font-medium mb-2">
                      Layanan Kami
                    </div>
                    <h5 className="text-xl font-bold">
                      Kenapa Memilih Kami?
                    </h5>
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                        <Zap className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-xs font-medium mb-1">Fast</div>
                      <div className="text-[10px] text-gray-600">
                        Loading Cepat
                      </div>
                    </div>

                    <div className="text-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                        <Smartphone className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-xs font-medium mb-1">Responsive</div>
                      <div className="text-[10px] text-gray-600">
                        Mobile Ready
                      </div>
                    </div>

                    <div className="text-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-green-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                        <TrendingUp className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-xs font-medium mb-1">SEO</div>
                      <div className="text-[10px] text-gray-600">
                        Optimized
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Decorative Elements */}
            <motion.div
              className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-blue-200 to-cyan-200 rounded-full blur-3xl -z-10"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
          </motion.div>

          {/* Left - Text Content */}
          <motion.div
            className="space-y-6 order-1 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            {/* Label */}
            <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-xs font-medium uppercase tracking-wider">
              Landing Page
            </div>

            {/* Title */}
            <h3 className="text-[clamp(2rem,6vw,3.5rem)] leading-tight tracking-tight">
              Landing Page
              <br />
              Project
            </h3>

            {/* Subtitle */}
            <p className="text-xl text-gray-600 leading-relaxed">
              Landing page modern untuk kebutuhan promosi jasa dan digital
              presence
            </p>

            {/* Description */}
            <div className="space-y-4 pt-4">
              <p className="text-gray-700 leading-relaxed">
                Dirancang khusus untuk UMKM dan bisnis kecil yang ingin tampil
                profesional secara online. Website yang fast-loading,
                SEO-friendly, dan mobile responsive.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="text-sm font-semibold">✓ Hero Section</div>
                  <div className="text-sm font-semibold">✓ Services Display</div>
                  <div className="text-sm font-semibold">✓ Contact Form</div>
                </div>
                <div className="space-y-2">
                  <div className="text-sm font-semibold">✓ Fast Loading</div>
                  <div className="text-sm font-semibold">✓ SEO Optimized</div>
                  <div className="text-sm font-semibold">✓ Mobile Ready</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
