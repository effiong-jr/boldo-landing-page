import { FC, HTMLAttributes, ReactNode } from "react";
import clsx from "clsx";

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  type?: "button" | "submit" | "reset";
  className?: string;
}

const Button: FC<ButtonProps> = ({ children, type, className, ...props }) => {
  return (
    <button
      className={clsx(
        "rounded-3xl text-dark-blue font-bold px-14 py-4",
        className
      )}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
