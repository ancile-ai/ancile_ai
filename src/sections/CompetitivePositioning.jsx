"use client";

import { AlertTriangle, CheckCircle, Zap, Award, Clock, Shield } from "lucide-react";
import { useState, useEffect } from "react";

const CompetitivePositioning = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section
      id="competitive-positioning"
      className="py-24 bg-gradient-to-br from-white via-slate-50 to-gray-100 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23333333%22 fill-opacity=%220.02%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]" />

        {/* Professional orbs */}
        <div className="absolute top-32 left-20 w-72 h-72 bg-red-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-32 right-32 w-80 h-80 bg-slate-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Urgency Alert */}
        <div
          className={`text-center mb-16 transform transition-all duration-700 ${
            isLoaded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-red-50 to-orange-50 border border-red-200 rounded-full px-6 py-3 shadow-sm">
            <AlertTriangle className="h-5 w-5 text-red-600" />
            <span className="text-sm font-semibold text-red-800">
              Why Change Now? Threat Evolution Doesn't Wait
            </span>
          </div>
          <p className="text-sm text-gray-600 mt-4 max-w-2xl mx-auto">
            Commercial AI platforms weren't built for government constraints. Adversaries are already using AI—time is critical.
          </p>
        </div>

        {/* Header */}
        <div
          className={`text-center mb-20 transform transition-all duration-700 delay-200 ${
            isLoaded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          <div className="inline-flex items-center space-x-2 bg-white px-6 py-3 rounded-full border border-slate-200 shadow-lg mb-8">
            <Award className="h-5 w-5 text-burnt-orange-600" />
            <span className="text-sm font-medium text-slate-800">
              Not Your Typical AI Consultant
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-slate-800 to-gray-900 bg-clip-text text-transparent">
            Purpose-Built vs.
            <br />
            <span className="bg-gradient-to-r from-red-600 via-orange-600 to-burnt-orange-800 bg-clip-text text-transparent">
              Risky Retrofits
            </span>
          </h2>

          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            While others adapt commercial platforms for government use, we build AI specifically for mission-critical environments. Here's why government leaders choose Ancile.
          </p>
        </div>

        {/* Social Proof Bar */}
        <div className="flex flex-wrap justify-center items-center gap-6 mb-16 text-sm">
          <div className="flex items-center space-x-2 text-burnt-orange-600">
            <CheckCircle className="h-4 w-4" />
            <span className="font-medium">SEWP Certified</span>
          </div>
          <div className="flex items-center space-x-2 text-burnt-orange-600">
            <CheckCircle className="h-4 w-4" />
            <span className="font-medium">CIO-SP3 Vendor</span>
          </div>
          <div className="flex items-center space-x-2 text-burnt-orange-600">
            <CheckCircle className="h-4 w-4" />
            <span className="font-medium">GSA Schedule Holder</span>
          </div>
          <div className="flex items-center space-x-2 text-burnt-orange-600">
            <CheckCircle className="h-4 w-4" />
            <span className="font-medium">CMMI Level 3</span>
          </div>
          <div className="flex items-center space-x-2 text-burnt-orange-600">
            <CheckCircle className="h-4 w-4" />
            <span className="font-medium">ISO 27001 Certified</span>
          </div>
        </div>

        {/* Comparison Table */}
        <div
          className={`bg-white/80 backdrop-blur-xl rounded-2xl p-8 border border-slate-200 shadow-2xl transform transition-all duration-700 delay-400 ${
            isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-900">
            Direct Competitive Comparison
          </h3>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-burnt-orange-600">
                  <th className="p-6 text-left font-semibold text-white border-b-2 border-burnt-orange-600">
                    What Others Do
                  </th>
                  <th className="p-6 text-left font-semibold text-white border-b-2 border-burnt-orange-600">
                    What Ancile AI Delivers
                  </th>
                  <th className="p-6 text-center font-semibold text-white border-b-2 border-burnt-orange-600">
                    Mission Impact
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-200 hover:bg-red-50/40 transition-colors">
                  <td className="p-6 align-top">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <p className="font-semibold text-red-800 text-sm">❌ Adapt Commercial Platforms</p>
                        <p className="text-xs text-red-700 mt-1">Retrofit AWS/Azure for government constraints</p>
                      </div>
                    </div>
                  </td>
                  <td className="p-6 align-top">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <p className="font-semibold text-green-800 text-sm">✅ Purpose-Built Government AI</p>
                        <p className="text-xs text-green-700 mt-1">Built from ground up with FedRAMP, FISMA, NIST</p>
                      </div>
                    </div>
                  </td>
                  <td className="p-6 text-center bg-green-50">
                    <div className="text-2xl font-bold text-green-700 mb-1">-78%</div>
                    <p className="text-xs text-green-800 font-medium">Development Timeline</p>
                  </td>
                </tr>

                <tr className="border-b border-slate-200 hover:bg-red-50/40 transition-colors">
                  <td className="p-6 align-top">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <p className="font-semibold text-red-800 text-sm">❌ Strategy-Only Consulting</p>
                        <p className="text-xs text-red-700 mt-1">PowerPoint decks and architecture diagrams</p>
                      </div>
                    </div>
                  </td>
                  <td className="p-6 align-top">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <p className="font-semibold text-green-800 text-sm">✅ Strategy + Execution</p>
                        <p className="text-xs text-green-700 mt-1">POC to production deployment in 12-16 weeks</p>
                      </div>
                    </div>
                  </td>
                  <td className="p-6 text-center bg-green-50">
                    <div className="text-2xl font-bold text-green-700 mb-1">$790K</div>
                    <p className="text-xs text-green-800 font-medium">Avg Cost Savings</p>
                  </td>
                </tr>

                <tr className="border-b border-slate-200 hover:bg-red-50/40 transition-colors">
                  <td className="p-6 align-top">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <p className="font-semibold text-red-800 text-sm">❌ 18-24 Month Timelines</p>
                        <p className="text-xs text-red-700 mt-1">Government procurement bureaucracy</p>
                      </div>
                    </div>
                  </td>
                  <td className="p-6 align-top">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <p className="font-semibold text-green-800 text-sm">✅ 12-16 Week Delivery</p>
                        <p className="text-xs text-green-700 mt-1">Military-grade project management</p>
                      </div>
                    </div>
                  </td>
                  <td className="p-6 text-center bg-green-50">
                    <div className="text-2xl font-bold text-green-700 mb-1">+300%</div>
                    <p className="text-xs text-green-800 font-medium">Faster Mission Time</p>
                  </td>
                </tr>

                <tr className="hover:bg-red-50/40 transition-colors">
                  <td className="p-6 align-top">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <p className="font-semibold text-red-800 text-sm">❌ Security Retrofitted Later</p>
                        <p className="text-xs text-red-700 mt-1">Band-aid fixes after development</p>
                      </div>
                    </div>
                  </td>
                  <td className="p-6 align-top">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <p className="font-semibold text-green-800 text-sm">✅ Security-First Architecture</p>
                        <p className="text-xs text-green-700 mt-1">Zero-trust built into every component</p>
                      </div>
                    </div>
                  </td>
                  <td className="p-6 text-center bg-green-50">
                    <div className="text-2xl font-bold text-green-700 mb-1">0.0</div>
                    <p className="text-xs text-green-800 font-medium">Security Incidents</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Partnership Depth Section */}
        <div
          className={`mt-16 text-center transform transition-all duration-700 delay-600 ${
            isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <h3 className="text-2xl font-bold mb-6 text-gray-900">
            Trusted Government Partnerships
          </h3>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/60 backdrop-blur-xl rounded-xl p-4 shadow-lg">
              <h4 className="font-semibold text-burnt-orange-600 text-sm mb-2">
                Platform Integrations
              </h4>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">Google GovCloud</span>
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">AWS GovCloud</span>
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">Azure Govt</span>
              </div>
            </div>
            <div className="bg-white/60 backdrop-blur-xl rounded-xl p-4 shadow-lg">
              <h4 className="font-semibold text-burnt-orange-600 text-sm mb-2">
                Contract Vehicles
              </h4>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded">SEWP</span>
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded">CIO-SP3</span>
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded">GSA IT-70</span>
              </div>
            </div>
            <div className="bg-white/60 backdrop-blur-xl rounded-xl p-4 shadow-lg">
              <h4 className="font-semibold text-burnt-orange-600 text-sm mb-2">
                Certifications
              </h4>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded">CMMI Level 3</span>
                <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded">ISO 27001</span>
                <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded">FedRAMP</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompetitivePositioning;
