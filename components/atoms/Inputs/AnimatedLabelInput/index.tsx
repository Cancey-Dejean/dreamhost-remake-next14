"use client";
import React, { useState } from "react";

type InputProps = {
  label: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export default function AnimatedLabelInput({
  type = "text",
  label,
  ...rest
}: InputProps) {
  const [value, setValue] = useState("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
  }

  return (
    <div className="input-container h-[70px]">
      <input
        className="w-full border-transparent p-4 text-2xl font-semibold leading-none text-black placeholder:text-transparent"
        type={type}
        value={value}
        onChange={handleChange}
        {...rest}
      />
      <label className={value && "filled"}>{label || "Label"}</label>
    </div>
  );
}
