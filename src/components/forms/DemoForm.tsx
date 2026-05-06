"use client";

import { useRouter } from "next/navigation";
import { useState, type FormEvent, type ReactNode } from "react";

type Props = {
  type: string;
  children: ReactNode;
  submitLabel?: string;
};

/**
 * デモ用フォーム。実装としては送信を抑制し /result/[type] へ遷移させる。
 * 本実装では `POST /api/readings` 呼び出し → 取得した readingId へ遷移する想定。
 */
export function DemoForm({ type, children, submitLabel = "占う" }: Props) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    // デモ：1.4秒の演出後に結果ページへ
    setTimeout(() => {
      router.push(`/result/${type}`);
    }, 1400);
  }

  return (
    <form className="form-card" onSubmit={handleSubmit}>
      {children}
      <button
        type="submit"
        className="btn btn-primary btn-lg btn-block"
        disabled={loading}
      >
        {loading ? "星々が応えています…" : submitLabel}
      </button>
      <p className="disclaimer-note" style={{ marginTop: 18 }}>
        本占いは医療・法律・投資・人生の重大決定の代替ではありません。
      </p>
    </form>
  );
}
