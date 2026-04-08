import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { MessageCircle } from "lucide-react";

export function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 bg-black relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Label */}
          <motion.div
            className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            LET'S WORK TOGETHER
          </motion.div>

          {/* Main Heading - Bold & Uppercase */}
          <motion.h2
            className="text-[clamp(2.5rem,8vw,4rem)] font-bold text-white mb-6 leading-tight uppercase"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            PUNYA PROJECT?
          </motion.h2>

          {/* Description */}
          <motion.p
            className="text-xl text-gray-400 mb-12 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Mari diskusi dan wujudkan ide Anda menjadi kenyataan
          </motion.p>

          {/* CTA Button - Clean & Simple */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <motion.a
              href="https://wa.me/6281292018844"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-10 py-5 bg-white text-black rounded-full cursor-hover font-semibold"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <MessageCircle className="w-5 h-5" />
              <span>Hubungi via WhatsApp</span>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}