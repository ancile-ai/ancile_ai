"use client";

import { Shield, Sparkles, ArrowRight, Calendar } from "lucide-react";
import { useEffect, useState } from "react";
import { useContactModal } from '../context/ContactModalContext';

const CallToAction = () => {
  const [particles, setParticles] = useState([]);
  const { openModal } = useContactModal();

  useEffect(() => {
    // Generate particles only on client-side to avoid hydration mismatches
    const generatedParticles = [...Array(30)].map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 3}s`,
      animationDuration: `${3 + Math.random() * 4}s`,
    }));
    setParticles(generatedParticles);
  }, []);

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Floating particles */}
        {particles.map((particle, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full animate-pulse"
            style={{
              left: particle.left,
              top: particle.top,
              animationDelay: particle.animationDelay,
              animationDuration: particle.animationDuration,
            }}
          />
        ))}

        {/* Gradient orbs */}
        <div className="absolute top-20 left-20 w-64 h-64 bg-burnt-orange-600/5 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-20 right-20 w-64 h-64 bg-burnt-orange-600/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute top-1/2 left-1/3 w-32 h-32 bg-burnt-orange-600/5 rounded-full blur-2xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-white px-4 py-2 rounded-full border border-slate-200 mb-6">
            <Sparkles className="h-5 w-5 text-burnt-orange-600" />
            <span className="text-sm font-medium text-slate-700">
              Get Started Today
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mb-8 text-gray-900 pb-2" style={{ paddingBottom: '4px' }}>
            Ready to Transform
            <br />
            <span className="relative text-burnt-orange-600 font-bold">
              Your Mission?
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12">
            Connect with professionals who understand your operational
            environment. Schedule a consultation to evaluate your organization's
            AI initiatives.
          </p>
        </div>

          {/* CTA Cards Grid */}
        <div className="grid lg:grid-cols-1 gap-8">
          {/* Primary CTA */}
          <div className="group relative bg-white/60 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:bg-white/85 transition-all duration-500 hover:shadow-xl hover:-translate-y-1 shadow-lg">
            {/* Softer glow effect */}
            <div className="absolute inset-0 bg-burnt-orange-600/10 opacity-0 group-hover:opacity-50 transition-opacity duration-500 rounded-2xl blur-xl" />

            {/* Subtle decorative elements */}
            <div className="absolute top-4 right-4 w-16 h-16 bg-burnt-orange-50 rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-500" />
            <div className="absolute bottom-6 left-6 w-10 h-10 bg-burnt-orange-100 rounded-full opacity-15 group-hover:opacity-25 transition-opacity duration-500" />

            <div className="relative">
              {/* Header section */}
              <div className="flex items-center justify-between mb-6">
                <div className="bg-burnt-orange-600 p-4 rounded-xl shadow-lg group-hover:scale-105 transition-all duration-300">
                  <Shield className="h-12 w-12 text-white" />
                </div>
              </div>

              {/* Enhanced title with underline effect */}
              <div className="mb-6">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 group-hover:text-burnt-orange-600 transition-colors duration-500">
                  Schedule Secure Consultation
                </h3>
                <div className="w-0 group-hover:w-24 h-1 bg-burnt-orange-600 transition-all duration-700" />
              </div>

              {/* Enhanced description with better spacing */}
              <p className="text-lg text-gray-700 mb-10 leading-relaxed text-justify">
                Work with veteran-founded Ancile AI to secure your agency's
                AI advantage. Our security-cleared team understands your
                mission's unique requirements and the strategic importance of
                reliable AI implementation. Let's discuss your vision and craft
                a tailored solution that delivers measurable mission impact.
              </p>

              {/* Enhanced CTA button with multiple interactive elements */}
              <div className="space-y-4">
                <button
                  onClick={openModal}
                  className="group/btn w-full bg-burnt-orange-600 hover:bg-burnt-orange-600 text-white px-6 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-102 transform flex items-center justify-center space-x-2"
                >
                  <Calendar className="h-5 w-5" />
                  <span>Book Your Consultation</span>
                  <ArrowRight className="h-5 w-5 group-hover/btn:translate-x-1 transition-transform duration-300" />
                </button>

                {/* Secondary info */}
                <div className="flex items-center justify-center space-x-6 text-sm text-slate-600">
                  <div className="flex items-center space-x-2">
                    <Shield className="h-4 w-4 text-burnt-orange-600" />
                    <span>Security-First Approach</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-3 md:grid-cols-3 gap-8">
            {[
              { number: "25+", label: "AI Solutions Delivered" },
              { number: "24/7", label: "Mission Support" },
              { number: "100%", label: "Security Compliant" },
            ].map((stat, index) => (
              <div
                key={index}
                className="group bg-white/60 backdrop-blur-xl rounded-2xl p-6 border border-white/20 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 hover:bg-white/80"
              >
                <div className="text-2xl md:text-3xl font-bold text-burnt-orange-600 mb-1 group-hover:scale-105 transition-all duration-300">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-600 font-medium group-hover:text-slate-700 transition-colors">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
