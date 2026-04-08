import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";

export function AnimatedMascot() {
  const [isHovered, setIsHovered] = useState(false);
  const [isWaving, setIsWaving] = useState(false);
  const [expression, setExpression] = useState<"happy" | "excited" | "cool">("happy");

  // Random idle animations
  useEffect(() => {
    const interval = setInterval(() => {
      const random = Math.random();
      if (random > 0.7) {
        setExpression("excited");
        setTimeout(() => setExpression("happy"), 2000);
      } else if (random > 0.4) {
        setExpression("cool");
        setTimeout(() => setExpression("happy"), 1500);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (isHovered) {
      setIsWaving(true);
      const timer = setTimeout(() => setIsWaving(false), 1000);
      return () => clearTimeout(timer);
    }
  }, [isHovered]);

  return (
    <motion.div
      className="relative cursor-pointer select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 1.8 }}
      style={{ perspective: "1200px" }}
    >
      {/* 3D Pixel Character Container */}
      <motion.div
        className="relative"
        animate={{
          y: isHovered ? [-5, -35, -5] : [0, -3, 0],
          rotateY: isHovered ? [0, 360] : 0,
        }}
        transition={{
          y: isHovered
            ? { duration: 0.5, ease: "easeInOut" }
            : { duration: 2, repeat: Infinity, ease: "easeInOut" },
          rotateY: { duration: 0.8, ease: "easeInOut" },
        }}
        style={{ transformStyle: "preserve-3d" }}
      >
        <div className="relative w-32 h-48">
          {/* 3D Voxel Character */}
          <motion.div
            className="absolute inset-0"
            animate={{
              rotateX: isHovered ? 5 : 15,
              rotateY: isHovered ? 0 : -15,
            }}
            transition={{ duration: 0.4 }}
            style={{
              transformStyle: "preserve-3d",
            }}
          >
            {/* Head - Enhanced Voxel Cube */}
            <motion.div
              className="absolute top-0 left-1/2 -translate-x-1/2"
              style={{ transformStyle: "preserve-3d" }}
              animate={{
                rotateZ: isWaving ? [0, -5, 5, 0] : 0,
              }}
              transition={{ duration: 0.6, repeat: isWaving ? 2 : 0 }}
            >
              {/* Head Front */}
              <div
                className="w-16 h-16 bg-gradient-to-br from-amber-300 via-amber-400 to-amber-500 border-2 border-amber-600 relative overflow-hidden"
                style={{
                  transform: "translateZ(8px)",
                  boxShadow: "inset 0 0 0 2px rgba(245, 158, 11, 0.3)",
                }}
              >
                {/* Hair - More detailed */}
                <div className="absolute top-0 left-0 right-0 h-6">
                  <div className="absolute top-0 left-1 w-3 h-5 bg-gradient-to-b from-gray-900 to-gray-800" />
                  <div className="absolute top-0 left-3 w-3 h-6 bg-gradient-to-b from-gray-900 to-gray-800" />
                  <div className="absolute top-0 left-6 w-4 h-6 bg-gradient-to-b from-gray-950 to-gray-900" />
                  <div className="absolute top-0 right-3 w-3 h-6 bg-gradient-to-b from-gray-900 to-gray-800" />
                  <div className="absolute top-0 right-1 w-2 h-5 bg-gradient-to-b from-gray-900 to-gray-800" />
                  {/* Hair highlights */}
                  <div className="absolute top-1 left-7 w-1 h-2 bg-gray-700 opacity-50" />
                </div>

                {/* Eyebrows */}
                <motion.div
                  className="absolute top-6 left-2 w-3 h-1 bg-gray-900 rounded-sm"
                  animate={{
                    y: expression === "excited" ? -1 : 0,
                  }}
                />
                <motion.div
                  className="absolute top-6 right-2 w-3 h-1 bg-gray-900 rounded-sm"
                  animate={{
                    y: expression === "excited" ? -1 : 0,
                  }}
                />

                {/* Eyes - Animated */}
                <AnimatePresence mode="wait">
                  {expression === "happy" && (
                    <motion.div
                      key="happy"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <div className="absolute top-8 left-3 w-2 h-2 bg-gray-900 rounded-sm" />
                      <div className="absolute top-8 left-3.5 w-1 h-1 bg-white rounded-full" />
                      <div className="absolute top-8 right-3 w-2 h-2 bg-gray-900 rounded-sm" />
                      <div className="absolute top-8 right-3.5 w-1 h-1 bg-white rounded-full" />
                    </motion.div>
                  )}
                  {expression === "excited" && (
                    <motion.div
                      key="excited"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <div className="absolute top-8 left-3 w-2.5 h-2.5 bg-gray-900 rounded-full" />
                      <div className="absolute top-8 left-4 w-1 h-1 bg-white rounded-full" />
                      <div className="absolute top-8 right-3 w-2.5 h-2.5 bg-gray-900 rounded-full" />
                      <div className="absolute top-8 right-4 w-1 h-1 bg-white rounded-full" />
                      {/* Star eyes sparkle */}
                      <div className="absolute top-7 left-4 w-1 h-1 bg-yellow-300" />
                      <div className="absolute top-7 right-4 w-1 h-1 bg-yellow-300" />
                    </motion.div>
                  )}
                  {expression === "cool" && (
                    <motion.div
                      key="cool"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      {/* Sunglasses */}
                      <div className="absolute top-7 left-2 w-4 h-2 bg-gray-900 border border-gray-950 rounded-sm" />
                      <div className="absolute top-7 right-2 w-4 h-2 bg-gray-900 border border-gray-950 rounded-sm" />
                      <div className="absolute top-8 left-5 right-5 h-0.5 bg-gray-900" />
                      {/* Glare */}
                      <div className="absolute top-7 left-3 w-1 h-1 bg-white opacity-60" />
                      <div className="absolute top-7 right-3 w-1 h-1 bg-white opacity-60" />
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Nose */}
                <div className="absolute top-10 left-1/2 -translate-x-1/2 w-1.5 h-1 bg-amber-600 rounded-sm" />

                {/* Smile - Animated */}
                <motion.div
                  className="absolute bottom-4 left-1/2 -translate-x-1/2"
                  animate={{
                    width: expression === "excited" ? "32px" : "24px",
                    scaleY: expression === "excited" ? 1.2 : 1,
                  }}
                >
                  <div className="w-full h-1.5 bg-gray-900 rounded-full" />
                  {/* Teeth */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-1 bg-white rounded-sm" />
                </motion.div>

                {/* Blush */}
                <motion.div
                  className="absolute bottom-6 left-1 w-2.5 h-2 bg-rose-400 rounded-full opacity-60"
                  animate={{
                    opacity: expression === "excited" ? 0.8 : 0.6,
                  }}
                />
                <motion.div
                  className="absolute bottom-6 right-1 w-2.5 h-2 bg-rose-400 rounded-full opacity-60"
                  animate={{
                    opacity: expression === "excited" ? 0.8 : 0.6,
                  }}
                />
              </div>

              {/* Head Top */}
              <div
                className="absolute top-0 left-0 w-16 h-8 bg-gradient-to-b from-gray-950 to-gray-900"
                style={{
                  transform: "rotateX(90deg)",
                  transformOrigin: "top",
                }}
              />

              {/* Head Right Side */}
              <div
                className="absolute top-0 right-0 w-8 h-16 bg-gradient-to-l from-amber-500 to-amber-600"
                style={{
                  transform: "rotateY(90deg)",
                  transformOrigin: "right",
                }}
              >
                {/* Ear */}
                <div className="absolute top-8 left-0 w-2 h-3 bg-amber-400 rounded-sm" />
              </div>

              {/* Head Left Side */}
              <div
                className="absolute top-0 left-0 w-8 h-16 bg-gradient-to-r from-amber-400 to-amber-500"
                style={{
                  transform: "rotateY(-90deg)",
                  transformOrigin: "left",
                }}
              >
                {/* Ear */}
                <div className="absolute top-8 right-0 w-2 h-3 bg-amber-400 rounded-sm" />
              </div>
            </motion.div>

            {/* Body - Enhanced Voxel Cube */}
            <motion.div
              className="absolute top-[68px] left-1/2 -translate-x-1/2"
              style={{ transformStyle: "preserve-3d" }}
              animate={{
                scaleY: [1, 1.02, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {/* Body Front - Dark Polo Shirt */}
              <div
                className="w-20 h-20 bg-gradient-to-br from-gray-800 via-gray-900 to-black border-2 border-gray-950 relative overflow-hidden"
                style={{
                  transform: "translateZ(10px)",
                  boxShadow: "inset 0 0 0 2px rgba(31, 41, 55, 0.3)",
                }}
              >
                {/* Collar */}
                <div className="absolute top-0 left-0 right-0 h-4 bg-gradient-to-b from-gray-950 to-gray-900">
                  <div className="absolute top-1 left-1/4 w-2 h-3 bg-gray-800 transform -skew-x-12" />
                  <div className="absolute top-1 right-1/4 w-2 h-3 bg-gray-800 transform skew-x-12" />
                </div>

                {/* ID Card Lanyard */}
                <div className="absolute top-3 left-1/2 -translate-x-1/2 w-1 h-8 bg-gradient-to-b from-blue-600 to-blue-700" />
                <div className="absolute top-11 left-1/2 -translate-x-1/2 w-4 h-5 bg-gradient-to-br from-blue-500 to-blue-600 border-2 border-blue-700 rounded-sm">
                  {/* ID Photo placeholder */}
                  <div className="absolute top-0.5 left-0.5 w-1.5 h-1.5 bg-blue-300 rounded-sm" />
                  {/* Text lines */}
                  <div className="absolute bottom-1 left-0.5 right-0.5 h-0.5 bg-blue-800" />
                  <div className="absolute bottom-0.5 left-0.5 right-1 h-0.5 bg-blue-800" />
                </div>

                {/* Pocket */}
                <div className="absolute top-12 left-2 w-3 h-4 border-l-2 border-b-2 border-r-2 border-gray-700 rounded-b-sm">
                  {/* Pen in pocket */}
                  <div className="absolute -top-1 right-0 w-1 h-3 bg-blue-500 border-l border-blue-600" />
                </div>

                {/* Badge Icon */}
                <div className="absolute top-6 right-2 w-3 h-3 border-2 border-yellow-600 rotate-45 bg-yellow-500/20">
                  <div className="absolute inset-0.5 bg-yellow-400 opacity-50" />
                </div>

                {/* Wrinkles */}
                <div className="absolute top-8 left-4 w-8 h-0.5 bg-black/30" />
                <div className="absolute top-14 left-3 w-10 h-0.5 bg-black/20" />
              </div>

              {/* Body Top */}
              <div
                className="absolute top-0 left-0 w-20 h-10 bg-gradient-to-b from-gray-700 to-gray-800"
                style={{
                  transform: "rotateX(90deg)",
                  transformOrigin: "top",
                }}
              />

              {/* Body Right Side */}
              <div
                className="absolute top-0 right-0 w-10 h-20 bg-gradient-to-l from-black to-gray-950"
                style={{
                  transform: "rotateY(90deg)",
                  transformOrigin: "right",
                }}
              />

              {/* Body Left Side */}
              <div
                className="absolute top-0 left-0 w-10 h-20 bg-gradient-to-r from-gray-900 to-gray-950"
                style={{
                  transform: "rotateY(-90deg)",
                  transformOrigin: "left",
                }}
              />
            </motion.div>

            {/* Right Arm - Waving */}
            <motion.div
              className="absolute top-[72px] -right-2"
              style={{
                transformStyle: "preserve-3d",
                transformOrigin: "top center",
              }}
              animate={{
                rotateZ: isWaving ? [0, -20, -40, -20, 0] : 0,
                rotateX: isWaving ? [0, 10, 0] : 0,
              }}
              transition={{
                duration: 0.6,
                repeat: isWaving ? 2 : 0,
              }}
            >
              <div
                className="w-5 h-14 bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-950"
                style={{
                  transform: "translateZ(5px)",
                }}
              >
                {/* Sleeve detail */}
                <div className="absolute bottom-0 left-0 right-0 h-2 bg-gray-950" />
              </div>
              {/* Hand */}
              <div
                className="absolute -bottom-5 left-0 w-5 h-5 bg-gradient-to-br from-amber-400 to-amber-500 border border-amber-600 rounded-sm"
                style={{
                  transform: "translateZ(5px)",
                }}
              >
                {/* Fingers */}
                <div className="absolute -top-1 left-0 w-1 h-2 bg-amber-400" />
                <div className="absolute -top-1.5 left-1 w-1 h-2 bg-amber-400" />
                <div className="absolute -top-1 left-2 w-1 h-2 bg-amber-400" />
              </div>
            </motion.div>

            {/* Left Arm */}
            <motion.div
              className="absolute top-[72px] -left-2"
              style={{
                transformStyle: "preserve-3d",
                transformOrigin: "top center",
              }}
            >
              <div
                className="w-5 h-14 bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-950"
                style={{
                  transform: "translateZ(5px)",
                }}
              >
                {/* Sleeve detail */}
                <div className="absolute bottom-0 left-0 right-0 h-2 bg-gray-950" />
              </div>
              {/* Hand with phone */}
              <div
                className="absolute -bottom-5 left-0 w-5 h-5 bg-gradient-to-br from-amber-400 to-amber-500 border border-amber-600 rounded-sm"
                style={{
                  transform: "translateZ(5px)",
                }}
              >
                {/* Phone */}
                <div className="absolute top-0 left-1 w-3 h-4 bg-gray-900 border border-gray-950 rounded-sm">
                  <div className="absolute inset-0.5 bg-blue-400" />
                </div>
              </div>
            </motion.div>

            {/* Legs - Enhanced Voxel Cubes */}
            <div
              className="absolute top-[92px] left-1/2 -translate-x-1/2"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Left Leg */}
              <motion.div
                className="absolute left-2"
                style={{ transformStyle: "preserve-3d" }}
                animate={{
                  rotateX: [0, 5, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div
                  className="w-7 h-16 bg-gradient-to-br from-amber-100 via-amber-200 to-amber-300 border border-amber-400"
                  style={{
                    transform: "translateZ(5px)",
                    boxShadow: "inset 0 0 0 1px rgba(217, 119, 6, 0.2)",
                  }}
                >
                  {/* Cargo pocket */}
                  <div className="absolute top-4 right-0 w-2 h-4 bg-amber-300 border border-amber-400">
                    <div className="absolute inset-0.5 border border-amber-500" />
                  </div>
                  {/* Seam */}
                  <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-amber-300" />
                  {/* Knee wrinkle */}
                  <div className="absolute top-10 left-0 right-0 h-0.5 bg-amber-400" />
                </div>

                {/* Leg Right Side */}
                <div
                  className="absolute top-0 right-0 w-5 h-16 bg-gradient-to-l from-amber-300 to-amber-400"
                  style={{
                    transform: "rotateY(90deg)",
                    transformOrigin: "right",
                  }}
                />
              </motion.div>

              {/* Right Leg */}
              <motion.div
                className="absolute right-2"
                style={{ transformStyle: "preserve-3d" }}
                animate={{
                  rotateX: [0, -5, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
              >
                <div
                  className="w-7 h-16 bg-gradient-to-br from-amber-100 via-amber-200 to-amber-300 border border-amber-400"
                  style={{
                    transform: "translateZ(5px)",
                    boxShadow: "inset 0 0 0 1px rgba(217, 119, 6, 0.2)",
                  }}
                >
                  {/* Cargo pocket */}
                  <div className="absolute top-4 left-0 w-2 h-4 bg-amber-300 border border-amber-400">
                    <div className="absolute inset-0.5 border border-amber-500" />
                  </div>

                  {/* Watch */}
                  <div className="absolute top-2 left-0 w-4 h-3 bg-gray-800 border border-gray-900 rounded-sm">
                    <div className="absolute inset-0.5 bg-gray-700" />
                    <div className="absolute top-0.5 left-0.5 w-1 h-1 bg-blue-400" />
                  </div>

                  {/* Seam */}
                  <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-amber-300" />
                  {/* Knee wrinkle */}
                  <div className="absolute top-10 left-0 right-0 h-0.5 bg-amber-400" />
                </div>

                {/* Leg Left Side */}
                <div
                  className="absolute top-0 left-0 w-5 h-16 bg-gradient-to-r from-amber-200 to-amber-300"
                  style={{
                    transform: "rotateY(-90deg)",
                    transformOrigin: "left",
                  }}
                />
              </motion.div>

              {/* Left Shoe */}
              <div
                className="absolute bottom-0 left-2 w-7 h-5 bg-gradient-to-br from-amber-700 via-amber-800 to-amber-900 border border-amber-950"
                style={{
                  transform: "translateZ(5px) translateY(16px)",
                }}
              >
                {/* Shoe details */}
                <div className="absolute top-1 left-0 right-0 h-0.5 bg-amber-950" />
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-900" />
              </div>

              {/* Right Shoe */}
              <div
                className="absolute bottom-0 right-2 w-7 h-5 bg-gradient-to-br from-amber-700 via-amber-800 to-amber-900 border border-amber-950"
                style={{
                  transform: "translateZ(5px) translateY(16px)",
                }}
              >
                {/* Shoe details */}
                <div className="absolute top-1 left-0 right-0 h-0.5 bg-amber-950" />
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-900" />
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Enhanced Pixel Shadow */}
      <motion.div
        className="absolute -bottom-2 left-1/2 -translate-x-1/2"
        animate={{
          scale: isHovered ? [1, 0.6, 1] : 1,
          opacity: isHovered ? [0.4, 0.2, 0.4] : 0.4,
        }}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
        }}
      >
        <div
          className="w-24 h-5 bg-black/40 blur-md"
          style={{
            clipPath: "polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)",
          }}
        />
      </motion.div>

      {/* Enhanced Pixel Sparkles & Effects */}
      <AnimatePresence>
        {isHovered && (
          <>
            {/* Top sparkles */}
            <motion.div
              className="absolute -top-6 -right-2 w-2 h-2 bg-yellow-400 shadow-lg shadow-yellow-400/50"
              initial={{ opacity: 0, scale: 0, rotate: 0 }}
              animate={{ opacity: 1, scale: 1, rotate: 180 }}
              exit={{ opacity: 0, scale: 0 }}
            />
            <motion.div
              className="absolute top-0 -right-6 w-3 h-3 bg-orange-400 shadow-lg shadow-orange-400/50"
              initial={{ opacity: 0, scale: 0, rotate: 0 }}
              animate={{ opacity: 1, scale: 1, rotate: 90 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ delay: 0.1 }}
            />
            <motion.div
              className="absolute -top-4 -left-4 w-2 h-2 bg-pink-400 shadow-lg shadow-pink-400/50"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ delay: 0.15 }}
            />
            <motion.div
              className="absolute top-4 -left-6 w-2.5 h-2.5 bg-purple-400 shadow-lg shadow-purple-400/50"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ delay: 0.2 }}
            />

            {/* Heart particles */}
            <motion.div
              className="absolute -top-8 left-1/2 -translate-x-1/2 text-red-500 text-xs"
              initial={{ opacity: 0, y: 0 }}
              animate={{ opacity: [0, 1, 0], y: -20 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
            >
              ♥
            </motion.div>

            {/* Music note */}
            <motion.div
              className="absolute top-8 -right-8 text-blue-500 text-sm font-bold"
              initial={{ opacity: 0, rotate: 0 }}
              animate={{ opacity: [0, 1, 0], rotate: 20, y: -10 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              ♪
            </motion.div>

            {/* Plus signs */}
            <motion.div
              className="absolute bottom-4 -left-6 text-green-500 text-xs font-bold"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0], scale: [1, 1.5, 1] }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              +
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.div>
  );
}