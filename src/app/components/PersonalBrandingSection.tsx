import { motion } from "motion/react";

export function PersonalBrandingSection() {
  return (
    <section className="py-6 lg:py-8 bg-gradient-to-r from-amber-100 via-orange-100 to-yellow-100 overflow-hidden border-y-4 border-dashed border-amber-300">
      <div className="relative">
        {/* Animated Scrolling Text */}
        <motion.div
          className="flex whitespace-nowrap"
          animate={{
            x: [0, -1000],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {[...Array(3)].map((_, i) => (
            <div key={i} className="flex items-center gap-8 px-4">
              <span className="text-[clamp(1.75rem,5vw,3rem)] font-bold text-transparent"
                style={{
                  WebkitTextStroke: '2px #f59e0b',
                  letterSpacing: '0.05em'
                }}
              >
                PERSONAL BRANDING
              </span>
              <span className="text-3xl">✨</span>
              <span className="text-[clamp(1.75rem,5vw,3rem)] font-bold text-transparent"
                style={{
                  WebkitTextStroke: '2px #ec4899',
                  letterSpacing: '0.05em'
                }}
              >
                KRESIFY STUDIO
              </span>
              <span className="text-3xl">🎨</span>
              <span className="text-[clamp(1.75rem,5vw,3rem)] font-bold text-transparent"
                style={{
                  WebkitTextStroke: '2px #8b5cf6',
                  letterSpacing: '0.05em'
                }}
              >
                CREATIVE DEVELOPER
              </span>
              <span className="text-3xl">🚀</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}