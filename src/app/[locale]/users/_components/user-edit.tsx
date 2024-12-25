"use client";
import { useRouter } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import React, { useActionState, useEffect } from "react";
import { useFormik } from "formik";
import InputText from "@/components/input";
import { ActionUpdateUser } from "../ubah/[userId]/action";
import { showToast } from "../../../../../lib/utils/show-toast";
import { UsersFormik } from "../validation/formik-schema";
import { TypeDataUserById } from "../../../../../types/users.types";
import Button from "@/components/button";

function UserEdit({ dataUserById }: { dataUserById: TypeDataUserById }) {
  const router = useRouter();
  const t_global = useTranslations("Global");
  const t = useTranslations("UserById");
  const [message, formAction, isPending] = useActionState(
    (_: any, payload: any) => ActionUpdateUser(dataUserById.id, payload),
    null
  );

  // Formik
  const formik = useFormik({
    initialValues: UsersFormik.initialValues(dataUserById),
    validationSchema: UsersFormik.validationSchema(),
    onSubmit: async (values) => {
      console.log(values);
    },
  });
  const values = formik.values;
  const errors = formik.errors;
  const isValid = formik.isValid

  // Render input
  const renderInput = [
    {
      name: "firstName",
      value: values.firstName,
    },
    {
      name: "lastName",
      value: values.lastName,
    },
    {
      name: "age",
      value: values.age,
    },
  ];

  // Redirect jika berhasil update
  useEffect(() => {
    if (message?.success) {
      showToast("success", message?.message);
      // router.push('/users')
    } else {
      showToast("error", message?.message);
      // router.push('/users')
    }
  }, [message]);

  return (
    <>
      <form action={formAction}>
        <h1 className="text-center text-2xl uppercase py-4">{t("title")}</h1>
        <div className="border rounded-lg p-5 flex gap-2">
          {renderInput.map((input, index) => {
            const isTypeError = typeof errors[input.name as keyof typeof errors] === 'string'
            return (
              <div key={index}>
              <InputText
                name={input.name}
                defaultValue={input.value}
                onChange={formik.handleChange}
                placeholder={t(`content.${input.name}`)}
                isError={isTypeError}
              />
              <p className="text-error"> {errors[input.name as keyof typeof errors]} </p>
              </div>
            );
          })}
        </div>
        <div className="text-right py-4 flex gap-1 justify-end items-center">
          <Button
            onClick={() => router.push(`/users`)}
          >
            {t_global("back")}
          </Button>
          <Button
            type="submit"
            disabled={isPending || !isValid }
          >
            {t_global("submit")}
          </Button>
        </div>
      </form>
    </>
  );
}

export default UserEdit;
