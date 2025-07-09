"use client";

import { useRouter } from "next/navigation";
import { ReactNode, useEffect } from "react";

export default function Modal({ children }: { children: ReactNode }) {
  const router = useRouter();

  // ចុច ESC ដើម្បីបិទ
  useEffect(() => {
    const handler = (e: KeyboardEvent) => e.key === "Escape" && router.back();
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [router]);

  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-black/50">
      <div className="w-full max-w-lg rounded-xl bg-white p-6 shadow-xl">
        {children}
      </div>
    </div>
  );
}
