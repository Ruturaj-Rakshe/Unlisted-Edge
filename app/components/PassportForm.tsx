"use client";

import React from "react";
import { Form, Input, Checkbox } from "@heroui/react";
import Button from "./Button";

export default function PassportForm() {
  const [submitted, setSubmitted] = React.useState<null | Record<string, any>>(null);
  const [errors, setErrors] = React.useState<Record<string, string>>({});

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));

    let newErrors: Record<string, string> = {};

    if (!data.passportFile) newErrors.passportFile = "Upload scanned passport copy";
    if (!data.passportNumber) newErrors.passportNumber = "Enter passport number";
    if (!data.name) newErrors.name = "Enter full name";
    if (!data.nationality) newErrors.nationality = "Enter nationality";
    if (!data.dob) newErrors.dob = "Enter date of birth";
    if (!data.expiry) newErrors.expiry = "Enter passport expiry date";
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
          Passport Verification
        </h1>

        {/* Upload Passport Copy */}
        <Input
          isRequired
          type="file"
          accept="image/*,application/pdf"
          name="passportFile"
          errorMessage={errors.passportFile}
        />

        {/* Passport Number */}
        <Input
          isRequired
          name="passportNumber"
          placeholder="Enter Passport Number"
          errorMessage={errors.passportNumber}
        />

        {/* Full Name */}
        <Input
          isRequired
          name="name"
          placeholder="Enter Full Name"
          errorMessage={errors.name}
        />

        {/* Nationality */}
        <Input
          isRequired
          name="nationality"
          placeholder="Enter Nationality"
          errorMessage={errors.nationality}
        />

        {/* DOB */}
        <Input
          isRequired
          type="date"
          name="dob"
          errorMessage={errors.dob}
        />

        {/* Expiry Date */}
        <Input
          isRequired
          type="date"
          name="expiry"
          errorMessage={errors.expiry}
        />

        {/* Terms */}
        <div className="flex items-center gap-2 mt-2">
          <Checkbox name="terms" value="true" isInvalid={!!errors.terms} />
          <span className="text-[14px]">I confirm the information is accurate.</span>
          {errors.terms && <p className="text-red-600 text-sm">{errors.terms}</p>}
        </div>

        {/* Buttons */}
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
