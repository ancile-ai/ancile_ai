"use client";

import { createContext, useContext, useEffect, useRef, useState } from "react";
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
  const dialogRef = useRef(null);
  const firstFieldRef = useRef(null);
  const openerRef = useRef(null);

  useEffect(() => {
    if (!isModalOpen) {
      return undefined;
    }

    // Remember what opened the dialog so focus can return there on close.
    openerRef.current = document.activeElement;
    firstFieldRef.current?.focus();

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        // Consume the key so menus behind the dialog stay as they were.
        event.preventDefault();
        event.stopPropagation();
        closeModal();
        return;
      }

      // Keep Tab cycling inside the dialog.
      if (event.key === "Tab" && dialogRef.current) {
        const focusable = dialogRef.current.querySelectorAll(
          "button:not([disabled]), input:not([disabled]), textarea:not([disabled]), a[href]"
        );
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown, true);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown, true);
      const opener = openerRef.current;
      if (opener && typeof opener.focus === "function") {
        opener.focus();
      }
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

          <div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-dialog-title"
            aria-describedby="contact-dialog-description"
            className="relative z-10 max-h-[calc(100vh-2rem)] w-full max-w-2xl overflow-y-auto rounded-xl border border-white/40 bg-white shadow-2xl"
          >
            <button
              type="button"
              onClick={closeModal}
              className="absolute right-4 top-4 z-20 rounded-md bg-slate-100 p-2 text-slate-500 transition hover:bg-slate-200 hover:text-slate-900"
              aria-label="Close contact form"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>

            <div className="grid gap-0 md:grid-cols-[0.9fr_1.1fr]">
              <div className="band-dark relative overflow-hidden px-6 py-8 text-white sm:px-8">
                <div className="aurora-dark pointer-events-none absolute inset-0" />
                <div className="soft-grid-dark pointer-events-none absolute inset-0 opacity-50" />

                <div className="relative">
                  <Logo tone="dark" markClassName="h-9 w-auto" />

                  <p className="section-eyebrow mt-8 text-burnt-orange-300">
                    Contact
                  </p>
                  <h2 id="contact-dialog-title" className="font-display mt-5 text-3xl font-semibold">
                    Discuss program fit and technical scope.
                  </h2>
                  <p id="contact-dialog-description" className="mt-4 text-sm leading-7 text-slate-300">
                    Use this form for passive sUAS product discussions, subcontract
                    engineering support, or operational AI delivery requirements.
                  </p>

                  <div className="mt-8 space-y-2.5">
                    {[
                      { icon: Radar, label: "Passive sUAS detection" },
                      { icon: Boxes, label: "Subcontract support" },
                      { icon: BrainCircuit, label: "Applied AI and integration" },
                    ].map((item) => (
                      <div
                        key={item.label}
                        className="flex items-center gap-3 rounded-md border border-white/10 bg-white/5 px-3 py-2.5"
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
                    ref={firstFieldRef}
                    autoComplete="name"
                    required
                    aria-invalid={Boolean(validationErrors.name)}
                    aria-describedby={validationErrors.name ? "name-error" : undefined}
                    className={`w-full rounded-lg border px-4 py-3 text-slate-900 outline-none transition focus:border-burnt-orange-400 focus:ring-2 focus:ring-burnt-orange-100 ${
                      validationErrors.name ? "border-red-300" : "border-slate-200"
                    }`}
                    placeholder="Your full name"
                  />
                  {validationErrors.name && <p id="name-error" className="mt-1 text-sm text-red-600">{validationErrors.name}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-semibold text-slate-800">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    autoComplete="email"
                    inputMode="email"
                    required
                    aria-invalid={Boolean(validationErrors.email)}
                    aria-describedby={validationErrors.email ? "email-error" : undefined}
                    className={`w-full rounded-lg border px-4 py-3 text-slate-900 outline-none transition focus:border-burnt-orange-400 focus:ring-2 focus:ring-burnt-orange-100 ${
                      validationErrors.email ? "border-red-300" : "border-slate-200"
                    }`}
                    placeholder="name@company.com"
                  />
                  {validationErrors.email && <p id="email-error" className="mt-1 text-sm text-red-600">{validationErrors.email}</p>}
                </div>

                <div>
                  <label htmlFor="company" className="mb-2 block text-sm font-semibold text-slate-800">
                    Organization *
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    autoComplete="organization"
                    required
                    aria-invalid={Boolean(validationErrors.company)}
                    aria-describedby={validationErrors.company ? "company-error" : undefined}
                    className={`w-full rounded-lg border px-4 py-3 text-slate-900 outline-none transition focus:border-burnt-orange-400 focus:ring-2 focus:ring-burnt-orange-100 ${
                      validationErrors.company ? "border-red-300" : "border-slate-200"
                    }`}
                    placeholder="Organization or prime contractor"
                  />
                  {validationErrors.company && <p id="company-error" className="mt-1 text-sm text-red-600">{validationErrors.company}</p>}
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
                    autoComplete="tel"
                    inputMode="tel"
                    aria-invalid={Boolean(phoneError || validationErrors.phone)}
                    aria-describedby={phoneError || validationErrors.phone ? "phone-error" : undefined}
                    className={`w-full rounded-lg border px-4 py-3 text-slate-900 outline-none transition focus:border-burnt-orange-400 focus:ring-2 focus:ring-burnt-orange-100 ${
                      phoneError || validationErrors.phone ? "border-red-300" : "border-slate-200"
                    }`}
                    placeholder="+1 (555) 123-4567"
                  />
                  {phoneError && <p id="phone-error" className="mt-1 text-sm text-red-600">{phoneError}</p>}
                  {validationErrors.phone && !phoneError && (
                    <p id="phone-error" className="mt-1 text-sm text-red-600">{validationErrors.phone}</p>
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
                    aria-invalid={Boolean(validationErrors.message)}
                    aria-describedby={validationErrors.message ? "message-error" : undefined}
                    className={`w-full resize-none rounded-lg border px-4 py-3 text-slate-900 outline-none transition focus:border-burnt-orange-400 focus:ring-2 focus:ring-burnt-orange-100 ${
                      validationErrors.message ? "border-red-300" : "border-slate-200"
                    }`}
                    placeholder="Describe the program need, timeline, and where you need support."
                  />
                  {validationErrors.message && <p id="message-error" className="mt-1 text-sm text-red-600">{validationErrors.message}</p>}
                </div>

                {submitStatus === "success" && (
                  <div role="status" className="rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-800">
                    Inquiry sent. We will follow up shortly.
                  </div>
                )}
                {submitStatus === "error" && (
                  <div role="alert" className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
                    Submission failed. Try again or email{" "}
                    <a href="mailto:sales@ancile.io" className="font-semibold underline">
                      sales@ancile.io
                    </a>
                    .
                  </div>
                )}

                <div className="flex flex-col gap-3 pt-2 sm:flex-row">
                  <button
                    type="button"
                    onClick={closeModal}
                    disabled={isSubmitting}
                    className="w-full rounded-md border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-burnt-orange-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-burnt-orange-700 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {isSubmitting ? "Sending..." : "Send Inquiry"}
                    {!isSubmitting && <ArrowRight className="h-4 w-4" aria-hidden="true" />}
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
