'use client'
import { useRouter } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import React from "react";

function UserEdit({ dataUserById }) {
  const router = useRouter();
  const t_global = useTranslations("Global");
  const t = useTranslations("UserById");

  return (
    <>
      <h1 className="text-center text-2xl uppercase py-4">{t("title")}</h1>
      <div className="border rounded-lg px-5">
        
      </div>

      <div className="text-right px-2 py-4">
        <button
          className="bg-black text-white px-3 py-2 rounded"
          onClick={() => router.push(`/users`)}
        >
          {t_global("back")}
        </button>
      </div>
    </>
  );
}

export default UserEdit;
