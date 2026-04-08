import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Network, Box, Server, MonitorPlay, Cpu, Terminal } from "lucide-react";

export function SoftwareToolsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const tools = [
    {
      id: 1,
      name: "Winbox",
      description: "Tool untuk konfigurasi dan manajemen MikroTik",
      icon: Network,
      color: "from-red-500 to-orange-500",
      bgColor: "bg-red-50",
      borderColor: "border-red-200",
      shadowColor: "shadow-red-200/50",
    },
    {
      id: 2,
      name: "Cisco Packet Tracer",
      description: "Platform simulasi dan visualisasi jaringan Cisco",
      icon: MonitorPlay,
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      shadowColor: "shadow-blue-200/50",
    },
    {
      id: 3,
      name: "PNETLab",
      description: "Environment simulasi dan testing jaringan tingkat lanjut",
      icon: Server,
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      shadowColor: "shadow-green-200/50",
    },
    {
      id: 4,
      name: "MobaXterm",
      description: "Terminal enhanced untuk Windows dengan SSH dan remote tools",
      icon: Terminal,
      color: "from-teal-500 to-cyan-600",
      bgColor: "bg-teal-50",
      borderColor: "border-teal-200",
      shadowColor: "shadow-teal-200/50",
    },
    {
      id: 5,
      name: "Oracle VM VirtualBox",
      description: "Software virtualisasi lintas platform",
      icon: Box,
      color: "from-purple-500 to-violet-500",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      shadowColor: "shadow-purple-200/50",
    },
    {
      id: 6,
      name: "Virtual Machine",
      description: "Environment untuk testing dan development terisolasi",
      icon: Cpu,
      color: "from-pink-500 to-rose-500",
      bgColor: "bg-pink-50",
      borderColor: "border-pink-200",
      shadowColor: "shadow-pink-200/50",
    },
  ];

  return (
    <section
      ref={ref}
      className="py-20 bg-gradient-to-b from-orange-50 via-amber-50 to-yellow-50 relative overflow-hidden"
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
        className="absolute top-16 right-12 text-5xl"
        animate={{ rotate: [0, 360], scale: [1, 1.2, 1] }}
        transition={{ duration: 8, repeat: Infinity }}
      >
        💻
      </motion.div>

      <motion.div
        className="absolute bottom-24 left-12 text-4xl"
        animate={{ y: [0, -15, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
      >
        🛠️
      </motion.div>

      <motion.div
        className="absolute top-32 left-1/4 text-3xl"
        animate={{ rotate: [0, -20, 20, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 6, repeat: Infinity }}
      >
        ⚙️
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
              className="absolute -top-3 left-1/2 -translate-x-1/2 w-48 h-8 bg-green-300/70 rotate-1"
              style={{ clipPath: "polygon(2% 0, 98% 0, 100% 100%, 0% 100%)" }}
            />
            <h2
              className="text-4xl lg:text-5xl font-bold relative z-10 py-2"
              style={{
                background: "linear-gradient(135deg, #10b981 0%, #3b82f6 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Software & Tools 💻
            </h2>
          </div>
          <motion.p
            className="text-gray-600 mt-4 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Tool-tool penting untuk network engineering dan virtualisasi
          </motion.p>
        </motion.div>

        {/* Tools Grid */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tools.map((tool, index) => {
            const Icon = tool.icon;
            return (
              <motion.div
                key={tool.id}
                className="group relative"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              >
                {/* Card */}
                <motion.div
                  className={`relative bg-white rounded-2xl shadow-lg ${tool.shadowColor} p-6 border-2 ${tool.borderColor} overflow-hidden h-full cursor-hover`}
                  whileHover={{ scale: 1.05, y: -8 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Subtle Gradient Background */}
                  <div
                    className={`absolute inset-0 ${tool.bgColor} opacity-20`}
                  />

                  {/* Glow Effect on Hover */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${tool.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                  />

                  {/* Icon Container */}
                  <motion.div
                    className={`relative z-10 w-16 h-16 rounded-xl bg-gradient-to-br ${tool.color} flex items-center justify-center mb-4 shadow-lg`}
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-gray-800 group-hover:to-gray-600 transition-all duration-300">
                      {tool.name}
                    </h3>

                    <p className="text-sm text-gray-600 leading-relaxed">
                      {tool.description}
                    </p>
                  </div>

                  {/* Decorative Corner */}
                  <div
                    className={`absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl ${tool.color} opacity-5 rounded-tl-full`}
                  />

                  {/* Hover Accent Line */}
                  <motion.div
                    className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${tool.color}`}
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>

                {/* Washi Tape Decoration on First Card */}
                {index === 0 && (
                  <div
                    className="absolute -top-2 -right-2 w-20 h-6 bg-yellow-300/60 rotate-12 z-20"
                    style={{
                      clipPath: "polygon(2% 0, 98% 0, 100% 100%, 0% 100%)",
                    }}
                  />
                )}

                {/* Floating Sticker on Third Card */}
                {index === 2 && (
                  <motion.div
                    className="absolute -top-3 -right-3 text-3xl z-20"
                    animate={{ rotate: [0, 15, -15, 0], scale: [1, 1.1, 1] }}
                    transition={{ duration: 4, repeat: Infinity }}
                  >
                    ⭐
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Corner Decorations */}
      <motion.div
        className="absolute top-10 left-10"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <svg width="40" height="40" viewBox="0 0 40 40" className="text-amber-400 opacity-30">
          <circle cx="20" cy="20" r="15" stroke="currentColor" strokeWidth="3" fill="none" strokeDasharray="5,5" />
        </svg>
      </motion.div>

      <motion.div
        className="absolute bottom-10 right-10"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <svg width="35" height="35" viewBox="0 0 35 35" className="text-rose-400 opacity-30">
          <polygon
            points="17.5,3 21,13 31,17.5 21,22 17.5,32 14,22 4,17.5 14,13"
            stroke="currentColor"
            strokeWidth="3"
            fill="none"
          />
        </svg>
      </motion.div>
    </section>
  );
}