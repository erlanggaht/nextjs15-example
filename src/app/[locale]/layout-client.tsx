"use client";
import { usePathname, useRouter } from "@/i18n/routing";
import React, { ReactNode } from "react";

function LayoutClient({ children,locale }: { children: ReactNode, locale: string }) {
  const router = useRouter()
  const pathName = usePathname()

  return (
    <>
      {/* Ganti Bahasa */}
      <div className="flex gap-2 aboslute top-6">
        <button
          className="bg-black text-white px-3 py-2 rounded disabled:opacity-50"
          onClick={() => router.replace(pathName, { locale: "en" })}
          disabled={locale === "en"}
        >
          English
        </button>
        <button
          className="bg-black text-white px-3 py-2 rounded disabled:opacity-50"
          onClick={() => router.replace(pathName, { locale: "id" })}
          disabled={locale === "id"}
        >
          Indonesia
        </button>
      </div>
      {children}
    </>
  );
}

export default LayoutClient;
