import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { BookMarked, Code2, Layout, Smartphone, BookOpen, ExternalLink, Network, Wifi } from "lucide-react";
import bookCoverFront from "figma:asset/610c6ba5b1f000db37333a1f8333bfa0d9f2d957.png";
import bookCoverBack from "figma:asset/69d63a23083a5d2370522ae9a1b6269e77fb7b31.png";
import networkTopology from "figma:asset/9579537074b408d0beaf8ba4e43b7fa1669bfdba.png";
import networkPresentation from "figma:asset/8c35eda9a95df9f210dc9bbf8388967133f78901.png";
import rtrwRouter from "figma:asset/815d74be9f3e472e2643b656db8b5be7e7f6eaa0.png";
import rtrwSetup from "figma:asset/6dceba81d39f37b51144cebe7ffdd6671d5434fb.png";
import rtrwLogin from "figma:asset/26865a910a0e39678e2eafb3eb981d46633b2cb7.png";
import rtrwVoucher from "figma:asset/7807c517953c09f678874f726be2841860150f0e.png";
import tahfidzLogin from "figma:asset/5853f5fc9c2bad1d7ad6b1b0905770a051a775fa.png";
import landingPagePreview from "figma:asset/dd1c06555df2e1b1208f036ef6f9e354a2a73dbb.png";
import portfolioPreview from "figma:asset/ba74fe988dc80067af4f2ebfde518c785fe904af.png";

const projects = [
  {
    id: 1,
    title: "Membuat Buku dan Mendesain Cover Buku",
    description: "Desain cover buku untuk buku 'Jaringan Komputer & Sistem Routing Dunia' dengan konsep futuristik dan teknologi. Cover menampilkan visualisasi network global dengan elemen 3D yang eye-catching.",
    tech: ["Book Design", "Cover Design", "Typography"],
    color: "from-indigo-400 to-blue-600",
    bgColor: "bg-indigo-50",
    icon: BookOpen,
    sticker: "📕",
    tapeColor: "bg-indigo-300/60",
    coverFront: bookCoverFront,
    coverBack: bookCoverBack,
    isBookProject: true,
    docLink: "https://drive.google.com/file/d/19TvSmbA7qa6xxEZOstlm1HsBZerTCZdo/view?usp=sharing",
    docLabel: "Lihat Hasil Buku",
  },
  {
    id: 2,
    title: "Mendesain dan Mensimulasikan Lab Jaringan",
    description: "Lab jaringan ini dibuat untuk mensimulasikan infrastruktur jaringan skala menengah hingga besar yang terstruktur, aman, dan efisien, seperti yang digunakan pada lingkungan sekolah, kampus, maupun perusahaan.",
    tech: ["Network Design", "Cisco Packet Tracer", "Infrastructure"],
    color: "from-cyan-400 to-teal-600",
    bgColor: "bg-cyan-50",
    icon: Network,
    sticker: "🌐",
    tapeColor: "bg-cyan-300/60",
    networkTopology: networkTopology,
    networkPresentation: networkPresentation,
    isNetworkProject: true,
    docLink: "https://www.notion.so/native/Superlab-1-32f3190f4a1d80d2a5aae2798bdc3caf?source=copy_link&deepLinkOpenNewTab=true",
    docLabel: "Lihat Dokumentasi",
  },
  {
    id: 3,
    title: "Membuat dan Meng-implementasikan RT/RW Net",
    description: "Membangun infrastruktur jaringan internet untuk lingkungan RT/RW yang terjangkau dan mudah dikelola. Menggunakan sistem voucher berbasis MIKHMON untuk manajemen bandwidth yang efisien, serta hotspot login portal yang user-friendly untuk memberikan akses internet berkualitas kepada warga.",
    tech: ["MikroTik", "MIKHMON", "Hotspot System"],
    color: "from-emerald-400 to-green-600",
    bgColor: "bg-emerald-50",
    icon: Wifi,
    sticker: "📡",
    tapeColor: "bg-emerald-300/60",
    rtrwRouter: rtrwRouter,
    rtrwSetup: rtrwSetup,
    rtrwLogin: rtrwLogin,
    rtrwVoucher: rtrwVoucher,
    isRtrwProject: true,
    docLink: "https://youtu.be/x9_VJjdZnuA",
    docLabel: "Lihat Presentasi",
  },
  {
    id: 4,
    title: "Website Monitoring Hafalan Tahfidz",
    description: "Sistem pencatatan hafalan Al-Qur'an dengan layout UI/UX yang interaktif dan mudah dipahami. Platform ini dilengkapi dengan dashboard monitoring progress hafalan, manajemen santri, dan sistem pelaporan yang komprehensif untuk memudahkan guru tahfidz dalam memantau perkembangan hafalan setiap santri.",
    tech: ["React", "UI/UX Design", "Dashboard"],
    color: "from-amber-400 to-orange-500",
    bgColor: "bg-amber-50",
    icon: BookMarked,
    sticker: "📖",
    tapeColor: "bg-amber-300/60",
    tahfidzLogin: tahfidzLogin,
    isTahfidzProject: true,
    docLink: "https://tahfidzmanage.lovable.app/login",
    docLabel: "Lihat Website",
  },
  {
    id: 5,
    title: "Landing Page Jasa Kresify Studio",
    description: "Landing page yang dirancang khusus untuk Kresify Studio dengan tagline menarik 'Butuh Website Cepat Tanpa Ribet?'. Menampilkan layanan pembuatan website dan landing page dalam 1-3 hari dengan harga terjangkau. Dilengkapi dengan desain gradient modern (purple-cyan), CTA button yang eye-catching, dan struktur informasi yang jelas untuk meningkatkan konversi leads.",
    tech: ["Figma Design", "Modern UI", "Conversion Focused"],
    color: "from-pink-400 to-rose-500",
    bgColor: "bg-pink-50",
    icon: Layout,
    sticker: "🎨",
    tapeColor: "bg-pink-300/60",
    landingPagePreview: landingPagePreview,
    isLandingPageProject: true,
    docLink: "https://zero-motion-95971181.figma.site",
    docLabel: "Lihat Landing Page",
  },
  {
    id: 6,
    title: "Website Portfolio Pribadi",
    description: "Selamat datang di buku portfolio saya! Website ini menampilkan berbagai project yang telah saya kerjakan dengan penuh kreativitas dan semangat. Dilengkapi dengan desain playful, animasi smooth, dan layout yang menarik untuk memberikan pengalaman browsing yang menyenangkan. Mari jelajahi halaman demi halaman dan lihat karya-karya yang saya buat! ✨",
    tech: ["React", "Motion", "Scrapbook Design"],
    color: "from-purple-400 to-violet-500",
    bgColor: "bg-purple-50",
    icon: Smartphone,
    sticker: "✨",
    tapeColor: "bg-purple-300/60",
    portfolioPreview: portfolioPreview,
    isPortfolioProject: true,
    docLink: "https://ballet-icon-94918689.figma.site/",
    docLabel: "Lihat Portfolio",
  },
];

export function ScrapbookProjects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="portfolio"
      ref={ref}
      className="py-20 bg-gradient-to-b from-white via-amber-50 to-orange-50 relative overflow-hidden"
    >
      {/* Paper Texture Overlay */}
      <div 
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1642781319034-04153f7a0e09?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrcmFmdCUyMHBhcGVyJTIwdGV4dHVyZSUyMGJhY2tncm91bmR8ZW58MXx8fHwxNzc0NTAwODk0fDA&ixlib=rb-4.1.0&q=80&w=1080')`,
          backgroundSize: 'cover',
        }}
      />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header - Scrapbook Style */}
        <motion.div
          className="text-center mb-20 relative"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Washi Tape Header */}
          <div className="inline-block relative mb-8">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-48 h-10 bg-yellow-300/70 -rotate-2"
              style={{ clipPath: 'polygon(2% 0, 98% 0, 100% 100%, 0% 100%)' }}
            />
            <h2 className="text-5xl lg:text-6xl font-bold relative z-10 py-4"
              style={{
                background: 'linear-gradient(135deg, #f59e0b 0%, #ec4899 50%, #8b5cf6 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              My Project Book 📚
            </h2>
          </div>
          
          <motion.p
            className="text-lg text-gray-600 max-w-2xl mx-auto relative"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="bg-pink-200/50 px-3 py-1 rounded">
              Jelajahi halaman demi halaman project yang saya kerjakan! ✨
            </span>
          </motion.p>
        </motion.div>

        {/* Book Pages - Projects */}
        <div className="space-y-32 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="relative"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              {/* Open Book Layout */}
              <div className={`relative ${index % 2 === 0 ? '' : 'lg:flex-row-reverse'} flex flex-col lg:flex-row gap-0`}>
                {/* Left Page - Content */}
                <motion.div
                  className={`relative bg-white p-8 lg:p-12 shadow-2xl ${index % 2 === 0 ? 'lg:rounded-l-3xl' : 'lg:rounded-r-3xl'} border-4 border-amber-100 flex-1`}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    boxShadow: index % 2 === 0 
                      ? '-10px 10px 40px rgba(0,0,0,0.15)' 
                      : '10px 10px 40px rgba(0,0,0,0.15)',
                  }}
                >
                  {/* Page Number - Left page should be on the left */}
                  <div className={`absolute top-4 ${index % 2 === 0 ? 'left-4' : 'right-4'} w-12 h-12 bg-amber-200 rounded-full flex items-center justify-center font-bold text-amber-800 shadow-md`}>
                    {index * 2 + 1}
                  </div>

                  {/* Masking Tape */}
                  <div 
                    className={`absolute -top-3 left-1/4 w-32 h-8 ${project.tapeColor} -rotate-3 shadow-sm`}
                    style={{ clipPath: 'polygon(2% 0, 98% 0, 100% 100%, 0% 100%)' }}
                  />

                  {/* Sticker */}
                  <motion.div
                    className="absolute -top-6 -left-6 text-5xl"
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                  >
                    {project.sticker}
                  </motion.div>

                  {/* Icon */}
                  <motion.div
                    className={`inline-flex p-4 bg-gradient-to-br ${project.color} rounded-2xl shadow-lg mb-6 rotate-3`}
                    whileHover={{ rotate: 6, scale: 1.1 }}
                  >
                    <project.icon className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* Title with Highlighter Effect */}
                  <div className="relative inline-block mb-4">
                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 relative z-10">
                      {project.title}
                    </h3>
                    <motion.div
                      className={`absolute bottom-1 left-0 right-0 h-3 ${project.bgColor} -rotate-1 -z-10`}
                      initial={{ width: 0 }}
                      animate={isInView ? { width: '100%' } : {}}
                      transition={{ duration: 0.8, delay: index * 0.2 + 0.5 }}
                    />
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Tech Tags - Sticky Notes Style */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, i) => (
                      <motion.span
                        key={i}
                        className="px-4 py-2 bg-yellow-100 text-gray-700 text-sm font-medium rounded-lg shadow-sm border-2 border-yellow-200"
                        whileHover={{ rotate: 3, scale: 1.05 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  {/* Doodle Arrow */}
                  <svg className="w-20 h-20 text-amber-500" viewBox="0 0 100 100">
                    <motion.path
                      d="M 10 50 Q 30 20, 60 40 T 90 50"
                      stroke="currentColor"
                      strokeWidth="3"
                      fill="none"
                      strokeLinecap="round"
                      initial={{ pathLength: 0 }}
                      animate={isInView ? { pathLength: 1 } : {}}
                      transition={{ duration: 1, delay: index * 0.2 + 0.7 }}
                    />
                    <motion.path
                      d="M 90 50 L 80 45 M 90 50 L 85 60"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      initial={{ pathLength: 0 }}
                      animate={isInView ? { pathLength: 1 } : {}}
                      transition={{ duration: 0.5, delay: index * 0.2 + 1.5 }}
                    />
                  </svg>

                  {/* View Book Button - Only for book project */}
                  {project.isBookProject && (
                    <motion.a
                      href={project.docLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-full font-bold text-sm shadow-lg hover:shadow-xl transition-all duration-300 mt-6"
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.6, delay: index * 0.2 + 1.8 }}
                      whileHover={{ scale: 1.05, rotate: 2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink className="w-5 h-5" />
                      <span>{project.docLabel}</span>
                      <span className="text-lg">📖</span>
                    </motion.a>
                  )}

                  {/* View Documentation Button - Only for network project */}
                  {project.isNetworkProject && (
                    <motion.a
                      href={project.docLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-teal-600 text-white rounded-full font-bold text-sm shadow-lg hover:shadow-xl transition-all duration-300 mt-6"
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.6, delay: index * 0.2 + 1.8 }}
                      whileHover={{ scale: 1.05, rotate: 2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink className="w-5 h-5" />
                      <span>{project.docLabel}</span>
                      <span className="text-lg">🌐</span>
                    </motion.a>
                  )}

                  {/* View Documentation Button - Only for RT/RW project */}
                  {project.isRtrwProject && (
                    <motion.a
                      href={project.docLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 to-teal-600 text-white rounded-full font-bold text-sm shadow-lg hover:shadow-xl transition-all duration-300 mt-6"
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.6, delay: index * 0.2 + 1.8 }}
                      whileHover={{ scale: 1.05, rotate: 2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink className="w-5 h-5" />
                      <span>{project.docLabel}</span>
                      <span className="text-lg">💳</span>
                    </motion.a>
                  )}

                  {/* View Website Button - Only for Tahfidz project */}
                  {project.isTahfidzProject && (
                    <motion.a
                      href={project.docLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-600 text-white rounded-full font-bold text-sm shadow-lg hover:shadow-xl transition-all duration-300 mt-6"
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.6, delay: index * 0.2 + 1.8 }}
                      whileHover={{ scale: 1.05, rotate: 2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink className="w-5 h-5" />
                      <span>{project.docLabel}</span>
                      <span className="text-lg">📖</span>
                    </motion.a>
                  )}

                  {/* View Landing Page Button - Only for Landing Page project */}
                  {project.isLandingPageProject && (
                    <motion.a
                      href={project.docLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-pink-500 to-rose-600 text-white rounded-full font-bold text-sm shadow-lg hover:shadow-xl transition-all duration-300 mt-6"
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.6, delay: index * 0.2 + 1.8 }}
                      whileHover={{ scale: 1.05, rotate: 2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink className="w-5 h-5" />
                      <span>{project.docLabel}</span>
                      <span className="text-lg">🎨</span>
                    </motion.a>
                  )}

                  {/* View Portfolio Button - Only for Portfolio project */}
                  {project.isPortfolioProject && (
                    <motion.a
                      href={project.docLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-violet-600 text-white rounded-full font-bold text-sm shadow-lg hover:shadow-xl transition-all duration-300 mt-6"
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.6, delay: index * 0.2 + 1.8 }}
                      whileHover={{ scale: 1.05, rotate: 2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink className="w-5 h-5" />
                      <span>{project.docLabel}</span>
                      <span className="text-lg">✨</span>
                    </motion.a>
                  )}
                </motion.div>

                {/* Right Page - Image */}
                <motion.div
                  className={`relative bg-white p-6 shadow-2xl ${index % 2 === 0 ? 'lg:rounded-r-3xl' : 'lg:rounded-l-3xl'} border-4 border-amber-100 flex-1 overflow-hidden`}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    boxShadow: index % 2 === 0 
                      ? '10px 10px 40px rgba(0,0,0,0.15)' 
                      : '-10px 10px 40px rgba(0,0,0,0.15)',
                  }}
                >
                  {/* Page Number - Right page should be on the right */}
                  <div className={`absolute top-4 ${index % 2 === 0 ? 'right-4' : 'left-4'} w-12 h-12 bg-amber-200 rounded-full flex items-center justify-center font-bold text-amber-800 shadow-md z-10`}>
                    {index * 2 + 2}
                  </div>

                  {/* Image with Polaroid Effect */}
                  <div className="relative h-full min-h-[400px] lg:min-h-[500px]">
                    {project.isBookProject ? (
                      // Special layout for book cover project
                      <div className="flex flex-col gap-4 h-full justify-center">
                        {/* Front Cover */}
                        <motion.div 
                          className="relative flex-1"
                          initial={{ rotateY: -15, opacity: 0 }}
                          animate={isInView ? { rotateY: 0, opacity: 1 } : {}}
                          transition={{ duration: 0.8, delay: index * 0.2 + 0.5 }}
                        >
                          <div className="absolute inset-0 bg-gradient-to-br from-indigo-100 to-purple-100 shadow-2xl rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
                            <img
                              src={project.coverFront}
                              alt="Book Cover Front"
                              className="w-full h-full object-contain p-2"
                            />
                            {/* Shine effect */}
                            <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent pointer-events-none"></div>
                          </div>
                          {/* Label */}
                          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-white px-3 py-1 shadow-md rotate-2 text-xs text-gray-600 whitespace-nowrap z-20">
                            Front Cover 📖
                          </div>
                        </motion.div>

                        {/* Back Cover */}
                        <motion.div 
                          className="relative flex-1"
                          initial={{ rotateY: 15, opacity: 0 }}
                          animate={isInView ? { rotateY: 0, opacity: 1 } : {}}
                          transition={{ duration: 0.8, delay: index * 0.2 + 0.7 }}
                        >
                          <div className="absolute inset-0 bg-gradient-to-br from-purple-100 to-indigo-100 shadow-2xl rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
                            <img
                              src={project.coverBack}
                              alt="Book Cover Back"
                              className="w-full h-full object-contain p-2"
                            />
                            {/* Shine effect */}
                            <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent pointer-events-none"></div>
                          </div>
                          {/* Label */}
                          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-white px-3 py-1 shadow-md -rotate-2 text-xs text-gray-600 whitespace-nowrap z-20">
                            Back Cover 📝
                          </div>
                        </motion.div>
                      </div>
                    ) : project.isNetworkProject ? (
                      // Special layout for network project
                      <div className="flex flex-col gap-4 h-full justify-center">
                        {/* Network Topology */}
                        <motion.div 
                          className="relative flex-1"
                          initial={{ rotateY: -15, opacity: 0 }}
                          animate={isInView ? { rotateY: 0, opacity: 1 } : {}}
                          transition={{ duration: 0.8, delay: index * 0.2 + 0.5 }}
                        >
                          <div className="absolute inset-0 bg-gradient-to-br from-indigo-100 to-purple-100 shadow-2xl rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
                            <img
                              src={project.networkTopology}
                              alt="Network Topology"
                              className="w-full h-full object-contain p-2"
                            />
                            {/* Shine effect */}
                            <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent pointer-events-none"></div>
                          </div>
                          {/* Label */}
                          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-white px-3 py-1 shadow-md rotate-2 text-xs text-gray-600 whitespace-nowrap z-20">
                            Topologi Jaringan 🌐
                          </div>
                        </motion.div>

                        {/* Network Presentation */}
                        <motion.div 
                          className="relative flex-1"
                          initial={{ rotateY: 15, opacity: 0 }}
                          animate={isInView ? { rotateY: 0, opacity: 1 } : {}}
                          transition={{ duration: 0.8, delay: index * 0.2 + 0.7 }}
                        >
                          <div className="absolute inset-0 bg-gradient-to-br from-purple-100 to-indigo-100 shadow-2xl rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
                            <img
                              src={project.networkPresentation}
                              alt="Network Presentation"
                              className="w-full h-full object-contain p-2"
                            />
                            {/* Shine effect */}
                            <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent pointer-events-none"></div>
                          </div>
                          {/* Label */}
                          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-white px-3 py-1 shadow-md -rotate-2 text-xs text-gray-600 whitespace-nowrap z-20">
                            Presentasi Jaringan 📝
                          </div>
                        </motion.div>
                      </div>
                    ) : project.isRtrwProject ? (
                      // Special layout for RT/RW project - 2x2 Grid
                      <div className="grid grid-cols-2 gap-3 h-full p-2">
                        {/* Router Setup - Top Left */}
                        <motion.div 
                          className="relative"
                          initial={{ scale: 0, opacity: 0 }}
                          animate={isInView ? { scale: 1, opacity: 1 } : {}}
                          transition={{ duration: 0.6, delay: index * 0.2 + 0.5 }}
                        >
                          <div className="relative h-full bg-gradient-to-br from-emerald-100 to-green-100 shadow-xl rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
                            <img
                              src={project.rtrwRouter}
                              alt="Router Setup"
                              className="w-full h-full object-cover"
                            />
                            {/* Shine effect */}
                            <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent pointer-events-none"></div>
                          </div>
                          {/* Label */}
                          <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 bg-white px-2 py-1 shadow-md rotate-2 text-xs text-gray-600 whitespace-nowrap z-20">
                            Router 🌐
                          </div>
                        </motion.div>

                        {/* Setup Equipment - Top Right */}
                        <motion.div 
                          className="relative"
                          initial={{ scale: 0, opacity: 0 }}
                          animate={isInView ? { scale: 1, opacity: 1 } : {}}
                          transition={{ duration: 0.6, delay: index * 0.2 + 0.6 }}
                        >
                          <div className="relative h-full bg-gradient-to-br from-teal-100 to-cyan-100 shadow-xl rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
                            <img
                              src={project.rtrwSetup}
                              alt="Setup Equipment"
                              className="w-full h-full object-cover"
                            />
                            {/* Shine effect */}
                            <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent pointer-events-none"></div>
                          </div>
                          {/* Label */}
                          <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 bg-white px-2 py-1 shadow-md -rotate-2 text-xs text-gray-600 whitespace-nowrap z-20">
                            Setup 🔧
                          </div>
                        </motion.div>

                        {/* Login Page - Bottom Left */}
                        <motion.div 
                          className="relative"
                          initial={{ scale: 0, opacity: 0 }}
                          animate={isInView ? { scale: 1, opacity: 1 } : {}}
                          transition={{ duration: 0.6, delay: index * 0.2 + 0.7 }}
                        >
                          <div className="relative h-full bg-gradient-to-br from-blue-100 to-indigo-100 shadow-xl rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
                            <img
                              src={project.rtrwLogin}
                              alt="Login Page"
                              className="w-full h-full object-cover"
                            />
                            {/* Shine effect */}
                            <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent pointer-events-none"></div>
                          </div>
                          {/* Label */}
                          <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 bg-white px-2 py-1 shadow-md -rotate-1 text-xs text-gray-600 whitespace-nowrap z-20">
                            Login 🔐
                          </div>
                        </motion.div>

                        {/* Voucher Design - Bottom Right */}
                        <motion.div 
                          className="relative"
                          initial={{ scale: 0, opacity: 0 }}
                          animate={isInView ? { scale: 1, opacity: 1 } : {}}
                          transition={{ duration: 0.6, delay: index * 0.2 + 0.8 }}
                        >
                          <div className="relative h-full bg-gradient-to-br from-purple-100 to-pink-100 shadow-xl rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
                            <img
                              src={project.rtrwVoucher}
                              alt="Voucher Design"
                              className="w-full h-full object-cover"
                            />
                            {/* Shine effect */}
                            <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent pointer-events-none"></div>
                          </div>
                          {/* Label */}
                          <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 bg-white px-2 py-1 shadow-md rotate-1 text-xs text-gray-600 whitespace-nowrap z-20">
                            Voucher 💳
                          </div>
                        </motion.div>
                      </div>
                    ) : project.isTahfidzProject ? (
                      // Special layout for Tahfidz project
                      <div className="flex flex-col gap-4 h-full justify-center">
                        {/* Login Page */}
                        <motion.div 
                          className="relative flex-1"
                          initial={{ rotateY: -15, opacity: 0 }}
                          animate={isInView ? { rotateY: 0, opacity: 1 } : {}}
                          transition={{ duration: 0.8, delay: index * 0.2 + 0.5 }}
                        >
                          <div className="absolute inset-0 bg-gradient-to-br from-amber-100 to-orange-100 shadow-2xl rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
                            <img
                              src={project.tahfidzLogin}
                              alt="Login Page"
                              className="w-full h-full object-cover"
                            />
                            {/* Shine effect */}
                            <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent pointer-events-none"></div>
                          </div>
                          {/* Label */}
                          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-white px-3 py-1 shadow-md rotate-2 text-xs text-gray-600 whitespace-nowrap z-20">
                            Login 🔐
                          </div>
                        </motion.div>
                      </div>
                    ) : project.isLandingPageProject ? (
                      // Special layout for Landing Page project
                      <div className="flex flex-col gap-4 h-full justify-center">
                        {/* Landing Page Preview */}
                        <motion.div 
                          className="relative flex-1"
                          initial={{ rotateY: -15, opacity: 0 }}
                          animate={isInView ? { rotateY: 0, opacity: 1 } : {}}
                          transition={{ duration: 0.8, delay: index * 0.2 + 0.5 }}
                        >
                          <div className="absolute inset-0 bg-gradient-to-br from-pink-100 to-rose-100 shadow-2xl rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
                            <img
                              src={project.landingPagePreview}
                              alt="Landing Page Preview"
                              className="w-full h-full object-cover"
                            />
                            {/* Shine effect */}
                            <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent pointer-events-none"></div>
                          </div>
                          {/* Label */}
                          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-white px-3 py-1 shadow-md rotate-2 text-xs text-gray-600 whitespace-nowrap z-20">
                            Landing Page 🎨
                          </div>
                        </motion.div>
                      </div>
                    ) : project.isPortfolioProject ? (
                      // Special layout for Portfolio project
                      <div className="flex flex-col gap-4 h-full justify-center">
                        {/* Portfolio Preview */}
                        <motion.div 
                          className="relative flex-1"
                          initial={{ rotateY: -15, opacity: 0 }}
                          animate={isInView ? { rotateY: 0, opacity: 1 } : {}}
                          transition={{ duration: 0.8, delay: index * 0.2 + 0.5 }}
                        >
                          <div className="absolute inset-0 bg-gradient-to-br from-purple-100 to-violet-100 shadow-2xl rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
                            <img
                              src={project.portfolioPreview}
                              alt="Portfolio Preview"
                              className="w-full h-full object-cover"
                            />
                            {/* Shine effect */}
                            <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent pointer-events-none"></div>
                          </div>
                          {/* Label */}
                          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-white px-3 py-1 shadow-md rotate-2 text-xs text-gray-600 whitespace-nowrap z-20">
                            Portfolio ✨
                          </div>
                        </motion.div>
                      </div>
                    ) : (
                      // Regular project image
                      <div className="absolute inset-4 bg-white shadow-xl p-3 -rotate-1">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover"
                        />
                        {/* Handwritten Caption */}
                        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-white px-4 py-2 shadow-md -rotate-2 text-sm text-gray-600 whitespace-nowrap">
                          Project #{project.id} ✨
                        </div>
                      </div>
                    )}

                    {/* Corner Photo Corners - only for non-book projects */}
                    {!project.isBookProject && !project.isNetworkProject && !project.isRtrwProject && !project.isTahfidzProject && !project.isLandingPageProject && !project.isPortfolioProject && (
                      <>
                        <div className="absolute top-2 left-2 w-6 h-6 border-t-4 border-l-4 border-amber-400"></div>
                        <div className="absolute top-2 right-2 w-6 h-6 border-t-4 border-r-4 border-amber-400"></div>
                        <div className="absolute bottom-2 left-2 w-6 h-6 border-b-4 border-l-4 border-amber-400"></div>
                        <div className="absolute bottom-2 right-2 w-6 h-6 border-b-4 border-r-4 border-amber-400"></div>
                      </>
                    )}
                  </div>
                </motion.div>
              </div>

              {/* Binding/Spine Effect */}
              <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-8 bg-amber-200 shadow-inner hidden lg:block"
                style={{
                  background: 'repeating-linear-gradient(0deg, #fbbf24 0px, #fbbf24 20px, #f59e0b 20px, #f59e0b 40px)',
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* End Page Decoration */}
        <motion.div
          className="mt-32 text-center relative"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <div className="inline-block bg-white px-12 py-8 rounded-3xl shadow-xl border-4 border-amber-100 rotate-1">
            <p className="text-2xl font-bold text-gray-700 mb-2">
              More pages coming soon! 📖✨
            </p>
            <p className="text-gray-500">Stay tuned for more amazing projects</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}