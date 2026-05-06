"use client";

import { useRef, useState } from "react";
import { CameraIcon } from "@/components/icons/Icon";

export function UploadZone() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [fileName, setFileName] = useState<string | null>(null);

  return (
    <div
      className="upload-zone"
      onClick={() => inputRef.current?.click()}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") inputRef.current?.click();
      }}
    >
      <div className="upload-icon">
        <CameraIcon />
      </div>
      <div className="upload-text">
        {fileName ?? "クリックして撮影 / 画像をアップロード"}
      </div>
      <small className="muted">JPEG / PNG / 5MB まで</small>
      <input
        ref={inputRef}
        type="file"
        accept="image/jpeg,image/png"
        hidden
        onChange={(e) => {
          const f = e.target.files?.[0];
          if (f) setFileName(f.name);
        }}
      />
    </div>
  );
}
