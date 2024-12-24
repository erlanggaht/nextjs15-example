"use client";
import { useRouter } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import React from "react";
import { TypeDataUserById } from "../lihat/[...userId]/page";

function UserView({ dataUserById }: { dataUserById: TypeDataUserById }) {
  const router = useRouter();
  const t_global = useTranslations("Global");
  const t = useTranslations("UserById");

  // Render detail data
  const detailDatas = [
    {
      title: "firstName",
      value: dataUserById?.firstName,
    },
    {
      title: "lastName",
      value: dataUserById?.lastName,
    },
    {
      title: "age",
      value: dataUserById?.age,
    },
    {
      title: "phone",
      value: dataUserById?.phone,
    },
    {
      title: "address",
      value: `${dataUserById?.address?.city} - ${dataUserById?.address?.country} `,
    },
    {
      title: "email",
      value: dataUserById?.email,
    },
  ];

  return (
    <>
      <h1 className="text-center text-2xl uppercase py-4">{t("title")}</h1>
      <div className="border rounded-lg px-5">
        {detailDatas.map((data, index) => {
          return (
            <div key={index} className="grid grid-cols-3 py-3">
              <div className="col-span-1 font-semibold">{t(`content.${data.title}`)}</div>
              <div>{data.value}</div>
            </div>
          );
        })}
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

export default UserView;
