"use client";

import { ArrowRight, Shield, X, Send } from "lucide-react";
import { useEffect, useState } from "react";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(event.target);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      company: formData.get('company'),
      phone: formData.get('phone'),
      message: formData.get('message')
    };

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ data }),
      });

      if (response.ok) {
        setIsModalOpen(false);
        alert('Message sent successfully!');
      } else {
        const errorData = await response.json();
        alert(`Error: ${errorData.error || 'Failed to send message'}`);
      }
    } catch (error) {
      alert('Error sending message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative bg-slate-50 text-gray-900 overflow-hidden py-24 min-h-screen flex items-center">
      {/* Professional Background */}
      <div className="absolute inset-0">
        {/* Subtle pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23111111%22 fill-opacity=%220.02%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]" />

        {/* Professional gradient orbs */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-burnt-orange-600/10 rounded-full blur-2xl" />
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-slate-200/20 rounded-full blur-2xl" />
        <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-burnt-orange-600/10 rounded-full blur-xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 w-full">
        {/* Badge */}
        <div
          className={`text-center mb-16 transform transition-all duration-700 ${
            isLoaded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          <div className="inline-flex items-center space-x-2 bg-slate-100 px-6 py-3 rounded-full border border-slate-300 shadow-lg">
            <Shield className="h-5 w-5 text-burnt-orange-600" />
            <span className="text-sm font-medium text-slate-800">
              SDVOSB • Veteran-Owned • Mission-Focused
            </span>
          </div>
        </div>

        {/* Main Headline */}
        <div
          className={`text-center mb-20 relative transform transition-all duration-700 delay-200 ${
            isLoaded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight text-gray-900 pb-2" style={{ paddingBottom: '4px' }}>
            AI Solutions Built
            <br />
            <span className="relative text-burnt-orange-600 font-bold">
              For Government Operations
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed mb-12">
            We engineer modern purpose-built edge, on-prem, and cloud AI
            solutions using battle-tested open-source foundations, ensuring
            transparency, security, and adaptability. Our agile development
            approach rapidly transforms government use cases into prototypes and
            deployed AI solutions. Our veteran-led team understands that
            government operations present unique challenges and are committed to
            delivering systems you can trust, modify, and control, meeting
            federal requirements for deployment starting day one.
          </p>
        </div>

        {/* Key Differentiators */}
        <div
          className={`text-center mb-16 transform transition-all duration-700 delay-400 ${
            isLoaded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-slate-200 shadow-lg hover:shadow-xl transition-all duration-300">
              <Shield className="h-8 w-8 text-burnt-orange-600 mx-auto mb-3" />
              <h3 className="text-sm font-bold text-slate-800 mb-2">
                NIST AI RMF Compliant
              </h3>
              <p className="text-xs text-slate-600">
                Built to the latest 2025 federal AI standards from conception
              </p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-slate-200 shadow-lg hover:shadow-xl transition-all duration-300">
              <Shield className="h-8 w-8 text-burnt-orange-600 mx-auto mb-3" />
              <h3 className="text-sm font-bold text-slate-800 mb-2">
                Mission-Critical Reliability
              </h3>
              <p className="text-xs text-slate-600">
                99.9% uptime across classified and unclassified environments
              </p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-slate-200 shadow-lg hover:shadow-xl transition-all duration-300">
              <Shield className="h-8 w-8 text-burnt-orange-600 mx-auto mb-3" />
              <h3 className="text-sm font-bold text-slate-800 mb-2">
                Veteran-Led Expertise
              </h3>
              <p className="text-xs text-slate-600">
                Founded and staffed by operators who understand government
                workflows
              </p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-slate-200 shadow-lg hover:shadow-xl transition-all duration-300">
              <Shield className="h-8 w-8 text-burnt-orange-600 mx-auto mb-3" />
              <h3 className="text-sm font-bold text-slate-800 mb-2">
                Security-First Design
              </h3>
              <p className="text-xs text-slate-600">
                GSA and DoD complaint architectures with zero compromise on
                performance
              </p>
            </div>
          </div>
        </div>

        {/* Professional CTA Buttons removed */}
      </div>

      {/* Contact Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
            <div
              className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
              onClick={() => setIsModalOpen(false)}
            ></div>

            <div className="inline-block w-full max-w-md px-6 py-8 text-left align-bottom transition-all transform bg-white shadow-xl rounded-2xl sm:align-middle">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-gray-900">Contact Us</h3>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X className="h-6 w-6 text-gray-400" />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-burnt-orange-600 focus:border-burnt-orange-600"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-burnt-orange-600 focus:border-burnt-orange-600"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Organization</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-burnt-orange-600 focus:border-burnt-orange-600"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone (optional)</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-burnt-orange-600 focus:border-burnt-orange-600"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows="4"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-burnt-orange-600 focus:border-burnt-orange-600"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-burnt-orange-600 hover:bg-burnt-orange-600 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <Send className="h-5 w-5" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
