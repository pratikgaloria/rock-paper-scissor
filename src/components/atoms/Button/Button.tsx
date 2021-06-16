import React, { HTMLAttributes } from "react";
import classnames from "classnames";

import styles from "./Button.scss";

export type ButtonVariant = "primary" | "outlined" | "plain";

interface ButtonProps {
  variant?: ButtonVariant;
}

const Button: React.FC<ButtonProps & HTMLAttributes<HTMLButtonElement>> = ({
  variant = "primary",
  children,
  className,
  ...buttonProps
}) => {
  return (
    <button
      {...buttonProps}
      className={classnames(
        styles.button,
        styles[`button-${variant}`],
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
