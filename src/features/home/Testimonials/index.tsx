"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  TestimonialsBackground,
  CaseStudyCard,
  CaseStudyModal,
} from "./components";
import { testimonialsConfig, type CaseStudy } from "./config/testimonials.config";

export default function Testimonials() {
  const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleLearnMore = (caseStudy: CaseStudy) => {
    setSelectedCase(caseStudy);
    setModalOpen(true);
  };

  return (
    <section
      id="testimonials"
      className="py-16 sm:py-20 md:py-24 bg-black relative overflow-hidden"
      aria-labelledby="testimonials-heading"
    >
      <TestimonialsBackground />

      <div className="container mx-auto px-5 sm:px-6 md:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 
            id="testimonials-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
          >
            <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              {testimonialsConfig.title.split(' ').slice(0, 2).join(' ')}
            </span>{' '}
            <span className="bg-gradient-to-r from-red-500 to-amber-500 bg-clip-text text-transparent">
              {testimonialsConfig.title.split(' ').slice(2).join(' ')}
            </span>
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            {testimonialsConfig.subtitle}
          </p>
        </motion.div>

        {/* Case Studies Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {testimonialsConfig.caseStudies.map((caseStudy, index) => (
            <CaseStudyCard
              key={caseStudy.id}
              caseStudy={caseStudy}
              index={index}
              onLearnMore={() => handleLearnMore(caseStudy)}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-white/60 text-sm">
            Want similar results for your business?{' '}
            <a href="#" className="text-amber-400 hover:text-amber-300 underline underline-offset-4 transition-colors">
              Book a free consultation
            </a>
          </p>
        </motion.div>
      </div>

      {/* Case Study Modal */}
      <CaseStudyModal
        caseStudy={selectedCase}
        open={modalOpen}
        onOpenChange={setModalOpen}
      />
    </section>
  );
}
