"use client";

import {
  Lightbulb,
  Zap,
  Cog,
  GraduationCap,
  Headphones,
  CheckCircle,
  Shield,
} from "lucide-react";
import { useState } from "react";

const technicalCapabilities = [
  {
    icon: Lightbulb,
    title: "Classified Network AI Deployment",
    features: [
      "Deploy AI capabilities in air-gapped, classified environments with full security compliance",
      "TEMPEST-compliant hardware configurations",
      "Cross-domain solution integration",
      "Red/Black network separation maintenance",
      "Custom AI models for classified data processing",
    ],
    gradient: "bg-burnt-orange-600",
    bgColor: "bg-burnt-orange-50",
  },
  {
    icon: Zap,
    title: "Multi-Domain Intelligence Fusion",
    features: [
      "Integrate intelligence from multiple sources and classification levels for comprehensive situational awareness",
      "Multi-INT fusion (SIGINT, HUMINT, GEOINT, OSINT)",
      "Classification-appropriate output generation",
      "Real-time threat correlation and analysis",
      "Automated intelligence reporting",
    ],
    gradient: "bg-burnt-orange-600",
    bgColor: "bg-burnt-orange-50",
  },
  {
    icon: Cog,
    title: "Mission-Critical Operations Support",
    features: [
      "AI systems that support life-and-death decisions with military-grade reliability",
      "Battlefield decision support systems",
      "Predictive maintenance for critical systems",
      "Automated threat response coordination",
      "Mission planning optimization",
    ],
    gradient: "bg-burnt-orange-600",
    bgColor: "bg-burnt-orange-50",
  },
  {
    icon: Shield,
    title: "Federal Compliance & Risk Management",
    features: [
      "Comprehensive AI governance meeting all federal requirements and audit standards",
      "NIST AI RMF implementation and monitoring",
      "Automated compliance reporting",
      "Risk assessment and mitigation planning",
      "Audit trail generation and maintenance",
    ],
    gradient: "bg-burnt-orange-600",
    bgColor: "bg-burnt-orange-50",
  },
];

const ServiceModels = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-32 h-32 bg-burnt-orange-600/5 rounded-full blur-2xl animate-pulse" />
        <div
          className="absolute bottom-40 left-20 w-40 h-40 bg-burnt-orange-600/5 rounded-full blur-2xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-white px-4 py-2 rounded-full border border-slate-200 mb-6">
            <CheckCircle className="h-5 w-5 text-burnt-orange-600" />
            <span className="text-sm font-medium text-slate-700">
              Our Services
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mb-8 text-gray-900 pb-2" style={{ paddingBottom: '4px' }}>
            Choose Your AI Journey
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Flexible engagement models tailored to your mission requirements,
            timeline, and strategic objectives
          </p>
        </div>

        {/* Technical Capabilities Grid */}
        <div className="grid grid-cols-2 gap-8 mb-16">
          {technicalCapabilities.map((capability, index) => (
            <div
              key={index}
              className={`group relative bg-white/60 backdrop-blur-xl rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/20 transform hover:-translate-y-2 ${
                hoveredCard === index ? "scale-105" : ""
              }`}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Animated Background */}
              <div
                className={`absolute inset-0 ${capability.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`}
              />

              {/* Content Wrapper for Z-Index */}
              <div className="relative z-10">
                {/* Icon */}
                <div
                  className={`relative mb-6 mx-auto w-fit p-4 ${capability.gradient} rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}
                >
                  <capability.icon className="h-8 w-8 text-white" />
                </div>

                {/* Title */}
                <div className="mb-6 text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-burnt-orange-600 group-hover:scale-105 transition-all duration-300">
                    {capability.title}
                  </h3>
                </div>

                {/* Features */}
                <div className="space-y-4">
                  {capability.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-start space-x-3 group/item"
                    >
                      <div
                        className={`w-2.5 h-2.5 ${capability.gradient.replace('bg-', 'bg-')} rounded-full mt-2 flex-shrink-0 group-hover/item:scale-125 transition-transform duration-200`}
                      ></div>
                      <p className="text-gray-700 leading-relaxed text-sm group-hover/item:text-slate-800 transition-colors">
                        {feature}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Services Section */}
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-slate-800 to-gray-900 bg-clip-text text-transparent pb-1" style={{ paddingBottom: '2px' }}>
            Flexible Engagement Models
          </h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Flexible engagement models tailored to your mission requirements
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
          {[
            {
              icon: Lightbulb,
              title: "Strategic AI Implementation",
              subtitle: "Phase 1: Planning & Assessment",
              description: "NIST AI RMF gap assessment and custom roadmaps for your operational requirements",
              features: ["NIST AI RMF Gap Assessment", "Mission-Specific AI Strategy"],
              gradient: "bg-burnt-orange-600",
              bgColor: "from-burnt-orange-60 to-amber-60",
              duration: "6-12 weeks",
            },
            {
              icon: Zap,
              title: "Rapid Prototyping & Deployment",
              subtitle: "Phase 2: Proof of Concept",
              description: "30-Day proof of concepts with agile development cycles and security validation",
              features: ["30-Day Proof of Concepts", "Agile Development Cycles"],
              gradient: "bg-burnt-orange-600",
              bgColor: "from-burnt-orange-60 to-amber-60",
              duration: "30 days",
            },
            {
              icon: Cog,
              title: "Full AI Implementation & Operations",
              subtitle: "Phase 3: Production Deployment",
              description: "End-to-end deployment through operational deployment with 24/7 mission support",
              features: ["End-to-End Deployment", "24/7 Mission Support"],
              gradient: "bg-burnt-orange-600",
              bgColor: "from-burnt-orange-60 to-amber-60",
              duration: "12-24 weeks",
            },
          ].map((service, index) => (
            <div
              key={index + technicalCapabilities.length}
              className={`group relative bg-white/60 backdrop-blur-xl rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/20 transform hover:-translate-y-2 flex flex-col ${
                hoveredCard === index ? "scale-105" : ""
              }`}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Animated Background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`}
              />

              {/* Content Wrapper for Z-Index */}
              <div className="relative z-10 flex flex-col h-full">
                {/* Icon */}
                <div
                  className={`relative mb-4 mx-auto w-fit p-3 bg-gradient-to-br ${service.gradient} rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}
                >
                  <service.icon className="h-6 w-6 text-white" />
                </div>

                {/* Title with Subtitle */}
                <div className="mb-3 flex-none text-center">
                  <h4 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-burnt-orange-800 group-hover:scale-105 transition-all duration-300">
                    {service.title}
                  </h4>
                  <p className="text-xs text-gray-600 font-medium group-hover:text-slate-700 transition-colors mb-2">
                    {service.subtitle}
                  </p>

                  {/* Duration Badge */}
                  <div className="inline-flex items-center px-2 py-1 bg-white/60 backdrop-blur-sm rounded-full mb-2">
                    <span className="text-xs text-gray-600 font-medium">
                      {service.duration}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-700 text-xs leading-relaxed mb-3 group-hover:text-slate-800 transition-colors">
                    {service.description}
                  </p>
                </div>

                {/* Features - Aligned at bottom */}
                <div className="space-y-2 mt-auto">
                  {service.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-center justify-center space-x-2 group/item"
                    >
                      <div
                        className={`w-1.5 h-1.5 bg-gradient-to-r ${service.gradient} rounded-full flex-shrink-0 group-hover/item:scale-125 transition-transform duration-200`}
                      ></div>
                      <span className="text-gray-700 text-xs group-hover/item:text-slate-800 transition-colors">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      
      </div>
    </section>
  );
};

export default ServiceModels;
