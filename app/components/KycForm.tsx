"use client";

import React from "react";
import {
  Form,
  Input,
  Select,
  SelectItem,
  Checkbox,
} from "@heroui/react";
import Button from "./Button";

export default function KycForm() {
  const [submitted, setSubmitted] = React.useState<null | Record<string, any>>(null);
  const [errors, setErrors] = React.useState<Record<string, string>>({});

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));

    let newErrors: Record<string, string> = {};

    if (!data.front) newErrors.front = "Upload front side of Aadhaar";
    if (!data.back) newErrors.back = "Upload back side of Aadhaar";
    if (!data.name) newErrors.name = "Enter full name";
    if (!data.address) newErrors.address = "Enter your address";
    if (!data.dob) newErrors.dob = "Enter date of birth";
    if (!data.gender) newErrors.gender = "Select gender";
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
          KYC Verification
        </h1>
        <p className="text-center text-gray-600 text-sm mb-6">
          Upload your Aadhaar and fill your details for identity verification.
        </p>

        {/* Aadhaar Front */}
        <Input
          isRequired
          type="file"
          accept="image/*,application/pdf"
          name="front"
          errorMessage={errors.front}
        />

        {/* Aadhaar Back */}
        <Input
          isRequired
          type="file"
          accept="image/*,application/pdf"
          name="back"
          errorMessage={errors.back}
        />

        {/* Name */}
        <Input
          isRequired
          name="name"
          placeholder="Enter your full name"
          errorMessage={errors.name}
        />

        {/* DOB */}
        <Input
          isRequired
          type="date"
          name="dob"
          errorMessage={errors.dob}
        />

        {/* Gender */}
        {/* Gender */}
<div className="flex flex-col gap-2">
  <label className="text-sm font-medium">Gender *</label>

  <div className="flex items-center justify-between gap-4">
    {["male", "female", "other"].map((g) => (
      <label
        key={g}
        className={`
          flex flex-col items-center cursor-pointer select-none
          w-20 py-3 rounded-full border transition-all
          ${errors.gender ? "border-red-500" : "border-gray-300"}
          peer
        `}
      >
        <input
          type="radio"
          name="gender"
          value={g}
          className="hidden peer"
        />

        <div
          className={`
            w-10 h-10 flex items-center justify-center rounded-full text-lg font-bold
            bg-gray-200 peer-checked:bg-blue-600 peer-checked:text-white
            transition-all
          `}
        >
          {g === "male" && "M"}
          {g === "female" && "F"}
          {g === "other" && "O"}
        </div>

        <span className="text-xs mt-1 capitalize">{g}</span>
      </label>
    ))}
  </div>

  {errors.gender && <p className="text-red-600 text-sm">{errors.gender}</p>}
</div>


        {/* Address */}
        <Input
          isRequired
          name="address"
          placeholder="Enter address as per Aadhaar"
          errorMessage={errors.address}
        />

        {/* Terms */}
        <div className="flex items-center gap-2 mt-2">
  <Checkbox
  isRequired
  name="terms"
  value="true"
  isInvalid={!!errors.terms}
  className=""
>
</Checkbox>
 <span className="text-[14px]">I confirm that the information submitted is accurate.</span>
{errors.terms && <p className="text-red-600 text-sm">{errors.terms}</p>}
</div>

        {/* Buttons */}
        <div className="w-full flex gap-4 items-center justify-center pt-2">
          <Button type="submit" label="Submit" className="rounded-xl w-28 h-10 hover:bg-[hsl(213,67%,24%)]" />
          <Button type="reset" label="Reset" className="rounded-xl w-28 h-10 hover:bg-[hsl(213,67%,24%)]" />
        </div>

        {/* Submitted Data */}
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
