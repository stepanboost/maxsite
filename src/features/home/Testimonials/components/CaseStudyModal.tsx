"use client";

import { CheckCircle2, Zap, Target, TrendingUp, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import type { CaseStudy } from "../config/testimonials.config";

interface CaseStudyModalProps {
  caseStudy: CaseStudy | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function CaseStudyModal({ caseStudy, open, onOpenChange }: CaseStudyModalProps) {
  if (!caseStudy) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl">
        <DialogHeader className="pb-4 border-b border-white/10">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-3xl">{caseStudy.icon}</span>
            <div>
              <span className="px-3 py-1 bg-gradient-to-r from-red-500/20 to-amber-500/20 rounded-full text-xs font-medium text-amber-400 border border-amber-500/20">
                {caseStudy.industry}
              </span>
            </div>
          </div>
          <DialogTitle className="text-2xl sm:text-3xl font-bold">
            {caseStudy.solution}
          </DialogTitle>
          <div className="mt-3 inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-red-500 to-amber-500 rounded-lg w-fit">
            <TrendingUp className="w-5 h-5 text-white" />
            <span className="font-bold text-white">{caseStudy.result}</span>
          </div>
        </DialogHeader>

        <div className="space-y-8 py-4">
          {/* Challenge Section */}
          <Section
            icon={<Target className="w-5 h-5 text-red-400" />}
            title="The Challenge"
            iconBg="bg-red-500/10"
          >
            <ul className="space-y-2">
              {caseStudy.challenges.map((challenge, i) => (
                <li key={i} className="flex items-start gap-3 text-white/70">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 flex-shrink-0" />
                  <span>{challenge}</span>
                </li>
              ))}
            </ul>
          </Section>

          {/* Solution Section */}
          <Section
            icon={<Zap className="w-5 h-5 text-amber-400" />}
            title="The Solution"
            iconBg="bg-amber-500/10"
          >
            <p className="text-white/80 mb-4">{caseStudy.solutionDetails.description}</p>
            <div className="grid sm:grid-cols-2 gap-3">
              {caseStudy.solutionDetails.features.map((feature, i) => (
                <div 
                  key={i} 
                  className="flex items-center gap-2 p-3 bg-white/5 rounded-lg border border-white/5"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span className="text-sm text-white/80">{feature}</span>
                </div>
              ))}
            </div>
          </Section>

          {/* How It Works Section */}
          <Section
            icon={<div className="w-5 h-5 flex items-center justify-center text-blue-400 font-bold text-xs">1→</div>}
            title="How It Works Now"
            iconBg="bg-blue-500/10"
          >
            <div className="space-y-3">
              {caseStudy.howItWorks.map((step, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-red-500/20 to-amber-500/20 border border-amber-500/30 flex items-center justify-center">
                    <span className="text-sm font-bold text-amber-400">{i + 1}</span>
                  </div>
                  <p className="text-white/70 pt-1">{step}</p>
                </div>
              ))}
            </div>
          </Section>

          {/* Results Section */}
          <Section
            icon={<TrendingUp className="w-5 h-5 text-emerald-400" />}
            title="The Results"
            iconBg="bg-emerald-500/10"
          >
            <div className="grid sm:grid-cols-2 gap-3 mb-6">
              {caseStudy.results.metrics.map((metric, i) => (
                <div 
                  key={i}
                  className="flex items-center gap-3 p-4 bg-gradient-to-r from-emerald-500/10 to-emerald-500/5 rounded-xl border border-emerald-500/20"
                >
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                  <span className="text-white font-medium">{metric}</span>
                </div>
              ))}
            </div>
            
            {/* Quote */}
            <div className="relative p-6 bg-gradient-to-br from-white/5 to-transparent rounded-xl border border-white/10">
              <div className="absolute -top-3 left-6 text-4xl text-amber-500/50">"</div>
              <p className="text-white/90 italic pl-4">{caseStudy.results.quote}</p>
            </div>
          </Section>

          {/* CTA */}
          <div className="pt-4 border-t border-white/10">
            <Button className="w-full bg-gradient-to-r from-red-500 to-amber-500 hover:from-red-600 hover:to-amber-600 text-white h-12 text-base font-semibold">
              {caseStudy.cta}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <p className="text-center text-white/50 text-sm mt-3">
              Free consultation • No obligation
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

function Section({ 
  icon, 
  title, 
  iconBg, 
  children 
}: { 
  icon: React.ReactNode; 
  title: string; 
  iconBg: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="flex items-center gap-3 mb-4">
        <div className={`w-10 h-10 rounded-xl ${iconBg} flex items-center justify-center`}>
          {icon}
        </div>
        <h3 className="text-lg font-semibold text-white">{title}</h3>
      </div>
      {children}
    </div>
  );
}
