"use client";

import {
  Shield,
  TrendingUp,
  Target,
  FileText,
  Search,
  BarChart3,
  CheckCircle,
  Clock,
  Users,
} from "lucide-react";
import { useState } from "react";

const caseStudies = [
  {
    icon: FileText,
    title: "Department of Defense: Contract Intelligence",
    challenge: "Manual review of 10,000+ contracts annually taking 45 days average",
    solution: "AI-powered contract analysis with automated compliance checking",
    results: [
      "73% reduction in processing time, 99.2% accuracy in compliance detection",
      "IL-4 environment deployment with full audit capabilities",
      "$2.3M annual cost savings through automated processing"
    ],
    metrics: {
      improvement: "73%",
      label: "Faster Processing",
    },
    gradient: "bg-burnt-orange-600",
    bgColor: "from-burnt-orange-60 to-amber-60",
  },
  {
    icon: Search,
    title: "Federal Law Enforcement: Digital Evidence Analysis",
    challenge: "Months-long digital forensics backlogs impacting investigations",
    solution: "AI-enhanced evidence processing maintaining legal admissibility standards",
    results: [
      "85% reduction in analysis time, 100% court acceptance rate",
      "Chain of custody maintained, all processes legally defensible",
      "Resolved 240+ critical backlogged cases in first quarter"
    ],
    metrics: {
      improvement: "85%",
      label: "Analysis Time Reduction",
    },
    gradient: "bg-burnt-orange-600",
    bgColor: "from-burnt-orange-60 to-amber-60",
  },
  {
    icon: Target,
    title: "Intelligence Community: Multi-Source Analysis",
    challenge: "Manual correlation of intelligence from dozens of sources and formats",
    solution: "AI fusion engine processing multi-INT data with classification handling",
    results: [
      "60% faster threat identification, 40% improvement in predictive accuracy",
      "TS/SCI data handling across multiple SCIFs deployment",
      "Improved operational tempo for rapid response capabilities"
    ],
    metrics: {
      improvement: "60%",
      label: "Faster Threat ID",
    },
    gradient: "bg-burnt-orange-600",
    bgColor: "from-burnt-orange-60 to-amber-60",
  },
];

const CaseStudies = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <section className="py-24 bg-gradient-to-br from-white via-slate-50 to-gray-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-white/50 backdrop-blur-[50px]" />
        <div className="absolute top-20 left-20 w-96 h-96 bg-burnt-orange-100/30 rounded-full blur-3xl" />
        <div
          className="absolute bottom-32 right-20 w-80 h-80 bg-amber-100/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-white px-4 py-2 rounded-full border border-slate-200 mb-6">
            <BarChart3 className="h-5 w-5 text-burnt-orange-600" />
            <span className="text-sm font-medium text-slate-700">
              Proven Results
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-gray-900 via-slate-800 to-gray-900 bg-clip-text text-transparent">
            Government AI Solutions
            <br />
            <span className="text-burnt-orange-600 font-medium">
              That Deliver Real Impact
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            See how our AI implementations have transformed mission-critical operations across defense, intelligence, and federal agencies—all while maintaining the highest security and compliance standards.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid lg:grid-cols-1 gap-8">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className={`group relative bg-white/80 backdrop-blur-xl rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/20 transform hover:-translate-y-2 ${
                hoveredCard === index ? "scale-105" : ""
              }`}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Animated Background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${study.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`}
              />

              {/* Content Wrapper */}
              <div className="relative z-10">
                {/* Header with Icon and Title */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div
                      className={`relative p-4 bg-gradient-to-br ${study.gradient} rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}
                    >
                      <study.icon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-burnt-orange-800 transition-all duration-300">
                        {study.title}
                      </h3>
                    </div>
                  </div>

                  {/* Metrics Highlight */}
                  <div className="text-right">
                    <div className="text-4xl font-bold text-burnt-orange-600 mb-1">
                      {study.metrics.improvement}
                    </div>
                    <div className="text-sm text-gray-600 font-medium group-hover:text-slate-700 transition-colors">
                      {study.metrics.label}
                    </div>
                  </div>
                </div>

                {/* Challenge */}
                <div className="mb-6">
                  <div className="flex items-start space-x-3 mb-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <h4 className="text-lg font-semibold text-gray-900">Challenge</h4>
                  </div>
                  <p className="text-gray-700 leading-relaxed text-justify">
                    {study.challenge}
                  </p>
                </div>

                {/* Solution */}
                <div className="mb-6">
                  <div className="flex items-start space-x-3 mb-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <h4 className="text-lg font-semibold text-gray-900">Solution</h4>
                  </div>
                  <p className="text-gray-700 leading-relaxed text-justify">
                    {study.solution}
                  </p>
                </div>

                {/* Results */}
                <div className="border-t border-slate-200 pt-6">
                  <div className="flex items-start space-x-3 mb-4">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <h4 className="text-lg font-semibold text-gray-900">Results</h4>
                  </div>
                  <div className="space-y-3">
                    {study.results.map((result, resultIndex) => (
                      <div
                        key={resultIndex}
                        className="flex items-start space-x-3 group/item"
                      >
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <p className="text-gray-700 leading-relaxed group-hover/item:text-slate-800 transition-colors">
                          {result}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary Statistics */}
        <div className="mt-16 text-center">
          <div className="bg-white/60 backdrop-blur-xl rounded-2xl p-8 border border-slate-200 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Cross-Cutting Impact</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-burnt-orange-600 mb-2">
                  78%
                </div>
                <div className="text-sm text-gray-600">Average Performance Improvement</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-burnt-orange-600 mb-2">
                  100%
                </div>
                <div className="text-sm text-gray-600">Legal/Court Acceptance Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-burnt-orange-600 mb-2">
                  $15M+
                </div>
                <div className="text-sm text-gray-600">Total Cost Savings</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-burnt-orange-600 mb-2">
                  150+
                </div>
                <div className="text-sm text-gray-600">Classified Engagements</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
