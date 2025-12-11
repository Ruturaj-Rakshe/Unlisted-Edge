"use client";

import React from "react";
import { Form, Input, Checkbox } from "@heroui/react";
import Button from "./Button";

export default function PanCardForm() {
  const [submitted, setSubmitted] = React.useState<null | Record<string, any>>(null);
  const [errors, setErrors] = React.useState<Record<string, string>>({});

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));

    let newErrors: Record<string, string> = {};

    if (!data.panFile) newErrors.panFile = "Upload scanned PAN card copy";
    if (!data.panNumber) newErrors.panNumber = "Enter PAN number";
    if (!data.name) newErrors.name = "Enter full name";
    if (!data.father) newErrors.father = "Enter father's name";
    if (!data.dob) newErrors.dob = "Enter date of birth";
    if (data.terms !== "true") newErrors.terms = "Please accept the terms";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setSubmitted(data);
  };

  return (
    <div className="flex justify-center w-full mt-10">
      <Form
        className="w-full max-w-[520px] space-y-5 border border-gray-300 p-8 rounded-2xl shadow-lg bg-white"
        validationErrors={errors}
        onSubmit={onSubmit}
        onReset={() => setSubmitted(null)}
      >
        <h1 className="text-3xl font-bold text-center mb-2 zalando-sans">
          PAN Card Verification
        </h1>

        {/* Upload PAN Copy */}
        <Input
          isRequired
          type="file"
          accept="image/*,application/pdf"
          name="panFile"
          errorMessage={errors.panFile}
        />

        {/* PAN Number */}
        <Input
          isRequired
          name="panNumber"
          placeholder="Enter PAN Number"
          errorMessage={errors.panNumber}
        />

        {/* Full Name */}
        <Input
          isRequired
          name="name"
          placeholder="Enter Full Name"
          errorMessage={errors.name}
        />

        {/* Father's Name */}
        <Input
          isRequired
          name="father"
          placeholder="Enter Father's Name"
          errorMessage={errors.father}
        />

        {/* DOB */}
        <Input
          isRequired
          type="date"
          name="dob"
          errorMessage={errors.dob}
        />

        {/* Terms */}
        <div className="flex items-center gap-2 mt-2">
          <Checkbox name="terms" value="true" isInvalid={!!errors.terms} />
          <span className="text-[14px]">I confirm the information is accurate.</span>
          {errors.terms && <p className="text-red-600 text-sm">{errors.terms}</p>}
        </div>

        <div className="w-full flex gap-4 items-center justify-center pt-2">
          <Button type="submit" label="Submit" className="rounded-xl w-28 h-10" />
          <Button type="reset" label="Reset" className="rounded-xl w-28 h-10" />
        </div>

        {submitted && (
          <div className="text-sm text-gray-700 mt-4 bg-gray-50 p-4 rounded-lg border">
            <span className="font-medium">Submitted Data:</span>
            <pre className="whitespace-pre-wrap mt-2 text-gray-600">
              {JSON.stringify(submitted, null, 2)}
            </pre>
          </div>
        )}
      </Form>
    </div>
  );
}
