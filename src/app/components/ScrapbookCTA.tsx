import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { MessageCircle, Mail, Instagram, Sparkles } from "lucide-react";

export function ScrapbookCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="py-20 bg-gradient-to-b from-yellow-50 via-orange-50 to-amber-100 relative overflow-hidden"
    >
      {/* Floating Elements */}
      <motion.div
        className="absolute top-10 right-20 text-6xl"
        animate={{
          y: [0, -30, 0],
          rotate: [0, 15, 0],
        }}
        transition={{ duration: 5, repeat: Infinity }}
      >
        💌
      </motion.div>

      <motion.div
        className="absolute bottom-20 left-20 text-5xl"
        animate={{
          y: [0, 20, 0],
          rotate: [0, -15, 0],
        }}
        transition={{ duration: 6, repeat: Infinity }}
      >
        📱
      </motion.div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          className="max-w-4xl mx-auto relative"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Main Card */}
          <div className="relative bg-white rounded-3xl shadow-2xl p-8 lg:p-16 border-4 border-amber-200"
            style={{
              boxShadow: '0 30px 80px rgba(0,0,0,0.2)',
            }}
          >
            {/* Corner Stickers */}
            <motion.div
              className="absolute -top-6 -left-6 w-28 h-28 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-5xl shadow-xl -rotate-12"
              animate={{ rotate: [-12, -6, -12] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              🎯
            </motion.div>

            <motion.div
              className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-pink-400 to-rose-500 rounded-full flex items-center justify-center text-4xl shadow-xl rotate-12"
              animate={{ rotate: [12, 18, 12] }}
              transition={{ duration: 5, repeat: Infinity }}
            >
              💡
            </motion.div>

            {/* Washi Tape Top */}
            <div className="absolute -top-4 left-1/3 w-48 h-10 bg-gradient-to-r from-blue-300/70 to-purple-300/70 -rotate-2 shadow-md"
              style={{ clipPath: 'polygon(2% 0, 98% 0, 100% 100%, 0% 100%)' }}
            />

            {/* Content */}
            <div className="text-center relative z-10">
              {/* Badge */}
              <motion.div
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-yellow-200 to-orange-200 rounded-full mb-8 shadow-md"
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Sparkles className="w-5 h-5 text-orange-600" />
                <span className="text-sm font-bold text-gray-800">LET'S CONNECT!</span>
                <Sparkles className="w-5 h-5 text-orange-600" />
              </motion.div>

              {/* Main Heading */}
              <motion.h2
                className="text-4xl lg:text-5xl font-bold mb-12"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
                style={{
                  background: 'linear-gradient(135deg, #f59e0b 0%, #ec4899 50%, #8b5cf6 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Get In Touch 📬
              </motion.h2>

              {/* Contact Cards - Clickable */}
              <motion.div
                className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                {/* Instagram Card */}
                <motion.a
                  href="https://www.instagram.com/fkyza_/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative bg-gradient-to-br from-pink-50 to-purple-50 p-6 rounded-2xl shadow-lg border-3 border-pink-200 -rotate-2 hover:shadow-2xl transition-all duration-300"
                  whileHover={{ rotate: 0, scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  {/* Icon Circle */}
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-pink-400 to-purple-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Instagram className="w-8 h-8 text-white" />
                  </div>
                  
                  {/* Content */}
                  <div className="text-center">
                    <h3 className="text-lg font-bold text-gray-800 mb-1">Instagram</h3>
                    <p className="text-sm font-medium text-pink-600">@fkyza</p>
                    <p className="text-xs text-gray-500 mt-2">Follow my journey! 📸</p>
                  </div>

                  {/* Corner Sticker */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-pink-400 rounded-full flex items-center justify-center text-xs font-bold text-white shadow-md">
                    IG
                  </div>
                </motion.a>

                {/* Gmail Card */}
                <motion.a
                  href="mailto:fahri.g232@gmail.com"
                  className="group relative bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-2xl shadow-lg border-3 border-blue-200 rotate-1 hover:shadow-2xl transition-all duration-300"
                  whileHover={{ rotate: 0, scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.7 }}
                >
                  {/* Icon Circle */}
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-400 to-cyan-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Mail className="w-8 h-8 text-white" />
                  </div>
                  
                  {/* Content */}
                  <div className="text-center">
                    <h3 className="text-lg font-bold text-gray-800 mb-1">Email</h3>
                    <p className="text-sm font-medium text-blue-600 break-all">fahri.g232@gmail.com</p>
                    <p className="text-xs text-gray-500 mt-2">Send me a message! ✉️</p>
                  </div>

                  {/* Corner Sticker */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center text-xs font-bold text-white shadow-md">
                    @
                  </div>
                </motion.a>

                {/* WhatsApp Card */}
                <motion.a
                  href="https://wa.me/6281292018844"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-2xl shadow-lg border-3 border-green-200 -rotate-1 hover:shadow-2xl transition-all duration-300"
                  whileHover={{ rotate: 0, scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  {/* Icon Circle */}
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <MessageCircle className="w-8 h-8 text-white" />
                  </div>
                  
                  {/* Content */}
                  <div className="text-center">
                    <h3 className="text-lg font-bold text-gray-800 mb-1">WhatsApp</h3>
                    <p className="text-sm font-medium text-green-600">+62 812-9201-8844</p>
                    <p className="text-xs text-gray-500 mt-2">Chat with me! 💬</p>
                  </div>

                  {/* Corner Sticker */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-400 rounded-full flex items-center justify-center text-xs font-bold text-white shadow-md">
                    WA
                  </div>
                </motion.a>
              </motion.div>
            </div>

            {/* Bottom Decoration */}
            <div className="absolute -bottom-3 right-1/4 w-32 h-4 bg-yellow-300 rotate-2"
              style={{
                clipPath: 'polygon(0 0, 10% 40%, 20% 10%, 30% 50%, 40% 20%, 50% 60%, 60% 30%, 70% 70%, 80% 20%, 90% 50%, 100% 0, 100% 100%, 0 100%)'
              }}
            />
          </div>

          {/* Floating Notes */}
          <motion.div
            className="absolute -bottom-12 -left-12 w-40 h-40 bg-yellow-200 shadow-xl -rotate-12 p-6 hidden lg:block"
            initial={{ opacity: 0, rotate: 0 }}
            animate={isInView ? { opacity: 1, rotate: -12 } : {}}
            transition={{ duration: 0.6, delay: 1 }}
            whileHover={{ rotate: -15, scale: 1.05 }}
          >
            <div className="text-sm text-gray-700 leading-relaxed">
              "Fast Response
              <br />
              Quality Work
              <br />
              Affordable Price!"
              <br />
              <span className="text-2xl">✅</span>
            </div>
          </motion.div>

          <motion.div
            className="absolute -top-12 -right-12 w-36 h-36 bg-pink-200 shadow-xl rotate-12 p-6 hidden lg:block"
            initial={{ opacity: 0, rotate: 0 }}
            animate={isInView ? { opacity: 1, rotate: 12 } : {}}
            transition={{ duration: 0.6, delay: 1.1 }}
            whileHover={{ rotate: 15, scale: 1.05 }}
          >
            <div className="text-sm text-gray-700 leading-relaxed">
              "Let's make something awesome! 🎨🚀"
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.footer
        className="mt-32 pt-12 border-t-4 border-amber-200 border-dashed"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 1.2 }}
      >
        <div className="container mx-auto px-6 text-center">
          <div className="inline-block relative mb-6">
            <p className="text-gray-600 text-sm relative z-10 px-4 py-2">
              Made with <span className="text-red-500">❤️</span> by{" "}
              <span className="font-bold text-amber-600">Kresify Studio</span>
            </p>
            <div className="absolute bottom-0 left-0 right-0 h-2 bg-yellow-200/50 -rotate-1"></div>
          </div>
          
          <p className="text-gray-500 text-xs">
            © 2024-2025 Fakhry Zacky Akhmad. All rights reserved.
          </p>

          {/* Decorative Elements */}
          <div className="flex justify-center gap-4 mt-6 text-2xl">
            <motion.span animate={{ rotate: [0, 10, -10, 0] }} transition={{ duration: 3, repeat: Infinity }}>🎨</motion.span>
            <motion.span animate={{ y: [0, -10, 0] }} transition={{ duration: 2, repeat: Infinity }}>✨</motion.span>
            <motion.span animate={{ rotate: [0, -10, 10, 0] }} transition={{ duration: 4, repeat: Infinity }}>🚀</motion.span>
            <motion.span animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2.5, repeat: Infinity }}>💡</motion.span>
          </div>
        </div>
      </motion.footer>
    </section>
  );
}