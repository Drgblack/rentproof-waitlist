"use client";

import type { ChangeEvent, FormEvent } from "react";
import { useState } from "react";
import { CheckCircle2, ShieldCheck } from "lucide-react";
import { toast } from "react-hot-toast";
import { supabase } from "@/lib/supabase";

type FormState = {
  fullName: string;
  email: string;
  portfolioSize: string;
  managesEngland: boolean;
  biggestWorry: string;
  toolsUsed: string[];
  toolsUsedOther: string;
  evidencePackTime: string;
  mostValuableFeatures: string[];
  possessionExperience: string;
  designPartnerOpenness: string;
};

type WaitlistFormProps = {
  disclaimer?: string;
};

const initialState: FormState = {
  fullName: "",
  email: "",
  portfolioSize: "",
  managesEngland: false,
  biggestWorry: "",
  toolsUsed: [],
  toolsUsedOther: "",
  evidencePackTime: "",
  mostValuableFeatures: [],
  possessionExperience: "",
  designPartnerOpenness: "",
};

const toolsUsedOptions = [
  "Excel or Google Sheets",
  "Calendar reminders",
  "Property management software (e.g. Arthur Online, Goodlord)",
  "My letting agent handles it",
  "I don't have a consistent system",
  "Other",
] as const;

const evidencePackTimeOptions = [
  "Under 1 hour — my records are in good shape",
  "About half a day",
  "A full day or more",
  "I honestly don't know",
] as const;

const mostValuableFeatureOptions = [
  "Dated Evidence Readiness Snapshot for possession cases",
  "Organised arrears history for Ground 8 cases",
  "PRS Database preparation pack",
  "Certificate expiry tracking and reminders",
] as const;

const possessionExperienceOptions = [
  "Yes — resolved",
  "Yes — ongoing",
  "Not yet but I'm concerned about it",
  "No",
] as const;

const designPartnerOptions = [
  "Yes — happy to",
  "Maybe — depends on what's involved",
  "No",
] as const;

const defaultDisclaimer =
  "RentProof is an evidence organisation and deadline tracking tool only. It does not provide legal advice and does not guarantee any outcome in court or with the PRS Database. Always seek qualified legal advice before taking possession action.";

export function WaitlistForm({
  disclaimer = defaultDisclaimer,
}: WaitlistFormProps) {
  const [formData, setFormData] = useState<FormState>(initialState);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleChange(
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) {
    const { name, value, type } = event.target;
    const newValue =
      type === "checkbox"
        ? (event.target as HTMLInputElement).checked
        : value;

    setFormData((prev) => {
      const next = { ...prev, [name]: newValue };

      if (name === "managesEngland" && !newValue) {
        return {
          ...next,
          toolsUsed: [],
          toolsUsedOther: "",
          evidencePackTime: "",
          mostValuableFeatures: [],
          possessionExperience: "",
          designPartnerOpenness: "",
        };
      }

      return next;
    });
  }

  function handleMultiSelectChange(
    field: "toolsUsed" | "mostValuableFeatures",
    option: string,
    checked: boolean,
  ) {
    setFormData((prev) => {
      const nextValues = checked
        ? [...prev[field], option]
        : prev[field].filter((item) => item !== option);

      if (field === "toolsUsed" && option === "Other" && !checked) {
        return {
          ...prev,
          toolsUsed: nextValues,
          toolsUsedOther: "",
        };
      }

      return {
        ...prev,
        [field]: nextValues,
      };
    });
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    if (!formData.managesEngland) {
      toast.error("Please confirm you manage properties in England.");
      return;
    }

    setIsSubmitting(true);

    const { error } = await supabase.from("waitlist_submissions").insert({
      full_name: formData.fullName,
      email: formData.email,
      portfolio_size: formData.portfolioSize,
      manages_england: formData.managesEngland,
      biggest_worry: formData.biggestWorry || null,
      tools_used: formData.toolsUsed,
      tools_used_other: formData.toolsUsedOther || null,
      evidence_pack_time: formData.evidencePackTime || null,
      most_valuable_features: formData.mostValuableFeatures,
      possession_experience: formData.possessionExperience || null,
      design_partner_openness: formData.designPartnerOpenness || null,
    });

    setIsSubmitting(false);

    if (error) {
      toast.error("Something went wrong. Please try again.");
      console.error(error);
      return;
    }

    setIsSubmitted(true);
    setFormData(initialState);
    toast.success("You're on the waitlist.");
  }

  if (isSubmitted) {
    return (
      <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-8 text-center">
        <CheckCircle2 className="mx-auto mb-4 h-12 w-12 text-emerald-600" />
        <h3 className="text-2xl font-semibold text-slate-950">Thank you</h3>
        <p className="mt-2 text-slate-700">
          We’ll email you when early access opens.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <p className="text-sm font-medium uppercase tracking-[0.18em] text-emerald-700">
          Join the waitlist
        </p>
        <h3 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950">
          Keep your records ahead of the pressure.
        </h3>
      </div>

      <label className="block">
        <span className="mb-2 block text-sm font-medium text-slate-800">
          Full Name
        </span>
        <input
          required
          name="fullName"
          type="text"
          value={formData.fullName}
          onChange={handleChange}
          className="w-full rounded-xl border border-slate-300 px-4 py-3"
          placeholder="Your name"
        />
      </label>

      <label className="block">
        <span className="mb-2 block text-sm font-medium text-slate-800">
          Email Address
        </span>
        <input
          required
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full rounded-xl border border-slate-300 px-4 py-3"
          placeholder="name@example.com"
        />
      </label>

      <label className="block">
        <span className="mb-2 block text-sm font-medium text-slate-800">
          Portfolio Size
        </span>
        <select
          required
          name="portfolioSize"
          value={formData.portfolioSize}
          onChange={handleChange}
          className="w-full rounded-xl border border-slate-300 px-4 py-3"
        >
          <option value="" disabled>
            Select portfolio size
          </option>
          <option value="1–4">1–4 properties</option>
          <option value="5–10">5–10 properties</option>
          <option value="11–20">11–20 properties</option>
          <option value="21–50">21–50 properties</option>
          <option value="50+">50+ properties</option>
        </select>
      </label>

      <label className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4">
        <input
          required
          name="managesEngland"
          type="checkbox"
          checked={formData.managesEngland}
          onChange={handleChange}
          className="mt-1 h-4 w-4"
        />
        <span className="text-sm leading-7 text-slate-700">
          I manage properties in England
        </span>
      </label>

      <div
        className={`overflow-hidden transition-all duration-200 ease-out ${
          formData.managesEngland
            ? "max-h-[2800px] opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <div className="space-y-5 pt-1">
          <fieldset className="space-y-3">
            <legend className="text-sm font-medium text-slate-800">
              What tools or methods do you currently use to track certificates
              and compliance?
            </legend>
            <div className="space-y-3">
              {toolsUsedOptions.map((option) => (
                <label
                  key={option}
                  className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4"
                >
                  <input
                    type="checkbox"
                    checked={formData.toolsUsed.includes(option)}
                    onChange={(event) =>
                      handleMultiSelectChange(
                        "toolsUsed",
                        option,
                        event.target.checked,
                      )
                    }
                    className="mt-1 h-4 w-4"
                  />
                  <span className="text-sm leading-7 text-slate-700">
                    {option}
                  </span>
                </label>
              ))}
            </div>
            <div
              className={`overflow-hidden transition-all duration-200 ease-out ${
                formData.toolsUsed.includes("Other")
                  ? "max-h-24 opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <label className="block pt-2">
                <input
                  name="toolsUsedOther"
                  type="text"
                  value={formData.toolsUsedOther}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-slate-300 px-4 py-3"
                  placeholder="Please specify"
                />
              </label>
            </div>
          </fieldset>

          <fieldset className="space-y-3">
            <legend className="text-sm font-medium text-slate-800">
              If you needed to serve a Section 8 possession notice tomorrow, how
              long would it take you to pull together a complete evidence pack?
            </legend>
            <div className="space-y-3">
              {evidencePackTimeOptions.map((option) => (
                <label
                  key={option}
                  className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4"
                >
                  <input
                    type="radio"
                    name="evidencePackTime"
                    value={option}
                    checked={formData.evidencePackTime === option}
                    onChange={handleChange}
                    className="mt-1 h-4 w-4"
                  />
                  <span className="text-sm leading-7 text-slate-700">
                    {option}
                  </span>
                </label>
              ))}
            </div>
          </fieldset>

          <fieldset className="space-y-3">
            <legend className="text-sm font-medium text-slate-800">
              Which of these would be most valuable to you? Select all that
              apply.
            </legend>
            <div className="space-y-3">
              {mostValuableFeatureOptions.map((option) => (
                <label
                  key={option}
                  className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4"
                >
                  <input
                    type="checkbox"
                    checked={formData.mostValuableFeatures.includes(option)}
                    onChange={(event) =>
                      handleMultiSelectChange(
                        "mostValuableFeatures",
                        option,
                        event.target.checked,
                      )
                    }
                    className="mt-1 h-4 w-4"
                  />
                  <span className="text-sm leading-7 text-slate-700">
                    {option}
                  </span>
                </label>
              ))}
            </div>
          </fieldset>

          <fieldset className="space-y-3">
            <legend className="text-sm font-medium text-slate-800">
              Have you ever dealt with a possession situation, attempted to
              serve notice, or had a tenant stop paying rent?
            </legend>
            <div className="space-y-3">
              {possessionExperienceOptions.map((option) => (
                <label
                  key={option}
                  className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4"
                >
                  <input
                    type="radio"
                    name="possessionExperience"
                    value={option}
                    checked={formData.possessionExperience === option}
                    onChange={handleChange}
                    className="mt-1 h-4 w-4"
                  />
                  <span className="text-sm leading-7 text-slate-700">
                    {option}
                  </span>
                </label>
              ))}
            </div>
          </fieldset>

          <fieldset className="space-y-3">
            <legend className="text-sm font-medium text-slate-800">
              Would you be open to a 20-minute call and/or sharing anonymised
              documents (a certificate or rent schedule) to help shape this
              tool?
            </legend>
            <div className="space-y-3">
              {designPartnerOptions.map((option) => (
                <label
                  key={option}
                  className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4"
                >
                  <input
                    type="radio"
                    name="designPartnerOpenness"
                    value={option}
                    checked={formData.designPartnerOpenness === option}
                    onChange={handleChange}
                    className="mt-1 h-4 w-4"
                  />
                  <span className="text-sm leading-7 text-slate-700">
                    {option}
                  </span>
                </label>
              ))}
            </div>
          </fieldset>
        </div>
      </div>

      <label className="block">
        <span className="mb-2 block text-sm font-medium text-slate-800">
          What is your biggest current worry about compliance records,
          possession evidence, or the upcoming PRS Database?
        </span>
        <textarea
          name="biggestWorry"
          value={formData.biggestWorry}
          onChange={handleChange}
          rows={4}
          className="w-full rounded-xl border border-slate-300 px-4 py-3"
          placeholder="Optional but helpful"
        />
      </label>

      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
        <div className="flex items-start gap-3">
          <ShieldCheck className="mt-0.5 h-4 w-4 flex-none text-slate-700" />
          <div>
            <p className="text-sm font-semibold text-slate-950">
              Important legal point
            </p>
            <p className="mt-2 text-sm leading-7 text-slate-700">
              {disclaimer}
            </p>
          </div>
        </div>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-md bg-slate-950 py-3 font-medium text-white hover:bg-slate-800 disabled:bg-slate-700"
      >
        {isSubmitting ? "Joining..." : "Join the waitlist"}
      </button>
    </form>
  );
}
