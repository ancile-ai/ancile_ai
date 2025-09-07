"use client";

import { Shield, Award, Target, Users, Sparkles } from "lucide-react";
import { useState } from "react";

const reasons = [
  {
    icon: Shield,
    title: "Built for the Warfighter",
    subtitle: "Purpose-built solutions from day one",
    features: [
      "Security and compliance integrated design, not patched-solutions",
      "Government operations as primary use case, not secondary consideration",
      "Zero-trust architecture as foundational, not bolted-on",
      "Regulatory compliance embedded in code, not workarounds",
      "Multi-classification environment ready (IL2-IL6)",
    ],
    gradient: "from-burnt-orange-600 to-burnt-orange-700",
    bgColor: "from-burnt-orange-50 to-amber-50",
  },
  {
    icon: Users,
    title: "Mission Operators, Not Just Consultants",
    subtitle: "Veteran-led understanding of real requirements",
    features: [
      "Operator-founded team with firsthand mission experience",
      "Requirements capture from operational realities, not theoretical models",
      "Operational constraints understood innately, not learned secondhand",
      "Mission success prioritized above all other metrics",
      "Combined multi-uniformed service brings unparalleled insight",
    ],
    gradient: "from-burnt-orange-700 to-burnt-orange-600",
    bgColor: "from-burnt-orange-50 to-amber-50",
  },
  {
    icon: Target,
    title: "2025 Compliance Leadership",
    subtitle: "NIST AI RMF and federal standards from conception",
    features: [
      "NIST AI RMF 1.0 Implementation Partner (2023)",
      "Early adopter of 2025 NIST Cybersecurity-AI integrated guidelines",
      "CMMC Level2, V2",
      "Pre-certified for FedRAMP High and DoD IL-5 requirements",
      "Built to the latest 2025 federal AI standards from day one",
    ],
    gradient: "from-burnt-orange-600 to-burnt-orange-700",
    bgColor: "from-burnt-orange-50 to-amber-50",
  },
  {
    icon: Award,
    title: "Proven at Scale",
    subtitle: "Government-specific results and member track records",
    features: [
      "U.S.M.C: Digital Counter-IED technology deployed in Afghanistan operations",
      "U.S.A.F: Delivered enterprise-scale AI-enabled maintenance advisory under a $4.7M prime contract",
      "The Boeing Company: Multiple prototype integration efforts across efforts totaling $50M in awarded contracts",
      "U.S. Central Command: Advanced multi-domain awareness capabilities through $1M in subcontracts DoD Adoption",
    ],
    gradient: "from-burnt-orange-700 to-burnt-orange-600",
    bgColor: "from-burnt-orange-50 to-amber-50",
  },
];

const WhyChooseUs = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <section
      id="about"
      className="py-32 bg-gradient-to-br from-slate-50 via-gray-50 to-white relative"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-white/30 backdrop-blur-[100px]" />
        <div className="absolute top-20 right-20 w-32 h-32 bg-purple-200/20 rounded-full blur-xl animate-pulse" />
        <div
          className="absolute bottom-32 left-20 w-40 h-40 bg-orange-200/20 rounded-full blur-xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-white px-4 py-2 rounded-full border border-slate-200 mb-8">
            <Sparkles className="h-5 w-5 text-burnt-orange-700" />
            <span className="text-sm font-medium text-slate-700">
              About Ancile AI
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-gray-900 via-slate-800 to-gray-900 bg-clip-text text-transparent pb-2" style={{ paddingBottom: '4px' }}>
            Why Ancile?
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto my-auto leading-relaxed">
            We don't adapt commercial products for government—we build tailored
            AI solutions specifically for mission-critical challenges in
            environments where others can't operate
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {reasons.map((reason, index) => (
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
                className={`absolute inset-0 bg-gradient-to-br ${reason.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`}
              />

              {/* Content Wrapper for Z-Index */}
              <div className="relative z-10">
                {/* Icon */}
                <div
                  className={`relative mb-6 inline-flex p-4 bg-gradient-to-br ${reason.gradient} rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}
                >
                  <reason.icon className="h-8 w-8 text-white" />
                </div>

                {/* Title */}
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-burnt-orange-800 group-hover:scale-105 transition-all duration-300">
                    {reason.title}
                  </h3>
                  <p className="text-sm text-gray-600 font-medium group-hover:text-slate-700 transition-colors">
                    {reason.subtitle}
                  </p>
                </div>

                {/* Features */}
                <div className="space-y-3">
                  {reason.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-start space-x-3 group/item"
                    >
                      <div
                        className={`w-2 h-2 bg-gradient-to-r ${reason.gradient} rounded-full mt-2 flex-shrink-0 group-hover/item:scale-125 transition-transform duration-200`}
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

        {/* Stats Section */}
        <div className="mt-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "91%", label: "Downrange RCIED threat reduction" },
              { number: "$3.2M+", label: "Cost Avoidance through AI" },
              { number: "<50ms", label: "Real-Time Anomaly Detection" },
              { number: "45+", label: "Classified Engagements" },
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white/60 backdrop-blur-xl rounded-2xl p-6 hover:bg-white/80 hover:shadow-2xl transition-all duration-500 border border-white/20 shadow-lg transform hover:-translate-y-2">
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-burnt-orange-800 to-burnt-orange-700 bg-clip-text text-transparent mb-2 group-hover:from-burnt-orange-900 group-hover:to-burnt-orange-600 group-hover:scale-105 transition-all duration-300">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600 font-medium group-hover:text-slate-700 transition-colors">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Social Proof Addendum */}
          <div className="mt-12 text-center">
            <div className="inline-flex flex-col items-center space-y-2 bg-gradient-to-r from-slate-50 to-gray-50 backdrop-blur-sm rounded-2xl px-8 py-6 border border-slate-200 shadow-lg">
              <div className="flex items-center space-x-4 text-sm">
                <div className="flex items-center space-x-2 text-burnt-orange-700">
                  <Shield className="h-4 w-4" />
                  <span className="font-medium">
                    Trusted by Intelligence Community
                  </span>
                </div>
                <div className="w-px h-4 bg-slate-300"></div>
                <div className="flex items-center space-x-2 text-burnt-orange-700">
                  <Target className="h-4 w-4" />
                  <span className="font-medium">
                    Supporting Global Operations
                  </span>
                </div>
              </div>
              <p className="text-xs text-gray-600 mt-3 max-w-md">
                Join agencies who rely on Ancile AI for mission-critical
                capabilities
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
