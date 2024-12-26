"use client";
import React, { useActionState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { useFormik } from "formik";
import { Input } from "@/components/input";
import { UsersFormikCreate } from "../validation/formik-schema-create";
import { ActionCreateUser } from "../tambah/action";
import FormView from "@/components/form-view";
import { showToast } from "../../../../../lib/utils/show-toast";

function UserTambah() {
  const t_global = useTranslations("Global");
  const t = useTranslations("UserById");

  // Handle Form Action
  const [message, formAction, isPending] = useActionState(
    (_: any, payload: any) => ActionCreateUser(payload),
    null
  );

  // Formik
  const formik = useFormik({
    initialValues: UsersFormikCreate.initialValues(),
    validationSchema: UsersFormikCreate.validationSchema(),
    validateOnMount: true, // agar validasi saat pertama kali terdetect
    onSubmit: async (values) => {
      console.log(values);
    },
  });
  const errors = formik.errors;
  const isValid = formik.isValid;

  // Render input
  const renderInput = [
    {
      name: "firstName",
      value: "",
    },
    {
      name: "lastName",
      value: "",
    },
    {
      name: "age",
      value: "",
    },
  ];

  // Redirect If Successful Update
  useEffect(() => {
    if (message?.success) {
      showToast("success", message?.message);
    } else {
      showToast("error", message?.message);
    }
  }, [message]);

  return (
    <>
      <FormView
        action={formAction}
        title={`${t_global("edit")} ${t_global("user")}`}
        submitDisabled={isPending || !isValid}
      >
        {renderInput.map((input, index) => {
          const isTypeError =
            typeof errors[input.name as keyof typeof errors] === "string";
          return (
            <div key={index}>
              <Input
                name={input.name}
                defaultValue={input.value}
                onChange={formik.handleChange}
                placeholder={t(`content.${input.name}`)}
                isError={isTypeError}
              />
              <p className="text-error">
                {" "}
                {errors[input.name as keyof typeof errors]}{" "}
              </p>
            </div>
          );
        })}
      </FormView>
    </>
  );
}

export default UserTambah;
