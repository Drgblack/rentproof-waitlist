"use client";

import type { ChangeEvent, FormEvent } from "react";
import { useState } from "react";
import { CheckCircle2, ShieldCheck } from "lucide-react";
import { toast } from "react-hot-toast";

type WaitlistFormProps = {
  disclaimer: string;
  onSubmit?: (payload: WaitlistSubmission) => Promise<void> | void;
};

export type WaitlistSubmission = {
  fullName: string;
  email: string;
  portfolioSize: string;
  englandOnly: boolean;
  biggestWorry: string;
};

type FormState = WaitlistSubmission;

const initialState: FormState = {
  fullName: "",
  email: "",
  portfolioSize: "",
  englandOnly: false,
  biggestWorry: "",
};

async function submitWaitlist(payload: WaitlistSubmission) {
  console.log("RentProof waitlist submission", payload);
}

export function WaitlistForm({
  disclaimer,
  onSubmit = submitWaitlist,
}: WaitlistFormProps) {
  const [formData, setFormData] = useState<FormState>(initialState);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleChange<
    T extends HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement,
  >(event: ChangeEvent<T>) {
    const { name, value } = event.target;
    const nextValue =
      event.target instanceof HTMLInputElement &&
      event.target.type === "checkbox"
        ? event.target.checked
        : value;

    setFormData((current) => ({
      ...current,
      [name]: nextValue,
    }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!formData.englandOnly) {
      toast.error("Please confirm that you manage properties in England.");
      return;
    }

    setIsSubmitting(true);

    try {
      await onSubmit(formData);
      setIsSubmitted(true);
      setFormData(initialState);
      toast.success("You are on the waitlist.");
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  if (isSubmitted) {
    return (
      <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-8">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-emerald-700 shadow-sm">
          <CheckCircle2 className="h-6 w-6" aria-hidden="true" />
        </div>
        <h3 className="mt-5 text-2xl font-semibold text-slate-950">
          Thank you
        </h3>
        <p className="mt-3 text-base leading-8 text-slate-700">
          We’ll email you when early access opens.
        </p>
        <button
          type="button"
          onClick={() => setIsSubmitted(false)}
          className="mt-6 inline-flex min-h-11 items-center justify-center rounded-md border border-slate-300 px-4 py-2 text-sm font-medium text-slate-800 transition hover:border-slate-400 hover:bg-white"
        >
          Submit another response
        </button>
        <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-5">
          <div className="flex items-start gap-3">
            <ShieldCheck
              className="mt-0.5 h-4 w-4 flex-none text-slate-700"
              aria-hidden="true"
            />
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
        <p className="mt-3 text-sm leading-7 text-slate-600">
          Tell us about your portfolio and what is causing the most concern
          right now.
        </p>
      </div>

      <label className="block">
        <span className="mb-2 block text-sm font-medium text-slate-800">
          Full Name
        </span>
        <input
          required
          name="fullName"
          type="text"
          autoComplete="name"
          value={formData.fullName}
          onChange={handleChange}
          className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
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
          autoComplete="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
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
          className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-950 outline-none transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
        >
          <option value="" disabled>
            Select portfolio size
          </option>
          <option value="1–4">1–4</option>
          <option value="5–10">5–10</option>
          <option value="11–20">11–20</option>
          <option value="21–50">21–50</option>
          <option value="50+">50+</option>
        </select>
      </label>

      <label className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4">
        <input
          required
          name="englandOnly"
          type="checkbox"
          checked={formData.englandOnly}
          onChange={handleChange}
          className="mt-1 h-4 w-4 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500"
        />
        <span className="text-sm leading-7 text-slate-700">
          I manage properties in England
        </span>
      </label>

      <label className="block">
        <span className="mb-2 block text-sm font-medium text-slate-800">
          What is your biggest current worry about compliance records,
          possession evidence, or the upcoming PRS Database?
        </span>
        <textarea
          name="biggestWorry"
          value={formData.biggestWorry}
          onChange={handleChange}
          rows={5}
          className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
          placeholder="Optional, but helpful."
        />
      </label>

      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
        <div className="flex items-start gap-3">
          <ShieldCheck
            className="mt-0.5 h-4 w-4 flex-none text-slate-700"
            aria-hidden="true"
          />
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
        className="inline-flex min-h-12 w-full items-center justify-center rounded-md bg-slate-950 px-6 py-3 text-base font-medium text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:bg-slate-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-950"
      >
        {isSubmitting ? "Joining..." : "Join the waitlist"}
      </button>
    </form>
  );
}
