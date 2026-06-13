"use client";

import { CheckCircle2, ImagePlus } from "lucide-react";
import { FormEvent, ReactNode, useState } from "react";

export function MockForm({
  children,
  buttonLabel,
  successTitle = "You’re all set!",
  successText,
}: {
  children: ReactNode;
  buttonLabel: string;
  successTitle?: string;
  successText: string;
}) {
  const [submitted, setSubmitted] = useState(false);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  if (submitted) {
    return (
      <div className="success-card">
        <CheckCircle2 size={46} />
        <h2>{successTitle}</h2>
        <p>{successText}</p>
        <button className="button button-secondary" onClick={() => setSubmitted(false)}>
          Submit another
        </button>
      </div>
    );
  }

  return (
    <form className="form-card" onSubmit={submit}>
      {children}
      <button className="button button-primary button-full" type="submit">
        {buttonLabel}
      </button>
      <p className="form-fine-print">
        By submitting, you agree that CARL may contact you about this request. No spam.
      </p>
    </form>
  );
}

export function Field({
  label,
  name,
  placeholder,
  type = "text",
  required = true,
}: {
  label: string;
  name: string;
  placeholder?: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="field">
      <span>{label}</span>
      <input name={name} type={type} placeholder={placeholder} required={required} />
    </label>
  );
}

export function SelectField({
  label,
  name,
  children,
}: {
  label: string;
  name: string;
  children: ReactNode;
}) {
  return (
    <label className="field">
      <span>{label}</span>
      <select name={name} required defaultValue="">
        <option value="" disabled>
          Select one
        </option>
        {children}
      </select>
    </label>
  );
}

export function TextAreaField({
  label,
  name,
  placeholder,
}: {
  label: string;
  name: string;
  placeholder: string;
}) {
  return (
    <label className="field">
      <span>{label}</span>
      <textarea name={name} placeholder={placeholder} rows={5} required />
    </label>
  );
}

export function PhotoUpload() {
  return (
    <label className="photo-upload">
      <ImagePlus size={28} />
      <span>
        <strong>Add photos</strong>
        <small>JPG or PNG · up to 5 photos</small>
      </span>
      <input type="file" accept="image/*" multiple />
    </label>
  );
}


export function LeadSourceField() {
  return (
    <SelectField label="How did you hear about CARL?" name="leadSource">
      <option>Facebook</option><option>Flyer / QR code</option><option>Yard sign</option>
      <option>Google</option><option>Referral</option><option>Other</option>
    </SelectField>
  );
}
