"use client";

import { createContext, useContext, useState } from "react";
import { X, Send } from "lucide-react";
import Image from "next/image";
import { handleContactSubmission } from "../actions/contact";
import { contactFormApiSchema as contactFormSchema } from "../lib/validation";

const ContactModalContext = createContext();

export const ContactModalProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [validationErrors, setValidationErrors] = useState({});
  const [phoneValue, setPhoneValue] = useState("");
  const [phoneError, setPhoneError] = useState("");

  const openModal = () => setIsModalOpen(true);

  const closeModal = () => {
    setIsModalOpen(false);
    setPhoneValue("");
    setValidationErrors({});
    setPhoneError("");
    setSubmitStatus(null);
  };

  // Phone number formatting function with validation
  const formatPhoneNumber = (value) => {
    // Remove all non-digit characters
    const digits = value.replace(/\D/g, "");

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

    return "";
  };

  // Handle phone input changes with auto-formatting and validation
  const handlePhoneChange = (e) => {
    const input = e.target.value;
    const formatted = formatPhoneNumber(input);

    // Check digit count
    const digitCount = input.replace(/\D/g, "").length;

    if (digitCount > 15) {
      setPhoneError("Phone number cannot exceed 15 digits");
      return; // Don't update the value
    } else if (digitCount > 0 && digitCount < 10) {
      setPhoneError("Phone number must be at least 10 digits");
    } else {
      setPhoneError("");
    }

    setPhoneValue(formatted);
  };

  const handleSubmit = async (formData) => {
    setIsSubmitting(true);
    setSubmitStatus(null);
    setValidationErrors({});

    // Get raw phone input
    const rawPhone = formData.get("phone") || "";

    // Preprocess phone number - add +1 if no country code is provided and it's 10 digits
    let processedPhone = rawPhone;
    if (rawPhone && !rawPhone.includes("+")) {
      const digitsOnly = rawPhone.replace(/\D/g, "");
      if (digitsOnly.length === 10) {
        processedPhone = `+1 ${formatPhoneNumber(digitsOnly)}`;
      }
    }

    // Convert FormData to object for Zod validation
    const formDataObj = {
      name: formData.get("name") || "",
      email: formData.get("email") || "",
      company: formData.get("company") || "",
      phone: processedPhone || undefined,
      message: formData.get("message") || undefined,
    };

    // Validate with Zod
    const validationResult = contactFormSchema.safeParse(formDataObj);

    if (!validationResult.success) {
      const errors = validationResult.error.format();
      const errorMessages = {};

      // Extract error messages
      if (errors.name?._errors?.[0])
        errorMessages.name = errors.name._errors[0];
      if (errors.email?._errors?.[0])
        errorMessages.email = errors.email._errors[0];
      if (errors.company?._errors?.[0])
        errorMessages.company = errors.company._errors[0];
      if (errors.phone?._errors?.[0])
        errorMessages.phone = errors.phone._errors[0];
      if (errors.message?._errors?.[0])
        errorMessages.message = errors.message._errors[0];

      setValidationErrors(errorMessages);
      setIsSubmitting(false);
      return;
    }

    try {
      const result = await handleContactSubmission(formData);

      if (result?.success) {
        setSubmitStatus("success");
        // Close modal after 2 seconds on success
        setTimeout(() => {
          closeModal();
          setSubmitStatus(null);
        }, 2000);
      } else {
        setSubmitStatus("error");
        console.error("Form submission error:", result?.error);
      }
    } catch (error) {
      setSubmitStatus("error");
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <ContactModalContext.Provider
      value={{
        openModal,
        closeModal,
      }}
    >
      {children}

      {/* Shared Contact Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 px-4 animate-in fade-in duration-300">
          <div className="bg-white/95 backdrop-blur-xl rounded-2xl max-w-xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-white/20 animate-in zoom-in-95 duration-300">
            {/* Header */}
            <div className="bg-burnt-orange-600 text-white p-6 rounded-t-2xl relative">
              <div className="flex justify-center items-center">
                <div className="p-2">
                  <Image
                    src="/images/logo/ancile_company_name_logo_orange_color_transparant.svg"
                    alt="Logo"
                    width={156}
                    height={32}
                    className="brightness-0 invert"
                  />
                </div>
              </div>
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-white/80 hover:text-white hover:bg-white/20 p-2 rounded-lg transition-all duration-200"
              >
                <X className="h-6 w-6" />
              </button>
              <h3 className="text-xl font-bold text-left">Contact Us</h3>
              <p className="mt-3 text-white/90 text-sm leading-relaxed">
                Let's discuss how Ancile AI can help transform your organization with AI solutions.
              </p>
            </div>

            {/* Form */}
            <form
              className="p-6 space-y-5"
              onSubmit={(e) => {
                console.log("Form submission started");
                e.preventDefault();

                if (!e.target.checkValidity()) {
                  console.log("Form is not valid");
                  e.target.reportValidity();
                  return;
                }

                console.log("Form is valid, proceeding with submission");

                const submitForm = async () => {
                  try {
                    setIsSubmitting(true);
                    const formData = new FormData(e.target);
                    console.log("FormData created");
                    await handleSubmit(formData);
                  } catch (error) {
                    console.error("Form submission error:", error);
                    setSubmitStatus("error");
                    setIsSubmitting(false);
                  }
                };

                submitForm();
              }}
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-gray-800 mb-2"
                >
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  defaultValue=""
                  required
                  className={`w-full px-4 py-3 border-2 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200 bg-white/50 backdrop-blur-sm ${
                    validationErrors.name
                      ? "border-red-300 focus:ring-red-500 focus:border-red-500"
                      : "border-gray-200"
                  }`}
                  placeholder="Your full name"
                />
                {validationErrors.name && (
                  <p className="mt-1 text-sm text-red-600">
                    {validationErrors.name}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-800 mb-2"
                >
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  defaultValue=""
                  required
                  className={`w-full px-4 py-3 border-2 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200 bg-white/50 backdrop-blur-sm ${
                    validationErrors.email
                      ? "border-red-300 focus:ring-red-500 focus:border-red-500"
                      : "border-gray-200"
                  }`}
                  placeholder="your.email@company.com"
                />
                {validationErrors.email && (
                  <p className="mt-1 text-sm text-red-600">
                    {validationErrors.email}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="company"
                  className="block text-sm font-semibold text-gray-800 mb-2"
                >
                  Organization/Company *
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  defaultValue=""
                  required
                  className={`w-full px-4 py-3 border-2 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200 bg-white/50 backdrop-blur-sm ${
                    validationErrors.company
                      ? "border-red-300 focus:ring-red-500 focus:border-red-500"
                      : "border-gray-200"
                  }`}
                  placeholder="Your organization"
                />
                {validationErrors.company && (
                  <p className="mt-1 text-sm text-red-600">
                    {validationErrors.company}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-semibold text-gray-800 mb-2"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={phoneValue}
                  onChange={handlePhoneChange}
                  className={`w-full px-4 py-3 border-2 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200 bg-white/50 backdrop-blur-sm ${
                    phoneError
                      ? "border-red-300 focus:ring-red-500 focus:border-red-500"
                      : "border-gray-200"
                  }`}
                  placeholder="+1 (555) 123-4567"
                />
                {phoneError && (
                  <p className="mt-1 text-sm text-red-600">{phoneError}</p>
                )}
                {validationErrors.phone && !phoneError && (
                  <p className="mt-1 text-sm text-red-600">
                    {validationErrors.phone}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-gray-800 mb-2"
                >
                  Tell us about your project *
                </label>
                <textarea
                  id="message"
                  name="message"
                  defaultValue=""
                  rows={4}
                  required
                  className={`w-full px-4 py-3 border-2 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200 bg-white/50 backdrop-blur-sm resize-none ${
                    validationErrors.message
                      ? "border-red-300 focus:ring-red-500 focus:border-red-500"
                      : "border-gray-200"
                  }`}
                  placeholder="Describe your AI initiative, timelines, and any specific requirements..."
                />
                {validationErrors.message && (
                  <p className="mt-1 text-sm text-red-600">
                    {validationErrors.message}
                  </p>
                )}
              </div>

              {/* Status Messages */}
              {submitStatus === "success" && (
                <div className="mb-4 p-3 bg-green-50 border border-green-200 rounded-xl text-green-800 text-sm">
                  ✓ Thank you for your inquiry! We'll contact you within 24 hours.
                </div>
              )}
              {submitStatus === "error" && (
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
                  className="flex-1 bg-burnt-orange-600 text-white py-3 px-6 rounded-xl hover:bg-burnt-orange-600 transition-all duration-200 font-semibold shadow-lg hover:shadow-xl hover:scale-105 transform disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    "Send Inquiry"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </ContactModalContext.Provider>
  );
};

export const useContactModal = () => {
  const context = useContext(ContactModalContext);
  if (!context) {
    throw new Error("useContactModal must be used within ContactModalProvider");
  }
  return context;
};
