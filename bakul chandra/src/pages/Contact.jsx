import React from "react";
import { motion } from "framer-motion";
import { Phone, Mail } from "lucide-react";
import PageHeroSection from "../component/PageHeroSection";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.15,
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const ContactCard = ({ icon: Icon, label, value, href }) => (
  <motion.a
    href={href}
    variants={itemVariants}
    whileHover={{ y: -8, scale: 1.03 }}
    whileTap={{ scale: 0.98 }}
    transition={{ type: "spring", stiffness: 300, damping: 20 }}
    className="group relative flex flex-col items-center justify-center gap-5 bg-[#0A0A0A] border border-white/10 rounded-3xl px-8 py-12 w-full sm:w-[300px] min-h-[280px] overflow-hidden"
  >
    {/* Glow Effect */}
    <div className="pointer-events-none absolute -inset-20 bg-[radial-gradient(circle_at_center,rgba(159,28,68,0.18),transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

    {/* Icon */}
    <div className="relative z-10 w-16 h-16 rounded-full border border-white/15 bg-white/5 flex items-center justify-center group-hover:border-[#9F1C44]/60 group-hover:bg-[#9F1C44]/10 transition-all duration-500">
      <Icon
        className="w-6 h-6 text-zinc-300 group-hover:text-white transition-colors duration-500"
        strokeWidth={1.5}
      />
    </div>

    {/* Label */}
    <p className="relative z-10 text-[11px] uppercase tracking-[0.25em] text-zinc-500 font-medium">
      {label}
    </p>

    {/* Value */}
    <p className="relative z-10 text-lg font-light text-zinc-200 text-center break-all group-hover:text-white transition-colors duration-300">
      {value}
    </p>

    {/* Bottom Line */}
    <span className="relative z-10 h-px w-10 bg-white/15 group-hover:w-16 group-hover:bg-[#9F1C44]/60 transition-all duration-500" />
  </motion.a>
);

function Contact() {
  return (
    <div className="min-h-screen bg-[#050505] text-white font-archivo flex flex-col">
      <PageHeroSection
        image="/bakul-sir.jpeg"
        title="Contact"
        clastyle="grayscale-75 object-[center_20%]"
      />

      <section className="flex-grow py-20 md:py-28 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-light mb-4 tracking-wide">
              Get in Touch
            </h2>

            <p className="text-zinc-500 text-lg font-light">
              Reach out directly — happy to hear from you.
            </p>
          </motion.div>

          {/* Contact Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8 w-full justify-items-center"
          >
            <ContactCard
              icon={Mail}
              label="Yahoo Mail"
              value="bakulchandra@yahoo.com"
              href="mailto:bakulchandra@yahoo.com"
            />

            <ContactCard
              icon={Mail}
              label="Renascent"
              value="Bakul@renascent.co.in"
              href="mailto:Bakul@renascent.co.in"
            />

            <ContactCard
              icon={Mail}
              label="Personal Email"
              value="Bakul@bakulchandra.com"
              href="mailto:Bakul@bakulchandra.com"
            />

            <ContactCard
              icon={Phone}
              label="Call Us"
              value="+91 98919 62202"
              href="tel:+919891962202"
            />
          </motion.div>

          {/* Credit Line */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
            className="mt-16 text-xs text-zinc-600 font-light tracking-wide"
          >
            Website managed by{" "}
            <a
              href="https://webkik.co.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 hover:text-white transition-colors underline underline-offset-4"
            >
              Webkik Services
            </a>
          </motion.p>
        </div>
      </section>
    </div>
  );
}

export default Contact;