"use client";

import { useState } from "react";
import { CloseIcon, MoonStarIcon } from "@/components/icons/Icon";

type Props = {
  message?: string;
};

export function Character({ message }: Props) {
  const [open, setOpen] = useState(true);
  if (!open) return null;

  return (
    <aside className="character">
      <button
        type="button"
        className="close"
        aria-label="閉じる"
        onClick={() => setOpen(false)}
      >
        <CloseIcon width={16} height={16} />
      </button>
      <div className="head">
        <div className="avatar">
          <MoonStarIcon width={22} height={22} />
        </div>
        <div className="name">
          ミラ
          <small>STAR GUIDE</small>
        </div>
      </div>
      <div className="bubble">
        {message ??
          "こんにちは、ミラだよ。今日のあなたは、ちょっと流れが変わり始めてるみたい。まずは気になる占いから、ゆっくり試してみてね。"}
      </div>
    </aside>
  );
}
