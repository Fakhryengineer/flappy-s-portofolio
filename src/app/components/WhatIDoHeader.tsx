import { motion, useInView } from "motion/react";
import { useRef } from "react";

export function WhatIDoHeader() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          className="max-w-4xl"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          {/* Section Label */}
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-12 bg-black" />
            <span className="text-xs uppercase tracking-[0.3em] text-gray-500">
              PROJECTS
            </span>
          </div>

          {/* Title - Bold & Uppercase */}
          <h2 className="text-[clamp(3rem,10vw,6rem)] font-bold leading-[0.9] tracking-tight mb-6 uppercase">
            WHAT I DO
          </h2>

          {/* Description */}
          <p className="text-base text-gray-600 leading-relaxed max-w-2xl">
            Berikut adalah beberapa project yang telah saya kerjakan untuk
            membantu klien membangun presence digital mereka
          </p>
        </motion.div>
      </div>
    </section>
  );
}