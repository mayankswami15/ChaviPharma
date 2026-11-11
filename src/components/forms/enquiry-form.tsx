"use client";

import { useState } from "react";
import { Loader2, CheckCircle, AlertCircle } from "lucide-react";
import { ENQUIRY_TYPES } from "@/lib/constants";
import type { EnquiryType } from "@/types/product";

interface EnquiryFormProps {
  defaultType?: EnquiryType;
  defaultProduct?: string;
}

export function EnquiryForm({ defaultType, defaultProduct }: EnquiryFormProps) {
  const [formState, setFormState] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  function validate(formData: FormData): Record<string, string> {
    const err: Record<string, string> = {};
    if (!formData.get("name")?.toString().trim())
      err.name = "Name is required.";
    if (!formData.get("phone")?.toString().trim())
      err.phone = "Phone number is required.";
    const email = formData.get("email")?.toString().trim() || "";
    if (!email) err.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      err.email = "Please enter a valid email.";
    if (!formData.get("enquiryType")?.toString())
      err.enquiryType = "Please select an enquiry type.";
    if (!formData.get("message")?.toString().trim())
      err.message = "Message is required.";
    if (!formData.get("consent"))
      err.consent = "Please agree before submitting.";
    return err;
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const validationErrors = validate(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setErrorMessage("");
    setFormState("submitting");

    try {
      const accessKey =
        process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ||
        "22cf813d-a43d-4b60-8659-10081bcc5499";

      const payload = {
        access_key: accessKey,
        subject: `New Enquiry from ${formData.get("name")} - Chavi Pharmaceuticals`,
        from_name: "Chavi Pharmaceuticals Website",
        name: formData.get("name"),
        email: formData.get("email"),
        phone: formData.get("phone"),
        company: formData.get("company") || "Not specified",
        city_state: formData.get("cityState") || "Not specified",
        enquiry_type: formData.get("enquiryType"),
        product: defaultProduct || "General Enquiry",
        message: formData.get("message"),
      };

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (data.success) {
        setFormState("success");
      } else {
        setFormState("error");
        setErrorMessage(
          data.message || "Failed to submit enquiry. Please try again."
        );
      }
    } catch {
      setFormState("error");
      setErrorMessage(
        "Network connection error. Please check your internet and try again."
      );
    }
  }

  if (formState === "success") {
    return (
      <div className="text-center py-12 px-6 rounded-2xl bg-green/5 border border-green/20">
        <CheckCircle className="w-12 h-12 text-green mx-auto mb-4" />
        <h3 className="font-display font-bold text-xl text-navy mb-2">
          Enquiry Sent Successfully!
        </h3>
        <p className="text-text-muted text-sm max-w-md mx-auto mb-6">
          Thank you for contacting Chavi Pharmaceuticals. Your message has been
          forwarded to our team, and we will get back to you shortly.
        </p>
        <button
          onClick={() => setFormState("idle")}
          className="inline-flex items-center justify-center px-6 py-2.5 bg-navy text-white text-sm font-semibold rounded-xl hover:bg-navy-light transition-colors"
        >
          Send Another Enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      {formState === "error" && (
        <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold">Unable to send enquiry</p>
            <p className="text-xs text-red-600 mt-0.5">
              {errorMessage || "Please try again or contact us directly via WhatsApp / phone."}
            </p>
          </div>
        </div>
      )}

      {/* Name */}
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-navy mb-1.5"
        >
          Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="w-full px-4 py-3 bg-white border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-teal/20 focus:border-teal transition-all"
          placeholder="Your full name"
        />
        {errors.name && (
          <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
            <AlertCircle className="w-3 h-3" />
            {errors.name}
          </p>
        )}
      </div>

      {/* Company */}
      <div>
        <label
          htmlFor="company"
          className="block text-sm font-medium text-navy mb-1.5"
        >
          Company / Organisation
        </label>
        <input
          type="text"
          id="company"
          name="company"
          className="w-full px-4 py-3 bg-white border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-teal/20 focus:border-teal transition-all"
          placeholder="Your company name"
        />
      </div>

      {/* Phone & Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-navy mb-1.5"
          >
            Phone <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="w-full px-4 py-3 bg-white border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-teal/20 focus:border-teal transition-all"
            placeholder="+91 XXXXX XXXXX"
          />
          {errors.phone && (
            <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" />
              {errors.phone}
            </p>
          )}
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-navy mb-1.5"
          >
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full px-4 py-3 bg-white border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-teal/20 focus:border-teal transition-all"
            placeholder="you@example.com"
          />
          {errors.email && (
            <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" />
              {errors.email}
            </p>
          )}
        </div>
      </div>

      {/* City/State */}
      <div>
        <label
          htmlFor="cityState"
          className="block text-sm font-medium text-navy mb-1.5"
        >
          City / State
        </label>
        <input
          type="text"
          id="cityState"
          name="cityState"
          className="w-full px-4 py-3 bg-white border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-teal/20 focus:border-teal transition-all"
          placeholder="Your city or state"
        />
      </div>

      {/* Enquiry Type */}
      <div>
        <label
          htmlFor="enquiryType"
          className="block text-sm font-medium text-navy mb-1.5"
        >
          Enquiry Type <span className="text-red-500">*</span>
        </label>
        <select
          id="enquiryType"
          name="enquiryType"
          defaultValue={defaultType || ""}
          className="w-full px-4 py-3 bg-white border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-teal/20 focus:border-teal transition-all appearance-none cursor-pointer"
        >
          <option value="">Select enquiry type</option>
          {ENQUIRY_TYPES.map((type) => (
            <option key={type.value} value={type.value}>
              {type.label}
            </option>
          ))}
        </select>
        {errors.enquiryType && (
          <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
            <AlertCircle className="w-3 h-3" />
            {errors.enquiryType}
          </p>
        )}
      </div>

      {/* Default Product (hidden) */}
      {defaultProduct && (
        <input type="hidden" name="product" value={defaultProduct} />
      )}

      {/* Message */}
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-navy mb-1.5"
        >
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="w-full px-4 py-3 bg-white border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-teal/20 focus:border-teal transition-all resize-y"
          placeholder="How can we help you?"
        />
        {errors.message && (
          <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
            <AlertCircle className="w-3 h-3" />
            {errors.message}
          </p>
        )}
      </div>

      {/* Consent */}
      <div className="flex items-start gap-3">
        <input
          type="checkbox"
          id="consent"
          name="consent"
          className="mt-1 w-4 h-4 rounded border-border text-teal focus:ring-teal/20 cursor-pointer"
        />
        <label htmlFor="consent" className="text-sm text-text-muted leading-snug">
          I agree to share my details with Chavi Pharmaceuticals for the purpose
          of this enquiry. <span className="text-red-500">*</span>
        </label>
      </div>
      {errors.consent && (
        <p className="text-xs text-red-500 flex items-center gap-1 -mt-2">
          <AlertCircle className="w-3 h-3" />
          {errors.consent}
        </p>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={formState === "submitting"}
        className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 bg-navy text-white font-semibold rounded-xl hover:bg-navy-light transition-all hover:shadow-lg hover:shadow-navy/20 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {formState === "submitting" ? (
          <>
            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
            Submitting...
          </>
        ) : (
          "Submit Enquiry"
        )}
      </button>

      {/* Privacy note */}
      <p className="text-xs text-text-muted mt-2">
        We respect your privacy. Your details are safe with us.
      </p>
    </form>
  );
}
