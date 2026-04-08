import { motion, useInView } from "motion/react";
import { useRef } from "react";
import profileImage from "figma:asset/df90ba5e53a8b778f0240812928e8e806e46ef37.png";
import gdgIdCard from "figma:asset/e5a7b531c338f9bf9814e40643daf3e42fbc166a.png";

export function ScrapbookAbout() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      ref={ref}
      className="py-20 bg-gradient-to-b from-orange-50 via-amber-50 to-yellow-50 relative overflow-hidden"
    >
      {/* Scattered Doodles */}
      <motion.div
        className="absolute top-20 right-20 text-4xl"
        animate={{ rotate: [0, 360], scale: [1, 1.2, 1] }}
        transition={{ duration: 10, repeat: Infinity }}
      >
        🎨
      </motion.div>
      
      <motion.div
        className="absolute bottom-40 left-10 text-5xl"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
      >
        💻
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
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-40 h-8 bg-pink-300/70 -rotate-2"
              style={{ clipPath: 'polygon(2% 0, 98% 0, 100% 100%, 0% 100%)' }}
            />
            <h2 className="text-4xl lg:text-5xl font-bold relative z-10 py-2"
              style={{
                background: 'linear-gradient(135deg, #f59e0b 0%, #ec4899 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              About Me Page 👋
            </h2>
          </div>
        </motion.div>

        {/* Main Content - Scrapbook Layout */}
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="relative bg-white rounded-3xl shadow-2xl p-8 lg:p-12 border-4 border-amber-100"
            initial={{ opacity: 0, rotate: -1 }}
            animate={isInView ? { opacity: 1, rotate: 0 } : {}}
            transition={{ duration: 0.8 }}
            style={{
              boxShadow: '0 20px 60px rgba(0,0,0,0.15)',
            }}
          >
            {/* Corner Decorations */}
            <motion.div
              className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-4xl shadow-lg rotate-12"
              animate={{ rotate: [12, 20, 12] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              ⭐
            </motion.div>

            <motion.div
              className="absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-br from-pink-400 to-rose-500 rounded-full flex items-center justify-center text-3xl shadow-lg -rotate-12"
              animate={{ rotate: [-12, -20, -12] }}
              transition={{ duration: 5, repeat: Infinity }}
            >
              🚀
            </motion.div>

            {/* Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left - ID Card with Lanyard */}
              <motion.div
                className="relative flex justify-center"
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                {/* Lanyard Container */}
                <div className="relative pt-20">
                  {/* Lanyard Strap */}
                  <motion.div
                    className="absolute top-0 left-1/2 -translate-x-1/2 w-10 h-32"
                    initial={{ y: -30, opacity: 0 }}
                    animate={isInView ? { y: 0, opacity: 1 } : {}}
                    transition={{ duration: 1, delay: 0.5 }}
                  >
                    {/* Metal Clip at Top */}
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-12 h-8 bg-gradient-to-b from-gray-300 to-gray-500 rounded-t-xl border-2 border-gray-400 shadow-lg">
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-gray-700 rounded-full"></div>
                    </div>

                    {/* Colorful Striped Strap */}
                    <div 
                      className="w-full h-full rounded-lg shadow-md relative overflow-hidden"
                      style={{
                        background: 'repeating-linear-gradient(45deg, #f59e0b 0px, #f59e0b 12px, #fbbf24 12px, #fbbf24 24px, #ec4899 24px, #ec4899 36px, #8b5cf6 36px, #8b5cf6 48px)',
                      }}
                    >
                      {/* Strap Edges for 3D effect */}
                      <div className="absolute inset-y-0 left-0 w-1 bg-white/40"></div>
                      <div className="absolute inset-y-0 right-0 w-1 bg-black/30"></div>
                      
                      {/* Stitching effect */}
                      <div className="absolute inset-y-0 left-2 w-px bg-white/20"></div>
                      <div className="absolute inset-y-0 right-2 w-px bg-white/20"></div>
                    </div>
                  </motion.div>

                  {/* ID Card Badge */}
                  <motion.div
                    className="relative w-72 bg-white rounded-2xl shadow-2xl border-4 border-gray-200 overflow-hidden"
                    whileHover={{ scale: 1.02, rotate: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Card Header - Gradient Strip */}
                    <div className="w-full h-4 bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600"></div>

                    {/* Card Content */}
                    <div className="p-6">
                      {/* Profile Photo */}
                      <div className="relative mx-auto w-48 aspect-[3/4] rounded-xl overflow-hidden border-4 border-gray-200 shadow-lg mb-4">
                        <img
                          src={profileImage}
                          alt="Fakhry Zacky Ahmad - ID Photo"
                          className="w-full h-full object-cover"
                        />
                        
                        {/* Photo Corners */}
                        <div className="absolute top-0 left-0 w-6 h-6 border-t-4 border-l-4 border-amber-400"></div>
                        <div className="absolute top-0 right-0 w-6 h-6 border-t-4 border-r-4 border-amber-400"></div>
                        <div className="absolute bottom-0 left-0 w-6 h-6 border-b-4 border-l-4 border-amber-400"></div>
                        <div className="absolute bottom-0 right-0 w-6 h-6 border-b-4 border-r-4 border-amber-400"></div>
                      </div>

                      {/* ID Information */}
                      <div className="text-center space-y-2">
                        <h3 className="text-xl font-bold text-gray-800">Fakhry Zacky Ahmad</h3>
                        <p className="text-sm text-gray-600 font-medium">Digital Creator & Developer</p>
                        
                        {/* Badge Tags */}
                        <div className="flex items-center justify-center gap-2 pt-2">
                          <span className="px-3 py-1 bg-gradient-to-r from-blue-400 to-cyan-500 text-white text-xs font-bold rounded-full shadow-md">
                            🎨 Creative
                          </span>
                          <span className="px-3 py-1 bg-gradient-to-r from-green-400 to-emerald-500 text-white text-xs font-bold rounded-full shadow-md">
                            ✅ Verified
                          </span>
                        </div>

                        {/* Company/Studio */}
                        <div className="pt-3 border-t border-gray-200">
                          <p className="text-xs text-gray-500 font-medium">Founder of</p>
                          <p className="text-lg font-bold bg-gradient-to-r from-orange-500 to-pink-600 bg-clip-text text-transparent">
                            Kresify Studio
                          </p>
                        </div>
                      </div>

                      {/* QR Code / Barcode Decoration */}
                      <div className="mt-4 pt-4 border-t border-gray-200">
                        <div className="flex gap-1 justify-center mb-2">
                          {[...Array(15)].map((_, i) => (
                            <div 
                              key={i}
                              className="w-1.5 bg-gray-800 rounded-sm"
                              style={{ height: `${Math.random() * 16 + 12}px` }}
                            ></div>
                          ))}
                        </div>
                        <p className="text-xs text-center text-gray-400 font-mono">ID-2025-KRESIFY</p>
                      </div>
                    </div>

                    {/* Card Footer - Status Indicator */}
                    <div className="px-6 pb-4">
                      <div className="flex items-center justify-center gap-2 bg-green-50 border-2 border-green-200 rounded-lg py-2">
                        <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
                        <span className="text-xs font-bold text-green-700">ACTIVE STATUS</span>
                      </div>
                    </div>

                    {/* Holographic Shine Effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-transparent via-white/10 to-transparent pointer-events-none"
                      animate={{
                        backgroundPosition: ['0% 0%', '100% 100%'],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        repeatType: 'reverse',
                      }}
                    />
                  </motion.div>

                  {/* Floating Stickers */}
                  <motion.div
                    className="absolute -top-4 -right-8 text-4xl"
                    animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.1, 1] }}
                    transition={{ duration: 4, repeat: Infinity }}
                  >
                    🎓
                  </motion.div>

                  <motion.div
                    className="absolute -bottom-6 -left-8 text-3xl"
                    animate={{ rotate: [0, -15, 15, 0] }}
                    transition={{ duration: 5, repeat: Infinity }}
                  >
                    ✨
                  </motion.div>
                </div>
              </motion.div>

              {/* Right - Text Content */}
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                {/* Highlighted Text */}
                <div className="relative inline-block">
                  <h3 className="text-2xl font-bold text-gray-800 relative z-10 px-2">
                    Hi, I'm Fakhry! 👋
                  </h3>
                  <div className="absolute bottom-1 left-0 right-0 h-3 bg-yellow-300/50 -rotate-1"></div>
                </div>

                <p className="text-base text-gray-700 leading-relaxed">
                  Seorang <span className="font-bold text-amber-600">creative developer</span> yang
                  membangun solusi sederhana menjadi pengalaman yang bermakna melalui{" "}
                  <span className="font-bold text-pink-600">Kresify Studio</span>.
                </p>

                <p className="text-base text-gray-600 leading-relaxed">
                  Dengan fokus pada website yang cepat, fungsional, dan mudah digunakan,
                  saya membantu pelajar dan UMKM untuk hadir secara digital tanpa ribet!
                </p>

                {/* Handwritten Note */}
                <motion.div
                  className="relative mt-8"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  <svg className="w-full h-12" viewBox="0 0 400 50">
                    <motion.path
                      d="M 10 25 Q 50 10, 100 25 T 200 25 T 300 25 T 380 25"
                      stroke="#f59e0b"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      initial={{ pathLength: 0 }}
                      animate={isInView ? { pathLength: 1 } : {}}
                      transition={{ duration: 1.5, delay: 0.9 }}
                    />
                  </svg>
                  <p className="text-sm text-gray-500 italic text-center -mt-2">
                    "Let's create something amazing together!" ✨
                  </p>
                </motion.div>
              </motion.div>
            </div>

            {/* Second Row - GDGoc Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-16 pt-12 border-t-4 border-dashed border-amber-200">
              {/* Left - GDGoc Description */}
              <motion.div
                className="space-y-6 order-2 lg:order-1"
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 1.0 }}
              >
                {/* Highlighted Text */}
                <div className="relative inline-block">
                  <h3 className="text-2xl font-bold text-gray-800 relative z-10 px-2">
                    Community Member 🌐
                  </h3>
                  <div className="absolute bottom-1 left-0 right-0 h-3 bg-blue-300/50 -rotate-1"></div>
                </div>

                <p className="text-base text-gray-700 leading-relaxed">
                  Sebagai anggota aktif dari{" "}
                  <span className="font-bold bg-gradient-to-r from-blue-600 via-green-500 to-red-600 bg-clip-text text-transparent">
                    Google Developer Group on Campus (GDGoc)
                  </span>
                  , saya terus belajar dan berkembang bersama komunitas developer untuk
                  menciptakan solusi teknologi yang inovatif dan berdampak.
                </p>

                <p className="text-base text-gray-600 leading-relaxed">
                  Melalui berbagai workshop, hackathon, dan kolaborasi project, saya aktif
                  berkontribusi dalam ekosistem teknologi kampus dan berbagi pengetahuan
                  dengan sesama developer.
                </p>

                {/* Handwritten Note */}
                <motion.div
                  className="relative mt-8"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.6, delay: 1.2 }}
                >
                  <svg className="w-full h-12" viewBox="0 0 400 50">
                    <motion.path
                      d="M 10 25 Q 50 15, 100 25 T 200 25 T 300 25 T 380 25"
                      stroke="#3b82f6"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      initial={{ pathLength: 0 }}
                      animate={isInView ? { pathLength: 1 } : {}}
                      transition={{ duration: 1.5, delay: 1.3 }}
                    />
                  </svg>
                  <p className="text-sm text-gray-500 italic text-center -mt-2">
                    "Building together, growing together!" 🚀
                  </p>
                </motion.div>
              </motion.div>

              {/* Right - GDG ID Card Photo */}
              <motion.div
                className="relative flex justify-center order-1 lg:order-2"
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 1.0 }}
              >
                <div className="relative inline-block">
                  {/* Polaroid Frame */}
                  <div className="bg-white p-4 shadow-xl rounded-lg border-4 border-gray-100 transform rotate-2 hover:rotate-0 transition-transform duration-300">
                    <img
                      src={gdgIdCard}
                      alt="Google Developer Group on Campus ID Card"
                      className="w-80 h-auto rounded-md"
                    />
                    {/* Polaroid Caption */}
                    <div className="mt-3 text-center">
                      <p className="text-base font-bold text-gray-700">GDGoc Member 🎉</p>
                    </div>
                  </div>
                  
                  {/* Sticker */}
                  <motion.div
                    className="absolute -top-4 -right-4 text-4xl"
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    📱
                  </motion.div>

                  {/* Washi Tape */}
                  <div 
                    className="absolute -top-3 left-1/4 w-24 h-8 bg-gradient-to-r from-blue-400/70 to-green-400/70 rotate-12"
                    style={{ clipPath: 'polygon(2% 0, 98% 0, 100% 100%, 0% 100%)' }}
                  />

                  {/* Floating Stickers */}
                  <motion.div
                    className="absolute -bottom-4 -left-4 text-3xl"
                    animate={{ rotate: [0, -15, 15, 0], scale: [1, 1.1, 1] }}
                    transition={{ duration: 4, repeat: Infinity }}
                  >
                    💡
                  </motion.div>
                </div>
              </motion.div>
            </div>

            {/* Masking Tape Decorations */}
            <div className="absolute top-0 left-1/4 w-32 h-6 bg-green-300/60 -rotate-45"
              style={{ clipPath: 'polygon(2% 0, 98% 0, 100% 100%, 0% 100%)' }}
            />
            <div className="absolute bottom-0 right-1/4 w-24 h-6 bg-blue-300/60 rotate-12"
              style={{ clipPath: 'polygon(2% 0, 98% 0, 100% 100%, 0% 100%)' }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}