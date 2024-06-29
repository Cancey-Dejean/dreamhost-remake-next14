"use client";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { ChangeEvent, useTransition } from "react";

export default function Select() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const activeLocale = useLocale();

  const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const locale = e.target.value;
    startTransition(() => {
      router.replace(`/${locale}`);
    });
    console.log(e.target.value);
  };
  return (
    <div>
      <label>
        change Language
        <select
          defaultValue={activeLocale}
          onChange={onSelectChange}
          disabled={isPending}
        >
          <option value="en">English</option>
          <option value="id">Indonesia</option>
        </select>
      </label>
    </div>
  );
}
