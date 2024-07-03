"use client";

import { useState } from "react";

export default function FaqItem() {
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the FAQ content visibility
  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div
      className="cursor-pointer border-t py-10 last:border-b"
      onClick={toggleOpen}
      aria-expanded={isOpen ? "true" : "false"}
    >
      <button
        type="button"
        className="flex w-full items-center justify-between gap-4"
      >
        <h3 className="text-xl font-bold">Question</h3>
        <div className="text-2xl font-bold">{isOpen ? "-" : "+"}</div>{" "}
        {/* Change icon based on state */}
      </button>
      {/* Toggle class based on isOpen state to show/hide content */}
      <div className={`${isOpen ? "block pt-10" : "hidden"}`}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quasi
        doloribus autem asperiores distinctio inventore animi officiis, amet
        aspernatur! Illum.
      </div>
    </div>
  );
}
