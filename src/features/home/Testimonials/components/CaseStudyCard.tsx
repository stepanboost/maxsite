"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { CaseStudy } from "../config/testimonials.config";

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
  index: number;
  onLearnMore: () => void;
}

export function CaseStudyCard({ caseStudy, index, onLearnMore }: CaseStudyCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative bg-gradient-to-br from-white/[0.07] to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-amber-500/30 transition-all duration-300"
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
          style={{ backgroundImage: `url(${caseStudy.image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/50 to-transparent" />
        
        {/* Badge */}
        <div className="absolute top-4 left-4 flex items-center gap-2">
          <span className="text-2xl">{caseStudy.icon}</span>
          <span className="px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full text-xs font-medium text-white/90 border border-white/10">
            {caseStudy.industry}
          </span>
        </div>

        {/* Result badge */}
        <div className="absolute bottom-4 right-4">
          <div className="px-4 py-2 bg-gradient-to-r from-red-500/90 to-amber-500/90 backdrop-blur-sm rounded-lg">
            <span className="font-bold text-white text-sm">{caseStudy.result}</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="mb-3">
          <span className="text-xs font-medium text-amber-400 uppercase tracking-wider">
            {caseStudy.solution}
          </span>
        </div>

        <p className="text-white/70 text-sm mb-4 line-clamp-3">
          {caseStudy.shortDescription}
        </p>

        {/* Key results preview */}
        <div className="space-y-2 mb-6">
          {caseStudy.results.metrics.slice(0, 2).map((metric, i) => (
            <div key={i} className="flex items-center gap-2 text-sm text-white/60">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              <span>{metric}</span>
            </div>
          ))}
        </div>

        <Button 
          onClick={onLearnMore}
          className="w-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-amber-500/50 text-white transition-all duration-300 group/btn"
        >
          <span>Learn More</span>
          <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
        </Button>
      </div>

      {/* Glow effect on hover */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-amber-500/5" />
      </div>
    </motion.div>
  );
}
