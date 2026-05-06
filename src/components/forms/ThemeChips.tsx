"use client";

import { useState } from "react";

type Props = {
  name?: string;
  options?: string[];
  defaultValue?: string;
};

const DEFAULT_OPTIONS = ["総合", "恋愛", "仕事", "金運", "人間関係"];

export function ThemeChips({
  name = "theme",
  options = DEFAULT_OPTIONS,
  defaultValue = "総合",
}: Props) {
  const [value, setValue] = useState(defaultValue);
  return (
    <div className="theme-row" role="radiogroup" aria-label="相談テーマ">
      <input type="hidden" name={name} value={value} />
      {options.map((opt) => (
        <button
          type="button"
          key={opt}
          role="radio"
          aria-checked={value === opt}
          className={`theme-chip${value === opt ? " active" : ""}`}
          onClick={() => setValue(opt)}
        >
          {opt}
        </button>
      ))}
    </div>
  );
}
