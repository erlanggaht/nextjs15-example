import classNames from "classnames";
import React, { InputHTMLAttributes } from "react";

type TypeModeInput = {
  default: string | null | undefined,
  success: string,
  error: string
} 

const modeInput: TypeModeInput  = {
default: "input input-bordered",
success: "input input-success",
error: "input input-error"
} 

export const InputText = ({
  name,
  value,
  mode = "default",
  isError,
  className,
  ...props
}: {
  name: string;
  value?: string | number;
  mode?: "default" | "success" | "error"
  isError?: boolean 
  className?: string
} & InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <input
      name={name}
      value={value}
      type="text"
      className={classNames(className, modeInput[mode],{[modeInput.error]: isError})}
      {...props}
    />
  );
};
export default InputText;
