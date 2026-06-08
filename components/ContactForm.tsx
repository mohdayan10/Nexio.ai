"use client";

import { useRef, useState } from "react";
import { ChevronDown, Check, ArrowUpRight } from "lucide-react";

const COUNTRIES = [
  "United States", "United Kingdom", "Canada", "Australia", "India",
  "Germany", "France", "Netherlands", "Singapore", "United Arab Emirates",
  "Japan", "Brazil", "Other",
];

const INDUSTRIES = [
  "Banking & Financial Services", "Healthcare", "Retail & E-commerce",
  "Technology", "Telecommunications", "Insurance", "Manufacturing",
  "Government & Public Sector", "Travel & Hospitality", "Other",
];

const REACH = [
  "Sales — talk to our team", "Product support", "Partnerships",
  "Press & media", "Careers", "Something else",
];

const PRODUCTS = [
  "Agent Platform { Artemis }", "AI for Service", "AI for Work",
  "Agent Marketplace", "Pre-built Applications", "Not sure yet",
];

type Fields = {
  firstName: string;
  lastName: string;
  jobTitle: string;
  country: string;
  email: string;
  industry: string;
  reach: string;
  product: string;
  message: string;
  consent: boolean;
};

const EMPTY: Fields = {
  firstName: "", lastName: "", jobTitle: "", country: "", email: "",
  industry: "", reach: "", product: "", message: "", consent: false,
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function ContactForm() {
  const [values, setValues] = useState<Fields>(EMPTY);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
  const formRef = useRef<HTMLFormElement>(null);

  function set<K extends keyof Fields>(key: K, value: Fields[K]) {
    setValues((v) => ({ ...v, [key]: value }));
    setErrors((e) => {
      if (!e[key]) return e;
      const next = { ...e };
      delete next[key];
      return next;
    });
  }

  function validate(): Record<string, string> {
    const e: Record<string, string> = {};
    (Object.keys(EMPTY) as (keyof Fields)[]).forEach((k) => {
      if (k === "consent") return;
      if (!String(values[k]).trim()) e[k] = "Please complete this required field.";
    });
    if (values.email.trim() && !EMAIL_RE.test(values.email.trim()))
      e.email = "Please enter a valid email address.";
    if (!values.consent) e.consent = "Please accept to continue.";
    return e;
  }

  async function onSubmit(ev: React.FormEvent) {
    ev.preventDefault();
    const e = validate();
    if (Object.keys(e).length > 0) {
      setErrors(e);
      const first = formRef.current?.querySelector<HTMLElement>("[data-error='true']");
      first?.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }
    setStatus("submitting");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setErrors(data.errors ?? { form: "Something went wrong. Please try again." });
        setStatus("idle");
        return;
      }
      setStatus("success");
    } catch {
      setErrors({ form: "Network error. Please try again." });
      setStatus("idle");
    }
  }

  if (status === "success") {
    return (
      <div className="mx-auto max-w-xl rounded-3xl border border-slate-200 bg-white p-10 text-center shadow-sm">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#14171f]">
          <Check className="h-7 w-7 text-[#bff05a]" />
        </div>
        <h2 className="mt-6 text-2xl font-semibold text-[#14171f]">Thanks — you&apos;re in.</h2>
        <p className="mt-3 text-slate-500">
          We&apos;ve received your request and a member of the Nexio team will reach out
          within one business day.
        </p>
        <a href="/" className="btn-ko mx-auto mt-8 px-5 py-3">
          Back to home <span className="dot" />
        </a>
      </div>
    );
  }

  return (
    <form ref={formRef} onSubmit={onSubmit} noValidate className="mx-auto max-w-xl">
      <div className="grid gap-x-6 gap-y-7 sm:grid-cols-2">
        <Field id="firstName" label="First name" error={errors.firstName}>
          <input
            id="firstName"
            className={inputCls(errors.firstName)}
            placeholder="First name*"
            value={values.firstName}
            onChange={(e) => set("firstName", e.target.value)}
          />
        </Field>
        <Field id="lastName" label="Last name" error={errors.lastName}>
          <input
            id="lastName"
            className={inputCls(errors.lastName)}
            placeholder="Last name*"
            value={values.lastName}
            onChange={(e) => set("lastName", e.target.value)}
          />
        </Field>
      </div>

      <div className="mt-7 grid gap-7">
        <Field id="jobTitle" label="Job title" error={errors.jobTitle}>
          <input
            id="jobTitle"
            className={inputCls(errors.jobTitle)}
            placeholder="Job title*"
            value={values.jobTitle}
            onChange={(e) => set("jobTitle", e.target.value)}
          />
        </Field>

        <Field id="country" label="Country" error={errors.country}>
          <Select
            id="country"
            placeholder="Country*"
            error={errors.country}
            options={COUNTRIES}
            value={values.country}
            onChange={(v) => set("country", v)}
          />
        </Field>

        <Field id="email" label="Business email address" error={errors.email}>
          <input
            id="email"
            type="email"
            className={inputCls(errors.email)}
            placeholder="Business email address*"
            value={values.email}
            onChange={(e) => set("email", e.target.value)}
          />
        </Field>

        <Field id="industry" label="Industry" error={errors.industry}>
          <Select
            id="industry"
            placeholder="Industry*"
            error={errors.industry}
            options={INDUSTRIES}
            value={values.industry}
            onChange={(v) => set("industry", v)}
          />
        </Field>

        <Field id="reach" label="I am trying to reach" error={errors.reach}>
          <Select
            id="reach"
            placeholder="I am trying to reach...*"
            error={errors.reach}
            options={REACH}
            value={values.reach}
            onChange={(v) => set("reach", v)}
          />
        </Field>

        <Field id="product" label="Product of interest" error={errors.product}>
          <Select
            id="product"
            placeholder="Product of interest*"
            error={errors.product}
            options={PRODUCTS}
            value={values.product}
            onChange={(v) => set("product", v)}
          />
        </Field>

        <Field id="message" label="Anything else" error={errors.message}>
          <textarea
            id="message"
            rows={3}
            className={inputCls(errors.message) + " resize-y"}
            placeholder="Anything else you would like to tell us?*"
            value={values.message}
            onChange={(e) => set("message", e.target.value)}
          />
        </Field>
      </div>

      <div className="mt-8" data-error={errors.consent ? "true" : undefined}>
        <label className="flex items-start gap-3 text-sm text-slate-600">
          <input
            type="checkbox"
            checked={values.consent}
            onChange={(e) => set("consent", e.target.checked)}
            className="mt-0.5 h-4 w-4 shrink-0 rounded border-slate-300 text-[#14171f] focus:ring-[#14171f]"
          />
          <span>
            By submitting, I consent to receive relevant email communication from Nexio in
            accordance with the{" "}
            <a href="#" className="font-medium text-[#14171f] underline">Privacy Policy</a>{" "}
            and understand I can opt out at any time.*
          </span>
        </label>
        {errors.consent && <FieldError>{errors.consent}</FieldError>}
      </div>

      {errors.form && (
        <p className="mt-4 font-mono text-[11px] font-semibold uppercase tracking-wider text-red-500">
          {errors.form}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="btn-k mt-8 px-6 py-3 disabled:opacity-60"
      >
        {status === "submitting" ? "Submitting…" : "Submit"}
        {status === "submitting" ? <span className="dot" /> : <ArrowUpRight className="h-3.5 w-3.5" />}
      </button>
    </form>
  );
}

function inputCls(error?: string) {
  return [
    "w-full border-0 border-b bg-transparent py-3 text-[15px] text-[#14171f]",
    "placeholder:text-slate-400 focus:outline-none focus:ring-0",
    error ? "border-red-500 focus:border-red-500" : "border-slate-300 focus:border-[#14171f]",
  ].join(" ");
}

function Field({
  id, label, error, children,
}: { id: string; label: string; error?: string; children: React.ReactNode }) {
  return (
    <div data-error={error ? "true" : undefined}>
      <label htmlFor={id} className="sr-only">{label}</label>
      {children}
      {error && <FieldError>{error}</FieldError>}
    </div>
  );
}

function FieldError({ children }: { children: React.ReactNode }) {
  return (
    <p className="mt-1.5 text-right font-mono text-[10px] font-semibold uppercase tracking-wider text-red-500">
      {children}
    </p>
  );
}

function Select({
  id, placeholder, options, value, error, onChange,
}: {
  id: string;
  placeholder: string;
  options: string[];
  value: string;
  error?: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="relative">
      <select
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={
          inputCls(error) +
          " appearance-none pr-8 " +
          (value ? "text-[#14171f]" : "text-slate-400")
        }
      >
        <option value="" disabled>{placeholder}</option>
        {options.map((o) => (
          <option key={o} value={o} className="text-[#14171f]">{o}</option>
        ))}
      </select>
      <ChevronDown className="pointer-events-none absolute right-1 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
    </div>
  );
}
