"use client";

import { useState } from "react";
import { LinkIcon, XLogo } from "@/components/icons/Icon";

type Props = {
  shareText: string;
};

export function ShareRow({ shareText }: Props) {
  const [copied, setCopied] = useState(false);

  function copy() {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(shareText).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 1600);
      });
    }
  }

  const xUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}`;

  return (
    <div className="share-row">
      <a
        className="share-btn"
        href={xUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        <XLogo width={14} height={14} /> ポストする
      </a>
      <button type="button" className="share-btn" onClick={copy}>
        <LinkIcon width={14} height={14} />
        {copied ? "コピーしました" : "リンクをコピー"}
      </button>
    </div>
  );
}
