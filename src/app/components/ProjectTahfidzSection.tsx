import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { CheckCircle2 } from "lucide-react";

export function ProjectTahfidzSection() {
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
            <div className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-xs font-medium uppercase tracking-wider">
              Web Application
            </div>

            {/* Title */}
            <h3 className="text-[clamp(2rem,6vw,3.5rem)] leading-tight tracking-tight">
              Website Monitoring
              <br />
              Hafalan Tahfidz
            </h3>

            {/* Subtitle */}
            <p className="text-xl text-gray-600 leading-relaxed">
              Platform sederhana untuk membantu pencatatan dan monitoring hafalan
              secara digital
            </p>

            {/* Features */}
            <div className="space-y-4 pt-4">
              <motion.div
                className="flex items-start gap-3"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <CheckCircle2 className="w-6 h-6 text-purple-600 shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold mb-1">Pencatatan Hafalan</div>
                  <div className="text-sm text-gray-600">
                    Tracking progress hafalan setiap santri secara real-time
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start gap-3"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <CheckCircle2 className="w-6 h-6 text-purple-600 shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold mb-1">Tracking Progress</div>
                  <div className="text-sm text-gray-600">
                    Dashboard monitoring untuk pengajar dan wali santri
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start gap-3"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <CheckCircle2 className="w-6 h-6 text-purple-600 shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold mb-1">User Management</div>
                  <div className="text-sm text-gray-600">
                    Sistem pengelolaan data santri dan pengajar
                  </div>
                </div>
              </motion.div>
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
                  monitoring-tahfidz.app
                </div>
              </div>

              {/* Dashboard Content */}
              <div className="p-8 bg-gradient-to-br from-purple-50 to-pink-50">
                {/* Header */}
                <div className="mb-6">
                  <div className="text-sm text-purple-600 font-medium mb-2">
                    Dashboard
                  </div>
                  <h4 className="text-2xl font-bold mb-1">
                    Monitoring Hafalan
                  </h4>
                  <p className="text-sm text-gray-600">
                    Overview progress hafalan santri
                  </p>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-3 gap-3 mb-6">
                  <div className="bg-white rounded-xl p-4 shadow-sm">
                    <div className="text-2xl font-bold text-purple-600">45</div>
                    <div className="text-xs text-gray-600 mt-1">Total Santri</div>
                  </div>
                  <div className="bg-white rounded-xl p-4 shadow-sm">
                    <div className="text-2xl font-bold text-pink-600">892</div>
                    <div className="text-xs text-gray-600 mt-1">Ayat Dihafal</div>
                  </div>
                  <div className="bg-white rounded-xl p-4 shadow-sm">
                    <div className="text-2xl font-bold text-cyan-600">87%</div>
                    <div className="text-xs text-gray-600 mt-1">Progress</div>
                  </div>
                </div>

                {/* Table Preview */}
                <div className="bg-white rounded-xl overflow-hidden shadow-sm">
                  <div className="bg-purple-600 text-white px-4 py-3 text-sm font-medium">
                    Recent Activity
                  </div>
                  <div className="divide-y divide-gray-100">
                    {[1, 2, 3].map((item) => (
                      <div key={item} className="px-4 py-3 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-pink-400" />
                          <div>
                            <div className="text-xs font-medium">
                              Santri {item}
                            </div>
                            <div className="text-[10px] text-gray-500">
                              Al-Baqarah: 1-10
                            </div>
                          </div>
                        </div>
                        <div className="text-xs text-green-600 font-medium">
                          ✓ Selesai
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Decorative Elements */}
            <motion.div
              className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full blur-3xl -z-10"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
