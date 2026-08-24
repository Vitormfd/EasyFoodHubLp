import React from "react";
import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Problem from "@/components/landing/Problem";
import Features from "@/components/landing/Features";
import WhatsAppAutomation from "@/components/landing/WhatsAppAutomation";
import SystemShowcase from "@/components/landing/SystemShowcase";
import HowItWorks from "@/components/landing/HowItWorks";
import TargetAudience from "@/components/landing/TargetAudience";
import Benefits from "@/components/landing/Benefits";
import Plans from "@/components/landing/Plans";
import SocialProof from "@/components/landing/SocialProof";
import FAQ from "@/components/landing/FAQ";
import FinalCTA from "@/components/landing/FinalCTA";
import Footer from "@/components/landing/Footer";

export default function Landing() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <Problem />
        <Features />
        <WhatsAppAutomation />
        <SystemShowcase />
        <HowItWorks />
        <TargetAudience />
        <Benefits />
        <Plans />
        <SocialProof />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}