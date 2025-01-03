"use client";

import { useTranslations } from "next-intl";
import React, { useActionState, useEffect } from "react";
import { useFormik } from "formik";
import { ActionUpdateUser } from "../ubah/[userId]/action";
import { UsersFormikEdit } from "../validation/formik-schema-edit";
import { TypeDataUserById } from "../../../../../types/users.types";
import { Input } from "@/components/input";
import FormView from "@/components/form-view";
import { showToast } from "../../../../../lib/utils/show-toast";

function UserEdit({ dataUserById }: { dataUserById: TypeDataUserById }) {
  const t_global = useTranslations("Global");
  const t = useTranslations("UserById");

  // Handle Form Action
  const [message, formAction, isPending] = useActionState(
    (_: any, payload: any) => ActionUpdateUser(dataUserById.id, payload),
    null
  );

  // Formik
  const formik = useFormik({
    initialValues: UsersFormikEdit.initialValues(dataUserById),
    validationSchema: UsersFormikEdit.validationSchema(),
    validateOnMount: true,
    onSubmit: async (values) => {
      console.log(values);
    },
  });
  const values = formik.values;
  const errors = formik.errors;
  const isValid = formik.isValid;

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

export default UserEdit;
