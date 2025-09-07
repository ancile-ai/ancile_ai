"use client";

import { Shield, Sparkles, ArrowRight, Calendar, Download, X, Send } from "lucide-react";
import { useEffect, useState } from "react";
import { handleContactSubmission } from '../actions/contact';
import { contactFormApiSchema as contactFormSchema } from '../lib/validation';


const CallToAction = () => {
  const [particles, setParticles] = useState([]);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [validationErrors, setValidationErrors] = useState({});
  const [phoneValue, setPhoneValue] = useState('');
  const [phoneError, setPhoneError] = useState('');

  const openModal = () => setIsContactModalOpen(true);
  const closeModal = () => {
    setIsContactModalOpen(false);
    setPhoneValue('');
    setValidationErrors({});
    setPhoneError('');
    setSubmitStatus(null);
  };

  // Phone number formatting function with validation
  const formatPhoneNumber = (value) => {
    // Remove all non-digit characters
    const digits = value.replace(/\D/g, '');

    // Limit to 15 digits max
    const limitedDigits = digits.slice(0, 15);

    // Format based on length
    if (limitedDigits.length >= 10) {
      // US format: (555) 123-4567
      const areaCode = limitedDigits.slice(0, 3);
      const prefix = limitedDigits.slice(3, 6);
      const line = limitedDigits.slice(6, 10);
      const extension = limitedDigits.slice(10);

      let formatted = `(${areaCode}) ${prefix}-${line}`;
      if (extension) {
        formatted += ` ${extension}`;
      }
      return formatted;
    } else if (limitedDigits.length >= 6) {
      // Partial US format: (555) 123-456
      const areaCode = limitedDigits.slice(0, 3);
      const prefix = limitedDigits.slice(3, 6);
      const line = limitedDigits.slice(6);
      return `(${areaCode}) ${prefix}-${line}`;
    } else if (limitedDigits.length >= 3) {
      // Partial area code: (555) 123
      const areaCode = limitedDigits.slice(0, 3);
      const remaining = limitedDigits.slice(3);
      return `(${areaCode}) ${remaining}`;
    } else if (limitedDigits.length > 0) {
      // Just area code: (555
      return `(${limitedDigits}`;
    }

    return '';
  };

  // Handle phone input changes with auto-formatting and validation
  const handlePhoneChange = (e) => {
    const input = e.target.value;
    const formatted = formatPhoneNumber(input);

    // Check digit count
    const digitCount = input.replace(/\D/g, '').length;

    if (digitCount > 15) {
      setPhoneError('Phone number cannot exceed 15 digits');
      return; // Don't update the value
    } else if (digitCount > 0 && digitCount < 10) {
      setPhoneError('Phone number must be at least 10 digits');
    } else {
      setPhoneError('');
    }

    setPhoneValue(formatted);
  };

  const handleSubmit = async (formData) => {
    setIsSubmitting(true);
    setSubmitStatus(null);
    setValidationErrors({});

    // Get raw phone input
    const rawPhone = formData.get('phone') || '';

    // Preprocess phone number - add +1 if no country code is provided and it's 10 digits
    let processedPhone = rawPhone;
    if (rawPhone && !rawPhone.includes('+')) {
      const digitsOnly = rawPhone.replace(/\D/g, '');
      if (digitsOnly.length === 10) {
        processedPhone = `+1 ${formatPhoneNumber(digitsOnly)}`;
      }
    }

    // Convert FormData to object for Zod validation
    const formDataObj = {
      name: formData.get('name') || '',
      email: formData.get('email') || '',
      company: formData.get('company') || '',
      phone: processedPhone || undefined,
      message: formData.get('message') || undefined,
    };

    // Validate with Zod
    const validationResult = contactFormSchema.safeParse(formDataObj);

    if (!validationResult.success) {
      const errors = validationResult.error.format();
      const errorMessages = {};

      // Extract error messages
      if (errors.name?._errors?.[0]) errorMessages.name = errors.name._errors[0];
      if (errors.email?._errors?.[0]) errorMessages.email = errors.email._errors[0];
      if (errors.company?._errors?.[0]) errorMessages.company = errors.company._errors[0];
      if (errors.phone?._errors?.[0]) errorMessages.phone = errors.phone._errors[0];
      if (errors.message?._errors?.[0]) errorMessages.message = errors.message._errors[0];

      setValidationErrors(errorMessages);
      setIsSubmitting(false);
      return;
    }

    try {
      const result = await handleContactSubmission(formData);

      if (result?.success) {
        setSubmitStatus('success');
        // Close modal after 2 seconds on success
        setTimeout(() => {
          closeModal();
          setSubmitStatus(null);
        }, 2000);
      } else {
        setSubmitStatus('error');
        console.error('Form submission error:', result?.error);
      }
    } catch (error) {
      setSubmitStatus('error');
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

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
    <section className="py-24 bg-gradient-to-br from-slate-50 via-gray-50 to-white relative overflow-hidden">
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
        <div className="absolute top-20 left-20 w-64 h-64 bg-burnt-orange-500/5 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-20 right-20 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute top-1/2 left-1/3 w-32 h-32 bg-amber-500/5 rounded-full blur-2xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-white px-4 py-2 rounded-full border border-slate-200 mb-6">
            <Sparkles className="h-5 w-5 text-burnt-orange-700" />
            <span className="text-sm font-medium text-slate-700">
              Get Started Today
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-gray-900 via-slate-800 to-gray-900 bg-clip-text text-transparent pb-2" style={{ paddingBottom: '4px' }}>
            Ready to Transform
            <br />
            <span className="relative bg-gradient-to-r from-burnt-orange-600 to-burnt-orange-700 bg-clip-text text-transparent">
              Your Mission?
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12">
            Partner with professionals who understand your operational
            environment. Schedule a consultation to evaluate your organization's
            AI initiatives.
          </p>
        </div>

        {/* CTA Cards Grid */}
        <div className="grid lg:grid-cols-1 gap-8">
          {/* Primary CTA */}
          <div className="group relative bg-white/60 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:bg-white/85 transition-all duration-500 hover:shadow-xl hover:-translate-y-1 shadow-lg">
            {/* Softer glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-burnt-orange-600/20 to-burnt-orange-800/20 opacity-0 group-hover:opacity-50 transition-opacity duration-500 rounded-2xl blur-xl" />

            {/* Subtle decorative elements */}
            <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-burnt-orange-50 to-amber-50 rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-500" />
            <div className="absolute bottom-6 left-6 w-10 h-10 bg-gradient-to-br from-burnt-orange-100 to-amber-100 rounded-full opacity-15 group-hover:opacity-25 transition-opacity duration-500" />

            <div className="relative">
              {/* Header section */}
              <div className="flex items-center justify-between mb-6">
                <div className="bg-gradient-to-br from-burnt-orange-600 to-burnt-orange-700 p-4 rounded-xl shadow-lg group-hover:scale-105 transition-all duration-300">
                  <Shield className="h-12 w-12 text-white" />
                </div>
              </div>

              {/* Enhanced title with underline effect */}
              <div className="mb-6">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 group-hover:text-burnt-orange-900 transition-colors duration-500">
                  Schedule Secure Consultation
                </h3>
                <div className="w-0 group-hover:w-24 h-1 bg-gradient-to-r from-burnt-orange-600 to-burnt-orange-700 transition-all duration-700" />
              </div>

              {/* Enhanced description with better spacing */}
              <p className="text-lg text-gray-700 mb-10 leading-relaxed text-justify">
                Partner with veteran-founded Ancile AI to secure your agency's
                AI advantage. Our security-cleared team understands your
                mission's unique requirements and the strategic importance of
                reliable AI implementation. Let's discuss your vision and craft
                a tailored solution that delivers measurable mission impact.
              </p>

              {/* Enhanced CTA button with multiple interactive elements */}
              <div className="space-y-4">
                <button
                  onClick={openModal}
                  className="group/btn w-full bg-gradient-to-r from-burnt-orange-700 to-burnt-orange-800 hover:from-burnt-orange-800 hover:to-burnt-orange-900 text-white px-6 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-102 transform flex items-center justify-center space-x-2"
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
                <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-burnt-orange-800 to-burnt-orange-700 bg-clip-text text-transparent mb-1 group-hover:from-burnt-orange-900 group-hover:to-burnt-orange-600 group-hover:scale-105 transition-all duration-300">
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

      {/* Contact Modal */}
      {isContactModalOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 px-4 animate-in fade-in duration-300">
          <div className="bg-white/95 backdrop-blur-xl rounded-2xl max-w-xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-white/20 animate-in zoom-in-95 duration-300">
            {/* Header */}
            <div className="bg-gradient-to-r from-burnt-orange-700 to-burnt-orange-900 text-white p-6 rounded-t-2xl">
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-3">
                  <div className="p-2">
                    <img src="/images/logo/ancile_company_name_logo_orange_color_transparant.svg" alt="Logo" width={24} height={24} className="brightness-0 invert" />
                  </div>
                  <h3 className="text-xl font-bold">Book Your Consultation</h3>
                </div>
                <button
                  onClick={closeModal}
                  className="text-white/80 hover:text-white hover:bg-white/20 p-2 rounded-lg transition-all duration-200"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              <p className="mt-3 text-white/90 text-sm leading-relaxed">
                Schedule a consultation to discuss how Ancile AI can help transform your organization's AI initiatives.
              </p>
            </div>

            {/* Form */}
            <form className="p-6 space-y-5" onSubmit={(e) => {
              console.log('Form submission started');
              e.preventDefault();

              // Check form validity first
              if (!e.target.checkValidity()) {
                console.log('Form is not valid');
                e.target.reportValidity();
                return;
              }

              console.log('Form is valid, proceeding with submission');

              const submitForm = async () => {
                try {
                  setIsSubmitting(true);
                  const formData = new FormData(e.target);
                  console.log('FormData created');
                  await handleSubmit(formData);
                } catch (error) {
                  console.error('Form submission error:', error);
                  setSubmitStatus('error');
                  setIsSubmitting(false);
                }
              };

              submitForm();
            }}>
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-800 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  defaultValue=""
                  required
                  className={`w-full px-4 py-3 border-2 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200 bg-white/50 backdrop-blur-sm ${
                    validationErrors.name ? 'border-red-300 focus:ring-red-500 focus:border-red-500' : 'border-gray-200'
                  }`}
                  placeholder="Your full name"
                />
                {validationErrors.name && (
                  <p className="mt-1 text-sm text-red-600">{validationErrors.name}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-800 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  defaultValue=""
                  required
                  className={`w-full px-4 py-3 border-2 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200 bg-white/50 backdrop-blur-sm ${
                    validationErrors.email ? 'border-red-300 focus:ring-red-500 focus:border-red-500' : 'border-gray-200'
                  }`}
                  placeholder="your.email@company.com"
                />
                {validationErrors.email && (
                  <p className="mt-1 text-sm text-red-600">{validationErrors.email}</p>
                )}
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-semibold text-gray-800 mb-2">
                  Organization/Company *
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  defaultValue=""
                  required
                  className={`w-full px-4 py-3 border-2 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200 bg-white/50 backdrop-blur-sm ${
                    validationErrors.company ? 'border-red-300 focus:ring-red-500 focus:border-red-500' : 'border-gray-200'
                  }`}
                  placeholder="Your organization"
                />
                {validationErrors.company && (
                  <p className="mt-1 text-sm text-red-600">{validationErrors.company}</p>
                )}
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-800 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={phoneValue}
                  onChange={handlePhoneChange}
                  className={`w-full px-4 py-3 border-2 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200 bg-white/50 backdrop-blur-sm ${
                    phoneError ? 'border-red-300 focus:ring-red-500 focus:border-red-500' : 'border-gray-200'
                  }`}
                  placeholder="+1 (555) 123-4567"
                />
                {phoneError && (
                  <p className="mt-1 text-sm text-red-600">{phoneError}</p>
                )}
                {validationErrors.phone && !phoneError && (
                  <p className="mt-1 text-sm text-red-600">{validationErrors.phone}</p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-800 mb-2">
                  Tell us about your project *
                </label>
                <textarea
                  id="message"
                  name="message"
                  defaultValue=""
                  rows={4}
                  required
                  className={`w-full px-4 py-3 border-2 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200 bg-white/50 backdrop-blur-sm resize-none ${
                    validationErrors.message ? 'border-red-300 focus:ring-red-500 focus:border-red-500' : 'border-gray-200'
                  }`}
                  placeholder="Describe your AI initiative, timelines, and any specific requirements..."
                />
                {validationErrors.message && (
                  <p className="mt-1 text-sm text-red-600">{validationErrors.message}</p>
                )}
              </div>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="mb-4 p-3 bg-green-50 border border-green-200 rounded-xl text-green-800 text-sm">
                  ✓ Thank you for your inquiry! We'll contact you within 24 hours.
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-xl text-red-800 text-sm">
                  ✗ Something went wrong. Please try again or contact us directly.
                </div>
              )}

              <div className="pt-4 flex space-x-3">
                <button
                  type="button"
                  onClick={closeModal}
                  disabled={isSubmitting}
                  className="flex-1 px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 bg-gradient-to-r from-burnt-orange-700 to-burnt-orange-900 text-white py-3 px-6 rounded-xl hover:from-burnt-orange-800 hover:to-burnt-orange-900 transition-all duration-200 font-semibold shadow-lg hover:shadow-xl hover:scale-105 transform disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    'Send Inquiry'
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default CallToAction;
