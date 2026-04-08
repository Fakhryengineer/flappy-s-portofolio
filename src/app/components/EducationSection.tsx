import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { GraduationCap, Calendar } from "lucide-react";

export function EducationSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const educationData = [
    {
      id: 1,
      institution: "MAS Minhajul Haq",
      period: "2023–2025",
      status: "foundation",
      description: "Fondasi pendidikan Islam dan pengetahuan umum",
      color: "from-amber-500 to-orange-500",
      bgColor: "bg-amber-50",
      borderColor: "border-amber-300",
    },
    {
      id: 2,
      institution: "Islamic Development Network Polytechnic",
      period: "2025–Present",
      status: "current",
      description: "Teknologi Informasi & Teknik Jaringan Komputer",
      color: "from-blue-500 to-purple-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-300",
    },
  ];

  return (
    <section
      ref={ref}
      className="py-20 bg-gradient-to-b from-yellow-50 via-amber-50 to-orange-50 relative overflow-hidden"
    >
      {/* Grid Paper Background */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(rgba(139, 92, 46, 0.2) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139, 92, 46, 0.2) 1px, transparent 1px)
          `,
          backgroundSize: "20px 20px",
        }}
      />

      {/* Floating Doodles */}
      <motion.div
        className="absolute top-20 right-10 text-4xl"
        animate={{ rotate: [0, 10, -10, 0], y: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
      >
        🎓
      </motion.div>

      <motion.div
        className="absolute bottom-20 left-10 text-4xl"
        animate={{ rotate: [0, -15, 15, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 6, repeat: Infinity }}
      >
        📚
      </motion.div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16 relative"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block relative">
            {/* Washi Tape */}
            <div
              className="absolute -top-3 left-1/2 -translate-x-1/2 w-40 h-8 bg-blue-300/70 -rotate-2"
              style={{ clipPath: "polygon(2% 0, 98% 0, 100% 100%, 0% 100%)" }}
            />
            <h2
              className="text-4xl lg:text-5xl font-bold relative z-10 py-2"
              style={{
                background: "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Education Journey 🎓
            </h2>
          </div>
          <motion.p
            className="text-gray-600 mt-4 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Perjalanan pendidikan dari fondasi hingga pengembangan profesional
          </motion.p>
        </motion.div>

        {/* Timeline Container */}
        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Timeline Line */}
          <motion.div
            className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-amber-400 via-orange-400 to-blue-500 rounded-full"
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
            style={{ transformOrigin: "top" }}
          />

          {/* Timeline Items */}
          <div className="space-y-12">
            {educationData.map((edu, index) => (
              <motion.div
                key={edu.id}
                className="relative pl-24"
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
              >
                {/* Timeline Dot */}
                <motion.div
                  className="absolute left-4 top-6 z-10"
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.2 }}
                >
                  <div
                    className={`w-9 h-9 rounded-full bg-gradient-to-br ${edu.color} flex items-center justify-center shadow-lg border-4 border-white`}
                  >
                    <GraduationCap className="w-5 h-5 text-white" />
                  </div>

                  {/* Pulse Effect for Current Education */}
                  {edu.status === "current" && (
                    <motion.div
                      className="absolute inset-0 rounded-full bg-blue-400"
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.6, 0, 0.6],
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  )}
                </motion.div>

                {/* Content Card */}
                <motion.div
                  className={`relative bg-white rounded-2xl shadow-lg p-6 border-2 ${edu.borderColor} overflow-hidden`}
                  whileHover={{ scale: 1.02, y: -4 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Subtle Gradient Background */}
                  <div
                    className={`absolute inset-0 ${edu.bgColor} opacity-30`}
                  />

                  {/* Highlight for Current Education */}
                  {edu.status === "current" && (
                    <motion.div
                      className="absolute top-0 right-0 bg-gradient-to-l from-blue-500 to-purple-600 text-white text-xs font-bold px-4 py-1.5 rounded-bl-xl shadow-md"
                      initial={{ opacity: 0, x: 20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.8 + index * 0.2 }}
                    >
                      ✨ Current
                    </motion.div>
                  )}

                  {/* Content */}
                  <div className="relative z-10">
                    <h3
                      className={`text-2xl font-bold mb-2 ${
                        edu.status === "current"
                          ? "text-transparent bg-clip-text bg-gradient-to-r " +
                            edu.color
                          : "text-gray-800"
                      }`}
                    >
                      {edu.institution}
                    </h3>

                    <div className="flex items-center gap-2 mb-3">
                      <Calendar className="w-4 h-4 text-gray-500" />
                      <span className="text-sm font-semibold text-gray-600">
                        {edu.period}
                      </span>
                    </div>

                    <p className="text-gray-600 leading-relaxed">
                      {edu.description}
                    </p>
                  </div>

                  {/* Decorative Corner */}
                  <div
                    className={`absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl ${edu.color} opacity-10 rounded-tl-full`}
                  />

                  {/* Washi Tape Decoration */}
                  {index === 1 && (
                    <div
                      className="absolute -top-2 -right-2 w-24 h-6 bg-purple-300/60 rotate-12"
                      style={{
                        clipPath: "polygon(2% 0, 98% 0, 100% 100%, 0% 100%)",
                      }}
                    />
                  )}
                </motion.div>

                {/* Floating Sticker for Current Education */}
                {edu.status === "current" && (
                  <motion.div
                    className="absolute -right-4 top-0 text-3xl"
                    animate={{ rotate: [0, 15, -15, 0], scale: [1, 1.1, 1] }}
                    transition={{ duration: 4, repeat: Infinity }}
                  >
                    🌟
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Timeline End Marker */}
          <motion.div
            className="absolute left-4 bottom-0 z-10"
            initial={{ scale: 0, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 1.2 }}
          >
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-lg border-4 border-white">
              <span className="text-white text-sm">🚀</span>
            </div>
          </motion.div>
        </div>

        {/* Handwritten Note */}
        <motion.div
          className="relative mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 1.4 }}
        >
          <svg className="w-full max-w-md mx-auto h-12" viewBox="0 0 400 50">
            <motion.path
              d="M 10 25 Q 50 10, 100 25 T 200 25 T 300 25 T 380 25"
              stroke="#8b5cf6"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={isInView ? { pathLength: 1 } : {}}
              transition={{ duration: 1.5, delay: 1.5 }}
            />
          </svg>
          <p className="text-sm text-gray-500 italic -mt-2">
            "Learning never stops!" 📖✨
          </p>
        </motion.div>
      </div>
    </section>
  );
}