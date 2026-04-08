import { motion } from "motion/react";
import { Instagram, Linkedin, Github, Mail, Phone, Heart } from "lucide-react";

const socialLinks = [
  { icon: Instagram, href: "https://instagram.com/kresifystudio" },
  { icon: Linkedin, href: "https://linkedin.com/in/fakhry-zacky" },
  { icon: Github, href: "https://github.com/fakhry-zacky" },
];

export function Footer() {
  return (
    <footer id="contact" className="bg-black text-white relative overflow-hidden py-20">
      {/* Background Gradient */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.h3
              className="text-4xl mb-4 cursor-hover"
              whileHover={{ scale: 1.05 }}
            >
              Kresify Studio
            </motion.h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Membangun website yang cepat, fungsional, dan bermakna untuk
              pelajar dan UMKM.
            </p>

            {/* Decorative Badge */}
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-sm cursor-hover"
              whileHover={{ scale: 1.05 }}
            >
              <span>✨</span>
              <span>Available for Projects</span>
            </motion.div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-xl mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {["Home", "About", "Portfolio", "Services", "Contact"].map(
                (link, i) => (
                  <motion.li
                    key={link}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 + i * 0.05 }}
                  >
                    <motion.a
                      href={`#${link.toLowerCase()}`}
                      className="text-gray-400 hover:text-white transition-colors cursor-hover inline-block"
                      whileHover={{ x: 5 }}
                    >
                      {link}
                    </motion.a>
                  </motion.li>
                )
              )}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-xl mb-6">Get In Touch</h4>
            <div className="space-y-4">
              <motion.a
                href="https://wa.me/6281292018844"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors cursor-hover group"
                whileHover={{ x: 5 }}
              >
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <span>+62 812-9201-8844</span>
              </motion.a>

              <motion.a
                href="mailto:contact@kresifystudio.com"
                className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors cursor-hover group"
                whileHover={{ x: 5 }}
              >
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <span>contact@kresifystudio.com</span>
              </motion.a>
            </div>

            {/* Social Links */}
            <div className="mt-8">
              <p className="text-sm text-gray-400 mb-4">Follow Me</p>
              <div className="flex gap-3">
                {socialLinks.map((social, i) => (
                  <motion.a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-white/5 backdrop-blur-sm flex items-center justify-center hover:bg-white/10 transition-colors cursor-hover"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.3 + i * 0.05 }}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-gray-400 text-sm text-center md:text-left">
            © 2026 Kresify Studio. All rights reserved.
          </p>

          <motion.div
            className="flex items-center gap-2 text-sm text-gray-400 cursor-hover"
            whileHover={{ scale: 1.05 }}
          >
            <span>Made with</span>
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Heart className="w-4 h-4 fill-red-500 text-red-500" />
            </motion.div>
            <span>by Fakhry</span>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <motion.div
        className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-gradient-to-br from-purple-600/10 to-pink-600/10 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
    </footer>
  );
}