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
    className="group relative flex flex-col items-center justify-center gap-4 bg-[#0A0A0A] border border-white/10 hover:border-white/40 transition-colors duration-500 px-6 py-10 w-full h-[240px]"
  >

    {/* Icon */}
    <div className="relative z-10 w-14 h-14 rounded-full border border-white/15 bg-white/5 flex items-center justify-center group-hover:border-white/50 transition-all duration-500">
      <Icon
        className="w-6 h-6 text-zinc-300 group-hover:text-white transition-colors duration-500"
        strokeWidth={1.5}
      />
    </div>

    {/* Label */}
    <p className="relative z-10 text-[11px] uppercase tracking-[0.25em] font-medium" style={{ textAlign: "center" }}>
      {label}
    </p>

    {/* Value */}
    <p className="relative z-10 text-base md:text-lg font-light text-center break-all" style={{ textAlign: "center" }}>
      {value}
    </p>

    {/* Bottom Line */}
    <span className="relative z-10 h-px w-10 bg-white/15 group-hover:w-16 group-hover:bg-white/50 transition-all duration-500" />
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

      <section className="flex-grow py-10 md:py-14 px-5 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col items-stretch">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-left mb-8"
          >
            <h2 className="heading-section mb-3">
              Get in Touch
            </h2>

            <p className="text-base font-light">
              Reach out directly. Happy to hear from you.
            </p>
          </motion.div>

          {/* Contact Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 w-full"
          >
            <ContactCard
              icon={Mail}
              label="Personal Email"
              value="Bakul@bakulchandra.com"
              href="mailto:Bakul@bakulchandra.com"
            />

            <ContactCard
              icon={Mail}
              label="Business Email"
              value="Bakul@renascent.co.in"
              href="mailto:Bakul@renascent.co.in"
            />

            <ContactCard
              icon={Phone}
              label="Call On"
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
            className="mt-10 text-xs font-light tracking-wide"
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