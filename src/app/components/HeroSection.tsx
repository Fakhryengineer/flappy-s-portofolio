import { motion, useScroll, useTransform } from "motion/react";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 150]);
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);

  // Split text for animation
  const line1 = "WELCOME TO";
  const line2 = "MY PORTFOLIO";

  return (
    <motion.section
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50"
    >
      {/* Animated Background Shapes */}
      <motion.div
        className="absolute top-20 right-10 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-purple-400/30 to-pink-400/30 blur-3xl"
        style={{ y: y1 }}
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 left-10 w-[400px] h-[400px] rounded-full bg-gradient-to-br from-blue-400/30 to-cyan-400/30 blur-3xl"
        style={{ y: y2 }}
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, -90, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 w-[300px] h-[300px] rounded-full bg-gradient-to-br from-orange-400/20 to-yellow-400/20 blur-3xl"
        animate={{
          scale: [1, 1.4, 1],
          x: [-150, 150, -150],
          y: [-150, 150, -150],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="container mx-auto px-6 lg:px-12 relative z-10 py-32">
        <div className="max-w-6xl mx-auto">
          {/* Animated Headline - Letter by Letter */}
          <div className="mb-12">
            {/* Line 1 */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-x-4 mb-4">
              {line1.split(" ").map((word, wordIndex) => (
                <div key={wordIndex} className="flex">
                  {word.split("").map((letter, letterIndex) => (
                    <motion.span
                      key={letterIndex}
                      className="text-[clamp(3rem,10vw,7rem)] font-bold leading-none tracking-tight inline-block text-black hover:text-pink-500 transition-colors duration-200 cursor-hover"
                      initial={{ opacity: 0, y: 50, rotateX: -90 }}
                      animate={{ opacity: 1, y: 0, rotateX: 0 }}
                      transition={{
                        duration: 0.5,
                        delay: wordIndex * 0.3 + letterIndex * 0.05,
                        type: "spring",
                        stiffness: 200,
                      }}
                      whileHover={{
                        scale: 1.2,
                        transition: { duration: 0.2 },
                      }}
                    >
                      {letter}
                    </motion.span>
                  ))}
                </div>
              ))}
            </div>

            {/* Line 2 */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-x-4">
              {line2.split(" ").map((word, wordIndex) => (
                <div key={wordIndex} className="flex relative">
                  {word.split("").map((letter, letterIndex) => (
                    <motion.span
                      key={letterIndex}
                      className="text-[clamp(3rem,10vw,7rem)] font-bold leading-none tracking-tight inline-block bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent cursor-hover"
                      initial={{ opacity: 0, y: 50, rotateX: -90 }}
                      animate={{ opacity: 1, y: 0, rotateX: 0 }}
                      transition={{
                        duration: 0.5,
                        delay: 0.6 + wordIndex * 0.3 + letterIndex * 0.05,
                        type: "spring",
                        stiffness: 200,
                      }}
                      whileHover={{
                        scale: 1.2,
                        y: -10,
                        transition: { duration: 0.2 },
                      }}
                    >
                      {letter}
                    </motion.span>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Subtext with animation */}
          <motion.p
            className="text-sm text-gray-600 mb-16 tracking-wide text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.5 }}
          >
            Created by{" "}
            <motion.span
              className="font-semibold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent cursor-hover"
              whileHover={{ scale: 1.05 }}
            >
              Fakhry Zacky Akhmad
            </motion.span>
          </motion.p>

          {/* Decorative Line */}
          <motion.div
            className="h-1 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 mb-16 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: "100px" }}
            transition={{ duration: 0.8, delay: 1.7 }}
          />

          {/* CTA Buttons with Stagger Animation */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.8 }}
          >
            <motion.a
              href="#portfolio"
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 text-white rounded-full cursor-hover font-semibold shadow-lg relative overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-pink-600 via-orange-500 to-purple-600"
                initial={{ x: "100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
              <span className="relative z-10">Lihat Project</span>
              <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
            </motion.a>

            <motion.a
              href="https://wa.me/6281292018844"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 border-2 border-purple-600 text-purple-600 rounded-full cursor-hover font-semibold hover:bg-purple-600 hover:text-white transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <span>Hubungi Saya</span>
            </motion.a>
          </motion.div>

          {/* Floating Emojis */}
          <div className="absolute top-1/4 right-10 hidden lg:block">
            <motion.div
              className="text-6xl cursor-hover"
              animate={{
                y: [0, -30, 0],
                rotate: [0, 10, -10, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              whileHover={{ scale: 1.3 }}
            >
              🚀
            </motion.div>
          </div>

          <div className="absolute bottom-1/4 left-10 hidden lg:block">
            <motion.div
              className="text-5xl cursor-hover"
              animate={{
                y: [0, 20, 0],
                rotate: [0, -15, 15, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              whileHover={{ scale: 1.3 }}
            >
              ✨
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
