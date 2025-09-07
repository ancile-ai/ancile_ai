"use client";

import { TrendingUp, Award, Users, Shield, Target, Zap } from "lucide-react";

const metrics = [
  {
    icon: TrendingUp,
    value: "99.8%",
    label: "Mission Availability",
    description: "Zero downtime during critical operations",
    color: "text-burnt-orange-600",
  },
  {
    icon: Users,
    value: "<50ms",
    label: "Response Time",
    description: "Real-time decision support when seconds matter",
    color: "text-burnt-orange-600",
  },
  {
    icon: Award,
    value: "100%",
    label: "NIST Compliance",
    description: "Full adherence to 2025 federal AI frameworks",
    color: "text-burnt-orange-600",
  },
  {
    icon: Target,
    value: "24/7",
    label: "CONUS Support",
    description: "Cleared personnel available around the clock",
    color: "text-burnt-orange-600",
  },
];

const achievements = [
  "Former IC Personnel: 15+ years average experience in intelligence community",
  "Active Security Clearances: TS/SCI cleared staff with current polygraphs",
  "NIST Framework Contributors: Direct participation in federal AI standards development",
  "Zero Security Incidents: Perfect record across classified and unclassified deployments",
  "Strategic AI Partnerships: Certified implementation partners with Google, OpenAI, Anthropic",
  "Mission-Critical Reliability: 99.9% uptime across production systems",
];

const Metrics = () => {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Static gradient orbs */}
        <div className="absolute top-20 left-20 w-64 h-64 bg-burnt-orange-600/5 rounded-full blur-3xl" />
        <div className="absolute bottom-32 right-32 w-48 h-48 bg-burnt-orange-600/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-burnt-orange-600/5 rounded-full blur-2xl" />

        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)`,
              backgroundSize: "50px 50px",
            }}
          />
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-white/90 backdrop-blur-lg px-4 py-2 rounded-full border border-slate-200 mb-8">
            <Award className="h-5 w-5 text-burnt-orange-600" />
            <span className="text-sm font-medium text-slate-700">
              Trust & Performance
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mb-8 text-gray-900 pb-2" style={{ paddingBottom: '4px' }}>
            Established Excellence
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Over 5 years of delivering mission-critical AI solutions with
            uncompromising quality, security, and results that matter
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="group bg-white/60 backdrop-blur-xl rounded-2xl p-6 text-center hover:bg-white/80 hover:shadow-2xl transition-all duration-500 border border-white/20 shadow-lg transform hover:-translate-y-2"
            >
              <div
                className={`relative mb-4 mx-auto w-fit p-3 bg-burnt-orange-600 rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 ${metric.color}`}
              >
                <metric.icon className="h-6 w-6 text-white" />
              </div>

              <div className="text-3xl font-bold mb-2 text-gray-900 group-hover:text-burnt-orange-600 group-hover:scale-105 transition-all duration-300">
                {metric.value}
              </div>

              <div className="text-sm text-gray-900 font-semibold mb-1 group-hover:text-burnt-orange-600 transition-colors">
                {metric.label}
              </div>

              <div className="text-xs text-gray-600 group-hover:text-slate-700 transition-colors">
                {metric.description}
              </div>
            </div>
          ))}
        </div>

        {/* Achievements Timeline */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-4">
            {achievements.slice(0, 3).map((achievement, index) => (
              <div key={index} className="flex items-start space-x-4 group">
                <div className="flex-shrink-0 w-2 h-2 bg-burnt-orange-600 rounded-full mt-2 group-hover:scale-125 transition-transform duration-300"></div>
                <p className="text-gray-700 group-hover:text-slate-800 transition-colors duration-300 leading-relaxed">
                  {achievement}
                </p>
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div className="space-y-4">
            {achievements.slice(3).map((achievement, index) => (
              <div key={index} className="flex items-start space-x-4 group">
                <div className="flex-shrink-0 w-2 h-2 bg-burnt-orange-600 rounded-full mt-2 group-hover:scale-125 transition-transform duration-300"></div>
                <p className="text-gray-700 group-hover:text-slate-800 transition-colors duration-300 leading-relaxed">
                  {achievement}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Indicator */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-4 bg-white/60 backdrop-blur-xl rounded-full px-8 py-4 border border-slate-200 shadow-lg">
            <div className="flex items-center space-x-2">
              <Shield className="h-5 w-5 text-burnt-orange-600" />
              <span className="text-sm text-gray-700">
                Trusted by Government Leaders
              </span>
            </div>
            <div className="text-2xl">•</div>
            <div className="flex items-center space-x-2">
              <Target className="h-5 w-5 text-burnt-orange-600" />
              <span className="text-sm text-gray-700">
                Mission-Critical Results
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Metrics;
