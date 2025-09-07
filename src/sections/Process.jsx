"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  ArrowLeft,
  ArrowRight,
  Brain,
  Rocket,
  Target,
  Clock,
  Settings,
  Shield,
  TrendingUp,
} from "lucide-react";

const processSteps = [
  {
    icon: Brain,
    title: "Discovery & Assessment",
    subtitle: "Understand Your Mission",
    description:
      "Deep dive analysis of your current operations, pain points, and AI opportunities. We conduct comprehensive stakeholder interviews and data assessment to identify high-impact use cases.",
    whyMatters:
      "Our multi-branch veteran-led team has lived these missions firsthand-we understand what actually works in operational environments, not just what looks good in PowerPoint.",
    duration: "0-2 weeks",
    successMetrics: [
      "Identification of 3 high-impact use-cases per AI initiative",
    ],
    riskMitigation: "Establish data governence and lineage tracking",
    whatMakesItDifferent: "We interview operators, not just executives",
    deliverables: [
      "Mission Analysis Report",
      "AI Readiness Assessment",
      "Risk Assessment",
    ],
  },
  {
    icon: Target,
    title: "Strategy & Planning",
    subtitle: "Define Your AI Roadmap",
    description:
      "Develop comprehensive AI strategies aligned with your mission objectives. We create detailed execution plans, resource requirements, and success criteria specifically tailored for government decision-making processes.",
    whyMatters:
      "Strategic alignment ensures approval success. We understand what government offices need to see, eliminating wasted effort on proposals that won't get approved.",
    duration: "2-8 weeks",
    successMetrics: [
      "100% of our roadmaps have received procurement approval",
    ],
    riskMitigation: "Compliance review prevents costly rework",
    whatMakesItDifferent: "Roadmaps written by people who've executed in government",
    deliverables: [
      "AI Strategy Roadmap",
      "Technical Architecture",
      "Procurement Guidance",
    ],
  },
  {
    icon: Rocket,
    title: "Rapid Prototyping",
    subtitle: "Build & Validate Solutions",
    description:
      "Create secure proof-of-concept implementations with real data in weeks not months. Active mission partner collaboration ensures solutions meet evolving mission requirements and team buy-in.",
    whyMatters:
      "While enterprise consultants spend months on requirements documents, we build working solutions. Real results in weeks, not theoretical frameworks in months.",
    duration: "8-12 weeks",
    successMetrics: [
      "Average 40% improvement in target metrics during POC",
    ],
    riskMitigation: "Stakeholder validation reduces deployment risk",
    whatMakesItDifferent: "Tested in environments that mirror your actual constraints",
    deliverables: [
      "Functional Prototype",
      "Performance Validation",
      "Security Review",
    ],
  },
  {
    icon: Shield,
    title: "Deployment & Scale",
    subtitle: "Production Implementation",
    description:
      "Full-scale deployment with comprehensive training, documentation, and transition to operations.",
    whyMatters:
      "Military-grade project management with up to TS/SCI cleared team ensures on-time delivery in secure environments. We've never had a security incident or missed a classified deadline.",
    duration: "12-20+ weeks",
    successMetrics: [
      "Mission-critical deadlines met without exception",
    ],
    riskMitigation: "Phased rollout minimizes operational disruption",
    whatMakesItDifferent: "Delivered by security-cleared engineers who understand your world",
    deliverables: [
      "Production Deployment",
      "Training Program",
      "Operational Handoff",
    ],
  },
  {
    icon: Settings,
    title: "Optimization & Support",
    subtitle: "Continuous Improvement",
    description:
      "Ongoing monitoring, performance optimization, and evolution of your AI solutions. 24/7 support with regular updates to maintain mission effectiveness.",
    whyMatters:
      "Threats evolve, missions change, technology advances. Our 24/7 support ensures your AI capabilities stay ahead of the curve-because second place isn't an option in government operations.",
    duration: "Ongoing",
    successMetrics: [
      "99.9% uptime across all production systems",
    ],
    riskMitigation: "Continuous monitoring prevents mission degradation",
    whatMakesItDifferent: "Maintained by a team committed to the mission",
    deliverables: [
      "Performance Monitoring",
      "Regular Updates",
      "Continuous Support",
    ],
  },
];

const timelineComparison = {
  phases: [
    {
      name: "Total Time to Production",
      traditional: "12-36+ months",
      ancileAI: "12-20+ weeks",
    },
    {
      name: "Security Integration",
      traditional: "Retrofitted later",
      ancileAI: "Built-in from day one",
    },
    {
      name: "Team Access",
      traditional: "Account managers",
      ancileAI: "Direct to engineers",
    },
  ],
};

const clientQuotes = [
  {
    quote: "Finally, someone who understood our operational environment from day one",
    author: "Intelligence Community Leader",
  },
  {
    quote: "They delivered what they promised, when they promised it",
    author: "Defense Program Manager",
  },
];

const Process = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 via-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 w-96 h-96 bg-burnt-orange-100/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-amber-100/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-amber-100/20 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-white px-4 py-2 rounded-full border border-slate-200 mb-8">
            <Clock className="h-5 w-5 text-burnt-orange-700" />
            <span className="text-sm font-medium text-slate-700">
              Our Proven Process
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-gray-900 via-slate-800 to-gray-900 bg-clip-text text-transparent pb-2" style={{ paddingBottom: '4px' }}>
            From Vision to Mission Impact
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our battle-tested methodology ensures secure, compliant, and
            effective AI deployments that deliver real mission value from day
            one
          </p>
        </div>

        {/* Process Timeline */}
        <div className="mb-16">
          {/* Desktop Timeline */}
          <div className="hidden lg:block">
            <div className="relative">
              {/* Connection Lines */}
              <div className="absolute top-8 left-0 right-0 h-0.5 bg-gradient-to-r from-burnt-orange-400 via-burnt-orange-500 to-burnt-orange-600" />

              <div className="flex justify-between items-start px-4">
                {processSteps.map((step, index) => {
                  const isActive = index <= activeStep;
                  return (
                    <div
                      key={index}
                      className={`flex-1 relative ${
                        index !== processSteps.length - 1 ? "mr-8" : ""
                      }`}
                    >
                      {/* Step Circle */}
                      <div
                        className={`relative w-16 h-16 mx-auto mb-4 rounded-full border-2 cursor-pointer transition-all duration-500 flex items-center justify-center ${
                          isActive
                            ? "bg-gradient-to-br from-burnt-orange-700 to-burnt-orange-900 border-white shadow-lg shadow-burnt-orange-500/25"
                            : "bg-white border-slate-300"
                        }`}
                        onClick={() => setActiveStep(index)}
                      >
                        <step.icon
                          className={`h-6 w-6 ${
                            isActive ? "text-white" : "text-gray-400"
                          }`}
                        />
                      </div>

                      {/* Step Content */}
                      <div className="text-center">
                        <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-burnt-orange-800 group-hover:scale-105 transition-all duration-300">
                          {step.title}
                        </h3>
                        <p className="text-sm text-gray-600 mb-2 group-hover:text-slate-700 transition-colors">
                          {step.subtitle}
                        </p>
                        <span className="inline-flex items-center px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                          <Clock className="h-3 w-3 mr-1" />
                          {step.duration}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Mobile Step Selector */}
          <div className="lg:hidden">
            <div className="grid grid-cols-5 gap-4 mb-8">
              {processSteps.map((step, index) => {
                const isActive = index === activeStep;
                return (
                  <button
                    key={index}
                    onClick={() => setActiveStep(index)}
                    className={`p-3 rounded-xl transition-all duration-300 ${
                      isActive
                        ? "bg-gradient-to-br from-burnt-orange-700 to-burnt-orange-900 shadow-lg"
                        : "bg-white border border-slate-200 hover:border-slate-300"
                    }`}
                  >
                    <step.icon
                      className={`h-5 w-5 mx-auto ${
                        isActive ? "text-white" : "text-gray-600"
                      }`}
                    />
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Active Step Detail */}
        <div className="bg-white/60 backdrop-blur-xl rounded-2xl p-8 border border-white/20 shadow-xl">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Content */}
            <div>
              <div className="flex items-center space-x-3 mb-4">
                {React.createElement(processSteps[activeStep].icon, {
                  className: "h-8 w-8 text-slate-700",
                })}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {processSteps[activeStep].title}
                  </h3>
                  <p className="text-slate-700 font-medium">
                    {processSteps[activeStep].subtitle}
                  </p>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                {processSteps[activeStep].description}
              </p>

              <div className="bg-gradient-to-r from-burnt-orange-50 to-amber-50 p-4 rounded-lg mb-6 border border-burnt-orange-100">
                <h4 className="font-semibold text-burnt-orange-900 mb-2 text-sm uppercase tracking-wide">
                  Why This Matters
                </h4>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {processSteps[activeStep].whyMatters}
                </p>
              </div>

              <div className="flex items-center space-x-2 mb-6">
                <Clock className="h-5 w-5 text-gray-600" />
                <span className="text-sm text-gray-600 font-medium">
                  Duration: {processSteps[activeStep].duration}
                </span>
              </div>

              <div className="space-y-6">
                {/* Success Metrics */}
                <div className="bg-gradient-to-r from-burnt-orange-50 to-amber-50 p-4 rounded-lg mb-6 border border-burnt-orange-100">
                  <h4 className="font-semibold text-burnt-orange-900 mb-2 text-sm uppercase tracking-wide flex items-center">
                    <TrendingUp className="h-4 w-4 mr-2" />
                    Mission Success Criteria
                  </h4>
                  {processSteps[activeStep].successMetrics.map(
                    (metric, index) => (
                      <div key={index} className="flex items-center space-x-3 mt-2">
                        <div className="w-2 h-2 bg-burnt-orange-600 rounded-full"></div>
                        <span className="text-gray-700 text-sm">
                          {metric}
                        </span>
                      </div>
                    )
                  )}
                </div>

                {/* Risk Mitigation */}
                <div className="bg-gradient-to-r from-burnt-orange-50 to-amber-50 p-4 rounded-lg mb-6 border border-burnt-orange-100">
                  <h4 className="font-semibold text-burnt-orange-900 mb-2 text-sm uppercase tracking-wide flex items-center">
                    <Shield className="h-4 w-4 mr-2" />
                    Risk Mitigation
                  </h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {processSteps[activeStep].riskMitigation}
                  </p>
                </div>

                {/* What Makes This Different */}
                <div className="bg-gradient-to-r from-burnt-orange-50 to-amber-50 p-4 rounded-lg mb-6 border border-burnt-orange-100">
                  <h4 className="font-semibold text-burnt-orange-900 mb-2 text-sm uppercase tracking-wide">
                    What Makes This Different
                  </h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {processSteps[activeStep].whatMakesItDifferent}
                  </p>
                </div>

                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900 mb-3">
                    Key Deliverables:
                  </h4>
                  {processSteps[activeStep].deliverables.map(
                    (deliverable, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="w-1.5 h-1.5 bg-gradient-to-r from-burnt-orange-800 to-burnt-orange-900 rounded-full"></div>
                        <span className="text-gray-700 text-sm">
                          {deliverable}
                        </span>
                      </div>
                    )
                  )}
                </div>
              </div>

              {/* Navigation */}
              <div className="flex items-center space-x-4 mt-8">
                <button
                  onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
                  disabled={activeStep === 0}
                  className="px-4 py-2 bg-gradient-to-r from-gray-100 to-slate-100 hover:from-gray-200 hover:to-slate-200 text-gray-700 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center space-x-2"
                >
                  <ArrowLeft className="h-4 w-4" />
                  <span>Previous</span>
                </button>

                <div className="flex-1">
                  <div className="flex space-x-2">
                    {processSteps.map((_, index) => (
                      <div
                        key={index}
                        className={`flex-1 h-2 rounded-full transition-all duration-300 ${
                          index <= activeStep
                            ? "bg-gradient-to-r from-burnt-orange-700 to-burnt-orange-900"
                            : "bg-gray-200"
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-xs text-center text-gray-600 mt-2">
                    Step {activeStep + 1} of {processSteps.length}
                  </p>
                </div>

                <button
                  onClick={() =>
                    setActiveStep(
                      Math.min(processSteps.length - 1, activeStep + 1)
                    )
                  }
                  disabled={activeStep === processSteps.length - 1}
                  className="px-4 py-2 bg-gradient-to-r from-burnt-orange-700 to-burnt-orange-900 text-white rounded-lg hover:from-burnt-orange-800 hover:to-burnt-orange-900 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center space-x-2"
                >
                  <span>Next</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Visual */}
            <div className="text-center mx-auto">
              <div className="w-128 h-128 mx-auto">
                {activeStep === 0 ? (
                  <Image
                    src="/images/process/ancile_pain.png"
                    alt="Discovery & Assessment"
                    width={512}
                    height={512}
                    className="rounded-xl"
                  />
                ) : activeStep === 1 ? (
                  <Image
                    src="/images/process/ancile_strat.png"
                    alt="Strategy & Planning"
                    width={512}
                    height={512}
                    className="rounded-xl"
                  />
                ) : activeStep === 2 ? (
                  <Image
                    src="/images/process/ancile_proto.png"
                    alt="Rapid Prototyping"
                    width={512}
                    height={512}
                    className="rounded-xl"
                  />
                ) : activeStep === 3 ? (
                  <Image
                    src="/images/process/ancile_dep.png"
                    alt="Deployment & Scale"
                    width={512}
                    height={512}
                    className="rounded-xl"
                  />
                ) : activeStep === 4 ? (
                  <Image
                    src="/images/process/ancile_ops.png"
                    alt="Optimization & Support"
                    width={512}
                    height={512}
                    className="rounded-xl"
                  />
                ) : (
                  React.createElement(processSteps[activeStep].icon, {
                    className: "h-48 w-48 text-slate-700",
                  })
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Timeline Comparison Box */}
        <div className="mt-16 bg-gradient-to-r from-slate-100 to-gray-100 rounded-2xl p-8 border border-slate-200 shadow-lg">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              How We Accelerate Mission Success
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We understand missions can't wait. Our streamlined approach delivers secure, compliant AI capabilities faster than traditional consultants.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-lg overflow-hidden shadow-sm">
              <thead className="bg-gradient-to-r from-burnt-orange-700 to-burnt-orange-900 text-white">
                <tr>
                  <th className="p-4 text-left font-semibold">Phase</th>
                  <th className="p-4 text-center font-semibold">Traditional Contractors</th>
                  <th className="p-4 text-center font-semibold">Ancile AI</th>
                </tr>
              </thead>
              <tbody>
                {timelineComparison.phases.map((phase, index) => (
                  <tr key={index} className="border-b border-slate-200 hover:bg-slate-50 transition-colors">
                    <td className="p-4 font-medium text-gray-900">{phase.name}</td>
                    <td className="p-4 text-center text-red-600 font-medium">{phase.traditional}</td>
                    <td className="p-4 text-center text-burnt-orange-700 font-semibold bg-gradient-to-r from-burnt-orange-50 to-burnt-orange-100 rounded-lg mx-2">{phase.ancileAI}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Client Quotes
        <div className="mt-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Real Voices from Mission Operators
            </h3>
            <p className="text-gray-600 max-w-xl mx-auto">
              These voices from the field demonstrate our commitment to understanding and serving mission-critical operations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {clientQuotes.map((quote, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/50 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="mb-6">
                  <svg
                    className="h-8 w-8 text-burnt-orange-400 mb-4"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                  >
                    <path d="M12 4l3 3v10l-3-3H4V4h8z" />
                    <path d="M24 16l3 3v4l-3-3h-8v6h8l3 3V16h-6v8h-2v-8z" />
                  </svg>
                  <p className="text-gray-700 italic leading-relaxed text-lg">
                    "{quote.quote}"
                  </p>
                </div>
                <div className="text-sm text-gray-500 border-t pt-4">
                  {quote.author}
                </div>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Process;
