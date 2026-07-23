"use client";

import { useEffect, useRef, useState } from "react";

const CONTACT_EMAIL = "hadesanoye01@gmail.com";

const opportunityTypes = [
  { value: "freelance", label: "Freelance" },
  { value: "full-time", label: "Full-time" },
  { value: "contract", label: "Contract" },
];

const fieldClass =
  "w-full rounded-xl border border-white/10 bg-zinc-950/60 px-4 py-3 text-zinc-100 outline-none transition-shadow placeholder:text-zinc-600 focus:ring-2 focus:ring-white/20";

const ApplyForm = () => {
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");
  const [opportunity, setOpportunity] = useState("freelance");
  const successRef = useRef(null);

  useEffect(() => {
    if (status === "sent") {
      successRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [status]);

  async function onSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    setStatus("loading");
    setError("");

    try {
      const res = await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          opportunity: data.get("opportunity"),
          name: data.get("name"),
          email: data.get("email"),
          message: data.get("message"),
          website: data.get("website"),
        }),
      });

      const payload = await res.json().catch(() => ({}));

      if (!res.ok) {
        throw new Error(payload.error || "Could not send your application.");
      }

      form.reset();
      setOpportunity("freelance");
      setStatus("sent");
    } catch (err) {
      setStatus("error");
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again.",
      );
    }
  }

  if (status === "sent") {
    return (
      <div
        ref={successRef}
        className="w-full rounded-2xl border border-white/10 bg-zinc-900/40 px-6 py-10 text-center"
        role="status"
        aria-live="polite"
      >
        <p className="font-space text-2xl font-bold tracking-tight text-zinc-100">
          Application sent
        </p>
        <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-zinc-400">
          Got it — I usually reply within a day.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-8 text-sm font-semibold text-zinc-300 underline decoration-2 underline-offset-4 hover:text-zinc-100"
        >
          Send another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="w-full space-y-5">
      <fieldset>
        <legend className="mb-3 block text-sm font-semibold text-zinc-200 font-space">
          Opportunity
        </legend>
        <div className="grid grid-cols-3 gap-2">
          {opportunityTypes.map((option) => {
            const active = opportunity === option.value;
            return (
              <label
                key={option.value}
                className={`cursor-pointer rounded-xl border px-2 py-3 text-center text-xs ss:text-sm font-medium font-space transition-colors ${
                  active
                    ? "border-white/25 bg-white/[0.08] text-zinc-100"
                    : "border-white/10 bg-zinc-950/40 text-zinc-500 hover:border-white/20 hover:text-zinc-300"
                }`}
              >
                <input
                  type="radio"
                  name="opportunity"
                  value={option.value}
                  checked={active}
                  onChange={() => setOpportunity(option.value)}
                  className="sr-only"
                />
                {option.label}
              </label>
            );
          })}
        </div>
      </fieldset>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" name="name" required />
        <Field label="Email" name="email" type="email" required />
      </div>

      <label className="block">
        <span className="mb-2 block text-sm font-semibold text-zinc-200 font-space">
          Message
        </span>
        <textarea
          name="message"
          required
          rows={5}
          placeholder="Role, project, timeline — whatever helps."
          className={`${fieldClass} resize-y`}
        />
      </label>

      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden
        className="pointer-events-none absolute -left-[9999px] h-0 w-0 opacity-0"
      />

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full rounded-full btn-silver px-8 py-3.5 text-sm font-semibold font-space disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "loading" ? "Sending…" : "Send application"}
      </button>

      {status === "error" && (
        <p
          className="rounded-xl border border-red-500/25 bg-red-500/10 px-4 py-3 text-sm text-red-300"
          role="alert"
        >
          {error} Or email me at{" "}
          <a className="underline" href={`mailto:${CONTACT_EMAIL}`}>
            {CONTACT_EMAIL}
          </a>
          .
        </p>
      )}
    </form>
  );
};

function Field({ label, name, type = "text", required, placeholder }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-semibold text-zinc-200 font-space">
        {label}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className={fieldClass}
      />
    </label>
  );
}

export default ApplyForm;
