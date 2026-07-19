"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { ArrowRight, BrainCircuit, Boxes, Radar, X } from "lucide-react";
import Logo from "../components/Logo";
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

  useEffect(() => {
    if (!isModalOpen) {
      return undefined;
    }

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isModalOpen]);

  const openModal = () => setIsModalOpen(true);

  const closeModal = () => {
    setIsModalOpen(false);
    setPhoneValue("");
    setValidationErrors({});
    setPhoneError("");
    setSubmitStatus(null);
  };

  const formatPhoneNumber = (value) => {
    const digits = value.replace(/\D/g, "").slice(0, 15);

    if (digits.length >= 10) {
      const areaCode = digits.slice(0, 3);
      const prefix = digits.slice(3, 6);
      const line = digits.slice(6, 10);
      const extension = digits.slice(10);

      let formatted = `(${areaCode}) ${prefix}-${line}`;
      if (extension) {
        formatted += ` ${extension}`;
      }
      return formatted;
    }

    if (digits.length >= 6) {
      return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
    }

    if (digits.length >= 3) {
      return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
    }

    if (digits.length > 0) {
      return `(${digits}`;
    }

    return "";
  };

  const handlePhoneChange = (event) => {
    const input = event.target.value;
    const formatted = formatPhoneNumber(input);
    const digitCount = input.replace(/\D/g, "").length;

    if (digitCount > 15) {
      setPhoneError("Phone number cannot exceed 15 digits");
      return;
    }

    if (digitCount > 0 && digitCount < 10) {
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

    const rawPhone = formData.get("phone") || "";
    let processedPhone = rawPhone;

    if (rawPhone && !rawPhone.includes("+")) {
      const digitsOnly = rawPhone.replace(/\D/g, "");
      if (digitsOnly.length === 10) {
        processedPhone = `+1 ${formatPhoneNumber(digitsOnly)}`;
      }
    }

    const formDataObj = {
      name: formData.get("name") || "",
      email: formData.get("email") || "",
      company: formData.get("company") || "",
      phone: processedPhone || undefined,
      message: formData.get("message") || undefined,
    };

    const validationResult = contactFormSchema.safeParse(formDataObj);

    if (!validationResult.success) {
      const errors = validationResult.error.format();
      const errorMessages = {};

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
        setSubmitStatus("success");
        window.setTimeout(() => {
          closeModal();
        }, 1800);
      } else {
        setSubmitStatus("error");
      }
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <ContactModalContext.Provider value={{ openModal, closeModal }}>
      {children}

      {isModalOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-slate-950/60 px-4 backdrop-blur-sm">
          <div
            className="absolute inset-0"
            onClick={closeModal}
            aria-hidden="true"
          />

          <div className="relative z-10 w-full max-w-2xl overflow-hidden rounded-[2rem] border border-white/40 bg-white shadow-2xl">
            <button
              type="button"
              onClick={closeModal}
              className="absolute right-4 top-4 z-20 rounded-full bg-slate-100 p-2 text-slate-500 transition hover:bg-slate-200 hover:text-slate-900"
              aria-label="Close contact form"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="grid gap-0 md:grid-cols-[0.9fr_1.1fr]">
              <div className="band-dark relative overflow-hidden px-6 py-8 text-white sm:px-8">
                <div className="aurora-dark pointer-events-none absolute inset-0" />
                <div className="soft-grid-dark pointer-events-none absolute inset-0 opacity-50" />

                <div className="relative">
                  <Logo tone="dark" markClassName="h-9 w-auto" />

                  <p className="section-eyebrow mt-8 border-white/20 bg-white/10 text-white">
                    Contact
                  </p>
                  <h3 className="font-display mt-5 text-3xl font-semibold">
                    Discuss program fit and technical scope.
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-slate-300">
                    Use this form for passive sUAS product discussions, subcontract
                    engineering support, or operational AI delivery requirements.
                  </p>

                  <div className="mt-8 space-y-2.5">
                    {[
                      { icon: Radar, label: "Passive sUAS detection" },
                      { icon: Boxes, label: "Prime subcontract support" },
                      { icon: BrainCircuit, label: "Applied AI and integration" },
                    ].map((item) => (
                      <div
                        key={item.label}
                        className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-3 py-2.5"
                      >
                        <item.icon className="h-4 w-4 flex-shrink-0 text-burnt-orange-300" />
                        <span className="text-sm text-slate-200">{item.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <form
                className="space-y-4 px-6 py-8 sm:px-8"
                onSubmit={(event) => {
                  event.preventDefault();
                  const formData = new FormData(event.currentTarget);
                  void handleSubmit(formData);
                }}
              >
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-semibold text-slate-800">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className={`w-full rounded-2xl border px-4 py-3 text-slate-900 outline-none transition focus:border-burnt-orange-400 focus:ring-2 focus:ring-burnt-orange-100 ${
                      validationErrors.name ? "border-red-300" : "border-slate-200"
                    }`}
                    placeholder="Your full name"
                  />
                  {validationErrors.name && <p className="mt-1 text-sm text-red-600">{validationErrors.name}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-semibold text-slate-800">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className={`w-full rounded-2xl border px-4 py-3 text-slate-900 outline-none transition focus:border-burnt-orange-400 focus:ring-2 focus:ring-burnt-orange-100 ${
                      validationErrors.email ? "border-red-300" : "border-slate-200"
                    }`}
                    placeholder="name@company.com"
                  />
                  {validationErrors.email && <p className="mt-1 text-sm text-red-600">{validationErrors.email}</p>}
                </div>

                <div>
                  <label htmlFor="company" className="mb-2 block text-sm font-semibold text-slate-800">
                    Organization *
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    required
                    className={`w-full rounded-2xl border px-4 py-3 text-slate-900 outline-none transition focus:border-burnt-orange-400 focus:ring-2 focus:ring-burnt-orange-100 ${
                      validationErrors.company ? "border-red-300" : "border-slate-200"
                    }`}
                    placeholder="Organization or prime contractor"
                  />
                  {validationErrors.company && <p className="mt-1 text-sm text-red-600">{validationErrors.company}</p>}
                </div>

                <div>
                  <label htmlFor="phone" className="mb-2 block text-sm font-semibold text-slate-800">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={phoneValue}
                    onChange={handlePhoneChange}
                    className={`w-full rounded-2xl border px-4 py-3 text-slate-900 outline-none transition focus:border-burnt-orange-400 focus:ring-2 focus:ring-burnt-orange-100 ${
                      phoneError || validationErrors.phone ? "border-red-300" : "border-slate-200"
                    }`}
                    placeholder="+1 (555) 123-4567"
                  />
                  {phoneError && <p className="mt-1 text-sm text-red-600">{phoneError}</p>}
                  {validationErrors.phone && !phoneError && (
                    <p className="mt-1 text-sm text-red-600">{validationErrors.phone}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-semibold text-slate-800">
                    Project Scope *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className={`w-full resize-none rounded-2xl border px-4 py-3 text-slate-900 outline-none transition focus:border-burnt-orange-400 focus:ring-2 focus:ring-burnt-orange-100 ${
                      validationErrors.message ? "border-red-300" : "border-slate-200"
                    }`}
                    placeholder="Describe the program need, timeline, and where you need support."
                  />
                  {validationErrors.message && <p className="mt-1 text-sm text-red-600">{validationErrors.message}</p>}
                </div>

                {submitStatus === "success" && (
                  <div className="rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-800">
                    Inquiry sent. We will follow up shortly.
                  </div>
                )}
                {submitStatus === "error" && (
                  <div className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
                    Submission failed. Try again or email `sales@ancile.io`.
                  </div>
                )}

                <div className="flex flex-col gap-3 pt-2 sm:flex-row">
                  <button
                    type="button"
                    onClick={closeModal}
                    disabled={isSubmitting}
                    className="w-full rounded-full border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-burnt-orange-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-burnt-orange-700 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {isSubmitting ? "Sending..." : "Send Inquiry"}
                    {!isSubmitting && <ArrowRight className="h-4 w-4" />}
                  </button>
                </div>
              </form>
            </div>
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
