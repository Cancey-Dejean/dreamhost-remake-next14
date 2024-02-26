import React, { ButtonHTMLAttributes, InputHTMLAttributes } from "react";
import { AnimatedLabelInput } from "@/components";
import { FaSearch } from "react-icons/fa";

type InputSubmitProps = {
  label: string;
  btnText?: string | React.ReactNode;
} & InputHTMLAttributes<HTMLInputElement> &
  ButtonHTMLAttributes<HTMLButtonElement>;

export default function InputSubmit({ label, btnText }: InputSubmitProps) {
  return (
    <form>
      <div className="flex items-stretch overflow-hidden rounded-16">
        <div className="input-container flex-1">
          <AnimatedLabelInput label={label} />
        </div>
        <button className="bg-primary px-8 py-[14]" type="submit">
          {btnText || <FaSearch className="text-2xl" />}
        </button>
      </div>
    </form>
  );
}
