"use client";

import classNames from "classnames";
import React, { ButtonHTMLAttributes, ReactNode } from "react";

const variantColor = {
    default: "bg-black text-white",
    ghost: "bg-transparent text-black border"
}

function Button({
  children,
  className,
  variant = "default",
  ...props
}: {
  children: ReactNode
  className?: string;
  variant?: "default" | "ghost";
} & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      type="submit"
      className={classNames(className, "px-3 py-2 rounded disabled:opacity-50", variantColor[variant])}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
