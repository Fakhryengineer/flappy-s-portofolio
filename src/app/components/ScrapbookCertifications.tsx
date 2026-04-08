import { motion, useInView, AnimatePresence } from "motion/react";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Award, ExternalLink, Download } from "lucide-react";
import mtcnaImage from "figma:asset/7b82ad5e1ae128ff859063ad06f39c117418b896.png";
import mtcreImage from "figma:asset/0243bd0c30a153c28e7677afb667502fa2e06dfe.png";
import mtcineImage from "figma:asset/dc0695ca11e2632102c74802f638aed856bdd806.png";

const certifications = [
  {
    id: 1,
    title: "MikroTik Certified Network Associate",
    shortName: "MTCNA",
    description: "Fundamental certification covering basic MikroTik RouterOS configuration, routing, wireless, and network security.",
    issuer: "MikroTik",
    date: "2025",
    certNumber: "2508NA2219",
    issueDate: "2025-08-28",
    color: "from-blue-400 to-cyan-500",
    bgColor: "bg-blue-50",
    link: "https://drive.google.com/file/d/1lH4jcjI7uPOoY8z0iNWs-nE7FgbkzB4-/view?usp=sharing",
    badge: "🎓",
    image: mtcnaImage,
    skills: ["RouterOS", "Networking", "Wireless", "Security"],
  },
  {
    id: 2,
    title: "MikroTik Certified Routing Engineer",
    shortName: "MTCRE",
    description: "Advanced routing certification covering OSPF, BGP, MPLS, and complex network routing scenarios.",
    issuer: "MikroTik",
    date: "2025",
    certNumber: "2510RE3457",
    issueDate: "2025-10-03",
    color: "from-green-400 to-emerald-500",
    bgColor: "bg-green-50",
    link: "https://drive.google.com/file/d/1IwH5iKb-tMFgHUSxiVJTYkM54hbOO_T2/view?usp=sharing",
    badge: "🏆",
    image: mtcreImage,
    skills: ["OSPF", "BGP", "MPLS", "Routing"],
  },
  {
    id: 3,
    title: "MikroTik Certified Inter-networking Engineer",
    shortName: "MTCINE",
    description: "Expert-level certification demonstrating advanced networking and inter-networking capabilities.",
    issuer: "MikroTik",
    date: "2026",
    certNumber: "2602INE6401",
    issueDate: "2026-02-16",
    color: "from-purple-400 to-violet-500",
    bgColor: "bg-purple-50",
    link: "https://drive.google.com/file/d/1DDv1nt-Zi3nYPeJTd2w6KkBFOGHztlbp/view?usp=sharing",
    badge: "⭐",
    image: mtcineImage,
    skills: ["Inter-networking", "Advanced Config", "Enterprise", "Expert"],
  },
];

export function ScrapbookCertifications() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentPage, setCurrentPage] = useState(0);

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % certifications.length);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + certifications.length) % certifications.length);
  };

  const currentCert = certifications[currentPage];

  return (
    <section
      id="certifications"
      ref={ref}
      className="py-20 bg-gradient-to-b from-yellow-50 via-amber-50 to-orange-50 relative overflow-hidden"
    >
      {/* Paper Texture Overlay */}
      <div 
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1642781319034-04153f7a0e09?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrcmFmdCUyMHBhcGVyJTIwdGV4dHVyZSUyMGJhY2tncm91bmR8ZW58MXx8fHwxNzc0NTAwODk0fDA&ixlib=rb-4.1.0&q=80&w=1080')`,
          backgroundSize: 'cover',
        }}
      />

      {/* Floating Doodles */}
      <motion.div
        className="absolute top-20 right-20 text-5xl"
        animate={{ rotate: [0, 10, -10, 0], y: [0, -15, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
      >
        🎓
      </motion.div>

      <motion.div
        className="absolute bottom-40 left-10 text-4xl"
        animate={{ rotate: [0, -15, 15, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 6, repeat: Infinity }}
      >
        🏆
      </motion.div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20 relative"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block relative mb-8">
            {/* Washi Tape */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-56 h-10 bg-green-300/70 -rotate-2"
              style={{ clipPath: 'polygon(2% 0, 98% 0, 100% 100%, 0% 100%)' }}
            />
            <h2 className="text-5xl lg:text-6xl font-bold relative z-10 py-4"
              style={{
                background: 'linear-gradient(135deg, #10b981 0%, #3b82f6 50%, #8b5cf6 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              My Certifications 🎓
            </h2>
          </div>
          
          <motion.p
            className="text-lg text-gray-600 max-w-2xl mx-auto relative"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="bg-yellow-200/50 px-3 py-1 rounded">
              Flip through my achievement pages! 📖
            </span>
          </motion.p>
        </motion.div>

        {/* Open Book Layout */}
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Book Container */}
            <div className="relative flex flex-col lg:flex-row gap-0 items-stretch">
              {/* Left Page - Certificate Display */}
              <motion.div
                className="relative bg-white p-8 lg:p-12 shadow-2xl lg:rounded-l-3xl border-4 border-amber-100 flex-1 min-h-[600px]"
                style={{
                  boxShadow: '-10px 10px 40px rgba(0,0,0,0.15)',
                }}
              >
                {/* Page Number */}
                <div className="absolute top-4 right-4 w-12 h-12 bg-amber-200 rounded-full flex items-center justify-center font-bold text-amber-800 shadow-md">
                  {currentPage * 2 + 1}
                </div>

                {/* Washi Tape */}
                <div 
                  className="absolute -top-3 left-1/4 w-32 h-8 bg-blue-300/60 -rotate-3 shadow-sm"
                  style={{ clipPath: 'polygon(2% 0, 98% 0, 100% 100%, 0% 100%)' }}
                />

                {/* Sticker Badge */}
                <motion.div
                  className="absolute -top-6 -left-6 text-5xl"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  {currentCert.badge}
                </motion.div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentPage}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 50 }}
                    transition={{ duration: 0.5 }}
                    className="h-full flex flex-col"
                  >
                    {/* Badge Icon */}
                    <motion.div
                      className={`inline-flex p-4 bg-gradient-to-br ${currentCert.color} rounded-2xl shadow-lg mb-6 rotate-3 w-fit`}
                      whileHover={{ rotate: 6, scale: 1.1 }}
                    >
                      <Award className="w-8 h-8 text-white" />
                    </motion.div>

                    {/* Cert Name with Highlight */}
                    <div className="relative inline-block mb-2">
                      <h3 className="text-3xl lg:text-4xl font-bold text-gray-800 relative z-10">
                        {currentCert.shortName}
                      </h3>
                      <motion.div
                        className={`absolute bottom-1 left-0 right-0 h-3 ${currentCert.bgColor} -rotate-1 -z-10`}
                        initial={{ width: 0 }}
                        animate={{ width: '100%' }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                      />
                    </div>

                    {/* Full Title */}
                    <p className="text-lg text-gray-700 font-semibold mb-4">
                      {currentCert.title}
                    </p>

                    {/* Issuer & Date */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className="bg-amber-100 px-4 py-2 rounded-lg border-2 border-amber-200">
                        <span className="text-sm font-medium text-gray-700">
                          {currentCert.issuer}
                        </span>
                      </div>
                      <div className="bg-pink-100 px-4 py-2 rounded-lg border-2 border-pink-200">
                        <span className="text-sm font-medium text-gray-700">
                          {currentCert.date}
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {currentCert.description}
                    </p>

                    {/* Skills - Sticky Notes */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {currentCert.skills.map((skill, i) => (
                        <motion.span
                          key={i}
                          className="px-3 py-2 bg-yellow-100 text-gray-700 text-sm font-medium rounded-lg shadow-sm border-2 border-yellow-200"
                          whileHover={{ rotate: 3, scale: 1.05 }}
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="mt-auto flex flex-col sm:flex-row gap-3">
                      <motion.a
                        href={currentCert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r ${currentCert.color} text-white rounded-full font-semibold shadow-lg`}
                        whileHover={{ scale: 1.05, rotate: 1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>View Certificate</span>
                      </motion.a>

                      <motion.a
                        href={currentCert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-gray-300 text-gray-700 bg-white rounded-full font-semibold hover:bg-gray-100 transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Download className="w-4 h-4" />
                        <span>Download</span>
                      </motion.a>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </motion.div>

              {/* Right Page - Visual Preview */}
              <motion.div
                className="relative bg-white p-8 lg:p-12 shadow-2xl lg:rounded-r-3xl border-4 border-amber-100 flex-1 min-h-[600px]"
                style={{
                  boxShadow: '10px 10px 40px rgba(0,0,0,0.15)',
                }}
              >
                {/* Page Number */}
                <div className="absolute top-4 left-4 w-12 h-12 bg-amber-200 rounded-full flex items-center justify-center font-bold text-amber-800 shadow-md">
                  {currentPage * 2 + 2}
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentPage}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.5 }}
                    className="h-full flex items-center justify-center"
                  >
                    {/* Certificate Image Frame */}
                    <div className="relative w-full h-full">
                      {/* Polaroid-style frame with actual certificate - ABOVE the lanyard */}
                      <motion.div 
                        className="absolute inset-0 bg-white shadow-2xl p-6 rotate-1 z-10"
                        whileHover={{ rotate: 2, scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="w-full h-full rounded-lg overflow-hidden shadow-lg border-4 border-gray-100">
                          {/* Actual Certificate Image */}
                          <img
                            src={currentCert.image}
                            alt={`${currentCert.shortName} Certificate - Fakhry Zacky Ahmad`}
                            className="w-full h-full object-contain bg-white"
                          />
                        </div>

                        {/* Polaroid Caption */}
                        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white px-6 py-2 shadow-lg rotate-2 border-2 border-amber-200">
                          <span className="text-sm font-medium text-gray-700">
                            {currentCert.shortName} Certificate 🎓
                          </span>
                        </div>
                      </motion.div>

                      {/* Photo Corners */}
                      <div className="absolute -top-2 -left-2 w-8 h-8 border-t-4 border-l-4 border-amber-400 z-10"></div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 border-t-4 border-r-4 border-amber-400 z-10"></div>
                      <div className="absolute -bottom-2 -left-2 w-8 h-8 border-b-4 border-l-4 border-amber-400 z-10"></div>
                      <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-4 border-r-4 border-amber-400 z-10"></div>

                      {/* Certificate Number Sticker */}
                      <motion.div
                        className="absolute -top-6 -right-6 bg-gradient-to-r from-amber-400 to-orange-500 text-white px-4 py-2 rounded-full shadow-lg text-xs font-bold rotate-12 z-20"
                        whileHover={{ rotate: 15, scale: 1.1 }}
                      >
                        {currentCert.certNumber}
                      </motion.div>

                      {/* Issue Date Sticker */}
                      <motion.div
                        className="absolute -bottom-8 -left-6 bg-gradient-to-r from-pink-400 to-rose-500 text-white px-4 py-2 rounded-full shadow-lg text-xs font-bold -rotate-12 z-20"
                        whileHover={{ rotate: -15, scale: 1.1 }}
                      >
                        📅 {currentCert.issueDate}
                      </motion.div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </motion.div>

              {/* Book Spine/Binding */}
              <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-8 bg-amber-200 shadow-inner hidden lg:block"
                style={{
                  background: 'repeating-linear-gradient(0deg, #fbbf24 0px, #fbbf24 20px, #f59e0b 20px, #f59e0b 40px)',
                }}
              />
            </div>

            {/* Navigation Controls - Arrow Buttons */}
            <div className="flex items-center justify-center gap-8 mt-12">
              {/* Previous Button */}
              <motion.button
                onClick={prevPage}
                className="group relative inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-400 to-orange-500 text-white rounded-full font-bold shadow-lg"
                whileHover={{ scale: 1.05, x: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <ChevronLeft className="w-5 h-5" />
                <span>Previous</span>
              </motion.button>

              {/* Page Indicator */}
              <div className="flex gap-3">
                {certifications.map((_, index) => (
                  <motion.button
                    key={index}
                    onClick={() => setCurrentPage(index)}
                    className={`w-4 h-4 rounded-full transition-all duration-300 ${
                      index === currentPage
                        ? 'bg-gradient-to-r from-amber-500 to-orange-500 w-8'
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  />
                ))}
              </div>

              {/* Next Button */}
              <motion.button
                onClick={nextPage}
                className="group relative inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-full font-bold shadow-lg"
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Next</span>
                <ChevronRight className="w-5 h-5" />
              </motion.button>
            </div>

            {/* Current Page Info */}
            <motion.div
              className="text-center mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <div className="inline-block bg-white px-6 py-3 rounded-full shadow-md border-2 border-amber-200">
                <span className="text-sm font-medium text-gray-700">
                  Page {currentPage + 1} of {certifications.length}
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}