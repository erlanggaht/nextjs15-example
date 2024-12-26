'use client'

import React, { FormHTMLAttributes, HTMLAttributes, ReactNode, useActionState, useEffect } from "react";
import { Button } from "../button";
import { useTranslations } from "next-intl";

type TFormView = {
  children?: ReactNode;
  title?: string;
  submitDisabled: boolean ,
  handleBack?: () => void;
};

function FormView({
  children,
  title = "",
  submitDisabled,
  handleBack,
  ...params
}: TFormView & FormHTMLAttributes<HTMLFormElement>) {
  const t_global = useTranslations("Global");

  // Conditional Form Action 

  return (
    <>
      <form {...params}>
        <h1 className="text-center text-2xl uppercase py-4">{title}</h1>
        <div className="border rounded-lg p-5 flex gap-2">{children}</div>
        <div className="text-right py-4 flex gap-1 justify-end items-center">
          {handleBack && 
          <Button onClick={handleBack}>{t_global("back")}</Button>
          }
          <Button type="submit" disabled={submitDisabled}>
            {t_global("submit")}
          </Button>
        </div>
      </form>
    </>
  );
}

export default FormView;
